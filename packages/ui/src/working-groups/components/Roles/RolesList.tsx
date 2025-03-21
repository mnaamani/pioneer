import BN from 'bn.js'
import React, { useCallback } from 'react'
import styled from 'styled-components'

import { BadgeStatus } from '@/common/components/BadgeStatus'
import { ContextMenu, ContextMenuContainer } from '@/common/components/ContextMenu'
import { List, ListItem, TableListItemAsLinkHover } from '@/common/components/List'
import { GhostRouterLink } from '@/common/components/RouterLink'
import { TextInlineBig, TokenValue } from '@/common/components/typography'
import { Transitions, Fonts, Colors, BorderRad } from '@/common/constants'
import { useModal } from '@/common/hooks/useModal'
import { useRewardPeriod } from '@/working-groups/hooks/useRewardPeriod'
import { useWorkerEarnings } from '@/working-groups/hooks/useWorkerEarnings'
import { ChangeAccountModalCall } from '@/working-groups/modals/ChangeAccountModal'
import { ModalTypes } from '@/working-groups/modals/ChangeAccountModal/constants'
import { LeaveRoleModalCall } from '@/working-groups/modals/LeaveRoleModal'
import { Worker } from '@/working-groups/types'

import { workerRoleTitle } from '../../helpers'
import {
  OpenItemSummaryColumn,
  ToggleableItemInfo,
  ToggleableItemInfoTop,
  ToggleableItemSummary,
  ToggleableItemTitle,
  ToggleableItemWrap,
  ToggleableSubscriptionWide,
} from '../ToggleableItemStyledComponents'

export interface RolesListProps {
  workers: Worker[]
}

export const RolesList = ({ workers }: RolesListProps) => (
  <List>
    {workers.map((worker) => (
      <ListItem key={worker.id} borderless>
        <RolesListItem worker={worker} />
      </ListItem>
    ))}
  </List>
)

const RolesListItem = ({ worker }: { worker: Worker }) => {
  const { showModal } = useModal()
  const changeRewardCallback = useCallback(() => {
    showModal<ChangeAccountModalCall>({
      modal: 'ChangeAccountModal',
      data: { workerId: worker.id, type: ModalTypes.CHANGE_REWARD_ACCOUNT },
    })
  }, [])
  const leaveRoleCallback = useCallback(() => {
    showModal<LeaveRoleModalCall>({
      modal: 'LeaveRole',
      data: { workerId: worker.id },
    })
  }, [])
  const { earnings } = useWorkerEarnings(worker.id)
  const rewardPeriod = useRewardPeriod(worker.group.id)

  const roleRoute = `/working-groups/my-roles/${worker.id}`

  return (
    <RoleItemWrapper>
      <ToggleableItemInfo>
        <ToggleableItemInfoTop>
          <BadgeStatus inverted>{worker.group.name}</BadgeStatus>
          {worker.isLead && <BadgeStatus>LEAD</BadgeStatus>}
        </ToggleableItemInfoTop>
        <RoleTitle as={GhostRouterLink} to={roleRoute}>
          {workerRoleTitle(worker)}
        </RoleTitle>
      </ToggleableItemInfo>
      <ToggleableItemSummary>
        <OpenItemSummaryColumn>
          <TextInlineBig>
            <TokenValue value={rewardPeriod?.mul(worker.rewardPerBlock)} />
          </TextInlineBig>
          <ToggleableSubscriptionWide>Reward per {rewardPeriod?.toString()} blocks</ToggleableSubscriptionWide>
        </OpenItemSummaryColumn>
        <OpenItemSummaryColumn>
          <TextInlineBig>
            <TokenValue value={earnings} />
          </TextInlineBig>
          <ToggleableSubscriptionWide>Earned total</ToggleableSubscriptionWide>
        </OpenItemSummaryColumn>
        <OpenItemSummaryColumn>
          <TextInlineBig>
            <TokenValue value={new BN(2396000)} />
          </TextInlineBig>
          <ToggleableSubscriptionWide>Next payment in</ToggleableSubscriptionWide>
        </OpenItemSummaryColumn>
        <OpenItemSummaryColumn>
          <TextInlineBig>
            <TokenValue value={new BN(worker.stake)} />
          </TextInlineBig>
          <ToggleableSubscriptionWide>Staked</ToggleableSubscriptionWide>
        </OpenItemSummaryColumn>
      </ToggleableItemSummary>
      <ContextMenu
        size="small"
        items={[
          { text: 'Change reward account', onClick: changeRewardCallback },
          { text: 'Leave a position', onClick: leaveRoleCallback },
        ]}
      />
    </RoleItemWrapper>
  )
}

const RoleItemWrapper = styled(ToggleableItemWrap)`
  position: relative;
  border: 1px solid ${Colors.Black[100]};
  border-radius: ${BorderRad.s};
  transition: ${Transitions.all};

  ${TableListItemAsLinkHover};

  ${ToggleableItemInfo},
  ${TextInlineBig},
  ${ContextMenuContainer} {
    z-index: 1;
  }
`

const RoleTitle = styled(ToggleableItemTitle)`
  font-family: ${Fonts.Grotesk};
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  transition: ${Transitions.all};

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  &:hover,
  &:focus {
    color: ${Colors.Blue[500]};
  }
`
