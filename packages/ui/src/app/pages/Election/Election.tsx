import React from 'react'

import { PageHeaderRow, PageHeaderWrapper, PageLayout } from '@/app/components/PageLayout'
import { ButtonsGroup, CopyButtonTemplate } from '@/common/components/buttons'
import { LinkIcon } from '@/common/components/icons'
import { Loading } from '@/common/components/Loading'
import { MainPanel } from '@/common/components/page/PageContent'
import { PageTitle } from '@/common/components/page/PageTitle'
import { BlockDurationStatistics, StatisticItem, Statistics } from '@/common/components/statistics'
import { TextHuge } from '@/common/components/typography'
import { camelCaseToText } from '@/common/helpers'
import { getUrl } from '@/common/utils/getUrl'
import { AnnounceCandidacyButton } from '@/council/components/election/announcing/AnnounceCandidacyButton'
import { AnnouncingStage } from '@/council/components/election/announcing/AnnouncingStage'
import { BackupVotesButton } from '@/council/components/election/BackupVotesButton'
import { RestoreVotesButton } from '@/council/components/election/RestoreVotesButton'
import { RevealingStage } from '@/council/components/election/revealing/RevealingStage'
import { VotingStage } from '@/council/components/election/voting/VotingStage'
import { ElectionRoutes } from '@/council/constants'
import { useCandidatePreviewViaUrlParameter } from '@/council/hooks/useCandidatePreviewViaUrlParameter'
import { useCurrentElection } from '@/council/hooks/useCurrentElection'
import { useElectionRemainingPeriod } from '@/council/hooks/useElectionRemainingPeriod'
import { useElectionStage } from '@/council/hooks/useElectionStage'
import { Election as ElectionType, ElectionStage } from '@/council/types/Election'

import { ElectionTabs } from './components/ElectionTabs'

const displayElectionRound = (election: ElectionType | undefined, electionStage: ElectionStage): string => {
  if (electionStage === 'announcing') {
    return 'Announcing period'
  }

  if (!election) {
    return '-'
  }

  return `${election.cycleId} round`
}

export const Election = () => {
  const { isLoading: isLoadingElection, election } = useCurrentElection()
  const { isLoading: isLoadingElectionStage, stage: electionStage } = useElectionStage()
  const remainingPeriod = useElectionRemainingPeriod(electionStage)
  useCandidatePreviewViaUrlParameter()

  if (isLoadingElectionStage) {
    return <PageLayout header={null} main={<Loading />} />
  }

  if (electionStage === 'inactive') {
    return null
  }

  const header = (
    <PageHeaderWrapper>
      <PageHeaderRow>
        <PageTitle>Elections</PageTitle>
        <ButtonsGroup>
          <CopyButtonTemplate
            size="medium"
            textToCopy={getUrl({ route: ElectionRoutes.currentElection })}
            icon={<LinkIcon />}
          >
            Copy link
          </CopyButtonTemplate>
          {electionStage === 'announcing' && <AnnounceCandidacyButton />}
          {(electionStage === 'voting' || electionStage === 'revealing') && (
            <>
              <BackupVotesButton cycleId={election?.cycleId} />
              <RestoreVotesButton cycleId={election?.cycleId} />
            </>
          )}
        </ButtonsGroup>
      </PageHeaderRow>
      <ElectionTabs />
    </PageHeaderWrapper>
  )

  const main = (
    <MainPanel>
      <Statistics>
        <StatisticItem title="Stage" tooltipText="Lorem ipsum...">
          <TextHuge bold>{camelCaseToText(electionStage)} Period</TextHuge>
        </StatisticItem>
        <BlockDurationStatistics title="Period remaining length" tooltipText="Lorem ipsum..." value={remainingPeriod} />
        <StatisticItem title="Election round" tooltipText="Lorem ipsum...">
          <TextHuge bold>{displayElectionRound(election, electionStage)}</TextHuge>
        </StatisticItem>
      </Statistics>
      {electionStage === 'announcing' && <AnnouncingStage election={election} isLoading={isLoadingElection} />}
      {electionStage === 'voting' && <VotingStage election={election} isLoading={isLoadingElection} />}
      {electionStage === 'revealing' && <RevealingStage election={election} isLoading={isLoadingElection} />}
    </MainPanel>
  )

  return <PageLayout header={header} main={main} />
}
