import React from 'react'
import ScorePieChart from './components/Graphs/ScorePieChart'
import RegressionPieChart from './components/Graphs/RegressionPieChart'

export const ACTIVITIES_DATA = [
  {
    id: 0,
    title: 'Mera Sansaad Sanities',
    activityInfo:
      'Performed rounds of testing and daily sanity on Prod for Mera Sansaad.',
    otherData: [
      { key: 'Sanity Count', value: '12' },
      { key: 'PDT Count', value: '3' },
    ],
    members: [{ key: 'Lead(s)', value: ['Anagha.Shinde'] }],
    chart: true,
    chartComponent: React.createElement(ScorePieChart),
  },
  {
    id: 1,
    title: 'NM App Revamp Testing',
    activityInfo:
      'Phase 1 of the NaMo UI/UX revamp introduces a web app version featuring a Reels-like experience.',
    otherData: [],
    members: [{ key: 'Lead(s)', value: ['Vishnu1.Menon'] }],
    chart: false,
  },
  {
    id: 2,
    title: 'Sprint 12 regression testing',
    activityInfo:
      'Testing multiple test suites and assigning the status accordingly',
    otherData: [{ key: 'Testcases Count', value: '2000+' }],
    members: [{ key: 'Lead(s)', value: ['Bhavya.Momaya', 'Dhiraj.Kunder'] }],
    chart: true,
    chartComponent: React.createElement(RegressionPieChart),
  },
  {
    id: 3,
    title: 'Image Dataset Task (Al Model Training)',
    activityInfo: 'Collecting various pictures in order train the Al model.',
    otherData: [],
    members: [{ key: 'Lead(s)', value: ['Anagha.Shinde'] }],
    chart: false,
  },
  {
    id: 4,
    title: 'KT Session for New members',
    activityInfo:
      'KT sessions were conducted to provide insights of project to the new members of team.',
    otherData: [],
    members: [{ key: 'Lead(s)', value: ['Simran.Surve', 'Avinash10.Gupta'] }],
    chart: false,
  },
  {
    id: 5,
    title: 'NaMo Al Hindi Toggle Test Case Review',
    activityInfo:
      'Reviewed and created scenarios and test cases for the new NaMo Al Hindi language toggle user story.',
    otherData: [],
    members: [{ key: 'Lead(s)', value: ['Bhavya.Momaya', 'Dhiraj.Kunder'] }],
    chart: false,
  },
  {
    id: 6,
    title: 'NM Revamp User Story',
    activityInfo:
      'Discussed and explained the new user story of Namo app revamp module.',
    otherData: [],
    members: [],
    chart: false,
  },
  {
    id: 7,
    title: 'RnR activities and Onam Dance',
    activityInfo: null,
    otherData: [],
    members: [
      {
        key: 'Participants',
        value: ['Simran.Surve', 'Nikita.Sonawane', 'Avinash10.Gupta'],
      },
    ],
    chart: false,
  },
]
