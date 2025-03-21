import { createType } from '@joystream/types'
import { cryptoWaitReady } from '@polkadot/util-crypto'
import { fireEvent, render, screen } from '@testing-library/react'
import BN from 'bn.js'
import { set } from 'lodash'
import React from 'react'

import { RecoverBalanceModal, RecoverBalanceModalCall } from '@/accounts/modals/RecoverBalance'
import { AccountsContext } from '@/accounts/providers/accounts/context'
import { UseAccounts } from '@/accounts/providers/accounts/provider'
import { ApiContext } from '@/common/providers/api/context'
import { ModalContext } from '@/common/providers/modal/context'
import { ModalCallData, UseModal } from '@/common/providers/modal/types'
import { MembershipContext } from '@/memberships/providers/membership/context'
import { MyMemberships } from '@/memberships/providers/membership/provider'
import { seedMembers } from '@/mocks/data'

import { alice, bob } from '../../_mocks/keyring'
import { getMember } from '../../_mocks/members'
import { MockKeyringProvider, MockQueryNodeProviders } from '../../_mocks/providers'
import { setupMockServer } from '../../_mocks/server'
import {
  stubApi,
  stubDefaultBalances,
  stubTransaction,
  stubTransactionFailure,
  stubTransactionSuccess,
} from '../../_mocks/transactions'

describe('UI: RecoverBalanceModal', () => {
  let useAccounts: UseAccounts
  const api = stubApi()
  const server = setupMockServer({ noCleanupAfterEach: true })
  let tx: any

  beforeAll(async () => {
    await cryptoWaitReady()
    seedMembers(server.server, 2)
  })

  let useModal: UseModal<ModalCallData<RecoverBalanceModalCall>>

  const useMyMemberships: MyMemberships = {
    active: undefined,
    members: [],
    setActive: (member) => (useMyMemberships.active = member),
    isLoading: false,
    hasMembers: true,
    helpers: {
      getMemberIdByBoundAccountAddress: () => undefined,
    },
  }

  beforeEach(async () => {
    stubDefaultBalances(api)
    useMyMemberships.setActive(getMember('alice'))
    tx = stubTransaction(api, 'api.tx.council.releaseCandidacyStake')
    useAccounts = {
      isLoading: false,
      hasAccounts: true,
      allAccounts: [alice, bob],
    }
    useModal = {
      hideModal: jest.fn(),
      showModal: jest.fn(),
      modal: 'RecoverBalance',
      modalData: {
        lock: {
          amount: new BN(300),
          type: 'Council Candidate',
        },
        address: alice.address,
        memberId: '0',
      },
    }
  })

  it('Insufficient funds', async () => {
    tx = stubTransaction(api, 'api.tx.council.releaseCandidacyStake', 10_000)

    renderModal()

    expect(await screen.findByText('Insufficient Funds')).toBeDefined()
  })

  it('Transaction summary', async () => {
    renderModal()

    expect(await screen.findByRole('heading', { name: 'Recover balances' })).toBeDefined()
  })

  describe('Transaction for lockType', () => {
    let releaseCandidacyStakeMock: any
    let releaseVoteStake: any

    beforeEach(() => {
      releaseCandidacyStakeMock = jest.fn()
      releaseVoteStake = jest.fn()

      set(api, 'api.tx.council.releaseCandidacyStake', releaseCandidacyStakeMock)
      set(api, 'api.tx.referendum.releaseVoteStake', releaseVoteStake)
    })

    it('Council Candidate', async () => {
      renderModal()

      expect(releaseCandidacyStakeMock).toBeCalled()
      expect(releaseVoteStake).not.toBeCalled()
    })

    it('Voting', async () => {
      useModal.modalData.lock = {
        amount: new BN(300),
        type: 'Voting',
      }

      renderModal()

      expect(releaseCandidacyStakeMock).not.toBeCalled()
      expect(releaseVoteStake).toBeCalled()
    })
  })

  it('Success', async () => {
    stubTransactionSuccess(tx, 'council', 'CandidacyStakeRelease', [createType('MemberId', 0)])

    renderModal()
    fireEvent.click(await screen.findByText(/^sign transaction and transfer$/i))

    expect(await screen.findByText('Success')).toBeDefined()
  })

  it('Failure', async () => {
    stubTransactionFailure(tx)

    renderModal()
    fireEvent.click(await screen.findByText(/^sign transaction and transfer$/i))

    expect(await screen.findByText('Failure')).toBeDefined()
  })

  function renderModal() {
    render(
      <MockKeyringProvider>
        <MockQueryNodeProviders>
          <MembershipContext.Provider value={useMyMemberships}>
            <ApiContext.Provider value={api}>
              <AccountsContext.Provider value={useAccounts}>
                <ModalContext.Provider value={useModal}>
                  <RecoverBalanceModal />
                </ModalContext.Provider>
              </AccountsContext.Provider>
            </ApiContext.Provider>
          </MembershipContext.Provider>
        </MockQueryNodeProviders>
      </MockKeyringProvider>
    )
  }
})
