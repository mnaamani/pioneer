export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** GraphQL representation of BigInt */
  BigInt: any
  /** GraphQL representation of Bytes */
  Bytes: any
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: any
}

export type AmendConstitutionProposalDetails = {
  __typename: 'AmendConstitutionProposalDetails'
  /** New (proposed) constitution text (md-formatted) */
  text: Scalars['String']
}

export type AnnouncingPeriodStartedEvent = BaseGraphQlObject &
  Event & {
    __typename: 'AnnouncingPeriodStartedEvent'
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    id: Scalars['ID']
    /** Blocknumber of the block in which the event was emitted. */
    inBlock: Scalars['Int']
    /** Hash of the extrinsic which caused the event to be emitted */
    inExtrinsic?: Maybe<Scalars['String']>
    /** Index of event in block from which it was emitted. */
    indexInBlock: Scalars['Int']
    /** Network the block was produced in */
    network: Network
    /** Filtering options for interface implementers */
    type?: Maybe<EventTypeOptions>
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
  }

export type AnnouncingPeriodStartedEventConnection = {
  __typename: 'AnnouncingPeriodStartedEventConnection'
  edges: Array<AnnouncingPeriodStartedEventEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type AnnouncingPeriodStartedEventCreateInput = {
  inBlock: Scalars['Float']
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock: Scalars['Float']
  network: Network
}

export type AnnouncingPeriodStartedEventEdge = {
  __typename: 'AnnouncingPeriodStartedEventEdge'
  cursor: Scalars['String']
  node: AnnouncingPeriodStartedEvent
}

export enum AnnouncingPeriodStartedEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type AnnouncingPeriodStartedEventUpdateInput = {
  inBlock?: InputMaybe<Scalars['Float']>
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock?: InputMaybe<Scalars['Float']>
  network?: InputMaybe<Network>
}

export type AnnouncingPeriodStartedEventWhereInput = {
  AND?: InputMaybe<Array<AnnouncingPeriodStartedEventWhereInput>>
  OR?: InputMaybe<Array<AnnouncingPeriodStartedEventWhereInput>>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  inBlock_eq?: InputMaybe<Scalars['Int']>
  inBlock_gt?: InputMaybe<Scalars['Int']>
  inBlock_gte?: InputMaybe<Scalars['Int']>
  inBlock_in?: InputMaybe<Array<Scalars['Int']>>
  inBlock_lt?: InputMaybe<Scalars['Int']>
  inBlock_lte?: InputMaybe<Scalars['Int']>
  inExtrinsic_contains?: InputMaybe<Scalars['String']>
  inExtrinsic_endsWith?: InputMaybe<Scalars['String']>
  inExtrinsic_eq?: InputMaybe<Scalars['String']>
  inExtrinsic_in?: InputMaybe<Array<Scalars['String']>>
  inExtrinsic_startsWith?: InputMaybe<Scalars['String']>
  indexInBlock_eq?: InputMaybe<Scalars['Int']>
  indexInBlock_gt?: InputMaybe<Scalars['Int']>
  indexInBlock_gte?: InputMaybe<Scalars['Int']>
  indexInBlock_in?: InputMaybe<Array<Scalars['Int']>>
  indexInBlock_lt?: InputMaybe<Scalars['Int']>
  indexInBlock_lte?: InputMaybe<Scalars['Int']>
  network_eq?: InputMaybe<Network>
  network_in?: InputMaybe<Array<Network>>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
}

export type AnnouncingPeriodStartedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type ApplicationFormQuestion = BaseGraphQlObject & {
  __typename: 'ApplicationFormQuestion'
  applicationformquestionanswerquestion?: Maybe<Array<ApplicationFormQuestionAnswer>>
  createdAt: Scalars['DateTime']
  createdById: Scalars['String']
  deletedAt?: Maybe<Scalars['DateTime']>
  deletedById?: Maybe<Scalars['String']>
  id: Scalars['ID']
  /** Index of the question */
  index: Scalars['Int']
  openingMetadata: WorkingGroupOpeningMetadata
  openingMetadataId: Scalars['String']
  /** The question itself */
  question?: Maybe<Scalars['String']>
  /** Type of the question (UI answer input type) */
  type: ApplicationFormQuestionType
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedById?: Maybe<Scalars['String']>
  version: Scalars['Int']
}

export type ApplicationFormQuestionAnswer = BaseGraphQlObject & {
  __typename: 'ApplicationFormQuestionAnswer'
  /** Applicant's answer */
  answer: Scalars['String']
  application: WorkingGroupApplication
  applicationId: Scalars['String']
  createdAt: Scalars['DateTime']
  createdById: Scalars['String']
  deletedAt?: Maybe<Scalars['DateTime']>
  deletedById?: Maybe<Scalars['String']>
  id: Scalars['ID']
  question: ApplicationFormQuestion
  questionId: Scalars['String']
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedById?: Maybe<Scalars['String']>
  version: Scalars['Int']
}

export type ApplicationFormQuestionAnswerConnection = {
  __typename: 'ApplicationFormQuestionAnswerConnection'
  edges: Array<ApplicationFormQuestionAnswerEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type ApplicationFormQuestionAnswerCreateInput = {
  answer: Scalars['String']
  application: Scalars['ID']
  question: Scalars['ID']
}

export type ApplicationFormQuestionAnswerEdge = {
  __typename: 'ApplicationFormQuestionAnswerEdge'
  cursor: Scalars['String']
  node: ApplicationFormQuestionAnswer
}

export enum ApplicationFormQuestionAnswerOrderByInput {
  AnswerAsc = 'answer_ASC',
  AnswerDesc = 'answer_DESC',
  ApplicationAsc = 'application_ASC',
  ApplicationDesc = 'application_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  QuestionAsc = 'question_ASC',
  QuestionDesc = 'question_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type ApplicationFormQuestionAnswerUpdateInput = {
  answer?: InputMaybe<Scalars['String']>
  application?: InputMaybe<Scalars['ID']>
  question?: InputMaybe<Scalars['ID']>
}

export type ApplicationFormQuestionAnswerWhereInput = {
  AND?: InputMaybe<Array<ApplicationFormQuestionAnswerWhereInput>>
  OR?: InputMaybe<Array<ApplicationFormQuestionAnswerWhereInput>>
  answer_contains?: InputMaybe<Scalars['String']>
  answer_endsWith?: InputMaybe<Scalars['String']>
  answer_eq?: InputMaybe<Scalars['String']>
  answer_in?: InputMaybe<Array<Scalars['String']>>
  answer_startsWith?: InputMaybe<Scalars['String']>
  application?: InputMaybe<WorkingGroupApplicationWhereInput>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  question?: InputMaybe<ApplicationFormQuestionWhereInput>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
}

export type ApplicationFormQuestionAnswerWhereUniqueInput = {
  id: Scalars['ID']
}

export type ApplicationFormQuestionConnection = {
  __typename: 'ApplicationFormQuestionConnection'
  edges: Array<ApplicationFormQuestionEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type ApplicationFormQuestionCreateInput = {
  index: Scalars['Float']
  openingMetadata: Scalars['ID']
  question?: InputMaybe<Scalars['String']>
  type: ApplicationFormQuestionType
}

export type ApplicationFormQuestionEdge = {
  __typename: 'ApplicationFormQuestionEdge'
  cursor: Scalars['String']
  node: ApplicationFormQuestion
}

export enum ApplicationFormQuestionOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  IndexAsc = 'index_ASC',
  IndexDesc = 'index_DESC',
  OpeningMetadataAsc = 'openingMetadata_ASC',
  OpeningMetadataDesc = 'openingMetadata_DESC',
  QuestionAsc = 'question_ASC',
  QuestionDesc = 'question_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export enum ApplicationFormQuestionType {
  Text = 'TEXT',
  Textarea = 'TEXTAREA',
}

export type ApplicationFormQuestionUpdateInput = {
  index?: InputMaybe<Scalars['Float']>
  openingMetadata?: InputMaybe<Scalars['ID']>
  question?: InputMaybe<Scalars['String']>
  type?: InputMaybe<ApplicationFormQuestionType>
}

export type ApplicationFormQuestionWhereInput = {
  AND?: InputMaybe<Array<ApplicationFormQuestionWhereInput>>
  OR?: InputMaybe<Array<ApplicationFormQuestionWhereInput>>
  applicationformquestionanswerquestion_every?: InputMaybe<ApplicationFormQuestionAnswerWhereInput>
  applicationformquestionanswerquestion_none?: InputMaybe<ApplicationFormQuestionAnswerWhereInput>
  applicationformquestionanswerquestion_some?: InputMaybe<ApplicationFormQuestionAnswerWhereInput>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  index_eq?: InputMaybe<Scalars['Int']>
  index_gt?: InputMaybe<Scalars['Int']>
  index_gte?: InputMaybe<Scalars['Int']>
  index_in?: InputMaybe<Array<Scalars['Int']>>
  index_lt?: InputMaybe<Scalars['Int']>
  index_lte?: InputMaybe<Scalars['Int']>
  openingMetadata?: InputMaybe<WorkingGroupOpeningMetadataWhereInput>
  question_contains?: InputMaybe<Scalars['String']>
  question_endsWith?: InputMaybe<Scalars['String']>
  question_eq?: InputMaybe<Scalars['String']>
  question_in?: InputMaybe<Array<Scalars['String']>>
  question_startsWith?: InputMaybe<Scalars['String']>
  type_eq?: InputMaybe<ApplicationFormQuestionType>
  type_in?: InputMaybe<Array<ApplicationFormQuestionType>>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
}

export type ApplicationFormQuestionWhereUniqueInput = {
  id: Scalars['ID']
}

export type ApplicationStatusAccepted = {
  __typename: 'ApplicationStatusAccepted'
  /** Related OpeningFilled event */
  openingFilledEvent?: Maybe<OpeningFilledEvent>
}

export type ApplicationStatusCancelled = {
  __typename: 'ApplicationStatusCancelled'
  /** Related OpeningCanceled event */
  openingCanceledEvent?: Maybe<OpeningCanceledEvent>
}

export type ApplicationStatusPending = {
  __typename: 'ApplicationStatusPending'
  phantom?: Maybe<Scalars['Int']>
}

export type ApplicationStatusRejected = {
  __typename: 'ApplicationStatusRejected'
  /** Related OpeningFilled event */
  openingFilledEvent?: Maybe<OpeningFilledEvent>
}

export type ApplicationStatusWithdrawn = {
  __typename: 'ApplicationStatusWithdrawn'
  /** Related ApplicationWithdrawn event */
  applicationWithdrawnEvent?: Maybe<ApplicationWithdrawnEvent>
}

export type ApplicationWithdrawnEvent = BaseGraphQlObject &
  Event & {
    __typename: 'ApplicationWithdrawnEvent'
    application: WorkingGroupApplication
    applicationId: Scalars['String']
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    group: WorkingGroup
    groupId: Scalars['String']
    id: Scalars['ID']
    /** Blocknumber of the block in which the event was emitted. */
    inBlock: Scalars['Int']
    /** Hash of the extrinsic which caused the event to be emitted */
    inExtrinsic?: Maybe<Scalars['String']>
    /** Index of event in block from which it was emitted. */
    indexInBlock: Scalars['Int']
    /** Network the block was produced in */
    network: Network
    /** Filtering options for interface implementers */
    type?: Maybe<EventTypeOptions>
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
  }

export type ApplicationWithdrawnEventConnection = {
  __typename: 'ApplicationWithdrawnEventConnection'
  edges: Array<ApplicationWithdrawnEventEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type ApplicationWithdrawnEventCreateInput = {
  application: Scalars['ID']
  group: Scalars['ID']
  inBlock: Scalars['Float']
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock: Scalars['Float']
  network: Network
}

export type ApplicationWithdrawnEventEdge = {
  __typename: 'ApplicationWithdrawnEventEdge'
  cursor: Scalars['String']
  node: ApplicationWithdrawnEvent
}

export enum ApplicationWithdrawnEventOrderByInput {
  ApplicationAsc = 'application_ASC',
  ApplicationDesc = 'application_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  GroupAsc = 'group_ASC',
  GroupDesc = 'group_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type ApplicationWithdrawnEventUpdateInput = {
  application?: InputMaybe<Scalars['ID']>
  group?: InputMaybe<Scalars['ID']>
  inBlock?: InputMaybe<Scalars['Float']>
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock?: InputMaybe<Scalars['Float']>
  network?: InputMaybe<Network>
}

export type ApplicationWithdrawnEventWhereInput = {
  AND?: InputMaybe<Array<ApplicationWithdrawnEventWhereInput>>
  OR?: InputMaybe<Array<ApplicationWithdrawnEventWhereInput>>
  application?: InputMaybe<WorkingGroupApplicationWhereInput>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  group?: InputMaybe<WorkingGroupWhereInput>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  inBlock_eq?: InputMaybe<Scalars['Int']>
  inBlock_gt?: InputMaybe<Scalars['Int']>
  inBlock_gte?: InputMaybe<Scalars['Int']>
  inBlock_in?: InputMaybe<Array<Scalars['Int']>>
  inBlock_lt?: InputMaybe<Scalars['Int']>
  inBlock_lte?: InputMaybe<Scalars['Int']>
  inExtrinsic_contains?: InputMaybe<Scalars['String']>
  inExtrinsic_endsWith?: InputMaybe<Scalars['String']>
  inExtrinsic_eq?: InputMaybe<Scalars['String']>
  inExtrinsic_in?: InputMaybe<Array<Scalars['String']>>
  inExtrinsic_startsWith?: InputMaybe<Scalars['String']>
  indexInBlock_eq?: InputMaybe<Scalars['Int']>
  indexInBlock_gt?: InputMaybe<Scalars['Int']>
  indexInBlock_gte?: InputMaybe<Scalars['Int']>
  indexInBlock_in?: InputMaybe<Array<Scalars['Int']>>
  indexInBlock_lt?: InputMaybe<Scalars['Int']>
  indexInBlock_lte?: InputMaybe<Scalars['Int']>
  network_eq?: InputMaybe<Network>
  network_in?: InputMaybe<Array<Network>>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
}

export type ApplicationWithdrawnEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type AppliedOnOpeningEvent = BaseGraphQlObject &
  Event & {
    __typename: 'AppliedOnOpeningEvent'
    application: WorkingGroupApplication
    applicationId: Scalars['String']
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    group: WorkingGroup
    groupId: Scalars['String']
    id: Scalars['ID']
    /** Blocknumber of the block in which the event was emitted. */
    inBlock: Scalars['Int']
    /** Hash of the extrinsic which caused the event to be emitted */
    inExtrinsic?: Maybe<Scalars['String']>
    /** Index of event in block from which it was emitted. */
    indexInBlock: Scalars['Int']
    /** Network the block was produced in */
    network: Network
    opening: WorkingGroupOpening
    openingId: Scalars['String']
    /** Filtering options for interface implementers */
    type?: Maybe<EventTypeOptions>
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
  }

export type AppliedOnOpeningEventConnection = {
  __typename: 'AppliedOnOpeningEventConnection'
  edges: Array<AppliedOnOpeningEventEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type AppliedOnOpeningEventCreateInput = {
  application: Scalars['ID']
  group: Scalars['ID']
  inBlock: Scalars['Float']
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock: Scalars['Float']
  network: Network
  opening: Scalars['ID']
}

export type AppliedOnOpeningEventEdge = {
  __typename: 'AppliedOnOpeningEventEdge'
  cursor: Scalars['String']
  node: AppliedOnOpeningEvent
}

export enum AppliedOnOpeningEventOrderByInput {
  ApplicationAsc = 'application_ASC',
  ApplicationDesc = 'application_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  GroupAsc = 'group_ASC',
  GroupDesc = 'group_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  OpeningAsc = 'opening_ASC',
  OpeningDesc = 'opening_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type AppliedOnOpeningEventUpdateInput = {
  application?: InputMaybe<Scalars['ID']>
  group?: InputMaybe<Scalars['ID']>
  inBlock?: InputMaybe<Scalars['Float']>
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock?: InputMaybe<Scalars['Float']>
  network?: InputMaybe<Network>
  opening?: InputMaybe<Scalars['ID']>
}

export type AppliedOnOpeningEventWhereInput = {
  AND?: InputMaybe<Array<AppliedOnOpeningEventWhereInput>>
  OR?: InputMaybe<Array<AppliedOnOpeningEventWhereInput>>
  application?: InputMaybe<WorkingGroupApplicationWhereInput>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  group?: InputMaybe<WorkingGroupWhereInput>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  inBlock_eq?: InputMaybe<Scalars['Int']>
  inBlock_gt?: InputMaybe<Scalars['Int']>
  inBlock_gte?: InputMaybe<Scalars['Int']>
  inBlock_in?: InputMaybe<Array<Scalars['Int']>>
  inBlock_lt?: InputMaybe<Scalars['Int']>
  inBlock_lte?: InputMaybe<Scalars['Int']>
  inExtrinsic_contains?: InputMaybe<Scalars['String']>
  inExtrinsic_endsWith?: InputMaybe<Scalars['String']>
  inExtrinsic_eq?: InputMaybe<Scalars['String']>
  inExtrinsic_in?: InputMaybe<Array<Scalars['String']>>
  inExtrinsic_startsWith?: InputMaybe<Scalars['String']>
  indexInBlock_eq?: InputMaybe<Scalars['Int']>
  indexInBlock_gt?: InputMaybe<Scalars['Int']>
  indexInBlock_gte?: InputMaybe<Scalars['Int']>
  indexInBlock_in?: InputMaybe<Array<Scalars['Int']>>
  indexInBlock_lt?: InputMaybe<Scalars['Int']>
  indexInBlock_lte?: InputMaybe<Scalars['Int']>
  network_eq?: InputMaybe<Network>
  network_in?: InputMaybe<Array<Network>>
  opening?: InputMaybe<WorkingGroupOpeningWhereInput>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
}

export type AppliedOnOpeningEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type Asset = AssetExternal | AssetJoystreamStorage | AssetNone

export type AssetExternal = {
  __typename: 'AssetExternal'
  /** JSON array of the urls */
  urls: Scalars['String']
}

export type AssetJoystreamStorage = {
  __typename: 'AssetJoystreamStorage'
  /** Related DataObject entity */
  dataObject?: Maybe<DataObject>
}

export type AssetNone = {
  __typename: 'AssetNone'
  phantom?: Maybe<Scalars['Int']>
}

export type Avatar = AvatarObject | AvatarUri

export type AvatarObject = {
  __typename: 'AvatarObject'
  /** The avatar data object */
  avatarObject?: Maybe<DataObject>
}

export type AvatarUri = {
  __typename: 'AvatarUri'
  /** The avatar URL */
  avatarUri: Scalars['String']
}

export type BaseGraphQlObject = {
  createdAt: Scalars['DateTime']
  createdById: Scalars['String']
  deletedAt?: Maybe<Scalars['DateTime']>
  deletedById?: Maybe<Scalars['String']>
  id: Scalars['ID']
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedById?: Maybe<Scalars['String']>
  version: Scalars['Int']
}

export type BaseModel = BaseGraphQlObject & {
  __typename: 'BaseModel'
  createdAt: Scalars['DateTime']
  createdById: Scalars['String']
  deletedAt?: Maybe<Scalars['DateTime']>
  deletedById?: Maybe<Scalars['String']>
  id: Scalars['ID']
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedById?: Maybe<Scalars['String']>
  version: Scalars['Int']
}

export type BaseModelUuid = BaseGraphQlObject & {
  __typename: 'BaseModelUUID'
  createdAt: Scalars['DateTime']
  createdById: Scalars['String']
  deletedAt?: Maybe<Scalars['DateTime']>
  deletedById?: Maybe<Scalars['String']>
  id: Scalars['ID']
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedById?: Maybe<Scalars['String']>
  version: Scalars['Int']
}

export type BaseWhereInput = {
  createdAt_eq?: InputMaybe<Scalars['String']>
  createdAt_gt?: InputMaybe<Scalars['String']>
  createdAt_gte?: InputMaybe<Scalars['String']>
  createdAt_lt?: InputMaybe<Scalars['String']>
  createdAt_lte?: InputMaybe<Scalars['String']>
  createdById_eq?: InputMaybe<Scalars['String']>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['String']>
  deletedAt_gt?: InputMaybe<Scalars['String']>
  deletedAt_gte?: InputMaybe<Scalars['String']>
  deletedAt_lt?: InputMaybe<Scalars['String']>
  deletedAt_lte?: InputMaybe<Scalars['String']>
  deletedById_eq?: InputMaybe<Scalars['String']>
  id_eq?: InputMaybe<Scalars['String']>
  id_in?: InputMaybe<Array<Scalars['String']>>
  updatedAt_eq?: InputMaybe<Scalars['String']>
  updatedAt_gt?: InputMaybe<Scalars['String']>
  updatedAt_gte?: InputMaybe<Scalars['String']>
  updatedAt_lt?: InputMaybe<Scalars['String']>
  updatedAt_lte?: InputMaybe<Scalars['String']>
  updatedById_eq?: InputMaybe<Scalars['String']>
}

export type Bounty = BaseGraphQlObject & {
  __typename: 'Bounty'
  bountycontributionbounty?: Maybe<Array<BountyContribution>>
  bountyentrybounty?: Maybe<Array<BountyEntry>>
  /** Amount of funding provided by the creator */
  cherry: Scalars['BigInt']
  /** Bounty assurance contract type */
  contractType: BountyContractType
  createdAt: Scalars['DateTime']
  createdById: Scalars['String']
  createdInEvent: BountyCreatedEvent
  createdInEventId: Scalars['String']
  creator?: Maybe<Membership>
  creatorId?: Maybe<Scalars['String']>
  deletedAt?: Maybe<Scalars['DateTime']>
  deletedById?: Maybe<Scalars['String']>
  /** Bounty description */
  description: Scalars['String']
  discussionThread: ForumThread
  discussionThreadId: Scalars['String']
  /** Stake minimum amount required to submit work entry to the bounty */
  entrantStake: Scalars['BigInt']
  /** Bounty funding type */
  fundingType: BountyFundingType
  id: Scalars['ID']
  /** Number of block from end of work period until oracle can no longer decide winners */
  judgingPeriod: Scalars['Int']
  maxFundingReachedEvent?: Maybe<BountyMaxFundingReachedEvent>
  maxFundingReachedEventId?: Maybe<Scalars['String']>
  oracle?: Maybe<Membership>
  oracleId?: Maybe<Scalars['String']>
  /** Current bounty stage */
  stage: BountyStage
  /** Bounty title */
  title: Scalars['String']
  totalFunding: Scalars['BigInt']
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedById?: Maybe<Scalars['String']>
  version: Scalars['Int']
  /** Number of blocks from end of funding period until people can no longer submit bounty submissions */
  workPeriod: Scalars['Int']
}

export type BountyConnection = {
  __typename: 'BountyConnection'
  edges: Array<BountyEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type BountyContractClosed = {
  __typename: 'BountyContractClosed'
  whitelist?: Maybe<Array<Membership>>
}

export type BountyContractOpen = {
  __typename: 'BountyContractOpen'
  dummy?: Maybe<Scalars['Int']>
}

export type BountyContractType = BountyContractClosed | BountyContractOpen

export type BountyContribution = BaseGraphQlObject & {
  __typename: 'BountyContribution'
  /** Amount of the contribution */
  amount: Scalars['BigInt']
  bounty: Bounty
  bountyId: Scalars['String']
  contributor?: Maybe<Membership>
  contributorId?: Maybe<Scalars['String']>
  createdAt: Scalars['DateTime']
  createdById: Scalars['String']
  deletedAt?: Maybe<Scalars['DateTime']>
  deletedById?: Maybe<Scalars['String']>
  id: Scalars['ID']
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedById?: Maybe<Scalars['String']>
  version: Scalars['Int']
}

export type BountyContributionConnection = {
  __typename: 'BountyContributionConnection'
  edges: Array<BountyContributionEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type BountyContributionCreateInput = {
  amount: Scalars['String']
  bounty: Scalars['ID']
  contributor?: InputMaybe<Scalars['ID']>
}

export type BountyContributionEdge = {
  __typename: 'BountyContributionEdge'
  cursor: Scalars['String']
  node: BountyContribution
}

export enum BountyContributionOrderByInput {
  AmountAsc = 'amount_ASC',
  AmountDesc = 'amount_DESC',
  BountyAsc = 'bounty_ASC',
  BountyDesc = 'bounty_DESC',
  ContributorAsc = 'contributor_ASC',
  ContributorDesc = 'contributor_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type BountyContributionUpdateInput = {
  amount?: InputMaybe<Scalars['String']>
  bounty?: InputMaybe<Scalars['ID']>
  contributor?: InputMaybe<Scalars['ID']>
}

export type BountyContributionWhereInput = {
  AND?: InputMaybe<Array<BountyContributionWhereInput>>
  OR?: InputMaybe<Array<BountyContributionWhereInput>>
  amount_eq?: InputMaybe<Scalars['BigInt']>
  amount_gt?: InputMaybe<Scalars['BigInt']>
  amount_gte?: InputMaybe<Scalars['BigInt']>
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>
  amount_lt?: InputMaybe<Scalars['BigInt']>
  amount_lte?: InputMaybe<Scalars['BigInt']>
  bounty?: InputMaybe<BountyWhereInput>
  contributor?: InputMaybe<MembershipWhereInput>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
}

export type BountyContributionWhereUniqueInput = {
  id: Scalars['ID']
}

export type BountyCreateInput = {
  cherry: Scalars['String']
  contractType: Scalars['JSONObject']
  createdInEvent: Scalars['ID']
  creator?: InputMaybe<Scalars['ID']>
  description: Scalars['String']
  discussionThread: Scalars['ID']
  entrantStake: Scalars['String']
  fundingType: Scalars['JSONObject']
  judgingPeriod: Scalars['Float']
  maxFundingReachedEvent?: InputMaybe<Scalars['ID']>
  oracle?: InputMaybe<Scalars['ID']>
  stage: BountyStage
  title: Scalars['String']
  totalFunding: Scalars['String']
  workPeriod: Scalars['Float']
}

export type BountyCreatedEvent = BaseGraphQlObject &
  Event & {
    __typename: 'BountyCreatedEvent'
    bountycreatedInEvent?: Maybe<Array<Bounty>>
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    id: Scalars['ID']
    /** Blocknumber of the block in which the event was emitted. */
    inBlock: Scalars['Int']
    /** Hash of the extrinsic which caused the event to be emitted */
    inExtrinsic?: Maybe<Scalars['String']>
    /** Index of event in block from which it was emitted. */
    indexInBlock: Scalars['Int']
    /** Network the block was produced in */
    network: Network
    /** Filtering options for interface implementers */
    type?: Maybe<EventTypeOptions>
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
  }

export type BountyCreatedEventConnection = {
  __typename: 'BountyCreatedEventConnection'
  edges: Array<BountyCreatedEventEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type BountyCreatedEventCreateInput = {
  inBlock: Scalars['Float']
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock: Scalars['Float']
  network: Network
}

export type BountyCreatedEventEdge = {
  __typename: 'BountyCreatedEventEdge'
  cursor: Scalars['String']
  node: BountyCreatedEvent
}

export enum BountyCreatedEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type BountyCreatedEventUpdateInput = {
  inBlock?: InputMaybe<Scalars['Float']>
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock?: InputMaybe<Scalars['Float']>
  network?: InputMaybe<Network>
}

export type BountyCreatedEventWhereInput = {
  AND?: InputMaybe<Array<BountyCreatedEventWhereInput>>
  OR?: InputMaybe<Array<BountyCreatedEventWhereInput>>
  bountycreatedInEvent_every?: InputMaybe<BountyWhereInput>
  bountycreatedInEvent_none?: InputMaybe<BountyWhereInput>
  bountycreatedInEvent_some?: InputMaybe<BountyWhereInput>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  inBlock_eq?: InputMaybe<Scalars['Int']>
  inBlock_gt?: InputMaybe<Scalars['Int']>
  inBlock_gte?: InputMaybe<Scalars['Int']>
  inBlock_in?: InputMaybe<Array<Scalars['Int']>>
  inBlock_lt?: InputMaybe<Scalars['Int']>
  inBlock_lte?: InputMaybe<Scalars['Int']>
  inExtrinsic_contains?: InputMaybe<Scalars['String']>
  inExtrinsic_endsWith?: InputMaybe<Scalars['String']>
  inExtrinsic_eq?: InputMaybe<Scalars['String']>
  inExtrinsic_in?: InputMaybe<Array<Scalars['String']>>
  inExtrinsic_startsWith?: InputMaybe<Scalars['String']>
  indexInBlock_eq?: InputMaybe<Scalars['Int']>
  indexInBlock_gt?: InputMaybe<Scalars['Int']>
  indexInBlock_gte?: InputMaybe<Scalars['Int']>
  indexInBlock_in?: InputMaybe<Array<Scalars['Int']>>
  indexInBlock_lt?: InputMaybe<Scalars['Int']>
  indexInBlock_lte?: InputMaybe<Scalars['Int']>
  network_eq?: InputMaybe<Network>
  network_in?: InputMaybe<Array<Network>>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
}

export type BountyCreatedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type BountyEdge = {
  __typename: 'BountyEdge'
  cursor: Scalars['String']
  node: Bounty
}

export type BountyEntry = BaseGraphQlObject & {
  __typename: 'BountyEntry'
  announcedInEvent: WorkEntryAnnouncedEvent
  announcedInEventId: Scalars['String']
  bounty: Bounty
  bountyId: Scalars['String']
  createdAt: Scalars['DateTime']
  createdById: Scalars['String']
  deletedAt?: Maybe<Scalars['DateTime']>
  deletedById?: Maybe<Scalars['String']>
  id: Scalars['ID']
  /** Stake used to announce the work entry. */
  stake: Scalars['BigInt']
  /** Staking account with the work entry stake */
  stakingAccount?: Maybe<Scalars['String']>
  /** Work entry status */
  status: BountyEntryStatus
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedById?: Maybe<Scalars['String']>
  version: Scalars['Int']
  /** Whether at least one work has been submitted */
  workSubmitted: Scalars['Boolean']
  worker: Membership
  workerId: Scalars['String']
  works: Array<BountyWorkData>
}

export type BountyEntryConnection = {
  __typename: 'BountyEntryConnection'
  edges: Array<BountyEntryEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type BountyEntryCreateInput = {
  announcedInEvent: Scalars['ID']
  bounty: Scalars['ID']
  stake: Scalars['String']
  stakingAccount?: InputMaybe<Scalars['String']>
  status: Scalars['JSONObject']
  workSubmitted: Scalars['Boolean']
  worker: Scalars['ID']
}

export type BountyEntryEdge = {
  __typename: 'BountyEntryEdge'
  cursor: Scalars['String']
  node: BountyEntry
}

export enum BountyEntryOrderByInput {
  AnnouncedInEventAsc = 'announcedInEvent_ASC',
  AnnouncedInEventDesc = 'announcedInEvent_DESC',
  BountyAsc = 'bounty_ASC',
  BountyDesc = 'bounty_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  StakeAsc = 'stake_ASC',
  StakeDesc = 'stake_DESC',
  StakingAccountAsc = 'stakingAccount_ASC',
  StakingAccountDesc = 'stakingAccount_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WorkSubmittedAsc = 'workSubmitted_ASC',
  WorkSubmittedDesc = 'workSubmitted_DESC',
  WorkerAsc = 'worker_ASC',
  WorkerDesc = 'worker_DESC',
}

export type BountyEntryStatus =
  | BountyEntryStatusCashedOut
  | BountyEntryStatusPassed
  | BountyEntryStatusRejected
  | BountyEntryStatusWinner
  | BountyEntryStatusWithdrawn
  | BountyEntryStatusWorking

export type BountyEntryStatusCashedOut = {
  __typename: 'BountyEntryStatusCashedOut'
  dummy?: Maybe<Scalars['Int']>
}

export type BountyEntryStatusPassed = {
  __typename: 'BountyEntryStatusPassed'
  dummy?: Maybe<Scalars['Int']>
}

export type BountyEntryStatusRejected = {
  __typename: 'BountyEntryStatusRejected'
  dummy?: Maybe<Scalars['Int']>
}

export type BountyEntryStatusWinner = {
  __typename: 'BountyEntryStatusWinner'
  reward: Scalars['Float']
}

export type BountyEntryStatusWithdrawn = {
  __typename: 'BountyEntryStatusWithdrawn'
  dummy?: Maybe<Scalars['Int']>
}

export type BountyEntryStatusWorking = {
  __typename: 'BountyEntryStatusWorking'
  dummy?: Maybe<Scalars['Int']>
}

export type BountyEntryUpdateInput = {
  announcedInEvent?: InputMaybe<Scalars['ID']>
  bounty?: InputMaybe<Scalars['ID']>
  stake?: InputMaybe<Scalars['String']>
  stakingAccount?: InputMaybe<Scalars['String']>
  status?: InputMaybe<Scalars['JSONObject']>
  workSubmitted?: InputMaybe<Scalars['Boolean']>
  worker?: InputMaybe<Scalars['ID']>
}

export type BountyEntryWhereInput = {
  AND?: InputMaybe<Array<BountyEntryWhereInput>>
  OR?: InputMaybe<Array<BountyEntryWhereInput>>
  announcedInEvent?: InputMaybe<WorkEntryAnnouncedEventWhereInput>
  bounty?: InputMaybe<BountyWhereInput>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  stake_eq?: InputMaybe<Scalars['BigInt']>
  stake_gt?: InputMaybe<Scalars['BigInt']>
  stake_gte?: InputMaybe<Scalars['BigInt']>
  stake_in?: InputMaybe<Array<Scalars['BigInt']>>
  stake_lt?: InputMaybe<Scalars['BigInt']>
  stake_lte?: InputMaybe<Scalars['BigInt']>
  stakingAccount_contains?: InputMaybe<Scalars['String']>
  stakingAccount_endsWith?: InputMaybe<Scalars['String']>
  stakingAccount_eq?: InputMaybe<Scalars['String']>
  stakingAccount_in?: InputMaybe<Array<Scalars['String']>>
  stakingAccount_startsWith?: InputMaybe<Scalars['String']>
  status_json?: InputMaybe<Scalars['JSONObject']>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
  workSubmitted_eq?: InputMaybe<Scalars['Boolean']>
  workSubmitted_in?: InputMaybe<Array<Scalars['Boolean']>>
  worker?: InputMaybe<MembershipWhereInput>
  works_every?: InputMaybe<BountyWorkDataWhereInput>
  works_none?: InputMaybe<BountyWorkDataWhereInput>
  works_some?: InputMaybe<BountyWorkDataWhereInput>
}

export type BountyEntryWhereUniqueInput = {
  id: Scalars['ID']
}

export type BountyFundingLimited = {
  __typename: 'BountyFundingLimited'
  /** Maximum allowed funding period */
  fundingPeriod: Scalars['Int']
  /** Upper boundary for a bounty funding */
  maxFundingAmount: Scalars['Float']
  /** Minimum amount of funds for a successful bounty */
  minFundingAmount: Scalars['Float']
}

export type BountyFundingPerpetual = {
  __typename: 'BountyFundingPerpetual'
  /** Desired funding */
  target: Scalars['Float']
}

export type BountyFundingType = BountyFundingLimited | BountyFundingPerpetual

export type BountyMaxFundingReachedEvent = BaseGraphQlObject &
  Event & {
    __typename: 'BountyMaxFundingReachedEvent'
    bountymaxFundingReachedEvent?: Maybe<Array<Bounty>>
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    id: Scalars['ID']
    /** Blocknumber of the block in which the event was emitted. */
    inBlock: Scalars['Int']
    /** Hash of the extrinsic which caused the event to be emitted */
    inExtrinsic?: Maybe<Scalars['String']>
    /** Index of event in block from which it was emitted. */
    indexInBlock: Scalars['Int']
    /** Network the block was produced in */
    network: Network
    /** Filtering options for interface implementers */
    type?: Maybe<EventTypeOptions>
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
  }

export type BountyMaxFundingReachedEventConnection = {
  __typename: 'BountyMaxFundingReachedEventConnection'
  edges: Array<BountyMaxFundingReachedEventEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type BountyMaxFundingReachedEventCreateInput = {
  inBlock: Scalars['Float']
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock: Scalars['Float']
  network: Network
}

export type BountyMaxFundingReachedEventEdge = {
  __typename: 'BountyMaxFundingReachedEventEdge'
  cursor: Scalars['String']
  node: BountyMaxFundingReachedEvent
}

export enum BountyMaxFundingReachedEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type BountyMaxFundingReachedEventUpdateInput = {
  inBlock?: InputMaybe<Scalars['Float']>
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock?: InputMaybe<Scalars['Float']>
  network?: InputMaybe<Network>
}

export type BountyMaxFundingReachedEventWhereInput = {
  AND?: InputMaybe<Array<BountyMaxFundingReachedEventWhereInput>>
  OR?: InputMaybe<Array<BountyMaxFundingReachedEventWhereInput>>
  bountymaxFundingReachedEvent_every?: InputMaybe<BountyWhereInput>
  bountymaxFundingReachedEvent_none?: InputMaybe<BountyWhereInput>
  bountymaxFundingReachedEvent_some?: InputMaybe<BountyWhereInput>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  inBlock_eq?: InputMaybe<Scalars['Int']>
  inBlock_gt?: InputMaybe<Scalars['Int']>
  inBlock_gte?: InputMaybe<Scalars['Int']>
  inBlock_in?: InputMaybe<Array<Scalars['Int']>>
  inBlock_lt?: InputMaybe<Scalars['Int']>
  inBlock_lte?: InputMaybe<Scalars['Int']>
  inExtrinsic_contains?: InputMaybe<Scalars['String']>
  inExtrinsic_endsWith?: InputMaybe<Scalars['String']>
  inExtrinsic_eq?: InputMaybe<Scalars['String']>
  inExtrinsic_in?: InputMaybe<Array<Scalars['String']>>
  inExtrinsic_startsWith?: InputMaybe<Scalars['String']>
  indexInBlock_eq?: InputMaybe<Scalars['Int']>
  indexInBlock_gt?: InputMaybe<Scalars['Int']>
  indexInBlock_gte?: InputMaybe<Scalars['Int']>
  indexInBlock_in?: InputMaybe<Array<Scalars['Int']>>
  indexInBlock_lt?: InputMaybe<Scalars['Int']>
  indexInBlock_lte?: InputMaybe<Scalars['Int']>
  network_eq?: InputMaybe<Network>
  network_in?: InputMaybe<Array<Network>>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
}

export type BountyMaxFundingReachedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export enum BountyOrderByInput {
  CherryAsc = 'cherry_ASC',
  CherryDesc = 'cherry_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  CreatedInEventAsc = 'createdInEvent_ASC',
  CreatedInEventDesc = 'createdInEvent_DESC',
  CreatorAsc = 'creator_ASC',
  CreatorDesc = 'creator_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  DiscussionThreadAsc = 'discussionThread_ASC',
  DiscussionThreadDesc = 'discussionThread_DESC',
  EntrantStakeAsc = 'entrantStake_ASC',
  EntrantStakeDesc = 'entrantStake_DESC',
  JudgingPeriodAsc = 'judgingPeriod_ASC',
  JudgingPeriodDesc = 'judgingPeriod_DESC',
  MaxFundingReachedEventAsc = 'maxFundingReachedEvent_ASC',
  MaxFundingReachedEventDesc = 'maxFundingReachedEvent_DESC',
  OracleAsc = 'oracle_ASC',
  OracleDesc = 'oracle_DESC',
  StageAsc = 'stage_ASC',
  StageDesc = 'stage_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  TotalFundingAsc = 'totalFunding_ASC',
  TotalFundingDesc = 'totalFunding_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WorkPeriodAsc = 'workPeriod_ASC',
  WorkPeriodDesc = 'workPeriod_DESC',
}

export enum BountyStage {
  Expired = 'Expired',
  Failed = 'Failed',
  Funding = 'Funding',
  Judgment = 'Judgment',
  Successful = 'Successful',
  Terminated = 'Terminated',
  WorkSubmission = 'WorkSubmission',
}

export type BountyUpdateInput = {
  cherry?: InputMaybe<Scalars['String']>
  contractType?: InputMaybe<Scalars['JSONObject']>
  createdInEvent?: InputMaybe<Scalars['ID']>
  creator?: InputMaybe<Scalars['ID']>
  description?: InputMaybe<Scalars['String']>
  discussionThread?: InputMaybe<Scalars['ID']>
  entrantStake?: InputMaybe<Scalars['String']>
  fundingType?: InputMaybe<Scalars['JSONObject']>
  judgingPeriod?: InputMaybe<Scalars['Float']>
  maxFundingReachedEvent?: InputMaybe<Scalars['ID']>
  oracle?: InputMaybe<Scalars['ID']>
  stage?: InputMaybe<BountyStage>
  title?: InputMaybe<Scalars['String']>
  totalFunding?: InputMaybe<Scalars['String']>
  workPeriod?: InputMaybe<Scalars['Float']>
}

export type BountyWhereInput = {
  AND?: InputMaybe<Array<BountyWhereInput>>
  OR?: InputMaybe<Array<BountyWhereInput>>
  bountycontributionbounty_every?: InputMaybe<BountyContributionWhereInput>
  bountycontributionbounty_none?: InputMaybe<BountyContributionWhereInput>
  bountycontributionbounty_some?: InputMaybe<BountyContributionWhereInput>
  bountyentrybounty_every?: InputMaybe<BountyEntryWhereInput>
  bountyentrybounty_none?: InputMaybe<BountyEntryWhereInput>
  bountyentrybounty_some?: InputMaybe<BountyEntryWhereInput>
  cherry_eq?: InputMaybe<Scalars['BigInt']>
  cherry_gt?: InputMaybe<Scalars['BigInt']>
  cherry_gte?: InputMaybe<Scalars['BigInt']>
  cherry_in?: InputMaybe<Array<Scalars['BigInt']>>
  cherry_lt?: InputMaybe<Scalars['BigInt']>
  cherry_lte?: InputMaybe<Scalars['BigInt']>
  contractType_json?: InputMaybe<Scalars['JSONObject']>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  createdInEvent?: InputMaybe<BountyCreatedEventWhereInput>
  creator?: InputMaybe<MembershipWhereInput>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  description_contains?: InputMaybe<Scalars['String']>
  description_endsWith?: InputMaybe<Scalars['String']>
  description_eq?: InputMaybe<Scalars['String']>
  description_in?: InputMaybe<Array<Scalars['String']>>
  description_startsWith?: InputMaybe<Scalars['String']>
  discussionThread?: InputMaybe<ForumThreadWhereInput>
  entrantStake_eq?: InputMaybe<Scalars['BigInt']>
  entrantStake_gt?: InputMaybe<Scalars['BigInt']>
  entrantStake_gte?: InputMaybe<Scalars['BigInt']>
  entrantStake_in?: InputMaybe<Array<Scalars['BigInt']>>
  entrantStake_lt?: InputMaybe<Scalars['BigInt']>
  entrantStake_lte?: InputMaybe<Scalars['BigInt']>
  fundingType_json?: InputMaybe<Scalars['JSONObject']>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  judgingPeriod_eq?: InputMaybe<Scalars['Int']>
  judgingPeriod_gt?: InputMaybe<Scalars['Int']>
  judgingPeriod_gte?: InputMaybe<Scalars['Int']>
  judgingPeriod_in?: InputMaybe<Array<Scalars['Int']>>
  judgingPeriod_lt?: InputMaybe<Scalars['Int']>
  judgingPeriod_lte?: InputMaybe<Scalars['Int']>
  maxFundingReachedEvent?: InputMaybe<BountyMaxFundingReachedEventWhereInput>
  oracle?: InputMaybe<MembershipWhereInput>
  stage_eq?: InputMaybe<BountyStage>
  stage_in?: InputMaybe<Array<BountyStage>>
  title_contains?: InputMaybe<Scalars['String']>
  title_endsWith?: InputMaybe<Scalars['String']>
  title_eq?: InputMaybe<Scalars['String']>
  title_in?: InputMaybe<Array<Scalars['String']>>
  title_startsWith?: InputMaybe<Scalars['String']>
  totalFunding_eq?: InputMaybe<Scalars['BigInt']>
  totalFunding_gt?: InputMaybe<Scalars['BigInt']>
  totalFunding_gte?: InputMaybe<Scalars['BigInt']>
  totalFunding_in?: InputMaybe<Array<Scalars['BigInt']>>
  totalFunding_lt?: InputMaybe<Scalars['BigInt']>
  totalFunding_lte?: InputMaybe<Scalars['BigInt']>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
  workPeriod_eq?: InputMaybe<Scalars['Int']>
  workPeriod_gt?: InputMaybe<Scalars['Int']>
  workPeriod_gte?: InputMaybe<Scalars['Int']>
  workPeriod_in?: InputMaybe<Array<Scalars['Int']>>
  workPeriod_lt?: InputMaybe<Scalars['Int']>
  workPeriod_lte?: InputMaybe<Scalars['Int']>
}

export type BountyWhereUniqueInput = {
  id: Scalars['ID']
}

/** Work data submitted into an entry */
export type BountyWorkData = BaseGraphQlObject & {
  __typename: 'BountyWorkData'
  createdAt: Scalars['DateTime']
  createdById: Scalars['String']
  deletedAt?: Maybe<Scalars['DateTime']>
  deletedById?: Maybe<Scalars['String']>
  /** Description which contains the work itself as a URL, a BLOB, or just text */
  description: Scalars['String']
  entry: Array<BountyEntry>
  id: Scalars['ID']
  /** Title of the work */
  title: Scalars['String']
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedById?: Maybe<Scalars['String']>
  version: Scalars['Int']
}

export type BountyWorkDataConnection = {
  __typename: 'BountyWorkDataConnection'
  edges: Array<BountyWorkDataEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type BountyWorkDataCreateInput = {
  description: Scalars['String']
  title: Scalars['String']
}

export type BountyWorkDataEdge = {
  __typename: 'BountyWorkDataEdge'
  cursor: Scalars['String']
  node: BountyWorkData
}

export enum BountyWorkDataOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type BountyWorkDataUpdateInput = {
  description?: InputMaybe<Scalars['String']>
  title?: InputMaybe<Scalars['String']>
}

export type BountyWorkDataWhereInput = {
  AND?: InputMaybe<Array<BountyWorkDataWhereInput>>
  OR?: InputMaybe<Array<BountyWorkDataWhereInput>>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  description_contains?: InputMaybe<Scalars['String']>
  description_endsWith?: InputMaybe<Scalars['String']>
  description_eq?: InputMaybe<Scalars['String']>
  description_in?: InputMaybe<Array<Scalars['String']>>
  description_startsWith?: InputMaybe<Scalars['String']>
  entry_every?: InputMaybe<BountyEntryWhereInput>
  entry_none?: InputMaybe<BountyEntryWhereInput>
  entry_some?: InputMaybe<BountyEntryWhereInput>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  title_contains?: InputMaybe<Scalars['String']>
  title_endsWith?: InputMaybe<Scalars['String']>
  title_eq?: InputMaybe<Scalars['String']>
  title_in?: InputMaybe<Array<Scalars['String']>>
  title_startsWith?: InputMaybe<Scalars['String']>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
}

export type BountyWorkDataWhereUniqueInput = {
  id: Scalars['ID']
}

export type BudgetBalanceSetEvent = BaseGraphQlObject &
  Event & {
    __typename: 'BudgetBalanceSetEvent'
    /** Budget balance that has been set. */
    balance: Scalars['BigInt']
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    id: Scalars['ID']
    /** Blocknumber of the block in which the event was emitted. */
    inBlock: Scalars['Int']
    /** Hash of the extrinsic which caused the event to be emitted */
    inExtrinsic?: Maybe<Scalars['String']>
    /** Index of event in block from which it was emitted. */
    indexInBlock: Scalars['Int']
    /** Network the block was produced in */
    network: Network
    /** Filtering options for interface implementers */
    type?: Maybe<EventTypeOptions>
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
  }

export type BudgetBalanceSetEventConnection = {
  __typename: 'BudgetBalanceSetEventConnection'
  edges: Array<BudgetBalanceSetEventEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type BudgetBalanceSetEventCreateInput = {
  balance: Scalars['String']
  inBlock: Scalars['Float']
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock: Scalars['Float']
  network: Network
}

export type BudgetBalanceSetEventEdge = {
  __typename: 'BudgetBalanceSetEventEdge'
  cursor: Scalars['String']
  node: BudgetBalanceSetEvent
}

export enum BudgetBalanceSetEventOrderByInput {
  BalanceAsc = 'balance_ASC',
  BalanceDesc = 'balance_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type BudgetBalanceSetEventUpdateInput = {
  balance?: InputMaybe<Scalars['String']>
  inBlock?: InputMaybe<Scalars['Float']>
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock?: InputMaybe<Scalars['Float']>
  network?: InputMaybe<Network>
}

export type BudgetBalanceSetEventWhereInput = {
  AND?: InputMaybe<Array<BudgetBalanceSetEventWhereInput>>
  OR?: InputMaybe<Array<BudgetBalanceSetEventWhereInput>>
  balance_eq?: InputMaybe<Scalars['BigInt']>
  balance_gt?: InputMaybe<Scalars['BigInt']>
  balance_gte?: InputMaybe<Scalars['BigInt']>
  balance_in?: InputMaybe<Array<Scalars['BigInt']>>
  balance_lt?: InputMaybe<Scalars['BigInt']>
  balance_lte?: InputMaybe<Scalars['BigInt']>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  inBlock_eq?: InputMaybe<Scalars['Int']>
  inBlock_gt?: InputMaybe<Scalars['Int']>
  inBlock_gte?: InputMaybe<Scalars['Int']>
  inBlock_in?: InputMaybe<Array<Scalars['Int']>>
  inBlock_lt?: InputMaybe<Scalars['Int']>
  inBlock_lte?: InputMaybe<Scalars['Int']>
  inExtrinsic_contains?: InputMaybe<Scalars['String']>
  inExtrinsic_endsWith?: InputMaybe<Scalars['String']>
  inExtrinsic_eq?: InputMaybe<Scalars['String']>
  inExtrinsic_in?: InputMaybe<Array<Scalars['String']>>
  inExtrinsic_startsWith?: InputMaybe<Scalars['String']>
  indexInBlock_eq?: InputMaybe<Scalars['Int']>
  indexInBlock_gt?: InputMaybe<Scalars['Int']>
  indexInBlock_gte?: InputMaybe<Scalars['Int']>
  indexInBlock_in?: InputMaybe<Array<Scalars['Int']>>
  indexInBlock_lt?: InputMaybe<Scalars['Int']>
  indexInBlock_lte?: InputMaybe<Scalars['Int']>
  network_eq?: InputMaybe<Network>
  network_in?: InputMaybe<Array<Network>>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
}

export type BudgetBalanceSetEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type BudgetIncrementUpdatedEvent = BaseGraphQlObject &
  Event & {
    __typename: 'BudgetIncrementUpdatedEvent'
    /** Amount that is added to the budget each time it's refilled. */
    amount: Scalars['BigInt']
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    id: Scalars['ID']
    /** Blocknumber of the block in which the event was emitted. */
    inBlock: Scalars['Int']
    /** Hash of the extrinsic which caused the event to be emitted */
    inExtrinsic?: Maybe<Scalars['String']>
    /** Index of event in block from which it was emitted. */
    indexInBlock: Scalars['Int']
    /** Network the block was produced in */
    network: Network
    /** Filtering options for interface implementers */
    type?: Maybe<EventTypeOptions>
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
  }

export type BudgetIncrementUpdatedEventConnection = {
  __typename: 'BudgetIncrementUpdatedEventConnection'
  edges: Array<BudgetIncrementUpdatedEventEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type BudgetIncrementUpdatedEventCreateInput = {
  amount: Scalars['String']
  inBlock: Scalars['Float']
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock: Scalars['Float']
  network: Network
}

export type BudgetIncrementUpdatedEventEdge = {
  __typename: 'BudgetIncrementUpdatedEventEdge'
  cursor: Scalars['String']
  node: BudgetIncrementUpdatedEvent
}

export enum BudgetIncrementUpdatedEventOrderByInput {
  AmountAsc = 'amount_ASC',
  AmountDesc = 'amount_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type BudgetIncrementUpdatedEventUpdateInput = {
  amount?: InputMaybe<Scalars['String']>
  inBlock?: InputMaybe<Scalars['Float']>
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock?: InputMaybe<Scalars['Float']>
  network?: InputMaybe<Network>
}

export type BudgetIncrementUpdatedEventWhereInput = {
  AND?: InputMaybe<Array<BudgetIncrementUpdatedEventWhereInput>>
  OR?: InputMaybe<Array<BudgetIncrementUpdatedEventWhereInput>>
  amount_eq?: InputMaybe<Scalars['BigInt']>
  amount_gt?: InputMaybe<Scalars['BigInt']>
  amount_gte?: InputMaybe<Scalars['BigInt']>
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>
  amount_lt?: InputMaybe<Scalars['BigInt']>
  amount_lte?: InputMaybe<Scalars['BigInt']>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  inBlock_eq?: InputMaybe<Scalars['Int']>
  inBlock_gt?: InputMaybe<Scalars['Int']>
  inBlock_gte?: InputMaybe<Scalars['Int']>
  inBlock_in?: InputMaybe<Array<Scalars['Int']>>
  inBlock_lt?: InputMaybe<Scalars['Int']>
  inBlock_lte?: InputMaybe<Scalars['Int']>
  inExtrinsic_contains?: InputMaybe<Scalars['String']>
  inExtrinsic_endsWith?: InputMaybe<Scalars['String']>
  inExtrinsic_eq?: InputMaybe<Scalars['String']>
  inExtrinsic_in?: InputMaybe<Array<Scalars['String']>>
  inExtrinsic_startsWith?: InputMaybe<Scalars['String']>
  indexInBlock_eq?: InputMaybe<Scalars['Int']>
  indexInBlock_gt?: InputMaybe<Scalars['Int']>
  indexInBlock_gte?: InputMaybe<Scalars['Int']>
  indexInBlock_in?: InputMaybe<Array<Scalars['Int']>>
  indexInBlock_lt?: InputMaybe<Scalars['Int']>
  indexInBlock_lte?: InputMaybe<Scalars['Int']>
  network_eq?: InputMaybe<Network>
  network_in?: InputMaybe<Array<Network>>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
}

export type BudgetIncrementUpdatedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type BudgetRefillEvent = BaseGraphQlObject &
  Event & {
    __typename: 'BudgetRefillEvent'
    /** Balance that has been refilled. */
    balance: Scalars['BigInt']
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    id: Scalars['ID']
    /** Blocknumber of the block in which the event was emitted. */
    inBlock: Scalars['Int']
    /** Hash of the extrinsic which caused the event to be emitted */
    inExtrinsic?: Maybe<Scalars['String']>
    /** Index of event in block from which it was emitted. */
    indexInBlock: Scalars['Int']
    /** Network the block was produced in */
    network: Network
    /** Filtering options for interface implementers */
    type?: Maybe<EventTypeOptions>
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
  }

export type BudgetRefillEventConnection = {
  __typename: 'BudgetRefillEventConnection'
  edges: Array<BudgetRefillEventEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type BudgetRefillEventCreateInput = {
  balance: Scalars['String']
  inBlock: Scalars['Float']
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock: Scalars['Float']
  network: Network
}

export type BudgetRefillEventEdge = {
  __typename: 'BudgetRefillEventEdge'
  cursor: Scalars['String']
  node: BudgetRefillEvent
}

export enum BudgetRefillEventOrderByInput {
  BalanceAsc = 'balance_ASC',
  BalanceDesc = 'balance_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type BudgetRefillEventUpdateInput = {
  balance?: InputMaybe<Scalars['String']>
  inBlock?: InputMaybe<Scalars['Float']>
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock?: InputMaybe<Scalars['Float']>
  network?: InputMaybe<Network>
}

export type BudgetRefillEventWhereInput = {
  AND?: InputMaybe<Array<BudgetRefillEventWhereInput>>
  OR?: InputMaybe<Array<BudgetRefillEventWhereInput>>
  balance_eq?: InputMaybe<Scalars['BigInt']>
  balance_gt?: InputMaybe<Scalars['BigInt']>
  balance_gte?: InputMaybe<Scalars['BigInt']>
  balance_in?: InputMaybe<Array<Scalars['BigInt']>>
  balance_lt?: InputMaybe<Scalars['BigInt']>
  balance_lte?: InputMaybe<Scalars['BigInt']>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  inBlock_eq?: InputMaybe<Scalars['Int']>
  inBlock_gt?: InputMaybe<Scalars['Int']>
  inBlock_gte?: InputMaybe<Scalars['Int']>
  inBlock_in?: InputMaybe<Array<Scalars['Int']>>
  inBlock_lt?: InputMaybe<Scalars['Int']>
  inBlock_lte?: InputMaybe<Scalars['Int']>
  inExtrinsic_contains?: InputMaybe<Scalars['String']>
  inExtrinsic_endsWith?: InputMaybe<Scalars['String']>
  inExtrinsic_eq?: InputMaybe<Scalars['String']>
  inExtrinsic_in?: InputMaybe<Array<Scalars['String']>>
  inExtrinsic_startsWith?: InputMaybe<Scalars['String']>
  indexInBlock_eq?: InputMaybe<Scalars['Int']>
  indexInBlock_gt?: InputMaybe<Scalars['Int']>
  indexInBlock_gte?: InputMaybe<Scalars['Int']>
  indexInBlock_in?: InputMaybe<Array<Scalars['Int']>>
  indexInBlock_lt?: InputMaybe<Scalars['Int']>
  indexInBlock_lte?: InputMaybe<Scalars['Int']>
  network_eq?: InputMaybe<Network>
  network_in?: InputMaybe<Array<Network>>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
}

export type BudgetRefillEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type BudgetRefillPlannedEvent = BaseGraphQlObject &
  Event & {
    __typename: 'BudgetRefillPlannedEvent'
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    id: Scalars['ID']
    /** Blocknumber of the block in which the event was emitted. */
    inBlock: Scalars['Int']
    /** Hash of the extrinsic which caused the event to be emitted */
    inExtrinsic?: Maybe<Scalars['String']>
    /** Index of event in block from which it was emitted. */
    indexInBlock: Scalars['Int']
    /** Network the block was produced in */
    network: Network
    nextRefillInBlock: Scalars['Int']
    /** Filtering options for interface implementers */
    type?: Maybe<EventTypeOptions>
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
  }

export type BudgetRefillPlannedEventConnection = {
  __typename: 'BudgetRefillPlannedEventConnection'
  edges: Array<BudgetRefillPlannedEventEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type BudgetRefillPlannedEventCreateInput = {
  inBlock: Scalars['Float']
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock: Scalars['Float']
  network: Network
  nextRefillInBlock: Scalars['Float']
}

export type BudgetRefillPlannedEventEdge = {
  __typename: 'BudgetRefillPlannedEventEdge'
  cursor: Scalars['String']
  node: BudgetRefillPlannedEvent
}

export enum BudgetRefillPlannedEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  NextRefillInBlockAsc = 'nextRefillInBlock_ASC',
  NextRefillInBlockDesc = 'nextRefillInBlock_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type BudgetRefillPlannedEventUpdateInput = {
  inBlock?: InputMaybe<Scalars['Float']>
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock?: InputMaybe<Scalars['Float']>
  network?: InputMaybe<Network>
  nextRefillInBlock?: InputMaybe<Scalars['Float']>
}

export type BudgetRefillPlannedEventWhereInput = {
  AND?: InputMaybe<Array<BudgetRefillPlannedEventWhereInput>>
  OR?: InputMaybe<Array<BudgetRefillPlannedEventWhereInput>>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  inBlock_eq?: InputMaybe<Scalars['Int']>
  inBlock_gt?: InputMaybe<Scalars['Int']>
  inBlock_gte?: InputMaybe<Scalars['Int']>
  inBlock_in?: InputMaybe<Array<Scalars['Int']>>
  inBlock_lt?: InputMaybe<Scalars['Int']>
  inBlock_lte?: InputMaybe<Scalars['Int']>
  inExtrinsic_contains?: InputMaybe<Scalars['String']>
  inExtrinsic_endsWith?: InputMaybe<Scalars['String']>
  inExtrinsic_eq?: InputMaybe<Scalars['String']>
  inExtrinsic_in?: InputMaybe<Array<Scalars['String']>>
  inExtrinsic_startsWith?: InputMaybe<Scalars['String']>
  indexInBlock_eq?: InputMaybe<Scalars['Int']>
  indexInBlock_gt?: InputMaybe<Scalars['Int']>
  indexInBlock_gte?: InputMaybe<Scalars['Int']>
  indexInBlock_in?: InputMaybe<Array<Scalars['Int']>>
  indexInBlock_lt?: InputMaybe<Scalars['Int']>
  indexInBlock_lte?: InputMaybe<Scalars['Int']>
  network_eq?: InputMaybe<Network>
  network_in?: InputMaybe<Array<Network>>
  nextRefillInBlock_eq?: InputMaybe<Scalars['Int']>
  nextRefillInBlock_gt?: InputMaybe<Scalars['Int']>
  nextRefillInBlock_gte?: InputMaybe<Scalars['Int']>
  nextRefillInBlock_in?: InputMaybe<Array<Scalars['Int']>>
  nextRefillInBlock_lt?: InputMaybe<Scalars['Int']>
  nextRefillInBlock_lte?: InputMaybe<Scalars['Int']>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
}

export type BudgetRefillPlannedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type BudgetSetEvent = BaseGraphQlObject &
  Event & {
    __typename: 'BudgetSetEvent'
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    group: WorkingGroup
    groupId: Scalars['String']
    id: Scalars['ID']
    /** Blocknumber of the block in which the event was emitted. */
    inBlock: Scalars['Int']
    /** Hash of the extrinsic which caused the event to be emitted */
    inExtrinsic?: Maybe<Scalars['String']>
    /** Index of event in block from which it was emitted. */
    indexInBlock: Scalars['Int']
    /** Network the block was produced in */
    network: Network
    /** New working group budget */
    newBudget: Scalars['BigInt']
    /** Filtering options for interface implementers */
    type?: Maybe<EventTypeOptions>
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
  }

export type BudgetSetEventConnection = {
  __typename: 'BudgetSetEventConnection'
  edges: Array<BudgetSetEventEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type BudgetSetEventCreateInput = {
  group: Scalars['ID']
  inBlock: Scalars['Float']
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock: Scalars['Float']
  network: Network
  newBudget: Scalars['String']
}

export type BudgetSetEventEdge = {
  __typename: 'BudgetSetEventEdge'
  cursor: Scalars['String']
  node: BudgetSetEvent
}

export enum BudgetSetEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  GroupAsc = 'group_ASC',
  GroupDesc = 'group_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  NewBudgetAsc = 'newBudget_ASC',
  NewBudgetDesc = 'newBudget_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type BudgetSetEventUpdateInput = {
  group?: InputMaybe<Scalars['ID']>
  inBlock?: InputMaybe<Scalars['Float']>
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock?: InputMaybe<Scalars['Float']>
  network?: InputMaybe<Network>
  newBudget?: InputMaybe<Scalars['String']>
}

export type BudgetSetEventWhereInput = {
  AND?: InputMaybe<Array<BudgetSetEventWhereInput>>
  OR?: InputMaybe<Array<BudgetSetEventWhereInput>>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  group?: InputMaybe<WorkingGroupWhereInput>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  inBlock_eq?: InputMaybe<Scalars['Int']>
  inBlock_gt?: InputMaybe<Scalars['Int']>
  inBlock_gte?: InputMaybe<Scalars['Int']>
  inBlock_in?: InputMaybe<Array<Scalars['Int']>>
  inBlock_lt?: InputMaybe<Scalars['Int']>
  inBlock_lte?: InputMaybe<Scalars['Int']>
  inExtrinsic_contains?: InputMaybe<Scalars['String']>
  inExtrinsic_endsWith?: InputMaybe<Scalars['String']>
  inExtrinsic_eq?: InputMaybe<Scalars['String']>
  inExtrinsic_in?: InputMaybe<Array<Scalars['String']>>
  inExtrinsic_startsWith?: InputMaybe<Scalars['String']>
  indexInBlock_eq?: InputMaybe<Scalars['Int']>
  indexInBlock_gt?: InputMaybe<Scalars['Int']>
  indexInBlock_gte?: InputMaybe<Scalars['Int']>
  indexInBlock_in?: InputMaybe<Array<Scalars['Int']>>
  indexInBlock_lt?: InputMaybe<Scalars['Int']>
  indexInBlock_lte?: InputMaybe<Scalars['Int']>
  network_eq?: InputMaybe<Network>
  network_in?: InputMaybe<Array<Network>>
  newBudget_eq?: InputMaybe<Scalars['BigInt']>
  newBudget_gt?: InputMaybe<Scalars['BigInt']>
  newBudget_gte?: InputMaybe<Scalars['BigInt']>
  newBudget_in?: InputMaybe<Array<Scalars['BigInt']>>
  newBudget_lt?: InputMaybe<Scalars['BigInt']>
  newBudget_lte?: InputMaybe<Scalars['BigInt']>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
}

export type BudgetSetEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type BudgetSpendingEvent = BaseGraphQlObject &
  Event & {
    __typename: 'BudgetSpendingEvent'
    /** Amount beeing spent */
    amount: Scalars['BigInt']
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    group: WorkingGroup
    groupId: Scalars['String']
    id: Scalars['ID']
    /** Blocknumber of the block in which the event was emitted. */
    inBlock: Scalars['Int']
    /** Hash of the extrinsic which caused the event to be emitted */
    inExtrinsic?: Maybe<Scalars['String']>
    /** Index of event in block from which it was emitted. */
    indexInBlock: Scalars['Int']
    /** Network the block was produced in */
    network: Network
    /** Optional rationale */
    rationale?: Maybe<Scalars['String']>
    /** Reciever account address */
    reciever: Scalars['String']
    /** Filtering options for interface implementers */
    type?: Maybe<EventTypeOptions>
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
  }

export type BudgetSpendingEventConnection = {
  __typename: 'BudgetSpendingEventConnection'
  edges: Array<BudgetSpendingEventEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type BudgetSpendingEventCreateInput = {
  amount: Scalars['String']
  group: Scalars['ID']
  inBlock: Scalars['Float']
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock: Scalars['Float']
  network: Network
  rationale?: InputMaybe<Scalars['String']>
  reciever: Scalars['String']
}

export type BudgetSpendingEventEdge = {
  __typename: 'BudgetSpendingEventEdge'
  cursor: Scalars['String']
  node: BudgetSpendingEvent
}

export enum BudgetSpendingEventOrderByInput {
  AmountAsc = 'amount_ASC',
  AmountDesc = 'amount_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  GroupAsc = 'group_ASC',
  GroupDesc = 'group_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  RationaleAsc = 'rationale_ASC',
  RationaleDesc = 'rationale_DESC',
  RecieverAsc = 'reciever_ASC',
  RecieverDesc = 'reciever_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type BudgetSpendingEventUpdateInput = {
  amount?: InputMaybe<Scalars['String']>
  group?: InputMaybe<Scalars['ID']>
  inBlock?: InputMaybe<Scalars['Float']>
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock?: InputMaybe<Scalars['Float']>
  network?: InputMaybe<Network>
  rationale?: InputMaybe<Scalars['String']>
  reciever?: InputMaybe<Scalars['String']>
}

export type BudgetSpendingEventWhereInput = {
  AND?: InputMaybe<Array<BudgetSpendingEventWhereInput>>
  OR?: InputMaybe<Array<BudgetSpendingEventWhereInput>>
  amount_eq?: InputMaybe<Scalars['BigInt']>
  amount_gt?: InputMaybe<Scalars['BigInt']>
  amount_gte?: InputMaybe<Scalars['BigInt']>
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>
  amount_lt?: InputMaybe<Scalars['BigInt']>
  amount_lte?: InputMaybe<Scalars['BigInt']>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  group?: InputMaybe<WorkingGroupWhereInput>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  inBlock_eq?: InputMaybe<Scalars['Int']>
  inBlock_gt?: InputMaybe<Scalars['Int']>
  inBlock_gte?: InputMaybe<Scalars['Int']>
  inBlock_in?: InputMaybe<Array<Scalars['Int']>>
  inBlock_lt?: InputMaybe<Scalars['Int']>
  inBlock_lte?: InputMaybe<Scalars['Int']>
  inExtrinsic_contains?: InputMaybe<Scalars['String']>
  inExtrinsic_endsWith?: InputMaybe<Scalars['String']>
  inExtrinsic_eq?: InputMaybe<Scalars['String']>
  inExtrinsic_in?: InputMaybe<Array<Scalars['String']>>
  inExtrinsic_startsWith?: InputMaybe<Scalars['String']>
  indexInBlock_eq?: InputMaybe<Scalars['Int']>
  indexInBlock_gt?: InputMaybe<Scalars['Int']>
  indexInBlock_gte?: InputMaybe<Scalars['Int']>
  indexInBlock_in?: InputMaybe<Array<Scalars['Int']>>
  indexInBlock_lt?: InputMaybe<Scalars['Int']>
  indexInBlock_lte?: InputMaybe<Scalars['Int']>
  network_eq?: InputMaybe<Network>
  network_in?: InputMaybe<Array<Network>>
  rationale_contains?: InputMaybe<Scalars['String']>
  rationale_endsWith?: InputMaybe<Scalars['String']>
  rationale_eq?: InputMaybe<Scalars['String']>
  rationale_in?: InputMaybe<Array<Scalars['String']>>
  rationale_startsWith?: InputMaybe<Scalars['String']>
  reciever_contains?: InputMaybe<Scalars['String']>
  reciever_endsWith?: InputMaybe<Scalars['String']>
  reciever_eq?: InputMaybe<Scalars['String']>
  reciever_in?: InputMaybe<Array<Scalars['String']>>
  reciever_startsWith?: InputMaybe<Scalars['String']>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
}

export type BudgetSpendingEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type CancelWorkingGroupLeadOpeningProposalDetails = {
  __typename: 'CancelWorkingGroupLeadOpeningProposalDetails'
  /** Opening to be cancelled */
  opening?: Maybe<WorkingGroupOpening>
}

export type CandidacyNoteMetadata = BaseGraphQlObject & {
  __typename: 'CandidacyNoteMetadata'
  /** Image uri of candidate's banner. */
  bannerImageUri?: Maybe<Scalars['String']>
  /** Candidate program in form of bullet points. Takes array with one empty string [''] as deletion request. */
  bulletPoints: Array<Scalars['String']>
  candidacynoteseteventnoteMetadata?: Maybe<Array<CandidacyNoteSetEvent>>
  candidatenoteMetadata?: Maybe<Array<Candidate>>
  createdAt: Scalars['DateTime']
  createdById: Scalars['String']
  deletedAt?: Maybe<Scalars['DateTime']>
  deletedById?: Maybe<Scalars['String']>
  /** Candidacy description (Markdown-formatted). */
  description?: Maybe<Scalars['String']>
  /** Candidacy header text. */
  header?: Maybe<Scalars['String']>
  id: Scalars['ID']
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedById?: Maybe<Scalars['String']>
  version: Scalars['Int']
}

export type CandidacyNoteMetadataConnection = {
  __typename: 'CandidacyNoteMetadataConnection'
  edges: Array<CandidacyNoteMetadataEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type CandidacyNoteMetadataCreateInput = {
  bannerImageUri?: InputMaybe<Scalars['String']>
  bulletPoints: Array<Scalars['String']>
  description?: InputMaybe<Scalars['String']>
  header?: InputMaybe<Scalars['String']>
}

export type CandidacyNoteMetadataEdge = {
  __typename: 'CandidacyNoteMetadataEdge'
  cursor: Scalars['String']
  node: CandidacyNoteMetadata
}

export enum CandidacyNoteMetadataOrderByInput {
  BannerImageUriAsc = 'bannerImageUri_ASC',
  BannerImageUriDesc = 'bannerImageUri_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  HeaderAsc = 'header_ASC',
  HeaderDesc = 'header_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type CandidacyNoteMetadataUpdateInput = {
  bannerImageUri?: InputMaybe<Scalars['String']>
  bulletPoints?: InputMaybe<Array<Scalars['String']>>
  description?: InputMaybe<Scalars['String']>
  header?: InputMaybe<Scalars['String']>
}

export type CandidacyNoteMetadataWhereInput = {
  AND?: InputMaybe<Array<CandidacyNoteMetadataWhereInput>>
  OR?: InputMaybe<Array<CandidacyNoteMetadataWhereInput>>
  bannerImageUri_contains?: InputMaybe<Scalars['String']>
  bannerImageUri_endsWith?: InputMaybe<Scalars['String']>
  bannerImageUri_eq?: InputMaybe<Scalars['String']>
  bannerImageUri_in?: InputMaybe<Array<Scalars['String']>>
  bannerImageUri_startsWith?: InputMaybe<Scalars['String']>
  bulletPoints_containsAll?: InputMaybe<Array<Scalars['String']>>
  bulletPoints_containsAny?: InputMaybe<Array<Scalars['String']>>
  bulletPoints_containsNone?: InputMaybe<Array<Scalars['String']>>
  candidacynoteseteventnoteMetadata_every?: InputMaybe<CandidacyNoteSetEventWhereInput>
  candidacynoteseteventnoteMetadata_none?: InputMaybe<CandidacyNoteSetEventWhereInput>
  candidacynoteseteventnoteMetadata_some?: InputMaybe<CandidacyNoteSetEventWhereInput>
  candidatenoteMetadata_every?: InputMaybe<CandidateWhereInput>
  candidatenoteMetadata_none?: InputMaybe<CandidateWhereInput>
  candidatenoteMetadata_some?: InputMaybe<CandidateWhereInput>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  description_contains?: InputMaybe<Scalars['String']>
  description_endsWith?: InputMaybe<Scalars['String']>
  description_eq?: InputMaybe<Scalars['String']>
  description_in?: InputMaybe<Array<Scalars['String']>>
  description_startsWith?: InputMaybe<Scalars['String']>
  header_contains?: InputMaybe<Scalars['String']>
  header_endsWith?: InputMaybe<Scalars['String']>
  header_eq?: InputMaybe<Scalars['String']>
  header_in?: InputMaybe<Array<Scalars['String']>>
  header_startsWith?: InputMaybe<Scalars['String']>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
}

export type CandidacyNoteMetadataWhereUniqueInput = {
  id: Scalars['ID']
}

export type CandidacyNoteSetEvent = BaseGraphQlObject &
  Event & {
    __typename: 'CandidacyNoteSetEvent'
    candidate: Candidate
    candidateId: Scalars['String']
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    id: Scalars['ID']
    /** Blocknumber of the block in which the event was emitted. */
    inBlock: Scalars['Int']
    /** Hash of the extrinsic which caused the event to be emitted */
    inExtrinsic?: Maybe<Scalars['String']>
    /** Index of event in block from which it was emitted. */
    indexInBlock: Scalars['Int']
    /** Network the block was produced in */
    network: Network
    noteMetadata: CandidacyNoteMetadata
    noteMetadataId: Scalars['String']
    /** Filtering options for interface implementers */
    type?: Maybe<EventTypeOptions>
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
  }

export type CandidacyNoteSetEventConnection = {
  __typename: 'CandidacyNoteSetEventConnection'
  edges: Array<CandidacyNoteSetEventEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type CandidacyNoteSetEventCreateInput = {
  candidate: Scalars['ID']
  inBlock: Scalars['Float']
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock: Scalars['Float']
  network: Network
  noteMetadata: Scalars['ID']
}

export type CandidacyNoteSetEventEdge = {
  __typename: 'CandidacyNoteSetEventEdge'
  cursor: Scalars['String']
  node: CandidacyNoteSetEvent
}

export enum CandidacyNoteSetEventOrderByInput {
  CandidateAsc = 'candidate_ASC',
  CandidateDesc = 'candidate_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  NoteMetadataAsc = 'noteMetadata_ASC',
  NoteMetadataDesc = 'noteMetadata_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type CandidacyNoteSetEventUpdateInput = {
  candidate?: InputMaybe<Scalars['ID']>
  inBlock?: InputMaybe<Scalars['Float']>
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock?: InputMaybe<Scalars['Float']>
  network?: InputMaybe<Network>
  noteMetadata?: InputMaybe<Scalars['ID']>
}

export type CandidacyNoteSetEventWhereInput = {
  AND?: InputMaybe<Array<CandidacyNoteSetEventWhereInput>>
  OR?: InputMaybe<Array<CandidacyNoteSetEventWhereInput>>
  candidate?: InputMaybe<CandidateWhereInput>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  inBlock_eq?: InputMaybe<Scalars['Int']>
  inBlock_gt?: InputMaybe<Scalars['Int']>
  inBlock_gte?: InputMaybe<Scalars['Int']>
  inBlock_in?: InputMaybe<Array<Scalars['Int']>>
  inBlock_lt?: InputMaybe<Scalars['Int']>
  inBlock_lte?: InputMaybe<Scalars['Int']>
  inExtrinsic_contains?: InputMaybe<Scalars['String']>
  inExtrinsic_endsWith?: InputMaybe<Scalars['String']>
  inExtrinsic_eq?: InputMaybe<Scalars['String']>
  inExtrinsic_in?: InputMaybe<Array<Scalars['String']>>
  inExtrinsic_startsWith?: InputMaybe<Scalars['String']>
  indexInBlock_eq?: InputMaybe<Scalars['Int']>
  indexInBlock_gt?: InputMaybe<Scalars['Int']>
  indexInBlock_gte?: InputMaybe<Scalars['Int']>
  indexInBlock_in?: InputMaybe<Array<Scalars['Int']>>
  indexInBlock_lt?: InputMaybe<Scalars['Int']>
  indexInBlock_lte?: InputMaybe<Scalars['Int']>
  network_eq?: InputMaybe<Network>
  network_in?: InputMaybe<Array<Network>>
  noteMetadata?: InputMaybe<CandidacyNoteMetadataWhereInput>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
}

export type CandidacyNoteSetEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type CandidacyStakeReleaseEvent = BaseGraphQlObject &
  Event & {
    __typename: 'CandidacyStakeReleaseEvent'
    candidate: Candidate
    candidateId: Scalars['String']
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    id: Scalars['ID']
    /** Blocknumber of the block in which the event was emitted. */
    inBlock: Scalars['Int']
    /** Hash of the extrinsic which caused the event to be emitted */
    inExtrinsic?: Maybe<Scalars['String']>
    /** Index of event in block from which it was emitted. */
    indexInBlock: Scalars['Int']
    /** Network the block was produced in */
    network: Network
    /** Filtering options for interface implementers */
    type?: Maybe<EventTypeOptions>
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
  }

export type CandidacyStakeReleaseEventConnection = {
  __typename: 'CandidacyStakeReleaseEventConnection'
  edges: Array<CandidacyStakeReleaseEventEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type CandidacyStakeReleaseEventCreateInput = {
  candidate: Scalars['ID']
  inBlock: Scalars['Float']
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock: Scalars['Float']
  network: Network
}

export type CandidacyStakeReleaseEventEdge = {
  __typename: 'CandidacyStakeReleaseEventEdge'
  cursor: Scalars['String']
  node: CandidacyStakeReleaseEvent
}

export enum CandidacyStakeReleaseEventOrderByInput {
  CandidateAsc = 'candidate_ASC',
  CandidateDesc = 'candidate_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type CandidacyStakeReleaseEventUpdateInput = {
  candidate?: InputMaybe<Scalars['ID']>
  inBlock?: InputMaybe<Scalars['Float']>
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock?: InputMaybe<Scalars['Float']>
  network?: InputMaybe<Network>
}

export type CandidacyStakeReleaseEventWhereInput = {
  AND?: InputMaybe<Array<CandidacyStakeReleaseEventWhereInput>>
  OR?: InputMaybe<Array<CandidacyStakeReleaseEventWhereInput>>
  candidate?: InputMaybe<CandidateWhereInput>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  inBlock_eq?: InputMaybe<Scalars['Int']>
  inBlock_gt?: InputMaybe<Scalars['Int']>
  inBlock_gte?: InputMaybe<Scalars['Int']>
  inBlock_in?: InputMaybe<Array<Scalars['Int']>>
  inBlock_lt?: InputMaybe<Scalars['Int']>
  inBlock_lte?: InputMaybe<Scalars['Int']>
  inExtrinsic_contains?: InputMaybe<Scalars['String']>
  inExtrinsic_endsWith?: InputMaybe<Scalars['String']>
  inExtrinsic_eq?: InputMaybe<Scalars['String']>
  inExtrinsic_in?: InputMaybe<Array<Scalars['String']>>
  inExtrinsic_startsWith?: InputMaybe<Scalars['String']>
  indexInBlock_eq?: InputMaybe<Scalars['Int']>
  indexInBlock_gt?: InputMaybe<Scalars['Int']>
  indexInBlock_gte?: InputMaybe<Scalars['Int']>
  indexInBlock_in?: InputMaybe<Array<Scalars['Int']>>
  indexInBlock_lt?: InputMaybe<Scalars['Int']>
  indexInBlock_lte?: InputMaybe<Scalars['Int']>
  network_eq?: InputMaybe<Network>
  network_in?: InputMaybe<Array<Network>>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
}

export type CandidacyStakeReleaseEventWhereUniqueInput = {
  id: Scalars['ID']
}

export enum CandidacyStatus {
  Active = 'ACTIVE',
  Elected = 'ELECTED',
  Failed = 'FAILED',
  Withdrawn = 'WITHDRAWN',
}

export type CandidacyWithdrawEvent = BaseGraphQlObject &
  Event & {
    __typename: 'CandidacyWithdrawEvent'
    candidate: Candidate
    candidateId: Scalars['String']
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    id: Scalars['ID']
    /** Blocknumber of the block in which the event was emitted. */
    inBlock: Scalars['Int']
    /** Hash of the extrinsic which caused the event to be emitted */
    inExtrinsic?: Maybe<Scalars['String']>
    /** Index of event in block from which it was emitted. */
    indexInBlock: Scalars['Int']
    /** Network the block was produced in */
    network: Network
    /** Filtering options for interface implementers */
    type?: Maybe<EventTypeOptions>
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
  }

export type CandidacyWithdrawEventConnection = {
  __typename: 'CandidacyWithdrawEventConnection'
  edges: Array<CandidacyWithdrawEventEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type CandidacyWithdrawEventCreateInput = {
  candidate: Scalars['ID']
  inBlock: Scalars['Float']
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock: Scalars['Float']
  network: Network
}

export type CandidacyWithdrawEventEdge = {
  __typename: 'CandidacyWithdrawEventEdge'
  cursor: Scalars['String']
  node: CandidacyWithdrawEvent
}

export enum CandidacyWithdrawEventOrderByInput {
  CandidateAsc = 'candidate_ASC',
  CandidateDesc = 'candidate_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type CandidacyWithdrawEventUpdateInput = {
  candidate?: InputMaybe<Scalars['ID']>
  inBlock?: InputMaybe<Scalars['Float']>
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock?: InputMaybe<Scalars['Float']>
  network?: InputMaybe<Network>
}

export type CandidacyWithdrawEventWhereInput = {
  AND?: InputMaybe<Array<CandidacyWithdrawEventWhereInput>>
  OR?: InputMaybe<Array<CandidacyWithdrawEventWhereInput>>
  candidate?: InputMaybe<CandidateWhereInput>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  inBlock_eq?: InputMaybe<Scalars['Int']>
  inBlock_gt?: InputMaybe<Scalars['Int']>
  inBlock_gte?: InputMaybe<Scalars['Int']>
  inBlock_in?: InputMaybe<Array<Scalars['Int']>>
  inBlock_lt?: InputMaybe<Scalars['Int']>
  inBlock_lte?: InputMaybe<Scalars['Int']>
  inExtrinsic_contains?: InputMaybe<Scalars['String']>
  inExtrinsic_endsWith?: InputMaybe<Scalars['String']>
  inExtrinsic_eq?: InputMaybe<Scalars['String']>
  inExtrinsic_in?: InputMaybe<Array<Scalars['String']>>
  inExtrinsic_startsWith?: InputMaybe<Scalars['String']>
  indexInBlock_eq?: InputMaybe<Scalars['Int']>
  indexInBlock_gt?: InputMaybe<Scalars['Int']>
  indexInBlock_gte?: InputMaybe<Scalars['Int']>
  indexInBlock_in?: InputMaybe<Array<Scalars['Int']>>
  indexInBlock_lt?: InputMaybe<Scalars['Int']>
  indexInBlock_lte?: InputMaybe<Scalars['Int']>
  network_eq?: InputMaybe<Network>
  network_in?: InputMaybe<Array<Network>>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
}

export type CandidacyWithdrawEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type Candidate = BaseGraphQlObject & {
  __typename: 'Candidate'
  candidacynoteseteventcandidate?: Maybe<Array<CandidacyNoteSetEvent>>
  candidacystakereleaseeventcandidate?: Maybe<Array<CandidacyStakeReleaseEvent>>
  candidacywithdraweventcandidate?: Maybe<Array<CandidacyWithdrawEvent>>
  createdAt: Scalars['DateTime']
  createdById: Scalars['String']
  deletedAt?: Maybe<Scalars['DateTime']>
  deletedById?: Maybe<Scalars['String']>
  electionRound: ElectionRound
  electionRoundId: Scalars['String']
  id: Scalars['ID']
  /** Block in which the last vote was received. */
  lastVoteReceivedAtBlock?: Maybe<Scalars['BigInt']>
  /** Event number in block in which the last vote was received. */
  lastVoteReceivedAtEventNumber?: Maybe<Scalars['Int']>
  member: Membership
  memberId: Scalars['String']
  newcandidateeventcandidate?: Maybe<Array<NewCandidateEvent>>
  noteMetadata: CandidacyNoteMetadata
  noteMetadataId: Scalars['String']
  /** Account that will receive rewards if candidate's elected to the council. */
  rewardAccountId: Scalars['String']
  /** Stake locked for the candidacy. */
  stake: Scalars['BigInt']
  /** Reflects if the stake is still locked for candidacy or has been already released by the member. */
  stakeLocked: Scalars['Boolean']
  /** Account used for staking currency needed for the candidacy. */
  stakingAccountId: Scalars['String']
  /** Current candidate status */
  status: CandidacyStatus
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedById?: Maybe<Scalars['String']>
  version: Scalars['Int']
  /** Sum of power of all votes received. */
  votePower: Scalars['BigInt']
  votesReceived: Array<CastVote>
}

export type CandidateConnection = {
  __typename: 'CandidateConnection'
  edges: Array<CandidateEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type CandidateCreateInput = {
  electionRound: Scalars['ID']
  lastVoteReceivedAtBlock?: InputMaybe<Scalars['String']>
  lastVoteReceivedAtEventNumber?: InputMaybe<Scalars['Float']>
  member: Scalars['ID']
  noteMetadata: Scalars['ID']
  rewardAccountId: Scalars['String']
  stake: Scalars['String']
  stakeLocked: Scalars['Boolean']
  stakingAccountId: Scalars['String']
  status: CandidacyStatus
  votePower: Scalars['String']
}

export type CandidateEdge = {
  __typename: 'CandidateEdge'
  cursor: Scalars['String']
  node: Candidate
}

export enum CandidateOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  ElectionRoundAsc = 'electionRound_ASC',
  ElectionRoundDesc = 'electionRound_DESC',
  LastVoteReceivedAtBlockAsc = 'lastVoteReceivedAtBlock_ASC',
  LastVoteReceivedAtBlockDesc = 'lastVoteReceivedAtBlock_DESC',
  LastVoteReceivedAtEventNumberAsc = 'lastVoteReceivedAtEventNumber_ASC',
  LastVoteReceivedAtEventNumberDesc = 'lastVoteReceivedAtEventNumber_DESC',
  MemberAsc = 'member_ASC',
  MemberDesc = 'member_DESC',
  NoteMetadataAsc = 'noteMetadata_ASC',
  NoteMetadataDesc = 'noteMetadata_DESC',
  RewardAccountIdAsc = 'rewardAccountId_ASC',
  RewardAccountIdDesc = 'rewardAccountId_DESC',
  StakeLockedAsc = 'stakeLocked_ASC',
  StakeLockedDesc = 'stakeLocked_DESC',
  StakeAsc = 'stake_ASC',
  StakeDesc = 'stake_DESC',
  StakingAccountIdAsc = 'stakingAccountId_ASC',
  StakingAccountIdDesc = 'stakingAccountId_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  VotePowerAsc = 'votePower_ASC',
  VotePowerDesc = 'votePower_DESC',
}

export type CandidateUpdateInput = {
  electionRound?: InputMaybe<Scalars['ID']>
  lastVoteReceivedAtBlock?: InputMaybe<Scalars['String']>
  lastVoteReceivedAtEventNumber?: InputMaybe<Scalars['Float']>
  member?: InputMaybe<Scalars['ID']>
  noteMetadata?: InputMaybe<Scalars['ID']>
  rewardAccountId?: InputMaybe<Scalars['String']>
  stake?: InputMaybe<Scalars['String']>
  stakeLocked?: InputMaybe<Scalars['Boolean']>
  stakingAccountId?: InputMaybe<Scalars['String']>
  status?: InputMaybe<CandidacyStatus>
  votePower?: InputMaybe<Scalars['String']>
}

export type CandidateWhereInput = {
  AND?: InputMaybe<Array<CandidateWhereInput>>
  OR?: InputMaybe<Array<CandidateWhereInput>>
  candidacynoteseteventcandidate_every?: InputMaybe<CandidacyNoteSetEventWhereInput>
  candidacynoteseteventcandidate_none?: InputMaybe<CandidacyNoteSetEventWhereInput>
  candidacynoteseteventcandidate_some?: InputMaybe<CandidacyNoteSetEventWhereInput>
  candidacystakereleaseeventcandidate_every?: InputMaybe<CandidacyStakeReleaseEventWhereInput>
  candidacystakereleaseeventcandidate_none?: InputMaybe<CandidacyStakeReleaseEventWhereInput>
  candidacystakereleaseeventcandidate_some?: InputMaybe<CandidacyStakeReleaseEventWhereInput>
  candidacywithdraweventcandidate_every?: InputMaybe<CandidacyWithdrawEventWhereInput>
  candidacywithdraweventcandidate_none?: InputMaybe<CandidacyWithdrawEventWhereInput>
  candidacywithdraweventcandidate_some?: InputMaybe<CandidacyWithdrawEventWhereInput>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  electionRound?: InputMaybe<ElectionRoundWhereInput>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  lastVoteReceivedAtBlock_eq?: InputMaybe<Scalars['BigInt']>
  lastVoteReceivedAtBlock_gt?: InputMaybe<Scalars['BigInt']>
  lastVoteReceivedAtBlock_gte?: InputMaybe<Scalars['BigInt']>
  lastVoteReceivedAtBlock_in?: InputMaybe<Array<Scalars['BigInt']>>
  lastVoteReceivedAtBlock_lt?: InputMaybe<Scalars['BigInt']>
  lastVoteReceivedAtBlock_lte?: InputMaybe<Scalars['BigInt']>
  lastVoteReceivedAtEventNumber_eq?: InputMaybe<Scalars['Int']>
  lastVoteReceivedAtEventNumber_gt?: InputMaybe<Scalars['Int']>
  lastVoteReceivedAtEventNumber_gte?: InputMaybe<Scalars['Int']>
  lastVoteReceivedAtEventNumber_in?: InputMaybe<Array<Scalars['Int']>>
  lastVoteReceivedAtEventNumber_lt?: InputMaybe<Scalars['Int']>
  lastVoteReceivedAtEventNumber_lte?: InputMaybe<Scalars['Int']>
  member?: InputMaybe<MembershipWhereInput>
  newcandidateeventcandidate_every?: InputMaybe<NewCandidateEventWhereInput>
  newcandidateeventcandidate_none?: InputMaybe<NewCandidateEventWhereInput>
  newcandidateeventcandidate_some?: InputMaybe<NewCandidateEventWhereInput>
  noteMetadata?: InputMaybe<CandidacyNoteMetadataWhereInput>
  rewardAccountId_contains?: InputMaybe<Scalars['String']>
  rewardAccountId_endsWith?: InputMaybe<Scalars['String']>
  rewardAccountId_eq?: InputMaybe<Scalars['String']>
  rewardAccountId_in?: InputMaybe<Array<Scalars['String']>>
  rewardAccountId_startsWith?: InputMaybe<Scalars['String']>
  stakeLocked_eq?: InputMaybe<Scalars['Boolean']>
  stakeLocked_in?: InputMaybe<Array<Scalars['Boolean']>>
  stake_eq?: InputMaybe<Scalars['BigInt']>
  stake_gt?: InputMaybe<Scalars['BigInt']>
  stake_gte?: InputMaybe<Scalars['BigInt']>
  stake_in?: InputMaybe<Array<Scalars['BigInt']>>
  stake_lt?: InputMaybe<Scalars['BigInt']>
  stake_lte?: InputMaybe<Scalars['BigInt']>
  stakingAccountId_contains?: InputMaybe<Scalars['String']>
  stakingAccountId_endsWith?: InputMaybe<Scalars['String']>
  stakingAccountId_eq?: InputMaybe<Scalars['String']>
  stakingAccountId_in?: InputMaybe<Array<Scalars['String']>>
  stakingAccountId_startsWith?: InputMaybe<Scalars['String']>
  status_eq?: InputMaybe<CandidacyStatus>
  status_in?: InputMaybe<Array<CandidacyStatus>>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
  votePower_eq?: InputMaybe<Scalars['BigInt']>
  votePower_gt?: InputMaybe<Scalars['BigInt']>
  votePower_gte?: InputMaybe<Scalars['BigInt']>
  votePower_in?: InputMaybe<Array<Scalars['BigInt']>>
  votePower_lt?: InputMaybe<Scalars['BigInt']>
  votePower_lte?: InputMaybe<Scalars['BigInt']>
  votesReceived_every?: InputMaybe<CastVoteWhereInput>
  votesReceived_none?: InputMaybe<CastVoteWhereInput>
  votesReceived_some?: InputMaybe<CastVoteWhereInput>
}

export type CandidateWhereUniqueInput = {
  id: Scalars['ID']
}

export type CastVote = BaseGraphQlObject & {
  __typename: 'CastVote'
  /** Account that cast the vote. */
  castBy: Scalars['String']
  /** Hashed vote that was casted before being revealed. Hex format. */
  commitment: Scalars['String']
  createdAt: Scalars['DateTime']
  createdById: Scalars['String']
  deletedAt?: Maybe<Scalars['DateTime']>
  deletedById?: Maybe<Scalars['String']>
  electionRound: ElectionRound
  electionRoundId: Scalars['String']
  id: Scalars['ID']
  /** Stake used to back up the vote. */
  stake: Scalars['BigInt']
  /** Reflects if the stake is still locked for candidacy or has been already released by the member. */
  stakeLocked: Scalars['Boolean']
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedById?: Maybe<Scalars['String']>
  version: Scalars['Int']
  voteFor?: Maybe<Candidate>
  voteForId?: Maybe<Scalars['String']>
  /** Vote's power. */
  votePower: Scalars['BigInt']
  votecasteventcastVote?: Maybe<Array<VoteCastEvent>>
  voterevealedeventcastVote?: Maybe<Array<VoteRevealedEvent>>
}

export type CastVoteConnection = {
  __typename: 'CastVoteConnection'
  edges: Array<CastVoteEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type CastVoteCreateInput = {
  castBy: Scalars['String']
  commitment: Scalars['String']
  electionRound: Scalars['ID']
  stake: Scalars['String']
  stakeLocked: Scalars['Boolean']
  voteFor?: InputMaybe<Scalars['ID']>
  votePower: Scalars['String']
}

export type CastVoteEdge = {
  __typename: 'CastVoteEdge'
  cursor: Scalars['String']
  node: CastVote
}

export enum CastVoteOrderByInput {
  CastByAsc = 'castBy_ASC',
  CastByDesc = 'castBy_DESC',
  CommitmentAsc = 'commitment_ASC',
  CommitmentDesc = 'commitment_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  ElectionRoundAsc = 'electionRound_ASC',
  ElectionRoundDesc = 'electionRound_DESC',
  StakeLockedAsc = 'stakeLocked_ASC',
  StakeLockedDesc = 'stakeLocked_DESC',
  StakeAsc = 'stake_ASC',
  StakeDesc = 'stake_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  VoteForAsc = 'voteFor_ASC',
  VoteForDesc = 'voteFor_DESC',
  VotePowerAsc = 'votePower_ASC',
  VotePowerDesc = 'votePower_DESC',
}

export type CastVoteUpdateInput = {
  castBy?: InputMaybe<Scalars['String']>
  commitment?: InputMaybe<Scalars['String']>
  electionRound?: InputMaybe<Scalars['ID']>
  stake?: InputMaybe<Scalars['String']>
  stakeLocked?: InputMaybe<Scalars['Boolean']>
  voteFor?: InputMaybe<Scalars['ID']>
  votePower?: InputMaybe<Scalars['String']>
}

export type CastVoteWhereInput = {
  AND?: InputMaybe<Array<CastVoteWhereInput>>
  OR?: InputMaybe<Array<CastVoteWhereInput>>
  castBy_contains?: InputMaybe<Scalars['String']>
  castBy_endsWith?: InputMaybe<Scalars['String']>
  castBy_eq?: InputMaybe<Scalars['String']>
  castBy_in?: InputMaybe<Array<Scalars['String']>>
  castBy_startsWith?: InputMaybe<Scalars['String']>
  commitment_contains?: InputMaybe<Scalars['String']>
  commitment_endsWith?: InputMaybe<Scalars['String']>
  commitment_eq?: InputMaybe<Scalars['String']>
  commitment_in?: InputMaybe<Array<Scalars['String']>>
  commitment_startsWith?: InputMaybe<Scalars['String']>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  electionRound?: InputMaybe<ElectionRoundWhereInput>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  stakeLocked_eq?: InputMaybe<Scalars['Boolean']>
  stakeLocked_in?: InputMaybe<Array<Scalars['Boolean']>>
  stake_eq?: InputMaybe<Scalars['BigInt']>
  stake_gt?: InputMaybe<Scalars['BigInt']>
  stake_gte?: InputMaybe<Scalars['BigInt']>
  stake_in?: InputMaybe<Array<Scalars['BigInt']>>
  stake_lt?: InputMaybe<Scalars['BigInt']>
  stake_lte?: InputMaybe<Scalars['BigInt']>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
  voteFor?: InputMaybe<CandidateWhereInput>
  votePower_eq?: InputMaybe<Scalars['BigInt']>
  votePower_gt?: InputMaybe<Scalars['BigInt']>
  votePower_gte?: InputMaybe<Scalars['BigInt']>
  votePower_in?: InputMaybe<Array<Scalars['BigInt']>>
  votePower_lt?: InputMaybe<Scalars['BigInt']>
  votePower_lte?: InputMaybe<Scalars['BigInt']>
  votecasteventcastVote_every?: InputMaybe<VoteCastEventWhereInput>
  votecasteventcastVote_none?: InputMaybe<VoteCastEventWhereInput>
  votecasteventcastVote_some?: InputMaybe<VoteCastEventWhereInput>
  voterevealedeventcastVote_every?: InputMaybe<VoteRevealedEventWhereInput>
  voterevealedeventcastVote_none?: InputMaybe<VoteRevealedEventWhereInput>
  voterevealedeventcastVote_some?: InputMaybe<VoteRevealedEventWhereInput>
}

export type CastVoteWhereUniqueInput = {
  id: Scalars['ID']
}

export type CategoryArchivalStatusUpdatedEvent = BaseGraphQlObject &
  Event & {
    __typename: 'CategoryArchivalStatusUpdatedEvent'
    actor: Worker
    actorId: Scalars['String']
    category: ForumCategory
    categoryId: Scalars['String']
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    id: Scalars['ID']
    /** Blocknumber of the block in which the event was emitted. */
    inBlock: Scalars['Int']
    /** Hash of the extrinsic which caused the event to be emitted */
    inExtrinsic?: Maybe<Scalars['String']>
    /** Index of event in block from which it was emitted. */
    indexInBlock: Scalars['Int']
    /** Network the block was produced in */
    network: Network
    /** The new archival status of the category (true = archived) */
    newArchivalStatus: Scalars['Boolean']
    /** Filtering options for interface implementers */
    type?: Maybe<EventTypeOptions>
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
  }

export type CategoryArchivalStatusUpdatedEventConnection = {
  __typename: 'CategoryArchivalStatusUpdatedEventConnection'
  edges: Array<CategoryArchivalStatusUpdatedEventEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type CategoryArchivalStatusUpdatedEventCreateInput = {
  actor: Scalars['ID']
  category: Scalars['ID']
  inBlock: Scalars['Float']
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock: Scalars['Float']
  network: Network
  newArchivalStatus: Scalars['Boolean']
}

export type CategoryArchivalStatusUpdatedEventEdge = {
  __typename: 'CategoryArchivalStatusUpdatedEventEdge'
  cursor: Scalars['String']
  node: CategoryArchivalStatusUpdatedEvent
}

export enum CategoryArchivalStatusUpdatedEventOrderByInput {
  ActorAsc = 'actor_ASC',
  ActorDesc = 'actor_DESC',
  CategoryAsc = 'category_ASC',
  CategoryDesc = 'category_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  NewArchivalStatusAsc = 'newArchivalStatus_ASC',
  NewArchivalStatusDesc = 'newArchivalStatus_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type CategoryArchivalStatusUpdatedEventUpdateInput = {
  actor?: InputMaybe<Scalars['ID']>
  category?: InputMaybe<Scalars['ID']>
  inBlock?: InputMaybe<Scalars['Float']>
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock?: InputMaybe<Scalars['Float']>
  network?: InputMaybe<Network>
  newArchivalStatus?: InputMaybe<Scalars['Boolean']>
}

export type CategoryArchivalStatusUpdatedEventWhereInput = {
  AND?: InputMaybe<Array<CategoryArchivalStatusUpdatedEventWhereInput>>
  OR?: InputMaybe<Array<CategoryArchivalStatusUpdatedEventWhereInput>>
  actor?: InputMaybe<WorkerWhereInput>
  category?: InputMaybe<ForumCategoryWhereInput>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  inBlock_eq?: InputMaybe<Scalars['Int']>
  inBlock_gt?: InputMaybe<Scalars['Int']>
  inBlock_gte?: InputMaybe<Scalars['Int']>
  inBlock_in?: InputMaybe<Array<Scalars['Int']>>
  inBlock_lt?: InputMaybe<Scalars['Int']>
  inBlock_lte?: InputMaybe<Scalars['Int']>
  inExtrinsic_contains?: InputMaybe<Scalars['String']>
  inExtrinsic_endsWith?: InputMaybe<Scalars['String']>
  inExtrinsic_eq?: InputMaybe<Scalars['String']>
  inExtrinsic_in?: InputMaybe<Array<Scalars['String']>>
  inExtrinsic_startsWith?: InputMaybe<Scalars['String']>
  indexInBlock_eq?: InputMaybe<Scalars['Int']>
  indexInBlock_gt?: InputMaybe<Scalars['Int']>
  indexInBlock_gte?: InputMaybe<Scalars['Int']>
  indexInBlock_in?: InputMaybe<Array<Scalars['Int']>>
  indexInBlock_lt?: InputMaybe<Scalars['Int']>
  indexInBlock_lte?: InputMaybe<Scalars['Int']>
  network_eq?: InputMaybe<Network>
  network_in?: InputMaybe<Array<Network>>
  newArchivalStatus_eq?: InputMaybe<Scalars['Boolean']>
  newArchivalStatus_in?: InputMaybe<Array<Scalars['Boolean']>>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
}

export type CategoryArchivalStatusUpdatedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type CategoryCreatedEvent = BaseGraphQlObject &
  Event & {
    __typename: 'CategoryCreatedEvent'
    category: ForumCategory
    categoryId: Scalars['String']
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    id: Scalars['ID']
    /** Blocknumber of the block in which the event was emitted. */
    inBlock: Scalars['Int']
    /** Hash of the extrinsic which caused the event to be emitted */
    inExtrinsic?: Maybe<Scalars['String']>
    /** Index of event in block from which it was emitted. */
    indexInBlock: Scalars['Int']
    /** Network the block was produced in */
    network: Network
    /** Filtering options for interface implementers */
    type?: Maybe<EventTypeOptions>
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
  }

export type CategoryCreatedEventConnection = {
  __typename: 'CategoryCreatedEventConnection'
  edges: Array<CategoryCreatedEventEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type CategoryCreatedEventCreateInput = {
  category: Scalars['ID']
  inBlock: Scalars['Float']
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock: Scalars['Float']
  network: Network
}

export type CategoryCreatedEventEdge = {
  __typename: 'CategoryCreatedEventEdge'
  cursor: Scalars['String']
  node: CategoryCreatedEvent
}

export enum CategoryCreatedEventOrderByInput {
  CategoryAsc = 'category_ASC',
  CategoryDesc = 'category_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type CategoryCreatedEventUpdateInput = {
  category?: InputMaybe<Scalars['ID']>
  inBlock?: InputMaybe<Scalars['Float']>
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock?: InputMaybe<Scalars['Float']>
  network?: InputMaybe<Network>
}

export type CategoryCreatedEventWhereInput = {
  AND?: InputMaybe<Array<CategoryCreatedEventWhereInput>>
  OR?: InputMaybe<Array<CategoryCreatedEventWhereInput>>
  category?: InputMaybe<ForumCategoryWhereInput>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  inBlock_eq?: InputMaybe<Scalars['Int']>
  inBlock_gt?: InputMaybe<Scalars['Int']>
  inBlock_gte?: InputMaybe<Scalars['Int']>
  inBlock_in?: InputMaybe<Array<Scalars['Int']>>
  inBlock_lt?: InputMaybe<Scalars['Int']>
  inBlock_lte?: InputMaybe<Scalars['Int']>
  inExtrinsic_contains?: InputMaybe<Scalars['String']>
  inExtrinsic_endsWith?: InputMaybe<Scalars['String']>
  inExtrinsic_eq?: InputMaybe<Scalars['String']>
  inExtrinsic_in?: InputMaybe<Array<Scalars['String']>>
  inExtrinsic_startsWith?: InputMaybe<Scalars['String']>
  indexInBlock_eq?: InputMaybe<Scalars['Int']>
  indexInBlock_gt?: InputMaybe<Scalars['Int']>
  indexInBlock_gte?: InputMaybe<Scalars['Int']>
  indexInBlock_in?: InputMaybe<Array<Scalars['Int']>>
  indexInBlock_lt?: InputMaybe<Scalars['Int']>
  indexInBlock_lte?: InputMaybe<Scalars['Int']>
  network_eq?: InputMaybe<Network>
  network_in?: InputMaybe<Array<Network>>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
}

export type CategoryCreatedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type CategoryDeletedEvent = BaseGraphQlObject &
  Event & {
    __typename: 'CategoryDeletedEvent'
    actor: Worker
    actorId: Scalars['String']
    category: ForumCategory
    categoryId: Scalars['String']
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    id: Scalars['ID']
    /** Blocknumber of the block in which the event was emitted. */
    inBlock: Scalars['Int']
    /** Hash of the extrinsic which caused the event to be emitted */
    inExtrinsic?: Maybe<Scalars['String']>
    /** Index of event in block from which it was emitted. */
    indexInBlock: Scalars['Int']
    /** Network the block was produced in */
    network: Network
    /** Filtering options for interface implementers */
    type?: Maybe<EventTypeOptions>
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
  }

export type CategoryDeletedEventConnection = {
  __typename: 'CategoryDeletedEventConnection'
  edges: Array<CategoryDeletedEventEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type CategoryDeletedEventCreateInput = {
  actor: Scalars['ID']
  category: Scalars['ID']
  inBlock: Scalars['Float']
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock: Scalars['Float']
  network: Network
}

export type CategoryDeletedEventEdge = {
  __typename: 'CategoryDeletedEventEdge'
  cursor: Scalars['String']
  node: CategoryDeletedEvent
}

export enum CategoryDeletedEventOrderByInput {
  ActorAsc = 'actor_ASC',
  ActorDesc = 'actor_DESC',
  CategoryAsc = 'category_ASC',
  CategoryDesc = 'category_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type CategoryDeletedEventUpdateInput = {
  actor?: InputMaybe<Scalars['ID']>
  category?: InputMaybe<Scalars['ID']>
  inBlock?: InputMaybe<Scalars['Float']>
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock?: InputMaybe<Scalars['Float']>
  network?: InputMaybe<Network>
}

export type CategoryDeletedEventWhereInput = {
  AND?: InputMaybe<Array<CategoryDeletedEventWhereInput>>
  OR?: InputMaybe<Array<CategoryDeletedEventWhereInput>>
  actor?: InputMaybe<WorkerWhereInput>
  category?: InputMaybe<ForumCategoryWhereInput>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  inBlock_eq?: InputMaybe<Scalars['Int']>
  inBlock_gt?: InputMaybe<Scalars['Int']>
  inBlock_gte?: InputMaybe<Scalars['Int']>
  inBlock_in?: InputMaybe<Array<Scalars['Int']>>
  inBlock_lt?: InputMaybe<Scalars['Int']>
  inBlock_lte?: InputMaybe<Scalars['Int']>
  inExtrinsic_contains?: InputMaybe<Scalars['String']>
  inExtrinsic_endsWith?: InputMaybe<Scalars['String']>
  inExtrinsic_eq?: InputMaybe<Scalars['String']>
  inExtrinsic_in?: InputMaybe<Array<Scalars['String']>>
  inExtrinsic_startsWith?: InputMaybe<Scalars['String']>
  indexInBlock_eq?: InputMaybe<Scalars['Int']>
  indexInBlock_gt?: InputMaybe<Scalars['Int']>
  indexInBlock_gte?: InputMaybe<Scalars['Int']>
  indexInBlock_in?: InputMaybe<Array<Scalars['Int']>>
  indexInBlock_lt?: InputMaybe<Scalars['Int']>
  indexInBlock_lte?: InputMaybe<Scalars['Int']>
  network_eq?: InputMaybe<Network>
  network_in?: InputMaybe<Array<Network>>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
}

export type CategoryDeletedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type CategoryMembershipOfModeratorUpdatedEvent = BaseGraphQlObject &
  Event & {
    __typename: 'CategoryMembershipOfModeratorUpdatedEvent'
    category: ForumCategory
    categoryId: Scalars['String']
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    id: Scalars['ID']
    /** Blocknumber of the block in which the event was emitted. */
    inBlock: Scalars['Int']
    /** Hash of the extrinsic which caused the event to be emitted */
    inExtrinsic?: Maybe<Scalars['String']>
    /** Index of event in block from which it was emitted. */
    indexInBlock: Scalars['Int']
    moderator: Worker
    moderatorId: Scalars['String']
    /** Network the block was produced in */
    network: Network
    /** The flag indicating whether the permissions to moderate the category are granted or revoked */
    newCanModerateValue: Scalars['Boolean']
    /** Filtering options for interface implementers */
    type?: Maybe<EventTypeOptions>
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
  }

export type CategoryMembershipOfModeratorUpdatedEventConnection = {
  __typename: 'CategoryMembershipOfModeratorUpdatedEventConnection'
  edges: Array<CategoryMembershipOfModeratorUpdatedEventEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type CategoryMembershipOfModeratorUpdatedEventCreateInput = {
  category: Scalars['ID']
  inBlock: Scalars['Float']
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock: Scalars['Float']
  moderator: Scalars['ID']
  network: Network
  newCanModerateValue: Scalars['Boolean']
}

export type CategoryMembershipOfModeratorUpdatedEventEdge = {
  __typename: 'CategoryMembershipOfModeratorUpdatedEventEdge'
  cursor: Scalars['String']
  node: CategoryMembershipOfModeratorUpdatedEvent
}

export enum CategoryMembershipOfModeratorUpdatedEventOrderByInput {
  CategoryAsc = 'category_ASC',
  CategoryDesc = 'category_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  ModeratorAsc = 'moderator_ASC',
  ModeratorDesc = 'moderator_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  NewCanModerateValueAsc = 'newCanModerateValue_ASC',
  NewCanModerateValueDesc = 'newCanModerateValue_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type CategoryMembershipOfModeratorUpdatedEventUpdateInput = {
  category?: InputMaybe<Scalars['ID']>
  inBlock?: InputMaybe<Scalars['Float']>
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock?: InputMaybe<Scalars['Float']>
  moderator?: InputMaybe<Scalars['ID']>
  network?: InputMaybe<Network>
  newCanModerateValue?: InputMaybe<Scalars['Boolean']>
}

export type CategoryMembershipOfModeratorUpdatedEventWhereInput = {
  AND?: InputMaybe<Array<CategoryMembershipOfModeratorUpdatedEventWhereInput>>
  OR?: InputMaybe<Array<CategoryMembershipOfModeratorUpdatedEventWhereInput>>
  category?: InputMaybe<ForumCategoryWhereInput>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  inBlock_eq?: InputMaybe<Scalars['Int']>
  inBlock_gt?: InputMaybe<Scalars['Int']>
  inBlock_gte?: InputMaybe<Scalars['Int']>
  inBlock_in?: InputMaybe<Array<Scalars['Int']>>
  inBlock_lt?: InputMaybe<Scalars['Int']>
  inBlock_lte?: InputMaybe<Scalars['Int']>
  inExtrinsic_contains?: InputMaybe<Scalars['String']>
  inExtrinsic_endsWith?: InputMaybe<Scalars['String']>
  inExtrinsic_eq?: InputMaybe<Scalars['String']>
  inExtrinsic_in?: InputMaybe<Array<Scalars['String']>>
  inExtrinsic_startsWith?: InputMaybe<Scalars['String']>
  indexInBlock_eq?: InputMaybe<Scalars['Int']>
  indexInBlock_gt?: InputMaybe<Scalars['Int']>
  indexInBlock_gte?: InputMaybe<Scalars['Int']>
  indexInBlock_in?: InputMaybe<Array<Scalars['Int']>>
  indexInBlock_lt?: InputMaybe<Scalars['Int']>
  indexInBlock_lte?: InputMaybe<Scalars['Int']>
  moderator?: InputMaybe<WorkerWhereInput>
  network_eq?: InputMaybe<Network>
  network_in?: InputMaybe<Array<Network>>
  newCanModerateValue_eq?: InputMaybe<Scalars['Boolean']>
  newCanModerateValue_in?: InputMaybe<Array<Scalars['Boolean']>>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
}

export type CategoryMembershipOfModeratorUpdatedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type CategoryStatus = CategoryStatusActive | CategoryStatusArchived | CategoryStatusRemoved

export type CategoryStatusActive = {
  __typename: 'CategoryStatusActive'
  phantom?: Maybe<Scalars['Int']>
}

export type CategoryStatusArchived = {
  __typename: 'CategoryStatusArchived'
  /** Event the category was archived in */
  categoryArchivalStatusUpdatedEvent?: Maybe<CategoryArchivalStatusUpdatedEvent>
}

export type CategoryStatusRemoved = {
  __typename: 'CategoryStatusRemoved'
  /** Event the category was deleted in */
  categoryDeletedEvent?: Maybe<CategoryDeletedEvent>
}

export type CategoryStickyThreadUpdateEvent = BaseGraphQlObject &
  Event & {
    __typename: 'CategoryStickyThreadUpdateEvent'
    actor: Worker
    actorId: Scalars['String']
    category: ForumCategory
    categoryId: Scalars['String']
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    id: Scalars['ID']
    /** Blocknumber of the block in which the event was emitted. */
    inBlock: Scalars['Int']
    /** Hash of the extrinsic which caused the event to be emitted */
    inExtrinsic?: Maybe<Scalars['String']>
    /** Index of event in block from which it was emitted. */
    indexInBlock: Scalars['Int']
    /** Network the block was produced in */
    network: Network
    newStickyThreads: Array<ForumThread>
    /** Filtering options for interface implementers */
    type?: Maybe<EventTypeOptions>
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
  }

export type CategoryStickyThreadUpdateEventConnection = {
  __typename: 'CategoryStickyThreadUpdateEventConnection'
  edges: Array<CategoryStickyThreadUpdateEventEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type CategoryStickyThreadUpdateEventCreateInput = {
  actor: Scalars['ID']
  category: Scalars['ID']
  inBlock: Scalars['Float']
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock: Scalars['Float']
  network: Network
}

export type CategoryStickyThreadUpdateEventEdge = {
  __typename: 'CategoryStickyThreadUpdateEventEdge'
  cursor: Scalars['String']
  node: CategoryStickyThreadUpdateEvent
}

export enum CategoryStickyThreadUpdateEventOrderByInput {
  ActorAsc = 'actor_ASC',
  ActorDesc = 'actor_DESC',
  CategoryAsc = 'category_ASC',
  CategoryDesc = 'category_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type CategoryStickyThreadUpdateEventUpdateInput = {
  actor?: InputMaybe<Scalars['ID']>
  category?: InputMaybe<Scalars['ID']>
  inBlock?: InputMaybe<Scalars['Float']>
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock?: InputMaybe<Scalars['Float']>
  network?: InputMaybe<Network>
}

export type CategoryStickyThreadUpdateEventWhereInput = {
  AND?: InputMaybe<Array<CategoryStickyThreadUpdateEventWhereInput>>
  OR?: InputMaybe<Array<CategoryStickyThreadUpdateEventWhereInput>>
  actor?: InputMaybe<WorkerWhereInput>
  category?: InputMaybe<ForumCategoryWhereInput>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  inBlock_eq?: InputMaybe<Scalars['Int']>
  inBlock_gt?: InputMaybe<Scalars['Int']>
  inBlock_gte?: InputMaybe<Scalars['Int']>
  inBlock_in?: InputMaybe<Array<Scalars['Int']>>
  inBlock_lt?: InputMaybe<Scalars['Int']>
  inBlock_lte?: InputMaybe<Scalars['Int']>
  inExtrinsic_contains?: InputMaybe<Scalars['String']>
  inExtrinsic_endsWith?: InputMaybe<Scalars['String']>
  inExtrinsic_eq?: InputMaybe<Scalars['String']>
  inExtrinsic_in?: InputMaybe<Array<Scalars['String']>>
  inExtrinsic_startsWith?: InputMaybe<Scalars['String']>
  indexInBlock_eq?: InputMaybe<Scalars['Int']>
  indexInBlock_gt?: InputMaybe<Scalars['Int']>
  indexInBlock_gte?: InputMaybe<Scalars['Int']>
  indexInBlock_in?: InputMaybe<Array<Scalars['Int']>>
  indexInBlock_lt?: InputMaybe<Scalars['Int']>
  indexInBlock_lte?: InputMaybe<Scalars['Int']>
  network_eq?: InputMaybe<Network>
  network_in?: InputMaybe<Array<Network>>
  newStickyThreads_every?: InputMaybe<ForumThreadWhereInput>
  newStickyThreads_none?: InputMaybe<ForumThreadWhereInput>
  newStickyThreads_some?: InputMaybe<ForumThreadWhereInput>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
}

export type CategoryStickyThreadUpdateEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type Channel = BaseGraphQlObject & {
  __typename: 'Channel'
  /** Channel's avatar photo asset. */
  avatarPhoto?: Maybe<Asset>
  category?: Maybe<ChannelCategory>
  categoryId?: Maybe<Scalars['String']>
  /** Channel's cover (background) photo asset. Recommended ratio: 16:9. */
  coverPhoto?: Maybe<Asset>
  createdAt: Scalars['DateTime']
  createdById: Scalars['String']
  createdInBlock: Scalars['Int']
  deletedAt?: Maybe<Scalars['DateTime']>
  deletedById?: Maybe<Scalars['String']>
  /** The description of a Channel */
  description?: Maybe<Scalars['String']>
  id: Scalars['ID']
  /** Flag signaling whether a channel is censored. */
  isCensored: Scalars['Boolean']
  /** Flag signaling whether a channel is public. */
  isPublic?: Maybe<Scalars['Boolean']>
  language?: Maybe<Language>
  languageId?: Maybe<Scalars['String']>
  ownerCuratorGroup?: Maybe<CuratorGroup>
  ownerCuratorGroupId?: Maybe<Scalars['String']>
  ownerMember?: Maybe<Membership>
  ownerMemberId?: Maybe<Scalars['String']>
  /** Reward account where revenue is sent if set. */
  rewardAccount?: Maybe<Scalars['String']>
  /** The title of the Channel */
  title?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedById?: Maybe<Scalars['String']>
  version: Scalars['Int']
  videos: Array<Video>
}

export type ChannelCategoriesByNameFtsOutput = {
  __typename: 'ChannelCategoriesByNameFTSOutput'
  highlight: Scalars['String']
  isTypeOf: Scalars['String']
  item: ChannelCategoriesByNameSearchResult
  rank: Scalars['Float']
}

export type ChannelCategoriesByNameSearchResult = ChannelCategory

/** Category of media channel */
export type ChannelCategory = BaseGraphQlObject & {
  __typename: 'ChannelCategory'
  channels: Array<Channel>
  createdAt: Scalars['DateTime']
  createdById: Scalars['String']
  createdInBlock: Scalars['Int']
  deletedAt?: Maybe<Scalars['DateTime']>
  deletedById?: Maybe<Scalars['String']>
  id: Scalars['ID']
  /** The name of the category */
  name?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedById?: Maybe<Scalars['String']>
  version: Scalars['Int']
}

export type ChannelCategoryConnection = {
  __typename: 'ChannelCategoryConnection'
  edges: Array<ChannelCategoryEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type ChannelCategoryCreateInput = {
  createdInBlock: Scalars['Float']
  name?: InputMaybe<Scalars['String']>
}

export type ChannelCategoryEdge = {
  __typename: 'ChannelCategoryEdge'
  cursor: Scalars['String']
  node: ChannelCategory
}

export enum ChannelCategoryOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  CreatedInBlockAsc = 'createdInBlock_ASC',
  CreatedInBlockDesc = 'createdInBlock_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type ChannelCategoryUpdateInput = {
  createdInBlock?: InputMaybe<Scalars['Float']>
  name?: InputMaybe<Scalars['String']>
}

export type ChannelCategoryWhereInput = {
  AND?: InputMaybe<Array<ChannelCategoryWhereInput>>
  OR?: InputMaybe<Array<ChannelCategoryWhereInput>>
  channels_every?: InputMaybe<ChannelWhereInput>
  channels_none?: InputMaybe<ChannelWhereInput>
  channels_some?: InputMaybe<ChannelWhereInput>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  createdInBlock_eq?: InputMaybe<Scalars['Int']>
  createdInBlock_gt?: InputMaybe<Scalars['Int']>
  createdInBlock_gte?: InputMaybe<Scalars['Int']>
  createdInBlock_in?: InputMaybe<Array<Scalars['Int']>>
  createdInBlock_lt?: InputMaybe<Scalars['Int']>
  createdInBlock_lte?: InputMaybe<Scalars['Int']>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  name_contains?: InputMaybe<Scalars['String']>
  name_endsWith?: InputMaybe<Scalars['String']>
  name_eq?: InputMaybe<Scalars['String']>
  name_in?: InputMaybe<Array<Scalars['String']>>
  name_startsWith?: InputMaybe<Scalars['String']>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
}

export type ChannelCategoryWhereUniqueInput = {
  id: Scalars['ID']
}

export type ChannelConnection = {
  __typename: 'ChannelConnection'
  edges: Array<ChannelEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type ChannelCreateInput = {
  avatarPhoto: Scalars['JSONObject']
  category?: InputMaybe<Scalars['ID']>
  coverPhoto: Scalars['JSONObject']
  createdInBlock: Scalars['Float']
  description?: InputMaybe<Scalars['String']>
  isCensored: Scalars['Boolean']
  isPublic?: InputMaybe<Scalars['Boolean']>
  language?: InputMaybe<Scalars['ID']>
  ownerCuratorGroup?: InputMaybe<Scalars['ID']>
  ownerMember?: InputMaybe<Scalars['ID']>
  rewardAccount?: InputMaybe<Scalars['String']>
  title?: InputMaybe<Scalars['String']>
}

export type ChannelEdge = {
  __typename: 'ChannelEdge'
  cursor: Scalars['String']
  node: Channel
}

export enum ChannelOrderByInput {
  CategoryAsc = 'category_ASC',
  CategoryDesc = 'category_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  CreatedInBlockAsc = 'createdInBlock_ASC',
  CreatedInBlockDesc = 'createdInBlock_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  IsCensoredAsc = 'isCensored_ASC',
  IsCensoredDesc = 'isCensored_DESC',
  IsPublicAsc = 'isPublic_ASC',
  IsPublicDesc = 'isPublic_DESC',
  LanguageAsc = 'language_ASC',
  LanguageDesc = 'language_DESC',
  OwnerCuratorGroupAsc = 'ownerCuratorGroup_ASC',
  OwnerCuratorGroupDesc = 'ownerCuratorGroup_DESC',
  OwnerMemberAsc = 'ownerMember_ASC',
  OwnerMemberDesc = 'ownerMember_DESC',
  RewardAccountAsc = 'rewardAccount_ASC',
  RewardAccountDesc = 'rewardAccount_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type ChannelUpdateInput = {
  avatarPhoto?: InputMaybe<Scalars['JSONObject']>
  category?: InputMaybe<Scalars['ID']>
  coverPhoto?: InputMaybe<Scalars['JSONObject']>
  createdInBlock?: InputMaybe<Scalars['Float']>
  description?: InputMaybe<Scalars['String']>
  isCensored?: InputMaybe<Scalars['Boolean']>
  isPublic?: InputMaybe<Scalars['Boolean']>
  language?: InputMaybe<Scalars['ID']>
  ownerCuratorGroup?: InputMaybe<Scalars['ID']>
  ownerMember?: InputMaybe<Scalars['ID']>
  rewardAccount?: InputMaybe<Scalars['String']>
  title?: InputMaybe<Scalars['String']>
}

export type ChannelWhereInput = {
  AND?: InputMaybe<Array<ChannelWhereInput>>
  OR?: InputMaybe<Array<ChannelWhereInput>>
  avatarPhoto_json?: InputMaybe<Scalars['JSONObject']>
  category?: InputMaybe<ChannelCategoryWhereInput>
  coverPhoto_json?: InputMaybe<Scalars['JSONObject']>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  createdInBlock_eq?: InputMaybe<Scalars['Int']>
  createdInBlock_gt?: InputMaybe<Scalars['Int']>
  createdInBlock_gte?: InputMaybe<Scalars['Int']>
  createdInBlock_in?: InputMaybe<Array<Scalars['Int']>>
  createdInBlock_lt?: InputMaybe<Scalars['Int']>
  createdInBlock_lte?: InputMaybe<Scalars['Int']>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  description_contains?: InputMaybe<Scalars['String']>
  description_endsWith?: InputMaybe<Scalars['String']>
  description_eq?: InputMaybe<Scalars['String']>
  description_in?: InputMaybe<Array<Scalars['String']>>
  description_startsWith?: InputMaybe<Scalars['String']>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  isCensored_eq?: InputMaybe<Scalars['Boolean']>
  isCensored_in?: InputMaybe<Array<Scalars['Boolean']>>
  isPublic_eq?: InputMaybe<Scalars['Boolean']>
  isPublic_in?: InputMaybe<Array<Scalars['Boolean']>>
  language?: InputMaybe<LanguageWhereInput>
  ownerCuratorGroup?: InputMaybe<CuratorGroupWhereInput>
  ownerMember?: InputMaybe<MembershipWhereInput>
  rewardAccount_contains?: InputMaybe<Scalars['String']>
  rewardAccount_endsWith?: InputMaybe<Scalars['String']>
  rewardAccount_eq?: InputMaybe<Scalars['String']>
  rewardAccount_in?: InputMaybe<Array<Scalars['String']>>
  rewardAccount_startsWith?: InputMaybe<Scalars['String']>
  title_contains?: InputMaybe<Scalars['String']>
  title_endsWith?: InputMaybe<Scalars['String']>
  title_eq?: InputMaybe<Scalars['String']>
  title_in?: InputMaybe<Array<Scalars['String']>>
  title_startsWith?: InputMaybe<Scalars['String']>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
  videos_every?: InputMaybe<VideoWhereInput>
  videos_none?: InputMaybe<VideoWhereInput>
  videos_some?: InputMaybe<VideoWhereInput>
}

export type ChannelWhereUniqueInput = {
  id: Scalars['ID']
}

export type CouncilMember = BaseGraphQlObject & {
  __typename: 'CouncilMember'
  /** Amount of reward collected by this council member so far. */
  accumulatedReward: Scalars['BigInt']
  createdAt: Scalars['DateTime']
  createdById: Scalars['String']
  deletedAt?: Maybe<Scalars['DateTime']>
  deletedById?: Maybe<Scalars['String']>
  electedInCouncil: ElectedCouncil
  electedInCouncilId: Scalars['String']
  id: Scalars['ID']
  /** Block number in which council member received the last reward payment. */
  lastPaymentBlock: Scalars['BigInt']
  member: Membership
  memberId: Scalars['String']
  /** Account that will receive used for reward currency for council membership. */
  rewardAccountId: Scalars['String']
  rewardpaymenteventcouncilMember?: Maybe<Array<RewardPaymentEvent>>
  /** Stake used for the council membership. */
  stake: Scalars['BigInt']
  /** Account used for staking currency for council membership. */
  stakingAccountId: Scalars['String']
  /** Reward amount that should have been paid but couldn't be paid off due to insufficient budget. */
  unpaidReward: Scalars['BigInt']
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedById?: Maybe<Scalars['String']>
  version: Scalars['Int']
}

export type CouncilMemberConnection = {
  __typename: 'CouncilMemberConnection'
  edges: Array<CouncilMemberEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type CouncilMemberCreateInput = {
  accumulatedReward: Scalars['String']
  electedInCouncil: Scalars['ID']
  lastPaymentBlock: Scalars['String']
  member: Scalars['ID']
  rewardAccountId: Scalars['String']
  stake: Scalars['String']
  stakingAccountId: Scalars['String']
  unpaidReward: Scalars['String']
}

export type CouncilMemberEdge = {
  __typename: 'CouncilMemberEdge'
  cursor: Scalars['String']
  node: CouncilMember
}

export enum CouncilMemberOrderByInput {
  AccumulatedRewardAsc = 'accumulatedReward_ASC',
  AccumulatedRewardDesc = 'accumulatedReward_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  ElectedInCouncilAsc = 'electedInCouncil_ASC',
  ElectedInCouncilDesc = 'electedInCouncil_DESC',
  LastPaymentBlockAsc = 'lastPaymentBlock_ASC',
  LastPaymentBlockDesc = 'lastPaymentBlock_DESC',
  MemberAsc = 'member_ASC',
  MemberDesc = 'member_DESC',
  RewardAccountIdAsc = 'rewardAccountId_ASC',
  RewardAccountIdDesc = 'rewardAccountId_DESC',
  StakeAsc = 'stake_ASC',
  StakeDesc = 'stake_DESC',
  StakingAccountIdAsc = 'stakingAccountId_ASC',
  StakingAccountIdDesc = 'stakingAccountId_DESC',
  UnpaidRewardAsc = 'unpaidReward_ASC',
  UnpaidRewardDesc = 'unpaidReward_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type CouncilMemberUpdateInput = {
  accumulatedReward?: InputMaybe<Scalars['String']>
  electedInCouncil?: InputMaybe<Scalars['ID']>
  lastPaymentBlock?: InputMaybe<Scalars['String']>
  member?: InputMaybe<Scalars['ID']>
  rewardAccountId?: InputMaybe<Scalars['String']>
  stake?: InputMaybe<Scalars['String']>
  stakingAccountId?: InputMaybe<Scalars['String']>
  unpaidReward?: InputMaybe<Scalars['String']>
}

export type CouncilMemberWhereInput = {
  AND?: InputMaybe<Array<CouncilMemberWhereInput>>
  OR?: InputMaybe<Array<CouncilMemberWhereInput>>
  accumulatedReward_eq?: InputMaybe<Scalars['BigInt']>
  accumulatedReward_gt?: InputMaybe<Scalars['BigInt']>
  accumulatedReward_gte?: InputMaybe<Scalars['BigInt']>
  accumulatedReward_in?: InputMaybe<Array<Scalars['BigInt']>>
  accumulatedReward_lt?: InputMaybe<Scalars['BigInt']>
  accumulatedReward_lte?: InputMaybe<Scalars['BigInt']>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  electedInCouncil?: InputMaybe<ElectedCouncilWhereInput>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  lastPaymentBlock_eq?: InputMaybe<Scalars['BigInt']>
  lastPaymentBlock_gt?: InputMaybe<Scalars['BigInt']>
  lastPaymentBlock_gte?: InputMaybe<Scalars['BigInt']>
  lastPaymentBlock_in?: InputMaybe<Array<Scalars['BigInt']>>
  lastPaymentBlock_lt?: InputMaybe<Scalars['BigInt']>
  lastPaymentBlock_lte?: InputMaybe<Scalars['BigInt']>
  member?: InputMaybe<MembershipWhereInput>
  rewardAccountId_contains?: InputMaybe<Scalars['String']>
  rewardAccountId_endsWith?: InputMaybe<Scalars['String']>
  rewardAccountId_eq?: InputMaybe<Scalars['String']>
  rewardAccountId_in?: InputMaybe<Array<Scalars['String']>>
  rewardAccountId_startsWith?: InputMaybe<Scalars['String']>
  rewardpaymenteventcouncilMember_every?: InputMaybe<RewardPaymentEventWhereInput>
  rewardpaymenteventcouncilMember_none?: InputMaybe<RewardPaymentEventWhereInput>
  rewardpaymenteventcouncilMember_some?: InputMaybe<RewardPaymentEventWhereInput>
  stake_eq?: InputMaybe<Scalars['BigInt']>
  stake_gt?: InputMaybe<Scalars['BigInt']>
  stake_gte?: InputMaybe<Scalars['BigInt']>
  stake_in?: InputMaybe<Array<Scalars['BigInt']>>
  stake_lt?: InputMaybe<Scalars['BigInt']>
  stake_lte?: InputMaybe<Scalars['BigInt']>
  stakingAccountId_contains?: InputMaybe<Scalars['String']>
  stakingAccountId_endsWith?: InputMaybe<Scalars['String']>
  stakingAccountId_eq?: InputMaybe<Scalars['String']>
  stakingAccountId_in?: InputMaybe<Array<Scalars['String']>>
  stakingAccountId_startsWith?: InputMaybe<Scalars['String']>
  unpaidReward_eq?: InputMaybe<Scalars['BigInt']>
  unpaidReward_gt?: InputMaybe<Scalars['BigInt']>
  unpaidReward_gte?: InputMaybe<Scalars['BigInt']>
  unpaidReward_in?: InputMaybe<Array<Scalars['BigInt']>>
  unpaidReward_lt?: InputMaybe<Scalars['BigInt']>
  unpaidReward_lte?: InputMaybe<Scalars['BigInt']>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
}

export type CouncilMemberWhereUniqueInput = {
  id: Scalars['ID']
}

export type CouncilStage = CouncilStageAnnouncing | CouncilStageElection | CouncilStageIdle | VariantNone

export type CouncilStageAnnouncing = {
  __typename: 'CouncilStageAnnouncing'
  /** Number of candidates aspiring to be elected as council members. */
  candidatesCount: Scalars['Float']
}

export type CouncilStageElection = {
  __typename: 'CouncilStageElection'
  /** Number of candidates aspiring to be elected as council members. */
  candidatesCount: Scalars['Float']
}

export type CouncilStageIdle = {
  __typename: 'CouncilStageIdle'
  dummy?: Maybe<Scalars['Int']>
}

export type CouncilStageUpdate = BaseGraphQlObject & {
  __typename: 'CouncilStageUpdate'
  /** Block number at which change happened. */
  changedAt: Scalars['BigInt']
  createdAt: Scalars['DateTime']
  createdById: Scalars['String']
  deletedAt?: Maybe<Scalars['DateTime']>
  deletedById?: Maybe<Scalars['String']>
  electedCouncil?: Maybe<ElectedCouncil>
  electedCouncilId?: Maybe<Scalars['String']>
  /** Election not completed due to insufficient candidates or winners. */
  electionProblem?: Maybe<ElectionProblem>
  id: Scalars['ID']
  /** The new stage council got into. */
  stage: CouncilStage
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedById?: Maybe<Scalars['String']>
  version: Scalars['Int']
}

export type CouncilStageUpdateConnection = {
  __typename: 'CouncilStageUpdateConnection'
  edges: Array<CouncilStageUpdateEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type CouncilStageUpdateCreateInput = {
  changedAt: Scalars['String']
  electedCouncil?: InputMaybe<Scalars['ID']>
  electionProblem?: InputMaybe<ElectionProblem>
  stage: Scalars['JSONObject']
}

export type CouncilStageUpdateEdge = {
  __typename: 'CouncilStageUpdateEdge'
  cursor: Scalars['String']
  node: CouncilStageUpdate
}

export enum CouncilStageUpdateOrderByInput {
  ChangedAtAsc = 'changedAt_ASC',
  ChangedAtDesc = 'changedAt_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  ElectedCouncilAsc = 'electedCouncil_ASC',
  ElectedCouncilDesc = 'electedCouncil_DESC',
  ElectionProblemAsc = 'electionProblem_ASC',
  ElectionProblemDesc = 'electionProblem_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type CouncilStageUpdateUpdateInput = {
  changedAt?: InputMaybe<Scalars['String']>
  electedCouncil?: InputMaybe<Scalars['ID']>
  electionProblem?: InputMaybe<ElectionProblem>
  stage?: InputMaybe<Scalars['JSONObject']>
}

export type CouncilStageUpdateWhereInput = {
  AND?: InputMaybe<Array<CouncilStageUpdateWhereInput>>
  OR?: InputMaybe<Array<CouncilStageUpdateWhereInput>>
  changedAt_eq?: InputMaybe<Scalars['BigInt']>
  changedAt_gt?: InputMaybe<Scalars['BigInt']>
  changedAt_gte?: InputMaybe<Scalars['BigInt']>
  changedAt_in?: InputMaybe<Array<Scalars['BigInt']>>
  changedAt_lt?: InputMaybe<Scalars['BigInt']>
  changedAt_lte?: InputMaybe<Scalars['BigInt']>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  electedCouncil?: InputMaybe<ElectedCouncilWhereInput>
  electionProblem_eq?: InputMaybe<ElectionProblem>
  electionProblem_in?: InputMaybe<Array<ElectionProblem>>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  stage_json?: InputMaybe<Scalars['JSONObject']>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
}

export type CouncilStageUpdateWhereUniqueInput = {
  id: Scalars['ID']
}

export type CouncilorRewardUpdatedEvent = BaseGraphQlObject &
  Event & {
    __typename: 'CouncilorRewardUpdatedEvent'
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    id: Scalars['ID']
    /** Blocknumber of the block in which the event was emitted. */
    inBlock: Scalars['Int']
    /** Hash of the extrinsic which caused the event to be emitted */
    inExtrinsic?: Maybe<Scalars['String']>
    /** Index of event in block from which it was emitted. */
    indexInBlock: Scalars['Int']
    /** Network the block was produced in */
    network: Network
    /** New reward amount paid each reward period. */
    rewardAmount: Scalars['BigInt']
    /** Filtering options for interface implementers */
    type?: Maybe<EventTypeOptions>
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
  }

export type CouncilorRewardUpdatedEventConnection = {
  __typename: 'CouncilorRewardUpdatedEventConnection'
  edges: Array<CouncilorRewardUpdatedEventEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type CouncilorRewardUpdatedEventCreateInput = {
  inBlock: Scalars['Float']
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock: Scalars['Float']
  network: Network
  rewardAmount: Scalars['String']
}

export type CouncilorRewardUpdatedEventEdge = {
  __typename: 'CouncilorRewardUpdatedEventEdge'
  cursor: Scalars['String']
  node: CouncilorRewardUpdatedEvent
}

export enum CouncilorRewardUpdatedEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  RewardAmountAsc = 'rewardAmount_ASC',
  RewardAmountDesc = 'rewardAmount_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type CouncilorRewardUpdatedEventUpdateInput = {
  inBlock?: InputMaybe<Scalars['Float']>
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock?: InputMaybe<Scalars['Float']>
  network?: InputMaybe<Network>
  rewardAmount?: InputMaybe<Scalars['String']>
}

export type CouncilorRewardUpdatedEventWhereInput = {
  AND?: InputMaybe<Array<CouncilorRewardUpdatedEventWhereInput>>
  OR?: InputMaybe<Array<CouncilorRewardUpdatedEventWhereInput>>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  inBlock_eq?: InputMaybe<Scalars['Int']>
  inBlock_gt?: InputMaybe<Scalars['Int']>
  inBlock_gte?: InputMaybe<Scalars['Int']>
  inBlock_in?: InputMaybe<Array<Scalars['Int']>>
  inBlock_lt?: InputMaybe<Scalars['Int']>
  inBlock_lte?: InputMaybe<Scalars['Int']>
  inExtrinsic_contains?: InputMaybe<Scalars['String']>
  inExtrinsic_endsWith?: InputMaybe<Scalars['String']>
  inExtrinsic_eq?: InputMaybe<Scalars['String']>
  inExtrinsic_in?: InputMaybe<Array<Scalars['String']>>
  inExtrinsic_startsWith?: InputMaybe<Scalars['String']>
  indexInBlock_eq?: InputMaybe<Scalars['Int']>
  indexInBlock_gt?: InputMaybe<Scalars['Int']>
  indexInBlock_gte?: InputMaybe<Scalars['Int']>
  indexInBlock_in?: InputMaybe<Array<Scalars['Int']>>
  indexInBlock_lt?: InputMaybe<Scalars['Int']>
  indexInBlock_lte?: InputMaybe<Scalars['Int']>
  network_eq?: InputMaybe<Network>
  network_in?: InputMaybe<Array<Network>>
  rewardAmount_eq?: InputMaybe<Scalars['BigInt']>
  rewardAmount_gt?: InputMaybe<Scalars['BigInt']>
  rewardAmount_gte?: InputMaybe<Scalars['BigInt']>
  rewardAmount_in?: InputMaybe<Array<Scalars['BigInt']>>
  rewardAmount_lt?: InputMaybe<Scalars['BigInt']>
  rewardAmount_lte?: InputMaybe<Scalars['BigInt']>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
}

export type CouncilorRewardUpdatedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type CreateBlogPostProposalDetails = {
  __typename: 'CreateBlogPostProposalDetails'
  /** Blog post content (md-formatted) */
  body: Scalars['String']
  /** Blog post title */
  title: Scalars['String']
}

export type CreateWorkingGroupLeadOpeningProposalDetails = {
  __typename: 'CreateWorkingGroupLeadOpeningProposalDetails'
  /** Related working group */
  group?: Maybe<WorkingGroup>
  /** The opening metadata */
  metadata?: Maybe<WorkingGroupOpeningMetadata>
  /** Initial workers' reward per block */
  rewardPerBlock: Scalars['Float']
  /** Min. application / role stake amount */
  stakeAmount: Scalars['Float']
  /** Role stake unstaking period in blocks */
  unstakingPeriod: Scalars['Int']
}

export type CuratorGroup = BaseGraphQlObject & {
  __typename: 'CuratorGroup'
  channels: Array<Channel>
  createdAt: Scalars['DateTime']
  createdById: Scalars['String']
  /** Curators belonging to this group */
  curatorIds: Array<Scalars['Int']>
  deletedAt?: Maybe<Scalars['DateTime']>
  deletedById?: Maybe<Scalars['String']>
  id: Scalars['ID']
  /** Is group active or not */
  isActive: Scalars['Boolean']
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedById?: Maybe<Scalars['String']>
  version: Scalars['Int']
}

export type CuratorGroupConnection = {
  __typename: 'CuratorGroupConnection'
  edges: Array<CuratorGroupEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type CuratorGroupCreateInput = {
  curatorIds: Array<Scalars['Int']>
  isActive: Scalars['Boolean']
}

export type CuratorGroupEdge = {
  __typename: 'CuratorGroupEdge'
  cursor: Scalars['String']
  node: CuratorGroup
}

export enum CuratorGroupOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  IsActiveAsc = 'isActive_ASC',
  IsActiveDesc = 'isActive_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type CuratorGroupUpdateInput = {
  curatorIds?: InputMaybe<Array<Scalars['Int']>>
  isActive?: InputMaybe<Scalars['Boolean']>
}

export type CuratorGroupWhereInput = {
  AND?: InputMaybe<Array<CuratorGroupWhereInput>>
  OR?: InputMaybe<Array<CuratorGroupWhereInput>>
  channels_every?: InputMaybe<ChannelWhereInput>
  channels_none?: InputMaybe<ChannelWhereInput>
  channels_some?: InputMaybe<ChannelWhereInput>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  curatorIds_containsAll?: InputMaybe<Array<Scalars['Int']>>
  curatorIds_containsAny?: InputMaybe<Array<Scalars['Int']>>
  curatorIds_containsNone?: InputMaybe<Array<Scalars['Int']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  isActive_eq?: InputMaybe<Scalars['Boolean']>
  isActive_in?: InputMaybe<Array<Scalars['Boolean']>>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
}

export type CuratorGroupWhereUniqueInput = {
  id: Scalars['ID']
}

/** Manages content ids, type and storage provider decision about it */
export type DataObject = BaseGraphQlObject & {
  __typename: 'DataObject'
  createdAt: Scalars['DateTime']
  createdById: Scalars['String']
  /** Content added at */
  createdInBlock: Scalars['Int']
  deletedAt?: Maybe<Scalars['DateTime']>
  deletedById?: Maybe<Scalars['String']>
  id: Scalars['ID']
  /** IPFS content id */
  ipfsContentId: Scalars['String']
  /** Joystream runtime content */
  joystreamContentId: Scalars['String']
  liaison?: Maybe<Worker>
  liaisonId?: Maybe<Scalars['String']>
  /** Storage provider as liaison judgment */
  liaisonJudgement: LiaisonJudgement
  /** Content owner */
  owner: DataObjectOwner
  /** Content size in bytes */
  size: Scalars['BigInt']
  /** Content type id */
  typeId: Scalars['Int']
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedById?: Maybe<Scalars['String']>
  version: Scalars['Int']
}

export type DataObjectConnection = {
  __typename: 'DataObjectConnection'
  edges: Array<DataObjectEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type DataObjectCreateInput = {
  createdInBlock: Scalars['Float']
  ipfsContentId: Scalars['String']
  joystreamContentId: Scalars['String']
  liaison?: InputMaybe<Scalars['ID']>
  liaisonJudgement: LiaisonJudgement
  owner: Scalars['JSONObject']
  size: Scalars['String']
  typeId: Scalars['Float']
}

export type DataObjectEdge = {
  __typename: 'DataObjectEdge'
  cursor: Scalars['String']
  node: DataObject
}

export enum DataObjectOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  CreatedInBlockAsc = 'createdInBlock_ASC',
  CreatedInBlockDesc = 'createdInBlock_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  IpfsContentIdAsc = 'ipfsContentId_ASC',
  IpfsContentIdDesc = 'ipfsContentId_DESC',
  JoystreamContentIdAsc = 'joystreamContentId_ASC',
  JoystreamContentIdDesc = 'joystreamContentId_DESC',
  LiaisonJudgementAsc = 'liaisonJudgement_ASC',
  LiaisonJudgementDesc = 'liaisonJudgement_DESC',
  LiaisonAsc = 'liaison_ASC',
  LiaisonDesc = 'liaison_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  TypeIdAsc = 'typeId_ASC',
  TypeIdDesc = 'typeId_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type DataObjectOwner =
  | DataObjectOwnerChannel
  | DataObjectOwnerCouncil
  | DataObjectOwnerDao
  | DataObjectOwnerMember
  | DataObjectOwnerWorkingGroup

export type DataObjectOwnerChannel = {
  __typename: 'DataObjectOwnerChannel'
  /** Related channel */
  channel?: Maybe<Channel>
  /** Variant needs to have at least one property. This value is not used. */
  dummy?: Maybe<Scalars['Int']>
}

export type DataObjectOwnerCouncil = {
  __typename: 'DataObjectOwnerCouncil'
  /** Variant needs to have at least one property. This value is not used. */
  dummy?: Maybe<Scalars['Int']>
}

export type DataObjectOwnerDao = {
  __typename: 'DataObjectOwnerDao'
  /** DAO identifier */
  dao: Scalars['Int']
}

export type DataObjectOwnerMember = {
  __typename: 'DataObjectOwnerMember'
  /** Variant needs to have at least one property. This value is not used. */
  dummy?: Maybe<Scalars['Int']>
  /** Related member */
  member?: Maybe<Membership>
}

export type DataObjectOwnerWorkingGroup = {
  __typename: 'DataObjectOwnerWorkingGroup'
  /** Working group */
  workingGroup?: Maybe<WorkingGroup>
}

export type DataObjectUpdateInput = {
  createdInBlock?: InputMaybe<Scalars['Float']>
  ipfsContentId?: InputMaybe<Scalars['String']>
  joystreamContentId?: InputMaybe<Scalars['String']>
  liaison?: InputMaybe<Scalars['ID']>
  liaisonJudgement?: InputMaybe<LiaisonJudgement>
  owner?: InputMaybe<Scalars['JSONObject']>
  size?: InputMaybe<Scalars['String']>
  typeId?: InputMaybe<Scalars['Float']>
}

export type DataObjectWhereInput = {
  AND?: InputMaybe<Array<DataObjectWhereInput>>
  OR?: InputMaybe<Array<DataObjectWhereInput>>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  createdInBlock_eq?: InputMaybe<Scalars['Int']>
  createdInBlock_gt?: InputMaybe<Scalars['Int']>
  createdInBlock_gte?: InputMaybe<Scalars['Int']>
  createdInBlock_in?: InputMaybe<Array<Scalars['Int']>>
  createdInBlock_lt?: InputMaybe<Scalars['Int']>
  createdInBlock_lte?: InputMaybe<Scalars['Int']>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  ipfsContentId_contains?: InputMaybe<Scalars['String']>
  ipfsContentId_endsWith?: InputMaybe<Scalars['String']>
  ipfsContentId_eq?: InputMaybe<Scalars['String']>
  ipfsContentId_in?: InputMaybe<Array<Scalars['String']>>
  ipfsContentId_startsWith?: InputMaybe<Scalars['String']>
  joystreamContentId_contains?: InputMaybe<Scalars['String']>
  joystreamContentId_endsWith?: InputMaybe<Scalars['String']>
  joystreamContentId_eq?: InputMaybe<Scalars['String']>
  joystreamContentId_in?: InputMaybe<Array<Scalars['String']>>
  joystreamContentId_startsWith?: InputMaybe<Scalars['String']>
  liaison?: InputMaybe<WorkerWhereInput>
  liaisonJudgement_eq?: InputMaybe<LiaisonJudgement>
  liaisonJudgement_in?: InputMaybe<Array<LiaisonJudgement>>
  owner_json?: InputMaybe<Scalars['JSONObject']>
  size_eq?: InputMaybe<Scalars['BigInt']>
  size_gt?: InputMaybe<Scalars['BigInt']>
  size_gte?: InputMaybe<Scalars['BigInt']>
  size_in?: InputMaybe<Array<Scalars['BigInt']>>
  size_lt?: InputMaybe<Scalars['BigInt']>
  size_lte?: InputMaybe<Scalars['BigInt']>
  typeId_eq?: InputMaybe<Scalars['Int']>
  typeId_gt?: InputMaybe<Scalars['Int']>
  typeId_gte?: InputMaybe<Scalars['Int']>
  typeId_in?: InputMaybe<Array<Scalars['Int']>>
  typeId_lt?: InputMaybe<Scalars['Int']>
  typeId_lte?: InputMaybe<Scalars['Int']>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
}

export type DataObjectWhereUniqueInput = {
  id: Scalars['ID']
}

export type DecreaseWorkingGroupLeadStakeProposalDetails = {
  __typename: 'DecreaseWorkingGroupLeadStakeProposalDetails'
  /** Amount to decrease the stake by */
  amount: Scalars['Float']
  /** The lead that should be affected */
  lead?: Maybe<Worker>
}

export type DeleteResponse = {
  id: Scalars['ID']
}

export type EditBlogPostProposalDetails = {
  __typename: 'EditBlogPostProposalDetails'
  /** The related blog post */
  blogPost: Scalars['String']
  /** The new blog post body (if should be updated) */
  newBody?: Maybe<Scalars['String']>
  /** The new blog post title (if should be updated) */
  newTitle?: Maybe<Scalars['String']>
}

export type ElectedCouncil = BaseGraphQlObject & {
  __typename: 'ElectedCouncil'
  councilElections: Array<ElectionRound>
  councilMembers: Array<CouncilMember>
  createdAt: Scalars['DateTime']
  createdById: Scalars['String']
  deletedAt?: Maybe<Scalars['DateTime']>
  deletedById?: Maybe<Scalars['String']>
  /** Block number at which the council was elected. */
  electedAtBlock: Scalars['Int']
  /** Network running at the time of election. */
  electedAtNetwork: Network
  /** Time at which the council was elected. */
  electedAtTime: Scalars['DateTime']
  /** Block number at which the council reign ended and a new council was elected. */
  endedAtBlock?: Maybe<Scalars['Int']>
  /** Network running at the time of resignation. */
  endedAtNetwork?: Maybe<Network>
  /** Time at which the council reign ended and a new council was elected. */
  endedAtTime?: Maybe<Scalars['DateTime']>
  id: Scalars['ID']
  /** Sign if council is already resigned. */
  isResigned: Scalars['Boolean']
  newcouncilelectedeventelectedCouncil?: Maybe<Array<NewCouncilElectedEvent>>
  nextCouncilElections: Array<ElectionRound>
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedById?: Maybe<Scalars['String']>
  updates: Array<CouncilStageUpdate>
  version: Scalars['Int']
}

export type ElectedCouncilConnection = {
  __typename: 'ElectedCouncilConnection'
  edges: Array<ElectedCouncilEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type ElectedCouncilCreateInput = {
  electedAtBlock: Scalars['Float']
  electedAtNetwork: Network
  electedAtTime: Scalars['DateTime']
  endedAtBlock?: InputMaybe<Scalars['Float']>
  endedAtNetwork?: InputMaybe<Network>
  endedAtTime?: InputMaybe<Scalars['DateTime']>
  isResigned: Scalars['Boolean']
}

export type ElectedCouncilEdge = {
  __typename: 'ElectedCouncilEdge'
  cursor: Scalars['String']
  node: ElectedCouncil
}

export enum ElectedCouncilOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  ElectedAtBlockAsc = 'electedAtBlock_ASC',
  ElectedAtBlockDesc = 'electedAtBlock_DESC',
  ElectedAtNetworkAsc = 'electedAtNetwork_ASC',
  ElectedAtNetworkDesc = 'electedAtNetwork_DESC',
  ElectedAtTimeAsc = 'electedAtTime_ASC',
  ElectedAtTimeDesc = 'electedAtTime_DESC',
  EndedAtBlockAsc = 'endedAtBlock_ASC',
  EndedAtBlockDesc = 'endedAtBlock_DESC',
  EndedAtNetworkAsc = 'endedAtNetwork_ASC',
  EndedAtNetworkDesc = 'endedAtNetwork_DESC',
  EndedAtTimeAsc = 'endedAtTime_ASC',
  EndedAtTimeDesc = 'endedAtTime_DESC',
  IsResignedAsc = 'isResigned_ASC',
  IsResignedDesc = 'isResigned_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type ElectedCouncilUpdateInput = {
  electedAtBlock?: InputMaybe<Scalars['Float']>
  electedAtNetwork?: InputMaybe<Network>
  electedAtTime?: InputMaybe<Scalars['DateTime']>
  endedAtBlock?: InputMaybe<Scalars['Float']>
  endedAtNetwork?: InputMaybe<Network>
  endedAtTime?: InputMaybe<Scalars['DateTime']>
  isResigned?: InputMaybe<Scalars['Boolean']>
}

export type ElectedCouncilWhereInput = {
  AND?: InputMaybe<Array<ElectedCouncilWhereInput>>
  OR?: InputMaybe<Array<ElectedCouncilWhereInput>>
  councilElections_every?: InputMaybe<ElectionRoundWhereInput>
  councilElections_none?: InputMaybe<ElectionRoundWhereInput>
  councilElections_some?: InputMaybe<ElectionRoundWhereInput>
  councilMembers_every?: InputMaybe<CouncilMemberWhereInput>
  councilMembers_none?: InputMaybe<CouncilMemberWhereInput>
  councilMembers_some?: InputMaybe<CouncilMemberWhereInput>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  electedAtBlock_eq?: InputMaybe<Scalars['Int']>
  electedAtBlock_gt?: InputMaybe<Scalars['Int']>
  electedAtBlock_gte?: InputMaybe<Scalars['Int']>
  electedAtBlock_in?: InputMaybe<Array<Scalars['Int']>>
  electedAtBlock_lt?: InputMaybe<Scalars['Int']>
  electedAtBlock_lte?: InputMaybe<Scalars['Int']>
  electedAtNetwork_eq?: InputMaybe<Network>
  electedAtNetwork_in?: InputMaybe<Array<Network>>
  electedAtTime_eq?: InputMaybe<Scalars['DateTime']>
  electedAtTime_gt?: InputMaybe<Scalars['DateTime']>
  electedAtTime_gte?: InputMaybe<Scalars['DateTime']>
  electedAtTime_lt?: InputMaybe<Scalars['DateTime']>
  electedAtTime_lte?: InputMaybe<Scalars['DateTime']>
  endedAtBlock_eq?: InputMaybe<Scalars['Int']>
  endedAtBlock_gt?: InputMaybe<Scalars['Int']>
  endedAtBlock_gte?: InputMaybe<Scalars['Int']>
  endedAtBlock_in?: InputMaybe<Array<Scalars['Int']>>
  endedAtBlock_lt?: InputMaybe<Scalars['Int']>
  endedAtBlock_lte?: InputMaybe<Scalars['Int']>
  endedAtNetwork_eq?: InputMaybe<Network>
  endedAtNetwork_in?: InputMaybe<Array<Network>>
  endedAtTime_eq?: InputMaybe<Scalars['DateTime']>
  endedAtTime_gt?: InputMaybe<Scalars['DateTime']>
  endedAtTime_gte?: InputMaybe<Scalars['DateTime']>
  endedAtTime_lt?: InputMaybe<Scalars['DateTime']>
  endedAtTime_lte?: InputMaybe<Scalars['DateTime']>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  isResigned_eq?: InputMaybe<Scalars['Boolean']>
  isResigned_in?: InputMaybe<Array<Scalars['Boolean']>>
  newcouncilelectedeventelectedCouncil_every?: InputMaybe<NewCouncilElectedEventWhereInput>
  newcouncilelectedeventelectedCouncil_none?: InputMaybe<NewCouncilElectedEventWhereInput>
  newcouncilelectedeventelectedCouncil_some?: InputMaybe<NewCouncilElectedEventWhereInput>
  nextCouncilElections_every?: InputMaybe<ElectionRoundWhereInput>
  nextCouncilElections_none?: InputMaybe<ElectionRoundWhereInput>
  nextCouncilElections_some?: InputMaybe<ElectionRoundWhereInput>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
  updates_every?: InputMaybe<CouncilStageUpdateWhereInput>
  updates_none?: InputMaybe<CouncilStageUpdateWhereInput>
  updates_some?: InputMaybe<CouncilStageUpdateWhereInput>
}

export type ElectedCouncilWhereUniqueInput = {
  id: Scalars['ID']
}

export enum ElectionProblem {
  NewCouncilNotElected = 'NEW_COUNCIL_NOT_ELECTED',
  NotEnoughCandidates = 'NOT_ENOUGH_CANDIDATES',
}

export type ElectionRound = BaseGraphQlObject & {
  __typename: 'ElectionRound'
  candidates: Array<Candidate>
  castVotes: Array<CastVote>
  createdAt: Scalars['DateTime']
  createdById: Scalars['String']
  /** Election cycle ID. */
  cycleId: Scalars['Int']
  deletedAt?: Maybe<Scalars['DateTime']>
  deletedById?: Maybe<Scalars['String']>
  electedCouncil: ElectedCouncil
  electedCouncilId: Scalars['String']
  /** Block number at which the election ended. */
  endedAtBlock?: Maybe<Scalars['Int']>
  /** Network running at the time the election ended. */
  endedAtNetwork?: Maybe<Network>
  /** Time at which the election ended. */
  endedAtTime?: Maybe<Scalars['DateTime']>
  id: Scalars['ID']
  /** Sign if election has already finished. */
  isFinished: Scalars['Boolean']
  nextElectedCouncil?: Maybe<ElectedCouncil>
  nextElectedCouncilId?: Maybe<Scalars['String']>
  referendumStageRevealing?: Maybe<ReferendumStageRevealing>
  referendumStageVoting?: Maybe<ReferendumStageVoting>
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedById?: Maybe<Scalars['String']>
  version: Scalars['Int']
}

export type ElectionRoundConnection = {
  __typename: 'ElectionRoundConnection'
  edges: Array<ElectionRoundEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type ElectionRoundCreateInput = {
  cycleId: Scalars['Float']
  electedCouncil: Scalars['ID']
  endedAtBlock?: InputMaybe<Scalars['Float']>
  endedAtNetwork?: InputMaybe<Network>
  endedAtTime?: InputMaybe<Scalars['DateTime']>
  isFinished: Scalars['Boolean']
  nextElectedCouncil?: InputMaybe<Scalars['ID']>
}

export type ElectionRoundEdge = {
  __typename: 'ElectionRoundEdge'
  cursor: Scalars['String']
  node: ElectionRound
}

export enum ElectionRoundOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  CycleIdAsc = 'cycleId_ASC',
  CycleIdDesc = 'cycleId_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  ElectedCouncilAsc = 'electedCouncil_ASC',
  ElectedCouncilDesc = 'electedCouncil_DESC',
  EndedAtBlockAsc = 'endedAtBlock_ASC',
  EndedAtBlockDesc = 'endedAtBlock_DESC',
  EndedAtNetworkAsc = 'endedAtNetwork_ASC',
  EndedAtNetworkDesc = 'endedAtNetwork_DESC',
  EndedAtTimeAsc = 'endedAtTime_ASC',
  EndedAtTimeDesc = 'endedAtTime_DESC',
  IsFinishedAsc = 'isFinished_ASC',
  IsFinishedDesc = 'isFinished_DESC',
  NextElectedCouncilAsc = 'nextElectedCouncil_ASC',
  NextElectedCouncilDesc = 'nextElectedCouncil_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type ElectionRoundUpdateInput = {
  cycleId?: InputMaybe<Scalars['Float']>
  electedCouncil?: InputMaybe<Scalars['ID']>
  endedAtBlock?: InputMaybe<Scalars['Float']>
  endedAtNetwork?: InputMaybe<Network>
  endedAtTime?: InputMaybe<Scalars['DateTime']>
  isFinished?: InputMaybe<Scalars['Boolean']>
  nextElectedCouncil?: InputMaybe<Scalars['ID']>
}

export type ElectionRoundWhereInput = {
  AND?: InputMaybe<Array<ElectionRoundWhereInput>>
  OR?: InputMaybe<Array<ElectionRoundWhereInput>>
  candidates_every?: InputMaybe<CandidateWhereInput>
  candidates_none?: InputMaybe<CandidateWhereInput>
  candidates_some?: InputMaybe<CandidateWhereInput>
  castVotes_every?: InputMaybe<CastVoteWhereInput>
  castVotes_none?: InputMaybe<CastVoteWhereInput>
  castVotes_some?: InputMaybe<CastVoteWhereInput>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  cycleId_eq?: InputMaybe<Scalars['Int']>
  cycleId_gt?: InputMaybe<Scalars['Int']>
  cycleId_gte?: InputMaybe<Scalars['Int']>
  cycleId_in?: InputMaybe<Array<Scalars['Int']>>
  cycleId_lt?: InputMaybe<Scalars['Int']>
  cycleId_lte?: InputMaybe<Scalars['Int']>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  electedCouncil?: InputMaybe<ElectedCouncilWhereInput>
  endedAtBlock_eq?: InputMaybe<Scalars['Int']>
  endedAtBlock_gt?: InputMaybe<Scalars['Int']>
  endedAtBlock_gte?: InputMaybe<Scalars['Int']>
  endedAtBlock_in?: InputMaybe<Array<Scalars['Int']>>
  endedAtBlock_lt?: InputMaybe<Scalars['Int']>
  endedAtBlock_lte?: InputMaybe<Scalars['Int']>
  endedAtNetwork_eq?: InputMaybe<Network>
  endedAtNetwork_in?: InputMaybe<Array<Network>>
  endedAtTime_eq?: InputMaybe<Scalars['DateTime']>
  endedAtTime_gt?: InputMaybe<Scalars['DateTime']>
  endedAtTime_gte?: InputMaybe<Scalars['DateTime']>
  endedAtTime_lt?: InputMaybe<Scalars['DateTime']>
  endedAtTime_lte?: InputMaybe<Scalars['DateTime']>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  isFinished_eq?: InputMaybe<Scalars['Boolean']>
  isFinished_in?: InputMaybe<Array<Scalars['Boolean']>>
  nextElectedCouncil?: InputMaybe<ElectedCouncilWhereInput>
  referendumStageRevealing?: InputMaybe<ReferendumStageRevealingWhereInput>
  referendumStageVoting?: InputMaybe<ReferendumStageVotingWhereInput>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
}

export type ElectionRoundWhereUniqueInput = {
  id: Scalars['ID']
}

export type Event = {
  /** Blocknumber of the block in which the event was emitted. */
  inBlock: Scalars['Int']
  /** Hash of the extrinsic which caused the event to be emitted */
  inExtrinsic?: Maybe<Scalars['String']>
  /** Index of event in block from which it was emitted. */
  indexInBlock: Scalars['Int']
  /** Network the block was produced in */
  network: Network
  /** Filtering options for interface implementers */
  type?: Maybe<EventTypeOptions>
}

export type EventCreateInput = {
  inBlock: Scalars['Float']
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock: Scalars['Float']
  network: Network
  type?: InputMaybe<EventTypeOptions>
}

export enum EventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export enum EventTypeOptions {
  AnnouncingPeriodStartedEvent = 'AnnouncingPeriodStartedEvent',
  ApplicationWithdrawnEvent = 'ApplicationWithdrawnEvent',
  AppliedOnOpeningEvent = 'AppliedOnOpeningEvent',
  BountyCreatedEvent = 'BountyCreatedEvent',
  BountyMaxFundingReachedEvent = 'BountyMaxFundingReachedEvent',
  BudgetBalanceSetEvent = 'BudgetBalanceSetEvent',
  BudgetIncrementUpdatedEvent = 'BudgetIncrementUpdatedEvent',
  BudgetRefillEvent = 'BudgetRefillEvent',
  BudgetRefillPlannedEvent = 'BudgetRefillPlannedEvent',
  BudgetSetEvent = 'BudgetSetEvent',
  BudgetSpendingEvent = 'BudgetSpendingEvent',
  CandidacyNoteSetEvent = 'CandidacyNoteSetEvent',
  CandidacyStakeReleaseEvent = 'CandidacyStakeReleaseEvent',
  CandidacyWithdrawEvent = 'CandidacyWithdrawEvent',
  CategoryArchivalStatusUpdatedEvent = 'CategoryArchivalStatusUpdatedEvent',
  CategoryCreatedEvent = 'CategoryCreatedEvent',
  CategoryDeletedEvent = 'CategoryDeletedEvent',
  CategoryMembershipOfModeratorUpdatedEvent = 'CategoryMembershipOfModeratorUpdatedEvent',
  CategoryStickyThreadUpdateEvent = 'CategoryStickyThreadUpdateEvent',
  CouncilorRewardUpdatedEvent = 'CouncilorRewardUpdatedEvent',
  InitialInvitationBalanceUpdatedEvent = 'InitialInvitationBalanceUpdatedEvent',
  InitialInvitationCountUpdatedEvent = 'InitialInvitationCountUpdatedEvent',
  InvitesTransferredEvent = 'InvitesTransferredEvent',
  LeaderInvitationQuotaUpdatedEvent = 'LeaderInvitationQuotaUpdatedEvent',
  LeaderSetEvent = 'LeaderSetEvent',
  LeaderUnsetEvent = 'LeaderUnsetEvent',
  MemberAccountsUpdatedEvent = 'MemberAccountsUpdatedEvent',
  MemberInvitedEvent = 'MemberInvitedEvent',
  MemberProfileUpdatedEvent = 'MemberProfileUpdatedEvent',
  MemberVerificationStatusUpdatedEvent = 'MemberVerificationStatusUpdatedEvent',
  MembershipBoughtEvent = 'MembershipBoughtEvent',
  MembershipPriceUpdatedEvent = 'MembershipPriceUpdatedEvent',
  NewCandidateEvent = 'NewCandidateEvent',
  NewCouncilElectedEvent = 'NewCouncilElectedEvent',
  NewCouncilNotElectedEvent = 'NewCouncilNotElectedEvent',
  NewMissedRewardLevelReachedEvent = 'NewMissedRewardLevelReachedEvent',
  NotEnoughCandidatesEvent = 'NotEnoughCandidatesEvent',
  OpeningAddedEvent = 'OpeningAddedEvent',
  OpeningCanceledEvent = 'OpeningCanceledEvent',
  OpeningFilledEvent = 'OpeningFilledEvent',
  PostAddedEvent = 'PostAddedEvent',
  PostDeletedEvent = 'PostDeletedEvent',
  PostModeratedEvent = 'PostModeratedEvent',
  PostReactedEvent = 'PostReactedEvent',
  PostTextUpdatedEvent = 'PostTextUpdatedEvent',
  ProposalCancelledEvent = 'ProposalCancelledEvent',
  ProposalCreatedEvent = 'ProposalCreatedEvent',
  ProposalDecisionMadeEvent = 'ProposalDecisionMadeEvent',
  ProposalDiscussionPostCreatedEvent = 'ProposalDiscussionPostCreatedEvent',
  ProposalDiscussionPostDeletedEvent = 'ProposalDiscussionPostDeletedEvent',
  ProposalDiscussionPostUpdatedEvent = 'ProposalDiscussionPostUpdatedEvent',
  ProposalDiscussionThreadModeChangedEvent = 'ProposalDiscussionThreadModeChangedEvent',
  ProposalExecutedEvent = 'ProposalExecutedEvent',
  ProposalStatusUpdatedEvent = 'ProposalStatusUpdatedEvent',
  ProposalVotedEvent = 'ProposalVotedEvent',
  ReferendumFinishedEvent = 'ReferendumFinishedEvent',
  ReferendumStartedEvent = 'ReferendumStartedEvent',
  ReferendumStartedForcefullyEvent = 'ReferendumStartedForcefullyEvent',
  ReferralCutUpdatedEvent = 'ReferralCutUpdatedEvent',
  RequestFundedEvent = 'RequestFundedEvent',
  RevealingStageStartedEvent = 'RevealingStageStartedEvent',
  RewardPaidEvent = 'RewardPaidEvent',
  RewardPaymentEvent = 'RewardPaymentEvent',
  StakeDecreasedEvent = 'StakeDecreasedEvent',
  StakeIncreasedEvent = 'StakeIncreasedEvent',
  StakeReleasedEvent = 'StakeReleasedEvent',
  StakeSlashedEvent = 'StakeSlashedEvent',
  StakingAccountAddedEvent = 'StakingAccountAddedEvent',
  StakingAccountConfirmedEvent = 'StakingAccountConfirmedEvent',
  StakingAccountRemovedEvent = 'StakingAccountRemovedEvent',
  StatusTextChangedEvent = 'StatusTextChangedEvent',
  TerminatedLeaderEvent = 'TerminatedLeaderEvent',
  TerminatedWorkerEvent = 'TerminatedWorkerEvent',
  ThreadCreatedEvent = 'ThreadCreatedEvent',
  ThreadDeletedEvent = 'ThreadDeletedEvent',
  ThreadMetadataUpdatedEvent = 'ThreadMetadataUpdatedEvent',
  ThreadModeratedEvent = 'ThreadModeratedEvent',
  ThreadMovedEvent = 'ThreadMovedEvent',
  VoteCastEvent = 'VoteCastEvent',
  VoteOnPollEvent = 'VoteOnPollEvent',
  VoteRevealedEvent = 'VoteRevealedEvent',
  VotingPeriodStartedEvent = 'VotingPeriodStartedEvent',
  WorkEntryAnnouncedEvent = 'WorkEntryAnnouncedEvent',
  WorkerExitedEvent = 'WorkerExitedEvent',
  WorkerRewardAccountUpdatedEvent = 'WorkerRewardAccountUpdatedEvent',
  WorkerRewardAmountUpdatedEvent = 'WorkerRewardAmountUpdatedEvent',
  WorkerRoleAccountUpdatedEvent = 'WorkerRoleAccountUpdatedEvent',
  WorkerStartedLeavingEvent = 'WorkerStartedLeavingEvent',
}

export type EventUpdateInput = {
  inBlock?: InputMaybe<Scalars['Float']>
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock?: InputMaybe<Scalars['Float']>
  network?: InputMaybe<Network>
  type?: InputMaybe<EventTypeOptions>
}

export type EventWhereInput = {
  AND?: InputMaybe<Array<EventWhereInput>>
  OR?: InputMaybe<Array<EventWhereInput>>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  inBlock_eq?: InputMaybe<Scalars['Int']>
  inBlock_gt?: InputMaybe<Scalars['Int']>
  inBlock_gte?: InputMaybe<Scalars['Int']>
  inBlock_in?: InputMaybe<Array<Scalars['Int']>>
  inBlock_lt?: InputMaybe<Scalars['Int']>
  inBlock_lte?: InputMaybe<Scalars['Int']>
  inExtrinsic_contains?: InputMaybe<Scalars['String']>
  inExtrinsic_endsWith?: InputMaybe<Scalars['String']>
  inExtrinsic_eq?: InputMaybe<Scalars['String']>
  inExtrinsic_in?: InputMaybe<Array<Scalars['String']>>
  inExtrinsic_startsWith?: InputMaybe<Scalars['String']>
  indexInBlock_eq?: InputMaybe<Scalars['Int']>
  indexInBlock_gt?: InputMaybe<Scalars['Int']>
  indexInBlock_gte?: InputMaybe<Scalars['Int']>
  indexInBlock_in?: InputMaybe<Array<Scalars['Int']>>
  indexInBlock_lt?: InputMaybe<Scalars['Int']>
  indexInBlock_lte?: InputMaybe<Scalars['Int']>
  network_eq?: InputMaybe<Network>
  network_in?: InputMaybe<Array<Network>>
  type_eq?: InputMaybe<EventTypeOptions>
  type_in?: InputMaybe<Array<EventTypeOptions>>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
}

export type EventWhereUniqueInput = {
  id: Scalars['ID']
}

export type FillWorkingGroupLeadOpeningProposalDetails = {
  __typename: 'FillWorkingGroupLeadOpeningProposalDetails'
  /** Selected successful application */
  application?: Maybe<WorkingGroupApplication>
  /** Lead opening to to be filled */
  opening?: Maybe<WorkingGroupOpening>
}

export type ForumCategory = BaseGraphQlObject & {
  __typename: 'ForumCategory'
  categoryarchivalstatusupdatedeventcategory?: Maybe<Array<CategoryArchivalStatusUpdatedEvent>>
  categorydeletedeventcategory?: Maybe<Array<CategoryDeletedEvent>>
  categorymembershipofmoderatorupdatedeventcategory?: Maybe<Array<CategoryMembershipOfModeratorUpdatedEvent>>
  categorystickythreadupdateeventcategory?: Maybe<Array<CategoryStickyThreadUpdateEvent>>
  createdAt: Scalars['DateTime']
  createdById: Scalars['String']
  createdInEvent: CategoryCreatedEvent
  deletedAt?: Maybe<Scalars['DateTime']>
  deletedById?: Maybe<Scalars['String']>
  /** Category description */
  description: Scalars['String']
  forumcategoryparent?: Maybe<Array<ForumCategory>>
  id: Scalars['ID']
  moderators: Array<Worker>
  parent?: Maybe<ForumCategory>
  parentId?: Maybe<Scalars['String']>
  /** Current category status */
  status: CategoryStatus
  threadmovedeventnewCategory?: Maybe<Array<ThreadMovedEvent>>
  threadmovedeventoldCategory?: Maybe<Array<ThreadMovedEvent>>
  threads: Array<ForumThread>
  /** Category title */
  title: Scalars['String']
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedById?: Maybe<Scalars['String']>
  version: Scalars['Int']
}

export type ForumCategoryConnection = {
  __typename: 'ForumCategoryConnection'
  edges: Array<ForumCategoryEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type ForumCategoryCreateInput = {
  description: Scalars['String']
  parent?: InputMaybe<Scalars['ID']>
  status: Scalars['JSONObject']
  title: Scalars['String']
}

export type ForumCategoryEdge = {
  __typename: 'ForumCategoryEdge'
  cursor: Scalars['String']
  node: ForumCategory
}

export enum ForumCategoryOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ParentAsc = 'parent_ASC',
  ParentDesc = 'parent_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type ForumCategoryUpdateInput = {
  description?: InputMaybe<Scalars['String']>
  parent?: InputMaybe<Scalars['ID']>
  status?: InputMaybe<Scalars['JSONObject']>
  title?: InputMaybe<Scalars['String']>
}

export type ForumCategoryWhereInput = {
  AND?: InputMaybe<Array<ForumCategoryWhereInput>>
  OR?: InputMaybe<Array<ForumCategoryWhereInput>>
  categoryarchivalstatusupdatedeventcategory_every?: InputMaybe<CategoryArchivalStatusUpdatedEventWhereInput>
  categoryarchivalstatusupdatedeventcategory_none?: InputMaybe<CategoryArchivalStatusUpdatedEventWhereInput>
  categoryarchivalstatusupdatedeventcategory_some?: InputMaybe<CategoryArchivalStatusUpdatedEventWhereInput>
  categorydeletedeventcategory_every?: InputMaybe<CategoryDeletedEventWhereInput>
  categorydeletedeventcategory_none?: InputMaybe<CategoryDeletedEventWhereInput>
  categorydeletedeventcategory_some?: InputMaybe<CategoryDeletedEventWhereInput>
  categorymembershipofmoderatorupdatedeventcategory_every?: InputMaybe<CategoryMembershipOfModeratorUpdatedEventWhereInput>
  categorymembershipofmoderatorupdatedeventcategory_none?: InputMaybe<CategoryMembershipOfModeratorUpdatedEventWhereInput>
  categorymembershipofmoderatorupdatedeventcategory_some?: InputMaybe<CategoryMembershipOfModeratorUpdatedEventWhereInput>
  categorystickythreadupdateeventcategory_every?: InputMaybe<CategoryStickyThreadUpdateEventWhereInput>
  categorystickythreadupdateeventcategory_none?: InputMaybe<CategoryStickyThreadUpdateEventWhereInput>
  categorystickythreadupdateeventcategory_some?: InputMaybe<CategoryStickyThreadUpdateEventWhereInput>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  createdInEvent?: InputMaybe<CategoryCreatedEventWhereInput>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  description_contains?: InputMaybe<Scalars['String']>
  description_endsWith?: InputMaybe<Scalars['String']>
  description_eq?: InputMaybe<Scalars['String']>
  description_in?: InputMaybe<Array<Scalars['String']>>
  description_startsWith?: InputMaybe<Scalars['String']>
  forumcategoryparent_every?: InputMaybe<ForumCategoryWhereInput>
  forumcategoryparent_none?: InputMaybe<ForumCategoryWhereInput>
  forumcategoryparent_some?: InputMaybe<ForumCategoryWhereInput>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  moderators_every?: InputMaybe<WorkerWhereInput>
  moderators_none?: InputMaybe<WorkerWhereInput>
  moderators_some?: InputMaybe<WorkerWhereInput>
  parent?: InputMaybe<ForumCategoryWhereInput>
  status_json?: InputMaybe<Scalars['JSONObject']>
  threadmovedeventnewCategory_every?: InputMaybe<ThreadMovedEventWhereInput>
  threadmovedeventnewCategory_none?: InputMaybe<ThreadMovedEventWhereInput>
  threadmovedeventnewCategory_some?: InputMaybe<ThreadMovedEventWhereInput>
  threadmovedeventoldCategory_every?: InputMaybe<ThreadMovedEventWhereInput>
  threadmovedeventoldCategory_none?: InputMaybe<ThreadMovedEventWhereInput>
  threadmovedeventoldCategory_some?: InputMaybe<ThreadMovedEventWhereInput>
  threads_every?: InputMaybe<ForumThreadWhereInput>
  threads_none?: InputMaybe<ForumThreadWhereInput>
  threads_some?: InputMaybe<ForumThreadWhereInput>
  title_contains?: InputMaybe<Scalars['String']>
  title_endsWith?: InputMaybe<Scalars['String']>
  title_eq?: InputMaybe<Scalars['String']>
  title_in?: InputMaybe<Array<Scalars['String']>>
  title_startsWith?: InputMaybe<Scalars['String']>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
}

export type ForumCategoryWhereUniqueInput = {
  id: Scalars['ID']
}

export type ForumPoll = BaseGraphQlObject & {
  __typename: 'ForumPoll'
  createdAt: Scalars['DateTime']
  createdById: Scalars['String']
  deletedAt?: Maybe<Scalars['DateTime']>
  deletedById?: Maybe<Scalars['String']>
  /** Poll description */
  description: Scalars['String']
  /** The time at which the poll ends */
  endTime: Scalars['DateTime']
  id: Scalars['ID']
  pollAlternatives: Array<ForumPollAlternative>
  thread: ForumThread
  threadId: Scalars['String']
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedById?: Maybe<Scalars['String']>
  version: Scalars['Int']
}

export type ForumPollAlternative = BaseGraphQlObject & {
  __typename: 'ForumPollAlternative'
  createdAt: Scalars['DateTime']
  createdById: Scalars['String']
  deletedAt?: Maybe<Scalars['DateTime']>
  deletedById?: Maybe<Scalars['String']>
  id: Scalars['ID']
  /** Index uniquely identifying the alternative in given poll */
  index: Scalars['Int']
  poll: ForumPoll
  pollId: Scalars['String']
  /** The alternative text */
  text: Scalars['String']
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedById?: Maybe<Scalars['String']>
  version: Scalars['Int']
  votes: Array<VoteOnPollEvent>
}

export type ForumPollAlternativeConnection = {
  __typename: 'ForumPollAlternativeConnection'
  edges: Array<ForumPollAlternativeEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type ForumPollAlternativeCreateInput = {
  index: Scalars['Float']
  poll: Scalars['ID']
  text: Scalars['String']
}

export type ForumPollAlternativeEdge = {
  __typename: 'ForumPollAlternativeEdge'
  cursor: Scalars['String']
  node: ForumPollAlternative
}

export enum ForumPollAlternativeOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  IndexAsc = 'index_ASC',
  IndexDesc = 'index_DESC',
  PollAsc = 'poll_ASC',
  PollDesc = 'poll_DESC',
  TextAsc = 'text_ASC',
  TextDesc = 'text_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type ForumPollAlternativeUpdateInput = {
  index?: InputMaybe<Scalars['Float']>
  poll?: InputMaybe<Scalars['ID']>
  text?: InputMaybe<Scalars['String']>
}

export type ForumPollAlternativeWhereInput = {
  AND?: InputMaybe<Array<ForumPollAlternativeWhereInput>>
  OR?: InputMaybe<Array<ForumPollAlternativeWhereInput>>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  index_eq?: InputMaybe<Scalars['Int']>
  index_gt?: InputMaybe<Scalars['Int']>
  index_gte?: InputMaybe<Scalars['Int']>
  index_in?: InputMaybe<Array<Scalars['Int']>>
  index_lt?: InputMaybe<Scalars['Int']>
  index_lte?: InputMaybe<Scalars['Int']>
  poll?: InputMaybe<ForumPollWhereInput>
  text_contains?: InputMaybe<Scalars['String']>
  text_endsWith?: InputMaybe<Scalars['String']>
  text_eq?: InputMaybe<Scalars['String']>
  text_in?: InputMaybe<Array<Scalars['String']>>
  text_startsWith?: InputMaybe<Scalars['String']>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
  votes_every?: InputMaybe<VoteOnPollEventWhereInput>
  votes_none?: InputMaybe<VoteOnPollEventWhereInput>
  votes_some?: InputMaybe<VoteOnPollEventWhereInput>
}

export type ForumPollAlternativeWhereUniqueInput = {
  id: Scalars['ID']
}

export type ForumPollConnection = {
  __typename: 'ForumPollConnection'
  edges: Array<ForumPollEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type ForumPollCreateInput = {
  description: Scalars['String']
  endTime: Scalars['DateTime']
  thread: Scalars['ID']
}

export type ForumPollEdge = {
  __typename: 'ForumPollEdge'
  cursor: Scalars['String']
  node: ForumPoll
}

export enum ForumPollOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  EndTimeAsc = 'endTime_ASC',
  EndTimeDesc = 'endTime_DESC',
  ThreadAsc = 'thread_ASC',
  ThreadDesc = 'thread_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type ForumPollUpdateInput = {
  description?: InputMaybe<Scalars['String']>
  endTime?: InputMaybe<Scalars['DateTime']>
  thread?: InputMaybe<Scalars['ID']>
}

export type ForumPollWhereInput = {
  AND?: InputMaybe<Array<ForumPollWhereInput>>
  OR?: InputMaybe<Array<ForumPollWhereInput>>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  description_contains?: InputMaybe<Scalars['String']>
  description_endsWith?: InputMaybe<Scalars['String']>
  description_eq?: InputMaybe<Scalars['String']>
  description_in?: InputMaybe<Array<Scalars['String']>>
  description_startsWith?: InputMaybe<Scalars['String']>
  endTime_eq?: InputMaybe<Scalars['DateTime']>
  endTime_gt?: InputMaybe<Scalars['DateTime']>
  endTime_gte?: InputMaybe<Scalars['DateTime']>
  endTime_lt?: InputMaybe<Scalars['DateTime']>
  endTime_lte?: InputMaybe<Scalars['DateTime']>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  pollAlternatives_every?: InputMaybe<ForumPollAlternativeWhereInput>
  pollAlternatives_none?: InputMaybe<ForumPollAlternativeWhereInput>
  pollAlternatives_some?: InputMaybe<ForumPollAlternativeWhereInput>
  thread?: InputMaybe<ForumThreadWhereInput>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
}

export type ForumPollWhereUniqueInput = {
  id: Scalars['ID']
}

export type ForumPost = BaseGraphQlObject & {
  __typename: 'ForumPost'
  author: Membership
  authorId: Scalars['String']
  createdAt: Scalars['DateTime']
  createdById: Scalars['String']
  deletedAt?: Maybe<Scalars['DateTime']>
  deletedById?: Maybe<Scalars['String']>
  deletedInEvent?: Maybe<PostDeletedEvent>
  deletedInEventId?: Maybe<Scalars['String']>
  edits: Array<PostTextUpdatedEvent>
  forumpostrepliesTo?: Maybe<Array<ForumPost>>
  forumthreadinitialPost?: Maybe<Array<ForumThread>>
  id: Scalars['ID']
  /** True if the post is either Active or Locked */
  isVisible: Scalars['Boolean']
  /** The origin of the post (either thread creation event or regular PostAdded event) */
  origin: PostOrigin
  postaddedeventpost?: Maybe<Array<PostAddedEvent>>
  postmoderatedeventpost?: Maybe<Array<PostModeratedEvent>>
  postreactedeventpost?: Maybe<Array<PostReactedEvent>>
  reactions: Array<ForumPostReaction>
  repliesTo?: Maybe<ForumPost>
  repliesToId?: Maybe<Scalars['String']>
  /** Current post status */
  status: PostStatus
  /** Content of the post (md-formatted) */
  text: Scalars['String']
  thread: ForumThread
  threadId: Scalars['String']
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedById?: Maybe<Scalars['String']>
  version: Scalars['Int']
}

export type ForumPostConnection = {
  __typename: 'ForumPostConnection'
  edges: Array<ForumPostEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type ForumPostCreateInput = {
  author: Scalars['ID']
  deletedInEvent?: InputMaybe<Scalars['ID']>
  isVisible: Scalars['Boolean']
  origin: Scalars['JSONObject']
  repliesTo?: InputMaybe<Scalars['ID']>
  status: Scalars['JSONObject']
  text: Scalars['String']
  thread: Scalars['ID']
}

export type ForumPostEdge = {
  __typename: 'ForumPostEdge'
  cursor: Scalars['String']
  node: ForumPost
}

export enum ForumPostOrderByInput {
  AuthorAsc = 'author_ASC',
  AuthorDesc = 'author_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  DeletedInEventAsc = 'deletedInEvent_ASC',
  DeletedInEventDesc = 'deletedInEvent_DESC',
  IsVisibleAsc = 'isVisible_ASC',
  IsVisibleDesc = 'isVisible_DESC',
  RepliesToAsc = 'repliesTo_ASC',
  RepliesToDesc = 'repliesTo_DESC',
  TextAsc = 'text_ASC',
  TextDesc = 'text_DESC',
  ThreadAsc = 'thread_ASC',
  ThreadDesc = 'thread_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type ForumPostReaction = BaseGraphQlObject & {
  __typename: 'ForumPostReaction'
  createdAt: Scalars['DateTime']
  createdById: Scalars['String']
  deletedAt?: Maybe<Scalars['DateTime']>
  deletedById?: Maybe<Scalars['String']>
  id: Scalars['ID']
  member: Membership
  memberId: Scalars['String']
  post: ForumPost
  postId: Scalars['String']
  /** The reaction */
  reaction: PostReaction
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedById?: Maybe<Scalars['String']>
  version: Scalars['Int']
}

export type ForumPostReactionConnection = {
  __typename: 'ForumPostReactionConnection'
  edges: Array<ForumPostReactionEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type ForumPostReactionCreateInput = {
  member: Scalars['ID']
  post: Scalars['ID']
  reaction: PostReaction
}

export type ForumPostReactionEdge = {
  __typename: 'ForumPostReactionEdge'
  cursor: Scalars['String']
  node: ForumPostReaction
}

export enum ForumPostReactionOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  MemberAsc = 'member_ASC',
  MemberDesc = 'member_DESC',
  PostAsc = 'post_ASC',
  PostDesc = 'post_DESC',
  ReactionAsc = 'reaction_ASC',
  ReactionDesc = 'reaction_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type ForumPostReactionUpdateInput = {
  member?: InputMaybe<Scalars['ID']>
  post?: InputMaybe<Scalars['ID']>
  reaction?: InputMaybe<PostReaction>
}

export type ForumPostReactionWhereInput = {
  AND?: InputMaybe<Array<ForumPostReactionWhereInput>>
  OR?: InputMaybe<Array<ForumPostReactionWhereInput>>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  member?: InputMaybe<MembershipWhereInput>
  post?: InputMaybe<ForumPostWhereInput>
  reaction_eq?: InputMaybe<PostReaction>
  reaction_in?: InputMaybe<Array<PostReaction>>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
}

export type ForumPostReactionWhereUniqueInput = {
  id: Scalars['ID']
}

export type ForumPostUpdateInput = {
  author?: InputMaybe<Scalars['ID']>
  deletedInEvent?: InputMaybe<Scalars['ID']>
  isVisible?: InputMaybe<Scalars['Boolean']>
  origin?: InputMaybe<Scalars['JSONObject']>
  repliesTo?: InputMaybe<Scalars['ID']>
  status?: InputMaybe<Scalars['JSONObject']>
  text?: InputMaybe<Scalars['String']>
  thread?: InputMaybe<Scalars['ID']>
}

export type ForumPostWhereInput = {
  AND?: InputMaybe<Array<ForumPostWhereInput>>
  OR?: InputMaybe<Array<ForumPostWhereInput>>
  author?: InputMaybe<MembershipWhereInput>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedInEvent?: InputMaybe<PostDeletedEventWhereInput>
  edits_every?: InputMaybe<PostTextUpdatedEventWhereInput>
  edits_none?: InputMaybe<PostTextUpdatedEventWhereInput>
  edits_some?: InputMaybe<PostTextUpdatedEventWhereInput>
  forumpostrepliesTo_every?: InputMaybe<ForumPostWhereInput>
  forumpostrepliesTo_none?: InputMaybe<ForumPostWhereInput>
  forumpostrepliesTo_some?: InputMaybe<ForumPostWhereInput>
  forumthreadinitialPost_every?: InputMaybe<ForumThreadWhereInput>
  forumthreadinitialPost_none?: InputMaybe<ForumThreadWhereInput>
  forumthreadinitialPost_some?: InputMaybe<ForumThreadWhereInput>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  isVisible_eq?: InputMaybe<Scalars['Boolean']>
  isVisible_in?: InputMaybe<Array<Scalars['Boolean']>>
  origin_json?: InputMaybe<Scalars['JSONObject']>
  postaddedeventpost_every?: InputMaybe<PostAddedEventWhereInput>
  postaddedeventpost_none?: InputMaybe<PostAddedEventWhereInput>
  postaddedeventpost_some?: InputMaybe<PostAddedEventWhereInput>
  postmoderatedeventpost_every?: InputMaybe<PostModeratedEventWhereInput>
  postmoderatedeventpost_none?: InputMaybe<PostModeratedEventWhereInput>
  postmoderatedeventpost_some?: InputMaybe<PostModeratedEventWhereInput>
  postreactedeventpost_every?: InputMaybe<PostReactedEventWhereInput>
  postreactedeventpost_none?: InputMaybe<PostReactedEventWhereInput>
  postreactedeventpost_some?: InputMaybe<PostReactedEventWhereInput>
  reactions_every?: InputMaybe<ForumPostReactionWhereInput>
  reactions_none?: InputMaybe<ForumPostReactionWhereInput>
  reactions_some?: InputMaybe<ForumPostReactionWhereInput>
  repliesTo?: InputMaybe<ForumPostWhereInput>
  status_json?: InputMaybe<Scalars['JSONObject']>
  text_contains?: InputMaybe<Scalars['String']>
  text_endsWith?: InputMaybe<Scalars['String']>
  text_eq?: InputMaybe<Scalars['String']>
  text_in?: InputMaybe<Array<Scalars['String']>>
  text_startsWith?: InputMaybe<Scalars['String']>
  thread?: InputMaybe<ForumThreadWhereInput>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
}

export type ForumPostWhereUniqueInput = {
  id: Scalars['ID']
}

export type ForumThread = BaseGraphQlObject & {
  __typename: 'ForumThread'
  author: Membership
  authorId: Scalars['String']
  bountydiscussionThread?: Maybe<Array<Bounty>>
  category: ForumCategory
  categoryId: Scalars['String']
  createdAt: Scalars['DateTime']
  createdById: Scalars['String']
  createdInEvent: ThreadCreatedEvent
  deletedAt?: Maybe<Scalars['DateTime']>
  deletedById?: Maybe<Scalars['String']>
  id: Scalars['ID']
  initialPost?: Maybe<ForumPost>
  initialPostId?: Maybe<Scalars['String']>
  /** Whether the thread is sticky in the category */
  isSticky: Scalars['Boolean']
  /** True if the thread is either Active or Locked */
  isVisible: Scalars['Boolean']
  madeStickyInEvents: Array<CategoryStickyThreadUpdateEvent>
  metadataUpdates: Array<ThreadMetadataUpdatedEvent>
  movedInEvents: Array<ThreadMovedEvent>
  poll?: Maybe<ForumPoll>
  posts: Array<ForumPost>
  /** Current thread status */
  status: ThreadStatus
  tags: Array<ForumThreadTag>
  threaddeletedeventthread?: Maybe<Array<ThreadDeletedEvent>>
  threadmoderatedeventthread?: Maybe<Array<ThreadModeratedEvent>>
  /** Thread title */
  title: Scalars['String']
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedById?: Maybe<Scalars['String']>
  version: Scalars['Int']
  /** Number of non-deleted posts in the thread */
  visiblePostsCount: Scalars['Int']
}

export type ForumThreadConnection = {
  __typename: 'ForumThreadConnection'
  edges: Array<ForumThreadEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type ForumThreadCreateInput = {
  author: Scalars['ID']
  category: Scalars['ID']
  initialPost?: InputMaybe<Scalars['ID']>
  isSticky: Scalars['Boolean']
  isVisible: Scalars['Boolean']
  status: Scalars['JSONObject']
  title: Scalars['String']
  visiblePostsCount: Scalars['Float']
}

export type ForumThreadEdge = {
  __typename: 'ForumThreadEdge'
  cursor: Scalars['String']
  node: ForumThread
}

export enum ForumThreadOrderByInput {
  AuthorAsc = 'author_ASC',
  AuthorDesc = 'author_DESC',
  CategoryAsc = 'category_ASC',
  CategoryDesc = 'category_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InitialPostAsc = 'initialPost_ASC',
  InitialPostDesc = 'initialPost_DESC',
  IsStickyAsc = 'isSticky_ASC',
  IsStickyDesc = 'isSticky_DESC',
  IsVisibleAsc = 'isVisible_ASC',
  IsVisibleDesc = 'isVisible_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  VisiblePostsCountAsc = 'visiblePostsCount_ASC',
  VisiblePostsCountDesc = 'visiblePostsCount_DESC',
}

export type ForumThreadTag = BaseGraphQlObject & {
  __typename: 'ForumThreadTag'
  createdAt: Scalars['DateTime']
  createdById: Scalars['String']
  deletedAt?: Maybe<Scalars['DateTime']>
  deletedById?: Maybe<Scalars['String']>
  id: Scalars['ID']
  threads: Array<ForumThread>
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedById?: Maybe<Scalars['String']>
  version: Scalars['Int']
  /** Number of non-removed threads currently assigned to the tag */
  visibleThreadsCount: Scalars['Int']
}

export type ForumThreadTagConnection = {
  __typename: 'ForumThreadTagConnection'
  edges: Array<ForumThreadTagEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type ForumThreadTagCreateInput = {
  visibleThreadsCount: Scalars['Float']
}

export type ForumThreadTagEdge = {
  __typename: 'ForumThreadTagEdge'
  cursor: Scalars['String']
  node: ForumThreadTag
}

export enum ForumThreadTagOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  VisibleThreadsCountAsc = 'visibleThreadsCount_ASC',
  VisibleThreadsCountDesc = 'visibleThreadsCount_DESC',
}

export type ForumThreadTagUpdateInput = {
  visibleThreadsCount?: InputMaybe<Scalars['Float']>
}

export type ForumThreadTagWhereInput = {
  AND?: InputMaybe<Array<ForumThreadTagWhereInput>>
  OR?: InputMaybe<Array<ForumThreadTagWhereInput>>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  threads_every?: InputMaybe<ForumThreadWhereInput>
  threads_none?: InputMaybe<ForumThreadWhereInput>
  threads_some?: InputMaybe<ForumThreadWhereInput>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
  visibleThreadsCount_eq?: InputMaybe<Scalars['Int']>
  visibleThreadsCount_gt?: InputMaybe<Scalars['Int']>
  visibleThreadsCount_gte?: InputMaybe<Scalars['Int']>
  visibleThreadsCount_in?: InputMaybe<Array<Scalars['Int']>>
  visibleThreadsCount_lt?: InputMaybe<Scalars['Int']>
  visibleThreadsCount_lte?: InputMaybe<Scalars['Int']>
}

export type ForumThreadTagWhereUniqueInput = {
  id: Scalars['ID']
}

export type ForumThreadUpdateInput = {
  author?: InputMaybe<Scalars['ID']>
  category?: InputMaybe<Scalars['ID']>
  initialPost?: InputMaybe<Scalars['ID']>
  isSticky?: InputMaybe<Scalars['Boolean']>
  isVisible?: InputMaybe<Scalars['Boolean']>
  status?: InputMaybe<Scalars['JSONObject']>
  title?: InputMaybe<Scalars['String']>
  visiblePostsCount?: InputMaybe<Scalars['Float']>
}

export type ForumThreadWhereInput = {
  AND?: InputMaybe<Array<ForumThreadWhereInput>>
  OR?: InputMaybe<Array<ForumThreadWhereInput>>
  author?: InputMaybe<MembershipWhereInput>
  bountydiscussionThread_every?: InputMaybe<BountyWhereInput>
  bountydiscussionThread_none?: InputMaybe<BountyWhereInput>
  bountydiscussionThread_some?: InputMaybe<BountyWhereInput>
  category?: InputMaybe<ForumCategoryWhereInput>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  createdInEvent?: InputMaybe<ThreadCreatedEventWhereInput>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  initialPost?: InputMaybe<ForumPostWhereInput>
  isSticky_eq?: InputMaybe<Scalars['Boolean']>
  isSticky_in?: InputMaybe<Array<Scalars['Boolean']>>
  isVisible_eq?: InputMaybe<Scalars['Boolean']>
  isVisible_in?: InputMaybe<Array<Scalars['Boolean']>>
  madeStickyInEvents_every?: InputMaybe<CategoryStickyThreadUpdateEventWhereInput>
  madeStickyInEvents_none?: InputMaybe<CategoryStickyThreadUpdateEventWhereInput>
  madeStickyInEvents_some?: InputMaybe<CategoryStickyThreadUpdateEventWhereInput>
  metadataUpdates_every?: InputMaybe<ThreadMetadataUpdatedEventWhereInput>
  metadataUpdates_none?: InputMaybe<ThreadMetadataUpdatedEventWhereInput>
  metadataUpdates_some?: InputMaybe<ThreadMetadataUpdatedEventWhereInput>
  movedInEvents_every?: InputMaybe<ThreadMovedEventWhereInput>
  movedInEvents_none?: InputMaybe<ThreadMovedEventWhereInput>
  movedInEvents_some?: InputMaybe<ThreadMovedEventWhereInput>
  poll?: InputMaybe<ForumPollWhereInput>
  posts_every?: InputMaybe<ForumPostWhereInput>
  posts_none?: InputMaybe<ForumPostWhereInput>
  posts_some?: InputMaybe<ForumPostWhereInput>
  status_json?: InputMaybe<Scalars['JSONObject']>
  tags_every?: InputMaybe<ForumThreadTagWhereInput>
  tags_none?: InputMaybe<ForumThreadTagWhereInput>
  tags_some?: InputMaybe<ForumThreadTagWhereInput>
  threaddeletedeventthread_every?: InputMaybe<ThreadDeletedEventWhereInput>
  threaddeletedeventthread_none?: InputMaybe<ThreadDeletedEventWhereInput>
  threaddeletedeventthread_some?: InputMaybe<ThreadDeletedEventWhereInput>
  threadmoderatedeventthread_every?: InputMaybe<ThreadModeratedEventWhereInput>
  threadmoderatedeventthread_none?: InputMaybe<ThreadModeratedEventWhereInput>
  threadmoderatedeventthread_some?: InputMaybe<ThreadModeratedEventWhereInput>
  title_contains?: InputMaybe<Scalars['String']>
  title_endsWith?: InputMaybe<Scalars['String']>
  title_eq?: InputMaybe<Scalars['String']>
  title_in?: InputMaybe<Array<Scalars['String']>>
  title_startsWith?: InputMaybe<Scalars['String']>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
  visiblePostsCount_eq?: InputMaybe<Scalars['Int']>
  visiblePostsCount_gt?: InputMaybe<Scalars['Int']>
  visiblePostsCount_gte?: InputMaybe<Scalars['Int']>
  visiblePostsCount_in?: InputMaybe<Array<Scalars['Int']>>
  visiblePostsCount_lt?: InputMaybe<Scalars['Int']>
  visiblePostsCount_lte?: InputMaybe<Scalars['Int']>
}

export type ForumThreadWhereUniqueInput = {
  id: Scalars['ID']
}

export type FundingRequestDestination = BaseGraphQlObject & {
  __typename: 'FundingRequestDestination'
  /** Destination account */
  account: Scalars['String']
  /** Amount of funds requested */
  amount: Scalars['BigInt']
  createdAt: Scalars['DateTime']
  createdById: Scalars['String']
  deletedAt?: Maybe<Scalars['DateTime']>
  deletedById?: Maybe<Scalars['String']>
  id: Scalars['ID']
  list: FundingRequestDestinationsList
  listId: Scalars['String']
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedById?: Maybe<Scalars['String']>
  version: Scalars['Int']
}

export type FundingRequestDestinationConnection = {
  __typename: 'FundingRequestDestinationConnection'
  edges: Array<FundingRequestDestinationEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type FundingRequestDestinationCreateInput = {
  account: Scalars['String']
  amount: Scalars['String']
  list: Scalars['ID']
}

export type FundingRequestDestinationEdge = {
  __typename: 'FundingRequestDestinationEdge'
  cursor: Scalars['String']
  node: FundingRequestDestination
}

export enum FundingRequestDestinationOrderByInput {
  AccountAsc = 'account_ASC',
  AccountDesc = 'account_DESC',
  AmountAsc = 'amount_ASC',
  AmountDesc = 'amount_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  ListAsc = 'list_ASC',
  ListDesc = 'list_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type FundingRequestDestinationUpdateInput = {
  account?: InputMaybe<Scalars['String']>
  amount?: InputMaybe<Scalars['String']>
  list?: InputMaybe<Scalars['ID']>
}

export type FundingRequestDestinationWhereInput = {
  AND?: InputMaybe<Array<FundingRequestDestinationWhereInput>>
  OR?: InputMaybe<Array<FundingRequestDestinationWhereInput>>
  account_contains?: InputMaybe<Scalars['String']>
  account_endsWith?: InputMaybe<Scalars['String']>
  account_eq?: InputMaybe<Scalars['String']>
  account_in?: InputMaybe<Array<Scalars['String']>>
  account_startsWith?: InputMaybe<Scalars['String']>
  amount_eq?: InputMaybe<Scalars['BigInt']>
  amount_gt?: InputMaybe<Scalars['BigInt']>
  amount_gte?: InputMaybe<Scalars['BigInt']>
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>
  amount_lt?: InputMaybe<Scalars['BigInt']>
  amount_lte?: InputMaybe<Scalars['BigInt']>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  list?: InputMaybe<FundingRequestDestinationsListWhereInput>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
}

export type FundingRequestDestinationWhereUniqueInput = {
  id: Scalars['ID']
}

export type FundingRequestDestinationsList = BaseGraphQlObject & {
  __typename: 'FundingRequestDestinationsList'
  createdAt: Scalars['DateTime']
  createdById: Scalars['String']
  deletedAt?: Maybe<Scalars['DateTime']>
  deletedById?: Maybe<Scalars['String']>
  destinations: Array<FundingRequestDestination>
  id: Scalars['ID']
  phantom?: Maybe<Scalars['Int']>
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedById?: Maybe<Scalars['String']>
  version: Scalars['Int']
}

export type FundingRequestDestinationsListConnection = {
  __typename: 'FundingRequestDestinationsListConnection'
  edges: Array<FundingRequestDestinationsListEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type FundingRequestDestinationsListCreateInput = {
  phantom?: InputMaybe<Scalars['Float']>
}

export type FundingRequestDestinationsListEdge = {
  __typename: 'FundingRequestDestinationsListEdge'
  cursor: Scalars['String']
  node: FundingRequestDestinationsList
}

export enum FundingRequestDestinationsListOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  PhantomAsc = 'phantom_ASC',
  PhantomDesc = 'phantom_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type FundingRequestDestinationsListUpdateInput = {
  phantom?: InputMaybe<Scalars['Float']>
}

export type FundingRequestDestinationsListWhereInput = {
  AND?: InputMaybe<Array<FundingRequestDestinationsListWhereInput>>
  OR?: InputMaybe<Array<FundingRequestDestinationsListWhereInput>>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  destinations_every?: InputMaybe<FundingRequestDestinationWhereInput>
  destinations_none?: InputMaybe<FundingRequestDestinationWhereInput>
  destinations_some?: InputMaybe<FundingRequestDestinationWhereInput>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  phantom_eq?: InputMaybe<Scalars['Int']>
  phantom_gt?: InputMaybe<Scalars['Int']>
  phantom_gte?: InputMaybe<Scalars['Int']>
  phantom_in?: InputMaybe<Array<Scalars['Int']>>
  phantom_lt?: InputMaybe<Scalars['Int']>
  phantom_lte?: InputMaybe<Scalars['Int']>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
}

export type FundingRequestDestinationsListWhereUniqueInput = {
  id: Scalars['ID']
}

export type FundingRequestProposalDetails = {
  __typename: 'FundingRequestProposalDetails'
  /** Related list of funding request destinations */
  destinationsList?: Maybe<FundingRequestDestinationsList>
}

export type InitialInvitationBalanceUpdatedEvent = BaseGraphQlObject &
  Event & {
    __typename: 'InitialInvitationBalanceUpdatedEvent'
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    id: Scalars['ID']
    /** Blocknumber of the block in which the event was emitted. */
    inBlock: Scalars['Int']
    /** Hash of the extrinsic which caused the event to be emitted */
    inExtrinsic?: Maybe<Scalars['String']>
    /** Index of event in block from which it was emitted. */
    indexInBlock: Scalars['Int']
    /** Network the block was produced in */
    network: Network
    /** New initial invitation balance. */
    newInitialBalance: Scalars['BigInt']
    /** Filtering options for interface implementers */
    type?: Maybe<EventTypeOptions>
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
  }

export type InitialInvitationBalanceUpdatedEventConnection = {
  __typename: 'InitialInvitationBalanceUpdatedEventConnection'
  edges: Array<InitialInvitationBalanceUpdatedEventEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type InitialInvitationBalanceUpdatedEventCreateInput = {
  inBlock: Scalars['Float']
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock: Scalars['Float']
  network: Network
  newInitialBalance: Scalars['String']
}

export type InitialInvitationBalanceUpdatedEventEdge = {
  __typename: 'InitialInvitationBalanceUpdatedEventEdge'
  cursor: Scalars['String']
  node: InitialInvitationBalanceUpdatedEvent
}

export enum InitialInvitationBalanceUpdatedEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  NewInitialBalanceAsc = 'newInitialBalance_ASC',
  NewInitialBalanceDesc = 'newInitialBalance_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type InitialInvitationBalanceUpdatedEventUpdateInput = {
  inBlock?: InputMaybe<Scalars['Float']>
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock?: InputMaybe<Scalars['Float']>
  network?: InputMaybe<Network>
  newInitialBalance?: InputMaybe<Scalars['String']>
}

export type InitialInvitationBalanceUpdatedEventWhereInput = {
  AND?: InputMaybe<Array<InitialInvitationBalanceUpdatedEventWhereInput>>
  OR?: InputMaybe<Array<InitialInvitationBalanceUpdatedEventWhereInput>>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  inBlock_eq?: InputMaybe<Scalars['Int']>
  inBlock_gt?: InputMaybe<Scalars['Int']>
  inBlock_gte?: InputMaybe<Scalars['Int']>
  inBlock_in?: InputMaybe<Array<Scalars['Int']>>
  inBlock_lt?: InputMaybe<Scalars['Int']>
  inBlock_lte?: InputMaybe<Scalars['Int']>
  inExtrinsic_contains?: InputMaybe<Scalars['String']>
  inExtrinsic_endsWith?: InputMaybe<Scalars['String']>
  inExtrinsic_eq?: InputMaybe<Scalars['String']>
  inExtrinsic_in?: InputMaybe<Array<Scalars['String']>>
  inExtrinsic_startsWith?: InputMaybe<Scalars['String']>
  indexInBlock_eq?: InputMaybe<Scalars['Int']>
  indexInBlock_gt?: InputMaybe<Scalars['Int']>
  indexInBlock_gte?: InputMaybe<Scalars['Int']>
  indexInBlock_in?: InputMaybe<Array<Scalars['Int']>>
  indexInBlock_lt?: InputMaybe<Scalars['Int']>
  indexInBlock_lte?: InputMaybe<Scalars['Int']>
  network_eq?: InputMaybe<Network>
  network_in?: InputMaybe<Array<Network>>
  newInitialBalance_eq?: InputMaybe<Scalars['BigInt']>
  newInitialBalance_gt?: InputMaybe<Scalars['BigInt']>
  newInitialBalance_gte?: InputMaybe<Scalars['BigInt']>
  newInitialBalance_in?: InputMaybe<Array<Scalars['BigInt']>>
  newInitialBalance_lt?: InputMaybe<Scalars['BigInt']>
  newInitialBalance_lte?: InputMaybe<Scalars['BigInt']>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
}

export type InitialInvitationBalanceUpdatedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type InitialInvitationCountUpdatedEvent = BaseGraphQlObject &
  Event & {
    __typename: 'InitialInvitationCountUpdatedEvent'
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    id: Scalars['ID']
    /** Blocknumber of the block in which the event was emitted. */
    inBlock: Scalars['Int']
    /** Hash of the extrinsic which caused the event to be emitted */
    inExtrinsic?: Maybe<Scalars['String']>
    /** Index of event in block from which it was emitted. */
    indexInBlock: Scalars['Int']
    /** Network the block was produced in */
    network: Network
    /** New initial invitation count for members. */
    newInitialInvitationCount: Scalars['Int']
    /** Filtering options for interface implementers */
    type?: Maybe<EventTypeOptions>
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
  }

export type InitialInvitationCountUpdatedEventConnection = {
  __typename: 'InitialInvitationCountUpdatedEventConnection'
  edges: Array<InitialInvitationCountUpdatedEventEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type InitialInvitationCountUpdatedEventCreateInput = {
  inBlock: Scalars['Float']
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock: Scalars['Float']
  network: Network
  newInitialInvitationCount: Scalars['Float']
}

export type InitialInvitationCountUpdatedEventEdge = {
  __typename: 'InitialInvitationCountUpdatedEventEdge'
  cursor: Scalars['String']
  node: InitialInvitationCountUpdatedEvent
}

export enum InitialInvitationCountUpdatedEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  NewInitialInvitationCountAsc = 'newInitialInvitationCount_ASC',
  NewInitialInvitationCountDesc = 'newInitialInvitationCount_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type InitialInvitationCountUpdatedEventUpdateInput = {
  inBlock?: InputMaybe<Scalars['Float']>
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock?: InputMaybe<Scalars['Float']>
  network?: InputMaybe<Network>
  newInitialInvitationCount?: InputMaybe<Scalars['Float']>
}

export type InitialInvitationCountUpdatedEventWhereInput = {
  AND?: InputMaybe<Array<InitialInvitationCountUpdatedEventWhereInput>>
  OR?: InputMaybe<Array<InitialInvitationCountUpdatedEventWhereInput>>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  inBlock_eq?: InputMaybe<Scalars['Int']>
  inBlock_gt?: InputMaybe<Scalars['Int']>
  inBlock_gte?: InputMaybe<Scalars['Int']>
  inBlock_in?: InputMaybe<Array<Scalars['Int']>>
  inBlock_lt?: InputMaybe<Scalars['Int']>
  inBlock_lte?: InputMaybe<Scalars['Int']>
  inExtrinsic_contains?: InputMaybe<Scalars['String']>
  inExtrinsic_endsWith?: InputMaybe<Scalars['String']>
  inExtrinsic_eq?: InputMaybe<Scalars['String']>
  inExtrinsic_in?: InputMaybe<Array<Scalars['String']>>
  inExtrinsic_startsWith?: InputMaybe<Scalars['String']>
  indexInBlock_eq?: InputMaybe<Scalars['Int']>
  indexInBlock_gt?: InputMaybe<Scalars['Int']>
  indexInBlock_gte?: InputMaybe<Scalars['Int']>
  indexInBlock_in?: InputMaybe<Array<Scalars['Int']>>
  indexInBlock_lt?: InputMaybe<Scalars['Int']>
  indexInBlock_lte?: InputMaybe<Scalars['Int']>
  network_eq?: InputMaybe<Network>
  network_in?: InputMaybe<Array<Network>>
  newInitialInvitationCount_eq?: InputMaybe<Scalars['Int']>
  newInitialInvitationCount_gt?: InputMaybe<Scalars['Int']>
  newInitialInvitationCount_gte?: InputMaybe<Scalars['Int']>
  newInitialInvitationCount_in?: InputMaybe<Array<Scalars['Int']>>
  newInitialInvitationCount_lt?: InputMaybe<Scalars['Int']>
  newInitialInvitationCount_lte?: InputMaybe<Scalars['Int']>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
}

export type InitialInvitationCountUpdatedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type InvalidActionMetadata = {
  __typename: 'InvalidActionMetadata'
  /** Reason why the action metadata was considered invalid */
  reason: Scalars['String']
}

export type InvitesTransferredEvent = BaseGraphQlObject &
  Event & {
    __typename: 'InvitesTransferredEvent'
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    id: Scalars['ID']
    /** Blocknumber of the block in which the event was emitted. */
    inBlock: Scalars['Int']
    /** Hash of the extrinsic which caused the event to be emitted */
    inExtrinsic?: Maybe<Scalars['String']>
    /** Index of event in block from which it was emitted. */
    indexInBlock: Scalars['Int']
    /** Network the block was produced in */
    network: Network
    /** Number of invites transferred. */
    numberOfInvites: Scalars['Int']
    sourceMember: Membership
    sourceMemberId: Scalars['String']
    targetMember: Membership
    targetMemberId: Scalars['String']
    /** Filtering options for interface implementers */
    type?: Maybe<EventTypeOptions>
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
  }

export type InvitesTransferredEventConnection = {
  __typename: 'InvitesTransferredEventConnection'
  edges: Array<InvitesTransferredEventEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type InvitesTransferredEventCreateInput = {
  inBlock: Scalars['Float']
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock: Scalars['Float']
  network: Network
  numberOfInvites: Scalars['Float']
  sourceMember: Scalars['ID']
  targetMember: Scalars['ID']
}

export type InvitesTransferredEventEdge = {
  __typename: 'InvitesTransferredEventEdge'
  cursor: Scalars['String']
  node: InvitesTransferredEvent
}

export enum InvitesTransferredEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  NumberOfInvitesAsc = 'numberOfInvites_ASC',
  NumberOfInvitesDesc = 'numberOfInvites_DESC',
  SourceMemberAsc = 'sourceMember_ASC',
  SourceMemberDesc = 'sourceMember_DESC',
  TargetMemberAsc = 'targetMember_ASC',
  TargetMemberDesc = 'targetMember_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type InvitesTransferredEventUpdateInput = {
  inBlock?: InputMaybe<Scalars['Float']>
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock?: InputMaybe<Scalars['Float']>
  network?: InputMaybe<Network>
  numberOfInvites?: InputMaybe<Scalars['Float']>
  sourceMember?: InputMaybe<Scalars['ID']>
  targetMember?: InputMaybe<Scalars['ID']>
}

export type InvitesTransferredEventWhereInput = {
  AND?: InputMaybe<Array<InvitesTransferredEventWhereInput>>
  OR?: InputMaybe<Array<InvitesTransferredEventWhereInput>>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  inBlock_eq?: InputMaybe<Scalars['Int']>
  inBlock_gt?: InputMaybe<Scalars['Int']>
  inBlock_gte?: InputMaybe<Scalars['Int']>
  inBlock_in?: InputMaybe<Array<Scalars['Int']>>
  inBlock_lt?: InputMaybe<Scalars['Int']>
  inBlock_lte?: InputMaybe<Scalars['Int']>
  inExtrinsic_contains?: InputMaybe<Scalars['String']>
  inExtrinsic_endsWith?: InputMaybe<Scalars['String']>
  inExtrinsic_eq?: InputMaybe<Scalars['String']>
  inExtrinsic_in?: InputMaybe<Array<Scalars['String']>>
  inExtrinsic_startsWith?: InputMaybe<Scalars['String']>
  indexInBlock_eq?: InputMaybe<Scalars['Int']>
  indexInBlock_gt?: InputMaybe<Scalars['Int']>
  indexInBlock_gte?: InputMaybe<Scalars['Int']>
  indexInBlock_in?: InputMaybe<Array<Scalars['Int']>>
  indexInBlock_lt?: InputMaybe<Scalars['Int']>
  indexInBlock_lte?: InputMaybe<Scalars['Int']>
  network_eq?: InputMaybe<Network>
  network_in?: InputMaybe<Array<Network>>
  numberOfInvites_eq?: InputMaybe<Scalars['Int']>
  numberOfInvites_gt?: InputMaybe<Scalars['Int']>
  numberOfInvites_gte?: InputMaybe<Scalars['Int']>
  numberOfInvites_in?: InputMaybe<Array<Scalars['Int']>>
  numberOfInvites_lt?: InputMaybe<Scalars['Int']>
  numberOfInvites_lte?: InputMaybe<Scalars['Int']>
  sourceMember?: InputMaybe<MembershipWhereInput>
  targetMember?: InputMaybe<MembershipWhereInput>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
}

export type InvitesTransferredEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type Language = BaseGraphQlObject & {
  __typename: 'Language'
  channellanguage?: Maybe<Array<Channel>>
  createdAt: Scalars['DateTime']
  createdById: Scalars['String']
  createdInBlock: Scalars['Int']
  deletedAt?: Maybe<Scalars['DateTime']>
  deletedById?: Maybe<Scalars['String']>
  id: Scalars['ID']
  /** Language identifier ISO 639-1 */
  iso: Scalars['String']
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedById?: Maybe<Scalars['String']>
  version: Scalars['Int']
  videolanguage?: Maybe<Array<Video>>
}

export type LanguageConnection = {
  __typename: 'LanguageConnection'
  edges: Array<LanguageEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type LanguageCreateInput = {
  createdInBlock: Scalars['Float']
  iso: Scalars['String']
}

export type LanguageEdge = {
  __typename: 'LanguageEdge'
  cursor: Scalars['String']
  node: Language
}

export enum LanguageOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  CreatedInBlockAsc = 'createdInBlock_ASC',
  CreatedInBlockDesc = 'createdInBlock_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  IsoAsc = 'iso_ASC',
  IsoDesc = 'iso_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type LanguageUpdateInput = {
  createdInBlock?: InputMaybe<Scalars['Float']>
  iso?: InputMaybe<Scalars['String']>
}

export type LanguageWhereInput = {
  AND?: InputMaybe<Array<LanguageWhereInput>>
  OR?: InputMaybe<Array<LanguageWhereInput>>
  channellanguage_every?: InputMaybe<ChannelWhereInput>
  channellanguage_none?: InputMaybe<ChannelWhereInput>
  channellanguage_some?: InputMaybe<ChannelWhereInput>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  createdInBlock_eq?: InputMaybe<Scalars['Int']>
  createdInBlock_gt?: InputMaybe<Scalars['Int']>
  createdInBlock_gte?: InputMaybe<Scalars['Int']>
  createdInBlock_in?: InputMaybe<Array<Scalars['Int']>>
  createdInBlock_lt?: InputMaybe<Scalars['Int']>
  createdInBlock_lte?: InputMaybe<Scalars['Int']>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  iso_contains?: InputMaybe<Scalars['String']>
  iso_endsWith?: InputMaybe<Scalars['String']>
  iso_eq?: InputMaybe<Scalars['String']>
  iso_in?: InputMaybe<Array<Scalars['String']>>
  iso_startsWith?: InputMaybe<Scalars['String']>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
  videolanguage_every?: InputMaybe<VideoWhereInput>
  videolanguage_none?: InputMaybe<VideoWhereInput>
  videolanguage_some?: InputMaybe<VideoWhereInput>
}

export type LanguageWhereUniqueInput = {
  id: Scalars['ID']
}

export type LeaderInvitationQuotaUpdatedEvent = BaseGraphQlObject &
  Event & {
    __typename: 'LeaderInvitationQuotaUpdatedEvent'
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    id: Scalars['ID']
    /** Blocknumber of the block in which the event was emitted. */
    inBlock: Scalars['Int']
    /** Hash of the extrinsic which caused the event to be emitted */
    inExtrinsic?: Maybe<Scalars['String']>
    /** Index of event in block from which it was emitted. */
    indexInBlock: Scalars['Int']
    /** Network the block was produced in */
    network: Network
    /** New quota. */
    newInvitationQuota: Scalars['Int']
    /** Filtering options for interface implementers */
    type?: Maybe<EventTypeOptions>
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
  }

export type LeaderInvitationQuotaUpdatedEventConnection = {
  __typename: 'LeaderInvitationQuotaUpdatedEventConnection'
  edges: Array<LeaderInvitationQuotaUpdatedEventEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type LeaderInvitationQuotaUpdatedEventCreateInput = {
  inBlock: Scalars['Float']
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock: Scalars['Float']
  network: Network
  newInvitationQuota: Scalars['Float']
}

export type LeaderInvitationQuotaUpdatedEventEdge = {
  __typename: 'LeaderInvitationQuotaUpdatedEventEdge'
  cursor: Scalars['String']
  node: LeaderInvitationQuotaUpdatedEvent
}

export enum LeaderInvitationQuotaUpdatedEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  NewInvitationQuotaAsc = 'newInvitationQuota_ASC',
  NewInvitationQuotaDesc = 'newInvitationQuota_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type LeaderInvitationQuotaUpdatedEventUpdateInput = {
  inBlock?: InputMaybe<Scalars['Float']>
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock?: InputMaybe<Scalars['Float']>
  network?: InputMaybe<Network>
  newInvitationQuota?: InputMaybe<Scalars['Float']>
}

export type LeaderInvitationQuotaUpdatedEventWhereInput = {
  AND?: InputMaybe<Array<LeaderInvitationQuotaUpdatedEventWhereInput>>
  OR?: InputMaybe<Array<LeaderInvitationQuotaUpdatedEventWhereInput>>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  inBlock_eq?: InputMaybe<Scalars['Int']>
  inBlock_gt?: InputMaybe<Scalars['Int']>
  inBlock_gte?: InputMaybe<Scalars['Int']>
  inBlock_in?: InputMaybe<Array<Scalars['Int']>>
  inBlock_lt?: InputMaybe<Scalars['Int']>
  inBlock_lte?: InputMaybe<Scalars['Int']>
  inExtrinsic_contains?: InputMaybe<Scalars['String']>
  inExtrinsic_endsWith?: InputMaybe<Scalars['String']>
  inExtrinsic_eq?: InputMaybe<Scalars['String']>
  inExtrinsic_in?: InputMaybe<Array<Scalars['String']>>
  inExtrinsic_startsWith?: InputMaybe<Scalars['String']>
  indexInBlock_eq?: InputMaybe<Scalars['Int']>
  indexInBlock_gt?: InputMaybe<Scalars['Int']>
  indexInBlock_gte?: InputMaybe<Scalars['Int']>
  indexInBlock_in?: InputMaybe<Array<Scalars['Int']>>
  indexInBlock_lt?: InputMaybe<Scalars['Int']>
  indexInBlock_lte?: InputMaybe<Scalars['Int']>
  network_eq?: InputMaybe<Network>
  network_in?: InputMaybe<Array<Network>>
  newInvitationQuota_eq?: InputMaybe<Scalars['Int']>
  newInvitationQuota_gt?: InputMaybe<Scalars['Int']>
  newInvitationQuota_gte?: InputMaybe<Scalars['Int']>
  newInvitationQuota_in?: InputMaybe<Array<Scalars['Int']>>
  newInvitationQuota_lt?: InputMaybe<Scalars['Int']>
  newInvitationQuota_lte?: InputMaybe<Scalars['Int']>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
}

export type LeaderInvitationQuotaUpdatedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type LeaderSetEvent = BaseGraphQlObject &
  Event & {
    __typename: 'LeaderSetEvent'
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    group: WorkingGroup
    groupId: Scalars['String']
    id: Scalars['ID']
    /** Blocknumber of the block in which the event was emitted. */
    inBlock: Scalars['Int']
    /** Hash of the extrinsic which caused the event to be emitted */
    inExtrinsic?: Maybe<Scalars['String']>
    /** Index of event in block from which it was emitted. */
    indexInBlock: Scalars['Int']
    /** Network the block was produced in */
    network: Network
    /** Filtering options for interface implementers */
    type?: Maybe<EventTypeOptions>
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
    worker?: Maybe<Worker>
    workerId?: Maybe<Scalars['String']>
  }

export type LeaderSetEventConnection = {
  __typename: 'LeaderSetEventConnection'
  edges: Array<LeaderSetEventEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type LeaderSetEventCreateInput = {
  group: Scalars['ID']
  inBlock: Scalars['Float']
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock: Scalars['Float']
  network: Network
  worker?: InputMaybe<Scalars['ID']>
}

export type LeaderSetEventEdge = {
  __typename: 'LeaderSetEventEdge'
  cursor: Scalars['String']
  node: LeaderSetEvent
}

export enum LeaderSetEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  GroupAsc = 'group_ASC',
  GroupDesc = 'group_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WorkerAsc = 'worker_ASC',
  WorkerDesc = 'worker_DESC',
}

export type LeaderSetEventUpdateInput = {
  group?: InputMaybe<Scalars['ID']>
  inBlock?: InputMaybe<Scalars['Float']>
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock?: InputMaybe<Scalars['Float']>
  network?: InputMaybe<Network>
  worker?: InputMaybe<Scalars['ID']>
}

export type LeaderSetEventWhereInput = {
  AND?: InputMaybe<Array<LeaderSetEventWhereInput>>
  OR?: InputMaybe<Array<LeaderSetEventWhereInput>>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  group?: InputMaybe<WorkingGroupWhereInput>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  inBlock_eq?: InputMaybe<Scalars['Int']>
  inBlock_gt?: InputMaybe<Scalars['Int']>
  inBlock_gte?: InputMaybe<Scalars['Int']>
  inBlock_in?: InputMaybe<Array<Scalars['Int']>>
  inBlock_lt?: InputMaybe<Scalars['Int']>
  inBlock_lte?: InputMaybe<Scalars['Int']>
  inExtrinsic_contains?: InputMaybe<Scalars['String']>
  inExtrinsic_endsWith?: InputMaybe<Scalars['String']>
  inExtrinsic_eq?: InputMaybe<Scalars['String']>
  inExtrinsic_in?: InputMaybe<Array<Scalars['String']>>
  inExtrinsic_startsWith?: InputMaybe<Scalars['String']>
  indexInBlock_eq?: InputMaybe<Scalars['Int']>
  indexInBlock_gt?: InputMaybe<Scalars['Int']>
  indexInBlock_gte?: InputMaybe<Scalars['Int']>
  indexInBlock_in?: InputMaybe<Array<Scalars['Int']>>
  indexInBlock_lt?: InputMaybe<Scalars['Int']>
  indexInBlock_lte?: InputMaybe<Scalars['Int']>
  network_eq?: InputMaybe<Network>
  network_in?: InputMaybe<Array<Network>>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
  worker?: InputMaybe<WorkerWhereInput>
}

export type LeaderSetEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type LeaderUnsetEvent = BaseGraphQlObject &
  Event & {
    __typename: 'LeaderUnsetEvent'
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    group: WorkingGroup
    groupId: Scalars['String']
    id: Scalars['ID']
    /** Blocknumber of the block in which the event was emitted. */
    inBlock: Scalars['Int']
    /** Hash of the extrinsic which caused the event to be emitted */
    inExtrinsic?: Maybe<Scalars['String']>
    /** Index of event in block from which it was emitted. */
    indexInBlock: Scalars['Int']
    leader: Worker
    leaderId: Scalars['String']
    /** Network the block was produced in */
    network: Network
    /** Filtering options for interface implementers */
    type?: Maybe<EventTypeOptions>
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
  }

export type LeaderUnsetEventConnection = {
  __typename: 'LeaderUnsetEventConnection'
  edges: Array<LeaderUnsetEventEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type LeaderUnsetEventCreateInput = {
  group: Scalars['ID']
  inBlock: Scalars['Float']
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock: Scalars['Float']
  leader: Scalars['ID']
  network: Network
}

export type LeaderUnsetEventEdge = {
  __typename: 'LeaderUnsetEventEdge'
  cursor: Scalars['String']
  node: LeaderUnsetEvent
}

export enum LeaderUnsetEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  GroupAsc = 'group_ASC',
  GroupDesc = 'group_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  LeaderAsc = 'leader_ASC',
  LeaderDesc = 'leader_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type LeaderUnsetEventUpdateInput = {
  group?: InputMaybe<Scalars['ID']>
  inBlock?: InputMaybe<Scalars['Float']>
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock?: InputMaybe<Scalars['Float']>
  leader?: InputMaybe<Scalars['ID']>
  network?: InputMaybe<Network>
}

export type LeaderUnsetEventWhereInput = {
  AND?: InputMaybe<Array<LeaderUnsetEventWhereInput>>
  OR?: InputMaybe<Array<LeaderUnsetEventWhereInput>>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  group?: InputMaybe<WorkingGroupWhereInput>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  inBlock_eq?: InputMaybe<Scalars['Int']>
  inBlock_gt?: InputMaybe<Scalars['Int']>
  inBlock_gte?: InputMaybe<Scalars['Int']>
  inBlock_in?: InputMaybe<Array<Scalars['Int']>>
  inBlock_lt?: InputMaybe<Scalars['Int']>
  inBlock_lte?: InputMaybe<Scalars['Int']>
  inExtrinsic_contains?: InputMaybe<Scalars['String']>
  inExtrinsic_endsWith?: InputMaybe<Scalars['String']>
  inExtrinsic_eq?: InputMaybe<Scalars['String']>
  inExtrinsic_in?: InputMaybe<Array<Scalars['String']>>
  inExtrinsic_startsWith?: InputMaybe<Scalars['String']>
  indexInBlock_eq?: InputMaybe<Scalars['Int']>
  indexInBlock_gt?: InputMaybe<Scalars['Int']>
  indexInBlock_gte?: InputMaybe<Scalars['Int']>
  indexInBlock_in?: InputMaybe<Array<Scalars['Int']>>
  indexInBlock_lt?: InputMaybe<Scalars['Int']>
  indexInBlock_lte?: InputMaybe<Scalars['Int']>
  leader?: InputMaybe<WorkerWhereInput>
  network_eq?: InputMaybe<Network>
  network_in?: InputMaybe<Array<Network>>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
}

export type LeaderUnsetEventWhereUniqueInput = {
  id: Scalars['ID']
}

export enum LiaisonJudgement {
  Accepted = 'ACCEPTED',
  Pending = 'PENDING',
}

export type License = BaseGraphQlObject & {
  __typename: 'License'
  /** Attribution (if required by the license) */
  attribution?: Maybe<Scalars['String']>
  /** License code defined by Joystream */
  code?: Maybe<Scalars['Int']>
  createdAt: Scalars['DateTime']
  createdById: Scalars['String']
  /** Custom license content */
  customText?: Maybe<Scalars['String']>
  deletedAt?: Maybe<Scalars['DateTime']>
  deletedById?: Maybe<Scalars['String']>
  id: Scalars['ID']
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedById?: Maybe<Scalars['String']>
  version: Scalars['Int']
  videolicense?: Maybe<Array<Video>>
}

export type LicenseConnection = {
  __typename: 'LicenseConnection'
  edges: Array<LicenseEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type LicenseCreateInput = {
  attribution?: InputMaybe<Scalars['String']>
  code?: InputMaybe<Scalars['Float']>
  customText?: InputMaybe<Scalars['String']>
}

export type LicenseEdge = {
  __typename: 'LicenseEdge'
  cursor: Scalars['String']
  node: License
}

export enum LicenseOrderByInput {
  AttributionAsc = 'attribution_ASC',
  AttributionDesc = 'attribution_DESC',
  CodeAsc = 'code_ASC',
  CodeDesc = 'code_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  CustomTextAsc = 'customText_ASC',
  CustomTextDesc = 'customText_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type LicenseUpdateInput = {
  attribution?: InputMaybe<Scalars['String']>
  code?: InputMaybe<Scalars['Float']>
  customText?: InputMaybe<Scalars['String']>
}

export type LicenseWhereInput = {
  AND?: InputMaybe<Array<LicenseWhereInput>>
  OR?: InputMaybe<Array<LicenseWhereInput>>
  attribution_contains?: InputMaybe<Scalars['String']>
  attribution_endsWith?: InputMaybe<Scalars['String']>
  attribution_eq?: InputMaybe<Scalars['String']>
  attribution_in?: InputMaybe<Array<Scalars['String']>>
  attribution_startsWith?: InputMaybe<Scalars['String']>
  code_eq?: InputMaybe<Scalars['Int']>
  code_gt?: InputMaybe<Scalars['Int']>
  code_gte?: InputMaybe<Scalars['Int']>
  code_in?: InputMaybe<Array<Scalars['Int']>>
  code_lt?: InputMaybe<Scalars['Int']>
  code_lte?: InputMaybe<Scalars['Int']>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  customText_contains?: InputMaybe<Scalars['String']>
  customText_endsWith?: InputMaybe<Scalars['String']>
  customText_eq?: InputMaybe<Scalars['String']>
  customText_in?: InputMaybe<Array<Scalars['String']>>
  customText_startsWith?: InputMaybe<Scalars['String']>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
  videolicense_every?: InputMaybe<VideoWhereInput>
  videolicense_none?: InputMaybe<VideoWhereInput>
  videolicense_some?: InputMaybe<VideoWhereInput>
}

export type LicenseWhereUniqueInput = {
  id: Scalars['ID']
}

export type LockBlogPostProposalDetails = {
  __typename: 'LockBlogPostProposalDetails'
  /** The blog post that should be locked */
  blogPost: Scalars['String']
}

export type MemberAccountsUpdatedEvent = BaseGraphQlObject &
  Event & {
    __typename: 'MemberAccountsUpdatedEvent'
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    id: Scalars['ID']
    /** Blocknumber of the block in which the event was emitted. */
    inBlock: Scalars['Int']
    /** Hash of the extrinsic which caused the event to be emitted */
    inExtrinsic?: Maybe<Scalars['String']>
    /** Index of event in block from which it was emitted. */
    indexInBlock: Scalars['Int']
    member: Membership
    memberId: Scalars['String']
    /** Network the block was produced in */
    network: Network
    /** New member controller in SS58 encoding. Null means no new value was provided. */
    newControllerAccount?: Maybe<Scalars['String']>
    /** New member root account in SS58 encoding. Null means no new value was provided. */
    newRootAccount?: Maybe<Scalars['String']>
    /** Filtering options for interface implementers */
    type?: Maybe<EventTypeOptions>
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
  }

export type MemberAccountsUpdatedEventConnection = {
  __typename: 'MemberAccountsUpdatedEventConnection'
  edges: Array<MemberAccountsUpdatedEventEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type MemberAccountsUpdatedEventCreateInput = {
  inBlock: Scalars['Float']
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock: Scalars['Float']
  member: Scalars['ID']
  network: Network
  newControllerAccount?: InputMaybe<Scalars['String']>
  newRootAccount?: InputMaybe<Scalars['String']>
}

export type MemberAccountsUpdatedEventEdge = {
  __typename: 'MemberAccountsUpdatedEventEdge'
  cursor: Scalars['String']
  node: MemberAccountsUpdatedEvent
}

export enum MemberAccountsUpdatedEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  MemberAsc = 'member_ASC',
  MemberDesc = 'member_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  NewControllerAccountAsc = 'newControllerAccount_ASC',
  NewControllerAccountDesc = 'newControllerAccount_DESC',
  NewRootAccountAsc = 'newRootAccount_ASC',
  NewRootAccountDesc = 'newRootAccount_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type MemberAccountsUpdatedEventUpdateInput = {
  inBlock?: InputMaybe<Scalars['Float']>
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock?: InputMaybe<Scalars['Float']>
  member?: InputMaybe<Scalars['ID']>
  network?: InputMaybe<Network>
  newControllerAccount?: InputMaybe<Scalars['String']>
  newRootAccount?: InputMaybe<Scalars['String']>
}

export type MemberAccountsUpdatedEventWhereInput = {
  AND?: InputMaybe<Array<MemberAccountsUpdatedEventWhereInput>>
  OR?: InputMaybe<Array<MemberAccountsUpdatedEventWhereInput>>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  inBlock_eq?: InputMaybe<Scalars['Int']>
  inBlock_gt?: InputMaybe<Scalars['Int']>
  inBlock_gte?: InputMaybe<Scalars['Int']>
  inBlock_in?: InputMaybe<Array<Scalars['Int']>>
  inBlock_lt?: InputMaybe<Scalars['Int']>
  inBlock_lte?: InputMaybe<Scalars['Int']>
  inExtrinsic_contains?: InputMaybe<Scalars['String']>
  inExtrinsic_endsWith?: InputMaybe<Scalars['String']>
  inExtrinsic_eq?: InputMaybe<Scalars['String']>
  inExtrinsic_in?: InputMaybe<Array<Scalars['String']>>
  inExtrinsic_startsWith?: InputMaybe<Scalars['String']>
  indexInBlock_eq?: InputMaybe<Scalars['Int']>
  indexInBlock_gt?: InputMaybe<Scalars['Int']>
  indexInBlock_gte?: InputMaybe<Scalars['Int']>
  indexInBlock_in?: InputMaybe<Array<Scalars['Int']>>
  indexInBlock_lt?: InputMaybe<Scalars['Int']>
  indexInBlock_lte?: InputMaybe<Scalars['Int']>
  member?: InputMaybe<MembershipWhereInput>
  network_eq?: InputMaybe<Network>
  network_in?: InputMaybe<Array<Network>>
  newControllerAccount_contains?: InputMaybe<Scalars['String']>
  newControllerAccount_endsWith?: InputMaybe<Scalars['String']>
  newControllerAccount_eq?: InputMaybe<Scalars['String']>
  newControllerAccount_in?: InputMaybe<Array<Scalars['String']>>
  newControllerAccount_startsWith?: InputMaybe<Scalars['String']>
  newRootAccount_contains?: InputMaybe<Scalars['String']>
  newRootAccount_endsWith?: InputMaybe<Scalars['String']>
  newRootAccount_eq?: InputMaybe<Scalars['String']>
  newRootAccount_in?: InputMaybe<Array<Scalars['String']>>
  newRootAccount_startsWith?: InputMaybe<Scalars['String']>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
}

export type MemberAccountsUpdatedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type MemberInvitedEvent = BaseGraphQlObject &
  Event & {
    __typename: 'MemberInvitedEvent'
    /** New member controller in SS58 encoding. */
    controllerAccount: Scalars['String']
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    /** New member handle. */
    handle: Scalars['String']
    id: Scalars['ID']
    /** Blocknumber of the block in which the event was emitted. */
    inBlock: Scalars['Int']
    /** Hash of the extrinsic which caused the event to be emitted */
    inExtrinsic?: Maybe<Scalars['String']>
    /** Index of event in block from which it was emitted. */
    indexInBlock: Scalars['Int']
    invitingMember: Membership
    invitingMemberId: Scalars['String']
    metadata: MemberMetadata
    metadataId: Scalars['String']
    /** Network the block was produced in */
    network: Network
    newMember: Membership
    newMemberId: Scalars['String']
    /** New member root account in SS58 encoding. */
    rootAccount: Scalars['String']
    /** Filtering options for interface implementers */
    type?: Maybe<EventTypeOptions>
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
  }

export type MemberInvitedEventConnection = {
  __typename: 'MemberInvitedEventConnection'
  edges: Array<MemberInvitedEventEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type MemberInvitedEventCreateInput = {
  controllerAccount: Scalars['String']
  handle: Scalars['String']
  inBlock: Scalars['Float']
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock: Scalars['Float']
  invitingMember: Scalars['ID']
  metadata: Scalars['ID']
  network: Network
  newMember: Scalars['ID']
  rootAccount: Scalars['String']
}

export type MemberInvitedEventEdge = {
  __typename: 'MemberInvitedEventEdge'
  cursor: Scalars['String']
  node: MemberInvitedEvent
}

export enum MemberInvitedEventOrderByInput {
  ControllerAccountAsc = 'controllerAccount_ASC',
  ControllerAccountDesc = 'controllerAccount_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  InvitingMemberAsc = 'invitingMember_ASC',
  InvitingMemberDesc = 'invitingMember_DESC',
  MetadataAsc = 'metadata_ASC',
  MetadataDesc = 'metadata_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  NewMemberAsc = 'newMember_ASC',
  NewMemberDesc = 'newMember_DESC',
  RootAccountAsc = 'rootAccount_ASC',
  RootAccountDesc = 'rootAccount_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type MemberInvitedEventUpdateInput = {
  controllerAccount?: InputMaybe<Scalars['String']>
  handle?: InputMaybe<Scalars['String']>
  inBlock?: InputMaybe<Scalars['Float']>
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock?: InputMaybe<Scalars['Float']>
  invitingMember?: InputMaybe<Scalars['ID']>
  metadata?: InputMaybe<Scalars['ID']>
  network?: InputMaybe<Network>
  newMember?: InputMaybe<Scalars['ID']>
  rootAccount?: InputMaybe<Scalars['String']>
}

export type MemberInvitedEventWhereInput = {
  AND?: InputMaybe<Array<MemberInvitedEventWhereInput>>
  OR?: InputMaybe<Array<MemberInvitedEventWhereInput>>
  controllerAccount_contains?: InputMaybe<Scalars['String']>
  controllerAccount_endsWith?: InputMaybe<Scalars['String']>
  controllerAccount_eq?: InputMaybe<Scalars['String']>
  controllerAccount_in?: InputMaybe<Array<Scalars['String']>>
  controllerAccount_startsWith?: InputMaybe<Scalars['String']>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  handle_contains?: InputMaybe<Scalars['String']>
  handle_endsWith?: InputMaybe<Scalars['String']>
  handle_eq?: InputMaybe<Scalars['String']>
  handle_in?: InputMaybe<Array<Scalars['String']>>
  handle_startsWith?: InputMaybe<Scalars['String']>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  inBlock_eq?: InputMaybe<Scalars['Int']>
  inBlock_gt?: InputMaybe<Scalars['Int']>
  inBlock_gte?: InputMaybe<Scalars['Int']>
  inBlock_in?: InputMaybe<Array<Scalars['Int']>>
  inBlock_lt?: InputMaybe<Scalars['Int']>
  inBlock_lte?: InputMaybe<Scalars['Int']>
  inExtrinsic_contains?: InputMaybe<Scalars['String']>
  inExtrinsic_endsWith?: InputMaybe<Scalars['String']>
  inExtrinsic_eq?: InputMaybe<Scalars['String']>
  inExtrinsic_in?: InputMaybe<Array<Scalars['String']>>
  inExtrinsic_startsWith?: InputMaybe<Scalars['String']>
  indexInBlock_eq?: InputMaybe<Scalars['Int']>
  indexInBlock_gt?: InputMaybe<Scalars['Int']>
  indexInBlock_gte?: InputMaybe<Scalars['Int']>
  indexInBlock_in?: InputMaybe<Array<Scalars['Int']>>
  indexInBlock_lt?: InputMaybe<Scalars['Int']>
  indexInBlock_lte?: InputMaybe<Scalars['Int']>
  invitingMember?: InputMaybe<MembershipWhereInput>
  metadata?: InputMaybe<MemberMetadataWhereInput>
  network_eq?: InputMaybe<Network>
  network_in?: InputMaybe<Array<Network>>
  newMember?: InputMaybe<MembershipWhereInput>
  rootAccount_contains?: InputMaybe<Scalars['String']>
  rootAccount_endsWith?: InputMaybe<Scalars['String']>
  rootAccount_eq?: InputMaybe<Scalars['String']>
  rootAccount_in?: InputMaybe<Array<Scalars['String']>>
  rootAccount_startsWith?: InputMaybe<Scalars['String']>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
}

export type MemberInvitedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type MemberMetadata = BaseGraphQlObject & {
  __typename: 'MemberMetadata'
  /** Short text chosen by member to share information about themselves */
  about?: Maybe<Scalars['String']>
  /** Avatar data object */
  avatar?: Maybe<Avatar>
  createdAt: Scalars['DateTime']
  createdById: Scalars['String']
  deletedAt?: Maybe<Scalars['DateTime']>
  deletedById?: Maybe<Scalars['String']>
  id: Scalars['ID']
  memberinvitedeventmetadata?: Maybe<Array<MemberInvitedEvent>>
  memberprofileupdatedeventnewMetadata?: Maybe<Array<MemberProfileUpdatedEvent>>
  membershipboughteventmetadata?: Maybe<Array<MembershipBoughtEvent>>
  membershipmetadata?: Maybe<Array<Membership>>
  /** Member's name */
  name?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedById?: Maybe<Scalars['String']>
  version: Scalars['Int']
}

export type MemberMetadataConnection = {
  __typename: 'MemberMetadataConnection'
  edges: Array<MemberMetadataEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type MemberMetadataCreateInput = {
  about?: InputMaybe<Scalars['String']>
  avatar: Scalars['JSONObject']
  name?: InputMaybe<Scalars['String']>
}

export type MemberMetadataEdge = {
  __typename: 'MemberMetadataEdge'
  cursor: Scalars['String']
  node: MemberMetadata
}

export enum MemberMetadataOrderByInput {
  AboutAsc = 'about_ASC',
  AboutDesc = 'about_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type MemberMetadataUpdateInput = {
  about?: InputMaybe<Scalars['String']>
  avatar?: InputMaybe<Scalars['JSONObject']>
  name?: InputMaybe<Scalars['String']>
}

export type MemberMetadataWhereInput = {
  AND?: InputMaybe<Array<MemberMetadataWhereInput>>
  OR?: InputMaybe<Array<MemberMetadataWhereInput>>
  about_contains?: InputMaybe<Scalars['String']>
  about_endsWith?: InputMaybe<Scalars['String']>
  about_eq?: InputMaybe<Scalars['String']>
  about_in?: InputMaybe<Array<Scalars['String']>>
  about_startsWith?: InputMaybe<Scalars['String']>
  avatar_json?: InputMaybe<Scalars['JSONObject']>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  memberinvitedeventmetadata_every?: InputMaybe<MemberInvitedEventWhereInput>
  memberinvitedeventmetadata_none?: InputMaybe<MemberInvitedEventWhereInput>
  memberinvitedeventmetadata_some?: InputMaybe<MemberInvitedEventWhereInput>
  memberprofileupdatedeventnewMetadata_every?: InputMaybe<MemberProfileUpdatedEventWhereInput>
  memberprofileupdatedeventnewMetadata_none?: InputMaybe<MemberProfileUpdatedEventWhereInput>
  memberprofileupdatedeventnewMetadata_some?: InputMaybe<MemberProfileUpdatedEventWhereInput>
  membershipboughteventmetadata_every?: InputMaybe<MembershipBoughtEventWhereInput>
  membershipboughteventmetadata_none?: InputMaybe<MembershipBoughtEventWhereInput>
  membershipboughteventmetadata_some?: InputMaybe<MembershipBoughtEventWhereInput>
  membershipmetadata_every?: InputMaybe<MembershipWhereInput>
  membershipmetadata_none?: InputMaybe<MembershipWhereInput>
  membershipmetadata_some?: InputMaybe<MembershipWhereInput>
  name_contains?: InputMaybe<Scalars['String']>
  name_endsWith?: InputMaybe<Scalars['String']>
  name_eq?: InputMaybe<Scalars['String']>
  name_in?: InputMaybe<Array<Scalars['String']>>
  name_startsWith?: InputMaybe<Scalars['String']>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
}

export type MemberMetadataWhereUniqueInput = {
  id: Scalars['ID']
}

export type MemberProfileUpdatedEvent = BaseGraphQlObject &
  Event & {
    __typename: 'MemberProfileUpdatedEvent'
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    id: Scalars['ID']
    /** Blocknumber of the block in which the event was emitted. */
    inBlock: Scalars['Int']
    /** Hash of the extrinsic which caused the event to be emitted */
    inExtrinsic?: Maybe<Scalars['String']>
    /** Index of event in block from which it was emitted. */
    indexInBlock: Scalars['Int']
    member: Membership
    memberId: Scalars['String']
    /** Network the block was produced in */
    network: Network
    /** New member handle. Null means no new value was provided. */
    newHandle?: Maybe<Scalars['String']>
    newMetadata: MemberMetadata
    newMetadataId: Scalars['String']
    /** Filtering options for interface implementers */
    type?: Maybe<EventTypeOptions>
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
  }

export type MemberProfileUpdatedEventConnection = {
  __typename: 'MemberProfileUpdatedEventConnection'
  edges: Array<MemberProfileUpdatedEventEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type MemberProfileUpdatedEventCreateInput = {
  inBlock: Scalars['Float']
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock: Scalars['Float']
  member: Scalars['ID']
  network: Network
  newHandle?: InputMaybe<Scalars['String']>
  newMetadata: Scalars['ID']
}

export type MemberProfileUpdatedEventEdge = {
  __typename: 'MemberProfileUpdatedEventEdge'
  cursor: Scalars['String']
  node: MemberProfileUpdatedEvent
}

export enum MemberProfileUpdatedEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  MemberAsc = 'member_ASC',
  MemberDesc = 'member_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  NewHandleAsc = 'newHandle_ASC',
  NewHandleDesc = 'newHandle_DESC',
  NewMetadataAsc = 'newMetadata_ASC',
  NewMetadataDesc = 'newMetadata_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type MemberProfileUpdatedEventUpdateInput = {
  inBlock?: InputMaybe<Scalars['Float']>
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock?: InputMaybe<Scalars['Float']>
  member?: InputMaybe<Scalars['ID']>
  network?: InputMaybe<Network>
  newHandle?: InputMaybe<Scalars['String']>
  newMetadata?: InputMaybe<Scalars['ID']>
}

export type MemberProfileUpdatedEventWhereInput = {
  AND?: InputMaybe<Array<MemberProfileUpdatedEventWhereInput>>
  OR?: InputMaybe<Array<MemberProfileUpdatedEventWhereInput>>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  inBlock_eq?: InputMaybe<Scalars['Int']>
  inBlock_gt?: InputMaybe<Scalars['Int']>
  inBlock_gte?: InputMaybe<Scalars['Int']>
  inBlock_in?: InputMaybe<Array<Scalars['Int']>>
  inBlock_lt?: InputMaybe<Scalars['Int']>
  inBlock_lte?: InputMaybe<Scalars['Int']>
  inExtrinsic_contains?: InputMaybe<Scalars['String']>
  inExtrinsic_endsWith?: InputMaybe<Scalars['String']>
  inExtrinsic_eq?: InputMaybe<Scalars['String']>
  inExtrinsic_in?: InputMaybe<Array<Scalars['String']>>
  inExtrinsic_startsWith?: InputMaybe<Scalars['String']>
  indexInBlock_eq?: InputMaybe<Scalars['Int']>
  indexInBlock_gt?: InputMaybe<Scalars['Int']>
  indexInBlock_gte?: InputMaybe<Scalars['Int']>
  indexInBlock_in?: InputMaybe<Array<Scalars['Int']>>
  indexInBlock_lt?: InputMaybe<Scalars['Int']>
  indexInBlock_lte?: InputMaybe<Scalars['Int']>
  member?: InputMaybe<MembershipWhereInput>
  network_eq?: InputMaybe<Network>
  network_in?: InputMaybe<Array<Network>>
  newHandle_contains?: InputMaybe<Scalars['String']>
  newHandle_endsWith?: InputMaybe<Scalars['String']>
  newHandle_eq?: InputMaybe<Scalars['String']>
  newHandle_in?: InputMaybe<Array<Scalars['String']>>
  newHandle_startsWith?: InputMaybe<Scalars['String']>
  newMetadata?: InputMaybe<MemberMetadataWhereInput>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
}

export type MemberProfileUpdatedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type MemberVerificationStatusUpdatedEvent = BaseGraphQlObject &
  Event & {
    __typename: 'MemberVerificationStatusUpdatedEvent'
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    id: Scalars['ID']
    /** Blocknumber of the block in which the event was emitted. */
    inBlock: Scalars['Int']
    /** Hash of the extrinsic which caused the event to be emitted */
    inExtrinsic?: Maybe<Scalars['String']>
    /** Index of event in block from which it was emitted. */
    indexInBlock: Scalars['Int']
    /** New status. */
    isVerified: Scalars['Boolean']
    member: Membership
    memberId: Scalars['String']
    /** Network the block was produced in */
    network: Network
    /** Filtering options for interface implementers */
    type?: Maybe<EventTypeOptions>
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
    worker: Worker
    workerId: Scalars['String']
  }

export type MemberVerificationStatusUpdatedEventConnection = {
  __typename: 'MemberVerificationStatusUpdatedEventConnection'
  edges: Array<MemberVerificationStatusUpdatedEventEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type MemberVerificationStatusUpdatedEventCreateInput = {
  inBlock: Scalars['Float']
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock: Scalars['Float']
  isVerified: Scalars['Boolean']
  member: Scalars['ID']
  network: Network
  worker: Scalars['ID']
}

export type MemberVerificationStatusUpdatedEventEdge = {
  __typename: 'MemberVerificationStatusUpdatedEventEdge'
  cursor: Scalars['String']
  node: MemberVerificationStatusUpdatedEvent
}

export enum MemberVerificationStatusUpdatedEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  IsVerifiedAsc = 'isVerified_ASC',
  IsVerifiedDesc = 'isVerified_DESC',
  MemberAsc = 'member_ASC',
  MemberDesc = 'member_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WorkerAsc = 'worker_ASC',
  WorkerDesc = 'worker_DESC',
}

export type MemberVerificationStatusUpdatedEventUpdateInput = {
  inBlock?: InputMaybe<Scalars['Float']>
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock?: InputMaybe<Scalars['Float']>
  isVerified?: InputMaybe<Scalars['Boolean']>
  member?: InputMaybe<Scalars['ID']>
  network?: InputMaybe<Network>
  worker?: InputMaybe<Scalars['ID']>
}

export type MemberVerificationStatusUpdatedEventWhereInput = {
  AND?: InputMaybe<Array<MemberVerificationStatusUpdatedEventWhereInput>>
  OR?: InputMaybe<Array<MemberVerificationStatusUpdatedEventWhereInput>>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  inBlock_eq?: InputMaybe<Scalars['Int']>
  inBlock_gt?: InputMaybe<Scalars['Int']>
  inBlock_gte?: InputMaybe<Scalars['Int']>
  inBlock_in?: InputMaybe<Array<Scalars['Int']>>
  inBlock_lt?: InputMaybe<Scalars['Int']>
  inBlock_lte?: InputMaybe<Scalars['Int']>
  inExtrinsic_contains?: InputMaybe<Scalars['String']>
  inExtrinsic_endsWith?: InputMaybe<Scalars['String']>
  inExtrinsic_eq?: InputMaybe<Scalars['String']>
  inExtrinsic_in?: InputMaybe<Array<Scalars['String']>>
  inExtrinsic_startsWith?: InputMaybe<Scalars['String']>
  indexInBlock_eq?: InputMaybe<Scalars['Int']>
  indexInBlock_gt?: InputMaybe<Scalars['Int']>
  indexInBlock_gte?: InputMaybe<Scalars['Int']>
  indexInBlock_in?: InputMaybe<Array<Scalars['Int']>>
  indexInBlock_lt?: InputMaybe<Scalars['Int']>
  indexInBlock_lte?: InputMaybe<Scalars['Int']>
  isVerified_eq?: InputMaybe<Scalars['Boolean']>
  isVerified_in?: InputMaybe<Array<Scalars['Boolean']>>
  member?: InputMaybe<MembershipWhereInput>
  network_eq?: InputMaybe<Network>
  network_in?: InputMaybe<Array<Network>>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
  worker?: InputMaybe<WorkerWhereInput>
}

export type MemberVerificationStatusUpdatedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type MembersByHandleFtsOutput = {
  __typename: 'MembersByHandleFTSOutput'
  highlight: Scalars['String']
  isTypeOf: Scalars['String']
  item: MembersByHandleSearchResult
  rank: Scalars['Float']
}

export type MembersByHandleSearchResult = Membership

/** Stored information about a registered user */
export type Membership = BaseGraphQlObject & {
  __typename: 'Membership'
  /** Staking accounts bounded to membership. */
  boundAccounts: Array<Scalars['String']>
  bountycontributioncontributor?: Maybe<Array<BountyContribution>>
  bountycreator?: Maybe<Array<Bounty>>
  bountyentryworker?: Maybe<Array<BountyEntry>>
  bountyoracle?: Maybe<Array<Bounty>>
  channels: Array<Channel>
  /** Member's controller account id */
  controllerAccount: Scalars['String']
  councilCandidacies: Array<Candidate>
  councilMembers: Array<CouncilMember>
  createdAt: Scalars['DateTime']
  createdById: Scalars['String']
  deletedAt?: Maybe<Scalars['DateTime']>
  deletedById?: Maybe<Scalars['String']>
  /** How the member was registered */
  entry: MembershipEntryMethod
  forumpostauthor?: Maybe<Array<ForumPost>>
  forumpostreactionmember?: Maybe<Array<ForumPostReaction>>
  forumthreadauthor?: Maybe<Array<ForumThread>>
  /** The unique handle chosen by member */
  handle: Scalars['String']
  id: Scalars['ID']
  /** Current count of invites left to send. */
  inviteCount: Scalars['Int']
  invitedBy?: Maybe<Membership>
  invitedById?: Maybe<Scalars['String']>
  invitees: Array<Membership>
  invitestransferredeventsourceMember?: Maybe<Array<InvitesTransferredEvent>>
  invitestransferredeventtargetMember?: Maybe<Array<InvitesTransferredEvent>>
  /** Whether member is elected in the current council. */
  isCouncilMember: Scalars['Boolean']
  /** Whether member is founding member. */
  isFoundingMember: Scalars['Boolean']
  /** Whether member has been verified by membership working group. */
  isVerified: Scalars['Boolean']
  memberaccountsupdatedeventmember?: Maybe<Array<MemberAccountsUpdatedEvent>>
  memberinvitedeventinvitingMember?: Maybe<Array<MemberInvitedEvent>>
  memberinvitedeventnewMember?: Maybe<Array<MemberInvitedEvent>>
  memberprofileupdatedeventmember?: Maybe<Array<MemberProfileUpdatedEvent>>
  membershipboughteventnewMember?: Maybe<Array<MembershipBoughtEvent>>
  membershipboughteventreferrer?: Maybe<Array<MembershipBoughtEvent>>
  memberverificationstatusupdatedeventmember?: Maybe<Array<MemberVerificationStatusUpdatedEvent>>
  metadata: MemberMetadata
  metadataId: Scalars['String']
  postdeletedeventactor?: Maybe<Array<PostDeletedEvent>>
  postreactedeventreactingMember?: Maybe<Array<PostReactedEvent>>
  proposalcreator?: Maybe<Array<Proposal>>
  proposaldiscussionpostauthor?: Maybe<Array<ProposalDiscussionPost>>
  proposaldiscussionpostdeletedeventactor?: Maybe<Array<ProposalDiscussionPostDeletedEvent>>
  proposaldiscussionthreadmodechangedeventactor?: Maybe<Array<ProposalDiscussionThreadModeChangedEvent>>
  proposalvotedeventvoter?: Maybe<Array<ProposalVotedEvent>>
  referredBy?: Maybe<Membership>
  referredById?: Maybe<Scalars['String']>
  referredMembers: Array<Membership>
  roles: Array<Worker>
  /** Member's root account id */
  rootAccount: Scalars['String']
  stakingaccountaddedeventmember?: Maybe<Array<StakingAccountAddedEvent>>
  stakingaccountconfirmedeventmember?: Maybe<Array<StakingAccountConfirmedEvent>>
  stakingaccountremovedeventmember?: Maybe<Array<StakingAccountRemovedEvent>>
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedById?: Maybe<Scalars['String']>
  version: Scalars['Int']
  voteonpolleventvotingMember?: Maybe<Array<VoteOnPollEvent>>
  whitelistedIn: Array<ProposalDiscussionWhitelist>
  workinggroupapplicationapplicant?: Maybe<Array<WorkingGroupApplication>>
}

export type MembershipBoughtEvent = BaseGraphQlObject &
  Event & {
    __typename: 'MembershipBoughtEvent'
    /** New member controller in SS58 encoding. */
    controllerAccount: Scalars['String']
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    /** New member handle. */
    handle: Scalars['String']
    id: Scalars['ID']
    /** Blocknumber of the block in which the event was emitted. */
    inBlock: Scalars['Int']
    /** Hash of the extrinsic which caused the event to be emitted */
    inExtrinsic?: Maybe<Scalars['String']>
    /** Index of event in block from which it was emitted. */
    indexInBlock: Scalars['Int']
    metadata: MemberMetadata
    metadataId: Scalars['String']
    /** Network the block was produced in */
    network: Network
    newMember: Membership
    newMemberId: Scalars['String']
    referrer?: Maybe<Membership>
    referrerId?: Maybe<Scalars['String']>
    /** New member root account in SS58 encoding. */
    rootAccount: Scalars['String']
    /** Filtering options for interface implementers */
    type?: Maybe<EventTypeOptions>
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
  }

export type MembershipBoughtEventConnection = {
  __typename: 'MembershipBoughtEventConnection'
  edges: Array<MembershipBoughtEventEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type MembershipBoughtEventCreateInput = {
  controllerAccount: Scalars['String']
  handle: Scalars['String']
  inBlock: Scalars['Float']
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock: Scalars['Float']
  metadata: Scalars['ID']
  network: Network
  newMember: Scalars['ID']
  referrer?: InputMaybe<Scalars['ID']>
  rootAccount: Scalars['String']
}

export type MembershipBoughtEventEdge = {
  __typename: 'MembershipBoughtEventEdge'
  cursor: Scalars['String']
  node: MembershipBoughtEvent
}

export enum MembershipBoughtEventOrderByInput {
  ControllerAccountAsc = 'controllerAccount_ASC',
  ControllerAccountDesc = 'controllerAccount_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  MetadataAsc = 'metadata_ASC',
  MetadataDesc = 'metadata_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  NewMemberAsc = 'newMember_ASC',
  NewMemberDesc = 'newMember_DESC',
  ReferrerAsc = 'referrer_ASC',
  ReferrerDesc = 'referrer_DESC',
  RootAccountAsc = 'rootAccount_ASC',
  RootAccountDesc = 'rootAccount_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type MembershipBoughtEventUpdateInput = {
  controllerAccount?: InputMaybe<Scalars['String']>
  handle?: InputMaybe<Scalars['String']>
  inBlock?: InputMaybe<Scalars['Float']>
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock?: InputMaybe<Scalars['Float']>
  metadata?: InputMaybe<Scalars['ID']>
  network?: InputMaybe<Network>
  newMember?: InputMaybe<Scalars['ID']>
  referrer?: InputMaybe<Scalars['ID']>
  rootAccount?: InputMaybe<Scalars['String']>
}

export type MembershipBoughtEventWhereInput = {
  AND?: InputMaybe<Array<MembershipBoughtEventWhereInput>>
  OR?: InputMaybe<Array<MembershipBoughtEventWhereInput>>
  controllerAccount_contains?: InputMaybe<Scalars['String']>
  controllerAccount_endsWith?: InputMaybe<Scalars['String']>
  controllerAccount_eq?: InputMaybe<Scalars['String']>
  controllerAccount_in?: InputMaybe<Array<Scalars['String']>>
  controllerAccount_startsWith?: InputMaybe<Scalars['String']>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  handle_contains?: InputMaybe<Scalars['String']>
  handle_endsWith?: InputMaybe<Scalars['String']>
  handle_eq?: InputMaybe<Scalars['String']>
  handle_in?: InputMaybe<Array<Scalars['String']>>
  handle_startsWith?: InputMaybe<Scalars['String']>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  inBlock_eq?: InputMaybe<Scalars['Int']>
  inBlock_gt?: InputMaybe<Scalars['Int']>
  inBlock_gte?: InputMaybe<Scalars['Int']>
  inBlock_in?: InputMaybe<Array<Scalars['Int']>>
  inBlock_lt?: InputMaybe<Scalars['Int']>
  inBlock_lte?: InputMaybe<Scalars['Int']>
  inExtrinsic_contains?: InputMaybe<Scalars['String']>
  inExtrinsic_endsWith?: InputMaybe<Scalars['String']>
  inExtrinsic_eq?: InputMaybe<Scalars['String']>
  inExtrinsic_in?: InputMaybe<Array<Scalars['String']>>
  inExtrinsic_startsWith?: InputMaybe<Scalars['String']>
  indexInBlock_eq?: InputMaybe<Scalars['Int']>
  indexInBlock_gt?: InputMaybe<Scalars['Int']>
  indexInBlock_gte?: InputMaybe<Scalars['Int']>
  indexInBlock_in?: InputMaybe<Array<Scalars['Int']>>
  indexInBlock_lt?: InputMaybe<Scalars['Int']>
  indexInBlock_lte?: InputMaybe<Scalars['Int']>
  metadata?: InputMaybe<MemberMetadataWhereInput>
  network_eq?: InputMaybe<Network>
  network_in?: InputMaybe<Array<Network>>
  newMember?: InputMaybe<MembershipWhereInput>
  referrer?: InputMaybe<MembershipWhereInput>
  rootAccount_contains?: InputMaybe<Scalars['String']>
  rootAccount_endsWith?: InputMaybe<Scalars['String']>
  rootAccount_eq?: InputMaybe<Scalars['String']>
  rootAccount_in?: InputMaybe<Array<Scalars['String']>>
  rootAccount_startsWith?: InputMaybe<Scalars['String']>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
}

export type MembershipBoughtEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type MembershipConnection = {
  __typename: 'MembershipConnection'
  edges: Array<MembershipEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type MembershipCreateInput = {
  boundAccounts: Array<Scalars['String']>
  controllerAccount: Scalars['String']
  entry: Scalars['JSONObject']
  handle: Scalars['String']
  inviteCount: Scalars['Float']
  invitedBy?: InputMaybe<Scalars['ID']>
  isCouncilMember: Scalars['Boolean']
  isFoundingMember: Scalars['Boolean']
  isVerified: Scalars['Boolean']
  metadata: Scalars['ID']
  referredBy?: InputMaybe<Scalars['ID']>
  rootAccount: Scalars['String']
}

export type MembershipEdge = {
  __typename: 'MembershipEdge'
  cursor: Scalars['String']
  node: Membership
}

export type MembershipEntryGenesis = {
  __typename: 'MembershipEntryGenesis'
  phantom?: Maybe<Scalars['Int']>
}

export type MembershipEntryInvited = {
  __typename: 'MembershipEntryInvited'
  /** The event the member was invited in */
  memberInvitedEvent?: Maybe<MemberInvitedEvent>
}

export type MembershipEntryMethod = MembershipEntryGenesis | MembershipEntryInvited | MembershipEntryPaid

export type MembershipEntryPaid = {
  __typename: 'MembershipEntryPaid'
  /** The event the membership was bought in */
  membershipBoughtEvent?: Maybe<MembershipBoughtEvent>
}

export enum MembershipOrderByInput {
  ControllerAccountAsc = 'controllerAccount_ASC',
  ControllerAccountDesc = 'controllerAccount_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  HandleAsc = 'handle_ASC',
  HandleDesc = 'handle_DESC',
  InviteCountAsc = 'inviteCount_ASC',
  InviteCountDesc = 'inviteCount_DESC',
  InvitedByAsc = 'invitedBy_ASC',
  InvitedByDesc = 'invitedBy_DESC',
  IsCouncilMemberAsc = 'isCouncilMember_ASC',
  IsCouncilMemberDesc = 'isCouncilMember_DESC',
  IsFoundingMemberAsc = 'isFoundingMember_ASC',
  IsFoundingMemberDesc = 'isFoundingMember_DESC',
  IsVerifiedAsc = 'isVerified_ASC',
  IsVerifiedDesc = 'isVerified_DESC',
  MetadataAsc = 'metadata_ASC',
  MetadataDesc = 'metadata_DESC',
  ReferredByAsc = 'referredBy_ASC',
  ReferredByDesc = 'referredBy_DESC',
  RootAccountAsc = 'rootAccount_ASC',
  RootAccountDesc = 'rootAccount_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type MembershipPriceUpdatedEvent = BaseGraphQlObject &
  Event & {
    __typename: 'MembershipPriceUpdatedEvent'
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    id: Scalars['ID']
    /** Blocknumber of the block in which the event was emitted. */
    inBlock: Scalars['Int']
    /** Hash of the extrinsic which caused the event to be emitted */
    inExtrinsic?: Maybe<Scalars['String']>
    /** Index of event in block from which it was emitted. */
    indexInBlock: Scalars['Int']
    /** Network the block was produced in */
    network: Network
    /** The new membership price. */
    newPrice: Scalars['BigInt']
    /** Filtering options for interface implementers */
    type?: Maybe<EventTypeOptions>
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
  }

export type MembershipPriceUpdatedEventConnection = {
  __typename: 'MembershipPriceUpdatedEventConnection'
  edges: Array<MembershipPriceUpdatedEventEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type MembershipPriceUpdatedEventCreateInput = {
  inBlock: Scalars['Float']
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock: Scalars['Float']
  network: Network
  newPrice: Scalars['String']
}

export type MembershipPriceUpdatedEventEdge = {
  __typename: 'MembershipPriceUpdatedEventEdge'
  cursor: Scalars['String']
  node: MembershipPriceUpdatedEvent
}

export enum MembershipPriceUpdatedEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  NewPriceAsc = 'newPrice_ASC',
  NewPriceDesc = 'newPrice_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type MembershipPriceUpdatedEventUpdateInput = {
  inBlock?: InputMaybe<Scalars['Float']>
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock?: InputMaybe<Scalars['Float']>
  network?: InputMaybe<Network>
  newPrice?: InputMaybe<Scalars['String']>
}

export type MembershipPriceUpdatedEventWhereInput = {
  AND?: InputMaybe<Array<MembershipPriceUpdatedEventWhereInput>>
  OR?: InputMaybe<Array<MembershipPriceUpdatedEventWhereInput>>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  inBlock_eq?: InputMaybe<Scalars['Int']>
  inBlock_gt?: InputMaybe<Scalars['Int']>
  inBlock_gte?: InputMaybe<Scalars['Int']>
  inBlock_in?: InputMaybe<Array<Scalars['Int']>>
  inBlock_lt?: InputMaybe<Scalars['Int']>
  inBlock_lte?: InputMaybe<Scalars['Int']>
  inExtrinsic_contains?: InputMaybe<Scalars['String']>
  inExtrinsic_endsWith?: InputMaybe<Scalars['String']>
  inExtrinsic_eq?: InputMaybe<Scalars['String']>
  inExtrinsic_in?: InputMaybe<Array<Scalars['String']>>
  inExtrinsic_startsWith?: InputMaybe<Scalars['String']>
  indexInBlock_eq?: InputMaybe<Scalars['Int']>
  indexInBlock_gt?: InputMaybe<Scalars['Int']>
  indexInBlock_gte?: InputMaybe<Scalars['Int']>
  indexInBlock_in?: InputMaybe<Array<Scalars['Int']>>
  indexInBlock_lt?: InputMaybe<Scalars['Int']>
  indexInBlock_lte?: InputMaybe<Scalars['Int']>
  network_eq?: InputMaybe<Network>
  network_in?: InputMaybe<Array<Network>>
  newPrice_eq?: InputMaybe<Scalars['BigInt']>
  newPrice_gt?: InputMaybe<Scalars['BigInt']>
  newPrice_gte?: InputMaybe<Scalars['BigInt']>
  newPrice_in?: InputMaybe<Array<Scalars['BigInt']>>
  newPrice_lt?: InputMaybe<Scalars['BigInt']>
  newPrice_lte?: InputMaybe<Scalars['BigInt']>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
}

export type MembershipPriceUpdatedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type MembershipSystemSnapshot = BaseGraphQlObject & {
  __typename: 'MembershipSystemSnapshot'
  createdAt: Scalars['DateTime']
  createdById: Scalars['String']
  /** Initial invitation count of a new member. */
  defaultInviteCount: Scalars['Int']
  deletedAt?: Maybe<Scalars['DateTime']>
  deletedById?: Maybe<Scalars['String']>
  id: Scalars['ID']
  /** The initial, locked, balance credited to controller account of invitee. */
  invitedInitialBalance: Scalars['BigInt']
  /** Current price to buy a membership. */
  membershipPrice: Scalars['BigInt']
  /** Percentage of tokens diverted to invitor. */
  referralCut: Scalars['Int']
  /** The snapshot block number */
  snapshotBlock: Scalars['Int']
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedById?: Maybe<Scalars['String']>
  version: Scalars['Int']
}

export type MembershipSystemSnapshotConnection = {
  __typename: 'MembershipSystemSnapshotConnection'
  edges: Array<MembershipSystemSnapshotEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type MembershipSystemSnapshotCreateInput = {
  defaultInviteCount: Scalars['Float']
  invitedInitialBalance: Scalars['String']
  membershipPrice: Scalars['String']
  referralCut: Scalars['Float']
  snapshotBlock: Scalars['Float']
}

export type MembershipSystemSnapshotEdge = {
  __typename: 'MembershipSystemSnapshotEdge'
  cursor: Scalars['String']
  node: MembershipSystemSnapshot
}

export enum MembershipSystemSnapshotOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DefaultInviteCountAsc = 'defaultInviteCount_ASC',
  DefaultInviteCountDesc = 'defaultInviteCount_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InvitedInitialBalanceAsc = 'invitedInitialBalance_ASC',
  InvitedInitialBalanceDesc = 'invitedInitialBalance_DESC',
  MembershipPriceAsc = 'membershipPrice_ASC',
  MembershipPriceDesc = 'membershipPrice_DESC',
  ReferralCutAsc = 'referralCut_ASC',
  ReferralCutDesc = 'referralCut_DESC',
  SnapshotBlockAsc = 'snapshotBlock_ASC',
  SnapshotBlockDesc = 'snapshotBlock_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type MembershipSystemSnapshotUpdateInput = {
  defaultInviteCount?: InputMaybe<Scalars['Float']>
  invitedInitialBalance?: InputMaybe<Scalars['String']>
  membershipPrice?: InputMaybe<Scalars['String']>
  referralCut?: InputMaybe<Scalars['Float']>
  snapshotBlock?: InputMaybe<Scalars['Float']>
}

export type MembershipSystemSnapshotWhereInput = {
  AND?: InputMaybe<Array<MembershipSystemSnapshotWhereInput>>
  OR?: InputMaybe<Array<MembershipSystemSnapshotWhereInput>>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  defaultInviteCount_eq?: InputMaybe<Scalars['Int']>
  defaultInviteCount_gt?: InputMaybe<Scalars['Int']>
  defaultInviteCount_gte?: InputMaybe<Scalars['Int']>
  defaultInviteCount_in?: InputMaybe<Array<Scalars['Int']>>
  defaultInviteCount_lt?: InputMaybe<Scalars['Int']>
  defaultInviteCount_lte?: InputMaybe<Scalars['Int']>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  invitedInitialBalance_eq?: InputMaybe<Scalars['BigInt']>
  invitedInitialBalance_gt?: InputMaybe<Scalars['BigInt']>
  invitedInitialBalance_gte?: InputMaybe<Scalars['BigInt']>
  invitedInitialBalance_in?: InputMaybe<Array<Scalars['BigInt']>>
  invitedInitialBalance_lt?: InputMaybe<Scalars['BigInt']>
  invitedInitialBalance_lte?: InputMaybe<Scalars['BigInt']>
  membershipPrice_eq?: InputMaybe<Scalars['BigInt']>
  membershipPrice_gt?: InputMaybe<Scalars['BigInt']>
  membershipPrice_gte?: InputMaybe<Scalars['BigInt']>
  membershipPrice_in?: InputMaybe<Array<Scalars['BigInt']>>
  membershipPrice_lt?: InputMaybe<Scalars['BigInt']>
  membershipPrice_lte?: InputMaybe<Scalars['BigInt']>
  referralCut_eq?: InputMaybe<Scalars['Int']>
  referralCut_gt?: InputMaybe<Scalars['Int']>
  referralCut_gte?: InputMaybe<Scalars['Int']>
  referralCut_in?: InputMaybe<Array<Scalars['Int']>>
  referralCut_lt?: InputMaybe<Scalars['Int']>
  referralCut_lte?: InputMaybe<Scalars['Int']>
  snapshotBlock_eq?: InputMaybe<Scalars['Int']>
  snapshotBlock_gt?: InputMaybe<Scalars['Int']>
  snapshotBlock_gte?: InputMaybe<Scalars['Int']>
  snapshotBlock_in?: InputMaybe<Array<Scalars['Int']>>
  snapshotBlock_lt?: InputMaybe<Scalars['Int']>
  snapshotBlock_lte?: InputMaybe<Scalars['Int']>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
}

export type MembershipSystemSnapshotWhereUniqueInput = {
  id: Scalars['ID']
}

export type MembershipUpdateInput = {
  boundAccounts?: InputMaybe<Array<Scalars['String']>>
  controllerAccount?: InputMaybe<Scalars['String']>
  entry?: InputMaybe<Scalars['JSONObject']>
  handle?: InputMaybe<Scalars['String']>
  inviteCount?: InputMaybe<Scalars['Float']>
  invitedBy?: InputMaybe<Scalars['ID']>
  isCouncilMember?: InputMaybe<Scalars['Boolean']>
  isFoundingMember?: InputMaybe<Scalars['Boolean']>
  isVerified?: InputMaybe<Scalars['Boolean']>
  metadata?: InputMaybe<Scalars['ID']>
  referredBy?: InputMaybe<Scalars['ID']>
  rootAccount?: InputMaybe<Scalars['String']>
}

export type MembershipWhereInput = {
  AND?: InputMaybe<Array<MembershipWhereInput>>
  OR?: InputMaybe<Array<MembershipWhereInput>>
  boundAccounts_containsAll?: InputMaybe<Array<Scalars['String']>>
  boundAccounts_containsAny?: InputMaybe<Array<Scalars['String']>>
  boundAccounts_containsNone?: InputMaybe<Array<Scalars['String']>>
  bountycontributioncontributor_every?: InputMaybe<BountyContributionWhereInput>
  bountycontributioncontributor_none?: InputMaybe<BountyContributionWhereInput>
  bountycontributioncontributor_some?: InputMaybe<BountyContributionWhereInput>
  bountycreator_every?: InputMaybe<BountyWhereInput>
  bountycreator_none?: InputMaybe<BountyWhereInput>
  bountycreator_some?: InputMaybe<BountyWhereInput>
  bountyentryworker_every?: InputMaybe<BountyEntryWhereInput>
  bountyentryworker_none?: InputMaybe<BountyEntryWhereInput>
  bountyentryworker_some?: InputMaybe<BountyEntryWhereInput>
  bountyoracle_every?: InputMaybe<BountyWhereInput>
  bountyoracle_none?: InputMaybe<BountyWhereInput>
  bountyoracle_some?: InputMaybe<BountyWhereInput>
  channels_every?: InputMaybe<ChannelWhereInput>
  channels_none?: InputMaybe<ChannelWhereInput>
  channels_some?: InputMaybe<ChannelWhereInput>
  controllerAccount_contains?: InputMaybe<Scalars['String']>
  controllerAccount_endsWith?: InputMaybe<Scalars['String']>
  controllerAccount_eq?: InputMaybe<Scalars['String']>
  controllerAccount_in?: InputMaybe<Array<Scalars['String']>>
  controllerAccount_startsWith?: InputMaybe<Scalars['String']>
  councilCandidacies_every?: InputMaybe<CandidateWhereInput>
  councilCandidacies_none?: InputMaybe<CandidateWhereInput>
  councilCandidacies_some?: InputMaybe<CandidateWhereInput>
  councilMembers_every?: InputMaybe<CouncilMemberWhereInput>
  councilMembers_none?: InputMaybe<CouncilMemberWhereInput>
  councilMembers_some?: InputMaybe<CouncilMemberWhereInput>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  entry_json?: InputMaybe<Scalars['JSONObject']>
  forumpostauthor_every?: InputMaybe<ForumPostWhereInput>
  forumpostauthor_none?: InputMaybe<ForumPostWhereInput>
  forumpostauthor_some?: InputMaybe<ForumPostWhereInput>
  forumpostreactionmember_every?: InputMaybe<ForumPostReactionWhereInput>
  forumpostreactionmember_none?: InputMaybe<ForumPostReactionWhereInput>
  forumpostreactionmember_some?: InputMaybe<ForumPostReactionWhereInput>
  forumthreadauthor_every?: InputMaybe<ForumThreadWhereInput>
  forumthreadauthor_none?: InputMaybe<ForumThreadWhereInput>
  forumthreadauthor_some?: InputMaybe<ForumThreadWhereInput>
  handle_contains?: InputMaybe<Scalars['String']>
  handle_endsWith?: InputMaybe<Scalars['String']>
  handle_eq?: InputMaybe<Scalars['String']>
  handle_in?: InputMaybe<Array<Scalars['String']>>
  handle_startsWith?: InputMaybe<Scalars['String']>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  inviteCount_eq?: InputMaybe<Scalars['Int']>
  inviteCount_gt?: InputMaybe<Scalars['Int']>
  inviteCount_gte?: InputMaybe<Scalars['Int']>
  inviteCount_in?: InputMaybe<Array<Scalars['Int']>>
  inviteCount_lt?: InputMaybe<Scalars['Int']>
  inviteCount_lte?: InputMaybe<Scalars['Int']>
  invitedBy?: InputMaybe<MembershipWhereInput>
  invitees_every?: InputMaybe<MembershipWhereInput>
  invitees_none?: InputMaybe<MembershipWhereInput>
  invitees_some?: InputMaybe<MembershipWhereInput>
  invitestransferredeventsourceMember_every?: InputMaybe<InvitesTransferredEventWhereInput>
  invitestransferredeventsourceMember_none?: InputMaybe<InvitesTransferredEventWhereInput>
  invitestransferredeventsourceMember_some?: InputMaybe<InvitesTransferredEventWhereInput>
  invitestransferredeventtargetMember_every?: InputMaybe<InvitesTransferredEventWhereInput>
  invitestransferredeventtargetMember_none?: InputMaybe<InvitesTransferredEventWhereInput>
  invitestransferredeventtargetMember_some?: InputMaybe<InvitesTransferredEventWhereInput>
  isCouncilMember_eq?: InputMaybe<Scalars['Boolean']>
  isCouncilMember_in?: InputMaybe<Array<Scalars['Boolean']>>
  isFoundingMember_eq?: InputMaybe<Scalars['Boolean']>
  isFoundingMember_in?: InputMaybe<Array<Scalars['Boolean']>>
  isVerified_eq?: InputMaybe<Scalars['Boolean']>
  isVerified_in?: InputMaybe<Array<Scalars['Boolean']>>
  memberaccountsupdatedeventmember_every?: InputMaybe<MemberAccountsUpdatedEventWhereInput>
  memberaccountsupdatedeventmember_none?: InputMaybe<MemberAccountsUpdatedEventWhereInput>
  memberaccountsupdatedeventmember_some?: InputMaybe<MemberAccountsUpdatedEventWhereInput>
  memberinvitedeventinvitingMember_every?: InputMaybe<MemberInvitedEventWhereInput>
  memberinvitedeventinvitingMember_none?: InputMaybe<MemberInvitedEventWhereInput>
  memberinvitedeventinvitingMember_some?: InputMaybe<MemberInvitedEventWhereInput>
  memberinvitedeventnewMember_every?: InputMaybe<MemberInvitedEventWhereInput>
  memberinvitedeventnewMember_none?: InputMaybe<MemberInvitedEventWhereInput>
  memberinvitedeventnewMember_some?: InputMaybe<MemberInvitedEventWhereInput>
  memberprofileupdatedeventmember_every?: InputMaybe<MemberProfileUpdatedEventWhereInput>
  memberprofileupdatedeventmember_none?: InputMaybe<MemberProfileUpdatedEventWhereInput>
  memberprofileupdatedeventmember_some?: InputMaybe<MemberProfileUpdatedEventWhereInput>
  membershipboughteventnewMember_every?: InputMaybe<MembershipBoughtEventWhereInput>
  membershipboughteventnewMember_none?: InputMaybe<MembershipBoughtEventWhereInput>
  membershipboughteventnewMember_some?: InputMaybe<MembershipBoughtEventWhereInput>
  membershipboughteventreferrer_every?: InputMaybe<MembershipBoughtEventWhereInput>
  membershipboughteventreferrer_none?: InputMaybe<MembershipBoughtEventWhereInput>
  membershipboughteventreferrer_some?: InputMaybe<MembershipBoughtEventWhereInput>
  memberverificationstatusupdatedeventmember_every?: InputMaybe<MemberVerificationStatusUpdatedEventWhereInput>
  memberverificationstatusupdatedeventmember_none?: InputMaybe<MemberVerificationStatusUpdatedEventWhereInput>
  memberverificationstatusupdatedeventmember_some?: InputMaybe<MemberVerificationStatusUpdatedEventWhereInput>
  metadata?: InputMaybe<MemberMetadataWhereInput>
  postdeletedeventactor_every?: InputMaybe<PostDeletedEventWhereInput>
  postdeletedeventactor_none?: InputMaybe<PostDeletedEventWhereInput>
  postdeletedeventactor_some?: InputMaybe<PostDeletedEventWhereInput>
  postreactedeventreactingMember_every?: InputMaybe<PostReactedEventWhereInput>
  postreactedeventreactingMember_none?: InputMaybe<PostReactedEventWhereInput>
  postreactedeventreactingMember_some?: InputMaybe<PostReactedEventWhereInput>
  proposalcreator_every?: InputMaybe<ProposalWhereInput>
  proposalcreator_none?: InputMaybe<ProposalWhereInput>
  proposalcreator_some?: InputMaybe<ProposalWhereInput>
  proposaldiscussionpostauthor_every?: InputMaybe<ProposalDiscussionPostWhereInput>
  proposaldiscussionpostauthor_none?: InputMaybe<ProposalDiscussionPostWhereInput>
  proposaldiscussionpostauthor_some?: InputMaybe<ProposalDiscussionPostWhereInput>
  proposaldiscussionpostdeletedeventactor_every?: InputMaybe<ProposalDiscussionPostDeletedEventWhereInput>
  proposaldiscussionpostdeletedeventactor_none?: InputMaybe<ProposalDiscussionPostDeletedEventWhereInput>
  proposaldiscussionpostdeletedeventactor_some?: InputMaybe<ProposalDiscussionPostDeletedEventWhereInput>
  proposaldiscussionthreadmodechangedeventactor_every?: InputMaybe<ProposalDiscussionThreadModeChangedEventWhereInput>
  proposaldiscussionthreadmodechangedeventactor_none?: InputMaybe<ProposalDiscussionThreadModeChangedEventWhereInput>
  proposaldiscussionthreadmodechangedeventactor_some?: InputMaybe<ProposalDiscussionThreadModeChangedEventWhereInput>
  proposalvotedeventvoter_every?: InputMaybe<ProposalVotedEventWhereInput>
  proposalvotedeventvoter_none?: InputMaybe<ProposalVotedEventWhereInput>
  proposalvotedeventvoter_some?: InputMaybe<ProposalVotedEventWhereInput>
  referredBy?: InputMaybe<MembershipWhereInput>
  referredMembers_every?: InputMaybe<MembershipWhereInput>
  referredMembers_none?: InputMaybe<MembershipWhereInput>
  referredMembers_some?: InputMaybe<MembershipWhereInput>
  roles_every?: InputMaybe<WorkerWhereInput>
  roles_none?: InputMaybe<WorkerWhereInput>
  roles_some?: InputMaybe<WorkerWhereInput>
  rootAccount_contains?: InputMaybe<Scalars['String']>
  rootAccount_endsWith?: InputMaybe<Scalars['String']>
  rootAccount_eq?: InputMaybe<Scalars['String']>
  rootAccount_in?: InputMaybe<Array<Scalars['String']>>
  rootAccount_startsWith?: InputMaybe<Scalars['String']>
  stakingaccountaddedeventmember_every?: InputMaybe<StakingAccountAddedEventWhereInput>
  stakingaccountaddedeventmember_none?: InputMaybe<StakingAccountAddedEventWhereInput>
  stakingaccountaddedeventmember_some?: InputMaybe<StakingAccountAddedEventWhereInput>
  stakingaccountconfirmedeventmember_every?: InputMaybe<StakingAccountConfirmedEventWhereInput>
  stakingaccountconfirmedeventmember_none?: InputMaybe<StakingAccountConfirmedEventWhereInput>
  stakingaccountconfirmedeventmember_some?: InputMaybe<StakingAccountConfirmedEventWhereInput>
  stakingaccountremovedeventmember_every?: InputMaybe<StakingAccountRemovedEventWhereInput>
  stakingaccountremovedeventmember_none?: InputMaybe<StakingAccountRemovedEventWhereInput>
  stakingaccountremovedeventmember_some?: InputMaybe<StakingAccountRemovedEventWhereInput>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
  voteonpolleventvotingMember_every?: InputMaybe<VoteOnPollEventWhereInput>
  voteonpolleventvotingMember_none?: InputMaybe<VoteOnPollEventWhereInput>
  voteonpolleventvotingMember_some?: InputMaybe<VoteOnPollEventWhereInput>
  whitelistedIn_every?: InputMaybe<ProposalDiscussionWhitelistWhereInput>
  whitelistedIn_none?: InputMaybe<ProposalDiscussionWhitelistWhereInput>
  whitelistedIn_some?: InputMaybe<ProposalDiscussionWhitelistWhereInput>
  workinggroupapplicationapplicant_every?: InputMaybe<WorkingGroupApplicationWhereInput>
  workinggroupapplicationapplicant_none?: InputMaybe<WorkingGroupApplicationWhereInput>
  workinggroupapplicationapplicant_some?: InputMaybe<WorkingGroupApplicationWhereInput>
}

export type MembershipWhereUniqueInput = {
  handle?: InputMaybe<Scalars['String']>
  id?: InputMaybe<Scalars['ID']>
}

export enum Network {
  Alexandria = 'ALEXANDRIA',
  Babylon = 'BABYLON',
  Olympia = 'OLYMPIA',
  Rome = 'ROME',
}

export type NewCandidateEvent = BaseGraphQlObject &
  Event & {
    __typename: 'NewCandidateEvent'
    /** Amount of currency to be staked for the candidacy. */
    balance: Scalars['BigInt']
    candidate: Candidate
    candidateId: Scalars['String']
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    id: Scalars['ID']
    /** Blocknumber of the block in which the event was emitted. */
    inBlock: Scalars['Int']
    /** Hash of the extrinsic which caused the event to be emitted */
    inExtrinsic?: Maybe<Scalars['String']>
    /** Index of event in block from which it was emitted. */
    indexInBlock: Scalars['Int']
    /** Network the block was produced in */
    network: Network
    /** Candidate's account that will be recieving rewards if candidate's elected. */
    rewardAccount: Scalars['String']
    /** Candidate's account used to stake currency. */
    stakingAccount: Scalars['String']
    /** Filtering options for interface implementers */
    type?: Maybe<EventTypeOptions>
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
  }

export type NewCandidateEventConnection = {
  __typename: 'NewCandidateEventConnection'
  edges: Array<NewCandidateEventEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type NewCandidateEventCreateInput = {
  balance: Scalars['String']
  candidate: Scalars['ID']
  inBlock: Scalars['Float']
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock: Scalars['Float']
  network: Network
  rewardAccount: Scalars['String']
  stakingAccount: Scalars['String']
}

export type NewCandidateEventEdge = {
  __typename: 'NewCandidateEventEdge'
  cursor: Scalars['String']
  node: NewCandidateEvent
}

export enum NewCandidateEventOrderByInput {
  BalanceAsc = 'balance_ASC',
  BalanceDesc = 'balance_DESC',
  CandidateAsc = 'candidate_ASC',
  CandidateDesc = 'candidate_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  RewardAccountAsc = 'rewardAccount_ASC',
  RewardAccountDesc = 'rewardAccount_DESC',
  StakingAccountAsc = 'stakingAccount_ASC',
  StakingAccountDesc = 'stakingAccount_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type NewCandidateEventUpdateInput = {
  balance?: InputMaybe<Scalars['String']>
  candidate?: InputMaybe<Scalars['ID']>
  inBlock?: InputMaybe<Scalars['Float']>
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock?: InputMaybe<Scalars['Float']>
  network?: InputMaybe<Network>
  rewardAccount?: InputMaybe<Scalars['String']>
  stakingAccount?: InputMaybe<Scalars['String']>
}

export type NewCandidateEventWhereInput = {
  AND?: InputMaybe<Array<NewCandidateEventWhereInput>>
  OR?: InputMaybe<Array<NewCandidateEventWhereInput>>
  balance_eq?: InputMaybe<Scalars['BigInt']>
  balance_gt?: InputMaybe<Scalars['BigInt']>
  balance_gte?: InputMaybe<Scalars['BigInt']>
  balance_in?: InputMaybe<Array<Scalars['BigInt']>>
  balance_lt?: InputMaybe<Scalars['BigInt']>
  balance_lte?: InputMaybe<Scalars['BigInt']>
  candidate?: InputMaybe<CandidateWhereInput>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  inBlock_eq?: InputMaybe<Scalars['Int']>
  inBlock_gt?: InputMaybe<Scalars['Int']>
  inBlock_gte?: InputMaybe<Scalars['Int']>
  inBlock_in?: InputMaybe<Array<Scalars['Int']>>
  inBlock_lt?: InputMaybe<Scalars['Int']>
  inBlock_lte?: InputMaybe<Scalars['Int']>
  inExtrinsic_contains?: InputMaybe<Scalars['String']>
  inExtrinsic_endsWith?: InputMaybe<Scalars['String']>
  inExtrinsic_eq?: InputMaybe<Scalars['String']>
  inExtrinsic_in?: InputMaybe<Array<Scalars['String']>>
  inExtrinsic_startsWith?: InputMaybe<Scalars['String']>
  indexInBlock_eq?: InputMaybe<Scalars['Int']>
  indexInBlock_gt?: InputMaybe<Scalars['Int']>
  indexInBlock_gte?: InputMaybe<Scalars['Int']>
  indexInBlock_in?: InputMaybe<Array<Scalars['Int']>>
  indexInBlock_lt?: InputMaybe<Scalars['Int']>
  indexInBlock_lte?: InputMaybe<Scalars['Int']>
  network_eq?: InputMaybe<Network>
  network_in?: InputMaybe<Array<Network>>
  rewardAccount_contains?: InputMaybe<Scalars['String']>
  rewardAccount_endsWith?: InputMaybe<Scalars['String']>
  rewardAccount_eq?: InputMaybe<Scalars['String']>
  rewardAccount_in?: InputMaybe<Array<Scalars['String']>>
  rewardAccount_startsWith?: InputMaybe<Scalars['String']>
  stakingAccount_contains?: InputMaybe<Scalars['String']>
  stakingAccount_endsWith?: InputMaybe<Scalars['String']>
  stakingAccount_eq?: InputMaybe<Scalars['String']>
  stakingAccount_in?: InputMaybe<Array<Scalars['String']>>
  stakingAccount_startsWith?: InputMaybe<Scalars['String']>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
}

export type NewCandidateEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type NewCouncilElectedEvent = BaseGraphQlObject &
  Event & {
    __typename: 'NewCouncilElectedEvent'
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    electedCouncil: ElectedCouncil
    electedCouncilId: Scalars['String']
    id: Scalars['ID']
    /** Blocknumber of the block in which the event was emitted. */
    inBlock: Scalars['Int']
    /** Hash of the extrinsic which caused the event to be emitted */
    inExtrinsic?: Maybe<Scalars['String']>
    /** Index of event in block from which it was emitted. */
    indexInBlock: Scalars['Int']
    /** Network the block was produced in */
    network: Network
    /** Filtering options for interface implementers */
    type?: Maybe<EventTypeOptions>
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
  }

export type NewCouncilElectedEventConnection = {
  __typename: 'NewCouncilElectedEventConnection'
  edges: Array<NewCouncilElectedEventEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type NewCouncilElectedEventCreateInput = {
  electedCouncil: Scalars['ID']
  inBlock: Scalars['Float']
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock: Scalars['Float']
  network: Network
}

export type NewCouncilElectedEventEdge = {
  __typename: 'NewCouncilElectedEventEdge'
  cursor: Scalars['String']
  node: NewCouncilElectedEvent
}

export enum NewCouncilElectedEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  ElectedCouncilAsc = 'electedCouncil_ASC',
  ElectedCouncilDesc = 'electedCouncil_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type NewCouncilElectedEventUpdateInput = {
  electedCouncil?: InputMaybe<Scalars['ID']>
  inBlock?: InputMaybe<Scalars['Float']>
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock?: InputMaybe<Scalars['Float']>
  network?: InputMaybe<Network>
}

export type NewCouncilElectedEventWhereInput = {
  AND?: InputMaybe<Array<NewCouncilElectedEventWhereInput>>
  OR?: InputMaybe<Array<NewCouncilElectedEventWhereInput>>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  electedCouncil?: InputMaybe<ElectedCouncilWhereInput>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  inBlock_eq?: InputMaybe<Scalars['Int']>
  inBlock_gt?: InputMaybe<Scalars['Int']>
  inBlock_gte?: InputMaybe<Scalars['Int']>
  inBlock_in?: InputMaybe<Array<Scalars['Int']>>
  inBlock_lt?: InputMaybe<Scalars['Int']>
  inBlock_lte?: InputMaybe<Scalars['Int']>
  inExtrinsic_contains?: InputMaybe<Scalars['String']>
  inExtrinsic_endsWith?: InputMaybe<Scalars['String']>
  inExtrinsic_eq?: InputMaybe<Scalars['String']>
  inExtrinsic_in?: InputMaybe<Array<Scalars['String']>>
  inExtrinsic_startsWith?: InputMaybe<Scalars['String']>
  indexInBlock_eq?: InputMaybe<Scalars['Int']>
  indexInBlock_gt?: InputMaybe<Scalars['Int']>
  indexInBlock_gte?: InputMaybe<Scalars['Int']>
  indexInBlock_in?: InputMaybe<Array<Scalars['Int']>>
  indexInBlock_lt?: InputMaybe<Scalars['Int']>
  indexInBlock_lte?: InputMaybe<Scalars['Int']>
  network_eq?: InputMaybe<Network>
  network_in?: InputMaybe<Array<Network>>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
}

export type NewCouncilElectedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type NewCouncilNotElectedEvent = BaseGraphQlObject &
  Event & {
    __typename: 'NewCouncilNotElectedEvent'
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    id: Scalars['ID']
    /** Blocknumber of the block in which the event was emitted. */
    inBlock: Scalars['Int']
    /** Hash of the extrinsic which caused the event to be emitted */
    inExtrinsic?: Maybe<Scalars['String']>
    /** Index of event in block from which it was emitted. */
    indexInBlock: Scalars['Int']
    /** Network the block was produced in */
    network: Network
    /** Filtering options for interface implementers */
    type?: Maybe<EventTypeOptions>
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
  }

export type NewCouncilNotElectedEventConnection = {
  __typename: 'NewCouncilNotElectedEventConnection'
  edges: Array<NewCouncilNotElectedEventEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type NewCouncilNotElectedEventCreateInput = {
  inBlock: Scalars['Float']
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock: Scalars['Float']
  network: Network
}

export type NewCouncilNotElectedEventEdge = {
  __typename: 'NewCouncilNotElectedEventEdge'
  cursor: Scalars['String']
  node: NewCouncilNotElectedEvent
}

export enum NewCouncilNotElectedEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type NewCouncilNotElectedEventUpdateInput = {
  inBlock?: InputMaybe<Scalars['Float']>
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock?: InputMaybe<Scalars['Float']>
  network?: InputMaybe<Network>
}

export type NewCouncilNotElectedEventWhereInput = {
  AND?: InputMaybe<Array<NewCouncilNotElectedEventWhereInput>>
  OR?: InputMaybe<Array<NewCouncilNotElectedEventWhereInput>>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  inBlock_eq?: InputMaybe<Scalars['Int']>
  inBlock_gt?: InputMaybe<Scalars['Int']>
  inBlock_gte?: InputMaybe<Scalars['Int']>
  inBlock_in?: InputMaybe<Array<Scalars['Int']>>
  inBlock_lt?: InputMaybe<Scalars['Int']>
  inBlock_lte?: InputMaybe<Scalars['Int']>
  inExtrinsic_contains?: InputMaybe<Scalars['String']>
  inExtrinsic_endsWith?: InputMaybe<Scalars['String']>
  inExtrinsic_eq?: InputMaybe<Scalars['String']>
  inExtrinsic_in?: InputMaybe<Array<Scalars['String']>>
  inExtrinsic_startsWith?: InputMaybe<Scalars['String']>
  indexInBlock_eq?: InputMaybe<Scalars['Int']>
  indexInBlock_gt?: InputMaybe<Scalars['Int']>
  indexInBlock_gte?: InputMaybe<Scalars['Int']>
  indexInBlock_in?: InputMaybe<Array<Scalars['Int']>>
  indexInBlock_lt?: InputMaybe<Scalars['Int']>
  indexInBlock_lte?: InputMaybe<Scalars['Int']>
  network_eq?: InputMaybe<Network>
  network_in?: InputMaybe<Array<Network>>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
}

export type NewCouncilNotElectedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type NewMissedRewardLevelReachedEvent = BaseGraphQlObject &
  Event & {
    __typename: 'NewMissedRewardLevelReachedEvent'
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    group: WorkingGroup
    groupId: Scalars['String']
    id: Scalars['ID']
    /** Blocknumber of the block in which the event was emitted. */
    inBlock: Scalars['Int']
    /** Hash of the extrinsic which caused the event to be emitted */
    inExtrinsic?: Maybe<Scalars['String']>
    /** Index of event in block from which it was emitted. */
    indexInBlock: Scalars['Int']
    /** Network the block was produced in */
    network: Network
    /** New missed reward amount */
    newMissedRewardAmount: Scalars['BigInt']
    /** Filtering options for interface implementers */
    type?: Maybe<EventTypeOptions>
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
    worker: Worker
    workerId: Scalars['String']
  }

export type NewMissedRewardLevelReachedEventConnection = {
  __typename: 'NewMissedRewardLevelReachedEventConnection'
  edges: Array<NewMissedRewardLevelReachedEventEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type NewMissedRewardLevelReachedEventCreateInput = {
  group: Scalars['ID']
  inBlock: Scalars['Float']
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock: Scalars['Float']
  network: Network
  newMissedRewardAmount: Scalars['String']
  worker: Scalars['ID']
}

export type NewMissedRewardLevelReachedEventEdge = {
  __typename: 'NewMissedRewardLevelReachedEventEdge'
  cursor: Scalars['String']
  node: NewMissedRewardLevelReachedEvent
}

export enum NewMissedRewardLevelReachedEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  GroupAsc = 'group_ASC',
  GroupDesc = 'group_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  NewMissedRewardAmountAsc = 'newMissedRewardAmount_ASC',
  NewMissedRewardAmountDesc = 'newMissedRewardAmount_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WorkerAsc = 'worker_ASC',
  WorkerDesc = 'worker_DESC',
}

export type NewMissedRewardLevelReachedEventUpdateInput = {
  group?: InputMaybe<Scalars['ID']>
  inBlock?: InputMaybe<Scalars['Float']>
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock?: InputMaybe<Scalars['Float']>
  network?: InputMaybe<Network>
  newMissedRewardAmount?: InputMaybe<Scalars['String']>
  worker?: InputMaybe<Scalars['ID']>
}

export type NewMissedRewardLevelReachedEventWhereInput = {
  AND?: InputMaybe<Array<NewMissedRewardLevelReachedEventWhereInput>>
  OR?: InputMaybe<Array<NewMissedRewardLevelReachedEventWhereInput>>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  group?: InputMaybe<WorkingGroupWhereInput>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  inBlock_eq?: InputMaybe<Scalars['Int']>
  inBlock_gt?: InputMaybe<Scalars['Int']>
  inBlock_gte?: InputMaybe<Scalars['Int']>
  inBlock_in?: InputMaybe<Array<Scalars['Int']>>
  inBlock_lt?: InputMaybe<Scalars['Int']>
  inBlock_lte?: InputMaybe<Scalars['Int']>
  inExtrinsic_contains?: InputMaybe<Scalars['String']>
  inExtrinsic_endsWith?: InputMaybe<Scalars['String']>
  inExtrinsic_eq?: InputMaybe<Scalars['String']>
  inExtrinsic_in?: InputMaybe<Array<Scalars['String']>>
  inExtrinsic_startsWith?: InputMaybe<Scalars['String']>
  indexInBlock_eq?: InputMaybe<Scalars['Int']>
  indexInBlock_gt?: InputMaybe<Scalars['Int']>
  indexInBlock_gte?: InputMaybe<Scalars['Int']>
  indexInBlock_in?: InputMaybe<Array<Scalars['Int']>>
  indexInBlock_lt?: InputMaybe<Scalars['Int']>
  indexInBlock_lte?: InputMaybe<Scalars['Int']>
  network_eq?: InputMaybe<Network>
  network_in?: InputMaybe<Array<Network>>
  newMissedRewardAmount_eq?: InputMaybe<Scalars['BigInt']>
  newMissedRewardAmount_gt?: InputMaybe<Scalars['BigInt']>
  newMissedRewardAmount_gte?: InputMaybe<Scalars['BigInt']>
  newMissedRewardAmount_in?: InputMaybe<Array<Scalars['BigInt']>>
  newMissedRewardAmount_lt?: InputMaybe<Scalars['BigInt']>
  newMissedRewardAmount_lte?: InputMaybe<Scalars['BigInt']>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
  worker?: InputMaybe<WorkerWhereInput>
}

export type NewMissedRewardLevelReachedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type NotEnoughCandidatesEvent = BaseGraphQlObject &
  Event & {
    __typename: 'NotEnoughCandidatesEvent'
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    id: Scalars['ID']
    /** Blocknumber of the block in which the event was emitted. */
    inBlock: Scalars['Int']
    /** Hash of the extrinsic which caused the event to be emitted */
    inExtrinsic?: Maybe<Scalars['String']>
    /** Index of event in block from which it was emitted. */
    indexInBlock: Scalars['Int']
    /** Network the block was produced in */
    network: Network
    /** Filtering options for interface implementers */
    type?: Maybe<EventTypeOptions>
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
  }

export type NotEnoughCandidatesEventConnection = {
  __typename: 'NotEnoughCandidatesEventConnection'
  edges: Array<NotEnoughCandidatesEventEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type NotEnoughCandidatesEventCreateInput = {
  inBlock: Scalars['Float']
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock: Scalars['Float']
  network: Network
}

export type NotEnoughCandidatesEventEdge = {
  __typename: 'NotEnoughCandidatesEventEdge'
  cursor: Scalars['String']
  node: NotEnoughCandidatesEvent
}

export enum NotEnoughCandidatesEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type NotEnoughCandidatesEventUpdateInput = {
  inBlock?: InputMaybe<Scalars['Float']>
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock?: InputMaybe<Scalars['Float']>
  network?: InputMaybe<Network>
}

export type NotEnoughCandidatesEventWhereInput = {
  AND?: InputMaybe<Array<NotEnoughCandidatesEventWhereInput>>
  OR?: InputMaybe<Array<NotEnoughCandidatesEventWhereInput>>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  inBlock_eq?: InputMaybe<Scalars['Int']>
  inBlock_gt?: InputMaybe<Scalars['Int']>
  inBlock_gte?: InputMaybe<Scalars['Int']>
  inBlock_in?: InputMaybe<Array<Scalars['Int']>>
  inBlock_lt?: InputMaybe<Scalars['Int']>
  inBlock_lte?: InputMaybe<Scalars['Int']>
  inExtrinsic_contains?: InputMaybe<Scalars['String']>
  inExtrinsic_endsWith?: InputMaybe<Scalars['String']>
  inExtrinsic_eq?: InputMaybe<Scalars['String']>
  inExtrinsic_in?: InputMaybe<Array<Scalars['String']>>
  inExtrinsic_startsWith?: InputMaybe<Scalars['String']>
  indexInBlock_eq?: InputMaybe<Scalars['Int']>
  indexInBlock_gt?: InputMaybe<Scalars['Int']>
  indexInBlock_gte?: InputMaybe<Scalars['Int']>
  indexInBlock_in?: InputMaybe<Array<Scalars['Int']>>
  indexInBlock_lt?: InputMaybe<Scalars['Int']>
  indexInBlock_lte?: InputMaybe<Scalars['Int']>
  network_eq?: InputMaybe<Network>
  network_in?: InputMaybe<Array<Network>>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
}

export type NotEnoughCandidatesEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type OpeningAddedEvent = BaseGraphQlObject &
  Event & {
    __typename: 'OpeningAddedEvent'
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    group: WorkingGroup
    groupId: Scalars['String']
    id: Scalars['ID']
    /** Blocknumber of the block in which the event was emitted. */
    inBlock: Scalars['Int']
    /** Hash of the extrinsic which caused the event to be emitted */
    inExtrinsic?: Maybe<Scalars['String']>
    /** Index of event in block from which it was emitted. */
    indexInBlock: Scalars['Int']
    /** Network the block was produced in */
    network: Network
    opening: WorkingGroupOpening
    openingId: Scalars['String']
    /** Filtering options for interface implementers */
    type?: Maybe<EventTypeOptions>
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
  }

export type OpeningAddedEventConnection = {
  __typename: 'OpeningAddedEventConnection'
  edges: Array<OpeningAddedEventEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type OpeningAddedEventCreateInput = {
  group: Scalars['ID']
  inBlock: Scalars['Float']
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock: Scalars['Float']
  network: Network
  opening: Scalars['ID']
}

export type OpeningAddedEventEdge = {
  __typename: 'OpeningAddedEventEdge'
  cursor: Scalars['String']
  node: OpeningAddedEvent
}

export enum OpeningAddedEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  GroupAsc = 'group_ASC',
  GroupDesc = 'group_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  OpeningAsc = 'opening_ASC',
  OpeningDesc = 'opening_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type OpeningAddedEventUpdateInput = {
  group?: InputMaybe<Scalars['ID']>
  inBlock?: InputMaybe<Scalars['Float']>
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock?: InputMaybe<Scalars['Float']>
  network?: InputMaybe<Network>
  opening?: InputMaybe<Scalars['ID']>
}

export type OpeningAddedEventWhereInput = {
  AND?: InputMaybe<Array<OpeningAddedEventWhereInput>>
  OR?: InputMaybe<Array<OpeningAddedEventWhereInput>>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  group?: InputMaybe<WorkingGroupWhereInput>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  inBlock_eq?: InputMaybe<Scalars['Int']>
  inBlock_gt?: InputMaybe<Scalars['Int']>
  inBlock_gte?: InputMaybe<Scalars['Int']>
  inBlock_in?: InputMaybe<Array<Scalars['Int']>>
  inBlock_lt?: InputMaybe<Scalars['Int']>
  inBlock_lte?: InputMaybe<Scalars['Int']>
  inExtrinsic_contains?: InputMaybe<Scalars['String']>
  inExtrinsic_endsWith?: InputMaybe<Scalars['String']>
  inExtrinsic_eq?: InputMaybe<Scalars['String']>
  inExtrinsic_in?: InputMaybe<Array<Scalars['String']>>
  inExtrinsic_startsWith?: InputMaybe<Scalars['String']>
  indexInBlock_eq?: InputMaybe<Scalars['Int']>
  indexInBlock_gt?: InputMaybe<Scalars['Int']>
  indexInBlock_gte?: InputMaybe<Scalars['Int']>
  indexInBlock_in?: InputMaybe<Array<Scalars['Int']>>
  indexInBlock_lt?: InputMaybe<Scalars['Int']>
  indexInBlock_lte?: InputMaybe<Scalars['Int']>
  network_eq?: InputMaybe<Network>
  network_in?: InputMaybe<Array<Network>>
  opening?: InputMaybe<WorkingGroupOpeningWhereInput>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
}

export type OpeningAddedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type OpeningCanceledEvent = BaseGraphQlObject &
  Event & {
    __typename: 'OpeningCanceledEvent'
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    group: WorkingGroup
    groupId: Scalars['String']
    id: Scalars['ID']
    /** Blocknumber of the block in which the event was emitted. */
    inBlock: Scalars['Int']
    /** Hash of the extrinsic which caused the event to be emitted */
    inExtrinsic?: Maybe<Scalars['String']>
    /** Index of event in block from which it was emitted. */
    indexInBlock: Scalars['Int']
    /** Network the block was produced in */
    network: Network
    opening: WorkingGroupOpening
    openingId: Scalars['String']
    /** Filtering options for interface implementers */
    type?: Maybe<EventTypeOptions>
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
  }

export type OpeningCanceledEventConnection = {
  __typename: 'OpeningCanceledEventConnection'
  edges: Array<OpeningCanceledEventEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type OpeningCanceledEventCreateInput = {
  group: Scalars['ID']
  inBlock: Scalars['Float']
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock: Scalars['Float']
  network: Network
  opening: Scalars['ID']
}

export type OpeningCanceledEventEdge = {
  __typename: 'OpeningCanceledEventEdge'
  cursor: Scalars['String']
  node: OpeningCanceledEvent
}

export enum OpeningCanceledEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  GroupAsc = 'group_ASC',
  GroupDesc = 'group_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  OpeningAsc = 'opening_ASC',
  OpeningDesc = 'opening_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type OpeningCanceledEventUpdateInput = {
  group?: InputMaybe<Scalars['ID']>
  inBlock?: InputMaybe<Scalars['Float']>
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock?: InputMaybe<Scalars['Float']>
  network?: InputMaybe<Network>
  opening?: InputMaybe<Scalars['ID']>
}

export type OpeningCanceledEventWhereInput = {
  AND?: InputMaybe<Array<OpeningCanceledEventWhereInput>>
  OR?: InputMaybe<Array<OpeningCanceledEventWhereInput>>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  group?: InputMaybe<WorkingGroupWhereInput>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  inBlock_eq?: InputMaybe<Scalars['Int']>
  inBlock_gt?: InputMaybe<Scalars['Int']>
  inBlock_gte?: InputMaybe<Scalars['Int']>
  inBlock_in?: InputMaybe<Array<Scalars['Int']>>
  inBlock_lt?: InputMaybe<Scalars['Int']>
  inBlock_lte?: InputMaybe<Scalars['Int']>
  inExtrinsic_contains?: InputMaybe<Scalars['String']>
  inExtrinsic_endsWith?: InputMaybe<Scalars['String']>
  inExtrinsic_eq?: InputMaybe<Scalars['String']>
  inExtrinsic_in?: InputMaybe<Array<Scalars['String']>>
  inExtrinsic_startsWith?: InputMaybe<Scalars['String']>
  indexInBlock_eq?: InputMaybe<Scalars['Int']>
  indexInBlock_gt?: InputMaybe<Scalars['Int']>
  indexInBlock_gte?: InputMaybe<Scalars['Int']>
  indexInBlock_in?: InputMaybe<Array<Scalars['Int']>>
  indexInBlock_lt?: InputMaybe<Scalars['Int']>
  indexInBlock_lte?: InputMaybe<Scalars['Int']>
  network_eq?: InputMaybe<Network>
  network_in?: InputMaybe<Array<Network>>
  opening?: InputMaybe<WorkingGroupOpeningWhereInput>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
}

export type OpeningCanceledEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type OpeningFilledEvent = BaseGraphQlObject &
  Event & {
    __typename: 'OpeningFilledEvent'
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    group: WorkingGroup
    groupId: Scalars['String']
    id: Scalars['ID']
    /** Blocknumber of the block in which the event was emitted. */
    inBlock: Scalars['Int']
    /** Hash of the extrinsic which caused the event to be emitted */
    inExtrinsic?: Maybe<Scalars['String']>
    /** Index of event in block from which it was emitted. */
    indexInBlock: Scalars['Int']
    /** Network the block was produced in */
    network: Network
    opening: WorkingGroupOpening
    openingId: Scalars['String']
    /** Filtering options for interface implementers */
    type?: Maybe<EventTypeOptions>
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
    workersHired: Array<Worker>
  }

export type OpeningFilledEventConnection = {
  __typename: 'OpeningFilledEventConnection'
  edges: Array<OpeningFilledEventEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type OpeningFilledEventCreateInput = {
  group: Scalars['ID']
  inBlock: Scalars['Float']
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock: Scalars['Float']
  network: Network
  opening: Scalars['ID']
}

export type OpeningFilledEventEdge = {
  __typename: 'OpeningFilledEventEdge'
  cursor: Scalars['String']
  node: OpeningFilledEvent
}

export enum OpeningFilledEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  GroupAsc = 'group_ASC',
  GroupDesc = 'group_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  OpeningAsc = 'opening_ASC',
  OpeningDesc = 'opening_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type OpeningFilledEventUpdateInput = {
  group?: InputMaybe<Scalars['ID']>
  inBlock?: InputMaybe<Scalars['Float']>
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock?: InputMaybe<Scalars['Float']>
  network?: InputMaybe<Network>
  opening?: InputMaybe<Scalars['ID']>
}

export type OpeningFilledEventWhereInput = {
  AND?: InputMaybe<Array<OpeningFilledEventWhereInput>>
  OR?: InputMaybe<Array<OpeningFilledEventWhereInput>>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  group?: InputMaybe<WorkingGroupWhereInput>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  inBlock_eq?: InputMaybe<Scalars['Int']>
  inBlock_gt?: InputMaybe<Scalars['Int']>
  inBlock_gte?: InputMaybe<Scalars['Int']>
  inBlock_in?: InputMaybe<Array<Scalars['Int']>>
  inBlock_lt?: InputMaybe<Scalars['Int']>
  inBlock_lte?: InputMaybe<Scalars['Int']>
  inExtrinsic_contains?: InputMaybe<Scalars['String']>
  inExtrinsic_endsWith?: InputMaybe<Scalars['String']>
  inExtrinsic_eq?: InputMaybe<Scalars['String']>
  inExtrinsic_in?: InputMaybe<Array<Scalars['String']>>
  inExtrinsic_startsWith?: InputMaybe<Scalars['String']>
  indexInBlock_eq?: InputMaybe<Scalars['Int']>
  indexInBlock_gt?: InputMaybe<Scalars['Int']>
  indexInBlock_gte?: InputMaybe<Scalars['Int']>
  indexInBlock_in?: InputMaybe<Array<Scalars['Int']>>
  indexInBlock_lt?: InputMaybe<Scalars['Int']>
  indexInBlock_lte?: InputMaybe<Scalars['Int']>
  network_eq?: InputMaybe<Network>
  network_in?: InputMaybe<Array<Network>>
  opening?: InputMaybe<WorkingGroupOpeningWhereInput>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
  workersHired_every?: InputMaybe<WorkerWhereInput>
  workersHired_none?: InputMaybe<WorkerWhereInput>
  workersHired_some?: InputMaybe<WorkerWhereInput>
}

export type OpeningFilledEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type OpeningStatusCancelled = {
  __typename: 'OpeningStatusCancelled'
  /** Related event emitted on opening cancellation */
  openingCanceledEvent?: Maybe<OpeningCanceledEvent>
}

export type OpeningStatusFilled = {
  __typename: 'OpeningStatusFilled'
  /** Related event emitted after filling the opening */
  openingFilledEvent?: Maybe<OpeningFilledEvent>
}

export type OpeningStatusOpen = {
  __typename: 'OpeningStatusOpen'
  phantom?: Maybe<Scalars['Int']>
}

export type PageInfo = {
  __typename: 'PageInfo'
  endCursor?: Maybe<Scalars['String']>
  hasNextPage: Scalars['Boolean']
  hasPreviousPage: Scalars['Boolean']
  startCursor?: Maybe<Scalars['String']>
}

export type PostAddedEvent = BaseGraphQlObject &
  Event & {
    __typename: 'PostAddedEvent'
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    id: Scalars['ID']
    /** Blocknumber of the block in which the event was emitted. */
    inBlock: Scalars['Int']
    /** Hash of the extrinsic which caused the event to be emitted */
    inExtrinsic?: Maybe<Scalars['String']>
    /** Index of event in block from which it was emitted. */
    indexInBlock: Scalars['Int']
    /** Whether the added post is editable */
    isEditable?: Maybe<Scalars['Boolean']>
    /** Network the block was produced in */
    network: Network
    post: ForumPost
    postId: Scalars['String']
    /** Post's original text */
    text: Scalars['String']
    /** Filtering options for interface implementers */
    type?: Maybe<EventTypeOptions>
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
  }

export type PostAddedEventConnection = {
  __typename: 'PostAddedEventConnection'
  edges: Array<PostAddedEventEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type PostAddedEventCreateInput = {
  inBlock: Scalars['Float']
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock: Scalars['Float']
  isEditable?: InputMaybe<Scalars['Boolean']>
  network: Network
  post: Scalars['ID']
  text: Scalars['String']
}

export type PostAddedEventEdge = {
  __typename: 'PostAddedEventEdge'
  cursor: Scalars['String']
  node: PostAddedEvent
}

export enum PostAddedEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  IsEditableAsc = 'isEditable_ASC',
  IsEditableDesc = 'isEditable_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  PostAsc = 'post_ASC',
  PostDesc = 'post_DESC',
  TextAsc = 'text_ASC',
  TextDesc = 'text_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type PostAddedEventUpdateInput = {
  inBlock?: InputMaybe<Scalars['Float']>
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock?: InputMaybe<Scalars['Float']>
  isEditable?: InputMaybe<Scalars['Boolean']>
  network?: InputMaybe<Network>
  post?: InputMaybe<Scalars['ID']>
  text?: InputMaybe<Scalars['String']>
}

export type PostAddedEventWhereInput = {
  AND?: InputMaybe<Array<PostAddedEventWhereInput>>
  OR?: InputMaybe<Array<PostAddedEventWhereInput>>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  inBlock_eq?: InputMaybe<Scalars['Int']>
  inBlock_gt?: InputMaybe<Scalars['Int']>
  inBlock_gte?: InputMaybe<Scalars['Int']>
  inBlock_in?: InputMaybe<Array<Scalars['Int']>>
  inBlock_lt?: InputMaybe<Scalars['Int']>
  inBlock_lte?: InputMaybe<Scalars['Int']>
  inExtrinsic_contains?: InputMaybe<Scalars['String']>
  inExtrinsic_endsWith?: InputMaybe<Scalars['String']>
  inExtrinsic_eq?: InputMaybe<Scalars['String']>
  inExtrinsic_in?: InputMaybe<Array<Scalars['String']>>
  inExtrinsic_startsWith?: InputMaybe<Scalars['String']>
  indexInBlock_eq?: InputMaybe<Scalars['Int']>
  indexInBlock_gt?: InputMaybe<Scalars['Int']>
  indexInBlock_gte?: InputMaybe<Scalars['Int']>
  indexInBlock_in?: InputMaybe<Array<Scalars['Int']>>
  indexInBlock_lt?: InputMaybe<Scalars['Int']>
  indexInBlock_lte?: InputMaybe<Scalars['Int']>
  isEditable_eq?: InputMaybe<Scalars['Boolean']>
  isEditable_in?: InputMaybe<Array<Scalars['Boolean']>>
  network_eq?: InputMaybe<Network>
  network_in?: InputMaybe<Array<Network>>
  post?: InputMaybe<ForumPostWhereInput>
  text_contains?: InputMaybe<Scalars['String']>
  text_endsWith?: InputMaybe<Scalars['String']>
  text_eq?: InputMaybe<Scalars['String']>
  text_in?: InputMaybe<Array<Scalars['String']>>
  text_startsWith?: InputMaybe<Scalars['String']>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
}

export type PostAddedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type PostDeletedEvent = BaseGraphQlObject &
  Event & {
    __typename: 'PostDeletedEvent'
    actor: Membership
    actorId: Scalars['String']
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    id: Scalars['ID']
    /** Blocknumber of the block in which the event was emitted. */
    inBlock: Scalars['Int']
    /** Hash of the extrinsic which caused the event to be emitted */
    inExtrinsic?: Maybe<Scalars['String']>
    /** Index of event in block from which it was emitted. */
    indexInBlock: Scalars['Int']
    /** Network the block was produced in */
    network: Network
    posts: Array<ForumPost>
    /** Posts deletion rationale */
    rationale: Scalars['String']
    /** Filtering options for interface implementers */
    type?: Maybe<EventTypeOptions>
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
  }

export type PostDeletedEventConnection = {
  __typename: 'PostDeletedEventConnection'
  edges: Array<PostDeletedEventEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type PostDeletedEventCreateInput = {
  actor: Scalars['ID']
  inBlock: Scalars['Float']
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock: Scalars['Float']
  network: Network
  rationale: Scalars['String']
}

export type PostDeletedEventEdge = {
  __typename: 'PostDeletedEventEdge'
  cursor: Scalars['String']
  node: PostDeletedEvent
}

export enum PostDeletedEventOrderByInput {
  ActorAsc = 'actor_ASC',
  ActorDesc = 'actor_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  RationaleAsc = 'rationale_ASC',
  RationaleDesc = 'rationale_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type PostDeletedEventUpdateInput = {
  actor?: InputMaybe<Scalars['ID']>
  inBlock?: InputMaybe<Scalars['Float']>
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock?: InputMaybe<Scalars['Float']>
  network?: InputMaybe<Network>
  rationale?: InputMaybe<Scalars['String']>
}

export type PostDeletedEventWhereInput = {
  AND?: InputMaybe<Array<PostDeletedEventWhereInput>>
  OR?: InputMaybe<Array<PostDeletedEventWhereInput>>
  actor?: InputMaybe<MembershipWhereInput>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  inBlock_eq?: InputMaybe<Scalars['Int']>
  inBlock_gt?: InputMaybe<Scalars['Int']>
  inBlock_gte?: InputMaybe<Scalars['Int']>
  inBlock_in?: InputMaybe<Array<Scalars['Int']>>
  inBlock_lt?: InputMaybe<Scalars['Int']>
  inBlock_lte?: InputMaybe<Scalars['Int']>
  inExtrinsic_contains?: InputMaybe<Scalars['String']>
  inExtrinsic_endsWith?: InputMaybe<Scalars['String']>
  inExtrinsic_eq?: InputMaybe<Scalars['String']>
  inExtrinsic_in?: InputMaybe<Array<Scalars['String']>>
  inExtrinsic_startsWith?: InputMaybe<Scalars['String']>
  indexInBlock_eq?: InputMaybe<Scalars['Int']>
  indexInBlock_gt?: InputMaybe<Scalars['Int']>
  indexInBlock_gte?: InputMaybe<Scalars['Int']>
  indexInBlock_in?: InputMaybe<Array<Scalars['Int']>>
  indexInBlock_lt?: InputMaybe<Scalars['Int']>
  indexInBlock_lte?: InputMaybe<Scalars['Int']>
  network_eq?: InputMaybe<Network>
  network_in?: InputMaybe<Array<Network>>
  posts_every?: InputMaybe<ForumPostWhereInput>
  posts_none?: InputMaybe<ForumPostWhereInput>
  posts_some?: InputMaybe<ForumPostWhereInput>
  rationale_contains?: InputMaybe<Scalars['String']>
  rationale_endsWith?: InputMaybe<Scalars['String']>
  rationale_eq?: InputMaybe<Scalars['String']>
  rationale_in?: InputMaybe<Array<Scalars['String']>>
  rationale_startsWith?: InputMaybe<Scalars['String']>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
}

export type PostDeletedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type PostModeratedEvent = BaseGraphQlObject &
  Event & {
    __typename: 'PostModeratedEvent'
    actor: Worker
    actorId: Scalars['String']
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    id: Scalars['ID']
    /** Blocknumber of the block in which the event was emitted. */
    inBlock: Scalars['Int']
    /** Hash of the extrinsic which caused the event to be emitted */
    inExtrinsic?: Maybe<Scalars['String']>
    /** Index of event in block from which it was emitted. */
    indexInBlock: Scalars['Int']
    /** Network the block was produced in */
    network: Network
    post: ForumPost
    postId: Scalars['String']
    /** The rationale behind the moderation */
    rationale: Scalars['String']
    /** Filtering options for interface implementers */
    type?: Maybe<EventTypeOptions>
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
  }

export type PostModeratedEventConnection = {
  __typename: 'PostModeratedEventConnection'
  edges: Array<PostModeratedEventEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type PostModeratedEventCreateInput = {
  actor: Scalars['ID']
  inBlock: Scalars['Float']
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock: Scalars['Float']
  network: Network
  post: Scalars['ID']
  rationale: Scalars['String']
}

export type PostModeratedEventEdge = {
  __typename: 'PostModeratedEventEdge'
  cursor: Scalars['String']
  node: PostModeratedEvent
}

export enum PostModeratedEventOrderByInput {
  ActorAsc = 'actor_ASC',
  ActorDesc = 'actor_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  PostAsc = 'post_ASC',
  PostDesc = 'post_DESC',
  RationaleAsc = 'rationale_ASC',
  RationaleDesc = 'rationale_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type PostModeratedEventUpdateInput = {
  actor?: InputMaybe<Scalars['ID']>
  inBlock?: InputMaybe<Scalars['Float']>
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock?: InputMaybe<Scalars['Float']>
  network?: InputMaybe<Network>
  post?: InputMaybe<Scalars['ID']>
  rationale?: InputMaybe<Scalars['String']>
}

export type PostModeratedEventWhereInput = {
  AND?: InputMaybe<Array<PostModeratedEventWhereInput>>
  OR?: InputMaybe<Array<PostModeratedEventWhereInput>>
  actor?: InputMaybe<WorkerWhereInput>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  inBlock_eq?: InputMaybe<Scalars['Int']>
  inBlock_gt?: InputMaybe<Scalars['Int']>
  inBlock_gte?: InputMaybe<Scalars['Int']>
  inBlock_in?: InputMaybe<Array<Scalars['Int']>>
  inBlock_lt?: InputMaybe<Scalars['Int']>
  inBlock_lte?: InputMaybe<Scalars['Int']>
  inExtrinsic_contains?: InputMaybe<Scalars['String']>
  inExtrinsic_endsWith?: InputMaybe<Scalars['String']>
  inExtrinsic_eq?: InputMaybe<Scalars['String']>
  inExtrinsic_in?: InputMaybe<Array<Scalars['String']>>
  inExtrinsic_startsWith?: InputMaybe<Scalars['String']>
  indexInBlock_eq?: InputMaybe<Scalars['Int']>
  indexInBlock_gt?: InputMaybe<Scalars['Int']>
  indexInBlock_gte?: InputMaybe<Scalars['Int']>
  indexInBlock_in?: InputMaybe<Array<Scalars['Int']>>
  indexInBlock_lt?: InputMaybe<Scalars['Int']>
  indexInBlock_lte?: InputMaybe<Scalars['Int']>
  network_eq?: InputMaybe<Network>
  network_in?: InputMaybe<Array<Network>>
  post?: InputMaybe<ForumPostWhereInput>
  rationale_contains?: InputMaybe<Scalars['String']>
  rationale_endsWith?: InputMaybe<Scalars['String']>
  rationale_eq?: InputMaybe<Scalars['String']>
  rationale_in?: InputMaybe<Array<Scalars['String']>>
  rationale_startsWith?: InputMaybe<Scalars['String']>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
}

export type PostModeratedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type PostOrigin = PostOriginThreadInitial | PostOriginThreadReply

export type PostOriginThreadInitial = {
  __typename: 'PostOriginThreadInitial'
  /** Thread creation event */
  threadCreatedEvent?: Maybe<ThreadCreatedEvent>
}

export type PostOriginThreadReply = {
  __typename: 'PostOriginThreadReply'
  /** Related PostAdded event */
  postAddedEvent?: Maybe<PostAddedEvent>
}

export type PostReactedEvent = BaseGraphQlObject &
  Event & {
    __typename: 'PostReactedEvent'
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    id: Scalars['ID']
    /** Blocknumber of the block in which the event was emitted. */
    inBlock: Scalars['Int']
    /** Hash of the extrinsic which caused the event to be emitted */
    inExtrinsic?: Maybe<Scalars['String']>
    /** Index of event in block from which it was emitted. */
    indexInBlock: Scalars['Int']
    /** Network the block was produced in */
    network: Network
    post: ForumPost
    postId: Scalars['String']
    reactingMember: Membership
    reactingMemberId: Scalars['String']
    /**
     * The reaction result - new valid reaction, cancelation of previous reaction or
     * invalid reaction (which also cancels the previous one)
     */
    reactionResult: PostReactionResult
    /** Filtering options for interface implementers */
    type?: Maybe<EventTypeOptions>
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
  }

export type PostReactedEventConnection = {
  __typename: 'PostReactedEventConnection'
  edges: Array<PostReactedEventEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type PostReactedEventCreateInput = {
  inBlock: Scalars['Float']
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock: Scalars['Float']
  network: Network
  post: Scalars['ID']
  reactingMember: Scalars['ID']
  reactionResult: Scalars['JSONObject']
}

export type PostReactedEventEdge = {
  __typename: 'PostReactedEventEdge'
  cursor: Scalars['String']
  node: PostReactedEvent
}

export enum PostReactedEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  PostAsc = 'post_ASC',
  PostDesc = 'post_DESC',
  ReactingMemberAsc = 'reactingMember_ASC',
  ReactingMemberDesc = 'reactingMember_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type PostReactedEventUpdateInput = {
  inBlock?: InputMaybe<Scalars['Float']>
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock?: InputMaybe<Scalars['Float']>
  network?: InputMaybe<Network>
  post?: InputMaybe<Scalars['ID']>
  reactingMember?: InputMaybe<Scalars['ID']>
  reactionResult?: InputMaybe<Scalars['JSONObject']>
}

export type PostReactedEventWhereInput = {
  AND?: InputMaybe<Array<PostReactedEventWhereInput>>
  OR?: InputMaybe<Array<PostReactedEventWhereInput>>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  inBlock_eq?: InputMaybe<Scalars['Int']>
  inBlock_gt?: InputMaybe<Scalars['Int']>
  inBlock_gte?: InputMaybe<Scalars['Int']>
  inBlock_in?: InputMaybe<Array<Scalars['Int']>>
  inBlock_lt?: InputMaybe<Scalars['Int']>
  inBlock_lte?: InputMaybe<Scalars['Int']>
  inExtrinsic_contains?: InputMaybe<Scalars['String']>
  inExtrinsic_endsWith?: InputMaybe<Scalars['String']>
  inExtrinsic_eq?: InputMaybe<Scalars['String']>
  inExtrinsic_in?: InputMaybe<Array<Scalars['String']>>
  inExtrinsic_startsWith?: InputMaybe<Scalars['String']>
  indexInBlock_eq?: InputMaybe<Scalars['Int']>
  indexInBlock_gt?: InputMaybe<Scalars['Int']>
  indexInBlock_gte?: InputMaybe<Scalars['Int']>
  indexInBlock_in?: InputMaybe<Array<Scalars['Int']>>
  indexInBlock_lt?: InputMaybe<Scalars['Int']>
  indexInBlock_lte?: InputMaybe<Scalars['Int']>
  network_eq?: InputMaybe<Network>
  network_in?: InputMaybe<Array<Network>>
  post?: InputMaybe<ForumPostWhereInput>
  reactingMember?: InputMaybe<MembershipWhereInput>
  reactionResult_json?: InputMaybe<Scalars['JSONObject']>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
}

export type PostReactedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export enum PostReaction {
  Like = 'LIKE',
}

export type PostReactionResult = PostReactionResultCancel | PostReactionResultInvalid | PostReactionResultValid

export type PostReactionResultCancel = {
  __typename: 'PostReactionResultCancel'
  phantom?: Maybe<Scalars['Int']>
}

export type PostReactionResultInvalid = {
  __typename: 'PostReactionResultInvalid'
  reactionId: Scalars['Int']
}

export type PostReactionResultValid = {
  __typename: 'PostReactionResultValid'
  reaction: PostReaction
  reactionId: Scalars['Int']
}

export type PostReactionResultValidCreateInput = {
  reaction: PostReaction
}

export type PostReactionResultValidUpdateInput = {
  reaction?: InputMaybe<PostReaction>
}

export type PostReactionResultValidWhereInput = {
  AND?: InputMaybe<Array<PostReactionResultValidWhereInput>>
  OR?: InputMaybe<Array<PostReactionResultValidWhereInput>>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  reaction_eq?: InputMaybe<PostReaction>
  reaction_in?: InputMaybe<Array<PostReaction>>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
}

export type PostReactionResultValidWhereUniqueInput = {
  id: Scalars['ID']
}

export type PostStatus = PostStatusActive | PostStatusLocked | PostStatusModerated | PostStatusRemoved

export type PostStatusActive = {
  __typename: 'PostStatusActive'
  phantom?: Maybe<Scalars['Int']>
}

export type PostStatusLocked = {
  __typename: 'PostStatusLocked'
  /** Post deleted event in case the post became locked through runtime removal */
  postDeletedEvent?: Maybe<PostDeletedEvent>
}

export type PostStatusModerated = {
  __typename: 'PostStatusModerated'
  /** Event the post was moderated in */
  postModeratedEvent?: Maybe<PostModeratedEvent>
}

export type PostStatusRemoved = {
  __typename: 'PostStatusRemoved'
  /** Event the post was removed in */
  postDeletedEvent?: Maybe<PostDeletedEvent>
}

export type PostTextUpdatedEvent = BaseGraphQlObject &
  Event & {
    __typename: 'PostTextUpdatedEvent'
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    id: Scalars['ID']
    /** Blocknumber of the block in which the event was emitted. */
    inBlock: Scalars['Int']
    /** Hash of the extrinsic which caused the event to be emitted */
    inExtrinsic?: Maybe<Scalars['String']>
    /** Index of event in block from which it was emitted. */
    indexInBlock: Scalars['Int']
    /** Network the block was produced in */
    network: Network
    /** New post text */
    newText: Scalars['String']
    post: ForumPost
    postId: Scalars['String']
    /** Filtering options for interface implementers */
    type?: Maybe<EventTypeOptions>
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
  }

export type PostTextUpdatedEventConnection = {
  __typename: 'PostTextUpdatedEventConnection'
  edges: Array<PostTextUpdatedEventEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type PostTextUpdatedEventCreateInput = {
  inBlock: Scalars['Float']
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock: Scalars['Float']
  network: Network
  newText: Scalars['String']
  post: Scalars['ID']
}

export type PostTextUpdatedEventEdge = {
  __typename: 'PostTextUpdatedEventEdge'
  cursor: Scalars['String']
  node: PostTextUpdatedEvent
}

export enum PostTextUpdatedEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  NewTextAsc = 'newText_ASC',
  NewTextDesc = 'newText_DESC',
  PostAsc = 'post_ASC',
  PostDesc = 'post_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type PostTextUpdatedEventUpdateInput = {
  inBlock?: InputMaybe<Scalars['Float']>
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock?: InputMaybe<Scalars['Float']>
  network?: InputMaybe<Network>
  newText?: InputMaybe<Scalars['String']>
  post?: InputMaybe<Scalars['ID']>
}

export type PostTextUpdatedEventWhereInput = {
  AND?: InputMaybe<Array<PostTextUpdatedEventWhereInput>>
  OR?: InputMaybe<Array<PostTextUpdatedEventWhereInput>>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  inBlock_eq?: InputMaybe<Scalars['Int']>
  inBlock_gt?: InputMaybe<Scalars['Int']>
  inBlock_gte?: InputMaybe<Scalars['Int']>
  inBlock_in?: InputMaybe<Array<Scalars['Int']>>
  inBlock_lt?: InputMaybe<Scalars['Int']>
  inBlock_lte?: InputMaybe<Scalars['Int']>
  inExtrinsic_contains?: InputMaybe<Scalars['String']>
  inExtrinsic_endsWith?: InputMaybe<Scalars['String']>
  inExtrinsic_eq?: InputMaybe<Scalars['String']>
  inExtrinsic_in?: InputMaybe<Array<Scalars['String']>>
  inExtrinsic_startsWith?: InputMaybe<Scalars['String']>
  indexInBlock_eq?: InputMaybe<Scalars['Int']>
  indexInBlock_gt?: InputMaybe<Scalars['Int']>
  indexInBlock_gte?: InputMaybe<Scalars['Int']>
  indexInBlock_in?: InputMaybe<Array<Scalars['Int']>>
  indexInBlock_lt?: InputMaybe<Scalars['Int']>
  indexInBlock_lte?: InputMaybe<Scalars['Int']>
  network_eq?: InputMaybe<Network>
  network_in?: InputMaybe<Array<Network>>
  newText_contains?: InputMaybe<Scalars['String']>
  newText_endsWith?: InputMaybe<Scalars['String']>
  newText_eq?: InputMaybe<Scalars['String']>
  newText_in?: InputMaybe<Array<Scalars['String']>>
  newText_startsWith?: InputMaybe<Scalars['String']>
  post?: InputMaybe<ForumPostWhereInput>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
}

export type PostTextUpdatedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type PostsByTextFtsOutput = {
  __typename: 'PostsByTextFTSOutput'
  highlight: Scalars['String']
  isTypeOf: Scalars['String']
  item: PostsByTextSearchResult
  rank: Scalars['Float']
}

export type PostsByTextSearchResult = ForumPost

export type ProcessorState = {
  __typename: 'ProcessorState'
  chainHead: Scalars['Float']
  indexerHead: Scalars['Float']
  lastCompleteBlock: Scalars['Float']
  lastProcessedEvent: Scalars['String']
}

export type Proposal = BaseGraphQlObject & {
  __typename: 'Proposal'
  /** How many prior councils have already approved the proposal (starts with 0) */
  councilApprovals: Scalars['Int']
  createdAt: Scalars['DateTime']
  createdById: Scalars['String']
  createdInEvent: ProposalCreatedEvent
  creator: Membership
  creatorId: Scalars['String']
  deletedAt?: Maybe<Scalars['DateTime']>
  deletedById?: Maybe<Scalars['String']>
  /** Proposal description */
  description: Scalars['String']
  /** Proposal details depending on proposal type */
  details: ProposalDetails
  discussionThread: ProposalDiscussionThread
  /** Exact block number the proposal is supposed to be executed at (if specified) */
  exactExecutionBlock?: Maybe<Scalars['Int']>
  id: Scalars['ID']
  /** If true then the proposal status is final and will not change form this point */
  isFinalized?: Maybe<Scalars['Boolean']>
  proposalStatusUpdates: Array<ProposalStatusUpdatedEvent>
  proposalcancelledeventproposal?: Maybe<Array<ProposalCancelledEvent>>
  proposaldecisionmadeeventproposal?: Maybe<Array<ProposalDecisionMadeEvent>>
  proposalexecutedeventproposal?: Maybe<Array<ProposalExecutedEvent>>
  /** Staking account with proposal stake (in case a stake is required) */
  stakingAccount?: Maybe<Scalars['String']>
  /** Current proposal status */
  status: ProposalStatus
  /** Number of the block the current status was set at */
  statusSetAtBlock: Scalars['Int']
  /** Time the current status was set at (based on block timestamp) */
  statusSetAtTime: Scalars['DateTime']
  /** Proposal title */
  title: Scalars['String']
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedById?: Maybe<Scalars['String']>
  version: Scalars['Int']
  votes: Array<ProposalVotedEvent>
}

export type ProposalCancelledEvent = BaseGraphQlObject &
  Event & {
    __typename: 'ProposalCancelledEvent'
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    id: Scalars['ID']
    /** Blocknumber of the block in which the event was emitted. */
    inBlock: Scalars['Int']
    /** Hash of the extrinsic which caused the event to be emitted */
    inExtrinsic?: Maybe<Scalars['String']>
    /** Index of event in block from which it was emitted. */
    indexInBlock: Scalars['Int']
    /** Network the block was produced in */
    network: Network
    proposal: Proposal
    proposalId: Scalars['String']
    /** Filtering options for interface implementers */
    type?: Maybe<EventTypeOptions>
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
  }

export type ProposalCancelledEventConnection = {
  __typename: 'ProposalCancelledEventConnection'
  edges: Array<ProposalCancelledEventEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type ProposalCancelledEventCreateInput = {
  inBlock: Scalars['Float']
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock: Scalars['Float']
  network: Network
  proposal: Scalars['ID']
}

export type ProposalCancelledEventEdge = {
  __typename: 'ProposalCancelledEventEdge'
  cursor: Scalars['String']
  node: ProposalCancelledEvent
}

export enum ProposalCancelledEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  ProposalAsc = 'proposal_ASC',
  ProposalDesc = 'proposal_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type ProposalCancelledEventUpdateInput = {
  inBlock?: InputMaybe<Scalars['Float']>
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock?: InputMaybe<Scalars['Float']>
  network?: InputMaybe<Network>
  proposal?: InputMaybe<Scalars['ID']>
}

export type ProposalCancelledEventWhereInput = {
  AND?: InputMaybe<Array<ProposalCancelledEventWhereInput>>
  OR?: InputMaybe<Array<ProposalCancelledEventWhereInput>>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  inBlock_eq?: InputMaybe<Scalars['Int']>
  inBlock_gt?: InputMaybe<Scalars['Int']>
  inBlock_gte?: InputMaybe<Scalars['Int']>
  inBlock_in?: InputMaybe<Array<Scalars['Int']>>
  inBlock_lt?: InputMaybe<Scalars['Int']>
  inBlock_lte?: InputMaybe<Scalars['Int']>
  inExtrinsic_contains?: InputMaybe<Scalars['String']>
  inExtrinsic_endsWith?: InputMaybe<Scalars['String']>
  inExtrinsic_eq?: InputMaybe<Scalars['String']>
  inExtrinsic_in?: InputMaybe<Array<Scalars['String']>>
  inExtrinsic_startsWith?: InputMaybe<Scalars['String']>
  indexInBlock_eq?: InputMaybe<Scalars['Int']>
  indexInBlock_gt?: InputMaybe<Scalars['Int']>
  indexInBlock_gte?: InputMaybe<Scalars['Int']>
  indexInBlock_in?: InputMaybe<Array<Scalars['Int']>>
  indexInBlock_lt?: InputMaybe<Scalars['Int']>
  indexInBlock_lte?: InputMaybe<Scalars['Int']>
  network_eq?: InputMaybe<Network>
  network_in?: InputMaybe<Array<Network>>
  proposal?: InputMaybe<ProposalWhereInput>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
}

export type ProposalCancelledEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type ProposalConnection = {
  __typename: 'ProposalConnection'
  edges: Array<ProposalEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type ProposalCreateInput = {
  councilApprovals: Scalars['Float']
  creator: Scalars['ID']
  description: Scalars['String']
  details: Scalars['JSONObject']
  exactExecutionBlock?: InputMaybe<Scalars['Float']>
  isFinalized?: InputMaybe<Scalars['Boolean']>
  stakingAccount?: InputMaybe<Scalars['String']>
  status: Scalars['JSONObject']
  statusSetAtBlock: Scalars['Float']
  statusSetAtTime: Scalars['DateTime']
  title: Scalars['String']
}

export type ProposalCreatedEvent = BaseGraphQlObject &
  Event & {
    __typename: 'ProposalCreatedEvent'
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    id: Scalars['ID']
    /** Blocknumber of the block in which the event was emitted. */
    inBlock: Scalars['Int']
    /** Hash of the extrinsic which caused the event to be emitted */
    inExtrinsic?: Maybe<Scalars['String']>
    /** Index of event in block from which it was emitted. */
    indexInBlock: Scalars['Int']
    /** Network the block was produced in */
    network: Network
    proposal: Proposal
    proposalId: Scalars['String']
    /** Filtering options for interface implementers */
    type?: Maybe<EventTypeOptions>
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
  }

export type ProposalCreatedEventConnection = {
  __typename: 'ProposalCreatedEventConnection'
  edges: Array<ProposalCreatedEventEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type ProposalCreatedEventCreateInput = {
  inBlock: Scalars['Float']
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock: Scalars['Float']
  network: Network
  proposal: Scalars['ID']
}

export type ProposalCreatedEventEdge = {
  __typename: 'ProposalCreatedEventEdge'
  cursor: Scalars['String']
  node: ProposalCreatedEvent
}

export enum ProposalCreatedEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  ProposalAsc = 'proposal_ASC',
  ProposalDesc = 'proposal_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type ProposalCreatedEventUpdateInput = {
  inBlock?: InputMaybe<Scalars['Float']>
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock?: InputMaybe<Scalars['Float']>
  network?: InputMaybe<Network>
  proposal?: InputMaybe<Scalars['ID']>
}

export type ProposalCreatedEventWhereInput = {
  AND?: InputMaybe<Array<ProposalCreatedEventWhereInput>>
  OR?: InputMaybe<Array<ProposalCreatedEventWhereInput>>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  inBlock_eq?: InputMaybe<Scalars['Int']>
  inBlock_gt?: InputMaybe<Scalars['Int']>
  inBlock_gte?: InputMaybe<Scalars['Int']>
  inBlock_in?: InputMaybe<Array<Scalars['Int']>>
  inBlock_lt?: InputMaybe<Scalars['Int']>
  inBlock_lte?: InputMaybe<Scalars['Int']>
  inExtrinsic_contains?: InputMaybe<Scalars['String']>
  inExtrinsic_endsWith?: InputMaybe<Scalars['String']>
  inExtrinsic_eq?: InputMaybe<Scalars['String']>
  inExtrinsic_in?: InputMaybe<Array<Scalars['String']>>
  inExtrinsic_startsWith?: InputMaybe<Scalars['String']>
  indexInBlock_eq?: InputMaybe<Scalars['Int']>
  indexInBlock_gt?: InputMaybe<Scalars['Int']>
  indexInBlock_gte?: InputMaybe<Scalars['Int']>
  indexInBlock_in?: InputMaybe<Array<Scalars['Int']>>
  indexInBlock_lt?: InputMaybe<Scalars['Int']>
  indexInBlock_lte?: InputMaybe<Scalars['Int']>
  network_eq?: InputMaybe<Network>
  network_in?: InputMaybe<Array<Network>>
  proposal?: InputMaybe<ProposalWhereInput>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
}

export type ProposalCreatedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type ProposalDecisionMadeEvent = BaseGraphQlObject &
  Event & {
    __typename: 'ProposalDecisionMadeEvent'
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    /** The voting decision status */
    decisionStatus: ProposalDecisionStatus
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    id: Scalars['ID']
    /** Blocknumber of the block in which the event was emitted. */
    inBlock: Scalars['Int']
    /** Hash of the extrinsic which caused the event to be emitted */
    inExtrinsic?: Maybe<Scalars['String']>
    /** Index of event in block from which it was emitted. */
    indexInBlock: Scalars['Int']
    /** Network the block was produced in */
    network: Network
    proposal: Proposal
    proposalId: Scalars['String']
    /** Filtering options for interface implementers */
    type?: Maybe<EventTypeOptions>
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
  }

export type ProposalDecisionMadeEventConnection = {
  __typename: 'ProposalDecisionMadeEventConnection'
  edges: Array<ProposalDecisionMadeEventEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type ProposalDecisionMadeEventCreateInput = {
  decisionStatus: Scalars['JSONObject']
  inBlock: Scalars['Float']
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock: Scalars['Float']
  network: Network
  proposal: Scalars['ID']
}

export type ProposalDecisionMadeEventEdge = {
  __typename: 'ProposalDecisionMadeEventEdge'
  cursor: Scalars['String']
  node: ProposalDecisionMadeEvent
}

export enum ProposalDecisionMadeEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  ProposalAsc = 'proposal_ASC',
  ProposalDesc = 'proposal_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type ProposalDecisionMadeEventUpdateInput = {
  decisionStatus?: InputMaybe<Scalars['JSONObject']>
  inBlock?: InputMaybe<Scalars['Float']>
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock?: InputMaybe<Scalars['Float']>
  network?: InputMaybe<Network>
  proposal?: InputMaybe<Scalars['ID']>
}

export type ProposalDecisionMadeEventWhereInput = {
  AND?: InputMaybe<Array<ProposalDecisionMadeEventWhereInput>>
  OR?: InputMaybe<Array<ProposalDecisionMadeEventWhereInput>>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  decisionStatus_json?: InputMaybe<Scalars['JSONObject']>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  inBlock_eq?: InputMaybe<Scalars['Int']>
  inBlock_gt?: InputMaybe<Scalars['Int']>
  inBlock_gte?: InputMaybe<Scalars['Int']>
  inBlock_in?: InputMaybe<Array<Scalars['Int']>>
  inBlock_lt?: InputMaybe<Scalars['Int']>
  inBlock_lte?: InputMaybe<Scalars['Int']>
  inExtrinsic_contains?: InputMaybe<Scalars['String']>
  inExtrinsic_endsWith?: InputMaybe<Scalars['String']>
  inExtrinsic_eq?: InputMaybe<Scalars['String']>
  inExtrinsic_in?: InputMaybe<Array<Scalars['String']>>
  inExtrinsic_startsWith?: InputMaybe<Scalars['String']>
  indexInBlock_eq?: InputMaybe<Scalars['Int']>
  indexInBlock_gt?: InputMaybe<Scalars['Int']>
  indexInBlock_gte?: InputMaybe<Scalars['Int']>
  indexInBlock_in?: InputMaybe<Array<Scalars['Int']>>
  indexInBlock_lt?: InputMaybe<Scalars['Int']>
  indexInBlock_lte?: InputMaybe<Scalars['Int']>
  network_eq?: InputMaybe<Network>
  network_in?: InputMaybe<Array<Network>>
  proposal?: InputMaybe<ProposalWhereInput>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
}

export type ProposalDecisionMadeEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type ProposalDecisionStatus =
  | ProposalStatusCanceledByRuntime
  | ProposalStatusCancelled
  | ProposalStatusDormant
  | ProposalStatusExpired
  | ProposalStatusGracing
  | ProposalStatusRejected
  | ProposalStatusSlashed
  | ProposalStatusVetoed

export type ProposalDetails =
  | AmendConstitutionProposalDetails
  | CancelWorkingGroupLeadOpeningProposalDetails
  | CreateBlogPostProposalDetails
  | CreateWorkingGroupLeadOpeningProposalDetails
  | DecreaseWorkingGroupLeadStakeProposalDetails
  | EditBlogPostProposalDetails
  | FillWorkingGroupLeadOpeningProposalDetails
  | FundingRequestProposalDetails
  | LockBlogPostProposalDetails
  | RuntimeUpgradeProposalDetails
  | SetCouncilBudgetIncrementProposalDetails
  | SetCouncilorRewardProposalDetails
  | SetInitialInvitationBalanceProposalDetails
  | SetInitialInvitationCountProposalDetails
  | SetMaxValidatorCountProposalDetails
  | SetMembershipLeadInvitationQuotaProposalDetails
  | SetMembershipPriceProposalDetails
  | SetReferralCutProposalDetails
  | SetWorkingGroupLeadRewardProposalDetails
  | SignalProposalDetails
  | SlashWorkingGroupLeadProposalDetails
  | TerminateWorkingGroupLeadProposalDetails
  | UnlockBlogPostProposalDetails
  | UpdateWorkingGroupBudgetProposalDetails
  | VetoProposalDetails

export type ProposalDiscussionPost = BaseGraphQlObject & {
  __typename: 'ProposalDiscussionPost'
  author: Membership
  authorId: Scalars['String']
  createdAt: Scalars['DateTime']
  createdById: Scalars['String']
  createdInEvent: ProposalDiscussionPostCreatedEvent
  deletedAt?: Maybe<Scalars['DateTime']>
  deletedById?: Maybe<Scalars['String']>
  discussionThread: ProposalDiscussionThread
  discussionThreadId: Scalars['String']
  id: Scalars['ID']
  /** True if the post is either Active or Locked */
  isVisible: Scalars['Boolean']
  proposaldiscussionpostdeletedeventpost?: Maybe<Array<ProposalDiscussionPostDeletedEvent>>
  proposaldiscussionpostrepliesTo?: Maybe<Array<ProposalDiscussionPost>>
  repliesTo?: Maybe<ProposalDiscussionPost>
  repliesToId?: Maybe<Scalars['String']>
  /** Current post status */
  status: ProposalDiscussionPostStatus
  /** Post's md-formatted text */
  text: Scalars['String']
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedById?: Maybe<Scalars['String']>
  updates: Array<ProposalDiscussionPostUpdatedEvent>
  version: Scalars['Int']
}

export type ProposalDiscussionPostConnection = {
  __typename: 'ProposalDiscussionPostConnection'
  edges: Array<ProposalDiscussionPostEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type ProposalDiscussionPostCreateInput = {
  author: Scalars['ID']
  discussionThread: Scalars['ID']
  isVisible: Scalars['Boolean']
  repliesTo?: InputMaybe<Scalars['ID']>
  status: Scalars['JSONObject']
  text: Scalars['String']
}

export type ProposalDiscussionPostCreatedEvent = BaseGraphQlObject &
  Event & {
    __typename: 'ProposalDiscussionPostCreatedEvent'
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    id: Scalars['ID']
    /** Blocknumber of the block in which the event was emitted. */
    inBlock: Scalars['Int']
    /** Hash of the extrinsic which caused the event to be emitted */
    inExtrinsic?: Maybe<Scalars['String']>
    /** Index of event in block from which it was emitted. */
    indexInBlock: Scalars['Int']
    /** Network the block was produced in */
    network: Network
    post: ProposalDiscussionPost
    postId: Scalars['String']
    /** Initial post text */
    text: Scalars['String']
    /** Filtering options for interface implementers */
    type?: Maybe<EventTypeOptions>
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
  }

export type ProposalDiscussionPostCreatedEventConnection = {
  __typename: 'ProposalDiscussionPostCreatedEventConnection'
  edges: Array<ProposalDiscussionPostCreatedEventEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type ProposalDiscussionPostCreatedEventCreateInput = {
  inBlock: Scalars['Float']
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock: Scalars['Float']
  network: Network
  post: Scalars['ID']
  text: Scalars['String']
}

export type ProposalDiscussionPostCreatedEventEdge = {
  __typename: 'ProposalDiscussionPostCreatedEventEdge'
  cursor: Scalars['String']
  node: ProposalDiscussionPostCreatedEvent
}

export enum ProposalDiscussionPostCreatedEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  PostAsc = 'post_ASC',
  PostDesc = 'post_DESC',
  TextAsc = 'text_ASC',
  TextDesc = 'text_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type ProposalDiscussionPostCreatedEventUpdateInput = {
  inBlock?: InputMaybe<Scalars['Float']>
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock?: InputMaybe<Scalars['Float']>
  network?: InputMaybe<Network>
  post?: InputMaybe<Scalars['ID']>
  text?: InputMaybe<Scalars['String']>
}

export type ProposalDiscussionPostCreatedEventWhereInput = {
  AND?: InputMaybe<Array<ProposalDiscussionPostCreatedEventWhereInput>>
  OR?: InputMaybe<Array<ProposalDiscussionPostCreatedEventWhereInput>>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  inBlock_eq?: InputMaybe<Scalars['Int']>
  inBlock_gt?: InputMaybe<Scalars['Int']>
  inBlock_gte?: InputMaybe<Scalars['Int']>
  inBlock_in?: InputMaybe<Array<Scalars['Int']>>
  inBlock_lt?: InputMaybe<Scalars['Int']>
  inBlock_lte?: InputMaybe<Scalars['Int']>
  inExtrinsic_contains?: InputMaybe<Scalars['String']>
  inExtrinsic_endsWith?: InputMaybe<Scalars['String']>
  inExtrinsic_eq?: InputMaybe<Scalars['String']>
  inExtrinsic_in?: InputMaybe<Array<Scalars['String']>>
  inExtrinsic_startsWith?: InputMaybe<Scalars['String']>
  indexInBlock_eq?: InputMaybe<Scalars['Int']>
  indexInBlock_gt?: InputMaybe<Scalars['Int']>
  indexInBlock_gte?: InputMaybe<Scalars['Int']>
  indexInBlock_in?: InputMaybe<Array<Scalars['Int']>>
  indexInBlock_lt?: InputMaybe<Scalars['Int']>
  indexInBlock_lte?: InputMaybe<Scalars['Int']>
  network_eq?: InputMaybe<Network>
  network_in?: InputMaybe<Array<Network>>
  post?: InputMaybe<ProposalDiscussionPostWhereInput>
  text_contains?: InputMaybe<Scalars['String']>
  text_endsWith?: InputMaybe<Scalars['String']>
  text_eq?: InputMaybe<Scalars['String']>
  text_in?: InputMaybe<Array<Scalars['String']>>
  text_startsWith?: InputMaybe<Scalars['String']>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
}

export type ProposalDiscussionPostCreatedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type ProposalDiscussionPostDeletedEvent = BaseGraphQlObject &
  Event & {
    __typename: 'ProposalDiscussionPostDeletedEvent'
    actor: Membership
    actorId: Scalars['String']
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    id: Scalars['ID']
    /** Blocknumber of the block in which the event was emitted. */
    inBlock: Scalars['Int']
    /** Hash of the extrinsic which caused the event to be emitted */
    inExtrinsic?: Maybe<Scalars['String']>
    /** Index of event in block from which it was emitted. */
    indexInBlock: Scalars['Int']
    /** Network the block was produced in */
    network: Network
    post: ProposalDiscussionPost
    postId: Scalars['String']
    /** Filtering options for interface implementers */
    type?: Maybe<EventTypeOptions>
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
  }

export type ProposalDiscussionPostDeletedEventConnection = {
  __typename: 'ProposalDiscussionPostDeletedEventConnection'
  edges: Array<ProposalDiscussionPostDeletedEventEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type ProposalDiscussionPostDeletedEventCreateInput = {
  actor: Scalars['ID']
  inBlock: Scalars['Float']
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock: Scalars['Float']
  network: Network
  post: Scalars['ID']
}

export type ProposalDiscussionPostDeletedEventEdge = {
  __typename: 'ProposalDiscussionPostDeletedEventEdge'
  cursor: Scalars['String']
  node: ProposalDiscussionPostDeletedEvent
}

export enum ProposalDiscussionPostDeletedEventOrderByInput {
  ActorAsc = 'actor_ASC',
  ActorDesc = 'actor_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  PostAsc = 'post_ASC',
  PostDesc = 'post_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type ProposalDiscussionPostDeletedEventUpdateInput = {
  actor?: InputMaybe<Scalars['ID']>
  inBlock?: InputMaybe<Scalars['Float']>
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock?: InputMaybe<Scalars['Float']>
  network?: InputMaybe<Network>
  post?: InputMaybe<Scalars['ID']>
}

export type ProposalDiscussionPostDeletedEventWhereInput = {
  AND?: InputMaybe<Array<ProposalDiscussionPostDeletedEventWhereInput>>
  OR?: InputMaybe<Array<ProposalDiscussionPostDeletedEventWhereInput>>
  actor?: InputMaybe<MembershipWhereInput>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  inBlock_eq?: InputMaybe<Scalars['Int']>
  inBlock_gt?: InputMaybe<Scalars['Int']>
  inBlock_gte?: InputMaybe<Scalars['Int']>
  inBlock_in?: InputMaybe<Array<Scalars['Int']>>
  inBlock_lt?: InputMaybe<Scalars['Int']>
  inBlock_lte?: InputMaybe<Scalars['Int']>
  inExtrinsic_contains?: InputMaybe<Scalars['String']>
  inExtrinsic_endsWith?: InputMaybe<Scalars['String']>
  inExtrinsic_eq?: InputMaybe<Scalars['String']>
  inExtrinsic_in?: InputMaybe<Array<Scalars['String']>>
  inExtrinsic_startsWith?: InputMaybe<Scalars['String']>
  indexInBlock_eq?: InputMaybe<Scalars['Int']>
  indexInBlock_gt?: InputMaybe<Scalars['Int']>
  indexInBlock_gte?: InputMaybe<Scalars['Int']>
  indexInBlock_in?: InputMaybe<Array<Scalars['Int']>>
  indexInBlock_lt?: InputMaybe<Scalars['Int']>
  indexInBlock_lte?: InputMaybe<Scalars['Int']>
  network_eq?: InputMaybe<Network>
  network_in?: InputMaybe<Array<Network>>
  post?: InputMaybe<ProposalDiscussionPostWhereInput>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
}

export type ProposalDiscussionPostDeletedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type ProposalDiscussionPostEdge = {
  __typename: 'ProposalDiscussionPostEdge'
  cursor: Scalars['String']
  node: ProposalDiscussionPost
}

export enum ProposalDiscussionPostOrderByInput {
  AuthorAsc = 'author_ASC',
  AuthorDesc = 'author_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  DiscussionThreadAsc = 'discussionThread_ASC',
  DiscussionThreadDesc = 'discussionThread_DESC',
  IsVisibleAsc = 'isVisible_ASC',
  IsVisibleDesc = 'isVisible_DESC',
  RepliesToAsc = 'repliesTo_ASC',
  RepliesToDesc = 'repliesTo_DESC',
  TextAsc = 'text_ASC',
  TextDesc = 'text_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type ProposalDiscussionPostStatus =
  | ProposalDiscussionPostStatusActive
  | ProposalDiscussionPostStatusLocked
  | ProposalDiscussionPostStatusRemoved

export type ProposalDiscussionPostStatusActive = {
  __typename: 'ProposalDiscussionPostStatusActive'
  phantom?: Maybe<Scalars['Int']>
}

export type ProposalDiscussionPostStatusLocked = {
  __typename: 'ProposalDiscussionPostStatusLocked'
  /** ProposalDiscussionPostDeletedEvent in case the post became locked through runtime removal */
  deletedInEvent?: Maybe<ProposalDiscussionPostDeletedEvent>
}

export type ProposalDiscussionPostStatusRemoved = {
  __typename: 'ProposalDiscussionPostStatusRemoved'
  /** The event the post was removed in */
  deletedInEvent?: Maybe<ProposalDiscussionPostDeletedEvent>
}

export type ProposalDiscussionPostUpdateInput = {
  author?: InputMaybe<Scalars['ID']>
  discussionThread?: InputMaybe<Scalars['ID']>
  isVisible?: InputMaybe<Scalars['Boolean']>
  repliesTo?: InputMaybe<Scalars['ID']>
  status?: InputMaybe<Scalars['JSONObject']>
  text?: InputMaybe<Scalars['String']>
}

export type ProposalDiscussionPostUpdatedEvent = BaseGraphQlObject &
  Event & {
    __typename: 'ProposalDiscussionPostUpdatedEvent'
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    id: Scalars['ID']
    /** Blocknumber of the block in which the event was emitted. */
    inBlock: Scalars['Int']
    /** Hash of the extrinsic which caused the event to be emitted */
    inExtrinsic?: Maybe<Scalars['String']>
    /** Index of event in block from which it was emitted. */
    indexInBlock: Scalars['Int']
    /** Network the block was produced in */
    network: Network
    post: ProposalDiscussionPost
    postId: Scalars['String']
    /** New post text */
    text: Scalars['String']
    /** Filtering options for interface implementers */
    type?: Maybe<EventTypeOptions>
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
  }

export type ProposalDiscussionPostUpdatedEventConnection = {
  __typename: 'ProposalDiscussionPostUpdatedEventConnection'
  edges: Array<ProposalDiscussionPostUpdatedEventEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type ProposalDiscussionPostUpdatedEventCreateInput = {
  inBlock: Scalars['Float']
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock: Scalars['Float']
  network: Network
  post: Scalars['ID']
  text: Scalars['String']
}

export type ProposalDiscussionPostUpdatedEventEdge = {
  __typename: 'ProposalDiscussionPostUpdatedEventEdge'
  cursor: Scalars['String']
  node: ProposalDiscussionPostUpdatedEvent
}

export enum ProposalDiscussionPostUpdatedEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  PostAsc = 'post_ASC',
  PostDesc = 'post_DESC',
  TextAsc = 'text_ASC',
  TextDesc = 'text_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type ProposalDiscussionPostUpdatedEventUpdateInput = {
  inBlock?: InputMaybe<Scalars['Float']>
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock?: InputMaybe<Scalars['Float']>
  network?: InputMaybe<Network>
  post?: InputMaybe<Scalars['ID']>
  text?: InputMaybe<Scalars['String']>
}

export type ProposalDiscussionPostUpdatedEventWhereInput = {
  AND?: InputMaybe<Array<ProposalDiscussionPostUpdatedEventWhereInput>>
  OR?: InputMaybe<Array<ProposalDiscussionPostUpdatedEventWhereInput>>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  inBlock_eq?: InputMaybe<Scalars['Int']>
  inBlock_gt?: InputMaybe<Scalars['Int']>
  inBlock_gte?: InputMaybe<Scalars['Int']>
  inBlock_in?: InputMaybe<Array<Scalars['Int']>>
  inBlock_lt?: InputMaybe<Scalars['Int']>
  inBlock_lte?: InputMaybe<Scalars['Int']>
  inExtrinsic_contains?: InputMaybe<Scalars['String']>
  inExtrinsic_endsWith?: InputMaybe<Scalars['String']>
  inExtrinsic_eq?: InputMaybe<Scalars['String']>
  inExtrinsic_in?: InputMaybe<Array<Scalars['String']>>
  inExtrinsic_startsWith?: InputMaybe<Scalars['String']>
  indexInBlock_eq?: InputMaybe<Scalars['Int']>
  indexInBlock_gt?: InputMaybe<Scalars['Int']>
  indexInBlock_gte?: InputMaybe<Scalars['Int']>
  indexInBlock_in?: InputMaybe<Array<Scalars['Int']>>
  indexInBlock_lt?: InputMaybe<Scalars['Int']>
  indexInBlock_lte?: InputMaybe<Scalars['Int']>
  network_eq?: InputMaybe<Network>
  network_in?: InputMaybe<Array<Network>>
  post?: InputMaybe<ProposalDiscussionPostWhereInput>
  text_contains?: InputMaybe<Scalars['String']>
  text_endsWith?: InputMaybe<Scalars['String']>
  text_eq?: InputMaybe<Scalars['String']>
  text_in?: InputMaybe<Array<Scalars['String']>>
  text_startsWith?: InputMaybe<Scalars['String']>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
}

export type ProposalDiscussionPostUpdatedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type ProposalDiscussionPostWhereInput = {
  AND?: InputMaybe<Array<ProposalDiscussionPostWhereInput>>
  OR?: InputMaybe<Array<ProposalDiscussionPostWhereInput>>
  author?: InputMaybe<MembershipWhereInput>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  createdInEvent?: InputMaybe<ProposalDiscussionPostCreatedEventWhereInput>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  discussionThread?: InputMaybe<ProposalDiscussionThreadWhereInput>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  isVisible_eq?: InputMaybe<Scalars['Boolean']>
  isVisible_in?: InputMaybe<Array<Scalars['Boolean']>>
  proposaldiscussionpostdeletedeventpost_every?: InputMaybe<ProposalDiscussionPostDeletedEventWhereInput>
  proposaldiscussionpostdeletedeventpost_none?: InputMaybe<ProposalDiscussionPostDeletedEventWhereInput>
  proposaldiscussionpostdeletedeventpost_some?: InputMaybe<ProposalDiscussionPostDeletedEventWhereInput>
  proposaldiscussionpostrepliesTo_every?: InputMaybe<ProposalDiscussionPostWhereInput>
  proposaldiscussionpostrepliesTo_none?: InputMaybe<ProposalDiscussionPostWhereInput>
  proposaldiscussionpostrepliesTo_some?: InputMaybe<ProposalDiscussionPostWhereInput>
  repliesTo?: InputMaybe<ProposalDiscussionPostWhereInput>
  status_json?: InputMaybe<Scalars['JSONObject']>
  text_contains?: InputMaybe<Scalars['String']>
  text_endsWith?: InputMaybe<Scalars['String']>
  text_eq?: InputMaybe<Scalars['String']>
  text_in?: InputMaybe<Array<Scalars['String']>>
  text_startsWith?: InputMaybe<Scalars['String']>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
  updates_every?: InputMaybe<ProposalDiscussionPostUpdatedEventWhereInput>
  updates_none?: InputMaybe<ProposalDiscussionPostUpdatedEventWhereInput>
  updates_some?: InputMaybe<ProposalDiscussionPostUpdatedEventWhereInput>
}

export type ProposalDiscussionPostWhereUniqueInput = {
  id: Scalars['ID']
}

export type ProposalDiscussionThread = BaseGraphQlObject & {
  __typename: 'ProposalDiscussionThread'
  createdAt: Scalars['DateTime']
  createdById: Scalars['String']
  deletedAt?: Maybe<Scalars['DateTime']>
  deletedById?: Maybe<Scalars['String']>
  id: Scalars['ID']
  /** Current thread mode */
  mode: ProposalDiscussionThreadMode
  modeChanges: Array<ProposalDiscussionThreadModeChangedEvent>
  posts: Array<ProposalDiscussionPost>
  proposal: Proposal
  proposalId: Scalars['String']
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedById?: Maybe<Scalars['String']>
  version: Scalars['Int']
}

export type ProposalDiscussionThreadConnection = {
  __typename: 'ProposalDiscussionThreadConnection'
  edges: Array<ProposalDiscussionThreadEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type ProposalDiscussionThreadCreateInput = {
  mode: Scalars['JSONObject']
  proposal: Scalars['ID']
}

export type ProposalDiscussionThreadEdge = {
  __typename: 'ProposalDiscussionThreadEdge'
  cursor: Scalars['String']
  node: ProposalDiscussionThread
}

export type ProposalDiscussionThreadMode = ProposalDiscussionThreadModeClosed | ProposalDiscussionThreadModeOpen

export type ProposalDiscussionThreadModeChangedEvent = BaseGraphQlObject &
  Event & {
    __typename: 'ProposalDiscussionThreadModeChangedEvent'
    actor: Membership
    actorId: Scalars['String']
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    id: Scalars['ID']
    /** Blocknumber of the block in which the event was emitted. */
    inBlock: Scalars['Int']
    /** Hash of the extrinsic which caused the event to be emitted */
    inExtrinsic?: Maybe<Scalars['String']>
    /** Index of event in block from which it was emitted. */
    indexInBlock: Scalars['Int']
    /** Network the block was produced in */
    network: Network
    /** The new thread mode */
    newMode: ProposalDiscussionThreadMode
    thread: ProposalDiscussionThread
    threadId: Scalars['String']
    /** Filtering options for interface implementers */
    type?: Maybe<EventTypeOptions>
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
  }

export type ProposalDiscussionThreadModeChangedEventConnection = {
  __typename: 'ProposalDiscussionThreadModeChangedEventConnection'
  edges: Array<ProposalDiscussionThreadModeChangedEventEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type ProposalDiscussionThreadModeChangedEventCreateInput = {
  actor: Scalars['ID']
  inBlock: Scalars['Float']
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock: Scalars['Float']
  network: Network
  newMode: Scalars['JSONObject']
  thread: Scalars['ID']
}

export type ProposalDiscussionThreadModeChangedEventEdge = {
  __typename: 'ProposalDiscussionThreadModeChangedEventEdge'
  cursor: Scalars['String']
  node: ProposalDiscussionThreadModeChangedEvent
}

export enum ProposalDiscussionThreadModeChangedEventOrderByInput {
  ActorAsc = 'actor_ASC',
  ActorDesc = 'actor_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  ThreadAsc = 'thread_ASC',
  ThreadDesc = 'thread_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type ProposalDiscussionThreadModeChangedEventUpdateInput = {
  actor?: InputMaybe<Scalars['ID']>
  inBlock?: InputMaybe<Scalars['Float']>
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock?: InputMaybe<Scalars['Float']>
  network?: InputMaybe<Network>
  newMode?: InputMaybe<Scalars['JSONObject']>
  thread?: InputMaybe<Scalars['ID']>
}

export type ProposalDiscussionThreadModeChangedEventWhereInput = {
  AND?: InputMaybe<Array<ProposalDiscussionThreadModeChangedEventWhereInput>>
  OR?: InputMaybe<Array<ProposalDiscussionThreadModeChangedEventWhereInput>>
  actor?: InputMaybe<MembershipWhereInput>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  inBlock_eq?: InputMaybe<Scalars['Int']>
  inBlock_gt?: InputMaybe<Scalars['Int']>
  inBlock_gte?: InputMaybe<Scalars['Int']>
  inBlock_in?: InputMaybe<Array<Scalars['Int']>>
  inBlock_lt?: InputMaybe<Scalars['Int']>
  inBlock_lte?: InputMaybe<Scalars['Int']>
  inExtrinsic_contains?: InputMaybe<Scalars['String']>
  inExtrinsic_endsWith?: InputMaybe<Scalars['String']>
  inExtrinsic_eq?: InputMaybe<Scalars['String']>
  inExtrinsic_in?: InputMaybe<Array<Scalars['String']>>
  inExtrinsic_startsWith?: InputMaybe<Scalars['String']>
  indexInBlock_eq?: InputMaybe<Scalars['Int']>
  indexInBlock_gt?: InputMaybe<Scalars['Int']>
  indexInBlock_gte?: InputMaybe<Scalars['Int']>
  indexInBlock_in?: InputMaybe<Array<Scalars['Int']>>
  indexInBlock_lt?: InputMaybe<Scalars['Int']>
  indexInBlock_lte?: InputMaybe<Scalars['Int']>
  network_eq?: InputMaybe<Network>
  network_in?: InputMaybe<Array<Network>>
  newMode_json?: InputMaybe<Scalars['JSONObject']>
  thread?: InputMaybe<ProposalDiscussionThreadWhereInput>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
}

export type ProposalDiscussionThreadModeChangedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type ProposalDiscussionThreadModeClosed = {
  __typename: 'ProposalDiscussionThreadModeClosed'
  /** Whitelist containing members allowed to participate in the discussion */
  whitelist?: Maybe<ProposalDiscussionWhitelist>
}

export type ProposalDiscussionThreadModeOpen = {
  __typename: 'ProposalDiscussionThreadModeOpen'
  phantom?: Maybe<Scalars['Int']>
}

export enum ProposalDiscussionThreadOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  ProposalAsc = 'proposal_ASC',
  ProposalDesc = 'proposal_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type ProposalDiscussionThreadUpdateInput = {
  mode?: InputMaybe<Scalars['JSONObject']>
  proposal?: InputMaybe<Scalars['ID']>
}

export type ProposalDiscussionThreadWhereInput = {
  AND?: InputMaybe<Array<ProposalDiscussionThreadWhereInput>>
  OR?: InputMaybe<Array<ProposalDiscussionThreadWhereInput>>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  modeChanges_every?: InputMaybe<ProposalDiscussionThreadModeChangedEventWhereInput>
  modeChanges_none?: InputMaybe<ProposalDiscussionThreadModeChangedEventWhereInput>
  modeChanges_some?: InputMaybe<ProposalDiscussionThreadModeChangedEventWhereInput>
  mode_json?: InputMaybe<Scalars['JSONObject']>
  posts_every?: InputMaybe<ProposalDiscussionPostWhereInput>
  posts_none?: InputMaybe<ProposalDiscussionPostWhereInput>
  posts_some?: InputMaybe<ProposalDiscussionPostWhereInput>
  proposal?: InputMaybe<ProposalWhereInput>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
}

export type ProposalDiscussionThreadWhereUniqueInput = {
  id: Scalars['ID']
}

export type ProposalDiscussionWhitelist = BaseGraphQlObject & {
  __typename: 'ProposalDiscussionWhitelist'
  createdAt: Scalars['DateTime']
  createdById: Scalars['String']
  deletedAt?: Maybe<Scalars['DateTime']>
  deletedById?: Maybe<Scalars['String']>
  id: Scalars['ID']
  members: Array<Membership>
  phantom?: Maybe<Scalars['Int']>
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedById?: Maybe<Scalars['String']>
  version: Scalars['Int']
}

export type ProposalDiscussionWhitelistConnection = {
  __typename: 'ProposalDiscussionWhitelistConnection'
  edges: Array<ProposalDiscussionWhitelistEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type ProposalDiscussionWhitelistCreateInput = {
  phantom?: InputMaybe<Scalars['Float']>
}

export type ProposalDiscussionWhitelistEdge = {
  __typename: 'ProposalDiscussionWhitelistEdge'
  cursor: Scalars['String']
  node: ProposalDiscussionWhitelist
}

export enum ProposalDiscussionWhitelistOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  PhantomAsc = 'phantom_ASC',
  PhantomDesc = 'phantom_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type ProposalDiscussionWhitelistUpdateInput = {
  phantom?: InputMaybe<Scalars['Float']>
}

export type ProposalDiscussionWhitelistWhereInput = {
  AND?: InputMaybe<Array<ProposalDiscussionWhitelistWhereInput>>
  OR?: InputMaybe<Array<ProposalDiscussionWhitelistWhereInput>>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  members_every?: InputMaybe<MembershipWhereInput>
  members_none?: InputMaybe<MembershipWhereInput>
  members_some?: InputMaybe<MembershipWhereInput>
  phantom_eq?: InputMaybe<Scalars['Int']>
  phantom_gt?: InputMaybe<Scalars['Int']>
  phantom_gte?: InputMaybe<Scalars['Int']>
  phantom_in?: InputMaybe<Array<Scalars['Int']>>
  phantom_lt?: InputMaybe<Scalars['Int']>
  phantom_lte?: InputMaybe<Scalars['Int']>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
}

export type ProposalDiscussionWhitelistWhereUniqueInput = {
  id: Scalars['ID']
}

export type ProposalEdge = {
  __typename: 'ProposalEdge'
  cursor: Scalars['String']
  node: Proposal
}

export type ProposalExecutedEvent = BaseGraphQlObject &
  Event & {
    __typename: 'ProposalExecutedEvent'
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    /** The execution status */
    executionStatus: ProposalExecutionStatus
    id: Scalars['ID']
    /** Blocknumber of the block in which the event was emitted. */
    inBlock: Scalars['Int']
    /** Hash of the extrinsic which caused the event to be emitted */
    inExtrinsic?: Maybe<Scalars['String']>
    /** Index of event in block from which it was emitted. */
    indexInBlock: Scalars['Int']
    /** Network the block was produced in */
    network: Network
    proposal: Proposal
    proposalId: Scalars['String']
    /** Filtering options for interface implementers */
    type?: Maybe<EventTypeOptions>
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
  }

export type ProposalExecutedEventConnection = {
  __typename: 'ProposalExecutedEventConnection'
  edges: Array<ProposalExecutedEventEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type ProposalExecutedEventCreateInput = {
  executionStatus: Scalars['JSONObject']
  inBlock: Scalars['Float']
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock: Scalars['Float']
  network: Network
  proposal: Scalars['ID']
}

export type ProposalExecutedEventEdge = {
  __typename: 'ProposalExecutedEventEdge'
  cursor: Scalars['String']
  node: ProposalExecutedEvent
}

export enum ProposalExecutedEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  ProposalAsc = 'proposal_ASC',
  ProposalDesc = 'proposal_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type ProposalExecutedEventUpdateInput = {
  executionStatus?: InputMaybe<Scalars['JSONObject']>
  inBlock?: InputMaybe<Scalars['Float']>
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock?: InputMaybe<Scalars['Float']>
  network?: InputMaybe<Network>
  proposal?: InputMaybe<Scalars['ID']>
}

export type ProposalExecutedEventWhereInput = {
  AND?: InputMaybe<Array<ProposalExecutedEventWhereInput>>
  OR?: InputMaybe<Array<ProposalExecutedEventWhereInput>>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  executionStatus_json?: InputMaybe<Scalars['JSONObject']>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  inBlock_eq?: InputMaybe<Scalars['Int']>
  inBlock_gt?: InputMaybe<Scalars['Int']>
  inBlock_gte?: InputMaybe<Scalars['Int']>
  inBlock_in?: InputMaybe<Array<Scalars['Int']>>
  inBlock_lt?: InputMaybe<Scalars['Int']>
  inBlock_lte?: InputMaybe<Scalars['Int']>
  inExtrinsic_contains?: InputMaybe<Scalars['String']>
  inExtrinsic_endsWith?: InputMaybe<Scalars['String']>
  inExtrinsic_eq?: InputMaybe<Scalars['String']>
  inExtrinsic_in?: InputMaybe<Array<Scalars['String']>>
  inExtrinsic_startsWith?: InputMaybe<Scalars['String']>
  indexInBlock_eq?: InputMaybe<Scalars['Int']>
  indexInBlock_gt?: InputMaybe<Scalars['Int']>
  indexInBlock_gte?: InputMaybe<Scalars['Int']>
  indexInBlock_in?: InputMaybe<Array<Scalars['Int']>>
  indexInBlock_lt?: InputMaybe<Scalars['Int']>
  indexInBlock_lte?: InputMaybe<Scalars['Int']>
  network_eq?: InputMaybe<Network>
  network_in?: InputMaybe<Array<Network>>
  proposal?: InputMaybe<ProposalWhereInput>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
}

export type ProposalExecutedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type ProposalExecutionStatus = ProposalStatusExecuted | ProposalStatusExecutionFailed

export type ProposalIntermediateStatus = ProposalStatusDeciding | ProposalStatusDormant | ProposalStatusGracing

export enum ProposalOrderByInput {
  CouncilApprovalsAsc = 'councilApprovals_ASC',
  CouncilApprovalsDesc = 'councilApprovals_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  CreatorAsc = 'creator_ASC',
  CreatorDesc = 'creator_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ExactExecutionBlockAsc = 'exactExecutionBlock_ASC',
  ExactExecutionBlockDesc = 'exactExecutionBlock_DESC',
  IsFinalizedAsc = 'isFinalized_ASC',
  IsFinalizedDesc = 'isFinalized_DESC',
  StakingAccountAsc = 'stakingAccount_ASC',
  StakingAccountDesc = 'stakingAccount_DESC',
  StatusSetAtBlockAsc = 'statusSetAtBlock_ASC',
  StatusSetAtBlockDesc = 'statusSetAtBlock_DESC',
  StatusSetAtTimeAsc = 'statusSetAtTime_ASC',
  StatusSetAtTimeDesc = 'statusSetAtTime_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type ProposalStatus =
  | ProposalStatusCanceledByRuntime
  | ProposalStatusCancelled
  | ProposalStatusDeciding
  | ProposalStatusDormant
  | ProposalStatusExecuted
  | ProposalStatusExecutionFailed
  | ProposalStatusExpired
  | ProposalStatusGracing
  | ProposalStatusRejected
  | ProposalStatusSlashed
  | ProposalStatusVetoed

export type ProposalStatusCanceledByRuntime = {
  __typename: 'ProposalStatusCanceledByRuntime'
  /** Related ProposalDecisionMadeEvent */
  proposalDecisionMadeEvent?: Maybe<ProposalDecisionMadeEvent>
}

export type ProposalStatusCancelled = {
  __typename: 'ProposalStatusCancelled'
  /** The related ProposalCancelledEvent */
  cancelledInEvent?: Maybe<ProposalCancelledEvent>
}

export type ProposalStatusDeciding = {
  __typename: 'ProposalStatusDeciding'
  /** Related ProposalStatusUpdatedEvent */
  proposalStatusUpdatedEvent?: Maybe<ProposalStatusUpdatedEvent>
}

export type ProposalStatusDormant = {
  __typename: 'ProposalStatusDormant'
  /** Related ProposalStatusUpdatedEvent */
  proposalStatusUpdatedEvent?: Maybe<ProposalStatusUpdatedEvent>
}

export type ProposalStatusExecuted = {
  __typename: 'ProposalStatusExecuted'
  /** Related ProposalExecutedEvent */
  proposalExecutedEvent?: Maybe<ProposalExecutedEvent>
}

export type ProposalStatusExecutionFailed = {
  __typename: 'ProposalStatusExecutionFailed'
  /** The runtime execution error message */
  errorMessage: Scalars['String']
  /** Related ProposalExecutedEvent */
  proposalExecutedEvent?: Maybe<ProposalExecutedEvent>
}

export type ProposalStatusExpired = {
  __typename: 'ProposalStatusExpired'
  /** Related ProposalDecisionMadeEvent */
  proposalDecisionMadeEvent?: Maybe<ProposalDecisionMadeEvent>
}

export type ProposalStatusGracing = {
  __typename: 'ProposalStatusGracing'
  /** Related ProposalStatusUpdatedEvent */
  proposalStatusUpdatedEvent?: Maybe<ProposalStatusUpdatedEvent>
}

export type ProposalStatusRejected = {
  __typename: 'ProposalStatusRejected'
  /** Related ProposalDecisionMadeEvent */
  proposalDecisionMadeEvent?: Maybe<ProposalDecisionMadeEvent>
}

export type ProposalStatusSlashed = {
  __typename: 'ProposalStatusSlashed'
  /** Related ProposalDecisionMadeEvent */
  proposalDecisionMadeEvent?: Maybe<ProposalDecisionMadeEvent>
}

export type ProposalStatusUpdatedEvent = BaseGraphQlObject &
  Event & {
    __typename: 'ProposalStatusUpdatedEvent'
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    id: Scalars['ID']
    /** Blocknumber of the block in which the event was emitted. */
    inBlock: Scalars['Int']
    /** Hash of the extrinsic which caused the event to be emitted */
    inExtrinsic?: Maybe<Scalars['String']>
    /** Index of event in block from which it was emitted. */
    indexInBlock: Scalars['Int']
    /** Network the block was produced in */
    network: Network
    /** The new proposal intermediate status (Deciding/Gracing/Dormant) */
    newStatus: ProposalIntermediateStatus
    proposal: Proposal
    proposalId: Scalars['String']
    /** Filtering options for interface implementers */
    type?: Maybe<EventTypeOptions>
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
  }

export type ProposalStatusUpdatedEventConnection = {
  __typename: 'ProposalStatusUpdatedEventConnection'
  edges: Array<ProposalStatusUpdatedEventEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type ProposalStatusUpdatedEventCreateInput = {
  inBlock: Scalars['Float']
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock: Scalars['Float']
  network: Network
  newStatus: Scalars['JSONObject']
  proposal: Scalars['ID']
}

export type ProposalStatusUpdatedEventEdge = {
  __typename: 'ProposalStatusUpdatedEventEdge'
  cursor: Scalars['String']
  node: ProposalStatusUpdatedEvent
}

export enum ProposalStatusUpdatedEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  ProposalAsc = 'proposal_ASC',
  ProposalDesc = 'proposal_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type ProposalStatusUpdatedEventUpdateInput = {
  inBlock?: InputMaybe<Scalars['Float']>
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock?: InputMaybe<Scalars['Float']>
  network?: InputMaybe<Network>
  newStatus?: InputMaybe<Scalars['JSONObject']>
  proposal?: InputMaybe<Scalars['ID']>
}

export type ProposalStatusUpdatedEventWhereInput = {
  AND?: InputMaybe<Array<ProposalStatusUpdatedEventWhereInput>>
  OR?: InputMaybe<Array<ProposalStatusUpdatedEventWhereInput>>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  inBlock_eq?: InputMaybe<Scalars['Int']>
  inBlock_gt?: InputMaybe<Scalars['Int']>
  inBlock_gte?: InputMaybe<Scalars['Int']>
  inBlock_in?: InputMaybe<Array<Scalars['Int']>>
  inBlock_lt?: InputMaybe<Scalars['Int']>
  inBlock_lte?: InputMaybe<Scalars['Int']>
  inExtrinsic_contains?: InputMaybe<Scalars['String']>
  inExtrinsic_endsWith?: InputMaybe<Scalars['String']>
  inExtrinsic_eq?: InputMaybe<Scalars['String']>
  inExtrinsic_in?: InputMaybe<Array<Scalars['String']>>
  inExtrinsic_startsWith?: InputMaybe<Scalars['String']>
  indexInBlock_eq?: InputMaybe<Scalars['Int']>
  indexInBlock_gt?: InputMaybe<Scalars['Int']>
  indexInBlock_gte?: InputMaybe<Scalars['Int']>
  indexInBlock_in?: InputMaybe<Array<Scalars['Int']>>
  indexInBlock_lt?: InputMaybe<Scalars['Int']>
  indexInBlock_lte?: InputMaybe<Scalars['Int']>
  network_eq?: InputMaybe<Network>
  network_in?: InputMaybe<Array<Network>>
  newStatus_json?: InputMaybe<Scalars['JSONObject']>
  proposal?: InputMaybe<ProposalWhereInput>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
}

export type ProposalStatusUpdatedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type ProposalStatusVetoed = {
  __typename: 'ProposalStatusVetoed'
  /** Related ProposalDecisionMadeEvent event */
  proposalDecisionMadeEvent?: Maybe<ProposalDecisionMadeEvent>
}

export type ProposalUpdateInput = {
  councilApprovals?: InputMaybe<Scalars['Float']>
  creator?: InputMaybe<Scalars['ID']>
  description?: InputMaybe<Scalars['String']>
  details?: InputMaybe<Scalars['JSONObject']>
  exactExecutionBlock?: InputMaybe<Scalars['Float']>
  isFinalized?: InputMaybe<Scalars['Boolean']>
  stakingAccount?: InputMaybe<Scalars['String']>
  status?: InputMaybe<Scalars['JSONObject']>
  statusSetAtBlock?: InputMaybe<Scalars['Float']>
  statusSetAtTime?: InputMaybe<Scalars['DateTime']>
  title?: InputMaybe<Scalars['String']>
}

export enum ProposalVoteKind {
  Abstain = 'ABSTAIN',
  Approve = 'APPROVE',
  Reject = 'REJECT',
  Slash = 'SLASH',
}

export type ProposalVotedEvent = BaseGraphQlObject &
  Event & {
    __typename: 'ProposalVotedEvent'
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    id: Scalars['ID']
    /** Blocknumber of the block in which the event was emitted. */
    inBlock: Scalars['Int']
    /** Hash of the extrinsic which caused the event to be emitted */
    inExtrinsic?: Maybe<Scalars['String']>
    /** Index of event in block from which it was emitted. */
    indexInBlock: Scalars['Int']
    /** Network the block was produced in */
    network: Network
    proposal: Proposal
    proposalId: Scalars['String']
    /** The rationale behind the vote */
    rationale: Scalars['String']
    /** Filtering options for interface implementers */
    type?: Maybe<EventTypeOptions>
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
    /** The kind of the vote that was casted */
    voteKind: ProposalVoteKind
    voter: Membership
    voterId: Scalars['String']
    /**
     * The voting round - number representing which Deciding period the vote was
     * casted in (starting with 1), useful when the proposal must be approved during
     * multiple council terms (constitution > 1)
     */
    votingRound: Scalars['Int']
  }

export type ProposalVotedEventConnection = {
  __typename: 'ProposalVotedEventConnection'
  edges: Array<ProposalVotedEventEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type ProposalVotedEventCreateInput = {
  inBlock: Scalars['Float']
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock: Scalars['Float']
  network: Network
  proposal: Scalars['ID']
  rationale: Scalars['String']
  voteKind: ProposalVoteKind
  voter: Scalars['ID']
  votingRound: Scalars['Float']
}

export type ProposalVotedEventEdge = {
  __typename: 'ProposalVotedEventEdge'
  cursor: Scalars['String']
  node: ProposalVotedEvent
}

export enum ProposalVotedEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  ProposalAsc = 'proposal_ASC',
  ProposalDesc = 'proposal_DESC',
  RationaleAsc = 'rationale_ASC',
  RationaleDesc = 'rationale_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  VoteKindAsc = 'voteKind_ASC',
  VoteKindDesc = 'voteKind_DESC',
  VoterAsc = 'voter_ASC',
  VoterDesc = 'voter_DESC',
  VotingRoundAsc = 'votingRound_ASC',
  VotingRoundDesc = 'votingRound_DESC',
}

export type ProposalVotedEventUpdateInput = {
  inBlock?: InputMaybe<Scalars['Float']>
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock?: InputMaybe<Scalars['Float']>
  network?: InputMaybe<Network>
  proposal?: InputMaybe<Scalars['ID']>
  rationale?: InputMaybe<Scalars['String']>
  voteKind?: InputMaybe<ProposalVoteKind>
  voter?: InputMaybe<Scalars['ID']>
  votingRound?: InputMaybe<Scalars['Float']>
}

export type ProposalVotedEventWhereInput = {
  AND?: InputMaybe<Array<ProposalVotedEventWhereInput>>
  OR?: InputMaybe<Array<ProposalVotedEventWhereInput>>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  inBlock_eq?: InputMaybe<Scalars['Int']>
  inBlock_gt?: InputMaybe<Scalars['Int']>
  inBlock_gte?: InputMaybe<Scalars['Int']>
  inBlock_in?: InputMaybe<Array<Scalars['Int']>>
  inBlock_lt?: InputMaybe<Scalars['Int']>
  inBlock_lte?: InputMaybe<Scalars['Int']>
  inExtrinsic_contains?: InputMaybe<Scalars['String']>
  inExtrinsic_endsWith?: InputMaybe<Scalars['String']>
  inExtrinsic_eq?: InputMaybe<Scalars['String']>
  inExtrinsic_in?: InputMaybe<Array<Scalars['String']>>
  inExtrinsic_startsWith?: InputMaybe<Scalars['String']>
  indexInBlock_eq?: InputMaybe<Scalars['Int']>
  indexInBlock_gt?: InputMaybe<Scalars['Int']>
  indexInBlock_gte?: InputMaybe<Scalars['Int']>
  indexInBlock_in?: InputMaybe<Array<Scalars['Int']>>
  indexInBlock_lt?: InputMaybe<Scalars['Int']>
  indexInBlock_lte?: InputMaybe<Scalars['Int']>
  network_eq?: InputMaybe<Network>
  network_in?: InputMaybe<Array<Network>>
  proposal?: InputMaybe<ProposalWhereInput>
  rationale_contains?: InputMaybe<Scalars['String']>
  rationale_endsWith?: InputMaybe<Scalars['String']>
  rationale_eq?: InputMaybe<Scalars['String']>
  rationale_in?: InputMaybe<Array<Scalars['String']>>
  rationale_startsWith?: InputMaybe<Scalars['String']>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
  voteKind_eq?: InputMaybe<ProposalVoteKind>
  voteKind_in?: InputMaybe<Array<ProposalVoteKind>>
  voter?: InputMaybe<MembershipWhereInput>
  votingRound_eq?: InputMaybe<Scalars['Int']>
  votingRound_gt?: InputMaybe<Scalars['Int']>
  votingRound_gte?: InputMaybe<Scalars['Int']>
  votingRound_in?: InputMaybe<Array<Scalars['Int']>>
  votingRound_lt?: InputMaybe<Scalars['Int']>
  votingRound_lte?: InputMaybe<Scalars['Int']>
}

export type ProposalVotedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type ProposalWhereInput = {
  AND?: InputMaybe<Array<ProposalWhereInput>>
  OR?: InputMaybe<Array<ProposalWhereInput>>
  councilApprovals_eq?: InputMaybe<Scalars['Int']>
  councilApprovals_gt?: InputMaybe<Scalars['Int']>
  councilApprovals_gte?: InputMaybe<Scalars['Int']>
  councilApprovals_in?: InputMaybe<Array<Scalars['Int']>>
  councilApprovals_lt?: InputMaybe<Scalars['Int']>
  councilApprovals_lte?: InputMaybe<Scalars['Int']>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  createdInEvent?: InputMaybe<ProposalCreatedEventWhereInput>
  creator?: InputMaybe<MembershipWhereInput>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  description_contains?: InputMaybe<Scalars['String']>
  description_endsWith?: InputMaybe<Scalars['String']>
  description_eq?: InputMaybe<Scalars['String']>
  description_in?: InputMaybe<Array<Scalars['String']>>
  description_startsWith?: InputMaybe<Scalars['String']>
  details_json?: InputMaybe<Scalars['JSONObject']>
  discussionThread?: InputMaybe<ProposalDiscussionThreadWhereInput>
  exactExecutionBlock_eq?: InputMaybe<Scalars['Int']>
  exactExecutionBlock_gt?: InputMaybe<Scalars['Int']>
  exactExecutionBlock_gte?: InputMaybe<Scalars['Int']>
  exactExecutionBlock_in?: InputMaybe<Array<Scalars['Int']>>
  exactExecutionBlock_lt?: InputMaybe<Scalars['Int']>
  exactExecutionBlock_lte?: InputMaybe<Scalars['Int']>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  isFinalized_eq?: InputMaybe<Scalars['Boolean']>
  isFinalized_in?: InputMaybe<Array<Scalars['Boolean']>>
  proposalStatusUpdates_every?: InputMaybe<ProposalStatusUpdatedEventWhereInput>
  proposalStatusUpdates_none?: InputMaybe<ProposalStatusUpdatedEventWhereInput>
  proposalStatusUpdates_some?: InputMaybe<ProposalStatusUpdatedEventWhereInput>
  proposalcancelledeventproposal_every?: InputMaybe<ProposalCancelledEventWhereInput>
  proposalcancelledeventproposal_none?: InputMaybe<ProposalCancelledEventWhereInput>
  proposalcancelledeventproposal_some?: InputMaybe<ProposalCancelledEventWhereInput>
  proposaldecisionmadeeventproposal_every?: InputMaybe<ProposalDecisionMadeEventWhereInput>
  proposaldecisionmadeeventproposal_none?: InputMaybe<ProposalDecisionMadeEventWhereInput>
  proposaldecisionmadeeventproposal_some?: InputMaybe<ProposalDecisionMadeEventWhereInput>
  proposalexecutedeventproposal_every?: InputMaybe<ProposalExecutedEventWhereInput>
  proposalexecutedeventproposal_none?: InputMaybe<ProposalExecutedEventWhereInput>
  proposalexecutedeventproposal_some?: InputMaybe<ProposalExecutedEventWhereInput>
  stakingAccount_contains?: InputMaybe<Scalars['String']>
  stakingAccount_endsWith?: InputMaybe<Scalars['String']>
  stakingAccount_eq?: InputMaybe<Scalars['String']>
  stakingAccount_in?: InputMaybe<Array<Scalars['String']>>
  stakingAccount_startsWith?: InputMaybe<Scalars['String']>
  statusSetAtBlock_eq?: InputMaybe<Scalars['Int']>
  statusSetAtBlock_gt?: InputMaybe<Scalars['Int']>
  statusSetAtBlock_gte?: InputMaybe<Scalars['Int']>
  statusSetAtBlock_in?: InputMaybe<Array<Scalars['Int']>>
  statusSetAtBlock_lt?: InputMaybe<Scalars['Int']>
  statusSetAtBlock_lte?: InputMaybe<Scalars['Int']>
  statusSetAtTime_eq?: InputMaybe<Scalars['DateTime']>
  statusSetAtTime_gt?: InputMaybe<Scalars['DateTime']>
  statusSetAtTime_gte?: InputMaybe<Scalars['DateTime']>
  statusSetAtTime_lt?: InputMaybe<Scalars['DateTime']>
  statusSetAtTime_lte?: InputMaybe<Scalars['DateTime']>
  status_json?: InputMaybe<Scalars['JSONObject']>
  title_contains?: InputMaybe<Scalars['String']>
  title_endsWith?: InputMaybe<Scalars['String']>
  title_eq?: InputMaybe<Scalars['String']>
  title_in?: InputMaybe<Array<Scalars['String']>>
  title_startsWith?: InputMaybe<Scalars['String']>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
  votes_every?: InputMaybe<ProposalVotedEventWhereInput>
  votes_none?: InputMaybe<ProposalVotedEventWhereInput>
  votes_some?: InputMaybe<ProposalVotedEventWhereInput>
}

export type ProposalWhereUniqueInput = {
  id: Scalars['ID']
}

export type ProposalsByDescriptionFtsOutput = {
  __typename: 'ProposalsByDescriptionFTSOutput'
  highlight: Scalars['String']
  isTypeOf: Scalars['String']
  item: ProposalsByDescriptionSearchResult
  rank: Scalars['Float']
}

export type ProposalsByDescriptionSearchResult = Proposal

export type ProposalsByTitleFtsOutput = {
  __typename: 'ProposalsByTitleFTSOutput'
  highlight: Scalars['String']
  isTypeOf: Scalars['String']
  item: ProposalsByTitleSearchResult
  rank: Scalars['Float']
}

export type ProposalsByTitleSearchResult = Proposal

export type Query = {
  __typename: 'Query'
  announcingPeriodStartedEventByUniqueInput?: Maybe<AnnouncingPeriodStartedEvent>
  announcingPeriodStartedEvents: Array<AnnouncingPeriodStartedEvent>
  announcingPeriodStartedEventsConnection: AnnouncingPeriodStartedEventConnection
  applicationFormQuestionAnswerByUniqueInput?: Maybe<ApplicationFormQuestionAnswer>
  applicationFormQuestionAnswers: Array<ApplicationFormQuestionAnswer>
  applicationFormQuestionAnswersConnection: ApplicationFormQuestionAnswerConnection
  applicationFormQuestionByUniqueInput?: Maybe<ApplicationFormQuestion>
  applicationFormQuestions: Array<ApplicationFormQuestion>
  applicationFormQuestionsConnection: ApplicationFormQuestionConnection
  applicationWithdrawnEventByUniqueInput?: Maybe<ApplicationWithdrawnEvent>
  applicationWithdrawnEvents: Array<ApplicationWithdrawnEvent>
  applicationWithdrawnEventsConnection: ApplicationWithdrawnEventConnection
  appliedOnOpeningEventByUniqueInput?: Maybe<AppliedOnOpeningEvent>
  appliedOnOpeningEvents: Array<AppliedOnOpeningEvent>
  appliedOnOpeningEventsConnection: AppliedOnOpeningEventConnection
  bounties: Array<Bounty>
  bountiesConnection: BountyConnection
  bountyByUniqueInput?: Maybe<Bounty>
  bountyContributionByUniqueInput?: Maybe<BountyContribution>
  bountyContributions: Array<BountyContribution>
  bountyContributionsConnection: BountyContributionConnection
  bountyCreatedEventByUniqueInput?: Maybe<BountyCreatedEvent>
  bountyCreatedEvents: Array<BountyCreatedEvent>
  bountyCreatedEventsConnection: BountyCreatedEventConnection
  bountyEntries: Array<BountyEntry>
  bountyEntriesConnection: BountyEntryConnection
  bountyEntryByUniqueInput?: Maybe<BountyEntry>
  bountyMaxFundingReachedEventByUniqueInput?: Maybe<BountyMaxFundingReachedEvent>
  bountyMaxFundingReachedEvents: Array<BountyMaxFundingReachedEvent>
  bountyMaxFundingReachedEventsConnection: BountyMaxFundingReachedEventConnection
  bountyWorkData: Array<BountyWorkData>
  bountyWorkDataByUniqueInput?: Maybe<BountyWorkData>
  bountyWorkDataConnection: BountyWorkDataConnection
  budgetBalanceSetEventByUniqueInput?: Maybe<BudgetBalanceSetEvent>
  budgetBalanceSetEvents: Array<BudgetBalanceSetEvent>
  budgetBalanceSetEventsConnection: BudgetBalanceSetEventConnection
  budgetIncrementUpdatedEventByUniqueInput?: Maybe<BudgetIncrementUpdatedEvent>
  budgetIncrementUpdatedEvents: Array<BudgetIncrementUpdatedEvent>
  budgetIncrementUpdatedEventsConnection: BudgetIncrementUpdatedEventConnection
  budgetRefillEventByUniqueInput?: Maybe<BudgetRefillEvent>
  budgetRefillEvents: Array<BudgetRefillEvent>
  budgetRefillEventsConnection: BudgetRefillEventConnection
  budgetRefillPlannedEventByUniqueInput?: Maybe<BudgetRefillPlannedEvent>
  budgetRefillPlannedEvents: Array<BudgetRefillPlannedEvent>
  budgetRefillPlannedEventsConnection: BudgetRefillPlannedEventConnection
  budgetSetEventByUniqueInput?: Maybe<BudgetSetEvent>
  budgetSetEvents: Array<BudgetSetEvent>
  budgetSetEventsConnection: BudgetSetEventConnection
  budgetSpendingEventByUniqueInput?: Maybe<BudgetSpendingEvent>
  budgetSpendingEvents: Array<BudgetSpendingEvent>
  budgetSpendingEventsConnection: BudgetSpendingEventConnection
  candidacyNoteMetadata: Array<CandidacyNoteMetadata>
  candidacyNoteMetadataByUniqueInput?: Maybe<CandidacyNoteMetadata>
  candidacyNoteMetadataConnection: CandidacyNoteMetadataConnection
  candidacyNoteSetEventByUniqueInput?: Maybe<CandidacyNoteSetEvent>
  candidacyNoteSetEvents: Array<CandidacyNoteSetEvent>
  candidacyNoteSetEventsConnection: CandidacyNoteSetEventConnection
  candidacyStakeReleaseEventByUniqueInput?: Maybe<CandidacyStakeReleaseEvent>
  candidacyStakeReleaseEvents: Array<CandidacyStakeReleaseEvent>
  candidacyStakeReleaseEventsConnection: CandidacyStakeReleaseEventConnection
  candidacyWithdrawEventByUniqueInput?: Maybe<CandidacyWithdrawEvent>
  candidacyWithdrawEvents: Array<CandidacyWithdrawEvent>
  candidacyWithdrawEventsConnection: CandidacyWithdrawEventConnection
  candidateByUniqueInput?: Maybe<Candidate>
  candidates: Array<Candidate>
  candidatesConnection: CandidateConnection
  castVoteByUniqueInput?: Maybe<CastVote>
  castVotes: Array<CastVote>
  castVotesConnection: CastVoteConnection
  categoryArchivalStatusUpdatedEventByUniqueInput?: Maybe<CategoryArchivalStatusUpdatedEvent>
  categoryArchivalStatusUpdatedEvents: Array<CategoryArchivalStatusUpdatedEvent>
  categoryArchivalStatusUpdatedEventsConnection: CategoryArchivalStatusUpdatedEventConnection
  categoryCreatedEventByUniqueInput?: Maybe<CategoryCreatedEvent>
  categoryCreatedEvents: Array<CategoryCreatedEvent>
  categoryCreatedEventsConnection: CategoryCreatedEventConnection
  categoryDeletedEventByUniqueInput?: Maybe<CategoryDeletedEvent>
  categoryDeletedEvents: Array<CategoryDeletedEvent>
  categoryDeletedEventsConnection: CategoryDeletedEventConnection
  categoryMembershipOfModeratorUpdatedEventByUniqueInput?: Maybe<CategoryMembershipOfModeratorUpdatedEvent>
  categoryMembershipOfModeratorUpdatedEvents: Array<CategoryMembershipOfModeratorUpdatedEvent>
  categoryMembershipOfModeratorUpdatedEventsConnection: CategoryMembershipOfModeratorUpdatedEventConnection
  categoryStickyThreadUpdateEventByUniqueInput?: Maybe<CategoryStickyThreadUpdateEvent>
  categoryStickyThreadUpdateEvents: Array<CategoryStickyThreadUpdateEvent>
  categoryStickyThreadUpdateEventsConnection: CategoryStickyThreadUpdateEventConnection
  channelByUniqueInput?: Maybe<Channel>
  channelCategories: Array<ChannelCategory>
  channelCategoriesByName: Array<ChannelCategoriesByNameFtsOutput>
  channelCategoriesConnection: ChannelCategoryConnection
  channelCategoryByUniqueInput?: Maybe<ChannelCategory>
  channels: Array<Channel>
  channelsConnection: ChannelConnection
  councilMemberByUniqueInput?: Maybe<CouncilMember>
  councilMembers: Array<CouncilMember>
  councilMembersConnection: CouncilMemberConnection
  councilStageUpdateByUniqueInput?: Maybe<CouncilStageUpdate>
  councilStageUpdates: Array<CouncilStageUpdate>
  councilStageUpdatesConnection: CouncilStageUpdateConnection
  councilorRewardUpdatedEventByUniqueInput?: Maybe<CouncilorRewardUpdatedEvent>
  councilorRewardUpdatedEvents: Array<CouncilorRewardUpdatedEvent>
  councilorRewardUpdatedEventsConnection: CouncilorRewardUpdatedEventConnection
  curatorGroupByUniqueInput?: Maybe<CuratorGroup>
  curatorGroups: Array<CuratorGroup>
  curatorGroupsConnection: CuratorGroupConnection
  dataObjectByUniqueInput?: Maybe<DataObject>
  dataObjects: Array<DataObject>
  dataObjectsConnection: DataObjectConnection
  electedCouncilByUniqueInput?: Maybe<ElectedCouncil>
  electedCouncils: Array<ElectedCouncil>
  electedCouncilsConnection: ElectedCouncilConnection
  electionRoundByUniqueInput?: Maybe<ElectionRound>
  electionRounds: Array<ElectionRound>
  electionRoundsConnection: ElectionRoundConnection
  events: Array<Event>
  forumCategories: Array<ForumCategory>
  forumCategoriesConnection: ForumCategoryConnection
  forumCategoryByUniqueInput?: Maybe<ForumCategory>
  forumPollAlternativeByUniqueInput?: Maybe<ForumPollAlternative>
  forumPollAlternatives: Array<ForumPollAlternative>
  forumPollAlternativesConnection: ForumPollAlternativeConnection
  forumPollByUniqueInput?: Maybe<ForumPoll>
  forumPolls: Array<ForumPoll>
  forumPollsConnection: ForumPollConnection
  forumPostByUniqueInput?: Maybe<ForumPost>
  forumPostReactionByUniqueInput?: Maybe<ForumPostReaction>
  forumPostReactions: Array<ForumPostReaction>
  forumPostReactionsConnection: ForumPostReactionConnection
  forumPosts: Array<ForumPost>
  forumPostsConnection: ForumPostConnection
  forumThreadByUniqueInput?: Maybe<ForumThread>
  forumThreadTagByUniqueInput?: Maybe<ForumThreadTag>
  forumThreadTags: Array<ForumThreadTag>
  forumThreadTagsConnection: ForumThreadTagConnection
  forumThreads: Array<ForumThread>
  forumThreadsConnection: ForumThreadConnection
  fundingRequestDestinationByUniqueInput?: Maybe<FundingRequestDestination>
  fundingRequestDestinations: Array<FundingRequestDestination>
  fundingRequestDestinationsConnection: FundingRequestDestinationConnection
  fundingRequestDestinationsListByUniqueInput?: Maybe<FundingRequestDestinationsList>
  fundingRequestDestinationsLists: Array<FundingRequestDestinationsList>
  fundingRequestDestinationsListsConnection: FundingRequestDestinationsListConnection
  initialInvitationBalanceUpdatedEventByUniqueInput?: Maybe<InitialInvitationBalanceUpdatedEvent>
  initialInvitationBalanceUpdatedEvents: Array<InitialInvitationBalanceUpdatedEvent>
  initialInvitationBalanceUpdatedEventsConnection: InitialInvitationBalanceUpdatedEventConnection
  initialInvitationCountUpdatedEventByUniqueInput?: Maybe<InitialInvitationCountUpdatedEvent>
  initialInvitationCountUpdatedEvents: Array<InitialInvitationCountUpdatedEvent>
  initialInvitationCountUpdatedEventsConnection: InitialInvitationCountUpdatedEventConnection
  invitesTransferredEventByUniqueInput?: Maybe<InvitesTransferredEvent>
  invitesTransferredEvents: Array<InvitesTransferredEvent>
  invitesTransferredEventsConnection: InvitesTransferredEventConnection
  languageByUniqueInput?: Maybe<Language>
  languages: Array<Language>
  languagesConnection: LanguageConnection
  leaderInvitationQuotaUpdatedEventByUniqueInput?: Maybe<LeaderInvitationQuotaUpdatedEvent>
  leaderInvitationQuotaUpdatedEvents: Array<LeaderInvitationQuotaUpdatedEvent>
  leaderInvitationQuotaUpdatedEventsConnection: LeaderInvitationQuotaUpdatedEventConnection
  leaderSetEventByUniqueInput?: Maybe<LeaderSetEvent>
  leaderSetEvents: Array<LeaderSetEvent>
  leaderSetEventsConnection: LeaderSetEventConnection
  leaderUnsetEventByUniqueInput?: Maybe<LeaderUnsetEvent>
  leaderUnsetEvents: Array<LeaderUnsetEvent>
  leaderUnsetEventsConnection: LeaderUnsetEventConnection
  licenseByUniqueInput?: Maybe<License>
  licenses: Array<License>
  licensesConnection: LicenseConnection
  memberAccountsUpdatedEventByUniqueInput?: Maybe<MemberAccountsUpdatedEvent>
  memberAccountsUpdatedEvents: Array<MemberAccountsUpdatedEvent>
  memberAccountsUpdatedEventsConnection: MemberAccountsUpdatedEventConnection
  memberInvitedEventByUniqueInput?: Maybe<MemberInvitedEvent>
  memberInvitedEvents: Array<MemberInvitedEvent>
  memberInvitedEventsConnection: MemberInvitedEventConnection
  memberMetadata: Array<MemberMetadata>
  memberMetadataByUniqueInput?: Maybe<MemberMetadata>
  memberMetadataConnection: MemberMetadataConnection
  memberProfileUpdatedEventByUniqueInput?: Maybe<MemberProfileUpdatedEvent>
  memberProfileUpdatedEvents: Array<MemberProfileUpdatedEvent>
  memberProfileUpdatedEventsConnection: MemberProfileUpdatedEventConnection
  memberVerificationStatusUpdatedEventByUniqueInput?: Maybe<MemberVerificationStatusUpdatedEvent>
  memberVerificationStatusUpdatedEvents: Array<MemberVerificationStatusUpdatedEvent>
  memberVerificationStatusUpdatedEventsConnection: MemberVerificationStatusUpdatedEventConnection
  membersByHandle: Array<MembersByHandleFtsOutput>
  membershipBoughtEventByUniqueInput?: Maybe<MembershipBoughtEvent>
  membershipBoughtEvents: Array<MembershipBoughtEvent>
  membershipBoughtEventsConnection: MembershipBoughtEventConnection
  membershipByUniqueInput?: Maybe<Membership>
  membershipPriceUpdatedEventByUniqueInput?: Maybe<MembershipPriceUpdatedEvent>
  membershipPriceUpdatedEvents: Array<MembershipPriceUpdatedEvent>
  membershipPriceUpdatedEventsConnection: MembershipPriceUpdatedEventConnection
  membershipSystemSnapshotByUniqueInput?: Maybe<MembershipSystemSnapshot>
  membershipSystemSnapshots: Array<MembershipSystemSnapshot>
  membershipSystemSnapshotsConnection: MembershipSystemSnapshotConnection
  memberships: Array<Membership>
  membershipsConnection: MembershipConnection
  newCandidateEventByUniqueInput?: Maybe<NewCandidateEvent>
  newCandidateEvents: Array<NewCandidateEvent>
  newCandidateEventsConnection: NewCandidateEventConnection
  newCouncilElectedEventByUniqueInput?: Maybe<NewCouncilElectedEvent>
  newCouncilElectedEvents: Array<NewCouncilElectedEvent>
  newCouncilElectedEventsConnection: NewCouncilElectedEventConnection
  newCouncilNotElectedEventByUniqueInput?: Maybe<NewCouncilNotElectedEvent>
  newCouncilNotElectedEvents: Array<NewCouncilNotElectedEvent>
  newCouncilNotElectedEventsConnection: NewCouncilNotElectedEventConnection
  newMissedRewardLevelReachedEventByUniqueInput?: Maybe<NewMissedRewardLevelReachedEvent>
  newMissedRewardLevelReachedEvents: Array<NewMissedRewardLevelReachedEvent>
  newMissedRewardLevelReachedEventsConnection: NewMissedRewardLevelReachedEventConnection
  notEnoughCandidatesEventByUniqueInput?: Maybe<NotEnoughCandidatesEvent>
  notEnoughCandidatesEvents: Array<NotEnoughCandidatesEvent>
  notEnoughCandidatesEventsConnection: NotEnoughCandidatesEventConnection
  openingAddedEventByUniqueInput?: Maybe<OpeningAddedEvent>
  openingAddedEvents: Array<OpeningAddedEvent>
  openingAddedEventsConnection: OpeningAddedEventConnection
  openingCanceledEventByUniqueInput?: Maybe<OpeningCanceledEvent>
  openingCanceledEvents: Array<OpeningCanceledEvent>
  openingCanceledEventsConnection: OpeningCanceledEventConnection
  openingFilledEventByUniqueInput?: Maybe<OpeningFilledEvent>
  openingFilledEvents: Array<OpeningFilledEvent>
  openingFilledEventsConnection: OpeningFilledEventConnection
  postAddedEventByUniqueInput?: Maybe<PostAddedEvent>
  postAddedEvents: Array<PostAddedEvent>
  postAddedEventsConnection: PostAddedEventConnection
  postDeletedEventByUniqueInput?: Maybe<PostDeletedEvent>
  postDeletedEvents: Array<PostDeletedEvent>
  postDeletedEventsConnection: PostDeletedEventConnection
  postModeratedEventByUniqueInput?: Maybe<PostModeratedEvent>
  postModeratedEvents: Array<PostModeratedEvent>
  postModeratedEventsConnection: PostModeratedEventConnection
  postReactedEventByUniqueInput?: Maybe<PostReactedEvent>
  postReactedEvents: Array<PostReactedEvent>
  postReactedEventsConnection: PostReactedEventConnection
  postTextUpdatedEventByUniqueInput?: Maybe<PostTextUpdatedEvent>
  postTextUpdatedEvents: Array<PostTextUpdatedEvent>
  postTextUpdatedEventsConnection: PostTextUpdatedEventConnection
  postsByText: Array<PostsByTextFtsOutput>
  proposalByUniqueInput?: Maybe<Proposal>
  proposalCancelledEventByUniqueInput?: Maybe<ProposalCancelledEvent>
  proposalCancelledEvents: Array<ProposalCancelledEvent>
  proposalCancelledEventsConnection: ProposalCancelledEventConnection
  proposalCreatedEventByUniqueInput?: Maybe<ProposalCreatedEvent>
  proposalCreatedEvents: Array<ProposalCreatedEvent>
  proposalCreatedEventsConnection: ProposalCreatedEventConnection
  proposalDecisionMadeEventByUniqueInput?: Maybe<ProposalDecisionMadeEvent>
  proposalDecisionMadeEvents: Array<ProposalDecisionMadeEvent>
  proposalDecisionMadeEventsConnection: ProposalDecisionMadeEventConnection
  proposalDiscussionPostByUniqueInput?: Maybe<ProposalDiscussionPost>
  proposalDiscussionPostCreatedEventByUniqueInput?: Maybe<ProposalDiscussionPostCreatedEvent>
  proposalDiscussionPostCreatedEvents: Array<ProposalDiscussionPostCreatedEvent>
  proposalDiscussionPostCreatedEventsConnection: ProposalDiscussionPostCreatedEventConnection
  proposalDiscussionPostDeletedEventByUniqueInput?: Maybe<ProposalDiscussionPostDeletedEvent>
  proposalDiscussionPostDeletedEvents: Array<ProposalDiscussionPostDeletedEvent>
  proposalDiscussionPostDeletedEventsConnection: ProposalDiscussionPostDeletedEventConnection
  proposalDiscussionPostUpdatedEventByUniqueInput?: Maybe<ProposalDiscussionPostUpdatedEvent>
  proposalDiscussionPostUpdatedEvents: Array<ProposalDiscussionPostUpdatedEvent>
  proposalDiscussionPostUpdatedEventsConnection: ProposalDiscussionPostUpdatedEventConnection
  proposalDiscussionPosts: Array<ProposalDiscussionPost>
  proposalDiscussionPostsConnection: ProposalDiscussionPostConnection
  proposalDiscussionThreadByUniqueInput?: Maybe<ProposalDiscussionThread>
  proposalDiscussionThreadModeChangedEventByUniqueInput?: Maybe<ProposalDiscussionThreadModeChangedEvent>
  proposalDiscussionThreadModeChangedEvents: Array<ProposalDiscussionThreadModeChangedEvent>
  proposalDiscussionThreadModeChangedEventsConnection: ProposalDiscussionThreadModeChangedEventConnection
  proposalDiscussionThreads: Array<ProposalDiscussionThread>
  proposalDiscussionThreadsConnection: ProposalDiscussionThreadConnection
  proposalDiscussionWhitelistByUniqueInput?: Maybe<ProposalDiscussionWhitelist>
  proposalDiscussionWhitelists: Array<ProposalDiscussionWhitelist>
  proposalDiscussionWhitelistsConnection: ProposalDiscussionWhitelistConnection
  proposalExecutedEventByUniqueInput?: Maybe<ProposalExecutedEvent>
  proposalExecutedEvents: Array<ProposalExecutedEvent>
  proposalExecutedEventsConnection: ProposalExecutedEventConnection
  proposalStatusUpdatedEventByUniqueInput?: Maybe<ProposalStatusUpdatedEvent>
  proposalStatusUpdatedEvents: Array<ProposalStatusUpdatedEvent>
  proposalStatusUpdatedEventsConnection: ProposalStatusUpdatedEventConnection
  proposalVotedEventByUniqueInput?: Maybe<ProposalVotedEvent>
  proposalVotedEvents: Array<ProposalVotedEvent>
  proposalVotedEventsConnection: ProposalVotedEventConnection
  proposals: Array<Proposal>
  proposalsByDescription: Array<ProposalsByDescriptionFtsOutput>
  proposalsByTitle: Array<ProposalsByTitleFtsOutput>
  proposalsConnection: ProposalConnection
  referendumFinishedEventByUniqueInput?: Maybe<ReferendumFinishedEvent>
  referendumFinishedEvents: Array<ReferendumFinishedEvent>
  referendumFinishedEventsConnection: ReferendumFinishedEventConnection
  referendumStageRevealingByUniqueInput?: Maybe<ReferendumStageRevealing>
  referendumStageRevealings: Array<ReferendumStageRevealing>
  referendumStageRevealingsConnection: ReferendumStageRevealingConnection
  referendumStageVotingByUniqueInput?: Maybe<ReferendumStageVoting>
  referendumStageVotings: Array<ReferendumStageVoting>
  referendumStageVotingsConnection: ReferendumStageVotingConnection
  referendumStartedEventByUniqueInput?: Maybe<ReferendumStartedEvent>
  referendumStartedEvents: Array<ReferendumStartedEvent>
  referendumStartedEventsConnection: ReferendumStartedEventConnection
  referendumStartedForcefullyEventByUniqueInput?: Maybe<ReferendumStartedForcefullyEvent>
  referendumStartedForcefullyEvents: Array<ReferendumStartedForcefullyEvent>
  referendumStartedForcefullyEventsConnection: ReferendumStartedForcefullyEventConnection
  referralCutUpdatedEventByUniqueInput?: Maybe<ReferralCutUpdatedEvent>
  referralCutUpdatedEvents: Array<ReferralCutUpdatedEvent>
  referralCutUpdatedEventsConnection: ReferralCutUpdatedEventConnection
  requestFundedEventByUniqueInput?: Maybe<RequestFundedEvent>
  requestFundedEvents: Array<RequestFundedEvent>
  requestFundedEventsConnection: RequestFundedEventConnection
  revealingStageStartedEventByUniqueInput?: Maybe<RevealingStageStartedEvent>
  revealingStageStartedEvents: Array<RevealingStageStartedEvent>
  revealingStageStartedEventsConnection: RevealingStageStartedEventConnection
  rewardPaidEventByUniqueInput?: Maybe<RewardPaidEvent>
  rewardPaidEvents: Array<RewardPaidEvent>
  rewardPaidEventsConnection: RewardPaidEventConnection
  rewardPaymentEventByUniqueInput?: Maybe<RewardPaymentEvent>
  rewardPaymentEvents: Array<RewardPaymentEvent>
  rewardPaymentEventsConnection: RewardPaymentEventConnection
  runtimeWasmBytecodeByUniqueInput?: Maybe<RuntimeWasmBytecode>
  runtimeWasmBytecodes: Array<RuntimeWasmBytecode>
  runtimeWasmBytecodesConnection: RuntimeWasmBytecodeConnection
  search: Array<SearchFtsOutput>
  stakeDecreasedEventByUniqueInput?: Maybe<StakeDecreasedEvent>
  stakeDecreasedEvents: Array<StakeDecreasedEvent>
  stakeDecreasedEventsConnection: StakeDecreasedEventConnection
  stakeIncreasedEventByUniqueInput?: Maybe<StakeIncreasedEvent>
  stakeIncreasedEvents: Array<StakeIncreasedEvent>
  stakeIncreasedEventsConnection: StakeIncreasedEventConnection
  stakeReleasedEventByUniqueInput?: Maybe<StakeReleasedEvent>
  stakeReleasedEvents: Array<StakeReleasedEvent>
  stakeReleasedEventsConnection: StakeReleasedEventConnection
  stakeSlashedEventByUniqueInput?: Maybe<StakeSlashedEvent>
  stakeSlashedEvents: Array<StakeSlashedEvent>
  stakeSlashedEventsConnection: StakeSlashedEventConnection
  stakingAccountAddedEventByUniqueInput?: Maybe<StakingAccountAddedEvent>
  stakingAccountAddedEvents: Array<StakingAccountAddedEvent>
  stakingAccountAddedEventsConnection: StakingAccountAddedEventConnection
  stakingAccountConfirmedEventByUniqueInput?: Maybe<StakingAccountConfirmedEvent>
  stakingAccountConfirmedEvents: Array<StakingAccountConfirmedEvent>
  stakingAccountConfirmedEventsConnection: StakingAccountConfirmedEventConnection
  stakingAccountRemovedEventByUniqueInput?: Maybe<StakingAccountRemovedEvent>
  stakingAccountRemovedEvents: Array<StakingAccountRemovedEvent>
  stakingAccountRemovedEventsConnection: StakingAccountRemovedEventConnection
  statusTextChangedEventByUniqueInput?: Maybe<StatusTextChangedEvent>
  statusTextChangedEvents: Array<StatusTextChangedEvent>
  statusTextChangedEventsConnection: StatusTextChangedEventConnection
  terminatedLeaderEventByUniqueInput?: Maybe<TerminatedLeaderEvent>
  terminatedLeaderEvents: Array<TerminatedLeaderEvent>
  terminatedLeaderEventsConnection: TerminatedLeaderEventConnection
  terminatedWorkerEventByUniqueInput?: Maybe<TerminatedWorkerEvent>
  terminatedWorkerEvents: Array<TerminatedWorkerEvent>
  terminatedWorkerEventsConnection: TerminatedWorkerEventConnection
  threadCreatedEventByUniqueInput?: Maybe<ThreadCreatedEvent>
  threadCreatedEvents: Array<ThreadCreatedEvent>
  threadCreatedEventsConnection: ThreadCreatedEventConnection
  threadDeletedEventByUniqueInput?: Maybe<ThreadDeletedEvent>
  threadDeletedEvents: Array<ThreadDeletedEvent>
  threadDeletedEventsConnection: ThreadDeletedEventConnection
  threadMetadataUpdatedEventByUniqueInput?: Maybe<ThreadMetadataUpdatedEvent>
  threadMetadataUpdatedEvents: Array<ThreadMetadataUpdatedEvent>
  threadMetadataUpdatedEventsConnection: ThreadMetadataUpdatedEventConnection
  threadModeratedEventByUniqueInput?: Maybe<ThreadModeratedEvent>
  threadModeratedEvents: Array<ThreadModeratedEvent>
  threadModeratedEventsConnection: ThreadModeratedEventConnection
  threadMovedEventByUniqueInput?: Maybe<ThreadMovedEvent>
  threadMovedEvents: Array<ThreadMovedEvent>
  threadMovedEventsConnection: ThreadMovedEventConnection
  threadsByTitle: Array<ThreadsByTitleFtsOutput>
  upcomingWorkingGroupOpeningByUniqueInput?: Maybe<UpcomingWorkingGroupOpening>
  upcomingWorkingGroupOpenings: Array<UpcomingWorkingGroupOpening>
  upcomingWorkingGroupOpeningsConnection: UpcomingWorkingGroupOpeningConnection
  videoByUniqueInput?: Maybe<Video>
  videoCategories: Array<VideoCategory>
  videoCategoriesByName: Array<VideoCategoriesByNameFtsOutput>
  videoCategoriesConnection: VideoCategoryConnection
  videoCategoryByUniqueInput?: Maybe<VideoCategory>
  videoMediaEncodingByUniqueInput?: Maybe<VideoMediaEncoding>
  videoMediaEncodings: Array<VideoMediaEncoding>
  videoMediaEncodingsConnection: VideoMediaEncodingConnection
  videoMediaMetadata: Array<VideoMediaMetadata>
  videoMediaMetadataByUniqueInput?: Maybe<VideoMediaMetadata>
  videoMediaMetadataConnection: VideoMediaMetadataConnection
  videos: Array<Video>
  videosConnection: VideoConnection
  voteCastEventByUniqueInput?: Maybe<VoteCastEvent>
  voteCastEvents: Array<VoteCastEvent>
  voteCastEventsConnection: VoteCastEventConnection
  voteOnPollEventByUniqueInput?: Maybe<VoteOnPollEvent>
  voteOnPollEvents: Array<VoteOnPollEvent>
  voteOnPollEventsConnection: VoteOnPollEventConnection
  voteRevealedEventByUniqueInput?: Maybe<VoteRevealedEvent>
  voteRevealedEvents: Array<VoteRevealedEvent>
  voteRevealedEventsConnection: VoteRevealedEventConnection
  votingPeriodStartedEventByUniqueInput?: Maybe<VotingPeriodStartedEvent>
  votingPeriodStartedEvents: Array<VotingPeriodStartedEvent>
  votingPeriodStartedEventsConnection: VotingPeriodStartedEventConnection
  workEntryAnnouncedEventByUniqueInput?: Maybe<WorkEntryAnnouncedEvent>
  workEntryAnnouncedEvents: Array<WorkEntryAnnouncedEvent>
  workEntryAnnouncedEventsConnection: WorkEntryAnnouncedEventConnection
  workerByUniqueInput?: Maybe<Worker>
  workerExitedEventByUniqueInput?: Maybe<WorkerExitedEvent>
  workerExitedEvents: Array<WorkerExitedEvent>
  workerExitedEventsConnection: WorkerExitedEventConnection
  workerRewardAccountUpdatedEventByUniqueInput?: Maybe<WorkerRewardAccountUpdatedEvent>
  workerRewardAccountUpdatedEvents: Array<WorkerRewardAccountUpdatedEvent>
  workerRewardAccountUpdatedEventsConnection: WorkerRewardAccountUpdatedEventConnection
  workerRewardAmountUpdatedEventByUniqueInput?: Maybe<WorkerRewardAmountUpdatedEvent>
  workerRewardAmountUpdatedEvents: Array<WorkerRewardAmountUpdatedEvent>
  workerRewardAmountUpdatedEventsConnection: WorkerRewardAmountUpdatedEventConnection
  workerRoleAccountUpdatedEventByUniqueInput?: Maybe<WorkerRoleAccountUpdatedEvent>
  workerRoleAccountUpdatedEvents: Array<WorkerRoleAccountUpdatedEvent>
  workerRoleAccountUpdatedEventsConnection: WorkerRoleAccountUpdatedEventConnection
  workerStartedLeavingEventByUniqueInput?: Maybe<WorkerStartedLeavingEvent>
  workerStartedLeavingEvents: Array<WorkerStartedLeavingEvent>
  workerStartedLeavingEventsConnection: WorkerStartedLeavingEventConnection
  workers: Array<Worker>
  workersConnection: WorkerConnection
  workingGroupApplicationByUniqueInput?: Maybe<WorkingGroupApplication>
  workingGroupApplications: Array<WorkingGroupApplication>
  workingGroupApplicationsConnection: WorkingGroupApplicationConnection
  workingGroupByUniqueInput?: Maybe<WorkingGroup>
  workingGroupMetadata: Array<WorkingGroupMetadata>
  workingGroupMetadataByUniqueInput?: Maybe<WorkingGroupMetadata>
  workingGroupMetadataConnection: WorkingGroupMetadataConnection
  workingGroupOpeningByUniqueInput?: Maybe<WorkingGroupOpening>
  workingGroupOpeningMetadata: Array<WorkingGroupOpeningMetadata>
  workingGroupOpeningMetadataByUniqueInput?: Maybe<WorkingGroupOpeningMetadata>
  workingGroupOpeningMetadataConnection: WorkingGroupOpeningMetadataConnection
  workingGroupOpenings: Array<WorkingGroupOpening>
  workingGroupOpeningsConnection: WorkingGroupOpeningConnection
  workingGroups: Array<WorkingGroup>
  workingGroupsConnection: WorkingGroupConnection
}

export type QueryAnnouncingPeriodStartedEventByUniqueInputArgs = {
  where: AnnouncingPeriodStartedEventWhereUniqueInput
}

export type QueryAnnouncingPeriodStartedEventsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<AnnouncingPeriodStartedEventOrderByInput>>
  where?: InputMaybe<AnnouncingPeriodStartedEventWhereInput>
}

export type QueryAnnouncingPeriodStartedEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<AnnouncingPeriodStartedEventOrderByInput>>
  where?: InputMaybe<AnnouncingPeriodStartedEventWhereInput>
}

export type QueryApplicationFormQuestionAnswerByUniqueInputArgs = {
  where: ApplicationFormQuestionAnswerWhereUniqueInput
}

export type QueryApplicationFormQuestionAnswersArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ApplicationFormQuestionAnswerOrderByInput>>
  where?: InputMaybe<ApplicationFormQuestionAnswerWhereInput>
}

export type QueryApplicationFormQuestionAnswersConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ApplicationFormQuestionAnswerOrderByInput>>
  where?: InputMaybe<ApplicationFormQuestionAnswerWhereInput>
}

export type QueryApplicationFormQuestionByUniqueInputArgs = {
  where: ApplicationFormQuestionWhereUniqueInput
}

export type QueryApplicationFormQuestionsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ApplicationFormQuestionOrderByInput>>
  where?: InputMaybe<ApplicationFormQuestionWhereInput>
}

export type QueryApplicationFormQuestionsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ApplicationFormQuestionOrderByInput>>
  where?: InputMaybe<ApplicationFormQuestionWhereInput>
}

export type QueryApplicationWithdrawnEventByUniqueInputArgs = {
  where: ApplicationWithdrawnEventWhereUniqueInput
}

export type QueryApplicationWithdrawnEventsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ApplicationWithdrawnEventOrderByInput>>
  where?: InputMaybe<ApplicationWithdrawnEventWhereInput>
}

export type QueryApplicationWithdrawnEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ApplicationWithdrawnEventOrderByInput>>
  where?: InputMaybe<ApplicationWithdrawnEventWhereInput>
}

export type QueryAppliedOnOpeningEventByUniqueInputArgs = {
  where: AppliedOnOpeningEventWhereUniqueInput
}

export type QueryAppliedOnOpeningEventsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<AppliedOnOpeningEventOrderByInput>>
  where?: InputMaybe<AppliedOnOpeningEventWhereInput>
}

export type QueryAppliedOnOpeningEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<AppliedOnOpeningEventOrderByInput>>
  where?: InputMaybe<AppliedOnOpeningEventWhereInput>
}

export type QueryBountiesArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<BountyOrderByInput>>
  where?: InputMaybe<BountyWhereInput>
}

export type QueryBountiesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<BountyOrderByInput>>
  where?: InputMaybe<BountyWhereInput>
}

export type QueryBountyByUniqueInputArgs = {
  where: BountyWhereUniqueInput
}

export type QueryBountyContributionByUniqueInputArgs = {
  where: BountyContributionWhereUniqueInput
}

export type QueryBountyContributionsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<BountyContributionOrderByInput>>
  where?: InputMaybe<BountyContributionWhereInput>
}

export type QueryBountyContributionsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<BountyContributionOrderByInput>>
  where?: InputMaybe<BountyContributionWhereInput>
}

export type QueryBountyCreatedEventByUniqueInputArgs = {
  where: BountyCreatedEventWhereUniqueInput
}

export type QueryBountyCreatedEventsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<BountyCreatedEventOrderByInput>>
  where?: InputMaybe<BountyCreatedEventWhereInput>
}

export type QueryBountyCreatedEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<BountyCreatedEventOrderByInput>>
  where?: InputMaybe<BountyCreatedEventWhereInput>
}

export type QueryBountyEntriesArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<BountyEntryOrderByInput>>
  where?: InputMaybe<BountyEntryWhereInput>
}

export type QueryBountyEntriesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<BountyEntryOrderByInput>>
  where?: InputMaybe<BountyEntryWhereInput>
}

export type QueryBountyEntryByUniqueInputArgs = {
  where: BountyEntryWhereUniqueInput
}

export type QueryBountyMaxFundingReachedEventByUniqueInputArgs = {
  where: BountyMaxFundingReachedEventWhereUniqueInput
}

export type QueryBountyMaxFundingReachedEventsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<BountyMaxFundingReachedEventOrderByInput>>
  where?: InputMaybe<BountyMaxFundingReachedEventWhereInput>
}

export type QueryBountyMaxFundingReachedEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<BountyMaxFundingReachedEventOrderByInput>>
  where?: InputMaybe<BountyMaxFundingReachedEventWhereInput>
}

export type QueryBountyWorkDataArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<BountyWorkDataOrderByInput>>
  where?: InputMaybe<BountyWorkDataWhereInput>
}

export type QueryBountyWorkDataByUniqueInputArgs = {
  where: BountyWorkDataWhereUniqueInput
}

export type QueryBountyWorkDataConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<BountyWorkDataOrderByInput>>
  where?: InputMaybe<BountyWorkDataWhereInput>
}

export type QueryBudgetBalanceSetEventByUniqueInputArgs = {
  where: BudgetBalanceSetEventWhereUniqueInput
}

export type QueryBudgetBalanceSetEventsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<BudgetBalanceSetEventOrderByInput>>
  where?: InputMaybe<BudgetBalanceSetEventWhereInput>
}

export type QueryBudgetBalanceSetEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<BudgetBalanceSetEventOrderByInput>>
  where?: InputMaybe<BudgetBalanceSetEventWhereInput>
}

export type QueryBudgetIncrementUpdatedEventByUniqueInputArgs = {
  where: BudgetIncrementUpdatedEventWhereUniqueInput
}

export type QueryBudgetIncrementUpdatedEventsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<BudgetIncrementUpdatedEventOrderByInput>>
  where?: InputMaybe<BudgetIncrementUpdatedEventWhereInput>
}

export type QueryBudgetIncrementUpdatedEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<BudgetIncrementUpdatedEventOrderByInput>>
  where?: InputMaybe<BudgetIncrementUpdatedEventWhereInput>
}

export type QueryBudgetRefillEventByUniqueInputArgs = {
  where: BudgetRefillEventWhereUniqueInput
}

export type QueryBudgetRefillEventsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<BudgetRefillEventOrderByInput>>
  where?: InputMaybe<BudgetRefillEventWhereInput>
}

export type QueryBudgetRefillEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<BudgetRefillEventOrderByInput>>
  where?: InputMaybe<BudgetRefillEventWhereInput>
}

export type QueryBudgetRefillPlannedEventByUniqueInputArgs = {
  where: BudgetRefillPlannedEventWhereUniqueInput
}

export type QueryBudgetRefillPlannedEventsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<BudgetRefillPlannedEventOrderByInput>>
  where?: InputMaybe<BudgetRefillPlannedEventWhereInput>
}

export type QueryBudgetRefillPlannedEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<BudgetRefillPlannedEventOrderByInput>>
  where?: InputMaybe<BudgetRefillPlannedEventWhereInput>
}

export type QueryBudgetSetEventByUniqueInputArgs = {
  where: BudgetSetEventWhereUniqueInput
}

export type QueryBudgetSetEventsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<BudgetSetEventOrderByInput>>
  where?: InputMaybe<BudgetSetEventWhereInput>
}

export type QueryBudgetSetEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<BudgetSetEventOrderByInput>>
  where?: InputMaybe<BudgetSetEventWhereInput>
}

export type QueryBudgetSpendingEventByUniqueInputArgs = {
  where: BudgetSpendingEventWhereUniqueInput
}

export type QueryBudgetSpendingEventsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<BudgetSpendingEventOrderByInput>>
  where?: InputMaybe<BudgetSpendingEventWhereInput>
}

export type QueryBudgetSpendingEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<BudgetSpendingEventOrderByInput>>
  where?: InputMaybe<BudgetSpendingEventWhereInput>
}

export type QueryCandidacyNoteMetadataArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<CandidacyNoteMetadataOrderByInput>>
  where?: InputMaybe<CandidacyNoteMetadataWhereInput>
}

export type QueryCandidacyNoteMetadataByUniqueInputArgs = {
  where: CandidacyNoteMetadataWhereUniqueInput
}

export type QueryCandidacyNoteMetadataConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<CandidacyNoteMetadataOrderByInput>>
  where?: InputMaybe<CandidacyNoteMetadataWhereInput>
}

export type QueryCandidacyNoteSetEventByUniqueInputArgs = {
  where: CandidacyNoteSetEventWhereUniqueInput
}

export type QueryCandidacyNoteSetEventsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<CandidacyNoteSetEventOrderByInput>>
  where?: InputMaybe<CandidacyNoteSetEventWhereInput>
}

export type QueryCandidacyNoteSetEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<CandidacyNoteSetEventOrderByInput>>
  where?: InputMaybe<CandidacyNoteSetEventWhereInput>
}

export type QueryCandidacyStakeReleaseEventByUniqueInputArgs = {
  where: CandidacyStakeReleaseEventWhereUniqueInput
}

export type QueryCandidacyStakeReleaseEventsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<CandidacyStakeReleaseEventOrderByInput>>
  where?: InputMaybe<CandidacyStakeReleaseEventWhereInput>
}

export type QueryCandidacyStakeReleaseEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<CandidacyStakeReleaseEventOrderByInput>>
  where?: InputMaybe<CandidacyStakeReleaseEventWhereInput>
}

export type QueryCandidacyWithdrawEventByUniqueInputArgs = {
  where: CandidacyWithdrawEventWhereUniqueInput
}

export type QueryCandidacyWithdrawEventsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<CandidacyWithdrawEventOrderByInput>>
  where?: InputMaybe<CandidacyWithdrawEventWhereInput>
}

export type QueryCandidacyWithdrawEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<CandidacyWithdrawEventOrderByInput>>
  where?: InputMaybe<CandidacyWithdrawEventWhereInput>
}

export type QueryCandidateByUniqueInputArgs = {
  where: CandidateWhereUniqueInput
}

export type QueryCandidatesArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<CandidateOrderByInput>>
  where?: InputMaybe<CandidateWhereInput>
}

export type QueryCandidatesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<CandidateOrderByInput>>
  where?: InputMaybe<CandidateWhereInput>
}

export type QueryCastVoteByUniqueInputArgs = {
  where: CastVoteWhereUniqueInput
}

export type QueryCastVotesArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<CastVoteOrderByInput>>
  where?: InputMaybe<CastVoteWhereInput>
}

export type QueryCastVotesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<CastVoteOrderByInput>>
  where?: InputMaybe<CastVoteWhereInput>
}

export type QueryCategoryArchivalStatusUpdatedEventByUniqueInputArgs = {
  where: CategoryArchivalStatusUpdatedEventWhereUniqueInput
}

export type QueryCategoryArchivalStatusUpdatedEventsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<CategoryArchivalStatusUpdatedEventOrderByInput>>
  where?: InputMaybe<CategoryArchivalStatusUpdatedEventWhereInput>
}

export type QueryCategoryArchivalStatusUpdatedEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<CategoryArchivalStatusUpdatedEventOrderByInput>>
  where?: InputMaybe<CategoryArchivalStatusUpdatedEventWhereInput>
}

export type QueryCategoryCreatedEventByUniqueInputArgs = {
  where: CategoryCreatedEventWhereUniqueInput
}

export type QueryCategoryCreatedEventsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<CategoryCreatedEventOrderByInput>>
  where?: InputMaybe<CategoryCreatedEventWhereInput>
}

export type QueryCategoryCreatedEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<CategoryCreatedEventOrderByInput>>
  where?: InputMaybe<CategoryCreatedEventWhereInput>
}

export type QueryCategoryDeletedEventByUniqueInputArgs = {
  where: CategoryDeletedEventWhereUniqueInput
}

export type QueryCategoryDeletedEventsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<CategoryDeletedEventOrderByInput>>
  where?: InputMaybe<CategoryDeletedEventWhereInput>
}

export type QueryCategoryDeletedEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<CategoryDeletedEventOrderByInput>>
  where?: InputMaybe<CategoryDeletedEventWhereInput>
}

export type QueryCategoryMembershipOfModeratorUpdatedEventByUniqueInputArgs = {
  where: CategoryMembershipOfModeratorUpdatedEventWhereUniqueInput
}

export type QueryCategoryMembershipOfModeratorUpdatedEventsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<CategoryMembershipOfModeratorUpdatedEventOrderByInput>>
  where?: InputMaybe<CategoryMembershipOfModeratorUpdatedEventWhereInput>
}

export type QueryCategoryMembershipOfModeratorUpdatedEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<CategoryMembershipOfModeratorUpdatedEventOrderByInput>>
  where?: InputMaybe<CategoryMembershipOfModeratorUpdatedEventWhereInput>
}

export type QueryCategoryStickyThreadUpdateEventByUniqueInputArgs = {
  where: CategoryStickyThreadUpdateEventWhereUniqueInput
}

export type QueryCategoryStickyThreadUpdateEventsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<CategoryStickyThreadUpdateEventOrderByInput>>
  where?: InputMaybe<CategoryStickyThreadUpdateEventWhereInput>
}

export type QueryCategoryStickyThreadUpdateEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<CategoryStickyThreadUpdateEventOrderByInput>>
  where?: InputMaybe<CategoryStickyThreadUpdateEventWhereInput>
}

export type QueryChannelByUniqueInputArgs = {
  where: ChannelWhereUniqueInput
}

export type QueryChannelCategoriesArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ChannelCategoryOrderByInput>>
  where?: InputMaybe<ChannelCategoryWhereInput>
}

export type QueryChannelCategoriesByNameArgs = {
  limit?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  text: Scalars['String']
  whereChannelCategory?: InputMaybe<ChannelCategoryWhereInput>
}

export type QueryChannelCategoriesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ChannelCategoryOrderByInput>>
  where?: InputMaybe<ChannelCategoryWhereInput>
}

export type QueryChannelCategoryByUniqueInputArgs = {
  where: ChannelCategoryWhereUniqueInput
}

export type QueryChannelsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ChannelOrderByInput>>
  where?: InputMaybe<ChannelWhereInput>
}

export type QueryChannelsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ChannelOrderByInput>>
  where?: InputMaybe<ChannelWhereInput>
}

export type QueryCouncilMemberByUniqueInputArgs = {
  where: CouncilMemberWhereUniqueInput
}

export type QueryCouncilMembersArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<CouncilMemberOrderByInput>>
  where?: InputMaybe<CouncilMemberWhereInput>
}

export type QueryCouncilMembersConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<CouncilMemberOrderByInput>>
  where?: InputMaybe<CouncilMemberWhereInput>
}

export type QueryCouncilStageUpdateByUniqueInputArgs = {
  where: CouncilStageUpdateWhereUniqueInput
}

export type QueryCouncilStageUpdatesArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<CouncilStageUpdateOrderByInput>>
  where?: InputMaybe<CouncilStageUpdateWhereInput>
}

export type QueryCouncilStageUpdatesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<CouncilStageUpdateOrderByInput>>
  where?: InputMaybe<CouncilStageUpdateWhereInput>
}

export type QueryCouncilorRewardUpdatedEventByUniqueInputArgs = {
  where: CouncilorRewardUpdatedEventWhereUniqueInput
}

export type QueryCouncilorRewardUpdatedEventsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<CouncilorRewardUpdatedEventOrderByInput>>
  where?: InputMaybe<CouncilorRewardUpdatedEventWhereInput>
}

export type QueryCouncilorRewardUpdatedEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<CouncilorRewardUpdatedEventOrderByInput>>
  where?: InputMaybe<CouncilorRewardUpdatedEventWhereInput>
}

export type QueryCuratorGroupByUniqueInputArgs = {
  where: CuratorGroupWhereUniqueInput
}

export type QueryCuratorGroupsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<CuratorGroupOrderByInput>>
  where?: InputMaybe<CuratorGroupWhereInput>
}

export type QueryCuratorGroupsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<CuratorGroupOrderByInput>>
  where?: InputMaybe<CuratorGroupWhereInput>
}

export type QueryDataObjectByUniqueInputArgs = {
  where: DataObjectWhereUniqueInput
}

export type QueryDataObjectsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<DataObjectOrderByInput>>
  where?: InputMaybe<DataObjectWhereInput>
}

export type QueryDataObjectsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<DataObjectOrderByInput>>
  where?: InputMaybe<DataObjectWhereInput>
}

export type QueryElectedCouncilByUniqueInputArgs = {
  where: ElectedCouncilWhereUniqueInput
}

export type QueryElectedCouncilsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ElectedCouncilOrderByInput>>
  where?: InputMaybe<ElectedCouncilWhereInput>
}

export type QueryElectedCouncilsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ElectedCouncilOrderByInput>>
  where?: InputMaybe<ElectedCouncilWhereInput>
}

export type QueryElectionRoundByUniqueInputArgs = {
  where: ElectionRoundWhereUniqueInput
}

export type QueryElectionRoundsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ElectionRoundOrderByInput>>
  where?: InputMaybe<ElectionRoundWhereInput>
}

export type QueryElectionRoundsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ElectionRoundOrderByInput>>
  where?: InputMaybe<ElectionRoundWhereInput>
}

export type QueryEventsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<EventOrderByInput>>
  where?: InputMaybe<EventWhereInput>
}

export type QueryForumCategoriesArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ForumCategoryOrderByInput>>
  where?: InputMaybe<ForumCategoryWhereInput>
}

export type QueryForumCategoriesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ForumCategoryOrderByInput>>
  where?: InputMaybe<ForumCategoryWhereInput>
}

export type QueryForumCategoryByUniqueInputArgs = {
  where: ForumCategoryWhereUniqueInput
}

export type QueryForumPollAlternativeByUniqueInputArgs = {
  where: ForumPollAlternativeWhereUniqueInput
}

export type QueryForumPollAlternativesArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ForumPollAlternativeOrderByInput>>
  where?: InputMaybe<ForumPollAlternativeWhereInput>
}

export type QueryForumPollAlternativesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ForumPollAlternativeOrderByInput>>
  where?: InputMaybe<ForumPollAlternativeWhereInput>
}

export type QueryForumPollByUniqueInputArgs = {
  where: ForumPollWhereUniqueInput
}

export type QueryForumPollsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ForumPollOrderByInput>>
  where?: InputMaybe<ForumPollWhereInput>
}

export type QueryForumPollsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ForumPollOrderByInput>>
  where?: InputMaybe<ForumPollWhereInput>
}

export type QueryForumPostByUniqueInputArgs = {
  where: ForumPostWhereUniqueInput
}

export type QueryForumPostReactionByUniqueInputArgs = {
  where: ForumPostReactionWhereUniqueInput
}

export type QueryForumPostReactionsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ForumPostReactionOrderByInput>>
  where?: InputMaybe<ForumPostReactionWhereInput>
}

export type QueryForumPostReactionsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ForumPostReactionOrderByInput>>
  where?: InputMaybe<ForumPostReactionWhereInput>
}

export type QueryForumPostsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ForumPostOrderByInput>>
  where?: InputMaybe<ForumPostWhereInput>
}

export type QueryForumPostsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ForumPostOrderByInput>>
  where?: InputMaybe<ForumPostWhereInput>
}

export type QueryForumThreadByUniqueInputArgs = {
  where: ForumThreadWhereUniqueInput
}

export type QueryForumThreadTagByUniqueInputArgs = {
  where: ForumThreadTagWhereUniqueInput
}

export type QueryForumThreadTagsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ForumThreadTagOrderByInput>>
  where?: InputMaybe<ForumThreadTagWhereInput>
}

export type QueryForumThreadTagsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ForumThreadTagOrderByInput>>
  where?: InputMaybe<ForumThreadTagWhereInput>
}

export type QueryForumThreadsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ForumThreadOrderByInput>>
  where?: InputMaybe<ForumThreadWhereInput>
}

export type QueryForumThreadsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ForumThreadOrderByInput>>
  where?: InputMaybe<ForumThreadWhereInput>
}

export type QueryFundingRequestDestinationByUniqueInputArgs = {
  where: FundingRequestDestinationWhereUniqueInput
}

export type QueryFundingRequestDestinationsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<FundingRequestDestinationOrderByInput>>
  where?: InputMaybe<FundingRequestDestinationWhereInput>
}

export type QueryFundingRequestDestinationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<FundingRequestDestinationOrderByInput>>
  where?: InputMaybe<FundingRequestDestinationWhereInput>
}

export type QueryFundingRequestDestinationsListByUniqueInputArgs = {
  where: FundingRequestDestinationsListWhereUniqueInput
}

export type QueryFundingRequestDestinationsListsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<FundingRequestDestinationsListOrderByInput>>
  where?: InputMaybe<FundingRequestDestinationsListWhereInput>
}

export type QueryFundingRequestDestinationsListsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<FundingRequestDestinationsListOrderByInput>>
  where?: InputMaybe<FundingRequestDestinationsListWhereInput>
}

export type QueryInitialInvitationBalanceUpdatedEventByUniqueInputArgs = {
  where: InitialInvitationBalanceUpdatedEventWhereUniqueInput
}

export type QueryInitialInvitationBalanceUpdatedEventsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<InitialInvitationBalanceUpdatedEventOrderByInput>>
  where?: InputMaybe<InitialInvitationBalanceUpdatedEventWhereInput>
}

export type QueryInitialInvitationBalanceUpdatedEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<InitialInvitationBalanceUpdatedEventOrderByInput>>
  where?: InputMaybe<InitialInvitationBalanceUpdatedEventWhereInput>
}

export type QueryInitialInvitationCountUpdatedEventByUniqueInputArgs = {
  where: InitialInvitationCountUpdatedEventWhereUniqueInput
}

export type QueryInitialInvitationCountUpdatedEventsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<InitialInvitationCountUpdatedEventOrderByInput>>
  where?: InputMaybe<InitialInvitationCountUpdatedEventWhereInput>
}

export type QueryInitialInvitationCountUpdatedEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<InitialInvitationCountUpdatedEventOrderByInput>>
  where?: InputMaybe<InitialInvitationCountUpdatedEventWhereInput>
}

export type QueryInvitesTransferredEventByUniqueInputArgs = {
  where: InvitesTransferredEventWhereUniqueInput
}

export type QueryInvitesTransferredEventsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<InvitesTransferredEventOrderByInput>>
  where?: InputMaybe<InvitesTransferredEventWhereInput>
}

export type QueryInvitesTransferredEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<InvitesTransferredEventOrderByInput>>
  where?: InputMaybe<InvitesTransferredEventWhereInput>
}

export type QueryLanguageByUniqueInputArgs = {
  where: LanguageWhereUniqueInput
}

export type QueryLanguagesArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<LanguageOrderByInput>>
  where?: InputMaybe<LanguageWhereInput>
}

export type QueryLanguagesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<LanguageOrderByInput>>
  where?: InputMaybe<LanguageWhereInput>
}

export type QueryLeaderInvitationQuotaUpdatedEventByUniqueInputArgs = {
  where: LeaderInvitationQuotaUpdatedEventWhereUniqueInput
}

export type QueryLeaderInvitationQuotaUpdatedEventsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<LeaderInvitationQuotaUpdatedEventOrderByInput>>
  where?: InputMaybe<LeaderInvitationQuotaUpdatedEventWhereInput>
}

export type QueryLeaderInvitationQuotaUpdatedEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<LeaderInvitationQuotaUpdatedEventOrderByInput>>
  where?: InputMaybe<LeaderInvitationQuotaUpdatedEventWhereInput>
}

export type QueryLeaderSetEventByUniqueInputArgs = {
  where: LeaderSetEventWhereUniqueInput
}

export type QueryLeaderSetEventsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<LeaderSetEventOrderByInput>>
  where?: InputMaybe<LeaderSetEventWhereInput>
}

export type QueryLeaderSetEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<LeaderSetEventOrderByInput>>
  where?: InputMaybe<LeaderSetEventWhereInput>
}

export type QueryLeaderUnsetEventByUniqueInputArgs = {
  where: LeaderUnsetEventWhereUniqueInput
}

export type QueryLeaderUnsetEventsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<LeaderUnsetEventOrderByInput>>
  where?: InputMaybe<LeaderUnsetEventWhereInput>
}

export type QueryLeaderUnsetEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<LeaderUnsetEventOrderByInput>>
  where?: InputMaybe<LeaderUnsetEventWhereInput>
}

export type QueryLicenseByUniqueInputArgs = {
  where: LicenseWhereUniqueInput
}

export type QueryLicensesArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<LicenseOrderByInput>>
  where?: InputMaybe<LicenseWhereInput>
}

export type QueryLicensesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<LicenseOrderByInput>>
  where?: InputMaybe<LicenseWhereInput>
}

export type QueryMemberAccountsUpdatedEventByUniqueInputArgs = {
  where: MemberAccountsUpdatedEventWhereUniqueInput
}

export type QueryMemberAccountsUpdatedEventsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<MemberAccountsUpdatedEventOrderByInput>>
  where?: InputMaybe<MemberAccountsUpdatedEventWhereInput>
}

export type QueryMemberAccountsUpdatedEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<MemberAccountsUpdatedEventOrderByInput>>
  where?: InputMaybe<MemberAccountsUpdatedEventWhereInput>
}

export type QueryMemberInvitedEventByUniqueInputArgs = {
  where: MemberInvitedEventWhereUniqueInput
}

export type QueryMemberInvitedEventsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<MemberInvitedEventOrderByInput>>
  where?: InputMaybe<MemberInvitedEventWhereInput>
}

export type QueryMemberInvitedEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<MemberInvitedEventOrderByInput>>
  where?: InputMaybe<MemberInvitedEventWhereInput>
}

export type QueryMemberMetadataArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<MemberMetadataOrderByInput>>
  where?: InputMaybe<MemberMetadataWhereInput>
}

export type QueryMemberMetadataByUniqueInputArgs = {
  where: MemberMetadataWhereUniqueInput
}

export type QueryMemberMetadataConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<MemberMetadataOrderByInput>>
  where?: InputMaybe<MemberMetadataWhereInput>
}

export type QueryMemberProfileUpdatedEventByUniqueInputArgs = {
  where: MemberProfileUpdatedEventWhereUniqueInput
}

export type QueryMemberProfileUpdatedEventsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<MemberProfileUpdatedEventOrderByInput>>
  where?: InputMaybe<MemberProfileUpdatedEventWhereInput>
}

export type QueryMemberProfileUpdatedEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<MemberProfileUpdatedEventOrderByInput>>
  where?: InputMaybe<MemberProfileUpdatedEventWhereInput>
}

export type QueryMemberVerificationStatusUpdatedEventByUniqueInputArgs = {
  where: MemberVerificationStatusUpdatedEventWhereUniqueInput
}

export type QueryMemberVerificationStatusUpdatedEventsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<MemberVerificationStatusUpdatedEventOrderByInput>>
  where?: InputMaybe<MemberVerificationStatusUpdatedEventWhereInput>
}

export type QueryMemberVerificationStatusUpdatedEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<MemberVerificationStatusUpdatedEventOrderByInput>>
  where?: InputMaybe<MemberVerificationStatusUpdatedEventWhereInput>
}

export type QueryMembersByHandleArgs = {
  limit?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  text: Scalars['String']
  whereMembership?: InputMaybe<MembershipWhereInput>
}

export type QueryMembershipBoughtEventByUniqueInputArgs = {
  where: MembershipBoughtEventWhereUniqueInput
}

export type QueryMembershipBoughtEventsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<MembershipBoughtEventOrderByInput>>
  where?: InputMaybe<MembershipBoughtEventWhereInput>
}

export type QueryMembershipBoughtEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<MembershipBoughtEventOrderByInput>>
  where?: InputMaybe<MembershipBoughtEventWhereInput>
}

export type QueryMembershipByUniqueInputArgs = {
  where: MembershipWhereUniqueInput
}

export type QueryMembershipPriceUpdatedEventByUniqueInputArgs = {
  where: MembershipPriceUpdatedEventWhereUniqueInput
}

export type QueryMembershipPriceUpdatedEventsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<MembershipPriceUpdatedEventOrderByInput>>
  where?: InputMaybe<MembershipPriceUpdatedEventWhereInput>
}

export type QueryMembershipPriceUpdatedEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<MembershipPriceUpdatedEventOrderByInput>>
  where?: InputMaybe<MembershipPriceUpdatedEventWhereInput>
}

export type QueryMembershipSystemSnapshotByUniqueInputArgs = {
  where: MembershipSystemSnapshotWhereUniqueInput
}

export type QueryMembershipSystemSnapshotsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<MembershipSystemSnapshotOrderByInput>>
  where?: InputMaybe<MembershipSystemSnapshotWhereInput>
}

export type QueryMembershipSystemSnapshotsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<MembershipSystemSnapshotOrderByInput>>
  where?: InputMaybe<MembershipSystemSnapshotWhereInput>
}

export type QueryMembershipsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<MembershipOrderByInput>>
  where?: InputMaybe<MembershipWhereInput>
}

export type QueryMembershipsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<MembershipOrderByInput>>
  where?: InputMaybe<MembershipWhereInput>
}

export type QueryNewCandidateEventByUniqueInputArgs = {
  where: NewCandidateEventWhereUniqueInput
}

export type QueryNewCandidateEventsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<NewCandidateEventOrderByInput>>
  where?: InputMaybe<NewCandidateEventWhereInput>
}

export type QueryNewCandidateEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<NewCandidateEventOrderByInput>>
  where?: InputMaybe<NewCandidateEventWhereInput>
}

export type QueryNewCouncilElectedEventByUniqueInputArgs = {
  where: NewCouncilElectedEventWhereUniqueInput
}

export type QueryNewCouncilElectedEventsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<NewCouncilElectedEventOrderByInput>>
  where?: InputMaybe<NewCouncilElectedEventWhereInput>
}

export type QueryNewCouncilElectedEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<NewCouncilElectedEventOrderByInput>>
  where?: InputMaybe<NewCouncilElectedEventWhereInput>
}

export type QueryNewCouncilNotElectedEventByUniqueInputArgs = {
  where: NewCouncilNotElectedEventWhereUniqueInput
}

export type QueryNewCouncilNotElectedEventsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<NewCouncilNotElectedEventOrderByInput>>
  where?: InputMaybe<NewCouncilNotElectedEventWhereInput>
}

export type QueryNewCouncilNotElectedEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<NewCouncilNotElectedEventOrderByInput>>
  where?: InputMaybe<NewCouncilNotElectedEventWhereInput>
}

export type QueryNewMissedRewardLevelReachedEventByUniqueInputArgs = {
  where: NewMissedRewardLevelReachedEventWhereUniqueInput
}

export type QueryNewMissedRewardLevelReachedEventsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<NewMissedRewardLevelReachedEventOrderByInput>>
  where?: InputMaybe<NewMissedRewardLevelReachedEventWhereInput>
}

export type QueryNewMissedRewardLevelReachedEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<NewMissedRewardLevelReachedEventOrderByInput>>
  where?: InputMaybe<NewMissedRewardLevelReachedEventWhereInput>
}

export type QueryNotEnoughCandidatesEventByUniqueInputArgs = {
  where: NotEnoughCandidatesEventWhereUniqueInput
}

export type QueryNotEnoughCandidatesEventsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<NotEnoughCandidatesEventOrderByInput>>
  where?: InputMaybe<NotEnoughCandidatesEventWhereInput>
}

export type QueryNotEnoughCandidatesEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<NotEnoughCandidatesEventOrderByInput>>
  where?: InputMaybe<NotEnoughCandidatesEventWhereInput>
}

export type QueryOpeningAddedEventByUniqueInputArgs = {
  where: OpeningAddedEventWhereUniqueInput
}

export type QueryOpeningAddedEventsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<OpeningAddedEventOrderByInput>>
  where?: InputMaybe<OpeningAddedEventWhereInput>
}

export type QueryOpeningAddedEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<OpeningAddedEventOrderByInput>>
  where?: InputMaybe<OpeningAddedEventWhereInput>
}

export type QueryOpeningCanceledEventByUniqueInputArgs = {
  where: OpeningCanceledEventWhereUniqueInput
}

export type QueryOpeningCanceledEventsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<OpeningCanceledEventOrderByInput>>
  where?: InputMaybe<OpeningCanceledEventWhereInput>
}

export type QueryOpeningCanceledEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<OpeningCanceledEventOrderByInput>>
  where?: InputMaybe<OpeningCanceledEventWhereInput>
}

export type QueryOpeningFilledEventByUniqueInputArgs = {
  where: OpeningFilledEventWhereUniqueInput
}

export type QueryOpeningFilledEventsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<OpeningFilledEventOrderByInput>>
  where?: InputMaybe<OpeningFilledEventWhereInput>
}

export type QueryOpeningFilledEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<OpeningFilledEventOrderByInput>>
  where?: InputMaybe<OpeningFilledEventWhereInput>
}

export type QueryPostAddedEventByUniqueInputArgs = {
  where: PostAddedEventWhereUniqueInput
}

export type QueryPostAddedEventsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<PostAddedEventOrderByInput>>
  where?: InputMaybe<PostAddedEventWhereInput>
}

export type QueryPostAddedEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<PostAddedEventOrderByInput>>
  where?: InputMaybe<PostAddedEventWhereInput>
}

export type QueryPostDeletedEventByUniqueInputArgs = {
  where: PostDeletedEventWhereUniqueInput
}

export type QueryPostDeletedEventsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<PostDeletedEventOrderByInput>>
  where?: InputMaybe<PostDeletedEventWhereInput>
}

export type QueryPostDeletedEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<PostDeletedEventOrderByInput>>
  where?: InputMaybe<PostDeletedEventWhereInput>
}

export type QueryPostModeratedEventByUniqueInputArgs = {
  where: PostModeratedEventWhereUniqueInput
}

export type QueryPostModeratedEventsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<PostModeratedEventOrderByInput>>
  where?: InputMaybe<PostModeratedEventWhereInput>
}

export type QueryPostModeratedEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<PostModeratedEventOrderByInput>>
  where?: InputMaybe<PostModeratedEventWhereInput>
}

export type QueryPostReactedEventByUniqueInputArgs = {
  where: PostReactedEventWhereUniqueInput
}

export type QueryPostReactedEventsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<PostReactedEventOrderByInput>>
  where?: InputMaybe<PostReactedEventWhereInput>
}

export type QueryPostReactedEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<PostReactedEventOrderByInput>>
  where?: InputMaybe<PostReactedEventWhereInput>
}

export type QueryPostTextUpdatedEventByUniqueInputArgs = {
  where: PostTextUpdatedEventWhereUniqueInput
}

export type QueryPostTextUpdatedEventsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<PostTextUpdatedEventOrderByInput>>
  where?: InputMaybe<PostTextUpdatedEventWhereInput>
}

export type QueryPostTextUpdatedEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<PostTextUpdatedEventOrderByInput>>
  where?: InputMaybe<PostTextUpdatedEventWhereInput>
}

export type QueryPostsByTextArgs = {
  limit?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  text: Scalars['String']
  whereForumPost?: InputMaybe<ForumPostWhereInput>
}

export type QueryProposalByUniqueInputArgs = {
  where: ProposalWhereUniqueInput
}

export type QueryProposalCancelledEventByUniqueInputArgs = {
  where: ProposalCancelledEventWhereUniqueInput
}

export type QueryProposalCancelledEventsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ProposalCancelledEventOrderByInput>>
  where?: InputMaybe<ProposalCancelledEventWhereInput>
}

export type QueryProposalCancelledEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ProposalCancelledEventOrderByInput>>
  where?: InputMaybe<ProposalCancelledEventWhereInput>
}

export type QueryProposalCreatedEventByUniqueInputArgs = {
  where: ProposalCreatedEventWhereUniqueInput
}

export type QueryProposalCreatedEventsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ProposalCreatedEventOrderByInput>>
  where?: InputMaybe<ProposalCreatedEventWhereInput>
}

export type QueryProposalCreatedEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ProposalCreatedEventOrderByInput>>
  where?: InputMaybe<ProposalCreatedEventWhereInput>
}

export type QueryProposalDecisionMadeEventByUniqueInputArgs = {
  where: ProposalDecisionMadeEventWhereUniqueInput
}

export type QueryProposalDecisionMadeEventsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ProposalDecisionMadeEventOrderByInput>>
  where?: InputMaybe<ProposalDecisionMadeEventWhereInput>
}

export type QueryProposalDecisionMadeEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ProposalDecisionMadeEventOrderByInput>>
  where?: InputMaybe<ProposalDecisionMadeEventWhereInput>
}

export type QueryProposalDiscussionPostByUniqueInputArgs = {
  where: ProposalDiscussionPostWhereUniqueInput
}

export type QueryProposalDiscussionPostCreatedEventByUniqueInputArgs = {
  where: ProposalDiscussionPostCreatedEventWhereUniqueInput
}

export type QueryProposalDiscussionPostCreatedEventsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ProposalDiscussionPostCreatedEventOrderByInput>>
  where?: InputMaybe<ProposalDiscussionPostCreatedEventWhereInput>
}

export type QueryProposalDiscussionPostCreatedEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ProposalDiscussionPostCreatedEventOrderByInput>>
  where?: InputMaybe<ProposalDiscussionPostCreatedEventWhereInput>
}

export type QueryProposalDiscussionPostDeletedEventByUniqueInputArgs = {
  where: ProposalDiscussionPostDeletedEventWhereUniqueInput
}

export type QueryProposalDiscussionPostDeletedEventsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ProposalDiscussionPostDeletedEventOrderByInput>>
  where?: InputMaybe<ProposalDiscussionPostDeletedEventWhereInput>
}

export type QueryProposalDiscussionPostDeletedEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ProposalDiscussionPostDeletedEventOrderByInput>>
  where?: InputMaybe<ProposalDiscussionPostDeletedEventWhereInput>
}

export type QueryProposalDiscussionPostUpdatedEventByUniqueInputArgs = {
  where: ProposalDiscussionPostUpdatedEventWhereUniqueInput
}

export type QueryProposalDiscussionPostUpdatedEventsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ProposalDiscussionPostUpdatedEventOrderByInput>>
  where?: InputMaybe<ProposalDiscussionPostUpdatedEventWhereInput>
}

export type QueryProposalDiscussionPostUpdatedEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ProposalDiscussionPostUpdatedEventOrderByInput>>
  where?: InputMaybe<ProposalDiscussionPostUpdatedEventWhereInput>
}

export type QueryProposalDiscussionPostsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ProposalDiscussionPostOrderByInput>>
  where?: InputMaybe<ProposalDiscussionPostWhereInput>
}

export type QueryProposalDiscussionPostsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ProposalDiscussionPostOrderByInput>>
  where?: InputMaybe<ProposalDiscussionPostWhereInput>
}

export type QueryProposalDiscussionThreadByUniqueInputArgs = {
  where: ProposalDiscussionThreadWhereUniqueInput
}

export type QueryProposalDiscussionThreadModeChangedEventByUniqueInputArgs = {
  where: ProposalDiscussionThreadModeChangedEventWhereUniqueInput
}

export type QueryProposalDiscussionThreadModeChangedEventsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ProposalDiscussionThreadModeChangedEventOrderByInput>>
  where?: InputMaybe<ProposalDiscussionThreadModeChangedEventWhereInput>
}

export type QueryProposalDiscussionThreadModeChangedEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ProposalDiscussionThreadModeChangedEventOrderByInput>>
  where?: InputMaybe<ProposalDiscussionThreadModeChangedEventWhereInput>
}

export type QueryProposalDiscussionThreadsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ProposalDiscussionThreadOrderByInput>>
  where?: InputMaybe<ProposalDiscussionThreadWhereInput>
}

export type QueryProposalDiscussionThreadsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ProposalDiscussionThreadOrderByInput>>
  where?: InputMaybe<ProposalDiscussionThreadWhereInput>
}

export type QueryProposalDiscussionWhitelistByUniqueInputArgs = {
  where: ProposalDiscussionWhitelistWhereUniqueInput
}

export type QueryProposalDiscussionWhitelistsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ProposalDiscussionWhitelistOrderByInput>>
  where?: InputMaybe<ProposalDiscussionWhitelistWhereInput>
}

export type QueryProposalDiscussionWhitelistsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ProposalDiscussionWhitelistOrderByInput>>
  where?: InputMaybe<ProposalDiscussionWhitelistWhereInput>
}

export type QueryProposalExecutedEventByUniqueInputArgs = {
  where: ProposalExecutedEventWhereUniqueInput
}

export type QueryProposalExecutedEventsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ProposalExecutedEventOrderByInput>>
  where?: InputMaybe<ProposalExecutedEventWhereInput>
}

export type QueryProposalExecutedEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ProposalExecutedEventOrderByInput>>
  where?: InputMaybe<ProposalExecutedEventWhereInput>
}

export type QueryProposalStatusUpdatedEventByUniqueInputArgs = {
  where: ProposalStatusUpdatedEventWhereUniqueInput
}

export type QueryProposalStatusUpdatedEventsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ProposalStatusUpdatedEventOrderByInput>>
  where?: InputMaybe<ProposalStatusUpdatedEventWhereInput>
}

export type QueryProposalStatusUpdatedEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ProposalStatusUpdatedEventOrderByInput>>
  where?: InputMaybe<ProposalStatusUpdatedEventWhereInput>
}

export type QueryProposalVotedEventByUniqueInputArgs = {
  where: ProposalVotedEventWhereUniqueInput
}

export type QueryProposalVotedEventsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ProposalVotedEventOrderByInput>>
  where?: InputMaybe<ProposalVotedEventWhereInput>
}

export type QueryProposalVotedEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ProposalVotedEventOrderByInput>>
  where?: InputMaybe<ProposalVotedEventWhereInput>
}

export type QueryProposalsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ProposalOrderByInput>>
  where?: InputMaybe<ProposalWhereInput>
}

export type QueryProposalsByDescriptionArgs = {
  limit?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  text: Scalars['String']
  whereProposal?: InputMaybe<ProposalWhereInput>
}

export type QueryProposalsByTitleArgs = {
  limit?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  text: Scalars['String']
  whereProposal?: InputMaybe<ProposalWhereInput>
}

export type QueryProposalsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ProposalOrderByInput>>
  where?: InputMaybe<ProposalWhereInput>
}

export type QueryReferendumFinishedEventByUniqueInputArgs = {
  where: ReferendumFinishedEventWhereUniqueInput
}

export type QueryReferendumFinishedEventsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ReferendumFinishedEventOrderByInput>>
  where?: InputMaybe<ReferendumFinishedEventWhereInput>
}

export type QueryReferendumFinishedEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ReferendumFinishedEventOrderByInput>>
  where?: InputMaybe<ReferendumFinishedEventWhereInput>
}

export type QueryReferendumStageRevealingByUniqueInputArgs = {
  where: ReferendumStageRevealingWhereUniqueInput
}

export type QueryReferendumStageRevealingsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ReferendumStageRevealingOrderByInput>>
  where?: InputMaybe<ReferendumStageRevealingWhereInput>
}

export type QueryReferendumStageRevealingsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ReferendumStageRevealingOrderByInput>>
  where?: InputMaybe<ReferendumStageRevealingWhereInput>
}

export type QueryReferendumStageVotingByUniqueInputArgs = {
  where: ReferendumStageVotingWhereUniqueInput
}

export type QueryReferendumStageVotingsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ReferendumStageVotingOrderByInput>>
  where?: InputMaybe<ReferendumStageVotingWhereInput>
}

export type QueryReferendumStageVotingsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ReferendumStageVotingOrderByInput>>
  where?: InputMaybe<ReferendumStageVotingWhereInput>
}

export type QueryReferendumStartedEventByUniqueInputArgs = {
  where: ReferendumStartedEventWhereUniqueInput
}

export type QueryReferendumStartedEventsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ReferendumStartedEventOrderByInput>>
  where?: InputMaybe<ReferendumStartedEventWhereInput>
}

export type QueryReferendumStartedEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ReferendumStartedEventOrderByInput>>
  where?: InputMaybe<ReferendumStartedEventWhereInput>
}

export type QueryReferendumStartedForcefullyEventByUniqueInputArgs = {
  where: ReferendumStartedForcefullyEventWhereUniqueInput
}

export type QueryReferendumStartedForcefullyEventsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ReferendumStartedForcefullyEventOrderByInput>>
  where?: InputMaybe<ReferendumStartedForcefullyEventWhereInput>
}

export type QueryReferendumStartedForcefullyEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ReferendumStartedForcefullyEventOrderByInput>>
  where?: InputMaybe<ReferendumStartedForcefullyEventWhereInput>
}

export type QueryReferralCutUpdatedEventByUniqueInputArgs = {
  where: ReferralCutUpdatedEventWhereUniqueInput
}

export type QueryReferralCutUpdatedEventsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ReferralCutUpdatedEventOrderByInput>>
  where?: InputMaybe<ReferralCutUpdatedEventWhereInput>
}

export type QueryReferralCutUpdatedEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ReferralCutUpdatedEventOrderByInput>>
  where?: InputMaybe<ReferralCutUpdatedEventWhereInput>
}

export type QueryRequestFundedEventByUniqueInputArgs = {
  where: RequestFundedEventWhereUniqueInput
}

export type QueryRequestFundedEventsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<RequestFundedEventOrderByInput>>
  where?: InputMaybe<RequestFundedEventWhereInput>
}

export type QueryRequestFundedEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<RequestFundedEventOrderByInput>>
  where?: InputMaybe<RequestFundedEventWhereInput>
}

export type QueryRevealingStageStartedEventByUniqueInputArgs = {
  where: RevealingStageStartedEventWhereUniqueInput
}

export type QueryRevealingStageStartedEventsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<RevealingStageStartedEventOrderByInput>>
  where?: InputMaybe<RevealingStageStartedEventWhereInput>
}

export type QueryRevealingStageStartedEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<RevealingStageStartedEventOrderByInput>>
  where?: InputMaybe<RevealingStageStartedEventWhereInput>
}

export type QueryRewardPaidEventByUniqueInputArgs = {
  where: RewardPaidEventWhereUniqueInput
}

export type QueryRewardPaidEventsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<RewardPaidEventOrderByInput>>
  where?: InputMaybe<RewardPaidEventWhereInput>
}

export type QueryRewardPaidEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<RewardPaidEventOrderByInput>>
  where?: InputMaybe<RewardPaidEventWhereInput>
}

export type QueryRewardPaymentEventByUniqueInputArgs = {
  where: RewardPaymentEventWhereUniqueInput
}

export type QueryRewardPaymentEventsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<RewardPaymentEventOrderByInput>>
  where?: InputMaybe<RewardPaymentEventWhereInput>
}

export type QueryRewardPaymentEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<RewardPaymentEventOrderByInput>>
  where?: InputMaybe<RewardPaymentEventWhereInput>
}

export type QueryRuntimeWasmBytecodeByUniqueInputArgs = {
  where: RuntimeWasmBytecodeWhereUniqueInput
}

export type QueryRuntimeWasmBytecodesArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<RuntimeWasmBytecodeOrderByInput>>
  where?: InputMaybe<RuntimeWasmBytecodeWhereInput>
}

export type QueryRuntimeWasmBytecodesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<RuntimeWasmBytecodeOrderByInput>>
  where?: InputMaybe<RuntimeWasmBytecodeWhereInput>
}

export type QuerySearchArgs = {
  limit?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  text: Scalars['String']
  whereChannel?: InputMaybe<ChannelWhereInput>
  whereVideo?: InputMaybe<VideoWhereInput>
}

export type QueryStakeDecreasedEventByUniqueInputArgs = {
  where: StakeDecreasedEventWhereUniqueInput
}

export type QueryStakeDecreasedEventsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<StakeDecreasedEventOrderByInput>>
  where?: InputMaybe<StakeDecreasedEventWhereInput>
}

export type QueryStakeDecreasedEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<StakeDecreasedEventOrderByInput>>
  where?: InputMaybe<StakeDecreasedEventWhereInput>
}

export type QueryStakeIncreasedEventByUniqueInputArgs = {
  where: StakeIncreasedEventWhereUniqueInput
}

export type QueryStakeIncreasedEventsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<StakeIncreasedEventOrderByInput>>
  where?: InputMaybe<StakeIncreasedEventWhereInput>
}

export type QueryStakeIncreasedEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<StakeIncreasedEventOrderByInput>>
  where?: InputMaybe<StakeIncreasedEventWhereInput>
}

export type QueryStakeReleasedEventByUniqueInputArgs = {
  where: StakeReleasedEventWhereUniqueInput
}

export type QueryStakeReleasedEventsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<StakeReleasedEventOrderByInput>>
  where?: InputMaybe<StakeReleasedEventWhereInput>
}

export type QueryStakeReleasedEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<StakeReleasedEventOrderByInput>>
  where?: InputMaybe<StakeReleasedEventWhereInput>
}

export type QueryStakeSlashedEventByUniqueInputArgs = {
  where: StakeSlashedEventWhereUniqueInput
}

export type QueryStakeSlashedEventsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<StakeSlashedEventOrderByInput>>
  where?: InputMaybe<StakeSlashedEventWhereInput>
}

export type QueryStakeSlashedEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<StakeSlashedEventOrderByInput>>
  where?: InputMaybe<StakeSlashedEventWhereInput>
}

export type QueryStakingAccountAddedEventByUniqueInputArgs = {
  where: StakingAccountAddedEventWhereUniqueInput
}

export type QueryStakingAccountAddedEventsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<StakingAccountAddedEventOrderByInput>>
  where?: InputMaybe<StakingAccountAddedEventWhereInput>
}

export type QueryStakingAccountAddedEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<StakingAccountAddedEventOrderByInput>>
  where?: InputMaybe<StakingAccountAddedEventWhereInput>
}

export type QueryStakingAccountConfirmedEventByUniqueInputArgs = {
  where: StakingAccountConfirmedEventWhereUniqueInput
}

export type QueryStakingAccountConfirmedEventsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<StakingAccountConfirmedEventOrderByInput>>
  where?: InputMaybe<StakingAccountConfirmedEventWhereInput>
}

export type QueryStakingAccountConfirmedEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<StakingAccountConfirmedEventOrderByInput>>
  where?: InputMaybe<StakingAccountConfirmedEventWhereInput>
}

export type QueryStakingAccountRemovedEventByUniqueInputArgs = {
  where: StakingAccountRemovedEventWhereUniqueInput
}

export type QueryStakingAccountRemovedEventsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<StakingAccountRemovedEventOrderByInput>>
  where?: InputMaybe<StakingAccountRemovedEventWhereInput>
}

export type QueryStakingAccountRemovedEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<StakingAccountRemovedEventOrderByInput>>
  where?: InputMaybe<StakingAccountRemovedEventWhereInput>
}

export type QueryStatusTextChangedEventByUniqueInputArgs = {
  where: StatusTextChangedEventWhereUniqueInput
}

export type QueryStatusTextChangedEventsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<StatusTextChangedEventOrderByInput>>
  where?: InputMaybe<StatusTextChangedEventWhereInput>
}

export type QueryStatusTextChangedEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<StatusTextChangedEventOrderByInput>>
  where?: InputMaybe<StatusTextChangedEventWhereInput>
}

export type QueryTerminatedLeaderEventByUniqueInputArgs = {
  where: TerminatedLeaderEventWhereUniqueInput
}

export type QueryTerminatedLeaderEventsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<TerminatedLeaderEventOrderByInput>>
  where?: InputMaybe<TerminatedLeaderEventWhereInput>
}

export type QueryTerminatedLeaderEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<TerminatedLeaderEventOrderByInput>>
  where?: InputMaybe<TerminatedLeaderEventWhereInput>
}

export type QueryTerminatedWorkerEventByUniqueInputArgs = {
  where: TerminatedWorkerEventWhereUniqueInput
}

export type QueryTerminatedWorkerEventsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<TerminatedWorkerEventOrderByInput>>
  where?: InputMaybe<TerminatedWorkerEventWhereInput>
}

export type QueryTerminatedWorkerEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<TerminatedWorkerEventOrderByInput>>
  where?: InputMaybe<TerminatedWorkerEventWhereInput>
}

export type QueryThreadCreatedEventByUniqueInputArgs = {
  where: ThreadCreatedEventWhereUniqueInput
}

export type QueryThreadCreatedEventsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ThreadCreatedEventOrderByInput>>
  where?: InputMaybe<ThreadCreatedEventWhereInput>
}

export type QueryThreadCreatedEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ThreadCreatedEventOrderByInput>>
  where?: InputMaybe<ThreadCreatedEventWhereInput>
}

export type QueryThreadDeletedEventByUniqueInputArgs = {
  where: ThreadDeletedEventWhereUniqueInput
}

export type QueryThreadDeletedEventsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ThreadDeletedEventOrderByInput>>
  where?: InputMaybe<ThreadDeletedEventWhereInput>
}

export type QueryThreadDeletedEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ThreadDeletedEventOrderByInput>>
  where?: InputMaybe<ThreadDeletedEventWhereInput>
}

export type QueryThreadMetadataUpdatedEventByUniqueInputArgs = {
  where: ThreadMetadataUpdatedEventWhereUniqueInput
}

export type QueryThreadMetadataUpdatedEventsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ThreadMetadataUpdatedEventOrderByInput>>
  where?: InputMaybe<ThreadMetadataUpdatedEventWhereInput>
}

export type QueryThreadMetadataUpdatedEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ThreadMetadataUpdatedEventOrderByInput>>
  where?: InputMaybe<ThreadMetadataUpdatedEventWhereInput>
}

export type QueryThreadModeratedEventByUniqueInputArgs = {
  where: ThreadModeratedEventWhereUniqueInput
}

export type QueryThreadModeratedEventsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ThreadModeratedEventOrderByInput>>
  where?: InputMaybe<ThreadModeratedEventWhereInput>
}

export type QueryThreadModeratedEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ThreadModeratedEventOrderByInput>>
  where?: InputMaybe<ThreadModeratedEventWhereInput>
}

export type QueryThreadMovedEventByUniqueInputArgs = {
  where: ThreadMovedEventWhereUniqueInput
}

export type QueryThreadMovedEventsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ThreadMovedEventOrderByInput>>
  where?: InputMaybe<ThreadMovedEventWhereInput>
}

export type QueryThreadMovedEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<ThreadMovedEventOrderByInput>>
  where?: InputMaybe<ThreadMovedEventWhereInput>
}

export type QueryThreadsByTitleArgs = {
  limit?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  text: Scalars['String']
  whereForumThread?: InputMaybe<ForumThreadWhereInput>
}

export type QueryUpcomingWorkingGroupOpeningByUniqueInputArgs = {
  where: UpcomingWorkingGroupOpeningWhereUniqueInput
}

export type QueryUpcomingWorkingGroupOpeningsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<UpcomingWorkingGroupOpeningOrderByInput>>
  where?: InputMaybe<UpcomingWorkingGroupOpeningWhereInput>
}

export type QueryUpcomingWorkingGroupOpeningsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<UpcomingWorkingGroupOpeningOrderByInput>>
  where?: InputMaybe<UpcomingWorkingGroupOpeningWhereInput>
}

export type QueryVideoByUniqueInputArgs = {
  where: VideoWhereUniqueInput
}

export type QueryVideoCategoriesArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<VideoCategoryOrderByInput>>
  where?: InputMaybe<VideoCategoryWhereInput>
}

export type QueryVideoCategoriesByNameArgs = {
  limit?: InputMaybe<Scalars['Int']>
  skip?: InputMaybe<Scalars['Int']>
  text: Scalars['String']
  whereVideoCategory?: InputMaybe<VideoCategoryWhereInput>
}

export type QueryVideoCategoriesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<VideoCategoryOrderByInput>>
  where?: InputMaybe<VideoCategoryWhereInput>
}

export type QueryVideoCategoryByUniqueInputArgs = {
  where: VideoCategoryWhereUniqueInput
}

export type QueryVideoMediaEncodingByUniqueInputArgs = {
  where: VideoMediaEncodingWhereUniqueInput
}

export type QueryVideoMediaEncodingsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<VideoMediaEncodingOrderByInput>>
  where?: InputMaybe<VideoMediaEncodingWhereInput>
}

export type QueryVideoMediaEncodingsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<VideoMediaEncodingOrderByInput>>
  where?: InputMaybe<VideoMediaEncodingWhereInput>
}

export type QueryVideoMediaMetadataArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<VideoMediaMetadataOrderByInput>>
  where?: InputMaybe<VideoMediaMetadataWhereInput>
}

export type QueryVideoMediaMetadataByUniqueInputArgs = {
  where: VideoMediaMetadataWhereUniqueInput
}

export type QueryVideoMediaMetadataConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<VideoMediaMetadataOrderByInput>>
  where?: InputMaybe<VideoMediaMetadataWhereInput>
}

export type QueryVideosArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<VideoOrderByInput>>
  where?: InputMaybe<VideoWhereInput>
}

export type QueryVideosConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<VideoOrderByInput>>
  where?: InputMaybe<VideoWhereInput>
}

export type QueryVoteCastEventByUniqueInputArgs = {
  where: VoteCastEventWhereUniqueInput
}

export type QueryVoteCastEventsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<VoteCastEventOrderByInput>>
  where?: InputMaybe<VoteCastEventWhereInput>
}

export type QueryVoteCastEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<VoteCastEventOrderByInput>>
  where?: InputMaybe<VoteCastEventWhereInput>
}

export type QueryVoteOnPollEventByUniqueInputArgs = {
  where: VoteOnPollEventWhereUniqueInput
}

export type QueryVoteOnPollEventsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<VoteOnPollEventOrderByInput>>
  where?: InputMaybe<VoteOnPollEventWhereInput>
}

export type QueryVoteOnPollEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<VoteOnPollEventOrderByInput>>
  where?: InputMaybe<VoteOnPollEventWhereInput>
}

export type QueryVoteRevealedEventByUniqueInputArgs = {
  where: VoteRevealedEventWhereUniqueInput
}

export type QueryVoteRevealedEventsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<VoteRevealedEventOrderByInput>>
  where?: InputMaybe<VoteRevealedEventWhereInput>
}

export type QueryVoteRevealedEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<VoteRevealedEventOrderByInput>>
  where?: InputMaybe<VoteRevealedEventWhereInput>
}

export type QueryVotingPeriodStartedEventByUniqueInputArgs = {
  where: VotingPeriodStartedEventWhereUniqueInput
}

export type QueryVotingPeriodStartedEventsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<VotingPeriodStartedEventOrderByInput>>
  where?: InputMaybe<VotingPeriodStartedEventWhereInput>
}

export type QueryVotingPeriodStartedEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<VotingPeriodStartedEventOrderByInput>>
  where?: InputMaybe<VotingPeriodStartedEventWhereInput>
}

export type QueryWorkEntryAnnouncedEventByUniqueInputArgs = {
  where: WorkEntryAnnouncedEventWhereUniqueInput
}

export type QueryWorkEntryAnnouncedEventsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<WorkEntryAnnouncedEventOrderByInput>>
  where?: InputMaybe<WorkEntryAnnouncedEventWhereInput>
}

export type QueryWorkEntryAnnouncedEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<WorkEntryAnnouncedEventOrderByInput>>
  where?: InputMaybe<WorkEntryAnnouncedEventWhereInput>
}

export type QueryWorkerByUniqueInputArgs = {
  where: WorkerWhereUniqueInput
}

export type QueryWorkerExitedEventByUniqueInputArgs = {
  where: WorkerExitedEventWhereUniqueInput
}

export type QueryWorkerExitedEventsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<WorkerExitedEventOrderByInput>>
  where?: InputMaybe<WorkerExitedEventWhereInput>
}

export type QueryWorkerExitedEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<WorkerExitedEventOrderByInput>>
  where?: InputMaybe<WorkerExitedEventWhereInput>
}

export type QueryWorkerRewardAccountUpdatedEventByUniqueInputArgs = {
  where: WorkerRewardAccountUpdatedEventWhereUniqueInput
}

export type QueryWorkerRewardAccountUpdatedEventsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<WorkerRewardAccountUpdatedEventOrderByInput>>
  where?: InputMaybe<WorkerRewardAccountUpdatedEventWhereInput>
}

export type QueryWorkerRewardAccountUpdatedEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<WorkerRewardAccountUpdatedEventOrderByInput>>
  where?: InputMaybe<WorkerRewardAccountUpdatedEventWhereInput>
}

export type QueryWorkerRewardAmountUpdatedEventByUniqueInputArgs = {
  where: WorkerRewardAmountUpdatedEventWhereUniqueInput
}

export type QueryWorkerRewardAmountUpdatedEventsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<WorkerRewardAmountUpdatedEventOrderByInput>>
  where?: InputMaybe<WorkerRewardAmountUpdatedEventWhereInput>
}

export type QueryWorkerRewardAmountUpdatedEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<WorkerRewardAmountUpdatedEventOrderByInput>>
  where?: InputMaybe<WorkerRewardAmountUpdatedEventWhereInput>
}

export type QueryWorkerRoleAccountUpdatedEventByUniqueInputArgs = {
  where: WorkerRoleAccountUpdatedEventWhereUniqueInput
}

export type QueryWorkerRoleAccountUpdatedEventsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<WorkerRoleAccountUpdatedEventOrderByInput>>
  where?: InputMaybe<WorkerRoleAccountUpdatedEventWhereInput>
}

export type QueryWorkerRoleAccountUpdatedEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<WorkerRoleAccountUpdatedEventOrderByInput>>
  where?: InputMaybe<WorkerRoleAccountUpdatedEventWhereInput>
}

export type QueryWorkerStartedLeavingEventByUniqueInputArgs = {
  where: WorkerStartedLeavingEventWhereUniqueInput
}

export type QueryWorkerStartedLeavingEventsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<WorkerStartedLeavingEventOrderByInput>>
  where?: InputMaybe<WorkerStartedLeavingEventWhereInput>
}

export type QueryWorkerStartedLeavingEventsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<WorkerStartedLeavingEventOrderByInput>>
  where?: InputMaybe<WorkerStartedLeavingEventWhereInput>
}

export type QueryWorkersArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<WorkerOrderByInput>>
  where?: InputMaybe<WorkerWhereInput>
}

export type QueryWorkersConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<WorkerOrderByInput>>
  where?: InputMaybe<WorkerWhereInput>
}

export type QueryWorkingGroupApplicationByUniqueInputArgs = {
  where: WorkingGroupApplicationWhereUniqueInput
}

export type QueryWorkingGroupApplicationsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<WorkingGroupApplicationOrderByInput>>
  where?: InputMaybe<WorkingGroupApplicationWhereInput>
}

export type QueryWorkingGroupApplicationsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<WorkingGroupApplicationOrderByInput>>
  where?: InputMaybe<WorkingGroupApplicationWhereInput>
}

export type QueryWorkingGroupByUniqueInputArgs = {
  where: WorkingGroupWhereUniqueInput
}

export type QueryWorkingGroupMetadataArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<WorkingGroupMetadataOrderByInput>>
  where?: InputMaybe<WorkingGroupMetadataWhereInput>
}

export type QueryWorkingGroupMetadataByUniqueInputArgs = {
  where: WorkingGroupMetadataWhereUniqueInput
}

export type QueryWorkingGroupMetadataConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<WorkingGroupMetadataOrderByInput>>
  where?: InputMaybe<WorkingGroupMetadataWhereInput>
}

export type QueryWorkingGroupOpeningByUniqueInputArgs = {
  where: WorkingGroupOpeningWhereUniqueInput
}

export type QueryWorkingGroupOpeningMetadataArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<WorkingGroupOpeningMetadataOrderByInput>>
  where?: InputMaybe<WorkingGroupOpeningMetadataWhereInput>
}

export type QueryWorkingGroupOpeningMetadataByUniqueInputArgs = {
  where: WorkingGroupOpeningMetadataWhereUniqueInput
}

export type QueryWorkingGroupOpeningMetadataConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<WorkingGroupOpeningMetadataOrderByInput>>
  where?: InputMaybe<WorkingGroupOpeningMetadataWhereInput>
}

export type QueryWorkingGroupOpeningsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<WorkingGroupOpeningOrderByInput>>
  where?: InputMaybe<WorkingGroupOpeningWhereInput>
}

export type QueryWorkingGroupOpeningsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<WorkingGroupOpeningOrderByInput>>
  where?: InputMaybe<WorkingGroupOpeningWhereInput>
}

export type QueryWorkingGroupsArgs = {
  limit?: InputMaybe<Scalars['Int']>
  offset?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<WorkingGroupOrderByInput>>
  where?: InputMaybe<WorkingGroupWhereInput>
}

export type QueryWorkingGroupsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>
  before?: InputMaybe<Scalars['String']>
  first?: InputMaybe<Scalars['Int']>
  last?: InputMaybe<Scalars['Int']>
  orderBy?: InputMaybe<Array<WorkingGroupOrderByInput>>
  where?: InputMaybe<WorkingGroupWhereInput>
}

export type ReferendumFinishedEvent = BaseGraphQlObject &
  Event & {
    __typename: 'ReferendumFinishedEvent'
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    id: Scalars['ID']
    /** Blocknumber of the block in which the event was emitted. */
    inBlock: Scalars['Int']
    /** Hash of the extrinsic which caused the event to be emitted */
    inExtrinsic?: Maybe<Scalars['String']>
    /** Index of event in block from which it was emitted. */
    indexInBlock: Scalars['Int']
    /** Network the block was produced in */
    network: Network
    /** Filtering options for interface implementers */
    type?: Maybe<EventTypeOptions>
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
  }

export type ReferendumFinishedEventConnection = {
  __typename: 'ReferendumFinishedEventConnection'
  edges: Array<ReferendumFinishedEventEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type ReferendumFinishedEventCreateInput = {
  inBlock: Scalars['Float']
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock: Scalars['Float']
  network: Network
}

export type ReferendumFinishedEventEdge = {
  __typename: 'ReferendumFinishedEventEdge'
  cursor: Scalars['String']
  node: ReferendumFinishedEvent
}

export enum ReferendumFinishedEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type ReferendumFinishedEventUpdateInput = {
  inBlock?: InputMaybe<Scalars['Float']>
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock?: InputMaybe<Scalars['Float']>
  network?: InputMaybe<Network>
}

export type ReferendumFinishedEventWhereInput = {
  AND?: InputMaybe<Array<ReferendumFinishedEventWhereInput>>
  OR?: InputMaybe<Array<ReferendumFinishedEventWhereInput>>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  inBlock_eq?: InputMaybe<Scalars['Int']>
  inBlock_gt?: InputMaybe<Scalars['Int']>
  inBlock_gte?: InputMaybe<Scalars['Int']>
  inBlock_in?: InputMaybe<Array<Scalars['Int']>>
  inBlock_lt?: InputMaybe<Scalars['Int']>
  inBlock_lte?: InputMaybe<Scalars['Int']>
  inExtrinsic_contains?: InputMaybe<Scalars['String']>
  inExtrinsic_endsWith?: InputMaybe<Scalars['String']>
  inExtrinsic_eq?: InputMaybe<Scalars['String']>
  inExtrinsic_in?: InputMaybe<Array<Scalars['String']>>
  inExtrinsic_startsWith?: InputMaybe<Scalars['String']>
  indexInBlock_eq?: InputMaybe<Scalars['Int']>
  indexInBlock_gt?: InputMaybe<Scalars['Int']>
  indexInBlock_gte?: InputMaybe<Scalars['Int']>
  indexInBlock_in?: InputMaybe<Array<Scalars['Int']>>
  indexInBlock_lt?: InputMaybe<Scalars['Int']>
  indexInBlock_lte?: InputMaybe<Scalars['Int']>
  network_eq?: InputMaybe<Network>
  network_in?: InputMaybe<Array<Network>>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
}

export type ReferendumFinishedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type ReferendumStageRevealing = BaseGraphQlObject & {
  __typename: 'ReferendumStageRevealing'
  createdAt: Scalars['DateTime']
  createdById: Scalars['String']
  deletedAt?: Maybe<Scalars['DateTime']>
  deletedById?: Maybe<Scalars['String']>
  electionRound: ElectionRound
  electionRoundId: Scalars['String']
  id: Scalars['ID']
  /** Block in which referendum started */
  startedAtBlock: Scalars['BigInt']
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedById?: Maybe<Scalars['String']>
  version: Scalars['Int']
  /** Target number of winners */
  winningTargetCount: Scalars['BigInt']
}

export type ReferendumStageRevealingConnection = {
  __typename: 'ReferendumStageRevealingConnection'
  edges: Array<ReferendumStageRevealingEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type ReferendumStageRevealingCreateInput = {
  electionRound: Scalars['ID']
  startedAtBlock: Scalars['String']
  winningTargetCount: Scalars['String']
}

export type ReferendumStageRevealingEdge = {
  __typename: 'ReferendumStageRevealingEdge'
  cursor: Scalars['String']
  node: ReferendumStageRevealing
}

export enum ReferendumStageRevealingOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  ElectionRoundAsc = 'electionRound_ASC',
  ElectionRoundDesc = 'electionRound_DESC',
  StartedAtBlockAsc = 'startedAtBlock_ASC',
  StartedAtBlockDesc = 'startedAtBlock_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WinningTargetCountAsc = 'winningTargetCount_ASC',
  WinningTargetCountDesc = 'winningTargetCount_DESC',
}

export type ReferendumStageRevealingUpdateInput = {
  electionRound?: InputMaybe<Scalars['ID']>
  startedAtBlock?: InputMaybe<Scalars['String']>
  winningTargetCount?: InputMaybe<Scalars['String']>
}

export type ReferendumStageRevealingWhereInput = {
  AND?: InputMaybe<Array<ReferendumStageRevealingWhereInput>>
  OR?: InputMaybe<Array<ReferendumStageRevealingWhereInput>>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  electionRound?: InputMaybe<ElectionRoundWhereInput>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  startedAtBlock_eq?: InputMaybe<Scalars['BigInt']>
  startedAtBlock_gt?: InputMaybe<Scalars['BigInt']>
  startedAtBlock_gte?: InputMaybe<Scalars['BigInt']>
  startedAtBlock_in?: InputMaybe<Array<Scalars['BigInt']>>
  startedAtBlock_lt?: InputMaybe<Scalars['BigInt']>
  startedAtBlock_lte?: InputMaybe<Scalars['BigInt']>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
  winningTargetCount_eq?: InputMaybe<Scalars['BigInt']>
  winningTargetCount_gt?: InputMaybe<Scalars['BigInt']>
  winningTargetCount_gte?: InputMaybe<Scalars['BigInt']>
  winningTargetCount_in?: InputMaybe<Array<Scalars['BigInt']>>
  winningTargetCount_lt?: InputMaybe<Scalars['BigInt']>
  winningTargetCount_lte?: InputMaybe<Scalars['BigInt']>
}

export type ReferendumStageRevealingWhereUniqueInput = {
  id: Scalars['ID']
}

export type ReferendumStageVoting = BaseGraphQlObject & {
  __typename: 'ReferendumStageVoting'
  createdAt: Scalars['DateTime']
  createdById: Scalars['String']
  deletedAt?: Maybe<Scalars['DateTime']>
  deletedById?: Maybe<Scalars['String']>
  electionRound: ElectionRound
  electionRoundId: Scalars['String']
  id: Scalars['ID']
  /** Block in which referendum started. */
  startedAtBlock: Scalars['BigInt']
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedById?: Maybe<Scalars['String']>
  version: Scalars['Int']
  /** Target number of winners. */
  winningTargetCount: Scalars['BigInt']
}

export type ReferendumStageVotingConnection = {
  __typename: 'ReferendumStageVotingConnection'
  edges: Array<ReferendumStageVotingEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type ReferendumStageVotingCreateInput = {
  electionRound: Scalars['ID']
  startedAtBlock: Scalars['String']
  winningTargetCount: Scalars['String']
}

export type ReferendumStageVotingEdge = {
  __typename: 'ReferendumStageVotingEdge'
  cursor: Scalars['String']
  node: ReferendumStageVoting
}

export enum ReferendumStageVotingOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  ElectionRoundAsc = 'electionRound_ASC',
  ElectionRoundDesc = 'electionRound_DESC',
  StartedAtBlockAsc = 'startedAtBlock_ASC',
  StartedAtBlockDesc = 'startedAtBlock_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WinningTargetCountAsc = 'winningTargetCount_ASC',
  WinningTargetCountDesc = 'winningTargetCount_DESC',
}

export type ReferendumStageVotingUpdateInput = {
  electionRound?: InputMaybe<Scalars['ID']>
  startedAtBlock?: InputMaybe<Scalars['String']>
  winningTargetCount?: InputMaybe<Scalars['String']>
}

export type ReferendumStageVotingWhereInput = {
  AND?: InputMaybe<Array<ReferendumStageVotingWhereInput>>
  OR?: InputMaybe<Array<ReferendumStageVotingWhereInput>>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  electionRound?: InputMaybe<ElectionRoundWhereInput>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  startedAtBlock_eq?: InputMaybe<Scalars['BigInt']>
  startedAtBlock_gt?: InputMaybe<Scalars['BigInt']>
  startedAtBlock_gte?: InputMaybe<Scalars['BigInt']>
  startedAtBlock_in?: InputMaybe<Array<Scalars['BigInt']>>
  startedAtBlock_lt?: InputMaybe<Scalars['BigInt']>
  startedAtBlock_lte?: InputMaybe<Scalars['BigInt']>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
  winningTargetCount_eq?: InputMaybe<Scalars['BigInt']>
  winningTargetCount_gt?: InputMaybe<Scalars['BigInt']>
  winningTargetCount_gte?: InputMaybe<Scalars['BigInt']>
  winningTargetCount_in?: InputMaybe<Array<Scalars['BigInt']>>
  winningTargetCount_lt?: InputMaybe<Scalars['BigInt']>
  winningTargetCount_lte?: InputMaybe<Scalars['BigInt']>
}

export type ReferendumStageVotingWhereUniqueInput = {
  id: Scalars['ID']
}

export type ReferendumStartedEvent = BaseGraphQlObject &
  Event & {
    __typename: 'ReferendumStartedEvent'
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    id: Scalars['ID']
    /** Blocknumber of the block in which the event was emitted. */
    inBlock: Scalars['Int']
    /** Hash of the extrinsic which caused the event to be emitted */
    inExtrinsic?: Maybe<Scalars['String']>
    /** Index of event in block from which it was emitted. */
    indexInBlock: Scalars['Int']
    /** Network the block was produced in */
    network: Network
    /** Filtering options for interface implementers */
    type?: Maybe<EventTypeOptions>
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
    /** Amount of winning referendum options. */
    winningTargetCount: Scalars['BigInt']
  }

export type ReferendumStartedEventConnection = {
  __typename: 'ReferendumStartedEventConnection'
  edges: Array<ReferendumStartedEventEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type ReferendumStartedEventCreateInput = {
  inBlock: Scalars['Float']
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock: Scalars['Float']
  network: Network
  winningTargetCount: Scalars['String']
}

export type ReferendumStartedEventEdge = {
  __typename: 'ReferendumStartedEventEdge'
  cursor: Scalars['String']
  node: ReferendumStartedEvent
}

export enum ReferendumStartedEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WinningTargetCountAsc = 'winningTargetCount_ASC',
  WinningTargetCountDesc = 'winningTargetCount_DESC',
}

export type ReferendumStartedEventUpdateInput = {
  inBlock?: InputMaybe<Scalars['Float']>
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock?: InputMaybe<Scalars['Float']>
  network?: InputMaybe<Network>
  winningTargetCount?: InputMaybe<Scalars['String']>
}

export type ReferendumStartedEventWhereInput = {
  AND?: InputMaybe<Array<ReferendumStartedEventWhereInput>>
  OR?: InputMaybe<Array<ReferendumStartedEventWhereInput>>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  inBlock_eq?: InputMaybe<Scalars['Int']>
  inBlock_gt?: InputMaybe<Scalars['Int']>
  inBlock_gte?: InputMaybe<Scalars['Int']>
  inBlock_in?: InputMaybe<Array<Scalars['Int']>>
  inBlock_lt?: InputMaybe<Scalars['Int']>
  inBlock_lte?: InputMaybe<Scalars['Int']>
  inExtrinsic_contains?: InputMaybe<Scalars['String']>
  inExtrinsic_endsWith?: InputMaybe<Scalars['String']>
  inExtrinsic_eq?: InputMaybe<Scalars['String']>
  inExtrinsic_in?: InputMaybe<Array<Scalars['String']>>
  inExtrinsic_startsWith?: InputMaybe<Scalars['String']>
  indexInBlock_eq?: InputMaybe<Scalars['Int']>
  indexInBlock_gt?: InputMaybe<Scalars['Int']>
  indexInBlock_gte?: InputMaybe<Scalars['Int']>
  indexInBlock_in?: InputMaybe<Array<Scalars['Int']>>
  indexInBlock_lt?: InputMaybe<Scalars['Int']>
  indexInBlock_lte?: InputMaybe<Scalars['Int']>
  network_eq?: InputMaybe<Network>
  network_in?: InputMaybe<Array<Network>>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
  winningTargetCount_eq?: InputMaybe<Scalars['BigInt']>
  winningTargetCount_gt?: InputMaybe<Scalars['BigInt']>
  winningTargetCount_gte?: InputMaybe<Scalars['BigInt']>
  winningTargetCount_in?: InputMaybe<Array<Scalars['BigInt']>>
  winningTargetCount_lt?: InputMaybe<Scalars['BigInt']>
  winningTargetCount_lte?: InputMaybe<Scalars['BigInt']>
}

export type ReferendumStartedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type ReferendumStartedForcefullyEvent = BaseGraphQlObject &
  Event & {
    __typename: 'ReferendumStartedForcefullyEvent'
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    id: Scalars['ID']
    /** Blocknumber of the block in which the event was emitted. */
    inBlock: Scalars['Int']
    /** Hash of the extrinsic which caused the event to be emitted */
    inExtrinsic?: Maybe<Scalars['String']>
    /** Index of event in block from which it was emitted. */
    indexInBlock: Scalars['Int']
    /** Network the block was produced in */
    network: Network
    /** Filtering options for interface implementers */
    type?: Maybe<EventTypeOptions>
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
    /** Amount of winning referendum options. */
    winningTargetCount: Scalars['BigInt']
  }

export type ReferendumStartedForcefullyEventConnection = {
  __typename: 'ReferendumStartedForcefullyEventConnection'
  edges: Array<ReferendumStartedForcefullyEventEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type ReferendumStartedForcefullyEventCreateInput = {
  inBlock: Scalars['Float']
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock: Scalars['Float']
  network: Network
  winningTargetCount: Scalars['String']
}

export type ReferendumStartedForcefullyEventEdge = {
  __typename: 'ReferendumStartedForcefullyEventEdge'
  cursor: Scalars['String']
  node: ReferendumStartedForcefullyEvent
}

export enum ReferendumStartedForcefullyEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WinningTargetCountAsc = 'winningTargetCount_ASC',
  WinningTargetCountDesc = 'winningTargetCount_DESC',
}

export type ReferendumStartedForcefullyEventUpdateInput = {
  inBlock?: InputMaybe<Scalars['Float']>
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock?: InputMaybe<Scalars['Float']>
  network?: InputMaybe<Network>
  winningTargetCount?: InputMaybe<Scalars['String']>
}

export type ReferendumStartedForcefullyEventWhereInput = {
  AND?: InputMaybe<Array<ReferendumStartedForcefullyEventWhereInput>>
  OR?: InputMaybe<Array<ReferendumStartedForcefullyEventWhereInput>>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  inBlock_eq?: InputMaybe<Scalars['Int']>
  inBlock_gt?: InputMaybe<Scalars['Int']>
  inBlock_gte?: InputMaybe<Scalars['Int']>
  inBlock_in?: InputMaybe<Array<Scalars['Int']>>
  inBlock_lt?: InputMaybe<Scalars['Int']>
  inBlock_lte?: InputMaybe<Scalars['Int']>
  inExtrinsic_contains?: InputMaybe<Scalars['String']>
  inExtrinsic_endsWith?: InputMaybe<Scalars['String']>
  inExtrinsic_eq?: InputMaybe<Scalars['String']>
  inExtrinsic_in?: InputMaybe<Array<Scalars['String']>>
  inExtrinsic_startsWith?: InputMaybe<Scalars['String']>
  indexInBlock_eq?: InputMaybe<Scalars['Int']>
  indexInBlock_gt?: InputMaybe<Scalars['Int']>
  indexInBlock_gte?: InputMaybe<Scalars['Int']>
  indexInBlock_in?: InputMaybe<Array<Scalars['Int']>>
  indexInBlock_lt?: InputMaybe<Scalars['Int']>
  indexInBlock_lte?: InputMaybe<Scalars['Int']>
  network_eq?: InputMaybe<Network>
  network_in?: InputMaybe<Array<Network>>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
  winningTargetCount_eq?: InputMaybe<Scalars['BigInt']>
  winningTargetCount_gt?: InputMaybe<Scalars['BigInt']>
  winningTargetCount_gte?: InputMaybe<Scalars['BigInt']>
  winningTargetCount_in?: InputMaybe<Array<Scalars['BigInt']>>
  winningTargetCount_lt?: InputMaybe<Scalars['BigInt']>
  winningTargetCount_lte?: InputMaybe<Scalars['BigInt']>
}

export type ReferendumStartedForcefullyEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type ReferralCutUpdatedEvent = BaseGraphQlObject &
  Event & {
    __typename: 'ReferralCutUpdatedEvent'
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    id: Scalars['ID']
    /** Blocknumber of the block in which the event was emitted. */
    inBlock: Scalars['Int']
    /** Hash of the extrinsic which caused the event to be emitted */
    inExtrinsic?: Maybe<Scalars['String']>
    /** Index of event in block from which it was emitted. */
    indexInBlock: Scalars['Int']
    /** Network the block was produced in */
    network: Network
    /** New cut value. */
    newValue: Scalars['Int']
    /** Filtering options for interface implementers */
    type?: Maybe<EventTypeOptions>
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
  }

export type ReferralCutUpdatedEventConnection = {
  __typename: 'ReferralCutUpdatedEventConnection'
  edges: Array<ReferralCutUpdatedEventEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type ReferralCutUpdatedEventCreateInput = {
  inBlock: Scalars['Float']
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock: Scalars['Float']
  network: Network
  newValue: Scalars['Float']
}

export type ReferralCutUpdatedEventEdge = {
  __typename: 'ReferralCutUpdatedEventEdge'
  cursor: Scalars['String']
  node: ReferralCutUpdatedEvent
}

export enum ReferralCutUpdatedEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  NewValueAsc = 'newValue_ASC',
  NewValueDesc = 'newValue_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type ReferralCutUpdatedEventUpdateInput = {
  inBlock?: InputMaybe<Scalars['Float']>
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock?: InputMaybe<Scalars['Float']>
  network?: InputMaybe<Network>
  newValue?: InputMaybe<Scalars['Float']>
}

export type ReferralCutUpdatedEventWhereInput = {
  AND?: InputMaybe<Array<ReferralCutUpdatedEventWhereInput>>
  OR?: InputMaybe<Array<ReferralCutUpdatedEventWhereInput>>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  inBlock_eq?: InputMaybe<Scalars['Int']>
  inBlock_gt?: InputMaybe<Scalars['Int']>
  inBlock_gte?: InputMaybe<Scalars['Int']>
  inBlock_in?: InputMaybe<Array<Scalars['Int']>>
  inBlock_lt?: InputMaybe<Scalars['Int']>
  inBlock_lte?: InputMaybe<Scalars['Int']>
  inExtrinsic_contains?: InputMaybe<Scalars['String']>
  inExtrinsic_endsWith?: InputMaybe<Scalars['String']>
  inExtrinsic_eq?: InputMaybe<Scalars['String']>
  inExtrinsic_in?: InputMaybe<Array<Scalars['String']>>
  inExtrinsic_startsWith?: InputMaybe<Scalars['String']>
  indexInBlock_eq?: InputMaybe<Scalars['Int']>
  indexInBlock_gt?: InputMaybe<Scalars['Int']>
  indexInBlock_gte?: InputMaybe<Scalars['Int']>
  indexInBlock_in?: InputMaybe<Array<Scalars['Int']>>
  indexInBlock_lt?: InputMaybe<Scalars['Int']>
  indexInBlock_lte?: InputMaybe<Scalars['Int']>
  network_eq?: InputMaybe<Network>
  network_in?: InputMaybe<Array<Network>>
  newValue_eq?: InputMaybe<Scalars['Int']>
  newValue_gt?: InputMaybe<Scalars['Int']>
  newValue_gte?: InputMaybe<Scalars['Int']>
  newValue_in?: InputMaybe<Array<Scalars['Int']>>
  newValue_lt?: InputMaybe<Scalars['Int']>
  newValue_lte?: InputMaybe<Scalars['Int']>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
}

export type ReferralCutUpdatedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type RequestFundedEvent = BaseGraphQlObject &
  Event & {
    __typename: 'RequestFundedEvent'
    /** Target account. */
    account: Scalars['String']
    /** Funding amount. */
    amount: Scalars['BigInt']
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    id: Scalars['ID']
    /** Blocknumber of the block in which the event was emitted. */
    inBlock: Scalars['Int']
    /** Hash of the extrinsic which caused the event to be emitted */
    inExtrinsic?: Maybe<Scalars['String']>
    /** Index of event in block from which it was emitted. */
    indexInBlock: Scalars['Int']
    /** Network the block was produced in */
    network: Network
    /** Filtering options for interface implementers */
    type?: Maybe<EventTypeOptions>
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
  }

export type RequestFundedEventConnection = {
  __typename: 'RequestFundedEventConnection'
  edges: Array<RequestFundedEventEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type RequestFundedEventCreateInput = {
  account: Scalars['String']
  amount: Scalars['String']
  inBlock: Scalars['Float']
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock: Scalars['Float']
  network: Network
}

export type RequestFundedEventEdge = {
  __typename: 'RequestFundedEventEdge'
  cursor: Scalars['String']
  node: RequestFundedEvent
}

export enum RequestFundedEventOrderByInput {
  AccountAsc = 'account_ASC',
  AccountDesc = 'account_DESC',
  AmountAsc = 'amount_ASC',
  AmountDesc = 'amount_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type RequestFundedEventUpdateInput = {
  account?: InputMaybe<Scalars['String']>
  amount?: InputMaybe<Scalars['String']>
  inBlock?: InputMaybe<Scalars['Float']>
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock?: InputMaybe<Scalars['Float']>
  network?: InputMaybe<Network>
}

export type RequestFundedEventWhereInput = {
  AND?: InputMaybe<Array<RequestFundedEventWhereInput>>
  OR?: InputMaybe<Array<RequestFundedEventWhereInput>>
  account_contains?: InputMaybe<Scalars['String']>
  account_endsWith?: InputMaybe<Scalars['String']>
  account_eq?: InputMaybe<Scalars['String']>
  account_in?: InputMaybe<Array<Scalars['String']>>
  account_startsWith?: InputMaybe<Scalars['String']>
  amount_eq?: InputMaybe<Scalars['BigInt']>
  amount_gt?: InputMaybe<Scalars['BigInt']>
  amount_gte?: InputMaybe<Scalars['BigInt']>
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>
  amount_lt?: InputMaybe<Scalars['BigInt']>
  amount_lte?: InputMaybe<Scalars['BigInt']>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  inBlock_eq?: InputMaybe<Scalars['Int']>
  inBlock_gt?: InputMaybe<Scalars['Int']>
  inBlock_gte?: InputMaybe<Scalars['Int']>
  inBlock_in?: InputMaybe<Array<Scalars['Int']>>
  inBlock_lt?: InputMaybe<Scalars['Int']>
  inBlock_lte?: InputMaybe<Scalars['Int']>
  inExtrinsic_contains?: InputMaybe<Scalars['String']>
  inExtrinsic_endsWith?: InputMaybe<Scalars['String']>
  inExtrinsic_eq?: InputMaybe<Scalars['String']>
  inExtrinsic_in?: InputMaybe<Array<Scalars['String']>>
  inExtrinsic_startsWith?: InputMaybe<Scalars['String']>
  indexInBlock_eq?: InputMaybe<Scalars['Int']>
  indexInBlock_gt?: InputMaybe<Scalars['Int']>
  indexInBlock_gte?: InputMaybe<Scalars['Int']>
  indexInBlock_in?: InputMaybe<Array<Scalars['Int']>>
  indexInBlock_lt?: InputMaybe<Scalars['Int']>
  indexInBlock_lte?: InputMaybe<Scalars['Int']>
  network_eq?: InputMaybe<Network>
  network_in?: InputMaybe<Array<Network>>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
}

export type RequestFundedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type RevealingStageStartedEvent = BaseGraphQlObject &
  Event & {
    __typename: 'RevealingStageStartedEvent'
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    id: Scalars['ID']
    /** Blocknumber of the block in which the event was emitted. */
    inBlock: Scalars['Int']
    /** Hash of the extrinsic which caused the event to be emitted */
    inExtrinsic?: Maybe<Scalars['String']>
    /** Index of event in block from which it was emitted. */
    indexInBlock: Scalars['Int']
    /** Network the block was produced in */
    network: Network
    /** Filtering options for interface implementers */
    type?: Maybe<EventTypeOptions>
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
  }

export type RevealingStageStartedEventConnection = {
  __typename: 'RevealingStageStartedEventConnection'
  edges: Array<RevealingStageStartedEventEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type RevealingStageStartedEventCreateInput = {
  inBlock: Scalars['Float']
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock: Scalars['Float']
  network: Network
}

export type RevealingStageStartedEventEdge = {
  __typename: 'RevealingStageStartedEventEdge'
  cursor: Scalars['String']
  node: RevealingStageStartedEvent
}

export enum RevealingStageStartedEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type RevealingStageStartedEventUpdateInput = {
  inBlock?: InputMaybe<Scalars['Float']>
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock?: InputMaybe<Scalars['Float']>
  network?: InputMaybe<Network>
}

export type RevealingStageStartedEventWhereInput = {
  AND?: InputMaybe<Array<RevealingStageStartedEventWhereInput>>
  OR?: InputMaybe<Array<RevealingStageStartedEventWhereInput>>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  inBlock_eq?: InputMaybe<Scalars['Int']>
  inBlock_gt?: InputMaybe<Scalars['Int']>
  inBlock_gte?: InputMaybe<Scalars['Int']>
  inBlock_in?: InputMaybe<Array<Scalars['Int']>>
  inBlock_lt?: InputMaybe<Scalars['Int']>
  inBlock_lte?: InputMaybe<Scalars['Int']>
  inExtrinsic_contains?: InputMaybe<Scalars['String']>
  inExtrinsic_endsWith?: InputMaybe<Scalars['String']>
  inExtrinsic_eq?: InputMaybe<Scalars['String']>
  inExtrinsic_in?: InputMaybe<Array<Scalars['String']>>
  inExtrinsic_startsWith?: InputMaybe<Scalars['String']>
  indexInBlock_eq?: InputMaybe<Scalars['Int']>
  indexInBlock_gt?: InputMaybe<Scalars['Int']>
  indexInBlock_gte?: InputMaybe<Scalars['Int']>
  indexInBlock_in?: InputMaybe<Array<Scalars['Int']>>
  indexInBlock_lt?: InputMaybe<Scalars['Int']>
  indexInBlock_lte?: InputMaybe<Scalars['Int']>
  network_eq?: InputMaybe<Network>
  network_in?: InputMaybe<Array<Network>>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
}

export type RevealingStageStartedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type RewardPaidEvent = BaseGraphQlObject &
  Event & {
    __typename: 'RewardPaidEvent'
    /** Amount recieved */
    amount: Scalars['BigInt']
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    group: WorkingGroup
    groupId: Scalars['String']
    id: Scalars['ID']
    /** Blocknumber of the block in which the event was emitted. */
    inBlock: Scalars['Int']
    /** Hash of the extrinsic which caused the event to be emitted */
    inExtrinsic?: Maybe<Scalars['String']>
    /** Index of event in block from which it was emitted. */
    indexInBlock: Scalars['Int']
    /** Network the block was produced in */
    network: Network
    /** Type of the payment (REGULAR/MISSED) */
    paymentType: RewardPaymentType
    /** The account that recieved the reward */
    rewardAccount: Scalars['String']
    /** Filtering options for interface implementers */
    type?: Maybe<EventTypeOptions>
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
    worker: Worker
    workerId: Scalars['String']
  }

export type RewardPaidEventConnection = {
  __typename: 'RewardPaidEventConnection'
  edges: Array<RewardPaidEventEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type RewardPaidEventCreateInput = {
  amount: Scalars['String']
  group: Scalars['ID']
  inBlock: Scalars['Float']
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock: Scalars['Float']
  network: Network
  paymentType: RewardPaymentType
  rewardAccount: Scalars['String']
  worker: Scalars['ID']
}

export type RewardPaidEventEdge = {
  __typename: 'RewardPaidEventEdge'
  cursor: Scalars['String']
  node: RewardPaidEvent
}

export enum RewardPaidEventOrderByInput {
  AmountAsc = 'amount_ASC',
  AmountDesc = 'amount_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  GroupAsc = 'group_ASC',
  GroupDesc = 'group_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  PaymentTypeAsc = 'paymentType_ASC',
  PaymentTypeDesc = 'paymentType_DESC',
  RewardAccountAsc = 'rewardAccount_ASC',
  RewardAccountDesc = 'rewardAccount_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WorkerAsc = 'worker_ASC',
  WorkerDesc = 'worker_DESC',
}

export type RewardPaidEventUpdateInput = {
  amount?: InputMaybe<Scalars['String']>
  group?: InputMaybe<Scalars['ID']>
  inBlock?: InputMaybe<Scalars['Float']>
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock?: InputMaybe<Scalars['Float']>
  network?: InputMaybe<Network>
  paymentType?: InputMaybe<RewardPaymentType>
  rewardAccount?: InputMaybe<Scalars['String']>
  worker?: InputMaybe<Scalars['ID']>
}

export type RewardPaidEventWhereInput = {
  AND?: InputMaybe<Array<RewardPaidEventWhereInput>>
  OR?: InputMaybe<Array<RewardPaidEventWhereInput>>
  amount_eq?: InputMaybe<Scalars['BigInt']>
  amount_gt?: InputMaybe<Scalars['BigInt']>
  amount_gte?: InputMaybe<Scalars['BigInt']>
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>
  amount_lt?: InputMaybe<Scalars['BigInt']>
  amount_lte?: InputMaybe<Scalars['BigInt']>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  group?: InputMaybe<WorkingGroupWhereInput>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  inBlock_eq?: InputMaybe<Scalars['Int']>
  inBlock_gt?: InputMaybe<Scalars['Int']>
  inBlock_gte?: InputMaybe<Scalars['Int']>
  inBlock_in?: InputMaybe<Array<Scalars['Int']>>
  inBlock_lt?: InputMaybe<Scalars['Int']>
  inBlock_lte?: InputMaybe<Scalars['Int']>
  inExtrinsic_contains?: InputMaybe<Scalars['String']>
  inExtrinsic_endsWith?: InputMaybe<Scalars['String']>
  inExtrinsic_eq?: InputMaybe<Scalars['String']>
  inExtrinsic_in?: InputMaybe<Array<Scalars['String']>>
  inExtrinsic_startsWith?: InputMaybe<Scalars['String']>
  indexInBlock_eq?: InputMaybe<Scalars['Int']>
  indexInBlock_gt?: InputMaybe<Scalars['Int']>
  indexInBlock_gte?: InputMaybe<Scalars['Int']>
  indexInBlock_in?: InputMaybe<Array<Scalars['Int']>>
  indexInBlock_lt?: InputMaybe<Scalars['Int']>
  indexInBlock_lte?: InputMaybe<Scalars['Int']>
  network_eq?: InputMaybe<Network>
  network_in?: InputMaybe<Array<Network>>
  paymentType_eq?: InputMaybe<RewardPaymentType>
  paymentType_in?: InputMaybe<Array<RewardPaymentType>>
  rewardAccount_contains?: InputMaybe<Scalars['String']>
  rewardAccount_endsWith?: InputMaybe<Scalars['String']>
  rewardAccount_eq?: InputMaybe<Scalars['String']>
  rewardAccount_in?: InputMaybe<Array<Scalars['String']>>
  rewardAccount_startsWith?: InputMaybe<Scalars['String']>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
  worker?: InputMaybe<WorkerWhereInput>
}

export type RewardPaidEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type RewardPaymentEvent = BaseGraphQlObject &
  Event & {
    __typename: 'RewardPaymentEvent'
    councilMember: CouncilMember
    councilMemberId: Scalars['String']
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    id: Scalars['ID']
    /** Blocknumber of the block in which the event was emitted. */
    inBlock: Scalars['Int']
    /** Hash of the extrinsic which caused the event to be emitted */
    inExtrinsic?: Maybe<Scalars['String']>
    /** Index of event in block from which it was emitted. */
    indexInBlock: Scalars['Int']
    /** Amount that couldn't be paid and will be paid the next time. */
    missingBalance: Scalars['BigInt']
    /** Network the block was produced in */
    network: Network
    /** Amount paid to the council member */
    paidBalance: Scalars['BigInt']
    /** Candidate's account that will be recieving rewards if candidate's elected. */
    rewardAccount: Scalars['String']
    /** Filtering options for interface implementers */
    type?: Maybe<EventTypeOptions>
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
  }

export type RewardPaymentEventConnection = {
  __typename: 'RewardPaymentEventConnection'
  edges: Array<RewardPaymentEventEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type RewardPaymentEventCreateInput = {
  councilMember: Scalars['ID']
  inBlock: Scalars['Float']
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock: Scalars['Float']
  missingBalance: Scalars['String']
  network: Network
  paidBalance: Scalars['String']
  rewardAccount: Scalars['String']
}

export type RewardPaymentEventEdge = {
  __typename: 'RewardPaymentEventEdge'
  cursor: Scalars['String']
  node: RewardPaymentEvent
}

export enum RewardPaymentEventOrderByInput {
  CouncilMemberAsc = 'councilMember_ASC',
  CouncilMemberDesc = 'councilMember_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  MissingBalanceAsc = 'missingBalance_ASC',
  MissingBalanceDesc = 'missingBalance_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  PaidBalanceAsc = 'paidBalance_ASC',
  PaidBalanceDesc = 'paidBalance_DESC',
  RewardAccountAsc = 'rewardAccount_ASC',
  RewardAccountDesc = 'rewardAccount_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type RewardPaymentEventUpdateInput = {
  councilMember?: InputMaybe<Scalars['ID']>
  inBlock?: InputMaybe<Scalars['Float']>
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock?: InputMaybe<Scalars['Float']>
  missingBalance?: InputMaybe<Scalars['String']>
  network?: InputMaybe<Network>
  paidBalance?: InputMaybe<Scalars['String']>
  rewardAccount?: InputMaybe<Scalars['String']>
}

export type RewardPaymentEventWhereInput = {
  AND?: InputMaybe<Array<RewardPaymentEventWhereInput>>
  OR?: InputMaybe<Array<RewardPaymentEventWhereInput>>
  councilMember?: InputMaybe<CouncilMemberWhereInput>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  inBlock_eq?: InputMaybe<Scalars['Int']>
  inBlock_gt?: InputMaybe<Scalars['Int']>
  inBlock_gte?: InputMaybe<Scalars['Int']>
  inBlock_in?: InputMaybe<Array<Scalars['Int']>>
  inBlock_lt?: InputMaybe<Scalars['Int']>
  inBlock_lte?: InputMaybe<Scalars['Int']>
  inExtrinsic_contains?: InputMaybe<Scalars['String']>
  inExtrinsic_endsWith?: InputMaybe<Scalars['String']>
  inExtrinsic_eq?: InputMaybe<Scalars['String']>
  inExtrinsic_in?: InputMaybe<Array<Scalars['String']>>
  inExtrinsic_startsWith?: InputMaybe<Scalars['String']>
  indexInBlock_eq?: InputMaybe<Scalars['Int']>
  indexInBlock_gt?: InputMaybe<Scalars['Int']>
  indexInBlock_gte?: InputMaybe<Scalars['Int']>
  indexInBlock_in?: InputMaybe<Array<Scalars['Int']>>
  indexInBlock_lt?: InputMaybe<Scalars['Int']>
  indexInBlock_lte?: InputMaybe<Scalars['Int']>
  missingBalance_eq?: InputMaybe<Scalars['BigInt']>
  missingBalance_gt?: InputMaybe<Scalars['BigInt']>
  missingBalance_gte?: InputMaybe<Scalars['BigInt']>
  missingBalance_in?: InputMaybe<Array<Scalars['BigInt']>>
  missingBalance_lt?: InputMaybe<Scalars['BigInt']>
  missingBalance_lte?: InputMaybe<Scalars['BigInt']>
  network_eq?: InputMaybe<Network>
  network_in?: InputMaybe<Array<Network>>
  paidBalance_eq?: InputMaybe<Scalars['BigInt']>
  paidBalance_gt?: InputMaybe<Scalars['BigInt']>
  paidBalance_gte?: InputMaybe<Scalars['BigInt']>
  paidBalance_in?: InputMaybe<Array<Scalars['BigInt']>>
  paidBalance_lt?: InputMaybe<Scalars['BigInt']>
  paidBalance_lte?: InputMaybe<Scalars['BigInt']>
  rewardAccount_contains?: InputMaybe<Scalars['String']>
  rewardAccount_endsWith?: InputMaybe<Scalars['String']>
  rewardAccount_eq?: InputMaybe<Scalars['String']>
  rewardAccount_in?: InputMaybe<Array<Scalars['String']>>
  rewardAccount_startsWith?: InputMaybe<Scalars['String']>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
}

export type RewardPaymentEventWhereUniqueInput = {
  id: Scalars['ID']
}

export enum RewardPaymentType {
  Missed = 'MISSED',
  Regular = 'REGULAR',
}

export type RuntimeUpgradeProposalDetails = {
  __typename: 'RuntimeUpgradeProposalDetails'
  /** Runtime upgrade WASM bytecode */
  newRuntimeBytecode?: Maybe<RuntimeWasmBytecode>
}

export type RuntimeWasmBytecode = BaseGraphQlObject & {
  __typename: 'RuntimeWasmBytecode'
  /** The bytecode itself */
  bytecode: Scalars['Bytes']
  createdAt: Scalars['DateTime']
  createdById: Scalars['String']
  deletedAt?: Maybe<Scalars['DateTime']>
  deletedById?: Maybe<Scalars['String']>
  id: Scalars['ID']
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedById?: Maybe<Scalars['String']>
  version: Scalars['Int']
}

export type RuntimeWasmBytecodeConnection = {
  __typename: 'RuntimeWasmBytecodeConnection'
  edges: Array<RuntimeWasmBytecodeEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type RuntimeWasmBytecodeCreateInput = {
  bytecode: Scalars['String']
}

export type RuntimeWasmBytecodeEdge = {
  __typename: 'RuntimeWasmBytecodeEdge'
  cursor: Scalars['String']
  node: RuntimeWasmBytecode
}

export enum RuntimeWasmBytecodeOrderByInput {
  BytecodeAsc = 'bytecode_ASC',
  BytecodeDesc = 'bytecode_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type RuntimeWasmBytecodeUpdateInput = {
  bytecode?: InputMaybe<Scalars['String']>
}

export type RuntimeWasmBytecodeWhereInput = {
  AND?: InputMaybe<Array<RuntimeWasmBytecodeWhereInput>>
  OR?: InputMaybe<Array<RuntimeWasmBytecodeWhereInput>>
  bytecode_eq?: InputMaybe<Scalars['Bytes']>
  bytecode_in?: InputMaybe<Array<Scalars['Bytes']>>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
}

export type RuntimeWasmBytecodeWhereUniqueInput = {
  id: Scalars['ID']
}

export type SearchFtsOutput = {
  __typename: 'SearchFTSOutput'
  highlight: Scalars['String']
  isTypeOf: Scalars['String']
  item: SearchSearchResult
  rank: Scalars['Float']
}

export type SearchSearchResult = Channel | Video

export type SetCouncilBudgetIncrementProposalDetails = {
  __typename: 'SetCouncilBudgetIncrementProposalDetails'
  /** New (proposed) amount the council budget should be increased by per each budget period */
  newAmount: Scalars['Float']
}

export type SetCouncilorRewardProposalDetails = {
  __typename: 'SetCouncilorRewardProposalDetails'
  /** New (proposed) council members' reward per block */
  newRewardPerBlock: Scalars['Float']
}

export type SetInitialInvitationBalanceProposalDetails = {
  __typename: 'SetInitialInvitationBalanceProposalDetails'
  /** The new (proposed) initial balance credited to controller account of an invitee (locked for transaction fee payments only) */
  newInitialInvitationBalance: Scalars['Float']
}

export type SetInitialInvitationCountProposalDetails = {
  __typename: 'SetInitialInvitationCountProposalDetails'
  /** The new (proposed) initial invitations count for paid memberships */
  newInitialInvitationsCount: Scalars['Int']
}

export type SetMaxValidatorCountProposalDetails = {
  __typename: 'SetMaxValidatorCountProposalDetails'
  /** The new (propsed) max. number of active validators */
  newMaxValidatorCount: Scalars['Int']
}

export type SetMembershipLeadInvitationQuotaProposalDetails = {
  __typename: 'SetMembershipLeadInvitationQuotaProposalDetails'
  /** The new (proposed) membership working group lead invitation quota */
  newLeadInvitationQuota: Scalars['Int']
}

export type SetMembershipPriceProposalDetails = {
  __typename: 'SetMembershipPriceProposalDetails'
  /** New (proposed) membership price */
  newPrice: Scalars['Float']
}

export type SetReferralCutProposalDetails = {
  __typename: 'SetReferralCutProposalDetails'
  /** The new (proposed) percentage of tokens diverted to referrer (from referred member's membership price). */
  newReferralCut: Scalars['Int']
}

export type SetWorkingGroupLeadRewardProposalDetails = {
  __typename: 'SetWorkingGroupLeadRewardProposalDetails'
  /** The lead that should be affected */
  lead?: Maybe<Worker>
  /** Lead's new (proposed) reward per block */
  newRewardPerBlock: Scalars['Float']
}

export type SignalProposalDetails = {
  __typename: 'SignalProposalDetails'
  /** Signal proposal content */
  text: Scalars['String']
}

export type SlashWorkingGroupLeadProposalDetails = {
  __typename: 'SlashWorkingGroupLeadProposalDetails'
  /** Amount to slash the stake by */
  amount: Scalars['Float']
  /** The lead that should be affected */
  lead?: Maybe<Worker>
}

export type StakeDecreasedEvent = BaseGraphQlObject &
  Event & {
    __typename: 'StakeDecreasedEvent'
    /** The amount of JOY the stake was decreased by */
    amount: Scalars['BigInt']
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    group: WorkingGroup
    groupId: Scalars['String']
    id: Scalars['ID']
    /** Blocknumber of the block in which the event was emitted. */
    inBlock: Scalars['Int']
    /** Hash of the extrinsic which caused the event to be emitted */
    inExtrinsic?: Maybe<Scalars['String']>
    /** Index of event in block from which it was emitted. */
    indexInBlock: Scalars['Int']
    /** Network the block was produced in */
    network: Network
    /** Filtering options for interface implementers */
    type?: Maybe<EventTypeOptions>
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
    worker: Worker
    workerId: Scalars['String']
  }

export type StakeDecreasedEventConnection = {
  __typename: 'StakeDecreasedEventConnection'
  edges: Array<StakeDecreasedEventEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type StakeDecreasedEventCreateInput = {
  amount: Scalars['String']
  group: Scalars['ID']
  inBlock: Scalars['Float']
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock: Scalars['Float']
  network: Network
  worker: Scalars['ID']
}

export type StakeDecreasedEventEdge = {
  __typename: 'StakeDecreasedEventEdge'
  cursor: Scalars['String']
  node: StakeDecreasedEvent
}

export enum StakeDecreasedEventOrderByInput {
  AmountAsc = 'amount_ASC',
  AmountDesc = 'amount_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  GroupAsc = 'group_ASC',
  GroupDesc = 'group_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WorkerAsc = 'worker_ASC',
  WorkerDesc = 'worker_DESC',
}

export type StakeDecreasedEventUpdateInput = {
  amount?: InputMaybe<Scalars['String']>
  group?: InputMaybe<Scalars['ID']>
  inBlock?: InputMaybe<Scalars['Float']>
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock?: InputMaybe<Scalars['Float']>
  network?: InputMaybe<Network>
  worker?: InputMaybe<Scalars['ID']>
}

export type StakeDecreasedEventWhereInput = {
  AND?: InputMaybe<Array<StakeDecreasedEventWhereInput>>
  OR?: InputMaybe<Array<StakeDecreasedEventWhereInput>>
  amount_eq?: InputMaybe<Scalars['BigInt']>
  amount_gt?: InputMaybe<Scalars['BigInt']>
  amount_gte?: InputMaybe<Scalars['BigInt']>
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>
  amount_lt?: InputMaybe<Scalars['BigInt']>
  amount_lte?: InputMaybe<Scalars['BigInt']>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  group?: InputMaybe<WorkingGroupWhereInput>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  inBlock_eq?: InputMaybe<Scalars['Int']>
  inBlock_gt?: InputMaybe<Scalars['Int']>
  inBlock_gte?: InputMaybe<Scalars['Int']>
  inBlock_in?: InputMaybe<Array<Scalars['Int']>>
  inBlock_lt?: InputMaybe<Scalars['Int']>
  inBlock_lte?: InputMaybe<Scalars['Int']>
  inExtrinsic_contains?: InputMaybe<Scalars['String']>
  inExtrinsic_endsWith?: InputMaybe<Scalars['String']>
  inExtrinsic_eq?: InputMaybe<Scalars['String']>
  inExtrinsic_in?: InputMaybe<Array<Scalars['String']>>
  inExtrinsic_startsWith?: InputMaybe<Scalars['String']>
  indexInBlock_eq?: InputMaybe<Scalars['Int']>
  indexInBlock_gt?: InputMaybe<Scalars['Int']>
  indexInBlock_gte?: InputMaybe<Scalars['Int']>
  indexInBlock_in?: InputMaybe<Array<Scalars['Int']>>
  indexInBlock_lt?: InputMaybe<Scalars['Int']>
  indexInBlock_lte?: InputMaybe<Scalars['Int']>
  network_eq?: InputMaybe<Network>
  network_in?: InputMaybe<Array<Network>>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
  worker?: InputMaybe<WorkerWhereInput>
}

export type StakeDecreasedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type StakeIncreasedEvent = BaseGraphQlObject &
  Event & {
    __typename: 'StakeIncreasedEvent'
    /** The amount of JOY the stake was increased by */
    amount: Scalars['BigInt']
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    group: WorkingGroup
    groupId: Scalars['String']
    id: Scalars['ID']
    /** Blocknumber of the block in which the event was emitted. */
    inBlock: Scalars['Int']
    /** Hash of the extrinsic which caused the event to be emitted */
    inExtrinsic?: Maybe<Scalars['String']>
    /** Index of event in block from which it was emitted. */
    indexInBlock: Scalars['Int']
    /** Network the block was produced in */
    network: Network
    /** Filtering options for interface implementers */
    type?: Maybe<EventTypeOptions>
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
    worker: Worker
    workerId: Scalars['String']
  }

export type StakeIncreasedEventConnection = {
  __typename: 'StakeIncreasedEventConnection'
  edges: Array<StakeIncreasedEventEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type StakeIncreasedEventCreateInput = {
  amount: Scalars['String']
  group: Scalars['ID']
  inBlock: Scalars['Float']
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock: Scalars['Float']
  network: Network
  worker: Scalars['ID']
}

export type StakeIncreasedEventEdge = {
  __typename: 'StakeIncreasedEventEdge'
  cursor: Scalars['String']
  node: StakeIncreasedEvent
}

export enum StakeIncreasedEventOrderByInput {
  AmountAsc = 'amount_ASC',
  AmountDesc = 'amount_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  GroupAsc = 'group_ASC',
  GroupDesc = 'group_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WorkerAsc = 'worker_ASC',
  WorkerDesc = 'worker_DESC',
}

export type StakeIncreasedEventUpdateInput = {
  amount?: InputMaybe<Scalars['String']>
  group?: InputMaybe<Scalars['ID']>
  inBlock?: InputMaybe<Scalars['Float']>
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock?: InputMaybe<Scalars['Float']>
  network?: InputMaybe<Network>
  worker?: InputMaybe<Scalars['ID']>
}

export type StakeIncreasedEventWhereInput = {
  AND?: InputMaybe<Array<StakeIncreasedEventWhereInput>>
  OR?: InputMaybe<Array<StakeIncreasedEventWhereInput>>
  amount_eq?: InputMaybe<Scalars['BigInt']>
  amount_gt?: InputMaybe<Scalars['BigInt']>
  amount_gte?: InputMaybe<Scalars['BigInt']>
  amount_in?: InputMaybe<Array<Scalars['BigInt']>>
  amount_lt?: InputMaybe<Scalars['BigInt']>
  amount_lte?: InputMaybe<Scalars['BigInt']>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  group?: InputMaybe<WorkingGroupWhereInput>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  inBlock_eq?: InputMaybe<Scalars['Int']>
  inBlock_gt?: InputMaybe<Scalars['Int']>
  inBlock_gte?: InputMaybe<Scalars['Int']>
  inBlock_in?: InputMaybe<Array<Scalars['Int']>>
  inBlock_lt?: InputMaybe<Scalars['Int']>
  inBlock_lte?: InputMaybe<Scalars['Int']>
  inExtrinsic_contains?: InputMaybe<Scalars['String']>
  inExtrinsic_endsWith?: InputMaybe<Scalars['String']>
  inExtrinsic_eq?: InputMaybe<Scalars['String']>
  inExtrinsic_in?: InputMaybe<Array<Scalars['String']>>
  inExtrinsic_startsWith?: InputMaybe<Scalars['String']>
  indexInBlock_eq?: InputMaybe<Scalars['Int']>
  indexInBlock_gt?: InputMaybe<Scalars['Int']>
  indexInBlock_gte?: InputMaybe<Scalars['Int']>
  indexInBlock_in?: InputMaybe<Array<Scalars['Int']>>
  indexInBlock_lt?: InputMaybe<Scalars['Int']>
  indexInBlock_lte?: InputMaybe<Scalars['Int']>
  network_eq?: InputMaybe<Network>
  network_in?: InputMaybe<Array<Network>>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
  worker?: InputMaybe<WorkerWhereInput>
}

export type StakeIncreasedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type StakeReleasedEvent = BaseGraphQlObject &
  Event & {
    __typename: 'StakeReleasedEvent'
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    id: Scalars['ID']
    /** Blocknumber of the block in which the event was emitted. */
    inBlock: Scalars['Int']
    /** Hash of the extrinsic which caused the event to be emitted */
    inExtrinsic?: Maybe<Scalars['String']>
    /** Index of event in block from which it was emitted. */
    indexInBlock: Scalars['Int']
    /** Network the block was produced in */
    network: Network
    /** Account used to stake the value. */
    stakingAccount: Scalars['String']
    /** Filtering options for interface implementers */
    type?: Maybe<EventTypeOptions>
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
  }

export type StakeReleasedEventConnection = {
  __typename: 'StakeReleasedEventConnection'
  edges: Array<StakeReleasedEventEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type StakeReleasedEventCreateInput = {
  inBlock: Scalars['Float']
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock: Scalars['Float']
  network: Network
  stakingAccount: Scalars['String']
}

export type StakeReleasedEventEdge = {
  __typename: 'StakeReleasedEventEdge'
  cursor: Scalars['String']
  node: StakeReleasedEvent
}

export enum StakeReleasedEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  StakingAccountAsc = 'stakingAccount_ASC',
  StakingAccountDesc = 'stakingAccount_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type StakeReleasedEventUpdateInput = {
  inBlock?: InputMaybe<Scalars['Float']>
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock?: InputMaybe<Scalars['Float']>
  network?: InputMaybe<Network>
  stakingAccount?: InputMaybe<Scalars['String']>
}

export type StakeReleasedEventWhereInput = {
  AND?: InputMaybe<Array<StakeReleasedEventWhereInput>>
  OR?: InputMaybe<Array<StakeReleasedEventWhereInput>>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  inBlock_eq?: InputMaybe<Scalars['Int']>
  inBlock_gt?: InputMaybe<Scalars['Int']>
  inBlock_gte?: InputMaybe<Scalars['Int']>
  inBlock_in?: InputMaybe<Array<Scalars['Int']>>
  inBlock_lt?: InputMaybe<Scalars['Int']>
  inBlock_lte?: InputMaybe<Scalars['Int']>
  inExtrinsic_contains?: InputMaybe<Scalars['String']>
  inExtrinsic_endsWith?: InputMaybe<Scalars['String']>
  inExtrinsic_eq?: InputMaybe<Scalars['String']>
  inExtrinsic_in?: InputMaybe<Array<Scalars['String']>>
  inExtrinsic_startsWith?: InputMaybe<Scalars['String']>
  indexInBlock_eq?: InputMaybe<Scalars['Int']>
  indexInBlock_gt?: InputMaybe<Scalars['Int']>
  indexInBlock_gte?: InputMaybe<Scalars['Int']>
  indexInBlock_in?: InputMaybe<Array<Scalars['Int']>>
  indexInBlock_lt?: InputMaybe<Scalars['Int']>
  indexInBlock_lte?: InputMaybe<Scalars['Int']>
  network_eq?: InputMaybe<Network>
  network_in?: InputMaybe<Array<Network>>
  stakingAccount_contains?: InputMaybe<Scalars['String']>
  stakingAccount_endsWith?: InputMaybe<Scalars['String']>
  stakingAccount_eq?: InputMaybe<Scalars['String']>
  stakingAccount_in?: InputMaybe<Array<Scalars['String']>>
  stakingAccount_startsWith?: InputMaybe<Scalars['String']>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
}

export type StakeReleasedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type StakeSlashedEvent = BaseGraphQlObject &
  Event & {
    __typename: 'StakeSlashedEvent'
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    group: WorkingGroup
    groupId: Scalars['String']
    id: Scalars['ID']
    /** Blocknumber of the block in which the event was emitted. */
    inBlock: Scalars['Int']
    /** Hash of the extrinsic which caused the event to be emitted */
    inExtrinsic?: Maybe<Scalars['String']>
    /** Index of event in block from which it was emitted. */
    indexInBlock: Scalars['Int']
    /** Network the block was produced in */
    network: Network
    /** Optional rationale */
    rationale?: Maybe<Scalars['String']>
    /** Balance that was requested to be slashed */
    requestedAmount: Scalars['BigInt']
    /** Balance that was actually slashed */
    slashedAmount: Scalars['BigInt']
    /** Filtering options for interface implementers */
    type?: Maybe<EventTypeOptions>
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
    worker: Worker
    workerId: Scalars['String']
  }

export type StakeSlashedEventConnection = {
  __typename: 'StakeSlashedEventConnection'
  edges: Array<StakeSlashedEventEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type StakeSlashedEventCreateInput = {
  group: Scalars['ID']
  inBlock: Scalars['Float']
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock: Scalars['Float']
  network: Network
  rationale?: InputMaybe<Scalars['String']>
  requestedAmount: Scalars['String']
  slashedAmount: Scalars['String']
  worker: Scalars['ID']
}

export type StakeSlashedEventEdge = {
  __typename: 'StakeSlashedEventEdge'
  cursor: Scalars['String']
  node: StakeSlashedEvent
}

export enum StakeSlashedEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  GroupAsc = 'group_ASC',
  GroupDesc = 'group_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  RationaleAsc = 'rationale_ASC',
  RationaleDesc = 'rationale_DESC',
  RequestedAmountAsc = 'requestedAmount_ASC',
  RequestedAmountDesc = 'requestedAmount_DESC',
  SlashedAmountAsc = 'slashedAmount_ASC',
  SlashedAmountDesc = 'slashedAmount_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WorkerAsc = 'worker_ASC',
  WorkerDesc = 'worker_DESC',
}

export type StakeSlashedEventUpdateInput = {
  group?: InputMaybe<Scalars['ID']>
  inBlock?: InputMaybe<Scalars['Float']>
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock?: InputMaybe<Scalars['Float']>
  network?: InputMaybe<Network>
  rationale?: InputMaybe<Scalars['String']>
  requestedAmount?: InputMaybe<Scalars['String']>
  slashedAmount?: InputMaybe<Scalars['String']>
  worker?: InputMaybe<Scalars['ID']>
}

export type StakeSlashedEventWhereInput = {
  AND?: InputMaybe<Array<StakeSlashedEventWhereInput>>
  OR?: InputMaybe<Array<StakeSlashedEventWhereInput>>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  group?: InputMaybe<WorkingGroupWhereInput>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  inBlock_eq?: InputMaybe<Scalars['Int']>
  inBlock_gt?: InputMaybe<Scalars['Int']>
  inBlock_gte?: InputMaybe<Scalars['Int']>
  inBlock_in?: InputMaybe<Array<Scalars['Int']>>
  inBlock_lt?: InputMaybe<Scalars['Int']>
  inBlock_lte?: InputMaybe<Scalars['Int']>
  inExtrinsic_contains?: InputMaybe<Scalars['String']>
  inExtrinsic_endsWith?: InputMaybe<Scalars['String']>
  inExtrinsic_eq?: InputMaybe<Scalars['String']>
  inExtrinsic_in?: InputMaybe<Array<Scalars['String']>>
  inExtrinsic_startsWith?: InputMaybe<Scalars['String']>
  indexInBlock_eq?: InputMaybe<Scalars['Int']>
  indexInBlock_gt?: InputMaybe<Scalars['Int']>
  indexInBlock_gte?: InputMaybe<Scalars['Int']>
  indexInBlock_in?: InputMaybe<Array<Scalars['Int']>>
  indexInBlock_lt?: InputMaybe<Scalars['Int']>
  indexInBlock_lte?: InputMaybe<Scalars['Int']>
  network_eq?: InputMaybe<Network>
  network_in?: InputMaybe<Array<Network>>
  rationale_contains?: InputMaybe<Scalars['String']>
  rationale_endsWith?: InputMaybe<Scalars['String']>
  rationale_eq?: InputMaybe<Scalars['String']>
  rationale_in?: InputMaybe<Array<Scalars['String']>>
  rationale_startsWith?: InputMaybe<Scalars['String']>
  requestedAmount_eq?: InputMaybe<Scalars['BigInt']>
  requestedAmount_gt?: InputMaybe<Scalars['BigInt']>
  requestedAmount_gte?: InputMaybe<Scalars['BigInt']>
  requestedAmount_in?: InputMaybe<Array<Scalars['BigInt']>>
  requestedAmount_lt?: InputMaybe<Scalars['BigInt']>
  requestedAmount_lte?: InputMaybe<Scalars['BigInt']>
  slashedAmount_eq?: InputMaybe<Scalars['BigInt']>
  slashedAmount_gt?: InputMaybe<Scalars['BigInt']>
  slashedAmount_gte?: InputMaybe<Scalars['BigInt']>
  slashedAmount_in?: InputMaybe<Array<Scalars['BigInt']>>
  slashedAmount_lt?: InputMaybe<Scalars['BigInt']>
  slashedAmount_lte?: InputMaybe<Scalars['BigInt']>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
  worker?: InputMaybe<WorkerWhereInput>
}

export type StakeSlashedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type StakingAccountAddedEvent = BaseGraphQlObject &
  Event & {
    __typename: 'StakingAccountAddedEvent'
    /** New staking account in SS58 encoding. */
    account: Scalars['String']
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    id: Scalars['ID']
    /** Blocknumber of the block in which the event was emitted. */
    inBlock: Scalars['Int']
    /** Hash of the extrinsic which caused the event to be emitted */
    inExtrinsic?: Maybe<Scalars['String']>
    /** Index of event in block from which it was emitted. */
    indexInBlock: Scalars['Int']
    member: Membership
    memberId: Scalars['String']
    /** Network the block was produced in */
    network: Network
    /** Filtering options for interface implementers */
    type?: Maybe<EventTypeOptions>
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
  }

export type StakingAccountAddedEventConnection = {
  __typename: 'StakingAccountAddedEventConnection'
  edges: Array<StakingAccountAddedEventEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type StakingAccountAddedEventCreateInput = {
  account: Scalars['String']
  inBlock: Scalars['Float']
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock: Scalars['Float']
  member: Scalars['ID']
  network: Network
}

export type StakingAccountAddedEventEdge = {
  __typename: 'StakingAccountAddedEventEdge'
  cursor: Scalars['String']
  node: StakingAccountAddedEvent
}

export enum StakingAccountAddedEventOrderByInput {
  AccountAsc = 'account_ASC',
  AccountDesc = 'account_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  MemberAsc = 'member_ASC',
  MemberDesc = 'member_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type StakingAccountAddedEventUpdateInput = {
  account?: InputMaybe<Scalars['String']>
  inBlock?: InputMaybe<Scalars['Float']>
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock?: InputMaybe<Scalars['Float']>
  member?: InputMaybe<Scalars['ID']>
  network?: InputMaybe<Network>
}

export type StakingAccountAddedEventWhereInput = {
  AND?: InputMaybe<Array<StakingAccountAddedEventWhereInput>>
  OR?: InputMaybe<Array<StakingAccountAddedEventWhereInput>>
  account_contains?: InputMaybe<Scalars['String']>
  account_endsWith?: InputMaybe<Scalars['String']>
  account_eq?: InputMaybe<Scalars['String']>
  account_in?: InputMaybe<Array<Scalars['String']>>
  account_startsWith?: InputMaybe<Scalars['String']>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  inBlock_eq?: InputMaybe<Scalars['Int']>
  inBlock_gt?: InputMaybe<Scalars['Int']>
  inBlock_gte?: InputMaybe<Scalars['Int']>
  inBlock_in?: InputMaybe<Array<Scalars['Int']>>
  inBlock_lt?: InputMaybe<Scalars['Int']>
  inBlock_lte?: InputMaybe<Scalars['Int']>
  inExtrinsic_contains?: InputMaybe<Scalars['String']>
  inExtrinsic_endsWith?: InputMaybe<Scalars['String']>
  inExtrinsic_eq?: InputMaybe<Scalars['String']>
  inExtrinsic_in?: InputMaybe<Array<Scalars['String']>>
  inExtrinsic_startsWith?: InputMaybe<Scalars['String']>
  indexInBlock_eq?: InputMaybe<Scalars['Int']>
  indexInBlock_gt?: InputMaybe<Scalars['Int']>
  indexInBlock_gte?: InputMaybe<Scalars['Int']>
  indexInBlock_in?: InputMaybe<Array<Scalars['Int']>>
  indexInBlock_lt?: InputMaybe<Scalars['Int']>
  indexInBlock_lte?: InputMaybe<Scalars['Int']>
  member?: InputMaybe<MembershipWhereInput>
  network_eq?: InputMaybe<Network>
  network_in?: InputMaybe<Array<Network>>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
}

export type StakingAccountAddedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type StakingAccountConfirmedEvent = BaseGraphQlObject &
  Event & {
    __typename: 'StakingAccountConfirmedEvent'
    /** New staking account in SS58 encoding. */
    account: Scalars['String']
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    id: Scalars['ID']
    /** Blocknumber of the block in which the event was emitted. */
    inBlock: Scalars['Int']
    /** Hash of the extrinsic which caused the event to be emitted */
    inExtrinsic?: Maybe<Scalars['String']>
    /** Index of event in block from which it was emitted. */
    indexInBlock: Scalars['Int']
    member: Membership
    memberId: Scalars['String']
    /** Network the block was produced in */
    network: Network
    /** Filtering options for interface implementers */
    type?: Maybe<EventTypeOptions>
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
  }

export type StakingAccountConfirmedEventConnection = {
  __typename: 'StakingAccountConfirmedEventConnection'
  edges: Array<StakingAccountConfirmedEventEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type StakingAccountConfirmedEventCreateInput = {
  account: Scalars['String']
  inBlock: Scalars['Float']
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock: Scalars['Float']
  member: Scalars['ID']
  network: Network
}

export type StakingAccountConfirmedEventEdge = {
  __typename: 'StakingAccountConfirmedEventEdge'
  cursor: Scalars['String']
  node: StakingAccountConfirmedEvent
}

export enum StakingAccountConfirmedEventOrderByInput {
  AccountAsc = 'account_ASC',
  AccountDesc = 'account_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  MemberAsc = 'member_ASC',
  MemberDesc = 'member_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type StakingAccountConfirmedEventUpdateInput = {
  account?: InputMaybe<Scalars['String']>
  inBlock?: InputMaybe<Scalars['Float']>
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock?: InputMaybe<Scalars['Float']>
  member?: InputMaybe<Scalars['ID']>
  network?: InputMaybe<Network>
}

export type StakingAccountConfirmedEventWhereInput = {
  AND?: InputMaybe<Array<StakingAccountConfirmedEventWhereInput>>
  OR?: InputMaybe<Array<StakingAccountConfirmedEventWhereInput>>
  account_contains?: InputMaybe<Scalars['String']>
  account_endsWith?: InputMaybe<Scalars['String']>
  account_eq?: InputMaybe<Scalars['String']>
  account_in?: InputMaybe<Array<Scalars['String']>>
  account_startsWith?: InputMaybe<Scalars['String']>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  inBlock_eq?: InputMaybe<Scalars['Int']>
  inBlock_gt?: InputMaybe<Scalars['Int']>
  inBlock_gte?: InputMaybe<Scalars['Int']>
  inBlock_in?: InputMaybe<Array<Scalars['Int']>>
  inBlock_lt?: InputMaybe<Scalars['Int']>
  inBlock_lte?: InputMaybe<Scalars['Int']>
  inExtrinsic_contains?: InputMaybe<Scalars['String']>
  inExtrinsic_endsWith?: InputMaybe<Scalars['String']>
  inExtrinsic_eq?: InputMaybe<Scalars['String']>
  inExtrinsic_in?: InputMaybe<Array<Scalars['String']>>
  inExtrinsic_startsWith?: InputMaybe<Scalars['String']>
  indexInBlock_eq?: InputMaybe<Scalars['Int']>
  indexInBlock_gt?: InputMaybe<Scalars['Int']>
  indexInBlock_gte?: InputMaybe<Scalars['Int']>
  indexInBlock_in?: InputMaybe<Array<Scalars['Int']>>
  indexInBlock_lt?: InputMaybe<Scalars['Int']>
  indexInBlock_lte?: InputMaybe<Scalars['Int']>
  member?: InputMaybe<MembershipWhereInput>
  network_eq?: InputMaybe<Network>
  network_in?: InputMaybe<Array<Network>>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
}

export type StakingAccountConfirmedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type StakingAccountRemovedEvent = BaseGraphQlObject &
  Event & {
    __typename: 'StakingAccountRemovedEvent'
    /** New staking account in SS58 encoding. */
    account: Scalars['String']
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    id: Scalars['ID']
    /** Blocknumber of the block in which the event was emitted. */
    inBlock: Scalars['Int']
    /** Hash of the extrinsic which caused the event to be emitted */
    inExtrinsic?: Maybe<Scalars['String']>
    /** Index of event in block from which it was emitted. */
    indexInBlock: Scalars['Int']
    member: Membership
    memberId: Scalars['String']
    /** Network the block was produced in */
    network: Network
    /** Filtering options for interface implementers */
    type?: Maybe<EventTypeOptions>
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
  }

export type StakingAccountRemovedEventConnection = {
  __typename: 'StakingAccountRemovedEventConnection'
  edges: Array<StakingAccountRemovedEventEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type StakingAccountRemovedEventCreateInput = {
  account: Scalars['String']
  inBlock: Scalars['Float']
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock: Scalars['Float']
  member: Scalars['ID']
  network: Network
}

export type StakingAccountRemovedEventEdge = {
  __typename: 'StakingAccountRemovedEventEdge'
  cursor: Scalars['String']
  node: StakingAccountRemovedEvent
}

export enum StakingAccountRemovedEventOrderByInput {
  AccountAsc = 'account_ASC',
  AccountDesc = 'account_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  MemberAsc = 'member_ASC',
  MemberDesc = 'member_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type StakingAccountRemovedEventUpdateInput = {
  account?: InputMaybe<Scalars['String']>
  inBlock?: InputMaybe<Scalars['Float']>
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock?: InputMaybe<Scalars['Float']>
  member?: InputMaybe<Scalars['ID']>
  network?: InputMaybe<Network>
}

export type StakingAccountRemovedEventWhereInput = {
  AND?: InputMaybe<Array<StakingAccountRemovedEventWhereInput>>
  OR?: InputMaybe<Array<StakingAccountRemovedEventWhereInput>>
  account_contains?: InputMaybe<Scalars['String']>
  account_endsWith?: InputMaybe<Scalars['String']>
  account_eq?: InputMaybe<Scalars['String']>
  account_in?: InputMaybe<Array<Scalars['String']>>
  account_startsWith?: InputMaybe<Scalars['String']>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  inBlock_eq?: InputMaybe<Scalars['Int']>
  inBlock_gt?: InputMaybe<Scalars['Int']>
  inBlock_gte?: InputMaybe<Scalars['Int']>
  inBlock_in?: InputMaybe<Array<Scalars['Int']>>
  inBlock_lt?: InputMaybe<Scalars['Int']>
  inBlock_lte?: InputMaybe<Scalars['Int']>
  inExtrinsic_contains?: InputMaybe<Scalars['String']>
  inExtrinsic_endsWith?: InputMaybe<Scalars['String']>
  inExtrinsic_eq?: InputMaybe<Scalars['String']>
  inExtrinsic_in?: InputMaybe<Array<Scalars['String']>>
  inExtrinsic_startsWith?: InputMaybe<Scalars['String']>
  indexInBlock_eq?: InputMaybe<Scalars['Int']>
  indexInBlock_gt?: InputMaybe<Scalars['Int']>
  indexInBlock_gte?: InputMaybe<Scalars['Int']>
  indexInBlock_in?: InputMaybe<Array<Scalars['Int']>>
  indexInBlock_lt?: InputMaybe<Scalars['Int']>
  indexInBlock_lte?: InputMaybe<Scalars['Int']>
  member?: InputMaybe<MembershipWhereInput>
  network_eq?: InputMaybe<Network>
  network_in?: InputMaybe<Array<Network>>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
}

export type StakingAccountRemovedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type StandardDeleteResponse = {
  __typename: 'StandardDeleteResponse'
  id: Scalars['ID']
}

export type StatusTextChangedEvent = BaseGraphQlObject &
  Event & {
    __typename: 'StatusTextChangedEvent'
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    group: WorkingGroup
    groupId: Scalars['String']
    id: Scalars['ID']
    /** Blocknumber of the block in which the event was emitted. */
    inBlock: Scalars['Int']
    /** Hash of the extrinsic which caused the event to be emitted */
    inExtrinsic?: Maybe<Scalars['String']>
    /** Index of event in block from which it was emitted. */
    indexInBlock: Scalars['Int']
    /** Original action metadata as hex string */
    metadata?: Maybe<Scalars['String']>
    /** Network the block was produced in */
    network: Network
    /** Event result depeding on the metadata action type */
    result: WorkingGroupMetadataActionResult
    /** Filtering options for interface implementers */
    type?: Maybe<EventTypeOptions>
    upcomingworkinggroupopeningcreatedInEvent?: Maybe<Array<UpcomingWorkingGroupOpening>>
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
    workinggroupmetadatasetInEvent?: Maybe<Array<WorkingGroupMetadata>>
  }

export type StatusTextChangedEventConnection = {
  __typename: 'StatusTextChangedEventConnection'
  edges: Array<StatusTextChangedEventEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type StatusTextChangedEventCreateInput = {
  group: Scalars['ID']
  inBlock: Scalars['Float']
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock: Scalars['Float']
  metadata?: InputMaybe<Scalars['String']>
  network: Network
  result: Scalars['JSONObject']
}

export type StatusTextChangedEventEdge = {
  __typename: 'StatusTextChangedEventEdge'
  cursor: Scalars['String']
  node: StatusTextChangedEvent
}

export enum StatusTextChangedEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  GroupAsc = 'group_ASC',
  GroupDesc = 'group_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  MetadataAsc = 'metadata_ASC',
  MetadataDesc = 'metadata_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type StatusTextChangedEventUpdateInput = {
  group?: InputMaybe<Scalars['ID']>
  inBlock?: InputMaybe<Scalars['Float']>
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock?: InputMaybe<Scalars['Float']>
  metadata?: InputMaybe<Scalars['String']>
  network?: InputMaybe<Network>
  result?: InputMaybe<Scalars['JSONObject']>
}

export type StatusTextChangedEventWhereInput = {
  AND?: InputMaybe<Array<StatusTextChangedEventWhereInput>>
  OR?: InputMaybe<Array<StatusTextChangedEventWhereInput>>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  group?: InputMaybe<WorkingGroupWhereInput>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  inBlock_eq?: InputMaybe<Scalars['Int']>
  inBlock_gt?: InputMaybe<Scalars['Int']>
  inBlock_gte?: InputMaybe<Scalars['Int']>
  inBlock_in?: InputMaybe<Array<Scalars['Int']>>
  inBlock_lt?: InputMaybe<Scalars['Int']>
  inBlock_lte?: InputMaybe<Scalars['Int']>
  inExtrinsic_contains?: InputMaybe<Scalars['String']>
  inExtrinsic_endsWith?: InputMaybe<Scalars['String']>
  inExtrinsic_eq?: InputMaybe<Scalars['String']>
  inExtrinsic_in?: InputMaybe<Array<Scalars['String']>>
  inExtrinsic_startsWith?: InputMaybe<Scalars['String']>
  indexInBlock_eq?: InputMaybe<Scalars['Int']>
  indexInBlock_gt?: InputMaybe<Scalars['Int']>
  indexInBlock_gte?: InputMaybe<Scalars['Int']>
  indexInBlock_in?: InputMaybe<Array<Scalars['Int']>>
  indexInBlock_lt?: InputMaybe<Scalars['Int']>
  indexInBlock_lte?: InputMaybe<Scalars['Int']>
  metadata_contains?: InputMaybe<Scalars['String']>
  metadata_endsWith?: InputMaybe<Scalars['String']>
  metadata_eq?: InputMaybe<Scalars['String']>
  metadata_in?: InputMaybe<Array<Scalars['String']>>
  metadata_startsWith?: InputMaybe<Scalars['String']>
  network_eq?: InputMaybe<Network>
  network_in?: InputMaybe<Array<Network>>
  result_json?: InputMaybe<Scalars['JSONObject']>
  upcomingworkinggroupopeningcreatedInEvent_every?: InputMaybe<UpcomingWorkingGroupOpeningWhereInput>
  upcomingworkinggroupopeningcreatedInEvent_none?: InputMaybe<UpcomingWorkingGroupOpeningWhereInput>
  upcomingworkinggroupopeningcreatedInEvent_some?: InputMaybe<UpcomingWorkingGroupOpeningWhereInput>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
  workinggroupmetadatasetInEvent_every?: InputMaybe<WorkingGroupMetadataWhereInput>
  workinggroupmetadatasetInEvent_none?: InputMaybe<WorkingGroupMetadataWhereInput>
  workinggroupmetadatasetInEvent_some?: InputMaybe<WorkingGroupMetadataWhereInput>
}

export type StatusTextChangedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type Subscription = {
  __typename: 'Subscription'
  stateSubscription: ProcessorState
}

export type TerminateWorkingGroupLeadProposalDetails = {
  __typename: 'TerminateWorkingGroupLeadProposalDetails'
  /** Lead that's supposed to be terminated */
  lead?: Maybe<Worker>
  /** Optionally - the amount to slash the lead's stake by */
  slashingAmount?: Maybe<Scalars['Float']>
}

export type TerminatedLeaderEvent = BaseGraphQlObject &
  Event & {
    __typename: 'TerminatedLeaderEvent'
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    group: WorkingGroup
    groupId: Scalars['String']
    id: Scalars['ID']
    /** Blocknumber of the block in which the event was emitted. */
    inBlock: Scalars['Int']
    /** Hash of the extrinsic which caused the event to be emitted */
    inExtrinsic?: Maybe<Scalars['String']>
    /** Index of event in block from which it was emitted. */
    indexInBlock: Scalars['Int']
    /** Network the block was produced in */
    network: Network
    /** Slash amount (if any) */
    penalty?: Maybe<Scalars['BigInt']>
    /** Optional rationale */
    rationale?: Maybe<Scalars['String']>
    /** Filtering options for interface implementers */
    type?: Maybe<EventTypeOptions>
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
    worker: Worker
    workerId: Scalars['String']
  }

export type TerminatedLeaderEventConnection = {
  __typename: 'TerminatedLeaderEventConnection'
  edges: Array<TerminatedLeaderEventEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type TerminatedLeaderEventCreateInput = {
  group: Scalars['ID']
  inBlock: Scalars['Float']
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock: Scalars['Float']
  network: Network
  penalty?: InputMaybe<Scalars['String']>
  rationale?: InputMaybe<Scalars['String']>
  worker: Scalars['ID']
}

export type TerminatedLeaderEventEdge = {
  __typename: 'TerminatedLeaderEventEdge'
  cursor: Scalars['String']
  node: TerminatedLeaderEvent
}

export enum TerminatedLeaderEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  GroupAsc = 'group_ASC',
  GroupDesc = 'group_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  PenaltyAsc = 'penalty_ASC',
  PenaltyDesc = 'penalty_DESC',
  RationaleAsc = 'rationale_ASC',
  RationaleDesc = 'rationale_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WorkerAsc = 'worker_ASC',
  WorkerDesc = 'worker_DESC',
}

export type TerminatedLeaderEventUpdateInput = {
  group?: InputMaybe<Scalars['ID']>
  inBlock?: InputMaybe<Scalars['Float']>
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock?: InputMaybe<Scalars['Float']>
  network?: InputMaybe<Network>
  penalty?: InputMaybe<Scalars['String']>
  rationale?: InputMaybe<Scalars['String']>
  worker?: InputMaybe<Scalars['ID']>
}

export type TerminatedLeaderEventWhereInput = {
  AND?: InputMaybe<Array<TerminatedLeaderEventWhereInput>>
  OR?: InputMaybe<Array<TerminatedLeaderEventWhereInput>>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  group?: InputMaybe<WorkingGroupWhereInput>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  inBlock_eq?: InputMaybe<Scalars['Int']>
  inBlock_gt?: InputMaybe<Scalars['Int']>
  inBlock_gte?: InputMaybe<Scalars['Int']>
  inBlock_in?: InputMaybe<Array<Scalars['Int']>>
  inBlock_lt?: InputMaybe<Scalars['Int']>
  inBlock_lte?: InputMaybe<Scalars['Int']>
  inExtrinsic_contains?: InputMaybe<Scalars['String']>
  inExtrinsic_endsWith?: InputMaybe<Scalars['String']>
  inExtrinsic_eq?: InputMaybe<Scalars['String']>
  inExtrinsic_in?: InputMaybe<Array<Scalars['String']>>
  inExtrinsic_startsWith?: InputMaybe<Scalars['String']>
  indexInBlock_eq?: InputMaybe<Scalars['Int']>
  indexInBlock_gt?: InputMaybe<Scalars['Int']>
  indexInBlock_gte?: InputMaybe<Scalars['Int']>
  indexInBlock_in?: InputMaybe<Array<Scalars['Int']>>
  indexInBlock_lt?: InputMaybe<Scalars['Int']>
  indexInBlock_lte?: InputMaybe<Scalars['Int']>
  network_eq?: InputMaybe<Network>
  network_in?: InputMaybe<Array<Network>>
  penalty_eq?: InputMaybe<Scalars['BigInt']>
  penalty_gt?: InputMaybe<Scalars['BigInt']>
  penalty_gte?: InputMaybe<Scalars['BigInt']>
  penalty_in?: InputMaybe<Array<Scalars['BigInt']>>
  penalty_lt?: InputMaybe<Scalars['BigInt']>
  penalty_lte?: InputMaybe<Scalars['BigInt']>
  rationale_contains?: InputMaybe<Scalars['String']>
  rationale_endsWith?: InputMaybe<Scalars['String']>
  rationale_eq?: InputMaybe<Scalars['String']>
  rationale_in?: InputMaybe<Array<Scalars['String']>>
  rationale_startsWith?: InputMaybe<Scalars['String']>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
  worker?: InputMaybe<WorkerWhereInput>
}

export type TerminatedLeaderEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type TerminatedWorkerEvent = BaseGraphQlObject &
  Event & {
    __typename: 'TerminatedWorkerEvent'
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    group: WorkingGroup
    groupId: Scalars['String']
    id: Scalars['ID']
    /** Blocknumber of the block in which the event was emitted. */
    inBlock: Scalars['Int']
    /** Hash of the extrinsic which caused the event to be emitted */
    inExtrinsic?: Maybe<Scalars['String']>
    /** Index of event in block from which it was emitted. */
    indexInBlock: Scalars['Int']
    /** Network the block was produced in */
    network: Network
    /** Slash amount (if any) */
    penalty?: Maybe<Scalars['BigInt']>
    /** Optional rationale */
    rationale?: Maybe<Scalars['String']>
    /** Filtering options for interface implementers */
    type?: Maybe<EventTypeOptions>
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
    worker: Worker
    workerId: Scalars['String']
  }

export type TerminatedWorkerEventConnection = {
  __typename: 'TerminatedWorkerEventConnection'
  edges: Array<TerminatedWorkerEventEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type TerminatedWorkerEventCreateInput = {
  group: Scalars['ID']
  inBlock: Scalars['Float']
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock: Scalars['Float']
  network: Network
  penalty?: InputMaybe<Scalars['String']>
  rationale?: InputMaybe<Scalars['String']>
  worker: Scalars['ID']
}

export type TerminatedWorkerEventEdge = {
  __typename: 'TerminatedWorkerEventEdge'
  cursor: Scalars['String']
  node: TerminatedWorkerEvent
}

export enum TerminatedWorkerEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  GroupAsc = 'group_ASC',
  GroupDesc = 'group_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  PenaltyAsc = 'penalty_ASC',
  PenaltyDesc = 'penalty_DESC',
  RationaleAsc = 'rationale_ASC',
  RationaleDesc = 'rationale_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WorkerAsc = 'worker_ASC',
  WorkerDesc = 'worker_DESC',
}

export type TerminatedWorkerEventUpdateInput = {
  group?: InputMaybe<Scalars['ID']>
  inBlock?: InputMaybe<Scalars['Float']>
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock?: InputMaybe<Scalars['Float']>
  network?: InputMaybe<Network>
  penalty?: InputMaybe<Scalars['String']>
  rationale?: InputMaybe<Scalars['String']>
  worker?: InputMaybe<Scalars['ID']>
}

export type TerminatedWorkerEventWhereInput = {
  AND?: InputMaybe<Array<TerminatedWorkerEventWhereInput>>
  OR?: InputMaybe<Array<TerminatedWorkerEventWhereInput>>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  group?: InputMaybe<WorkingGroupWhereInput>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  inBlock_eq?: InputMaybe<Scalars['Int']>
  inBlock_gt?: InputMaybe<Scalars['Int']>
  inBlock_gte?: InputMaybe<Scalars['Int']>
  inBlock_in?: InputMaybe<Array<Scalars['Int']>>
  inBlock_lt?: InputMaybe<Scalars['Int']>
  inBlock_lte?: InputMaybe<Scalars['Int']>
  inExtrinsic_contains?: InputMaybe<Scalars['String']>
  inExtrinsic_endsWith?: InputMaybe<Scalars['String']>
  inExtrinsic_eq?: InputMaybe<Scalars['String']>
  inExtrinsic_in?: InputMaybe<Array<Scalars['String']>>
  inExtrinsic_startsWith?: InputMaybe<Scalars['String']>
  indexInBlock_eq?: InputMaybe<Scalars['Int']>
  indexInBlock_gt?: InputMaybe<Scalars['Int']>
  indexInBlock_gte?: InputMaybe<Scalars['Int']>
  indexInBlock_in?: InputMaybe<Array<Scalars['Int']>>
  indexInBlock_lt?: InputMaybe<Scalars['Int']>
  indexInBlock_lte?: InputMaybe<Scalars['Int']>
  network_eq?: InputMaybe<Network>
  network_in?: InputMaybe<Array<Network>>
  penalty_eq?: InputMaybe<Scalars['BigInt']>
  penalty_gt?: InputMaybe<Scalars['BigInt']>
  penalty_gte?: InputMaybe<Scalars['BigInt']>
  penalty_in?: InputMaybe<Array<Scalars['BigInt']>>
  penalty_lt?: InputMaybe<Scalars['BigInt']>
  penalty_lte?: InputMaybe<Scalars['BigInt']>
  rationale_contains?: InputMaybe<Scalars['String']>
  rationale_endsWith?: InputMaybe<Scalars['String']>
  rationale_eq?: InputMaybe<Scalars['String']>
  rationale_in?: InputMaybe<Array<Scalars['String']>>
  rationale_startsWith?: InputMaybe<Scalars['String']>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
  worker?: InputMaybe<WorkerWhereInput>
}

export type TerminatedWorkerEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type ThreadCreatedEvent = BaseGraphQlObject &
  Event & {
    __typename: 'ThreadCreatedEvent'
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    id: Scalars['ID']
    /** Blocknumber of the block in which the event was emitted. */
    inBlock: Scalars['Int']
    /** Hash of the extrinsic which caused the event to be emitted */
    inExtrinsic?: Maybe<Scalars['String']>
    /** Index of event in block from which it was emitted. */
    indexInBlock: Scalars['Int']
    /** Network the block was produced in */
    network: Network
    /** Thread's original text */
    text: Scalars['String']
    thread: ForumThread
    threadId: Scalars['String']
    /** Thread's original title */
    title: Scalars['String']
    /** Filtering options for interface implementers */
    type?: Maybe<EventTypeOptions>
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
  }

export type ThreadCreatedEventConnection = {
  __typename: 'ThreadCreatedEventConnection'
  edges: Array<ThreadCreatedEventEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type ThreadCreatedEventCreateInput = {
  inBlock: Scalars['Float']
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock: Scalars['Float']
  network: Network
  text: Scalars['String']
  thread: Scalars['ID']
  title: Scalars['String']
}

export type ThreadCreatedEventEdge = {
  __typename: 'ThreadCreatedEventEdge'
  cursor: Scalars['String']
  node: ThreadCreatedEvent
}

export enum ThreadCreatedEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  TextAsc = 'text_ASC',
  TextDesc = 'text_DESC',
  ThreadAsc = 'thread_ASC',
  ThreadDesc = 'thread_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type ThreadCreatedEventUpdateInput = {
  inBlock?: InputMaybe<Scalars['Float']>
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock?: InputMaybe<Scalars['Float']>
  network?: InputMaybe<Network>
  text?: InputMaybe<Scalars['String']>
  thread?: InputMaybe<Scalars['ID']>
  title?: InputMaybe<Scalars['String']>
}

export type ThreadCreatedEventWhereInput = {
  AND?: InputMaybe<Array<ThreadCreatedEventWhereInput>>
  OR?: InputMaybe<Array<ThreadCreatedEventWhereInput>>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  inBlock_eq?: InputMaybe<Scalars['Int']>
  inBlock_gt?: InputMaybe<Scalars['Int']>
  inBlock_gte?: InputMaybe<Scalars['Int']>
  inBlock_in?: InputMaybe<Array<Scalars['Int']>>
  inBlock_lt?: InputMaybe<Scalars['Int']>
  inBlock_lte?: InputMaybe<Scalars['Int']>
  inExtrinsic_contains?: InputMaybe<Scalars['String']>
  inExtrinsic_endsWith?: InputMaybe<Scalars['String']>
  inExtrinsic_eq?: InputMaybe<Scalars['String']>
  inExtrinsic_in?: InputMaybe<Array<Scalars['String']>>
  inExtrinsic_startsWith?: InputMaybe<Scalars['String']>
  indexInBlock_eq?: InputMaybe<Scalars['Int']>
  indexInBlock_gt?: InputMaybe<Scalars['Int']>
  indexInBlock_gte?: InputMaybe<Scalars['Int']>
  indexInBlock_in?: InputMaybe<Array<Scalars['Int']>>
  indexInBlock_lt?: InputMaybe<Scalars['Int']>
  indexInBlock_lte?: InputMaybe<Scalars['Int']>
  network_eq?: InputMaybe<Network>
  network_in?: InputMaybe<Array<Network>>
  text_contains?: InputMaybe<Scalars['String']>
  text_endsWith?: InputMaybe<Scalars['String']>
  text_eq?: InputMaybe<Scalars['String']>
  text_in?: InputMaybe<Array<Scalars['String']>>
  text_startsWith?: InputMaybe<Scalars['String']>
  thread?: InputMaybe<ForumThreadWhereInput>
  title_contains?: InputMaybe<Scalars['String']>
  title_endsWith?: InputMaybe<Scalars['String']>
  title_eq?: InputMaybe<Scalars['String']>
  title_in?: InputMaybe<Array<Scalars['String']>>
  title_startsWith?: InputMaybe<Scalars['String']>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
}

export type ThreadCreatedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type ThreadDeletedEvent = BaseGraphQlObject &
  Event & {
    __typename: 'ThreadDeletedEvent'
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    id: Scalars['ID']
    /** Blocknumber of the block in which the event was emitted. */
    inBlock: Scalars['Int']
    /** Hash of the extrinsic which caused the event to be emitted */
    inExtrinsic?: Maybe<Scalars['String']>
    /** Index of event in block from which it was emitted. */
    indexInBlock: Scalars['Int']
    /** Network the block was produced in */
    network: Network
    thread: ForumThread
    threadId: Scalars['String']
    /** Filtering options for interface implementers */
    type?: Maybe<EventTypeOptions>
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
  }

export type ThreadDeletedEventConnection = {
  __typename: 'ThreadDeletedEventConnection'
  edges: Array<ThreadDeletedEventEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type ThreadDeletedEventCreateInput = {
  inBlock: Scalars['Float']
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock: Scalars['Float']
  network: Network
  thread: Scalars['ID']
}

export type ThreadDeletedEventEdge = {
  __typename: 'ThreadDeletedEventEdge'
  cursor: Scalars['String']
  node: ThreadDeletedEvent
}

export enum ThreadDeletedEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  ThreadAsc = 'thread_ASC',
  ThreadDesc = 'thread_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type ThreadDeletedEventUpdateInput = {
  inBlock?: InputMaybe<Scalars['Float']>
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock?: InputMaybe<Scalars['Float']>
  network?: InputMaybe<Network>
  thread?: InputMaybe<Scalars['ID']>
}

export type ThreadDeletedEventWhereInput = {
  AND?: InputMaybe<Array<ThreadDeletedEventWhereInput>>
  OR?: InputMaybe<Array<ThreadDeletedEventWhereInput>>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  inBlock_eq?: InputMaybe<Scalars['Int']>
  inBlock_gt?: InputMaybe<Scalars['Int']>
  inBlock_gte?: InputMaybe<Scalars['Int']>
  inBlock_in?: InputMaybe<Array<Scalars['Int']>>
  inBlock_lt?: InputMaybe<Scalars['Int']>
  inBlock_lte?: InputMaybe<Scalars['Int']>
  inExtrinsic_contains?: InputMaybe<Scalars['String']>
  inExtrinsic_endsWith?: InputMaybe<Scalars['String']>
  inExtrinsic_eq?: InputMaybe<Scalars['String']>
  inExtrinsic_in?: InputMaybe<Array<Scalars['String']>>
  inExtrinsic_startsWith?: InputMaybe<Scalars['String']>
  indexInBlock_eq?: InputMaybe<Scalars['Int']>
  indexInBlock_gt?: InputMaybe<Scalars['Int']>
  indexInBlock_gte?: InputMaybe<Scalars['Int']>
  indexInBlock_in?: InputMaybe<Array<Scalars['Int']>>
  indexInBlock_lt?: InputMaybe<Scalars['Int']>
  indexInBlock_lte?: InputMaybe<Scalars['Int']>
  network_eq?: InputMaybe<Network>
  network_in?: InputMaybe<Array<Network>>
  thread?: InputMaybe<ForumThreadWhereInput>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
}

export type ThreadDeletedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type ThreadMetadataUpdatedEvent = BaseGraphQlObject &
  Event & {
    __typename: 'ThreadMetadataUpdatedEvent'
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    id: Scalars['ID']
    /** Blocknumber of the block in which the event was emitted. */
    inBlock: Scalars['Int']
    /** Hash of the extrinsic which caused the event to be emitted */
    inExtrinsic?: Maybe<Scalars['String']>
    /** Index of event in block from which it was emitted. */
    indexInBlock: Scalars['Int']
    /** Network the block was produced in */
    network: Network
    /** New title of the thread */
    newTitle?: Maybe<Scalars['String']>
    thread: ForumThread
    threadId: Scalars['String']
    /** Filtering options for interface implementers */
    type?: Maybe<EventTypeOptions>
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
  }

export type ThreadMetadataUpdatedEventConnection = {
  __typename: 'ThreadMetadataUpdatedEventConnection'
  edges: Array<ThreadMetadataUpdatedEventEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type ThreadMetadataUpdatedEventCreateInput = {
  inBlock: Scalars['Float']
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock: Scalars['Float']
  network: Network
  newTitle?: InputMaybe<Scalars['String']>
  thread: Scalars['ID']
}

export type ThreadMetadataUpdatedEventEdge = {
  __typename: 'ThreadMetadataUpdatedEventEdge'
  cursor: Scalars['String']
  node: ThreadMetadataUpdatedEvent
}

export enum ThreadMetadataUpdatedEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  NewTitleAsc = 'newTitle_ASC',
  NewTitleDesc = 'newTitle_DESC',
  ThreadAsc = 'thread_ASC',
  ThreadDesc = 'thread_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type ThreadMetadataUpdatedEventUpdateInput = {
  inBlock?: InputMaybe<Scalars['Float']>
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock?: InputMaybe<Scalars['Float']>
  network?: InputMaybe<Network>
  newTitle?: InputMaybe<Scalars['String']>
  thread?: InputMaybe<Scalars['ID']>
}

export type ThreadMetadataUpdatedEventWhereInput = {
  AND?: InputMaybe<Array<ThreadMetadataUpdatedEventWhereInput>>
  OR?: InputMaybe<Array<ThreadMetadataUpdatedEventWhereInput>>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  inBlock_eq?: InputMaybe<Scalars['Int']>
  inBlock_gt?: InputMaybe<Scalars['Int']>
  inBlock_gte?: InputMaybe<Scalars['Int']>
  inBlock_in?: InputMaybe<Array<Scalars['Int']>>
  inBlock_lt?: InputMaybe<Scalars['Int']>
  inBlock_lte?: InputMaybe<Scalars['Int']>
  inExtrinsic_contains?: InputMaybe<Scalars['String']>
  inExtrinsic_endsWith?: InputMaybe<Scalars['String']>
  inExtrinsic_eq?: InputMaybe<Scalars['String']>
  inExtrinsic_in?: InputMaybe<Array<Scalars['String']>>
  inExtrinsic_startsWith?: InputMaybe<Scalars['String']>
  indexInBlock_eq?: InputMaybe<Scalars['Int']>
  indexInBlock_gt?: InputMaybe<Scalars['Int']>
  indexInBlock_gte?: InputMaybe<Scalars['Int']>
  indexInBlock_in?: InputMaybe<Array<Scalars['Int']>>
  indexInBlock_lt?: InputMaybe<Scalars['Int']>
  indexInBlock_lte?: InputMaybe<Scalars['Int']>
  network_eq?: InputMaybe<Network>
  network_in?: InputMaybe<Array<Network>>
  newTitle_contains?: InputMaybe<Scalars['String']>
  newTitle_endsWith?: InputMaybe<Scalars['String']>
  newTitle_eq?: InputMaybe<Scalars['String']>
  newTitle_in?: InputMaybe<Array<Scalars['String']>>
  newTitle_startsWith?: InputMaybe<Scalars['String']>
  thread?: InputMaybe<ForumThreadWhereInput>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
}

export type ThreadMetadataUpdatedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type ThreadModeratedEvent = BaseGraphQlObject &
  Event & {
    __typename: 'ThreadModeratedEvent'
    actor: Worker
    actorId: Scalars['String']
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    id: Scalars['ID']
    /** Blocknumber of the block in which the event was emitted. */
    inBlock: Scalars['Int']
    /** Hash of the extrinsic which caused the event to be emitted */
    inExtrinsic?: Maybe<Scalars['String']>
    /** Index of event in block from which it was emitted. */
    indexInBlock: Scalars['Int']
    /** Network the block was produced in */
    network: Network
    /** Rationale behind the moderation */
    rationale: Scalars['String']
    thread: ForumThread
    threadId: Scalars['String']
    /** Filtering options for interface implementers */
    type?: Maybe<EventTypeOptions>
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
  }

export type ThreadModeratedEventConnection = {
  __typename: 'ThreadModeratedEventConnection'
  edges: Array<ThreadModeratedEventEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type ThreadModeratedEventCreateInput = {
  actor: Scalars['ID']
  inBlock: Scalars['Float']
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock: Scalars['Float']
  network: Network
  rationale: Scalars['String']
  thread: Scalars['ID']
}

export type ThreadModeratedEventEdge = {
  __typename: 'ThreadModeratedEventEdge'
  cursor: Scalars['String']
  node: ThreadModeratedEvent
}

export enum ThreadModeratedEventOrderByInput {
  ActorAsc = 'actor_ASC',
  ActorDesc = 'actor_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  RationaleAsc = 'rationale_ASC',
  RationaleDesc = 'rationale_DESC',
  ThreadAsc = 'thread_ASC',
  ThreadDesc = 'thread_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type ThreadModeratedEventUpdateInput = {
  actor?: InputMaybe<Scalars['ID']>
  inBlock?: InputMaybe<Scalars['Float']>
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock?: InputMaybe<Scalars['Float']>
  network?: InputMaybe<Network>
  rationale?: InputMaybe<Scalars['String']>
  thread?: InputMaybe<Scalars['ID']>
}

export type ThreadModeratedEventWhereInput = {
  AND?: InputMaybe<Array<ThreadModeratedEventWhereInput>>
  OR?: InputMaybe<Array<ThreadModeratedEventWhereInput>>
  actor?: InputMaybe<WorkerWhereInput>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  inBlock_eq?: InputMaybe<Scalars['Int']>
  inBlock_gt?: InputMaybe<Scalars['Int']>
  inBlock_gte?: InputMaybe<Scalars['Int']>
  inBlock_in?: InputMaybe<Array<Scalars['Int']>>
  inBlock_lt?: InputMaybe<Scalars['Int']>
  inBlock_lte?: InputMaybe<Scalars['Int']>
  inExtrinsic_contains?: InputMaybe<Scalars['String']>
  inExtrinsic_endsWith?: InputMaybe<Scalars['String']>
  inExtrinsic_eq?: InputMaybe<Scalars['String']>
  inExtrinsic_in?: InputMaybe<Array<Scalars['String']>>
  inExtrinsic_startsWith?: InputMaybe<Scalars['String']>
  indexInBlock_eq?: InputMaybe<Scalars['Int']>
  indexInBlock_gt?: InputMaybe<Scalars['Int']>
  indexInBlock_gte?: InputMaybe<Scalars['Int']>
  indexInBlock_in?: InputMaybe<Array<Scalars['Int']>>
  indexInBlock_lt?: InputMaybe<Scalars['Int']>
  indexInBlock_lte?: InputMaybe<Scalars['Int']>
  network_eq?: InputMaybe<Network>
  network_in?: InputMaybe<Array<Network>>
  rationale_contains?: InputMaybe<Scalars['String']>
  rationale_endsWith?: InputMaybe<Scalars['String']>
  rationale_eq?: InputMaybe<Scalars['String']>
  rationale_in?: InputMaybe<Array<Scalars['String']>>
  rationale_startsWith?: InputMaybe<Scalars['String']>
  thread?: InputMaybe<ForumThreadWhereInput>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
}

export type ThreadModeratedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type ThreadMovedEvent = BaseGraphQlObject &
  Event & {
    __typename: 'ThreadMovedEvent'
    actor: Worker
    actorId: Scalars['String']
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    id: Scalars['ID']
    /** Blocknumber of the block in which the event was emitted. */
    inBlock: Scalars['Int']
    /** Hash of the extrinsic which caused the event to be emitted */
    inExtrinsic?: Maybe<Scalars['String']>
    /** Index of event in block from which it was emitted. */
    indexInBlock: Scalars['Int']
    /** Network the block was produced in */
    network: Network
    newCategory: ForumCategory
    newCategoryId: Scalars['String']
    oldCategory: ForumCategory
    oldCategoryId: Scalars['String']
    thread: ForumThread
    threadId: Scalars['String']
    /** Filtering options for interface implementers */
    type?: Maybe<EventTypeOptions>
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
  }

export type ThreadMovedEventConnection = {
  __typename: 'ThreadMovedEventConnection'
  edges: Array<ThreadMovedEventEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type ThreadMovedEventCreateInput = {
  actor: Scalars['ID']
  inBlock: Scalars['Float']
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock: Scalars['Float']
  network: Network
  newCategory: Scalars['ID']
  oldCategory: Scalars['ID']
  thread: Scalars['ID']
}

export type ThreadMovedEventEdge = {
  __typename: 'ThreadMovedEventEdge'
  cursor: Scalars['String']
  node: ThreadMovedEvent
}

export enum ThreadMovedEventOrderByInput {
  ActorAsc = 'actor_ASC',
  ActorDesc = 'actor_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  NewCategoryAsc = 'newCategory_ASC',
  NewCategoryDesc = 'newCategory_DESC',
  OldCategoryAsc = 'oldCategory_ASC',
  OldCategoryDesc = 'oldCategory_DESC',
  ThreadAsc = 'thread_ASC',
  ThreadDesc = 'thread_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type ThreadMovedEventUpdateInput = {
  actor?: InputMaybe<Scalars['ID']>
  inBlock?: InputMaybe<Scalars['Float']>
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock?: InputMaybe<Scalars['Float']>
  network?: InputMaybe<Network>
  newCategory?: InputMaybe<Scalars['ID']>
  oldCategory?: InputMaybe<Scalars['ID']>
  thread?: InputMaybe<Scalars['ID']>
}

export type ThreadMovedEventWhereInput = {
  AND?: InputMaybe<Array<ThreadMovedEventWhereInput>>
  OR?: InputMaybe<Array<ThreadMovedEventWhereInput>>
  actor?: InputMaybe<WorkerWhereInput>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  inBlock_eq?: InputMaybe<Scalars['Int']>
  inBlock_gt?: InputMaybe<Scalars['Int']>
  inBlock_gte?: InputMaybe<Scalars['Int']>
  inBlock_in?: InputMaybe<Array<Scalars['Int']>>
  inBlock_lt?: InputMaybe<Scalars['Int']>
  inBlock_lte?: InputMaybe<Scalars['Int']>
  inExtrinsic_contains?: InputMaybe<Scalars['String']>
  inExtrinsic_endsWith?: InputMaybe<Scalars['String']>
  inExtrinsic_eq?: InputMaybe<Scalars['String']>
  inExtrinsic_in?: InputMaybe<Array<Scalars['String']>>
  inExtrinsic_startsWith?: InputMaybe<Scalars['String']>
  indexInBlock_eq?: InputMaybe<Scalars['Int']>
  indexInBlock_gt?: InputMaybe<Scalars['Int']>
  indexInBlock_gte?: InputMaybe<Scalars['Int']>
  indexInBlock_in?: InputMaybe<Array<Scalars['Int']>>
  indexInBlock_lt?: InputMaybe<Scalars['Int']>
  indexInBlock_lte?: InputMaybe<Scalars['Int']>
  network_eq?: InputMaybe<Network>
  network_in?: InputMaybe<Array<Network>>
  newCategory?: InputMaybe<ForumCategoryWhereInput>
  oldCategory?: InputMaybe<ForumCategoryWhereInput>
  thread?: InputMaybe<ForumThreadWhereInput>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
}

export type ThreadMovedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type ThreadStatus = ThreadStatusActive | ThreadStatusLocked | ThreadStatusModerated | ThreadStatusRemoved

export type ThreadStatusActive = {
  __typename: 'ThreadStatusActive'
  phantom?: Maybe<Scalars['Int']>
}

export type ThreadStatusLocked = {
  __typename: 'ThreadStatusLocked'
  /** Event the thread was deleted (locked) in */
  threadDeletedEvent?: Maybe<ThreadDeletedEvent>
}

export type ThreadStatusModerated = {
  __typename: 'ThreadStatusModerated'
  /** Event the thread was moderated in */
  threadModeratedEvent?: Maybe<ThreadModeratedEvent>
}

export type ThreadStatusRemoved = {
  __typename: 'ThreadStatusRemoved'
  /** Event the thread was removed in */
  threadDeletedEvent?: Maybe<ThreadDeletedEvent>
}

export type ThreadsByTitleFtsOutput = {
  __typename: 'ThreadsByTitleFTSOutput'
  highlight: Scalars['String']
  isTypeOf: Scalars['String']
  item: ThreadsByTitleSearchResult
  rank: Scalars['Float']
}

export type ThreadsByTitleSearchResult = ForumThread

export type UnlockBlogPostProposalDetails = {
  __typename: 'UnlockBlogPostProposalDetails'
  /** The blog post that should be unlocked */
  blogPost: Scalars['String']
}

export type UpcomingOpeningAdded = {
  __typename: 'UpcomingOpeningAdded'
  upcomingOpeningId: Scalars['String']
}

export type UpcomingOpeningRemoved = {
  __typename: 'UpcomingOpeningRemoved'
  upcomingOpeningId: Scalars['String']
}

export type UpcomingWorkingGroupOpening = BaseGraphQlObject & {
  __typename: 'UpcomingWorkingGroupOpening'
  createdAt: Scalars['DateTime']
  createdById: Scalars['String']
  createdInEvent: StatusTextChangedEvent
  createdInEventId: Scalars['String']
  deletedAt?: Maybe<Scalars['DateTime']>
  deletedById?: Maybe<Scalars['String']>
  /** Expected opening start time */
  expectedStart?: Maybe<Scalars['DateTime']>
  group: WorkingGroup
  groupId: Scalars['String']
  id: Scalars['ID']
  metadata: WorkingGroupOpeningMetadata
  metadataId: Scalars['String']
  /** Expected reward per block */
  rewardPerBlock?: Maybe<Scalars['BigInt']>
  /** Expected min. application/role stake amount */
  stakeAmount?: Maybe<Scalars['BigInt']>
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedById?: Maybe<Scalars['String']>
  version: Scalars['Int']
}

export type UpcomingWorkingGroupOpeningConnection = {
  __typename: 'UpcomingWorkingGroupOpeningConnection'
  edges: Array<UpcomingWorkingGroupOpeningEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type UpcomingWorkingGroupOpeningCreateInput = {
  createdInEvent: Scalars['ID']
  expectedStart?: InputMaybe<Scalars['DateTime']>
  group: Scalars['ID']
  metadata: Scalars['ID']
  rewardPerBlock?: InputMaybe<Scalars['String']>
  stakeAmount?: InputMaybe<Scalars['String']>
}

export type UpcomingWorkingGroupOpeningEdge = {
  __typename: 'UpcomingWorkingGroupOpeningEdge'
  cursor: Scalars['String']
  node: UpcomingWorkingGroupOpening
}

export enum UpcomingWorkingGroupOpeningOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  CreatedInEventAsc = 'createdInEvent_ASC',
  CreatedInEventDesc = 'createdInEvent_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  ExpectedStartAsc = 'expectedStart_ASC',
  ExpectedStartDesc = 'expectedStart_DESC',
  GroupAsc = 'group_ASC',
  GroupDesc = 'group_DESC',
  MetadataAsc = 'metadata_ASC',
  MetadataDesc = 'metadata_DESC',
  RewardPerBlockAsc = 'rewardPerBlock_ASC',
  RewardPerBlockDesc = 'rewardPerBlock_DESC',
  StakeAmountAsc = 'stakeAmount_ASC',
  StakeAmountDesc = 'stakeAmount_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type UpcomingWorkingGroupOpeningUpdateInput = {
  createdInEvent?: InputMaybe<Scalars['ID']>
  expectedStart?: InputMaybe<Scalars['DateTime']>
  group?: InputMaybe<Scalars['ID']>
  metadata?: InputMaybe<Scalars['ID']>
  rewardPerBlock?: InputMaybe<Scalars['String']>
  stakeAmount?: InputMaybe<Scalars['String']>
}

export type UpcomingWorkingGroupOpeningWhereInput = {
  AND?: InputMaybe<Array<UpcomingWorkingGroupOpeningWhereInput>>
  OR?: InputMaybe<Array<UpcomingWorkingGroupOpeningWhereInput>>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  createdInEvent?: InputMaybe<StatusTextChangedEventWhereInput>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  expectedStart_eq?: InputMaybe<Scalars['DateTime']>
  expectedStart_gt?: InputMaybe<Scalars['DateTime']>
  expectedStart_gte?: InputMaybe<Scalars['DateTime']>
  expectedStart_lt?: InputMaybe<Scalars['DateTime']>
  expectedStart_lte?: InputMaybe<Scalars['DateTime']>
  group?: InputMaybe<WorkingGroupWhereInput>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  metadata?: InputMaybe<WorkingGroupOpeningMetadataWhereInput>
  rewardPerBlock_eq?: InputMaybe<Scalars['BigInt']>
  rewardPerBlock_gt?: InputMaybe<Scalars['BigInt']>
  rewardPerBlock_gte?: InputMaybe<Scalars['BigInt']>
  rewardPerBlock_in?: InputMaybe<Array<Scalars['BigInt']>>
  rewardPerBlock_lt?: InputMaybe<Scalars['BigInt']>
  rewardPerBlock_lte?: InputMaybe<Scalars['BigInt']>
  stakeAmount_eq?: InputMaybe<Scalars['BigInt']>
  stakeAmount_gt?: InputMaybe<Scalars['BigInt']>
  stakeAmount_gte?: InputMaybe<Scalars['BigInt']>
  stakeAmount_in?: InputMaybe<Array<Scalars['BigInt']>>
  stakeAmount_lt?: InputMaybe<Scalars['BigInt']>
  stakeAmount_lte?: InputMaybe<Scalars['BigInt']>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
}

export type UpcomingWorkingGroupOpeningWhereUniqueInput = {
  id: Scalars['ID']
}

export type UpdateWorkingGroupBudgetProposalDetails = {
  __typename: 'UpdateWorkingGroupBudgetProposalDetails'
  /** Amount to increase / decrease the working group budget by (will be decudted from / appended to council budget accordingly) */
  amount: Scalars['Float']
  /** Related working group */
  group?: Maybe<WorkingGroup>
}

export type VariantNone = {
  __typename: 'VariantNone'
  phantom?: Maybe<Scalars['Int']>
}

export type VetoProposalDetails = {
  __typename: 'VetoProposalDetails'
  /** Proposal to be vetoed */
  proposal?: Maybe<Proposal>
}

export type Video = BaseGraphQlObject & {
  __typename: 'Video'
  category?: Maybe<VideoCategory>
  categoryId?: Maybe<Scalars['String']>
  channel: Channel
  channelId: Scalars['String']
  createdAt: Scalars['DateTime']
  createdById: Scalars['String']
  createdInBlock: Scalars['Int']
  deletedAt?: Maybe<Scalars['DateTime']>
  deletedById?: Maybe<Scalars['String']>
  /** The description of the Video */
  description?: Maybe<Scalars['String']>
  /** Video duration in seconds */
  duration?: Maybe<Scalars['Int']>
  /** Whether or not Video contains marketing */
  hasMarketing?: Maybe<Scalars['Boolean']>
  id: Scalars['ID']
  /** Flag signaling whether a video is censored. */
  isCensored: Scalars['Boolean']
  /** Whether the Video contains explicit material. */
  isExplicit?: Maybe<Scalars['Boolean']>
  /** Is video featured or not */
  isFeatured: Scalars['Boolean']
  /** Whether the Video is supposed to be publically displayed */
  isPublic?: Maybe<Scalars['Boolean']>
  language?: Maybe<Language>
  languageId?: Maybe<Scalars['String']>
  license?: Maybe<License>
  licenseId?: Maybe<Scalars['String']>
  /** Video media asset */
  media?: Maybe<Asset>
  mediaMetadata?: Maybe<VideoMediaMetadata>
  mediaMetadataId?: Maybe<Scalars['String']>
  /** If the Video was published on other platform before beeing published on Joystream - the original publication date */
  publishedBeforeJoystream?: Maybe<Scalars['DateTime']>
  /** Video thumbnail asset (recommended ratio: 16:9) */
  thumbnailPhoto?: Maybe<Asset>
  /** The title of the video */
  title?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedById?: Maybe<Scalars['String']>
  version: Scalars['Int']
}

export type VideoCategoriesByNameFtsOutput = {
  __typename: 'VideoCategoriesByNameFTSOutput'
  highlight: Scalars['String']
  isTypeOf: Scalars['String']
  item: VideoCategoriesByNameSearchResult
  rank: Scalars['Float']
}

export type VideoCategoriesByNameSearchResult = VideoCategory

export type VideoCategory = BaseGraphQlObject & {
  __typename: 'VideoCategory'
  createdAt: Scalars['DateTime']
  createdById: Scalars['String']
  createdInBlock: Scalars['Int']
  deletedAt?: Maybe<Scalars['DateTime']>
  deletedById?: Maybe<Scalars['String']>
  id: Scalars['ID']
  /** The name of the category */
  name?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedById?: Maybe<Scalars['String']>
  version: Scalars['Int']
  videos: Array<Video>
}

export type VideoCategoryConnection = {
  __typename: 'VideoCategoryConnection'
  edges: Array<VideoCategoryEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type VideoCategoryCreateInput = {
  createdInBlock: Scalars['Float']
  name?: InputMaybe<Scalars['String']>
}

export type VideoCategoryEdge = {
  __typename: 'VideoCategoryEdge'
  cursor: Scalars['String']
  node: VideoCategory
}

export enum VideoCategoryOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  CreatedInBlockAsc = 'createdInBlock_ASC',
  CreatedInBlockDesc = 'createdInBlock_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type VideoCategoryUpdateInput = {
  createdInBlock?: InputMaybe<Scalars['Float']>
  name?: InputMaybe<Scalars['String']>
}

export type VideoCategoryWhereInput = {
  AND?: InputMaybe<Array<VideoCategoryWhereInput>>
  OR?: InputMaybe<Array<VideoCategoryWhereInput>>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  createdInBlock_eq?: InputMaybe<Scalars['Int']>
  createdInBlock_gt?: InputMaybe<Scalars['Int']>
  createdInBlock_gte?: InputMaybe<Scalars['Int']>
  createdInBlock_in?: InputMaybe<Array<Scalars['Int']>>
  createdInBlock_lt?: InputMaybe<Scalars['Int']>
  createdInBlock_lte?: InputMaybe<Scalars['Int']>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  name_contains?: InputMaybe<Scalars['String']>
  name_endsWith?: InputMaybe<Scalars['String']>
  name_eq?: InputMaybe<Scalars['String']>
  name_in?: InputMaybe<Array<Scalars['String']>>
  name_startsWith?: InputMaybe<Scalars['String']>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
  videos_every?: InputMaybe<VideoWhereInput>
  videos_none?: InputMaybe<VideoWhereInput>
  videos_some?: InputMaybe<VideoWhereInput>
}

export type VideoCategoryWhereUniqueInput = {
  id: Scalars['ID']
}

export type VideoConnection = {
  __typename: 'VideoConnection'
  edges: Array<VideoEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type VideoCreateInput = {
  category?: InputMaybe<Scalars['ID']>
  channel: Scalars['ID']
  createdInBlock: Scalars['Float']
  description?: InputMaybe<Scalars['String']>
  duration?: InputMaybe<Scalars['Float']>
  hasMarketing?: InputMaybe<Scalars['Boolean']>
  isCensored: Scalars['Boolean']
  isExplicit?: InputMaybe<Scalars['Boolean']>
  isFeatured: Scalars['Boolean']
  isPublic?: InputMaybe<Scalars['Boolean']>
  language?: InputMaybe<Scalars['ID']>
  license?: InputMaybe<Scalars['ID']>
  media: Scalars['JSONObject']
  mediaMetadata?: InputMaybe<Scalars['ID']>
  publishedBeforeJoystream?: InputMaybe<Scalars['DateTime']>
  thumbnailPhoto: Scalars['JSONObject']
  title?: InputMaybe<Scalars['String']>
}

export type VideoEdge = {
  __typename: 'VideoEdge'
  cursor: Scalars['String']
  node: Video
}

export type VideoMediaEncoding = BaseGraphQlObject & {
  __typename: 'VideoMediaEncoding'
  /** Encoding of the video media object */
  codecName?: Maybe<Scalars['String']>
  /** Media container format */
  container?: Maybe<Scalars['String']>
  createdAt: Scalars['DateTime']
  createdById: Scalars['String']
  deletedAt?: Maybe<Scalars['DateTime']>
  deletedById?: Maybe<Scalars['String']>
  id: Scalars['ID']
  /** Content MIME type */
  mimeMediaType?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedById?: Maybe<Scalars['String']>
  version: Scalars['Int']
  videomediametadataencoding?: Maybe<Array<VideoMediaMetadata>>
}

export type VideoMediaEncodingConnection = {
  __typename: 'VideoMediaEncodingConnection'
  edges: Array<VideoMediaEncodingEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type VideoMediaEncodingCreateInput = {
  codecName?: InputMaybe<Scalars['String']>
  container?: InputMaybe<Scalars['String']>
  mimeMediaType?: InputMaybe<Scalars['String']>
}

export type VideoMediaEncodingEdge = {
  __typename: 'VideoMediaEncodingEdge'
  cursor: Scalars['String']
  node: VideoMediaEncoding
}

export enum VideoMediaEncodingOrderByInput {
  CodecNameAsc = 'codecName_ASC',
  CodecNameDesc = 'codecName_DESC',
  ContainerAsc = 'container_ASC',
  ContainerDesc = 'container_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  MimeMediaTypeAsc = 'mimeMediaType_ASC',
  MimeMediaTypeDesc = 'mimeMediaType_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type VideoMediaEncodingUpdateInput = {
  codecName?: InputMaybe<Scalars['String']>
  container?: InputMaybe<Scalars['String']>
  mimeMediaType?: InputMaybe<Scalars['String']>
}

export type VideoMediaEncodingWhereInput = {
  AND?: InputMaybe<Array<VideoMediaEncodingWhereInput>>
  OR?: InputMaybe<Array<VideoMediaEncodingWhereInput>>
  codecName_contains?: InputMaybe<Scalars['String']>
  codecName_endsWith?: InputMaybe<Scalars['String']>
  codecName_eq?: InputMaybe<Scalars['String']>
  codecName_in?: InputMaybe<Array<Scalars['String']>>
  codecName_startsWith?: InputMaybe<Scalars['String']>
  container_contains?: InputMaybe<Scalars['String']>
  container_endsWith?: InputMaybe<Scalars['String']>
  container_eq?: InputMaybe<Scalars['String']>
  container_in?: InputMaybe<Array<Scalars['String']>>
  container_startsWith?: InputMaybe<Scalars['String']>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  mimeMediaType_contains?: InputMaybe<Scalars['String']>
  mimeMediaType_endsWith?: InputMaybe<Scalars['String']>
  mimeMediaType_eq?: InputMaybe<Scalars['String']>
  mimeMediaType_in?: InputMaybe<Array<Scalars['String']>>
  mimeMediaType_startsWith?: InputMaybe<Scalars['String']>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
  videomediametadataencoding_every?: InputMaybe<VideoMediaMetadataWhereInput>
  videomediametadataencoding_none?: InputMaybe<VideoMediaMetadataWhereInput>
  videomediametadataencoding_some?: InputMaybe<VideoMediaMetadataWhereInput>
}

export type VideoMediaEncodingWhereUniqueInput = {
  id: Scalars['ID']
}

export type VideoMediaMetadata = BaseGraphQlObject & {
  __typename: 'VideoMediaMetadata'
  createdAt: Scalars['DateTime']
  createdById: Scalars['String']
  createdInBlock: Scalars['Int']
  deletedAt?: Maybe<Scalars['DateTime']>
  deletedById?: Maybe<Scalars['String']>
  encoding?: Maybe<VideoMediaEncoding>
  encodingId?: Maybe<Scalars['String']>
  id: Scalars['ID']
  /** Video media height in pixels */
  pixelHeight?: Maybe<Scalars['Int']>
  /** Video media width in pixels */
  pixelWidth?: Maybe<Scalars['Int']>
  /** Video media size in bytes */
  size?: Maybe<Scalars['BigInt']>
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedById?: Maybe<Scalars['String']>
  version: Scalars['Int']
  video?: Maybe<Video>
}

export type VideoMediaMetadataConnection = {
  __typename: 'VideoMediaMetadataConnection'
  edges: Array<VideoMediaMetadataEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type VideoMediaMetadataCreateInput = {
  createdInBlock: Scalars['Float']
  encoding?: InputMaybe<Scalars['ID']>
  pixelHeight?: InputMaybe<Scalars['Float']>
  pixelWidth?: InputMaybe<Scalars['Float']>
  size?: InputMaybe<Scalars['String']>
}

export type VideoMediaMetadataEdge = {
  __typename: 'VideoMediaMetadataEdge'
  cursor: Scalars['String']
  node: VideoMediaMetadata
}

export enum VideoMediaMetadataOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  CreatedInBlockAsc = 'createdInBlock_ASC',
  CreatedInBlockDesc = 'createdInBlock_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  EncodingAsc = 'encoding_ASC',
  EncodingDesc = 'encoding_DESC',
  PixelHeightAsc = 'pixelHeight_ASC',
  PixelHeightDesc = 'pixelHeight_DESC',
  PixelWidthAsc = 'pixelWidth_ASC',
  PixelWidthDesc = 'pixelWidth_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type VideoMediaMetadataUpdateInput = {
  createdInBlock?: InputMaybe<Scalars['Float']>
  encoding?: InputMaybe<Scalars['ID']>
  pixelHeight?: InputMaybe<Scalars['Float']>
  pixelWidth?: InputMaybe<Scalars['Float']>
  size?: InputMaybe<Scalars['String']>
}

export type VideoMediaMetadataWhereInput = {
  AND?: InputMaybe<Array<VideoMediaMetadataWhereInput>>
  OR?: InputMaybe<Array<VideoMediaMetadataWhereInput>>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  createdInBlock_eq?: InputMaybe<Scalars['Int']>
  createdInBlock_gt?: InputMaybe<Scalars['Int']>
  createdInBlock_gte?: InputMaybe<Scalars['Int']>
  createdInBlock_in?: InputMaybe<Array<Scalars['Int']>>
  createdInBlock_lt?: InputMaybe<Scalars['Int']>
  createdInBlock_lte?: InputMaybe<Scalars['Int']>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  encoding?: InputMaybe<VideoMediaEncodingWhereInput>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  pixelHeight_eq?: InputMaybe<Scalars['Int']>
  pixelHeight_gt?: InputMaybe<Scalars['Int']>
  pixelHeight_gte?: InputMaybe<Scalars['Int']>
  pixelHeight_in?: InputMaybe<Array<Scalars['Int']>>
  pixelHeight_lt?: InputMaybe<Scalars['Int']>
  pixelHeight_lte?: InputMaybe<Scalars['Int']>
  pixelWidth_eq?: InputMaybe<Scalars['Int']>
  pixelWidth_gt?: InputMaybe<Scalars['Int']>
  pixelWidth_gte?: InputMaybe<Scalars['Int']>
  pixelWidth_in?: InputMaybe<Array<Scalars['Int']>>
  pixelWidth_lt?: InputMaybe<Scalars['Int']>
  pixelWidth_lte?: InputMaybe<Scalars['Int']>
  size_eq?: InputMaybe<Scalars['BigInt']>
  size_gt?: InputMaybe<Scalars['BigInt']>
  size_gte?: InputMaybe<Scalars['BigInt']>
  size_in?: InputMaybe<Array<Scalars['BigInt']>>
  size_lt?: InputMaybe<Scalars['BigInt']>
  size_lte?: InputMaybe<Scalars['BigInt']>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
  video?: InputMaybe<VideoWhereInput>
}

export type VideoMediaMetadataWhereUniqueInput = {
  id: Scalars['ID']
}

export enum VideoOrderByInput {
  CategoryAsc = 'category_ASC',
  CategoryDesc = 'category_DESC',
  ChannelAsc = 'channel_ASC',
  ChannelDesc = 'channel_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  CreatedInBlockAsc = 'createdInBlock_ASC',
  CreatedInBlockDesc = 'createdInBlock_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  DurationAsc = 'duration_ASC',
  DurationDesc = 'duration_DESC',
  HasMarketingAsc = 'hasMarketing_ASC',
  HasMarketingDesc = 'hasMarketing_DESC',
  IsCensoredAsc = 'isCensored_ASC',
  IsCensoredDesc = 'isCensored_DESC',
  IsExplicitAsc = 'isExplicit_ASC',
  IsExplicitDesc = 'isExplicit_DESC',
  IsFeaturedAsc = 'isFeatured_ASC',
  IsFeaturedDesc = 'isFeatured_DESC',
  IsPublicAsc = 'isPublic_ASC',
  IsPublicDesc = 'isPublic_DESC',
  LanguageAsc = 'language_ASC',
  LanguageDesc = 'language_DESC',
  LicenseAsc = 'license_ASC',
  LicenseDesc = 'license_DESC',
  MediaMetadataAsc = 'mediaMetadata_ASC',
  MediaMetadataDesc = 'mediaMetadata_DESC',
  PublishedBeforeJoystreamAsc = 'publishedBeforeJoystream_ASC',
  PublishedBeforeJoystreamDesc = 'publishedBeforeJoystream_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type VideoUpdateInput = {
  category?: InputMaybe<Scalars['ID']>
  channel?: InputMaybe<Scalars['ID']>
  createdInBlock?: InputMaybe<Scalars['Float']>
  description?: InputMaybe<Scalars['String']>
  duration?: InputMaybe<Scalars['Float']>
  hasMarketing?: InputMaybe<Scalars['Boolean']>
  isCensored?: InputMaybe<Scalars['Boolean']>
  isExplicit?: InputMaybe<Scalars['Boolean']>
  isFeatured?: InputMaybe<Scalars['Boolean']>
  isPublic?: InputMaybe<Scalars['Boolean']>
  language?: InputMaybe<Scalars['ID']>
  license?: InputMaybe<Scalars['ID']>
  media?: InputMaybe<Scalars['JSONObject']>
  mediaMetadata?: InputMaybe<Scalars['ID']>
  publishedBeforeJoystream?: InputMaybe<Scalars['DateTime']>
  thumbnailPhoto?: InputMaybe<Scalars['JSONObject']>
  title?: InputMaybe<Scalars['String']>
}

export type VideoWhereInput = {
  AND?: InputMaybe<Array<VideoWhereInput>>
  OR?: InputMaybe<Array<VideoWhereInput>>
  category?: InputMaybe<VideoCategoryWhereInput>
  channel?: InputMaybe<ChannelWhereInput>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  createdInBlock_eq?: InputMaybe<Scalars['Int']>
  createdInBlock_gt?: InputMaybe<Scalars['Int']>
  createdInBlock_gte?: InputMaybe<Scalars['Int']>
  createdInBlock_in?: InputMaybe<Array<Scalars['Int']>>
  createdInBlock_lt?: InputMaybe<Scalars['Int']>
  createdInBlock_lte?: InputMaybe<Scalars['Int']>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  description_contains?: InputMaybe<Scalars['String']>
  description_endsWith?: InputMaybe<Scalars['String']>
  description_eq?: InputMaybe<Scalars['String']>
  description_in?: InputMaybe<Array<Scalars['String']>>
  description_startsWith?: InputMaybe<Scalars['String']>
  duration_eq?: InputMaybe<Scalars['Int']>
  duration_gt?: InputMaybe<Scalars['Int']>
  duration_gte?: InputMaybe<Scalars['Int']>
  duration_in?: InputMaybe<Array<Scalars['Int']>>
  duration_lt?: InputMaybe<Scalars['Int']>
  duration_lte?: InputMaybe<Scalars['Int']>
  hasMarketing_eq?: InputMaybe<Scalars['Boolean']>
  hasMarketing_in?: InputMaybe<Array<Scalars['Boolean']>>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  isCensored_eq?: InputMaybe<Scalars['Boolean']>
  isCensored_in?: InputMaybe<Array<Scalars['Boolean']>>
  isExplicit_eq?: InputMaybe<Scalars['Boolean']>
  isExplicit_in?: InputMaybe<Array<Scalars['Boolean']>>
  isFeatured_eq?: InputMaybe<Scalars['Boolean']>
  isFeatured_in?: InputMaybe<Array<Scalars['Boolean']>>
  isPublic_eq?: InputMaybe<Scalars['Boolean']>
  isPublic_in?: InputMaybe<Array<Scalars['Boolean']>>
  language?: InputMaybe<LanguageWhereInput>
  license?: InputMaybe<LicenseWhereInput>
  mediaMetadata?: InputMaybe<VideoMediaMetadataWhereInput>
  media_json?: InputMaybe<Scalars['JSONObject']>
  publishedBeforeJoystream_eq?: InputMaybe<Scalars['DateTime']>
  publishedBeforeJoystream_gt?: InputMaybe<Scalars['DateTime']>
  publishedBeforeJoystream_gte?: InputMaybe<Scalars['DateTime']>
  publishedBeforeJoystream_lt?: InputMaybe<Scalars['DateTime']>
  publishedBeforeJoystream_lte?: InputMaybe<Scalars['DateTime']>
  thumbnailPhoto_json?: InputMaybe<Scalars['JSONObject']>
  title_contains?: InputMaybe<Scalars['String']>
  title_endsWith?: InputMaybe<Scalars['String']>
  title_eq?: InputMaybe<Scalars['String']>
  title_in?: InputMaybe<Array<Scalars['String']>>
  title_startsWith?: InputMaybe<Scalars['String']>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
}

export type VideoWhereUniqueInput = {
  id: Scalars['ID']
}

export type VoteCastEvent = BaseGraphQlObject &
  Event & {
    __typename: 'VoteCastEvent'
    castVote: CastVote
    castVoteId: Scalars['String']
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    id: Scalars['ID']
    /** Blocknumber of the block in which the event was emitted. */
    inBlock: Scalars['Int']
    /** Hash of the extrinsic which caused the event to be emitted */
    inExtrinsic?: Maybe<Scalars['String']>
    /** Index of event in block from which it was emitted. */
    indexInBlock: Scalars['Int']
    /** Network the block was produced in */
    network: Network
    /** Filtering options for interface implementers */
    type?: Maybe<EventTypeOptions>
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
  }

export type VoteCastEventConnection = {
  __typename: 'VoteCastEventConnection'
  edges: Array<VoteCastEventEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type VoteCastEventCreateInput = {
  castVote: Scalars['ID']
  inBlock: Scalars['Float']
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock: Scalars['Float']
  network: Network
}

export type VoteCastEventEdge = {
  __typename: 'VoteCastEventEdge'
  cursor: Scalars['String']
  node: VoteCastEvent
}

export enum VoteCastEventOrderByInput {
  CastVoteAsc = 'castVote_ASC',
  CastVoteDesc = 'castVote_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type VoteCastEventUpdateInput = {
  castVote?: InputMaybe<Scalars['ID']>
  inBlock?: InputMaybe<Scalars['Float']>
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock?: InputMaybe<Scalars['Float']>
  network?: InputMaybe<Network>
}

export type VoteCastEventWhereInput = {
  AND?: InputMaybe<Array<VoteCastEventWhereInput>>
  OR?: InputMaybe<Array<VoteCastEventWhereInput>>
  castVote?: InputMaybe<CastVoteWhereInput>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  inBlock_eq?: InputMaybe<Scalars['Int']>
  inBlock_gt?: InputMaybe<Scalars['Int']>
  inBlock_gte?: InputMaybe<Scalars['Int']>
  inBlock_in?: InputMaybe<Array<Scalars['Int']>>
  inBlock_lt?: InputMaybe<Scalars['Int']>
  inBlock_lte?: InputMaybe<Scalars['Int']>
  inExtrinsic_contains?: InputMaybe<Scalars['String']>
  inExtrinsic_endsWith?: InputMaybe<Scalars['String']>
  inExtrinsic_eq?: InputMaybe<Scalars['String']>
  inExtrinsic_in?: InputMaybe<Array<Scalars['String']>>
  inExtrinsic_startsWith?: InputMaybe<Scalars['String']>
  indexInBlock_eq?: InputMaybe<Scalars['Int']>
  indexInBlock_gt?: InputMaybe<Scalars['Int']>
  indexInBlock_gte?: InputMaybe<Scalars['Int']>
  indexInBlock_in?: InputMaybe<Array<Scalars['Int']>>
  indexInBlock_lt?: InputMaybe<Scalars['Int']>
  indexInBlock_lte?: InputMaybe<Scalars['Int']>
  network_eq?: InputMaybe<Network>
  network_in?: InputMaybe<Array<Network>>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
}

export type VoteCastEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type VoteOnPollEvent = BaseGraphQlObject &
  Event & {
    __typename: 'VoteOnPollEvent'
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    id: Scalars['ID']
    /** Blocknumber of the block in which the event was emitted. */
    inBlock: Scalars['Int']
    /** Hash of the extrinsic which caused the event to be emitted */
    inExtrinsic?: Maybe<Scalars['String']>
    /** Index of event in block from which it was emitted. */
    indexInBlock: Scalars['Int']
    /** Network the block was produced in */
    network: Network
    pollAlternative: ForumPollAlternative
    pollAlternativeId: Scalars['String']
    /** Filtering options for interface implementers */
    type?: Maybe<EventTypeOptions>
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
    votingMember: Membership
    votingMemberId: Scalars['String']
  }

export type VoteOnPollEventConnection = {
  __typename: 'VoteOnPollEventConnection'
  edges: Array<VoteOnPollEventEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type VoteOnPollEventCreateInput = {
  inBlock: Scalars['Float']
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock: Scalars['Float']
  network: Network
  pollAlternative: Scalars['ID']
  votingMember: Scalars['ID']
}

export type VoteOnPollEventEdge = {
  __typename: 'VoteOnPollEventEdge'
  cursor: Scalars['String']
  node: VoteOnPollEvent
}

export enum VoteOnPollEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  PollAlternativeAsc = 'pollAlternative_ASC',
  PollAlternativeDesc = 'pollAlternative_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  VotingMemberAsc = 'votingMember_ASC',
  VotingMemberDesc = 'votingMember_DESC',
}

export type VoteOnPollEventUpdateInput = {
  inBlock?: InputMaybe<Scalars['Float']>
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock?: InputMaybe<Scalars['Float']>
  network?: InputMaybe<Network>
  pollAlternative?: InputMaybe<Scalars['ID']>
  votingMember?: InputMaybe<Scalars['ID']>
}

export type VoteOnPollEventWhereInput = {
  AND?: InputMaybe<Array<VoteOnPollEventWhereInput>>
  OR?: InputMaybe<Array<VoteOnPollEventWhereInput>>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  inBlock_eq?: InputMaybe<Scalars['Int']>
  inBlock_gt?: InputMaybe<Scalars['Int']>
  inBlock_gte?: InputMaybe<Scalars['Int']>
  inBlock_in?: InputMaybe<Array<Scalars['Int']>>
  inBlock_lt?: InputMaybe<Scalars['Int']>
  inBlock_lte?: InputMaybe<Scalars['Int']>
  inExtrinsic_contains?: InputMaybe<Scalars['String']>
  inExtrinsic_endsWith?: InputMaybe<Scalars['String']>
  inExtrinsic_eq?: InputMaybe<Scalars['String']>
  inExtrinsic_in?: InputMaybe<Array<Scalars['String']>>
  inExtrinsic_startsWith?: InputMaybe<Scalars['String']>
  indexInBlock_eq?: InputMaybe<Scalars['Int']>
  indexInBlock_gt?: InputMaybe<Scalars['Int']>
  indexInBlock_gte?: InputMaybe<Scalars['Int']>
  indexInBlock_in?: InputMaybe<Array<Scalars['Int']>>
  indexInBlock_lt?: InputMaybe<Scalars['Int']>
  indexInBlock_lte?: InputMaybe<Scalars['Int']>
  network_eq?: InputMaybe<Network>
  network_in?: InputMaybe<Array<Network>>
  pollAlternative?: InputMaybe<ForumPollAlternativeWhereInput>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
  votingMember?: InputMaybe<MembershipWhereInput>
}

export type VoteOnPollEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type VoteRevealedEvent = BaseGraphQlObject &
  Event & {
    __typename: 'VoteRevealedEvent'
    castVote: CastVote
    castVoteId: Scalars['String']
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    id: Scalars['ID']
    /** Blocknumber of the block in which the event was emitted. */
    inBlock: Scalars['Int']
    /** Hash of the extrinsic which caused the event to be emitted */
    inExtrinsic?: Maybe<Scalars['String']>
    /** Index of event in block from which it was emitted. */
    indexInBlock: Scalars['Int']
    /** Network the block was produced in */
    network: Network
    /** Filtering options for interface implementers */
    type?: Maybe<EventTypeOptions>
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
  }

export type VoteRevealedEventConnection = {
  __typename: 'VoteRevealedEventConnection'
  edges: Array<VoteRevealedEventEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type VoteRevealedEventCreateInput = {
  castVote: Scalars['ID']
  inBlock: Scalars['Float']
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock: Scalars['Float']
  network: Network
}

export type VoteRevealedEventEdge = {
  __typename: 'VoteRevealedEventEdge'
  cursor: Scalars['String']
  node: VoteRevealedEvent
}

export enum VoteRevealedEventOrderByInput {
  CastVoteAsc = 'castVote_ASC',
  CastVoteDesc = 'castVote_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type VoteRevealedEventUpdateInput = {
  castVote?: InputMaybe<Scalars['ID']>
  inBlock?: InputMaybe<Scalars['Float']>
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock?: InputMaybe<Scalars['Float']>
  network?: InputMaybe<Network>
}

export type VoteRevealedEventWhereInput = {
  AND?: InputMaybe<Array<VoteRevealedEventWhereInput>>
  OR?: InputMaybe<Array<VoteRevealedEventWhereInput>>
  castVote?: InputMaybe<CastVoteWhereInput>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  inBlock_eq?: InputMaybe<Scalars['Int']>
  inBlock_gt?: InputMaybe<Scalars['Int']>
  inBlock_gte?: InputMaybe<Scalars['Int']>
  inBlock_in?: InputMaybe<Array<Scalars['Int']>>
  inBlock_lt?: InputMaybe<Scalars['Int']>
  inBlock_lte?: InputMaybe<Scalars['Int']>
  inExtrinsic_contains?: InputMaybe<Scalars['String']>
  inExtrinsic_endsWith?: InputMaybe<Scalars['String']>
  inExtrinsic_eq?: InputMaybe<Scalars['String']>
  inExtrinsic_in?: InputMaybe<Array<Scalars['String']>>
  inExtrinsic_startsWith?: InputMaybe<Scalars['String']>
  indexInBlock_eq?: InputMaybe<Scalars['Int']>
  indexInBlock_gt?: InputMaybe<Scalars['Int']>
  indexInBlock_gte?: InputMaybe<Scalars['Int']>
  indexInBlock_in?: InputMaybe<Array<Scalars['Int']>>
  indexInBlock_lt?: InputMaybe<Scalars['Int']>
  indexInBlock_lte?: InputMaybe<Scalars['Int']>
  network_eq?: InputMaybe<Network>
  network_in?: InputMaybe<Array<Network>>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
}

export type VoteRevealedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type VotingPeriodStartedEvent = BaseGraphQlObject &
  Event & {
    __typename: 'VotingPeriodStartedEvent'
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    id: Scalars['ID']
    /** Blocknumber of the block in which the event was emitted. */
    inBlock: Scalars['Int']
    /** Hash of the extrinsic which caused the event to be emitted */
    inExtrinsic?: Maybe<Scalars['String']>
    /** Index of event in block from which it was emitted. */
    indexInBlock: Scalars['Int']
    /** Network the block was produced in */
    network: Network
    /** Number of candidates in the election. */
    numOfCandidates: Scalars['BigInt']
    /** Filtering options for interface implementers */
    type?: Maybe<EventTypeOptions>
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
  }

export type VotingPeriodStartedEventConnection = {
  __typename: 'VotingPeriodStartedEventConnection'
  edges: Array<VotingPeriodStartedEventEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type VotingPeriodStartedEventCreateInput = {
  inBlock: Scalars['Float']
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock: Scalars['Float']
  network: Network
  numOfCandidates: Scalars['String']
}

export type VotingPeriodStartedEventEdge = {
  __typename: 'VotingPeriodStartedEventEdge'
  cursor: Scalars['String']
  node: VotingPeriodStartedEvent
}

export enum VotingPeriodStartedEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  NumOfCandidatesAsc = 'numOfCandidates_ASC',
  NumOfCandidatesDesc = 'numOfCandidates_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type VotingPeriodStartedEventUpdateInput = {
  inBlock?: InputMaybe<Scalars['Float']>
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock?: InputMaybe<Scalars['Float']>
  network?: InputMaybe<Network>
  numOfCandidates?: InputMaybe<Scalars['String']>
}

export type VotingPeriodStartedEventWhereInput = {
  AND?: InputMaybe<Array<VotingPeriodStartedEventWhereInput>>
  OR?: InputMaybe<Array<VotingPeriodStartedEventWhereInput>>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  inBlock_eq?: InputMaybe<Scalars['Int']>
  inBlock_gt?: InputMaybe<Scalars['Int']>
  inBlock_gte?: InputMaybe<Scalars['Int']>
  inBlock_in?: InputMaybe<Array<Scalars['Int']>>
  inBlock_lt?: InputMaybe<Scalars['Int']>
  inBlock_lte?: InputMaybe<Scalars['Int']>
  inExtrinsic_contains?: InputMaybe<Scalars['String']>
  inExtrinsic_endsWith?: InputMaybe<Scalars['String']>
  inExtrinsic_eq?: InputMaybe<Scalars['String']>
  inExtrinsic_in?: InputMaybe<Array<Scalars['String']>>
  inExtrinsic_startsWith?: InputMaybe<Scalars['String']>
  indexInBlock_eq?: InputMaybe<Scalars['Int']>
  indexInBlock_gt?: InputMaybe<Scalars['Int']>
  indexInBlock_gte?: InputMaybe<Scalars['Int']>
  indexInBlock_in?: InputMaybe<Array<Scalars['Int']>>
  indexInBlock_lt?: InputMaybe<Scalars['Int']>
  indexInBlock_lte?: InputMaybe<Scalars['Int']>
  network_eq?: InputMaybe<Network>
  network_in?: InputMaybe<Array<Network>>
  numOfCandidates_eq?: InputMaybe<Scalars['BigInt']>
  numOfCandidates_gt?: InputMaybe<Scalars['BigInt']>
  numOfCandidates_gte?: InputMaybe<Scalars['BigInt']>
  numOfCandidates_in?: InputMaybe<Array<Scalars['BigInt']>>
  numOfCandidates_lt?: InputMaybe<Scalars['BigInt']>
  numOfCandidates_lte?: InputMaybe<Scalars['BigInt']>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
}

export type VotingPeriodStartedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type WorkEntryAnnouncedEvent = BaseGraphQlObject &
  Event & {
    __typename: 'WorkEntryAnnouncedEvent'
    bountyentryannouncedInEvent?: Maybe<Array<BountyEntry>>
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    id: Scalars['ID']
    /** Blocknumber of the block in which the event was emitted. */
    inBlock: Scalars['Int']
    /** Hash of the extrinsic which caused the event to be emitted */
    inExtrinsic?: Maybe<Scalars['String']>
    /** Index of event in block from which it was emitted. */
    indexInBlock: Scalars['Int']
    /** Network the block was produced in */
    network: Network
    /** Filtering options for interface implementers */
    type?: Maybe<EventTypeOptions>
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
  }

export type WorkEntryAnnouncedEventConnection = {
  __typename: 'WorkEntryAnnouncedEventConnection'
  edges: Array<WorkEntryAnnouncedEventEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type WorkEntryAnnouncedEventCreateInput = {
  inBlock: Scalars['Float']
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock: Scalars['Float']
  network: Network
}

export type WorkEntryAnnouncedEventEdge = {
  __typename: 'WorkEntryAnnouncedEventEdge'
  cursor: Scalars['String']
  node: WorkEntryAnnouncedEvent
}

export enum WorkEntryAnnouncedEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type WorkEntryAnnouncedEventUpdateInput = {
  inBlock?: InputMaybe<Scalars['Float']>
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock?: InputMaybe<Scalars['Float']>
  network?: InputMaybe<Network>
}

export type WorkEntryAnnouncedEventWhereInput = {
  AND?: InputMaybe<Array<WorkEntryAnnouncedEventWhereInput>>
  OR?: InputMaybe<Array<WorkEntryAnnouncedEventWhereInput>>
  bountyentryannouncedInEvent_every?: InputMaybe<BountyEntryWhereInput>
  bountyentryannouncedInEvent_none?: InputMaybe<BountyEntryWhereInput>
  bountyentryannouncedInEvent_some?: InputMaybe<BountyEntryWhereInput>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  inBlock_eq?: InputMaybe<Scalars['Int']>
  inBlock_gt?: InputMaybe<Scalars['Int']>
  inBlock_gte?: InputMaybe<Scalars['Int']>
  inBlock_in?: InputMaybe<Array<Scalars['Int']>>
  inBlock_lt?: InputMaybe<Scalars['Int']>
  inBlock_lte?: InputMaybe<Scalars['Int']>
  inExtrinsic_contains?: InputMaybe<Scalars['String']>
  inExtrinsic_endsWith?: InputMaybe<Scalars['String']>
  inExtrinsic_eq?: InputMaybe<Scalars['String']>
  inExtrinsic_in?: InputMaybe<Array<Scalars['String']>>
  inExtrinsic_startsWith?: InputMaybe<Scalars['String']>
  indexInBlock_eq?: InputMaybe<Scalars['Int']>
  indexInBlock_gt?: InputMaybe<Scalars['Int']>
  indexInBlock_gte?: InputMaybe<Scalars['Int']>
  indexInBlock_in?: InputMaybe<Array<Scalars['Int']>>
  indexInBlock_lt?: InputMaybe<Scalars['Int']>
  indexInBlock_lte?: InputMaybe<Scalars['Int']>
  network_eq?: InputMaybe<Network>
  network_in?: InputMaybe<Array<Network>>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
}

export type WorkEntryAnnouncedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type Worker = BaseGraphQlObject & {
  __typename: 'Worker'
  application: WorkingGroupApplication
  applicationId: Scalars['String']
  categoryarchivalstatusupdatedeventactor?: Maybe<Array<CategoryArchivalStatusUpdatedEvent>>
  categorydeletedeventactor?: Maybe<Array<CategoryDeletedEvent>>
  categorymembershipofmoderatorupdatedeventmoderator?: Maybe<Array<CategoryMembershipOfModeratorUpdatedEvent>>
  categorystickythreadupdateeventactor?: Maybe<Array<CategoryStickyThreadUpdateEvent>>
  createdAt: Scalars['DateTime']
  createdById: Scalars['String']
  dataObjects: Array<DataObject>
  deletedAt?: Maybe<Scalars['DateTime']>
  deletedById?: Maybe<Scalars['String']>
  entry: OpeningFilledEvent
  entryId: Scalars['String']
  group: WorkingGroup
  /** The id the group that the worker belongs to */
  groupId: Scalars['String']
  id: Scalars['ID']
  /** Whether the worker is also the working group lead */
  isLead: Scalars['Boolean']
  leaderseteventworker?: Maybe<Array<LeaderSetEvent>>
  leaderunseteventleader?: Maybe<Array<LeaderUnsetEvent>>
  managedForumCategories: Array<ForumCategory>
  membership: Membership
  membershipId: Scalars['String']
  memberverificationstatusupdatedeventworker?: Maybe<Array<MemberVerificationStatusUpdatedEvent>>
  /** The reward amount the worker is currently missing (due to empty working group budget) */
  missingRewardAmount?: Maybe<Scalars['BigInt']>
  newmissedrewardlevelreachedeventworker?: Maybe<Array<NewMissedRewardLevelReachedEvent>>
  payouts: Array<RewardPaidEvent>
  postmoderatedeventactor?: Maybe<Array<PostModeratedEvent>>
  /** Worker's reward account */
  rewardAccount: Scalars['String']
  /** Current reward per block */
  rewardPerBlock: Scalars['BigInt']
  /** Worker's role account */
  roleAccount: Scalars['String']
  /** WorkerId in specific working group module */
  runtimeId: Scalars['Int']
  slashes: Array<StakeSlashedEvent>
  /** Current role stake (in JOY) */
  stake: Scalars['BigInt']
  /** Worker's staking account */
  stakeAccount: Scalars['String']
  stakedecreasedeventworker?: Maybe<Array<StakeDecreasedEvent>>
  stakeincreasedeventworker?: Maybe<Array<StakeIncreasedEvent>>
  /** Current worker status */
  status: WorkerStatus
  /** Worker's storage data */
  storage?: Maybe<Scalars['String']>
  terminatedleadereventworker?: Maybe<Array<TerminatedLeaderEvent>>
  terminatedworkereventworker?: Maybe<Array<TerminatedWorkerEvent>>
  threadmoderatedeventactor?: Maybe<Array<ThreadModeratedEvent>>
  threadmovedeventactor?: Maybe<Array<ThreadMovedEvent>>
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedById?: Maybe<Scalars['String']>
  version: Scalars['Int']
  workerexitedeventworker?: Maybe<Array<WorkerExitedEvent>>
  workerrewardaccountupdatedeventworker?: Maybe<Array<WorkerRewardAccountUpdatedEvent>>
  workerrewardamountupdatedeventworker?: Maybe<Array<WorkerRewardAmountUpdatedEvent>>
  workerroleaccountupdatedeventworker?: Maybe<Array<WorkerRoleAccountUpdatedEvent>>
  workerstartedleavingeventworker?: Maybe<Array<WorkerStartedLeavingEvent>>
  workinggroupleader?: Maybe<Array<WorkingGroup>>
}

export type WorkerConnection = {
  __typename: 'WorkerConnection'
  edges: Array<WorkerEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type WorkerCreateInput = {
  application: Scalars['ID']
  entry: Scalars['ID']
  group: Scalars['ID']
  groupId: Scalars['String']
  isLead: Scalars['Boolean']
  membership: Scalars['ID']
  missingRewardAmount?: InputMaybe<Scalars['String']>
  rewardAccount: Scalars['String']
  rewardPerBlock: Scalars['String']
  roleAccount: Scalars['String']
  runtimeId: Scalars['Float']
  stake: Scalars['String']
  stakeAccount: Scalars['String']
  status: Scalars['JSONObject']
  storage?: InputMaybe<Scalars['String']>
}

export type WorkerEdge = {
  __typename: 'WorkerEdge'
  cursor: Scalars['String']
  node: Worker
}

export type WorkerExitedEvent = BaseGraphQlObject &
  Event & {
    __typename: 'WorkerExitedEvent'
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    group: WorkingGroup
    groupId: Scalars['String']
    id: Scalars['ID']
    /** Blocknumber of the block in which the event was emitted. */
    inBlock: Scalars['Int']
    /** Hash of the extrinsic which caused the event to be emitted */
    inExtrinsic?: Maybe<Scalars['String']>
    /** Index of event in block from which it was emitted. */
    indexInBlock: Scalars['Int']
    /** Network the block was produced in */
    network: Network
    /** Filtering options for interface implementers */
    type?: Maybe<EventTypeOptions>
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
    worker: Worker
    workerId: Scalars['String']
  }

export type WorkerExitedEventConnection = {
  __typename: 'WorkerExitedEventConnection'
  edges: Array<WorkerExitedEventEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type WorkerExitedEventCreateInput = {
  group: Scalars['ID']
  inBlock: Scalars['Float']
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock: Scalars['Float']
  network: Network
  worker: Scalars['ID']
}

export type WorkerExitedEventEdge = {
  __typename: 'WorkerExitedEventEdge'
  cursor: Scalars['String']
  node: WorkerExitedEvent
}

export enum WorkerExitedEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  GroupAsc = 'group_ASC',
  GroupDesc = 'group_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WorkerAsc = 'worker_ASC',
  WorkerDesc = 'worker_DESC',
}

export type WorkerExitedEventUpdateInput = {
  group?: InputMaybe<Scalars['ID']>
  inBlock?: InputMaybe<Scalars['Float']>
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock?: InputMaybe<Scalars['Float']>
  network?: InputMaybe<Network>
  worker?: InputMaybe<Scalars['ID']>
}

export type WorkerExitedEventWhereInput = {
  AND?: InputMaybe<Array<WorkerExitedEventWhereInput>>
  OR?: InputMaybe<Array<WorkerExitedEventWhereInput>>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  group?: InputMaybe<WorkingGroupWhereInput>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  inBlock_eq?: InputMaybe<Scalars['Int']>
  inBlock_gt?: InputMaybe<Scalars['Int']>
  inBlock_gte?: InputMaybe<Scalars['Int']>
  inBlock_in?: InputMaybe<Array<Scalars['Int']>>
  inBlock_lt?: InputMaybe<Scalars['Int']>
  inBlock_lte?: InputMaybe<Scalars['Int']>
  inExtrinsic_contains?: InputMaybe<Scalars['String']>
  inExtrinsic_endsWith?: InputMaybe<Scalars['String']>
  inExtrinsic_eq?: InputMaybe<Scalars['String']>
  inExtrinsic_in?: InputMaybe<Array<Scalars['String']>>
  inExtrinsic_startsWith?: InputMaybe<Scalars['String']>
  indexInBlock_eq?: InputMaybe<Scalars['Int']>
  indexInBlock_gt?: InputMaybe<Scalars['Int']>
  indexInBlock_gte?: InputMaybe<Scalars['Int']>
  indexInBlock_in?: InputMaybe<Array<Scalars['Int']>>
  indexInBlock_lt?: InputMaybe<Scalars['Int']>
  indexInBlock_lte?: InputMaybe<Scalars['Int']>
  network_eq?: InputMaybe<Network>
  network_in?: InputMaybe<Array<Network>>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
  worker?: InputMaybe<WorkerWhereInput>
}

export type WorkerExitedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export enum WorkerOrderByInput {
  ApplicationAsc = 'application_ASC',
  ApplicationDesc = 'application_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  EntryAsc = 'entry_ASC',
  EntryDesc = 'entry_DESC',
  GroupIdAsc = 'groupId_ASC',
  GroupIdDesc = 'groupId_DESC',
  GroupAsc = 'group_ASC',
  GroupDesc = 'group_DESC',
  IsLeadAsc = 'isLead_ASC',
  IsLeadDesc = 'isLead_DESC',
  MembershipAsc = 'membership_ASC',
  MembershipDesc = 'membership_DESC',
  MissingRewardAmountAsc = 'missingRewardAmount_ASC',
  MissingRewardAmountDesc = 'missingRewardAmount_DESC',
  RewardAccountAsc = 'rewardAccount_ASC',
  RewardAccountDesc = 'rewardAccount_DESC',
  RewardPerBlockAsc = 'rewardPerBlock_ASC',
  RewardPerBlockDesc = 'rewardPerBlock_DESC',
  RoleAccountAsc = 'roleAccount_ASC',
  RoleAccountDesc = 'roleAccount_DESC',
  RuntimeIdAsc = 'runtimeId_ASC',
  RuntimeIdDesc = 'runtimeId_DESC',
  StakeAccountAsc = 'stakeAccount_ASC',
  StakeAccountDesc = 'stakeAccount_DESC',
  StakeAsc = 'stake_ASC',
  StakeDesc = 'stake_DESC',
  StorageAsc = 'storage_ASC',
  StorageDesc = 'storage_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type WorkerRewardAccountUpdatedEvent = BaseGraphQlObject &
  Event & {
    __typename: 'WorkerRewardAccountUpdatedEvent'
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    group: WorkingGroup
    groupId: Scalars['String']
    id: Scalars['ID']
    /** Blocknumber of the block in which the event was emitted. */
    inBlock: Scalars['Int']
    /** Hash of the extrinsic which caused the event to be emitted */
    inExtrinsic?: Maybe<Scalars['String']>
    /** Index of event in block from which it was emitted. */
    indexInBlock: Scalars['Int']
    /** Network the block was produced in */
    network: Network
    /** New reward account */
    newRewardAccount: Scalars['String']
    /** Filtering options for interface implementers */
    type?: Maybe<EventTypeOptions>
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
    worker: Worker
    workerId: Scalars['String']
  }

export type WorkerRewardAccountUpdatedEventConnection = {
  __typename: 'WorkerRewardAccountUpdatedEventConnection'
  edges: Array<WorkerRewardAccountUpdatedEventEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type WorkerRewardAccountUpdatedEventCreateInput = {
  group: Scalars['ID']
  inBlock: Scalars['Float']
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock: Scalars['Float']
  network: Network
  newRewardAccount: Scalars['String']
  worker: Scalars['ID']
}

export type WorkerRewardAccountUpdatedEventEdge = {
  __typename: 'WorkerRewardAccountUpdatedEventEdge'
  cursor: Scalars['String']
  node: WorkerRewardAccountUpdatedEvent
}

export enum WorkerRewardAccountUpdatedEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  GroupAsc = 'group_ASC',
  GroupDesc = 'group_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  NewRewardAccountAsc = 'newRewardAccount_ASC',
  NewRewardAccountDesc = 'newRewardAccount_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WorkerAsc = 'worker_ASC',
  WorkerDesc = 'worker_DESC',
}

export type WorkerRewardAccountUpdatedEventUpdateInput = {
  group?: InputMaybe<Scalars['ID']>
  inBlock?: InputMaybe<Scalars['Float']>
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock?: InputMaybe<Scalars['Float']>
  network?: InputMaybe<Network>
  newRewardAccount?: InputMaybe<Scalars['String']>
  worker?: InputMaybe<Scalars['ID']>
}

export type WorkerRewardAccountUpdatedEventWhereInput = {
  AND?: InputMaybe<Array<WorkerRewardAccountUpdatedEventWhereInput>>
  OR?: InputMaybe<Array<WorkerRewardAccountUpdatedEventWhereInput>>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  group?: InputMaybe<WorkingGroupWhereInput>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  inBlock_eq?: InputMaybe<Scalars['Int']>
  inBlock_gt?: InputMaybe<Scalars['Int']>
  inBlock_gte?: InputMaybe<Scalars['Int']>
  inBlock_in?: InputMaybe<Array<Scalars['Int']>>
  inBlock_lt?: InputMaybe<Scalars['Int']>
  inBlock_lte?: InputMaybe<Scalars['Int']>
  inExtrinsic_contains?: InputMaybe<Scalars['String']>
  inExtrinsic_endsWith?: InputMaybe<Scalars['String']>
  inExtrinsic_eq?: InputMaybe<Scalars['String']>
  inExtrinsic_in?: InputMaybe<Array<Scalars['String']>>
  inExtrinsic_startsWith?: InputMaybe<Scalars['String']>
  indexInBlock_eq?: InputMaybe<Scalars['Int']>
  indexInBlock_gt?: InputMaybe<Scalars['Int']>
  indexInBlock_gte?: InputMaybe<Scalars['Int']>
  indexInBlock_in?: InputMaybe<Array<Scalars['Int']>>
  indexInBlock_lt?: InputMaybe<Scalars['Int']>
  indexInBlock_lte?: InputMaybe<Scalars['Int']>
  network_eq?: InputMaybe<Network>
  network_in?: InputMaybe<Array<Network>>
  newRewardAccount_contains?: InputMaybe<Scalars['String']>
  newRewardAccount_endsWith?: InputMaybe<Scalars['String']>
  newRewardAccount_eq?: InputMaybe<Scalars['String']>
  newRewardAccount_in?: InputMaybe<Array<Scalars['String']>>
  newRewardAccount_startsWith?: InputMaybe<Scalars['String']>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
  worker?: InputMaybe<WorkerWhereInput>
}

export type WorkerRewardAccountUpdatedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type WorkerRewardAmountUpdatedEvent = BaseGraphQlObject &
  Event & {
    __typename: 'WorkerRewardAmountUpdatedEvent'
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    group: WorkingGroup
    groupId: Scalars['String']
    id: Scalars['ID']
    /** Blocknumber of the block in which the event was emitted. */
    inBlock: Scalars['Int']
    /** Hash of the extrinsic which caused the event to be emitted */
    inExtrinsic?: Maybe<Scalars['String']>
    /** Index of event in block from which it was emitted. */
    indexInBlock: Scalars['Int']
    /** Network the block was produced in */
    network: Network
    /** New worker reward per block */
    newRewardPerBlock: Scalars['BigInt']
    /** Filtering options for interface implementers */
    type?: Maybe<EventTypeOptions>
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
    worker: Worker
    workerId: Scalars['String']
  }

export type WorkerRewardAmountUpdatedEventConnection = {
  __typename: 'WorkerRewardAmountUpdatedEventConnection'
  edges: Array<WorkerRewardAmountUpdatedEventEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type WorkerRewardAmountUpdatedEventCreateInput = {
  group: Scalars['ID']
  inBlock: Scalars['Float']
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock: Scalars['Float']
  network: Network
  newRewardPerBlock: Scalars['String']
  worker: Scalars['ID']
}

export type WorkerRewardAmountUpdatedEventEdge = {
  __typename: 'WorkerRewardAmountUpdatedEventEdge'
  cursor: Scalars['String']
  node: WorkerRewardAmountUpdatedEvent
}

export enum WorkerRewardAmountUpdatedEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  GroupAsc = 'group_ASC',
  GroupDesc = 'group_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  NewRewardPerBlockAsc = 'newRewardPerBlock_ASC',
  NewRewardPerBlockDesc = 'newRewardPerBlock_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WorkerAsc = 'worker_ASC',
  WorkerDesc = 'worker_DESC',
}

export type WorkerRewardAmountUpdatedEventUpdateInput = {
  group?: InputMaybe<Scalars['ID']>
  inBlock?: InputMaybe<Scalars['Float']>
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock?: InputMaybe<Scalars['Float']>
  network?: InputMaybe<Network>
  newRewardPerBlock?: InputMaybe<Scalars['String']>
  worker?: InputMaybe<Scalars['ID']>
}

export type WorkerRewardAmountUpdatedEventWhereInput = {
  AND?: InputMaybe<Array<WorkerRewardAmountUpdatedEventWhereInput>>
  OR?: InputMaybe<Array<WorkerRewardAmountUpdatedEventWhereInput>>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  group?: InputMaybe<WorkingGroupWhereInput>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  inBlock_eq?: InputMaybe<Scalars['Int']>
  inBlock_gt?: InputMaybe<Scalars['Int']>
  inBlock_gte?: InputMaybe<Scalars['Int']>
  inBlock_in?: InputMaybe<Array<Scalars['Int']>>
  inBlock_lt?: InputMaybe<Scalars['Int']>
  inBlock_lte?: InputMaybe<Scalars['Int']>
  inExtrinsic_contains?: InputMaybe<Scalars['String']>
  inExtrinsic_endsWith?: InputMaybe<Scalars['String']>
  inExtrinsic_eq?: InputMaybe<Scalars['String']>
  inExtrinsic_in?: InputMaybe<Array<Scalars['String']>>
  inExtrinsic_startsWith?: InputMaybe<Scalars['String']>
  indexInBlock_eq?: InputMaybe<Scalars['Int']>
  indexInBlock_gt?: InputMaybe<Scalars['Int']>
  indexInBlock_gte?: InputMaybe<Scalars['Int']>
  indexInBlock_in?: InputMaybe<Array<Scalars['Int']>>
  indexInBlock_lt?: InputMaybe<Scalars['Int']>
  indexInBlock_lte?: InputMaybe<Scalars['Int']>
  network_eq?: InputMaybe<Network>
  network_in?: InputMaybe<Array<Network>>
  newRewardPerBlock_eq?: InputMaybe<Scalars['BigInt']>
  newRewardPerBlock_gt?: InputMaybe<Scalars['BigInt']>
  newRewardPerBlock_gte?: InputMaybe<Scalars['BigInt']>
  newRewardPerBlock_in?: InputMaybe<Array<Scalars['BigInt']>>
  newRewardPerBlock_lt?: InputMaybe<Scalars['BigInt']>
  newRewardPerBlock_lte?: InputMaybe<Scalars['BigInt']>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
  worker?: InputMaybe<WorkerWhereInput>
}

export type WorkerRewardAmountUpdatedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type WorkerRoleAccountUpdatedEvent = BaseGraphQlObject &
  Event & {
    __typename: 'WorkerRoleAccountUpdatedEvent'
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    group: WorkingGroup
    groupId: Scalars['String']
    id: Scalars['ID']
    /** Blocknumber of the block in which the event was emitted. */
    inBlock: Scalars['Int']
    /** Hash of the extrinsic which caused the event to be emitted */
    inExtrinsic?: Maybe<Scalars['String']>
    /** Index of event in block from which it was emitted. */
    indexInBlock: Scalars['Int']
    /** Network the block was produced in */
    network: Network
    /** New role account */
    newRoleAccount: Scalars['String']
    /** Filtering options for interface implementers */
    type?: Maybe<EventTypeOptions>
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
    worker: Worker
    workerId: Scalars['String']
  }

export type WorkerRoleAccountUpdatedEventConnection = {
  __typename: 'WorkerRoleAccountUpdatedEventConnection'
  edges: Array<WorkerRoleAccountUpdatedEventEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type WorkerRoleAccountUpdatedEventCreateInput = {
  group: Scalars['ID']
  inBlock: Scalars['Float']
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock: Scalars['Float']
  network: Network
  newRoleAccount: Scalars['String']
  worker: Scalars['ID']
}

export type WorkerRoleAccountUpdatedEventEdge = {
  __typename: 'WorkerRoleAccountUpdatedEventEdge'
  cursor: Scalars['String']
  node: WorkerRoleAccountUpdatedEvent
}

export enum WorkerRoleAccountUpdatedEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  GroupAsc = 'group_ASC',
  GroupDesc = 'group_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  NewRoleAccountAsc = 'newRoleAccount_ASC',
  NewRoleAccountDesc = 'newRoleAccount_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WorkerAsc = 'worker_ASC',
  WorkerDesc = 'worker_DESC',
}

export type WorkerRoleAccountUpdatedEventUpdateInput = {
  group?: InputMaybe<Scalars['ID']>
  inBlock?: InputMaybe<Scalars['Float']>
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock?: InputMaybe<Scalars['Float']>
  network?: InputMaybe<Network>
  newRoleAccount?: InputMaybe<Scalars['String']>
  worker?: InputMaybe<Scalars['ID']>
}

export type WorkerRoleAccountUpdatedEventWhereInput = {
  AND?: InputMaybe<Array<WorkerRoleAccountUpdatedEventWhereInput>>
  OR?: InputMaybe<Array<WorkerRoleAccountUpdatedEventWhereInput>>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  group?: InputMaybe<WorkingGroupWhereInput>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  inBlock_eq?: InputMaybe<Scalars['Int']>
  inBlock_gt?: InputMaybe<Scalars['Int']>
  inBlock_gte?: InputMaybe<Scalars['Int']>
  inBlock_in?: InputMaybe<Array<Scalars['Int']>>
  inBlock_lt?: InputMaybe<Scalars['Int']>
  inBlock_lte?: InputMaybe<Scalars['Int']>
  inExtrinsic_contains?: InputMaybe<Scalars['String']>
  inExtrinsic_endsWith?: InputMaybe<Scalars['String']>
  inExtrinsic_eq?: InputMaybe<Scalars['String']>
  inExtrinsic_in?: InputMaybe<Array<Scalars['String']>>
  inExtrinsic_startsWith?: InputMaybe<Scalars['String']>
  indexInBlock_eq?: InputMaybe<Scalars['Int']>
  indexInBlock_gt?: InputMaybe<Scalars['Int']>
  indexInBlock_gte?: InputMaybe<Scalars['Int']>
  indexInBlock_in?: InputMaybe<Array<Scalars['Int']>>
  indexInBlock_lt?: InputMaybe<Scalars['Int']>
  indexInBlock_lte?: InputMaybe<Scalars['Int']>
  network_eq?: InputMaybe<Network>
  network_in?: InputMaybe<Array<Network>>
  newRoleAccount_contains?: InputMaybe<Scalars['String']>
  newRoleAccount_endsWith?: InputMaybe<Scalars['String']>
  newRoleAccount_eq?: InputMaybe<Scalars['String']>
  newRoleAccount_in?: InputMaybe<Array<Scalars['String']>>
  newRoleAccount_startsWith?: InputMaybe<Scalars['String']>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
  worker?: InputMaybe<WorkerWhereInput>
}

export type WorkerRoleAccountUpdatedEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type WorkerStartedLeavingEvent = BaseGraphQlObject &
  Event & {
    __typename: 'WorkerStartedLeavingEvent'
    createdAt: Scalars['DateTime']
    createdById: Scalars['String']
    deletedAt?: Maybe<Scalars['DateTime']>
    deletedById?: Maybe<Scalars['String']>
    group: WorkingGroup
    groupId: Scalars['String']
    id: Scalars['ID']
    /** Blocknumber of the block in which the event was emitted. */
    inBlock: Scalars['Int']
    /** Hash of the extrinsic which caused the event to be emitted */
    inExtrinsic?: Maybe<Scalars['String']>
    /** Index of event in block from which it was emitted. */
    indexInBlock: Scalars['Int']
    /** Network the block was produced in */
    network: Network
    /** Optional rationale */
    rationale?: Maybe<Scalars['String']>
    /** Filtering options for interface implementers */
    type?: Maybe<EventTypeOptions>
    updatedAt?: Maybe<Scalars['DateTime']>
    updatedById?: Maybe<Scalars['String']>
    version: Scalars['Int']
    worker: Worker
    workerId: Scalars['String']
  }

export type WorkerStartedLeavingEventConnection = {
  __typename: 'WorkerStartedLeavingEventConnection'
  edges: Array<WorkerStartedLeavingEventEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type WorkerStartedLeavingEventCreateInput = {
  group: Scalars['ID']
  inBlock: Scalars['Float']
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock: Scalars['Float']
  network: Network
  rationale?: InputMaybe<Scalars['String']>
  worker: Scalars['ID']
}

export type WorkerStartedLeavingEventEdge = {
  __typename: 'WorkerStartedLeavingEventEdge'
  cursor: Scalars['String']
  node: WorkerStartedLeavingEvent
}

export enum WorkerStartedLeavingEventOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  GroupAsc = 'group_ASC',
  GroupDesc = 'group_DESC',
  InBlockAsc = 'inBlock_ASC',
  InBlockDesc = 'inBlock_DESC',
  InExtrinsicAsc = 'inExtrinsic_ASC',
  InExtrinsicDesc = 'inExtrinsic_DESC',
  IndexInBlockAsc = 'indexInBlock_ASC',
  IndexInBlockDesc = 'indexInBlock_DESC',
  NetworkAsc = 'network_ASC',
  NetworkDesc = 'network_DESC',
  RationaleAsc = 'rationale_ASC',
  RationaleDesc = 'rationale_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
  WorkerAsc = 'worker_ASC',
  WorkerDesc = 'worker_DESC',
}

export type WorkerStartedLeavingEventUpdateInput = {
  group?: InputMaybe<Scalars['ID']>
  inBlock?: InputMaybe<Scalars['Float']>
  inExtrinsic?: InputMaybe<Scalars['String']>
  indexInBlock?: InputMaybe<Scalars['Float']>
  network?: InputMaybe<Network>
  rationale?: InputMaybe<Scalars['String']>
  worker?: InputMaybe<Scalars['ID']>
}

export type WorkerStartedLeavingEventWhereInput = {
  AND?: InputMaybe<Array<WorkerStartedLeavingEventWhereInput>>
  OR?: InputMaybe<Array<WorkerStartedLeavingEventWhereInput>>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  group?: InputMaybe<WorkingGroupWhereInput>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  inBlock_eq?: InputMaybe<Scalars['Int']>
  inBlock_gt?: InputMaybe<Scalars['Int']>
  inBlock_gte?: InputMaybe<Scalars['Int']>
  inBlock_in?: InputMaybe<Array<Scalars['Int']>>
  inBlock_lt?: InputMaybe<Scalars['Int']>
  inBlock_lte?: InputMaybe<Scalars['Int']>
  inExtrinsic_contains?: InputMaybe<Scalars['String']>
  inExtrinsic_endsWith?: InputMaybe<Scalars['String']>
  inExtrinsic_eq?: InputMaybe<Scalars['String']>
  inExtrinsic_in?: InputMaybe<Array<Scalars['String']>>
  inExtrinsic_startsWith?: InputMaybe<Scalars['String']>
  indexInBlock_eq?: InputMaybe<Scalars['Int']>
  indexInBlock_gt?: InputMaybe<Scalars['Int']>
  indexInBlock_gte?: InputMaybe<Scalars['Int']>
  indexInBlock_in?: InputMaybe<Array<Scalars['Int']>>
  indexInBlock_lt?: InputMaybe<Scalars['Int']>
  indexInBlock_lte?: InputMaybe<Scalars['Int']>
  network_eq?: InputMaybe<Network>
  network_in?: InputMaybe<Array<Network>>
  rationale_contains?: InputMaybe<Scalars['String']>
  rationale_endsWith?: InputMaybe<Scalars['String']>
  rationale_eq?: InputMaybe<Scalars['String']>
  rationale_in?: InputMaybe<Array<Scalars['String']>>
  rationale_startsWith?: InputMaybe<Scalars['String']>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
  worker?: InputMaybe<WorkerWhereInput>
}

export type WorkerStartedLeavingEventWhereUniqueInput = {
  id: Scalars['ID']
}

export type WorkerStatus = WorkerStatusActive | WorkerStatusLeaving | WorkerStatusLeft | WorkerStatusTerminated

export type WorkerStatusActive = {
  __typename: 'WorkerStatusActive'
  phantom?: Maybe<Scalars['Int']>
}

export type WorkerStatusLeaving = {
  __typename: 'WorkerStatusLeaving'
  /** Related event emitted on leaving initialization */
  workerStartedLeavingEvent?: Maybe<WorkerStartedLeavingEvent>
}

export type WorkerStatusLeft = {
  __typename: 'WorkerStatusLeft'
  /** Related event emitted once the worker has exited the role (after the unstaking period) */
  workerExitedEvent?: Maybe<WorkerExitedEvent>
  /** Related event emitted on leaving initialization */
  workerStartedLeavingEvent?: Maybe<WorkerStartedLeavingEvent>
}

export type WorkerStatusTerminated = {
  __typename: 'WorkerStatusTerminated'
  /** Related event emitted on worker termination */
  terminatedWorkerEvent?: Maybe<TerminatedWorkerEvent>
}

export type WorkerUpdateInput = {
  application?: InputMaybe<Scalars['ID']>
  entry?: InputMaybe<Scalars['ID']>
  group?: InputMaybe<Scalars['ID']>
  groupId?: InputMaybe<Scalars['String']>
  isLead?: InputMaybe<Scalars['Boolean']>
  membership?: InputMaybe<Scalars['ID']>
  missingRewardAmount?: InputMaybe<Scalars['String']>
  rewardAccount?: InputMaybe<Scalars['String']>
  rewardPerBlock?: InputMaybe<Scalars['String']>
  roleAccount?: InputMaybe<Scalars['String']>
  runtimeId?: InputMaybe<Scalars['Float']>
  stake?: InputMaybe<Scalars['String']>
  stakeAccount?: InputMaybe<Scalars['String']>
  status?: InputMaybe<Scalars['JSONObject']>
  storage?: InputMaybe<Scalars['String']>
}

export type WorkerWhereInput = {
  AND?: InputMaybe<Array<WorkerWhereInput>>
  OR?: InputMaybe<Array<WorkerWhereInput>>
  application?: InputMaybe<WorkingGroupApplicationWhereInput>
  categoryarchivalstatusupdatedeventactor_every?: InputMaybe<CategoryArchivalStatusUpdatedEventWhereInput>
  categoryarchivalstatusupdatedeventactor_none?: InputMaybe<CategoryArchivalStatusUpdatedEventWhereInput>
  categoryarchivalstatusupdatedeventactor_some?: InputMaybe<CategoryArchivalStatusUpdatedEventWhereInput>
  categorydeletedeventactor_every?: InputMaybe<CategoryDeletedEventWhereInput>
  categorydeletedeventactor_none?: InputMaybe<CategoryDeletedEventWhereInput>
  categorydeletedeventactor_some?: InputMaybe<CategoryDeletedEventWhereInput>
  categorymembershipofmoderatorupdatedeventmoderator_every?: InputMaybe<CategoryMembershipOfModeratorUpdatedEventWhereInput>
  categorymembershipofmoderatorupdatedeventmoderator_none?: InputMaybe<CategoryMembershipOfModeratorUpdatedEventWhereInput>
  categorymembershipofmoderatorupdatedeventmoderator_some?: InputMaybe<CategoryMembershipOfModeratorUpdatedEventWhereInput>
  categorystickythreadupdateeventactor_every?: InputMaybe<CategoryStickyThreadUpdateEventWhereInput>
  categorystickythreadupdateeventactor_none?: InputMaybe<CategoryStickyThreadUpdateEventWhereInput>
  categorystickythreadupdateeventactor_some?: InputMaybe<CategoryStickyThreadUpdateEventWhereInput>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  dataObjects_every?: InputMaybe<DataObjectWhereInput>
  dataObjects_none?: InputMaybe<DataObjectWhereInput>
  dataObjects_some?: InputMaybe<DataObjectWhereInput>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  entry?: InputMaybe<OpeningFilledEventWhereInput>
  group?: InputMaybe<WorkingGroupWhereInput>
  groupId_contains?: InputMaybe<Scalars['String']>
  groupId_endsWith?: InputMaybe<Scalars['String']>
  groupId_eq?: InputMaybe<Scalars['String']>
  groupId_in?: InputMaybe<Array<Scalars['String']>>
  groupId_startsWith?: InputMaybe<Scalars['String']>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  isLead_eq?: InputMaybe<Scalars['Boolean']>
  isLead_in?: InputMaybe<Array<Scalars['Boolean']>>
  leaderseteventworker_every?: InputMaybe<LeaderSetEventWhereInput>
  leaderseteventworker_none?: InputMaybe<LeaderSetEventWhereInput>
  leaderseteventworker_some?: InputMaybe<LeaderSetEventWhereInput>
  leaderunseteventleader_every?: InputMaybe<LeaderUnsetEventWhereInput>
  leaderunseteventleader_none?: InputMaybe<LeaderUnsetEventWhereInput>
  leaderunseteventleader_some?: InputMaybe<LeaderUnsetEventWhereInput>
  managedForumCategories_every?: InputMaybe<ForumCategoryWhereInput>
  managedForumCategories_none?: InputMaybe<ForumCategoryWhereInput>
  managedForumCategories_some?: InputMaybe<ForumCategoryWhereInput>
  membership?: InputMaybe<MembershipWhereInput>
  memberverificationstatusupdatedeventworker_every?: InputMaybe<MemberVerificationStatusUpdatedEventWhereInput>
  memberverificationstatusupdatedeventworker_none?: InputMaybe<MemberVerificationStatusUpdatedEventWhereInput>
  memberverificationstatusupdatedeventworker_some?: InputMaybe<MemberVerificationStatusUpdatedEventWhereInput>
  missingRewardAmount_eq?: InputMaybe<Scalars['BigInt']>
  missingRewardAmount_gt?: InputMaybe<Scalars['BigInt']>
  missingRewardAmount_gte?: InputMaybe<Scalars['BigInt']>
  missingRewardAmount_in?: InputMaybe<Array<Scalars['BigInt']>>
  missingRewardAmount_lt?: InputMaybe<Scalars['BigInt']>
  missingRewardAmount_lte?: InputMaybe<Scalars['BigInt']>
  newmissedrewardlevelreachedeventworker_every?: InputMaybe<NewMissedRewardLevelReachedEventWhereInput>
  newmissedrewardlevelreachedeventworker_none?: InputMaybe<NewMissedRewardLevelReachedEventWhereInput>
  newmissedrewardlevelreachedeventworker_some?: InputMaybe<NewMissedRewardLevelReachedEventWhereInput>
  payouts_every?: InputMaybe<RewardPaidEventWhereInput>
  payouts_none?: InputMaybe<RewardPaidEventWhereInput>
  payouts_some?: InputMaybe<RewardPaidEventWhereInput>
  postmoderatedeventactor_every?: InputMaybe<PostModeratedEventWhereInput>
  postmoderatedeventactor_none?: InputMaybe<PostModeratedEventWhereInput>
  postmoderatedeventactor_some?: InputMaybe<PostModeratedEventWhereInput>
  rewardAccount_contains?: InputMaybe<Scalars['String']>
  rewardAccount_endsWith?: InputMaybe<Scalars['String']>
  rewardAccount_eq?: InputMaybe<Scalars['String']>
  rewardAccount_in?: InputMaybe<Array<Scalars['String']>>
  rewardAccount_startsWith?: InputMaybe<Scalars['String']>
  rewardPerBlock_eq?: InputMaybe<Scalars['BigInt']>
  rewardPerBlock_gt?: InputMaybe<Scalars['BigInt']>
  rewardPerBlock_gte?: InputMaybe<Scalars['BigInt']>
  rewardPerBlock_in?: InputMaybe<Array<Scalars['BigInt']>>
  rewardPerBlock_lt?: InputMaybe<Scalars['BigInt']>
  rewardPerBlock_lte?: InputMaybe<Scalars['BigInt']>
  roleAccount_contains?: InputMaybe<Scalars['String']>
  roleAccount_endsWith?: InputMaybe<Scalars['String']>
  roleAccount_eq?: InputMaybe<Scalars['String']>
  roleAccount_in?: InputMaybe<Array<Scalars['String']>>
  roleAccount_startsWith?: InputMaybe<Scalars['String']>
  runtimeId_eq?: InputMaybe<Scalars['Int']>
  runtimeId_gt?: InputMaybe<Scalars['Int']>
  runtimeId_gte?: InputMaybe<Scalars['Int']>
  runtimeId_in?: InputMaybe<Array<Scalars['Int']>>
  runtimeId_lt?: InputMaybe<Scalars['Int']>
  runtimeId_lte?: InputMaybe<Scalars['Int']>
  slashes_every?: InputMaybe<StakeSlashedEventWhereInput>
  slashes_none?: InputMaybe<StakeSlashedEventWhereInput>
  slashes_some?: InputMaybe<StakeSlashedEventWhereInput>
  stakeAccount_contains?: InputMaybe<Scalars['String']>
  stakeAccount_endsWith?: InputMaybe<Scalars['String']>
  stakeAccount_eq?: InputMaybe<Scalars['String']>
  stakeAccount_in?: InputMaybe<Array<Scalars['String']>>
  stakeAccount_startsWith?: InputMaybe<Scalars['String']>
  stake_eq?: InputMaybe<Scalars['BigInt']>
  stake_gt?: InputMaybe<Scalars['BigInt']>
  stake_gte?: InputMaybe<Scalars['BigInt']>
  stake_in?: InputMaybe<Array<Scalars['BigInt']>>
  stake_lt?: InputMaybe<Scalars['BigInt']>
  stake_lte?: InputMaybe<Scalars['BigInt']>
  stakedecreasedeventworker_every?: InputMaybe<StakeDecreasedEventWhereInput>
  stakedecreasedeventworker_none?: InputMaybe<StakeDecreasedEventWhereInput>
  stakedecreasedeventworker_some?: InputMaybe<StakeDecreasedEventWhereInput>
  stakeincreasedeventworker_every?: InputMaybe<StakeIncreasedEventWhereInput>
  stakeincreasedeventworker_none?: InputMaybe<StakeIncreasedEventWhereInput>
  stakeincreasedeventworker_some?: InputMaybe<StakeIncreasedEventWhereInput>
  status_json?: InputMaybe<Scalars['JSONObject']>
  storage_contains?: InputMaybe<Scalars['String']>
  storage_endsWith?: InputMaybe<Scalars['String']>
  storage_eq?: InputMaybe<Scalars['String']>
  storage_in?: InputMaybe<Array<Scalars['String']>>
  storage_startsWith?: InputMaybe<Scalars['String']>
  terminatedleadereventworker_every?: InputMaybe<TerminatedLeaderEventWhereInput>
  terminatedleadereventworker_none?: InputMaybe<TerminatedLeaderEventWhereInput>
  terminatedleadereventworker_some?: InputMaybe<TerminatedLeaderEventWhereInput>
  terminatedworkereventworker_every?: InputMaybe<TerminatedWorkerEventWhereInput>
  terminatedworkereventworker_none?: InputMaybe<TerminatedWorkerEventWhereInput>
  terminatedworkereventworker_some?: InputMaybe<TerminatedWorkerEventWhereInput>
  threadmoderatedeventactor_every?: InputMaybe<ThreadModeratedEventWhereInput>
  threadmoderatedeventactor_none?: InputMaybe<ThreadModeratedEventWhereInput>
  threadmoderatedeventactor_some?: InputMaybe<ThreadModeratedEventWhereInput>
  threadmovedeventactor_every?: InputMaybe<ThreadMovedEventWhereInput>
  threadmovedeventactor_none?: InputMaybe<ThreadMovedEventWhereInput>
  threadmovedeventactor_some?: InputMaybe<ThreadMovedEventWhereInput>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
  workerexitedeventworker_every?: InputMaybe<WorkerExitedEventWhereInput>
  workerexitedeventworker_none?: InputMaybe<WorkerExitedEventWhereInput>
  workerexitedeventworker_some?: InputMaybe<WorkerExitedEventWhereInput>
  workerrewardaccountupdatedeventworker_every?: InputMaybe<WorkerRewardAccountUpdatedEventWhereInput>
  workerrewardaccountupdatedeventworker_none?: InputMaybe<WorkerRewardAccountUpdatedEventWhereInput>
  workerrewardaccountupdatedeventworker_some?: InputMaybe<WorkerRewardAccountUpdatedEventWhereInput>
  workerrewardamountupdatedeventworker_every?: InputMaybe<WorkerRewardAmountUpdatedEventWhereInput>
  workerrewardamountupdatedeventworker_none?: InputMaybe<WorkerRewardAmountUpdatedEventWhereInput>
  workerrewardamountupdatedeventworker_some?: InputMaybe<WorkerRewardAmountUpdatedEventWhereInput>
  workerroleaccountupdatedeventworker_every?: InputMaybe<WorkerRoleAccountUpdatedEventWhereInput>
  workerroleaccountupdatedeventworker_none?: InputMaybe<WorkerRoleAccountUpdatedEventWhereInput>
  workerroleaccountupdatedeventworker_some?: InputMaybe<WorkerRoleAccountUpdatedEventWhereInput>
  workerstartedleavingeventworker_every?: InputMaybe<WorkerStartedLeavingEventWhereInput>
  workerstartedleavingeventworker_none?: InputMaybe<WorkerStartedLeavingEventWhereInput>
  workerstartedleavingeventworker_some?: InputMaybe<WorkerStartedLeavingEventWhereInput>
  workinggroupleader_every?: InputMaybe<WorkingGroupWhereInput>
  workinggroupleader_none?: InputMaybe<WorkingGroupWhereInput>
  workinggroupleader_some?: InputMaybe<WorkingGroupWhereInput>
}

export type WorkerWhereUniqueInput = {
  id: Scalars['ID']
}

export type WorkingGroup = BaseGraphQlObject & {
  __typename: 'WorkingGroup'
  applicationwithdrawneventgroup?: Maybe<Array<ApplicationWithdrawnEvent>>
  appliedonopeningeventgroup?: Maybe<Array<AppliedOnOpeningEvent>>
  /** Current working group budget (JOY) */
  budget: Scalars['BigInt']
  budgetseteventgroup?: Maybe<Array<BudgetSetEvent>>
  budgetspendingeventgroup?: Maybe<Array<BudgetSpendingEvent>>
  createdAt: Scalars['DateTime']
  createdById: Scalars['String']
  deletedAt?: Maybe<Scalars['DateTime']>
  deletedById?: Maybe<Scalars['String']>
  id: Scalars['ID']
  leader?: Maybe<Worker>
  leaderId?: Maybe<Scalars['String']>
  leaderseteventgroup?: Maybe<Array<LeaderSetEvent>>
  leaderunseteventgroup?: Maybe<Array<LeaderUnsetEvent>>
  metadata?: Maybe<WorkingGroupMetadata>
  metadataId?: Maybe<Scalars['String']>
  /** Working group name */
  name: Scalars['String']
  newmissedrewardlevelreachedeventgroup?: Maybe<Array<NewMissedRewardLevelReachedEvent>>
  openingaddedeventgroup?: Maybe<Array<OpeningAddedEvent>>
  openingcanceledeventgroup?: Maybe<Array<OpeningCanceledEvent>>
  openingfilledeventgroup?: Maybe<Array<OpeningFilledEvent>>
  openings: Array<WorkingGroupOpening>
  rewardpaideventgroup?: Maybe<Array<RewardPaidEvent>>
  stakedecreasedeventgroup?: Maybe<Array<StakeDecreasedEvent>>
  stakeincreasedeventgroup?: Maybe<Array<StakeIncreasedEvent>>
  stakeslashedeventgroup?: Maybe<Array<StakeSlashedEvent>>
  statustextchangedeventgroup?: Maybe<Array<StatusTextChangedEvent>>
  terminatedleadereventgroup?: Maybe<Array<TerminatedLeaderEvent>>
  terminatedworkereventgroup?: Maybe<Array<TerminatedWorkerEvent>>
  upcomingworkinggroupopeninggroup?: Maybe<Array<UpcomingWorkingGroupOpening>>
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedById?: Maybe<Scalars['String']>
  version: Scalars['Int']
  workerexitedeventgroup?: Maybe<Array<WorkerExitedEvent>>
  workerrewardaccountupdatedeventgroup?: Maybe<Array<WorkerRewardAccountUpdatedEvent>>
  workerrewardamountupdatedeventgroup?: Maybe<Array<WorkerRewardAmountUpdatedEvent>>
  workerroleaccountupdatedeventgroup?: Maybe<Array<WorkerRoleAccountUpdatedEvent>>
  workers: Array<Worker>
  workerstartedleavingeventgroup?: Maybe<Array<WorkerStartedLeavingEvent>>
  workinggroupmetadatagroup?: Maybe<Array<WorkingGroupMetadata>>
}

export type WorkingGroupApplication = BaseGraphQlObject & {
  __typename: 'WorkingGroupApplication'
  answers: Array<ApplicationFormQuestionAnswer>
  applicant: Membership
  applicantId: Scalars['String']
  applicationwithdrawneventapplication?: Maybe<Array<ApplicationWithdrawnEvent>>
  createdAt: Scalars['DateTime']
  createdById: Scalars['String']
  createdInEvent: AppliedOnOpeningEvent
  deletedAt?: Maybe<Scalars['DateTime']>
  deletedById?: Maybe<Scalars['String']>
  id: Scalars['ID']
  opening: WorkingGroupOpening
  openingId: Scalars['String']
  /** Applicant's initial reward account */
  rewardAccount: Scalars['String']
  /** Applicant's initial role account */
  roleAccount: Scalars['String']
  /** ApplicationId in specific working group module */
  runtimeId: Scalars['Int']
  /** Application stake */
  stake: Scalars['BigInt']
  /** Applicant's initial staking account */
  stakingAccount: Scalars['String']
  /** Current application status */
  status: WorkingGroupApplicationStatus
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedById?: Maybe<Scalars['String']>
  version: Scalars['Int']
  workerapplication?: Maybe<Array<Worker>>
}

export type WorkingGroupApplicationConnection = {
  __typename: 'WorkingGroupApplicationConnection'
  edges: Array<WorkingGroupApplicationEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type WorkingGroupApplicationCreateInput = {
  applicant: Scalars['ID']
  opening: Scalars['ID']
  rewardAccount: Scalars['String']
  roleAccount: Scalars['String']
  runtimeId: Scalars['Float']
  stake: Scalars['String']
  stakingAccount: Scalars['String']
  status: Scalars['JSONObject']
}

export type WorkingGroupApplicationEdge = {
  __typename: 'WorkingGroupApplicationEdge'
  cursor: Scalars['String']
  node: WorkingGroupApplication
}

export enum WorkingGroupApplicationOrderByInput {
  ApplicantAsc = 'applicant_ASC',
  ApplicantDesc = 'applicant_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  OpeningAsc = 'opening_ASC',
  OpeningDesc = 'opening_DESC',
  RewardAccountAsc = 'rewardAccount_ASC',
  RewardAccountDesc = 'rewardAccount_DESC',
  RoleAccountAsc = 'roleAccount_ASC',
  RoleAccountDesc = 'roleAccount_DESC',
  RuntimeIdAsc = 'runtimeId_ASC',
  RuntimeIdDesc = 'runtimeId_DESC',
  StakeAsc = 'stake_ASC',
  StakeDesc = 'stake_DESC',
  StakingAccountAsc = 'stakingAccount_ASC',
  StakingAccountDesc = 'stakingAccount_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type WorkingGroupApplicationStatus =
  | ApplicationStatusAccepted
  | ApplicationStatusCancelled
  | ApplicationStatusPending
  | ApplicationStatusRejected
  | ApplicationStatusWithdrawn

export type WorkingGroupApplicationUpdateInput = {
  applicant?: InputMaybe<Scalars['ID']>
  opening?: InputMaybe<Scalars['ID']>
  rewardAccount?: InputMaybe<Scalars['String']>
  roleAccount?: InputMaybe<Scalars['String']>
  runtimeId?: InputMaybe<Scalars['Float']>
  stake?: InputMaybe<Scalars['String']>
  stakingAccount?: InputMaybe<Scalars['String']>
  status?: InputMaybe<Scalars['JSONObject']>
}

export type WorkingGroupApplicationWhereInput = {
  AND?: InputMaybe<Array<WorkingGroupApplicationWhereInput>>
  OR?: InputMaybe<Array<WorkingGroupApplicationWhereInput>>
  answers_every?: InputMaybe<ApplicationFormQuestionAnswerWhereInput>
  answers_none?: InputMaybe<ApplicationFormQuestionAnswerWhereInput>
  answers_some?: InputMaybe<ApplicationFormQuestionAnswerWhereInput>
  applicant?: InputMaybe<MembershipWhereInput>
  applicationwithdrawneventapplication_every?: InputMaybe<ApplicationWithdrawnEventWhereInput>
  applicationwithdrawneventapplication_none?: InputMaybe<ApplicationWithdrawnEventWhereInput>
  applicationwithdrawneventapplication_some?: InputMaybe<ApplicationWithdrawnEventWhereInput>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  createdInEvent?: InputMaybe<AppliedOnOpeningEventWhereInput>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  opening?: InputMaybe<WorkingGroupOpeningWhereInput>
  rewardAccount_contains?: InputMaybe<Scalars['String']>
  rewardAccount_endsWith?: InputMaybe<Scalars['String']>
  rewardAccount_eq?: InputMaybe<Scalars['String']>
  rewardAccount_in?: InputMaybe<Array<Scalars['String']>>
  rewardAccount_startsWith?: InputMaybe<Scalars['String']>
  roleAccount_contains?: InputMaybe<Scalars['String']>
  roleAccount_endsWith?: InputMaybe<Scalars['String']>
  roleAccount_eq?: InputMaybe<Scalars['String']>
  roleAccount_in?: InputMaybe<Array<Scalars['String']>>
  roleAccount_startsWith?: InputMaybe<Scalars['String']>
  runtimeId_eq?: InputMaybe<Scalars['Int']>
  runtimeId_gt?: InputMaybe<Scalars['Int']>
  runtimeId_gte?: InputMaybe<Scalars['Int']>
  runtimeId_in?: InputMaybe<Array<Scalars['Int']>>
  runtimeId_lt?: InputMaybe<Scalars['Int']>
  runtimeId_lte?: InputMaybe<Scalars['Int']>
  stake_eq?: InputMaybe<Scalars['BigInt']>
  stake_gt?: InputMaybe<Scalars['BigInt']>
  stake_gte?: InputMaybe<Scalars['BigInt']>
  stake_in?: InputMaybe<Array<Scalars['BigInt']>>
  stake_lt?: InputMaybe<Scalars['BigInt']>
  stake_lte?: InputMaybe<Scalars['BigInt']>
  stakingAccount_contains?: InputMaybe<Scalars['String']>
  stakingAccount_endsWith?: InputMaybe<Scalars['String']>
  stakingAccount_eq?: InputMaybe<Scalars['String']>
  stakingAccount_in?: InputMaybe<Array<Scalars['String']>>
  stakingAccount_startsWith?: InputMaybe<Scalars['String']>
  status_json?: InputMaybe<Scalars['JSONObject']>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
  workerapplication_every?: InputMaybe<WorkerWhereInput>
  workerapplication_none?: InputMaybe<WorkerWhereInput>
  workerapplication_some?: InputMaybe<WorkerWhereInput>
}

export type WorkingGroupApplicationWhereUniqueInput = {
  id: Scalars['ID']
}

export type WorkingGroupConnection = {
  __typename: 'WorkingGroupConnection'
  edges: Array<WorkingGroupEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type WorkingGroupCreateInput = {
  budget: Scalars['String']
  leader?: InputMaybe<Scalars['ID']>
  metadata?: InputMaybe<Scalars['ID']>
  name: Scalars['String']
}

export type WorkingGroupEdge = {
  __typename: 'WorkingGroupEdge'
  cursor: Scalars['String']
  node: WorkingGroup
}

export type WorkingGroupMetadata = BaseGraphQlObject & {
  __typename: 'WorkingGroupMetadata'
  /** Working group about text */
  about?: Maybe<Scalars['String']>
  createdAt: Scalars['DateTime']
  createdById: Scalars['String']
  deletedAt?: Maybe<Scalars['DateTime']>
  deletedById?: Maybe<Scalars['String']>
  /** Working group description text */
  description?: Maybe<Scalars['String']>
  group: WorkingGroup
  groupId: Scalars['String']
  id: Scalars['ID']
  setInEvent: StatusTextChangedEvent
  setInEventId: Scalars['String']
  /** Working group status */
  status?: Maybe<Scalars['String']>
  /** Working group status message */
  statusMessage?: Maybe<Scalars['String']>
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedById?: Maybe<Scalars['String']>
  version: Scalars['Int']
  workinggroupmetadata?: Maybe<Array<WorkingGroup>>
}

export type WorkingGroupMetadataActionResult =
  | InvalidActionMetadata
  | UpcomingOpeningAdded
  | UpcomingOpeningRemoved
  | WorkingGroupMetadataSet

export type WorkingGroupMetadataConnection = {
  __typename: 'WorkingGroupMetadataConnection'
  edges: Array<WorkingGroupMetadataEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type WorkingGroupMetadataCreateInput = {
  about?: InputMaybe<Scalars['String']>
  description?: InputMaybe<Scalars['String']>
  group: Scalars['ID']
  setInEvent: Scalars['ID']
  status?: InputMaybe<Scalars['String']>
  statusMessage?: InputMaybe<Scalars['String']>
}

export type WorkingGroupMetadataEdge = {
  __typename: 'WorkingGroupMetadataEdge'
  cursor: Scalars['String']
  node: WorkingGroupMetadata
}

export enum WorkingGroupMetadataOrderByInput {
  AboutAsc = 'about_ASC',
  AboutDesc = 'about_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  GroupAsc = 'group_ASC',
  GroupDesc = 'group_DESC',
  SetInEventAsc = 'setInEvent_ASC',
  SetInEventDesc = 'setInEvent_DESC',
  StatusMessageAsc = 'statusMessage_ASC',
  StatusMessageDesc = 'statusMessage_DESC',
  StatusAsc = 'status_ASC',
  StatusDesc = 'status_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type WorkingGroupMetadataSet = {
  __typename: 'WorkingGroupMetadataSet'
  /** The new metadata snapshot resulting from the update */
  metadata?: Maybe<WorkingGroupMetadata>
}

export type WorkingGroupMetadataUpdateInput = {
  about?: InputMaybe<Scalars['String']>
  description?: InputMaybe<Scalars['String']>
  group?: InputMaybe<Scalars['ID']>
  setInEvent?: InputMaybe<Scalars['ID']>
  status?: InputMaybe<Scalars['String']>
  statusMessage?: InputMaybe<Scalars['String']>
}

export type WorkingGroupMetadataWhereInput = {
  AND?: InputMaybe<Array<WorkingGroupMetadataWhereInput>>
  OR?: InputMaybe<Array<WorkingGroupMetadataWhereInput>>
  about_contains?: InputMaybe<Scalars['String']>
  about_endsWith?: InputMaybe<Scalars['String']>
  about_eq?: InputMaybe<Scalars['String']>
  about_in?: InputMaybe<Array<Scalars['String']>>
  about_startsWith?: InputMaybe<Scalars['String']>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  description_contains?: InputMaybe<Scalars['String']>
  description_endsWith?: InputMaybe<Scalars['String']>
  description_eq?: InputMaybe<Scalars['String']>
  description_in?: InputMaybe<Array<Scalars['String']>>
  description_startsWith?: InputMaybe<Scalars['String']>
  group?: InputMaybe<WorkingGroupWhereInput>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  setInEvent?: InputMaybe<StatusTextChangedEventWhereInput>
  statusMessage_contains?: InputMaybe<Scalars['String']>
  statusMessage_endsWith?: InputMaybe<Scalars['String']>
  statusMessage_eq?: InputMaybe<Scalars['String']>
  statusMessage_in?: InputMaybe<Array<Scalars['String']>>
  statusMessage_startsWith?: InputMaybe<Scalars['String']>
  status_contains?: InputMaybe<Scalars['String']>
  status_endsWith?: InputMaybe<Scalars['String']>
  status_eq?: InputMaybe<Scalars['String']>
  status_in?: InputMaybe<Array<Scalars['String']>>
  status_startsWith?: InputMaybe<Scalars['String']>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
  workinggroupmetadata_every?: InputMaybe<WorkingGroupWhereInput>
  workinggroupmetadata_none?: InputMaybe<WorkingGroupWhereInput>
  workinggroupmetadata_some?: InputMaybe<WorkingGroupWhereInput>
}

export type WorkingGroupMetadataWhereUniqueInput = {
  id: Scalars['ID']
}

export type WorkingGroupOpening = BaseGraphQlObject & {
  __typename: 'WorkingGroupOpening'
  applications: Array<WorkingGroupApplication>
  appliedonopeningeventopening?: Maybe<Array<AppliedOnOpeningEvent>>
  /** Time of opening creation */
  createdAt: Scalars['DateTime']
  createdById: Scalars['String']
  createdInEvent: OpeningAddedEvent
  deletedAt?: Maybe<Scalars['DateTime']>
  deletedById?: Maybe<Scalars['String']>
  group: WorkingGroup
  groupId: Scalars['String']
  id: Scalars['ID']
  metadata: WorkingGroupOpeningMetadata
  metadataId: Scalars['String']
  openingcanceledeventopening?: Maybe<Array<OpeningCanceledEvent>>
  openingfilledeventopening?: Maybe<Array<OpeningFilledEvent>>
  /** Initial workers' reward per block */
  rewardPerBlock: Scalars['BigInt']
  /** OpeningId in specific working group module */
  runtimeId: Scalars['Int']
  /** Min. application/role stake amount */
  stakeAmount: Scalars['BigInt']
  /** Current opening status */
  status: WorkingGroupOpeningStatus
  /** Type of the opening (Leader/Regular) */
  type: WorkingGroupOpeningType
  /** Role stake unstaking period in blocks */
  unstakingPeriod: Scalars['Int']
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedById?: Maybe<Scalars['String']>
  version: Scalars['Int']
}

export type WorkingGroupOpeningConnection = {
  __typename: 'WorkingGroupOpeningConnection'
  edges: Array<WorkingGroupOpeningEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type WorkingGroupOpeningCreateInput = {
  createdAt: Scalars['DateTime']
  group: Scalars['ID']
  metadata: Scalars['ID']
  rewardPerBlock: Scalars['String']
  runtimeId: Scalars['Float']
  stakeAmount: Scalars['String']
  status: Scalars['JSONObject']
  type: WorkingGroupOpeningType
  unstakingPeriod: Scalars['Float']
}

export type WorkingGroupOpeningEdge = {
  __typename: 'WorkingGroupOpeningEdge'
  cursor: Scalars['String']
  node: WorkingGroupOpening
}

export type WorkingGroupOpeningMetadata = BaseGraphQlObject & {
  __typename: 'WorkingGroupOpeningMetadata'
  /** Md-formatted text explaining the application process */
  applicationDetails?: Maybe<Scalars['String']>
  applicationFormQuestions: Array<ApplicationFormQuestion>
  createdAt: Scalars['DateTime']
  createdById: Scalars['String']
  deletedAt?: Maybe<Scalars['DateTime']>
  deletedById?: Maybe<Scalars['String']>
  /** Opening description (md-formatted) */
  description?: Maybe<Scalars['String']>
  /** Expected time when the opening will close */
  expectedEnding?: Maybe<Scalars['DateTime']>
  /** Expected max. number of applicants that will be hired */
  hiringLimit?: Maybe<Scalars['Int']>
  id: Scalars['ID']
  /** Whether the originally provided metadata was valid */
  originallyValid: Scalars['Boolean']
  /** Opening short description */
  shortDescription?: Maybe<Scalars['String']>
  upcomingworkinggroupopeningmetadata?: Maybe<Array<UpcomingWorkingGroupOpening>>
  updatedAt?: Maybe<Scalars['DateTime']>
  updatedById?: Maybe<Scalars['String']>
  version: Scalars['Int']
  workinggroupopeningmetadata?: Maybe<Array<WorkingGroupOpening>>
}

export type WorkingGroupOpeningMetadataConnection = {
  __typename: 'WorkingGroupOpeningMetadataConnection'
  edges: Array<WorkingGroupOpeningMetadataEdge>
  pageInfo: PageInfo
  totalCount: Scalars['Int']
}

export type WorkingGroupOpeningMetadataCreateInput = {
  applicationDetails?: InputMaybe<Scalars['String']>
  description?: InputMaybe<Scalars['String']>
  expectedEnding?: InputMaybe<Scalars['DateTime']>
  hiringLimit?: InputMaybe<Scalars['Float']>
  originallyValid: Scalars['Boolean']
  shortDescription?: InputMaybe<Scalars['String']>
}

export type WorkingGroupOpeningMetadataEdge = {
  __typename: 'WorkingGroupOpeningMetadataEdge'
  cursor: Scalars['String']
  node: WorkingGroupOpeningMetadata
}

export enum WorkingGroupOpeningMetadataOrderByInput {
  ApplicationDetailsAsc = 'applicationDetails_ASC',
  ApplicationDetailsDesc = 'applicationDetails_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  ExpectedEndingAsc = 'expectedEnding_ASC',
  ExpectedEndingDesc = 'expectedEnding_DESC',
  HiringLimitAsc = 'hiringLimit_ASC',
  HiringLimitDesc = 'hiringLimit_DESC',
  OriginallyValidAsc = 'originallyValid_ASC',
  OriginallyValidDesc = 'originallyValid_DESC',
  ShortDescriptionAsc = 'shortDescription_ASC',
  ShortDescriptionDesc = 'shortDescription_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type WorkingGroupOpeningMetadataUpdateInput = {
  applicationDetails?: InputMaybe<Scalars['String']>
  description?: InputMaybe<Scalars['String']>
  expectedEnding?: InputMaybe<Scalars['DateTime']>
  hiringLimit?: InputMaybe<Scalars['Float']>
  originallyValid?: InputMaybe<Scalars['Boolean']>
  shortDescription?: InputMaybe<Scalars['String']>
}

export type WorkingGroupOpeningMetadataWhereInput = {
  AND?: InputMaybe<Array<WorkingGroupOpeningMetadataWhereInput>>
  OR?: InputMaybe<Array<WorkingGroupOpeningMetadataWhereInput>>
  applicationDetails_contains?: InputMaybe<Scalars['String']>
  applicationDetails_endsWith?: InputMaybe<Scalars['String']>
  applicationDetails_eq?: InputMaybe<Scalars['String']>
  applicationDetails_in?: InputMaybe<Array<Scalars['String']>>
  applicationDetails_startsWith?: InputMaybe<Scalars['String']>
  applicationFormQuestions_every?: InputMaybe<ApplicationFormQuestionWhereInput>
  applicationFormQuestions_none?: InputMaybe<ApplicationFormQuestionWhereInput>
  applicationFormQuestions_some?: InputMaybe<ApplicationFormQuestionWhereInput>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  description_contains?: InputMaybe<Scalars['String']>
  description_endsWith?: InputMaybe<Scalars['String']>
  description_eq?: InputMaybe<Scalars['String']>
  description_in?: InputMaybe<Array<Scalars['String']>>
  description_startsWith?: InputMaybe<Scalars['String']>
  expectedEnding_eq?: InputMaybe<Scalars['DateTime']>
  expectedEnding_gt?: InputMaybe<Scalars['DateTime']>
  expectedEnding_gte?: InputMaybe<Scalars['DateTime']>
  expectedEnding_lt?: InputMaybe<Scalars['DateTime']>
  expectedEnding_lte?: InputMaybe<Scalars['DateTime']>
  hiringLimit_eq?: InputMaybe<Scalars['Int']>
  hiringLimit_gt?: InputMaybe<Scalars['Int']>
  hiringLimit_gte?: InputMaybe<Scalars['Int']>
  hiringLimit_in?: InputMaybe<Array<Scalars['Int']>>
  hiringLimit_lt?: InputMaybe<Scalars['Int']>
  hiringLimit_lte?: InputMaybe<Scalars['Int']>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  originallyValid_eq?: InputMaybe<Scalars['Boolean']>
  originallyValid_in?: InputMaybe<Array<Scalars['Boolean']>>
  shortDescription_contains?: InputMaybe<Scalars['String']>
  shortDescription_endsWith?: InputMaybe<Scalars['String']>
  shortDescription_eq?: InputMaybe<Scalars['String']>
  shortDescription_in?: InputMaybe<Array<Scalars['String']>>
  shortDescription_startsWith?: InputMaybe<Scalars['String']>
  upcomingworkinggroupopeningmetadata_every?: InputMaybe<UpcomingWorkingGroupOpeningWhereInput>
  upcomingworkinggroupopeningmetadata_none?: InputMaybe<UpcomingWorkingGroupOpeningWhereInput>
  upcomingworkinggroupopeningmetadata_some?: InputMaybe<UpcomingWorkingGroupOpeningWhereInput>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
  workinggroupopeningmetadata_every?: InputMaybe<WorkingGroupOpeningWhereInput>
  workinggroupopeningmetadata_none?: InputMaybe<WorkingGroupOpeningWhereInput>
  workinggroupopeningmetadata_some?: InputMaybe<WorkingGroupOpeningWhereInput>
}

export type WorkingGroupOpeningMetadataWhereUniqueInput = {
  id: Scalars['ID']
}

export enum WorkingGroupOpeningOrderByInput {
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  GroupAsc = 'group_ASC',
  GroupDesc = 'group_DESC',
  MetadataAsc = 'metadata_ASC',
  MetadataDesc = 'metadata_DESC',
  RewardPerBlockAsc = 'rewardPerBlock_ASC',
  RewardPerBlockDesc = 'rewardPerBlock_DESC',
  RuntimeIdAsc = 'runtimeId_ASC',
  RuntimeIdDesc = 'runtimeId_DESC',
  StakeAmountAsc = 'stakeAmount_ASC',
  StakeAmountDesc = 'stakeAmount_DESC',
  TypeAsc = 'type_ASC',
  TypeDesc = 'type_DESC',
  UnstakingPeriodAsc = 'unstakingPeriod_ASC',
  UnstakingPeriodDesc = 'unstakingPeriod_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type WorkingGroupOpeningStatus = OpeningStatusCancelled | OpeningStatusFilled | OpeningStatusOpen

export enum WorkingGroupOpeningType {
  Leader = 'LEADER',
  Regular = 'REGULAR',
}

export type WorkingGroupOpeningUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>
  group?: InputMaybe<Scalars['ID']>
  metadata?: InputMaybe<Scalars['ID']>
  rewardPerBlock?: InputMaybe<Scalars['String']>
  runtimeId?: InputMaybe<Scalars['Float']>
  stakeAmount?: InputMaybe<Scalars['String']>
  status?: InputMaybe<Scalars['JSONObject']>
  type?: InputMaybe<WorkingGroupOpeningType>
  unstakingPeriod?: InputMaybe<Scalars['Float']>
}

export type WorkingGroupOpeningWhereInput = {
  AND?: InputMaybe<Array<WorkingGroupOpeningWhereInput>>
  OR?: InputMaybe<Array<WorkingGroupOpeningWhereInput>>
  applications_every?: InputMaybe<WorkingGroupApplicationWhereInput>
  applications_none?: InputMaybe<WorkingGroupApplicationWhereInput>
  applications_some?: InputMaybe<WorkingGroupApplicationWhereInput>
  appliedonopeningeventopening_every?: InputMaybe<AppliedOnOpeningEventWhereInput>
  appliedonopeningeventopening_none?: InputMaybe<AppliedOnOpeningEventWhereInput>
  appliedonopeningeventopening_some?: InputMaybe<AppliedOnOpeningEventWhereInput>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  createdInEvent?: InputMaybe<OpeningAddedEventWhereInput>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  group?: InputMaybe<WorkingGroupWhereInput>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  metadata?: InputMaybe<WorkingGroupOpeningMetadataWhereInput>
  openingcanceledeventopening_every?: InputMaybe<OpeningCanceledEventWhereInput>
  openingcanceledeventopening_none?: InputMaybe<OpeningCanceledEventWhereInput>
  openingcanceledeventopening_some?: InputMaybe<OpeningCanceledEventWhereInput>
  openingfilledeventopening_every?: InputMaybe<OpeningFilledEventWhereInput>
  openingfilledeventopening_none?: InputMaybe<OpeningFilledEventWhereInput>
  openingfilledeventopening_some?: InputMaybe<OpeningFilledEventWhereInput>
  rewardPerBlock_eq?: InputMaybe<Scalars['BigInt']>
  rewardPerBlock_gt?: InputMaybe<Scalars['BigInt']>
  rewardPerBlock_gte?: InputMaybe<Scalars['BigInt']>
  rewardPerBlock_in?: InputMaybe<Array<Scalars['BigInt']>>
  rewardPerBlock_lt?: InputMaybe<Scalars['BigInt']>
  rewardPerBlock_lte?: InputMaybe<Scalars['BigInt']>
  runtimeId_eq?: InputMaybe<Scalars['Int']>
  runtimeId_gt?: InputMaybe<Scalars['Int']>
  runtimeId_gte?: InputMaybe<Scalars['Int']>
  runtimeId_in?: InputMaybe<Array<Scalars['Int']>>
  runtimeId_lt?: InputMaybe<Scalars['Int']>
  runtimeId_lte?: InputMaybe<Scalars['Int']>
  stakeAmount_eq?: InputMaybe<Scalars['BigInt']>
  stakeAmount_gt?: InputMaybe<Scalars['BigInt']>
  stakeAmount_gte?: InputMaybe<Scalars['BigInt']>
  stakeAmount_in?: InputMaybe<Array<Scalars['BigInt']>>
  stakeAmount_lt?: InputMaybe<Scalars['BigInt']>
  stakeAmount_lte?: InputMaybe<Scalars['BigInt']>
  status_json?: InputMaybe<Scalars['JSONObject']>
  type_eq?: InputMaybe<WorkingGroupOpeningType>
  type_in?: InputMaybe<Array<WorkingGroupOpeningType>>
  unstakingPeriod_eq?: InputMaybe<Scalars['Int']>
  unstakingPeriod_gt?: InputMaybe<Scalars['Int']>
  unstakingPeriod_gte?: InputMaybe<Scalars['Int']>
  unstakingPeriod_in?: InputMaybe<Array<Scalars['Int']>>
  unstakingPeriod_lt?: InputMaybe<Scalars['Int']>
  unstakingPeriod_lte?: InputMaybe<Scalars['Int']>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
}

export type WorkingGroupOpeningWhereUniqueInput = {
  id: Scalars['ID']
}

export enum WorkingGroupOrderByInput {
  BudgetAsc = 'budget_ASC',
  BudgetDesc = 'budget_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  DeletedAtAsc = 'deletedAt_ASC',
  DeletedAtDesc = 'deletedAt_DESC',
  LeaderAsc = 'leader_ASC',
  LeaderDesc = 'leader_DESC',
  MetadataAsc = 'metadata_ASC',
  MetadataDesc = 'metadata_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type WorkingGroupUpdateInput = {
  budget?: InputMaybe<Scalars['String']>
  leader?: InputMaybe<Scalars['ID']>
  metadata?: InputMaybe<Scalars['ID']>
  name?: InputMaybe<Scalars['String']>
}

export type WorkingGroupWhereInput = {
  AND?: InputMaybe<Array<WorkingGroupWhereInput>>
  OR?: InputMaybe<Array<WorkingGroupWhereInput>>
  applicationwithdrawneventgroup_every?: InputMaybe<ApplicationWithdrawnEventWhereInput>
  applicationwithdrawneventgroup_none?: InputMaybe<ApplicationWithdrawnEventWhereInput>
  applicationwithdrawneventgroup_some?: InputMaybe<ApplicationWithdrawnEventWhereInput>
  appliedonopeningeventgroup_every?: InputMaybe<AppliedOnOpeningEventWhereInput>
  appliedonopeningeventgroup_none?: InputMaybe<AppliedOnOpeningEventWhereInput>
  appliedonopeningeventgroup_some?: InputMaybe<AppliedOnOpeningEventWhereInput>
  budget_eq?: InputMaybe<Scalars['BigInt']>
  budget_gt?: InputMaybe<Scalars['BigInt']>
  budget_gte?: InputMaybe<Scalars['BigInt']>
  budget_in?: InputMaybe<Array<Scalars['BigInt']>>
  budget_lt?: InputMaybe<Scalars['BigInt']>
  budget_lte?: InputMaybe<Scalars['BigInt']>
  budgetseteventgroup_every?: InputMaybe<BudgetSetEventWhereInput>
  budgetseteventgroup_none?: InputMaybe<BudgetSetEventWhereInput>
  budgetseteventgroup_some?: InputMaybe<BudgetSetEventWhereInput>
  budgetspendingeventgroup_every?: InputMaybe<BudgetSpendingEventWhereInput>
  budgetspendingeventgroup_none?: InputMaybe<BudgetSpendingEventWhereInput>
  budgetspendingeventgroup_some?: InputMaybe<BudgetSpendingEventWhereInput>
  createdAt_eq?: InputMaybe<Scalars['DateTime']>
  createdAt_gt?: InputMaybe<Scalars['DateTime']>
  createdAt_gte?: InputMaybe<Scalars['DateTime']>
  createdAt_lt?: InputMaybe<Scalars['DateTime']>
  createdAt_lte?: InputMaybe<Scalars['DateTime']>
  createdById_eq?: InputMaybe<Scalars['ID']>
  createdById_in?: InputMaybe<Array<Scalars['ID']>>
  deletedAt_all?: InputMaybe<Scalars['Boolean']>
  deletedAt_eq?: InputMaybe<Scalars['DateTime']>
  deletedAt_gt?: InputMaybe<Scalars['DateTime']>
  deletedAt_gte?: InputMaybe<Scalars['DateTime']>
  deletedAt_lt?: InputMaybe<Scalars['DateTime']>
  deletedAt_lte?: InputMaybe<Scalars['DateTime']>
  deletedById_eq?: InputMaybe<Scalars['ID']>
  deletedById_in?: InputMaybe<Array<Scalars['ID']>>
  id_eq?: InputMaybe<Scalars['ID']>
  id_in?: InputMaybe<Array<Scalars['ID']>>
  leader?: InputMaybe<WorkerWhereInput>
  leaderseteventgroup_every?: InputMaybe<LeaderSetEventWhereInput>
  leaderseteventgroup_none?: InputMaybe<LeaderSetEventWhereInput>
  leaderseteventgroup_some?: InputMaybe<LeaderSetEventWhereInput>
  leaderunseteventgroup_every?: InputMaybe<LeaderUnsetEventWhereInput>
  leaderunseteventgroup_none?: InputMaybe<LeaderUnsetEventWhereInput>
  leaderunseteventgroup_some?: InputMaybe<LeaderUnsetEventWhereInput>
  metadata?: InputMaybe<WorkingGroupMetadataWhereInput>
  name_contains?: InputMaybe<Scalars['String']>
  name_endsWith?: InputMaybe<Scalars['String']>
  name_eq?: InputMaybe<Scalars['String']>
  name_in?: InputMaybe<Array<Scalars['String']>>
  name_startsWith?: InputMaybe<Scalars['String']>
  newmissedrewardlevelreachedeventgroup_every?: InputMaybe<NewMissedRewardLevelReachedEventWhereInput>
  newmissedrewardlevelreachedeventgroup_none?: InputMaybe<NewMissedRewardLevelReachedEventWhereInput>
  newmissedrewardlevelreachedeventgroup_some?: InputMaybe<NewMissedRewardLevelReachedEventWhereInput>
  openingaddedeventgroup_every?: InputMaybe<OpeningAddedEventWhereInput>
  openingaddedeventgroup_none?: InputMaybe<OpeningAddedEventWhereInput>
  openingaddedeventgroup_some?: InputMaybe<OpeningAddedEventWhereInput>
  openingcanceledeventgroup_every?: InputMaybe<OpeningCanceledEventWhereInput>
  openingcanceledeventgroup_none?: InputMaybe<OpeningCanceledEventWhereInput>
  openingcanceledeventgroup_some?: InputMaybe<OpeningCanceledEventWhereInput>
  openingfilledeventgroup_every?: InputMaybe<OpeningFilledEventWhereInput>
  openingfilledeventgroup_none?: InputMaybe<OpeningFilledEventWhereInput>
  openingfilledeventgroup_some?: InputMaybe<OpeningFilledEventWhereInput>
  openings_every?: InputMaybe<WorkingGroupOpeningWhereInput>
  openings_none?: InputMaybe<WorkingGroupOpeningWhereInput>
  openings_some?: InputMaybe<WorkingGroupOpeningWhereInput>
  rewardpaideventgroup_every?: InputMaybe<RewardPaidEventWhereInput>
  rewardpaideventgroup_none?: InputMaybe<RewardPaidEventWhereInput>
  rewardpaideventgroup_some?: InputMaybe<RewardPaidEventWhereInput>
  stakedecreasedeventgroup_every?: InputMaybe<StakeDecreasedEventWhereInput>
  stakedecreasedeventgroup_none?: InputMaybe<StakeDecreasedEventWhereInput>
  stakedecreasedeventgroup_some?: InputMaybe<StakeDecreasedEventWhereInput>
  stakeincreasedeventgroup_every?: InputMaybe<StakeIncreasedEventWhereInput>
  stakeincreasedeventgroup_none?: InputMaybe<StakeIncreasedEventWhereInput>
  stakeincreasedeventgroup_some?: InputMaybe<StakeIncreasedEventWhereInput>
  stakeslashedeventgroup_every?: InputMaybe<StakeSlashedEventWhereInput>
  stakeslashedeventgroup_none?: InputMaybe<StakeSlashedEventWhereInput>
  stakeslashedeventgroup_some?: InputMaybe<StakeSlashedEventWhereInput>
  statustextchangedeventgroup_every?: InputMaybe<StatusTextChangedEventWhereInput>
  statustextchangedeventgroup_none?: InputMaybe<StatusTextChangedEventWhereInput>
  statustextchangedeventgroup_some?: InputMaybe<StatusTextChangedEventWhereInput>
  terminatedleadereventgroup_every?: InputMaybe<TerminatedLeaderEventWhereInput>
  terminatedleadereventgroup_none?: InputMaybe<TerminatedLeaderEventWhereInput>
  terminatedleadereventgroup_some?: InputMaybe<TerminatedLeaderEventWhereInput>
  terminatedworkereventgroup_every?: InputMaybe<TerminatedWorkerEventWhereInput>
  terminatedworkereventgroup_none?: InputMaybe<TerminatedWorkerEventWhereInput>
  terminatedworkereventgroup_some?: InputMaybe<TerminatedWorkerEventWhereInput>
  upcomingworkinggroupopeninggroup_every?: InputMaybe<UpcomingWorkingGroupOpeningWhereInput>
  upcomingworkinggroupopeninggroup_none?: InputMaybe<UpcomingWorkingGroupOpeningWhereInput>
  upcomingworkinggroupopeninggroup_some?: InputMaybe<UpcomingWorkingGroupOpeningWhereInput>
  updatedAt_eq?: InputMaybe<Scalars['DateTime']>
  updatedAt_gt?: InputMaybe<Scalars['DateTime']>
  updatedAt_gte?: InputMaybe<Scalars['DateTime']>
  updatedAt_lt?: InputMaybe<Scalars['DateTime']>
  updatedAt_lte?: InputMaybe<Scalars['DateTime']>
  updatedById_eq?: InputMaybe<Scalars['ID']>
  updatedById_in?: InputMaybe<Array<Scalars['ID']>>
  workerexitedeventgroup_every?: InputMaybe<WorkerExitedEventWhereInput>
  workerexitedeventgroup_none?: InputMaybe<WorkerExitedEventWhereInput>
  workerexitedeventgroup_some?: InputMaybe<WorkerExitedEventWhereInput>
  workerrewardaccountupdatedeventgroup_every?: InputMaybe<WorkerRewardAccountUpdatedEventWhereInput>
  workerrewardaccountupdatedeventgroup_none?: InputMaybe<WorkerRewardAccountUpdatedEventWhereInput>
  workerrewardaccountupdatedeventgroup_some?: InputMaybe<WorkerRewardAccountUpdatedEventWhereInput>
  workerrewardamountupdatedeventgroup_every?: InputMaybe<WorkerRewardAmountUpdatedEventWhereInput>
  workerrewardamountupdatedeventgroup_none?: InputMaybe<WorkerRewardAmountUpdatedEventWhereInput>
  workerrewardamountupdatedeventgroup_some?: InputMaybe<WorkerRewardAmountUpdatedEventWhereInput>
  workerroleaccountupdatedeventgroup_every?: InputMaybe<WorkerRoleAccountUpdatedEventWhereInput>
  workerroleaccountupdatedeventgroup_none?: InputMaybe<WorkerRoleAccountUpdatedEventWhereInput>
  workerroleaccountupdatedeventgroup_some?: InputMaybe<WorkerRoleAccountUpdatedEventWhereInput>
  workers_every?: InputMaybe<WorkerWhereInput>
  workers_none?: InputMaybe<WorkerWhereInput>
  workers_some?: InputMaybe<WorkerWhereInput>
  workerstartedleavingeventgroup_every?: InputMaybe<WorkerStartedLeavingEventWhereInput>
  workerstartedleavingeventgroup_none?: InputMaybe<WorkerStartedLeavingEventWhereInput>
  workerstartedleavingeventgroup_some?: InputMaybe<WorkerStartedLeavingEventWhereInput>
  workinggroupmetadatagroup_every?: InputMaybe<WorkingGroupMetadataWhereInput>
  workinggroupmetadatagroup_none?: InputMaybe<WorkingGroupMetadataWhereInput>
  workinggroupmetadatagroup_some?: InputMaybe<WorkingGroupMetadataWhereInput>
}

export type WorkingGroupWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>
  name?: InputMaybe<Scalars['String']>
}
