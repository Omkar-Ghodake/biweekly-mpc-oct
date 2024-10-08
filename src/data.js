import React from 'react'
import ScorePieChart from './components/Graphs/ScorePieChart'
import RegressionPieChart from './components/Graphs/RegressionPieChart'

export const ACTIVITIES_DATA = [
  {
    title: 'Mera Sansaad Sanities',
    activityInfo:
      'Performed rounds of testing and daily sanity on Prod for Mera Sansaad.',
    otherData: [
      { key: 'Sanity Count', value: '12' },
      { key: 'PDT Count', value: '3' },
    ],
    members: [{ key: 'Lead(s)', value: ['Anagha.Shinde'] }],
    chartComponent: React.createElement(ScorePieChart),
  },
  {
    title: 'NM Revamp User Story',
    activityInfo:
      'Discussed and explained the new user story of Namo app revamp module.',
    otherData: [],
    members: [{ key: 'Lead(s)', value: ['Bhavya.Momaya'] }],
  },
  {
    title: 'NM App Revamp Testing',
    activityInfo:
      'NaMo Revamp launched a web app with a user experience similar to Reels.',
    otherData: [],
    members: [{ key: 'Lead(s)', value: ['Vishnu1.Menon'] }],
  },
  {
    title: 'Sprint 12 regression testing',
    activityInfo:
      'Testing multiple test suites and assigning the status accordingly',
    otherData: [{ key: 'Testcases Count', value: '2000+' }],
    members: [{ key: 'Lead(s)', value: ['Dhiraj.Kunder'] }],
    chartComponent: React.createElement(RegressionPieChart),
  },
  {
    title: 'Image Dataset Task (AI Model Training)',
    activityInfo: 'Collecting various pictures in order to train the AI model.',
    otherData: [],
    members: [{ key: 'Lead(s)', value: ['Anagha.Shinde'] }],
  },
  {
    title: 'NaMo AI Hindi Toggle Test Case Review',
    activityInfo:
      'Reviewed and created scenarios and test cases for the new NaMo AI Hindi language toggle user story.',
    otherData: [],
    members: [{ key: 'Lead(s)', value: ['Bhavya.Momaya'] }],
  },
  {
    title: 'KT Session for New members',
    activityInfo:
      'KT sessions were conducted to provide insights of the project to new members of team.',
    otherData: [],
    members: [{ key: 'Lead(s)', value: ['Simran.Surve', 'Avinash10.Gupta'] }],
  },
  {
    title: 'Extra Activities',
    activityInfo:
      'Some of the team members participated in RnR activities and Onam celebration.',
    otherData: [],
    members: [
      {
        key: 'Participants',
        value: ['Simran.Surve', 'Nikita.Sonawane', 'Avinash10.Gupta'],
      },
    ],
  },
]
