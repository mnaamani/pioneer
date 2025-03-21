import { BalanceOf } from '@polkadot/types/interfaces/runtime'
import { blake2AsHex } from '@polkadot/util-crypto'
import React, { useEffect } from 'react'
import * as Yup from 'yup'

import { SelectAccount } from '@/accounts/components/SelectAccount'
import { useMyAccounts } from '@/accounts/hooks/useMyAccounts'
import { accountOrNamed } from '@/accounts/model/accountOrNamed'
import { Account } from '@/accounts/types'
import { TermsRoutes } from '@/app/constants/routes'
import { ButtonGhost, ButtonPrimary } from '@/common/components/buttons'
import {
  Checkbox,
  InlineToggleWrap,
  InputComponent,
  InputText,
  InputTextarea,
  Label,
  LabelLink,
  ToggleCheckbox,
} from '@/common/components/forms'
import { getErrorMessage, hasError } from '@/common/components/forms/FieldError'
import { Arrow } from '@/common/components/icons'
import {
  ModalFooter,
  ModalFooterGroup,
  ModalHeader,
  Row,
  ScrolledModal,
  ScrolledModalBody,
  ScrolledModalContainer,
  TransactionInfoContainer,
} from '@/common/components/Modal'
import { TransactionInfo } from '@/common/components/TransactionInfo'
import { TextMedium } from '@/common/components/typography'
import { useApi } from '@/common/hooks/useApi'
import { useForm } from '@/common/hooks/useForm'
import { useObservable } from '@/common/hooks/useObservable'

import { SelectMember } from '../../components/SelectMember'
import { AccountSchema, AvatarURISchema, HandleSchema, ReferrerSchema } from '../../model/validation'
import { Member } from '../../types'

interface BuyMembershipFormModalProps {
  onClose: () => void
  onSubmit: (params: MemberFormFields) => void
  membershipPrice?: BalanceOf
}

interface BuyMembershipFormProps extends Omit<BuyMembershipFormModalProps, 'onClose'> {
  type: 'onBoarding' | 'general'
  membershipAccount?: string
  changeMembershipAccount?: () => void
}

const CreateMemberSchema = Yup.object().shape({
  rootAccount: AccountSchema.required(),
  controllerAccount: AccountSchema.required(),
  avatarUri: AvatarURISchema,
  name: Yup.string().required(),
  handle: HandleSchema.required(),
  hasTerms: Yup.boolean().required().oneOf([true]),
  isReferred: Yup.boolean(),
  referrer: ReferrerSchema,
})

export interface MemberFormFields {
  rootAccount?: Account
  controllerAccount?: Account
  name: string
  handle: string
  about: string
  avatarUri: string
  isReferred?: boolean
  referrer?: Member
  hasTerms?: boolean
  invitor?: Member
}

export const BuyMembershipForm = ({
  onSubmit,
  membershipPrice,
  membershipAccount,
  changeMembershipAccount,
  type,
}: BuyMembershipFormProps) => {
  const { api, connectionState } = useApi()
  const { allAccounts } = useMyAccounts()

  const initializer = {
    name: '',
    rootAccount: membershipAccount ? accountOrNamed(allAccounts, membershipAccount, 'Account') : undefined,
    controllerAccount: membershipAccount ? accountOrNamed(allAccounts, membershipAccount, 'Account') : undefined,
    handle: '',
    about: '',
    avatarUri: '',
    isReferred: false,
    referrer: undefined,
    hasTerms: false,
  }
  const { fields, changeField, validation } = useForm<MemberFormFields>(initializer, CreateMemberSchema)
  const { isValid, errors, setContext } = validation
  const { rootAccount, controllerAccount, handle, name, isReferred, avatarUri, about, referrer } = fields

  const handleHash = blake2AsHex(handle)
  const potentialMemberIdSize = useObservable(api?.query.members.memberIdByHandleHash.size(handleHash), [
    handle,
    connectionState,
  ])

  useEffect(() => {
    setContext({ size: potentialMemberIdSize })
  }, [potentialMemberIdSize?.toString()])

  const onCreate = () => {
    if (!controllerAccount || !rootAccount) {
      return
    }

    onSubmit(fields)
  }

  return (
    <>
      <ScrolledModalBody>
        <ScrolledModalContainer>
          {type === 'general' && (
            <Row>
              <InlineToggleWrap>
                <Label>I was referred by a member: </Label>
                <ToggleCheckbox
                  trueLabel="Yes"
                  falseLabel="No"
                  onChange={(isSet) => changeField('isReferred', isSet)}
                  checked={isReferred ?? false}
                />
              </InlineToggleWrap>
              {isReferred && (
                <InputComponent required inputSize="l">
                  <SelectMember
                    onChange={(member) => changeField('referrer', member)}
                    disabled={!isReferred}
                    selected={referrer}
                  />
                </InputComponent>
              )}
            </Row>
          )}
          <Row>
            <TextMedium dark>Please fill in all the details below.</TextMedium>
          </Row>
          {type === 'general' && (
            <>
              <Row>
                <InputComponent label="Root account" required inputSize="l" tooltipText="Something about root accounts">
                  <SelectAccount onChange={(account) => changeField('rootAccount', account)} selected={rootAccount} />
                </InputComponent>
              </Row>
              <Row>
                <InputComponent
                  label="Controller account"
                  required
                  inputSize="l"
                  tooltipText="Something about controller account"
                >
                  <SelectAccount
                    onChange={(account) => changeField('controllerAccount', account)}
                    selected={controllerAccount}
                  />
                </InputComponent>
              </Row>
            </>
          )}
          <Row>
            <InputComponent id="member-name" label="Member Name" required>
              <InputText
                id="member-name"
                placeholder="Type"
                value={name}
                onChange={(event) => changeField('name', event.target.value)}
              />
            </InputComponent>
          </Row>
          <Row>
            <InputComponent id="membership-handle" label="Membership handle" required>
              <InputText
                id="membership-handle"
                placeholder="Type"
                value={handle}
                onChange={(event) => changeField('handle', event.target.value)}
              />
            </InputComponent>
          </Row>
          <Row>
            <InputComponent id="member-about" label="About member" inputSize="l">
              <InputTextarea
                id="member-about"
                value={about}
                placeholder="Type"
                onChange={(event) => changeField('about', event.target.value)}
              />
            </InputComponent>
          </Row>
          <Row>
            <InputComponent
              id="member-avatar"
              label="Member Avatar"
              required
              value={avatarUri}
              validation={hasError('avatarUri', errors) ? 'invalid' : undefined}
              message={
                hasError('avatarUri', errors)
                  ? getErrorMessage('avatarUri', errors)
                  : 'Paste an URL of your avatar image. Text lorem ipsum.'
              }
              placeholder="Image URL"
            >
              <InputText
                id="member-avatar"
                value={avatarUri}
                onChange={(event) => changeField('avatarUri', event.target.value)}
              />
            </InputComponent>
          </Row>
        </ScrolledModalContainer>
      </ScrolledModalBody>
      <ModalFooter twoColumns>
        <ModalFooterGroup left>
          {type === 'onBoarding' && (
            <ButtonGhost onClick={changeMembershipAccount} size="medium">
              <Arrow direction="left" />
              Change account
            </ButtonGhost>
          )}
          <Checkbox id={'privacy-policy-agreement'} onChange={(value) => changeField('hasTerms', value)}>
            <TextMedium colorInherit>
              I agree to the{' '}
              <LabelLink to={TermsRoutes.termsOfService} target="_blank">
                Terms of Service
              </LabelLink>{' '}
              and{' '}
              <LabelLink to={TermsRoutes.privacyPolicy} target="_blank">
                Privacy Policy
              </LabelLink>
              .
            </TextMedium>
          </Checkbox>
        </ModalFooterGroup>
        <ModalFooterGroup>
          {type === 'general' && (
            <TransactionInfoContainer>
              <TransactionInfo
                title="Creation fee:"
                value={membershipPrice?.toBn()}
                tooltipText={'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'}
              />
            </TransactionInfoContainer>
          )}
          <ButtonPrimary size="medium" onClick={onCreate} disabled={!isValid}>
            Create a Membership
          </ButtonPrimary>
        </ModalFooterGroup>
      </ModalFooter>
    </>
  )
}

export const BuyMembershipFormModal = ({ onClose, onSubmit, membershipPrice }: BuyMembershipFormModalProps) => {
  return (
    <ScrolledModal modalSize="m" modalHeight="m" onClose={onClose}>
      <ModalHeader onClick={onClose} title="Add membership" />
      <BuyMembershipForm type="general" membershipPrice={membershipPrice} onSubmit={onSubmit} />
    </ScrolledModal>
  )
}
