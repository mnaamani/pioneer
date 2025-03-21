import { Meta, Story } from '@storybook/react'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'

import { getMember } from '../../../../test/_mocks/members'

import { ProposalList, ProposalListProps } from '.'

export default {
  title: 'Proposals/ProposalList',
  component: ProposalList,
} as Meta

const Template: Story<ProposalListProps> = (args) => (
  <MemoryRouter>
    <ProposalList {...args} />
  </MemoryRouter>
)

export const Default = Template.bind({})
Default.args = {
  proposals: [
    {
      createdAt: '2021-06-11T16:26:04.129Z',
      type: 'setWorkingGroupLeadReward',
      id: '0',
      proposer: getMember('alice'),
      status: 'deciding',
      title: 'firewall Stand-alone set Checking',
      councilApprovals: 0,
    },
    {
      createdAt: '2021-05-31T03:15:57.037Z',
      type: 'editBlogPost',
      id: '1',
      proposer: getMember('bob'),
      status: 'deciding',
      title: 'Computer Directives grey Clothing',
      councilApprovals: 0,
    },
  ],
}

export const Past = Template.bind({})
Past.args = {
  proposals: [
    {
      createdAt: '2021-06-11T16:26:04.129Z',
      endedAt: '2021-06-11T16:26:04.129Z',
      type: 'setWorkingGroupLeadReward',
      id: '0',
      proposer: getMember('alice'),
      status: 'slashed',
      title: 'firewall Stand-alone set Checking',
      councilApprovals: 0,
    },
    {
      createdAt: '2021-05-31T03:15:57.037Z',
      endedAt: '2021-06-11T16:26:04.129Z',
      type: 'editBlogPost',
      id: '1',
      proposer: getMember('bob'),
      status: 'vetoed',
      title: 'Computer Directives grey Clothing',
      councilApprovals: 0,
    },
  ],
}
