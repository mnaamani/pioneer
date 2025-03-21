import BN from 'bn.js'

import { asBlock, Block } from '@/common/types'
import { asMember, Member } from '@/memberships/types'

import {
  ApplicationQuestionFieldsFragment,
  UpcomingWorkingGroupOpeningFieldsFragment,
  WorkingGroupOpeningDetailedFieldsFragment,
  WorkingGroupOpeningFieldsFragment,
} from '../queries'

import { asWorkingGroupName, GroupIdName } from './WorkingGroup'

type WorkingGroupOpeningType = 'LEAD' | 'REGULAR'
type Status = 'OpeningStatusUpcoming' | 'OpeningStatusOpen' | 'OpeningStatusFilled' | 'OpeningStatusCancelled'

export interface BaseOpening {
  id: string
  groupId: GroupIdName
  groupName: string
  expectedEnding: string
  title: string
  shortDescription: string
  description: string
  details: string
  createdAtBlock: Block
  stake: BN
  budget: number
  rewardPerBlock: BN
}

export interface UpcomingWorkingGroupOpening extends BaseOpening {
  hiringLimit: number
  expectedStart: string
}

export interface WorkingGroupOpeningApplication {
  id: string
  member: Member
  status: string
}

export interface WorkingGroupOpening extends BaseOpening {
  runtimeId: number
  leadId?: string | null
  budget: number
  type: WorkingGroupOpeningType
  status: Status
  applicants: number
  hiring: {
    current: number
    limit: number
  }
  unstakingPeriod: number
}

export type WorkingGroupOpeningStatus = 'open' | 'filled' | 'cancelled'
export const WorkingGroupOpeningStatusTypename: Record<
  WorkingGroupOpeningStatus,
  WorkingGroupOpeningFieldsFragment['status']['__typename']
> = {
  open: 'OpeningStatusOpen',
  filled: 'OpeningStatusFilled',
  cancelled: 'OpeningStatusCancelled',
}

export interface WorkingGroupDetailedOpening extends WorkingGroupOpening {
  applications: WorkingGroupOpeningApplication[]
}

export const isUpcomingOpening = (opening: BaseOpening): opening is UpcomingWorkingGroupOpening =>
  'hiringLimit' in opening

const asBaseOpening = (fields: UpcomingWorkingGroupOpeningFieldsFragment | WorkingGroupOpeningFieldsFragment) => {
  const groupName = asWorkingGroupName(fields.group.name)

  return {
    id: fields.id,
    title: `${groupName} Working Group`,
    groupId: fields.groupId as GroupIdName,
    groupName: groupName,
    budget: fields.group.budget,
    createdAtBlock: asBlock(fields.createdInEvent),
    rewardPerBlock: new BN(fields.rewardPerBlock),
    expectedEnding: fields.metadata.expectedEnding,
    shortDescription: fields.metadata.shortDescription || '',
    description: fields.metadata?.description ?? '',
    details: fields.metadata?.applicationDetails ?? '',
    stake: new BN(fields.stakeAmount),
  }
}

export const asUpcomingWorkingGroupOpening = (
  fields: UpcomingWorkingGroupOpeningFieldsFragment
): UpcomingWorkingGroupOpening => ({
  ...asBaseOpening(fields),
  hiringLimit: fields.metadata?.hiringLimit ?? 0,
  expectedStart: fields.expectedStart,
})

export const asWorkingGroupOpening = (fields: WorkingGroupOpeningFieldsFragment): WorkingGroupOpening => {
  const groupName = asWorkingGroupName(fields.group.name)
  const type = fields.type === 'LEADER' ? 'LEAD' : 'REGULAR'
  return {
    ...asBaseOpening(fields),
    runtimeId: fields.runtimeId,
    title: `${groupName.toLocaleLowerCase()} Working Group ${fields.type.toLocaleLowerCase()}`,
    type: type as WorkingGroupOpeningType,
    status: fields.status.__typename,
    leadId: fields.group.leaderId,
    applicants: fields.applications?.length || 0,
    hiring: {
      current: fields.openingfilledeventopening?.reduce((total, event) => total + event.workersHired.length, 0) ?? 0,
      limit: fields.metadata?.hiringLimit ?? 0,
    },
    unstakingPeriod: fields.unstakingPeriod,
  }
}

export const asWorkingGroupDetailedOpening = (
  fields: WorkingGroupOpeningDetailedFieldsFragment
): WorkingGroupDetailedOpening => ({
  ...asWorkingGroupOpening(fields),
  applications: fields.applications.length
    ? fields.applications.map((application) => ({
        id: application.id,
        member: asMember(application.applicant),
        status: application.status.__typename,
      }))
    : [],
})

export type ApplicationQuestionType = 'TEXT' | 'TEXTAREA'

export interface ApplicationQuestion {
  index: number
  type: ApplicationQuestionType
  question: string
}

export const asApplicationQuestion = (opening: ApplicationQuestionFieldsFragment): ApplicationQuestion => {
  return {
    index: opening.index,
    type: opening.type,
    question: opening?.question ?? '',
  }
}
