import { EventRecord } from '@polkadot/types/interfaces/system'
import { assign, createMachine } from 'xstate'

import {
  isTransactionCanceled,
  isTransactionError,
  isTransactionSuccess,
  transactionMachine,
} from '@/common/model/machines'
import { EmptyObject } from '@/common/types'

import { StakeStepFormFields } from './StakeStep'

interface ApplyForRoleContext {
  stake?: StakeStepFormFields
  answers?: Record<number, string>
  transactionEvents?: EventRecord[]
}

type ValidStakeState = { stake: Required<StakeStepFormFields> }
type ValidFormState = ValidStakeState & { answers: Record<number, string> }
type AfterTransactionState = ValidFormState & { transactionEvents: EventRecord[] }

type ApplyForRoleState =
  | { value: 'requirementsVerification'; context: EmptyObject }
  | { value: 'requirementsFailed'; context: EmptyObject }
  | { value: 'stake'; context: EmptyObject }
  | { value: 'form'; context: ValidStakeState }
  | { value: 'beforeTransaction'; context: ValidFormState }
  | { value: 'bindStakingAccount'; context: ValidFormState }
  | { value: 'transaction'; context: ValidFormState }
  | { value: 'success'; context: AfterTransactionState }
  | { value: 'error'; context: AfterTransactionState }

type ValidStakeStepEvent = {
  type: 'VALID'
  stake: Required<StakeStepFormFields>
}
type ValidApplicationStepEvent = {
  type: 'VALID'
  answers: Record<number, string>
}
export type ApplyForRoleEvent =
  | { type: 'FAIL' }
  | { type: 'PASS' }
  | ValidStakeStepEvent
  | ValidApplicationStepEvent
  | { type: 'BOUND' }
  | { type: 'UNBOUND' }

export const applyForRoleMachine = createMachine<ApplyForRoleContext, ApplyForRoleEvent, ApplyForRoleState>({
  initial: 'requirementsVerification',
  states: {
    requirementsVerification: {
      on: {
        FAIL: 'requirementsFailed',
        PASS: 'stake',
      },
    },
    requirementsFailed: { type: 'final' },
    stake: {
      meta: { isStep: true, stepTitle: 'Stake' },
      on: {
        VALID: {
          target: 'form',
          actions: assign({
            stake: (context, event) => (event as ValidStakeStepEvent).stake,
          }),
        },
      },
    },
    form: {
      meta: { isStep: true, stepTitle: 'Form' },
      on: {
        VALID: {
          target: 'beforeTransaction',
          actions: assign({
            answers: (context, event) => (event as ValidApplicationStepEvent).answers,
          }),
        },
      },
    },
    beforeTransaction: {
      id: 'beforeTransaction',
      on: {
        BOUND: 'transaction',
        UNBOUND: 'bindStakingAccount',
      },
    },
    bindStakingAccount: {
      invoke: {
        id: 'bindStakingAccount',
        src: transactionMachine,
        onDone: [
          {
            target: 'transaction',
            actions: assign({ transactionEvents: (context, event) => event.data.events }),
            cond: isTransactionSuccess,
          },
          {
            target: 'error',
            actions: assign({ transactionEvents: (context, event) => event.data.events }),
            cond: isTransactionError,
          },
          {
            target: 'canceled',
            cond: isTransactionCanceled,
          },
        ],
      },
    },
    transaction: {
      meta: { isStep: true, stepTitle: 'Submit application' },
      invoke: {
        id: 'transaction',
        src: transactionMachine,
        onDone: [
          {
            target: 'success',
            actions: assign({ transactionEvents: (context, event) => event.data.events }),
            cond: isTransactionSuccess,
          },
          {
            target: 'error',
            actions: assign({ transactionEvents: (context, event) => event.data.events }),
            cond: isTransactionError,
          },
          {
            target: 'canceled',
            cond: isTransactionCanceled,
          },
        ],
      },
    },
    success: { type: 'final' },
    error: { type: 'final' },
    canceled: { type: 'final' },
  },
})
