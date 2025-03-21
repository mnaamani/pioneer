import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion'
import React, { useState } from 'react'
import { generatePath } from 'react-router-dom'
import styled from 'styled-components'

import { MembersRoutes, ProfileRoutes, SettingsRoutes } from '@/app/constants/routes'
import { Arrow } from '@/common/components/icons'
import { Notifications, NotificationsButton } from '@/common/components/Notifications'
import { BandwidthIcon } from '@/common/components/page/Sidebar/LinksIcons/BandwidthIcon'
import { BountyIcon } from '@/common/components/page/Sidebar/LinksIcons/BountyIcon'
import { ConstitutionIcon } from '@/common/components/page/Sidebar/LinksIcons/ConstitutionIcon'
import { ContentIcon } from '@/common/components/page/Sidebar/LinksIcons/ContentIcon'
import { CouncilIcon } from '@/common/components/page/Sidebar/LinksIcons/CouncilIcon'
import { ElectionIcon } from '@/common/components/page/Sidebar/LinksIcons/ElectionIcon'
import { FinancialsIcon } from '@/common/components/page/Sidebar/LinksIcons/FinancialsIcon'
import { ForumIcon } from '@/common/components/page/Sidebar/LinksIcons/ForumIcon'
import { GatewaysIcon } from '@/common/components/page/Sidebar/LinksIcons/GatewaysIcon'
import { MembersIcon } from '@/common/components/page/Sidebar/LinksIcons/MembersIcon'
import { MyProfileIcon } from '@/common/components/page/Sidebar/LinksIcons/MyProfileIcon'
import { OverviewIcon } from '@/common/components/page/Sidebar/LinksIcons/OverviewIcon'
import { ProposalsIcon } from '@/common/components/page/Sidebar/LinksIcons/ProposalsIcon'
import { SettingsIcon } from '@/common/components/page/Sidebar/LinksIcons/SettingsIcon'
import { StorageIcon } from '@/common/components/page/Sidebar/LinksIcons/StorageIcon'
import { ValidatorsIcon } from '@/common/components/page/Sidebar/LinksIcons/ValidatorsIcon'
import { WorkingGroupsIcon } from '@/common/components/page/Sidebar/LinksIcons/WorkingGroupsIcon'
import { LogoLink } from '@/common/components/page/Sidebar/LogoLink'
import { Navigation, NavigationInnerWrapper } from '@/common/components/page/Sidebar/Navigation'
import { NavigationExpandButton } from '@/common/components/page/Sidebar/NavigationExpandButton'
import { NavigationHeader } from '@/common/components/page/Sidebar/NavigationHeader'
import { NavigationLink } from '@/common/components/page/Sidebar/NavigationLink'
import { RemoveScrollbar } from '@/common/constants'
import { useToggle } from '@/common/hooks/useToggle'
import { CouncilRoutes, ElectionRoutes } from '@/council/constants'
import { useElectionStage } from '@/council/hooks/useElectionStage'
import { ForumRoutes } from '@/forum/constant'
import { ProfileComponent } from '@/memberships/components/ProfileComponent'
import { OverviewRoutes } from '@/overview/constants/routes'
import { ProposalsRoutes } from '@/proposals/constants/routes'
import { WorkingGroupsRoutes } from '@/working-groups/constants'

export const SideBar = () => {
  const [isNotificationsPanelOpen, setNotificationsPanelOpen] = useState(false)
  const [comingSoonListActive, toggleComingSoonListActive] = useToggle(false)
  const onClose = () => setNotificationsPanelOpen(false)
  const { stage: electionStage } = useElectionStage()
  const electionLink = electionStage === 'inactive' ? ElectionRoutes.pastElection : ElectionRoutes.currentElection

  return (
    <Navigation>
      <NavigationInnerWrapper>
        <NavigationHeader>
          <LogoLink />
          <NotificationsButton
            onClick={() => setNotificationsPanelOpen(!isNotificationsPanelOpen)}
            isNotificationsPanelOpen={isNotificationsPanelOpen}
          />
        </NavigationHeader>
        <AnimateSharedLayout>
          <NavigationLinks>
            <NavigationLinksItem>
              <NavigationLink to={OverviewRoutes.overview} icon={<OverviewIcon />}>
                Overview
              </NavigationLink>
            </NavigationLinksItem>
            <NavigationLinksItem>
              <NavigationLink to={ProfileRoutes.profile} icon={<MyProfileIcon />}>
                My profile
              </NavigationLink>
            </NavigationLinksItem>
            <NavigationLinksItem>
              <NavigationLink to={WorkingGroupsRoutes.groups} icon={<WorkingGroupsIcon />}>
                Working Groups
              </NavigationLink>
            </NavigationLinksItem>
            <NavigationLinksItem>
              <NavigationLink to={ProposalsRoutes.current} icon={<ProposalsIcon />}>
                Proposals
              </NavigationLink>
            </NavigationLinksItem>
            <NavigationLinksItem>
              <NavigationLink to={CouncilRoutes.council} icon={<CouncilIcon />}>
                Council
              </NavigationLink>
            </NavigationLinksItem>
            <NavigationLinksItem>
              <NavigationLink to={electionLink} icon={<ElectionIcon />} indicate={false}>
                Election
              </NavigationLink>
            </NavigationLinksItem>
            <NavigationLinksItem>
              <NavigationLink to={ForumRoutes.forum} icon={<ForumIcon />}>
                Forum
              </NavigationLink>
            </NavigationLinksItem>
            <NavigationLinksItem>
              <NavigationLink to={generatePath(MembersRoutes.members)} icon={<MembersIcon />}>
                Members
              </NavigationLink>
            </NavigationLinksItem>
            <NavigationLinksItem>
              <NavigationLink to={SettingsRoutes.settings} icon={<SettingsIcon />}>
                Settings
              </NavigationLink>
            </NavigationLinksItem>
            <NavigationLinksItem>
              <NavigationExpandButton active={comingSoonListActive} onClick={toggleComingSoonListActive}>
                <Arrow direction="down" size="20" className="nav-icon" />
                COMING SOON
              </NavigationExpandButton>
            </NavigationLinksItem>
            <AnimatePresence>
              {comingSoonListActive && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: 'auto' }}
                  exit={{ minHeight: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <NavigationLinksItem>
                    <NavigationLink to="/inexisting" icon={<ConstitutionIcon />} disabled>
                      Constitution
                    </NavigationLink>
                  </NavigationLinksItem>
                  <NavigationLinksItem>
                    <NavigationLink to="/inexisting" icon={<BountyIcon />} disabled>
                      Bounty
                    </NavigationLink>
                  </NavigationLinksItem>
                  <NavigationLinksItem>
                    <NavigationLink to="/inexisting" icon={<FinancialsIcon />} disabled>
                      Financials
                    </NavigationLink>
                  </NavigationLinksItem>
                  <NavigationLinksItem>
                    <NavigationLink to="/inexisting" icon={<ValidatorsIcon />} disabled>
                      Validators
                    </NavigationLink>
                  </NavigationLinksItem>
                  <NavigationLinksItem>
                    <NavigationLink to="/inexisting" icon={<GatewaysIcon />} disabled>
                      Gateways
                    </NavigationLink>
                  </NavigationLinksItem>
                  <NavigationLinksItem>
                    <NavigationLink to="/inexisting" icon={<StorageIcon />} disabled>
                      Storage
                    </NavigationLink>
                  </NavigationLinksItem>
                  <NavigationLinksItem>
                    <NavigationLink to="/inexisting" icon={<BandwidthIcon />} disabled>
                      Bandwidth
                    </NavigationLink>
                  </NavigationLinksItem>
                  <NavigationLinksItem>
                    <NavigationLink to="/inexisting" disabled icon={<ContentIcon />}>
                      Content
                    </NavigationLink>
                  </NavigationLinksItem>
                </motion.div>
              )}
            </AnimatePresence>
          </NavigationLinks>
        </AnimateSharedLayout>
        <ProfileComponent />
      </NavigationInnerWrapper>
      <Notifications onClose={onClose} isNotificationsPanelOpen={isNotificationsPanelOpen} />
    </Navigation>
  )
}

const NavigationLinks = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  grid-area: barlinks;
  list-style: none;
  max-height: 100%;
  overflow: hidden;
  overflow-y: scroll;
  mask-image: linear-gradient(0deg, transparent 0px, black 8px, black calc(100% - 8px), transparent 100%);
  ${RemoveScrollbar};
`

const NavigationLinksItem = styled.li`
  display: flex;
  height: fit-content;
  width: 100%;
`
