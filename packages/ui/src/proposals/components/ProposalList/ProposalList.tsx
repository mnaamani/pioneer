import React from 'react'

import { List } from '@/common/components/List'
import { RowGapBlock } from '@/common/components/page/PageContent'
import { NotFoundText } from '@/common/components/typography/NotFoundText'
import { useIsCouncilMember } from '@/memberships/hooks/useIsCouncilMember'
import { useMyMemberships } from '@/memberships/hooks/useMyMemberships'
import { ProposalColLayout, ProposalsListHeaders, ProposalListHeader } from '@/proposals/constants'
import { Proposal } from '@/proposals/types'

import { ProposalListItem } from './ProposalListItem'

export interface ProposalListProps {
  proposals: Proposal[]
  isPast?: boolean
}

export const ProposalList = ({ proposals, isPast }: ProposalListProps) => {
  const { active } = useMyMemberships()
  const isCouncilMember = useIsCouncilMember(active)

  if (!proposals.length) {
    return <NotFoundText>No proposals matching search criteria</NotFoundText>
  }
  return (
    <RowGapBlock gap={4}>
      <ProposalsListHeaders $colLayout={ProposalColLayout}>
        <ProposalListHeader />
        <ProposalListHeader>Stage</ProposalListHeader>
        <ProposalListHeader>Proposer</ProposalListHeader>
        {isCouncilMember && <ProposalListHeader>My vote</ProposalListHeader>}
      </ProposalsListHeaders>
      <List as="div">
        {proposals.map((proposal) => (
          <ProposalListItem
            key={proposal.id}
            proposal={proposal}
            isPast={isPast}
            memberId={active?.id}
            isCouncilMember={isCouncilMember}
          />
        ))}
      </List>
    </RowGapBlock>
  )
}
