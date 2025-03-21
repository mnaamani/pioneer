import * as Types from '../../../common/api/queries/__generated__/baseTypes.generated'

import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'
const defaultOptions = {}
export type NewCouncilElectedEventFieldsFragment = {
  __typename: 'NewCouncilElectedEvent'
  id: string
  createdAt: any
  electedCouncil: { __typename: 'ElectedCouncil'; councilMembers: Array<{ __typename: 'CouncilMember'; id: string }> }
}

export type CandidacyWithdrawEventFieldsFragment = {
  __typename: 'CandidacyWithdrawEvent'
  id: string
  createdAt: any
  candidate: { __typename: 'Candidate'; member: { __typename: 'Membership'; handle: string } }
}

export type AnnouncingPeriodStartedEventFieldsFragment = {
  __typename: 'AnnouncingPeriodStartedEvent'
  id: string
  createdAt: any
}

export type VotingPeriodStartedEventFieldsFragment = {
  __typename: 'VotingPeriodStartedEvent'
  id: string
  createdAt: any
}

export type CouncilorRewardUpdatedEventFieldsFragment = {
  __typename: 'CouncilorRewardUpdatedEvent'
  id: string
  createdAt: any
  rewardAmount: any
}

export type NewCandidateEventFieldsFragment = {
  __typename: 'NewCandidateEvent'
  id: string
  createdAt: any
  candidate: { __typename: 'Candidate'; member: { __typename: 'Membership'; id: string; handle: string } }
}

export type NotEnoughCandidatesEventFieldsFragment = {
  __typename: 'NotEnoughCandidatesEvent'
  id: string
  createdAt: any
}

export type RevealingStageStartedEventFieldsFragment = {
  __typename: 'RevealingStageStartedEvent'
  id: string
  createdAt: any
}

export type GetCouncilEventsQueryVariables = Types.Exact<{ [key: string]: never }>

export type GetCouncilEventsQuery = {
  __typename: 'Query'
  events: Array<
    | { __typename: 'AnnouncingPeriodStartedEvent'; id: string; createdAt: any }
    | { __typename: 'ApplicationWithdrawnEvent' }
    | { __typename: 'AppliedOnOpeningEvent' }
    | { __typename: 'BountyCreatedEvent' }
    | { __typename: 'BountyMaxFundingReachedEvent' }
    | { __typename: 'BudgetBalanceSetEvent' }
    | { __typename: 'BudgetIncrementUpdatedEvent' }
    | { __typename: 'BudgetRefillEvent' }
    | { __typename: 'BudgetRefillPlannedEvent' }
    | { __typename: 'BudgetSetEvent' }
    | { __typename: 'BudgetSpendingEvent' }
    | { __typename: 'CandidacyNoteSetEvent' }
    | { __typename: 'CandidacyStakeReleaseEvent' }
    | {
        __typename: 'CandidacyWithdrawEvent'
        id: string
        createdAt: any
        candidate: { __typename: 'Candidate'; member: { __typename: 'Membership'; handle: string } }
      }
    | { __typename: 'CategoryArchivalStatusUpdatedEvent' }
    | { __typename: 'CategoryCreatedEvent' }
    | { __typename: 'CategoryDeletedEvent' }
    | { __typename: 'CategoryMembershipOfModeratorUpdatedEvent' }
    | { __typename: 'CategoryStickyThreadUpdateEvent' }
    | { __typename: 'CouncilorRewardUpdatedEvent'; id: string; createdAt: any; rewardAmount: any }
    | { __typename: 'InitialInvitationBalanceUpdatedEvent' }
    | { __typename: 'InitialInvitationCountUpdatedEvent' }
    | { __typename: 'InvitesTransferredEvent' }
    | { __typename: 'LeaderInvitationQuotaUpdatedEvent' }
    | { __typename: 'LeaderSetEvent' }
    | { __typename: 'LeaderUnsetEvent' }
    | { __typename: 'MemberAccountsUpdatedEvent' }
    | { __typename: 'MemberInvitedEvent' }
    | { __typename: 'MemberProfileUpdatedEvent' }
    | { __typename: 'MemberVerificationStatusUpdatedEvent' }
    | { __typename: 'MembershipBoughtEvent' }
    | { __typename: 'MembershipPriceUpdatedEvent' }
    | {
        __typename: 'NewCandidateEvent'
        id: string
        createdAt: any
        candidate: { __typename: 'Candidate'; member: { __typename: 'Membership'; id: string; handle: string } }
      }
    | {
        __typename: 'NewCouncilElectedEvent'
        id: string
        createdAt: any
        electedCouncil: {
          __typename: 'ElectedCouncil'
          councilMembers: Array<{ __typename: 'CouncilMember'; id: string }>
        }
      }
    | { __typename: 'NewCouncilNotElectedEvent' }
    | { __typename: 'NewMissedRewardLevelReachedEvent' }
    | { __typename: 'NotEnoughCandidatesEvent'; id: string; createdAt: any }
    | { __typename: 'OpeningAddedEvent' }
    | { __typename: 'OpeningCanceledEvent' }
    | { __typename: 'OpeningFilledEvent' }
    | { __typename: 'PostAddedEvent' }
    | { __typename: 'PostDeletedEvent' }
    | { __typename: 'PostModeratedEvent' }
    | { __typename: 'PostReactedEvent' }
    | { __typename: 'PostTextUpdatedEvent' }
    | { __typename: 'ProposalCancelledEvent' }
    | { __typename: 'ProposalCreatedEvent' }
    | { __typename: 'ProposalDecisionMadeEvent' }
    | { __typename: 'ProposalDiscussionPostCreatedEvent' }
    | { __typename: 'ProposalDiscussionPostDeletedEvent' }
    | { __typename: 'ProposalDiscussionPostUpdatedEvent' }
    | { __typename: 'ProposalDiscussionThreadModeChangedEvent' }
    | { __typename: 'ProposalExecutedEvent' }
    | { __typename: 'ProposalStatusUpdatedEvent' }
    | { __typename: 'ProposalVotedEvent' }
    | { __typename: 'ReferendumFinishedEvent' }
    | { __typename: 'ReferendumStartedEvent' }
    | { __typename: 'ReferendumStartedForcefullyEvent' }
    | { __typename: 'ReferralCutUpdatedEvent' }
    | { __typename: 'RequestFundedEvent' }
    | { __typename: 'RevealingStageStartedEvent'; id: string; createdAt: any }
    | { __typename: 'RewardPaidEvent' }
    | { __typename: 'RewardPaymentEvent' }
    | { __typename: 'StakeDecreasedEvent' }
    | { __typename: 'StakeIncreasedEvent' }
    | { __typename: 'StakeReleasedEvent' }
    | { __typename: 'StakeSlashedEvent' }
    | { __typename: 'StakingAccountAddedEvent' }
    | { __typename: 'StakingAccountConfirmedEvent' }
    | { __typename: 'StakingAccountRemovedEvent' }
    | { __typename: 'StatusTextChangedEvent' }
    | { __typename: 'TerminatedLeaderEvent' }
    | { __typename: 'TerminatedWorkerEvent' }
    | { __typename: 'ThreadCreatedEvent' }
    | { __typename: 'ThreadDeletedEvent' }
    | { __typename: 'ThreadMetadataUpdatedEvent' }
    | { __typename: 'ThreadModeratedEvent' }
    | { __typename: 'ThreadMovedEvent' }
    | { __typename: 'VoteCastEvent' }
    | { __typename: 'VoteOnPollEvent' }
    | { __typename: 'VoteRevealedEvent' }
    | { __typename: 'VotingPeriodStartedEvent'; id: string; createdAt: any }
    | { __typename: 'WorkEntryAnnouncedEvent' }
    | { __typename: 'WorkerExitedEvent' }
    | { __typename: 'WorkerRewardAccountUpdatedEvent' }
    | { __typename: 'WorkerRewardAmountUpdatedEvent' }
    | { __typename: 'WorkerRoleAccountUpdatedEvent' }
    | { __typename: 'WorkerStartedLeavingEvent' }
  >
}

export const NewCouncilElectedEventFieldsFragmentDoc = gql`
  fragment NewCouncilElectedEventFields on NewCouncilElectedEvent {
    id
    createdAt
    electedCouncil {
      councilMembers {
        id
      }
    }
  }
`
export const CandidacyWithdrawEventFieldsFragmentDoc = gql`
  fragment CandidacyWithdrawEventFields on CandidacyWithdrawEvent {
    id
    createdAt
    candidate {
      member {
        handle
      }
    }
  }
`
export const AnnouncingPeriodStartedEventFieldsFragmentDoc = gql`
  fragment AnnouncingPeriodStartedEventFields on AnnouncingPeriodStartedEvent {
    id
    createdAt
  }
`
export const VotingPeriodStartedEventFieldsFragmentDoc = gql`
  fragment VotingPeriodStartedEventFields on VotingPeriodStartedEvent {
    id
    createdAt
  }
`
export const CouncilorRewardUpdatedEventFieldsFragmentDoc = gql`
  fragment CouncilorRewardUpdatedEventFields on CouncilorRewardUpdatedEvent {
    id
    createdAt
    rewardAmount
  }
`
export const NewCandidateEventFieldsFragmentDoc = gql`
  fragment NewCandidateEventFields on NewCandidateEvent {
    id
    createdAt
    candidate {
      member {
        id
        handle
      }
    }
  }
`
export const NotEnoughCandidatesEventFieldsFragmentDoc = gql`
  fragment NotEnoughCandidatesEventFields on NotEnoughCandidatesEvent {
    id
    createdAt
  }
`
export const RevealingStageStartedEventFieldsFragmentDoc = gql`
  fragment RevealingStageStartedEventFields on RevealingStageStartedEvent {
    id
    createdAt
  }
`
export const GetCouncilEventsDocument = gql`
  query GetCouncilEvents {
    events(
      where: {
        type_in: [
          NewCouncilElectedEvent
          CandidacyWithdrawEvent
          AnnouncingPeriodStartedEvent
          VotingPeriodStartedEvent
          CouncilorRewardUpdatedEvent
          NewCandidateEvent
          NotEnoughCandidatesEvent
          RevealingStageStartedEvent
        ]
      }
      orderBy: [createdAt_DESC]
    ) {
      ... on NewCouncilElectedEvent {
        ...NewCouncilElectedEventFields
      }
      ... on CandidacyWithdrawEvent {
        ...CandidacyWithdrawEventFields
      }
      ... on AnnouncingPeriodStartedEvent {
        ...AnnouncingPeriodStartedEventFields
      }
      ... on VotingPeriodStartedEvent {
        ...VotingPeriodStartedEventFields
      }
      ... on CouncilorRewardUpdatedEvent {
        ...CouncilorRewardUpdatedEventFields
      }
      ... on NewCandidateEvent {
        ...NewCandidateEventFields
      }
      ... on NotEnoughCandidatesEvent {
        ...NotEnoughCandidatesEventFields
      }
      ... on RevealingStageStartedEvent {
        ...RevealingStageStartedEventFields
      }
    }
  }
  ${NewCouncilElectedEventFieldsFragmentDoc}
  ${CandidacyWithdrawEventFieldsFragmentDoc}
  ${AnnouncingPeriodStartedEventFieldsFragmentDoc}
  ${VotingPeriodStartedEventFieldsFragmentDoc}
  ${CouncilorRewardUpdatedEventFieldsFragmentDoc}
  ${NewCandidateEventFieldsFragmentDoc}
  ${NotEnoughCandidatesEventFieldsFragmentDoc}
  ${RevealingStageStartedEventFieldsFragmentDoc}
`

/**
 * __useGetCouncilEventsQuery__
 *
 * To run a query within a React component, call `useGetCouncilEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCouncilEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCouncilEventsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCouncilEventsQuery(
  baseOptions?: Apollo.QueryHookOptions<GetCouncilEventsQuery, GetCouncilEventsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetCouncilEventsQuery, GetCouncilEventsQueryVariables>(GetCouncilEventsDocument, options)
}
export function useGetCouncilEventsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetCouncilEventsQuery, GetCouncilEventsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetCouncilEventsQuery, GetCouncilEventsQueryVariables>(GetCouncilEventsDocument, options)
}
export type GetCouncilEventsQueryHookResult = ReturnType<typeof useGetCouncilEventsQuery>
export type GetCouncilEventsLazyQueryHookResult = ReturnType<typeof useGetCouncilEventsLazyQuery>
export type GetCouncilEventsQueryResult = Apollo.QueryResult<GetCouncilEventsQuery, GetCouncilEventsQueryVariables>
