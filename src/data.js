import React from 'react'
import ScorePieChart from './components/Graphs/ScorePieChart'
import RegressionPieChart from './components/Graphs/RegressionPieChart'
import nm_revamp_user_story_img from './assets/NM_Revamp_User_Story.png'
import nm_revamp_testing_img from './assets/NM_Revamp_Testing.png'
import training_ai_model_img from './assets/Training_AI_Model.png'
import namo_ai_img from './assets/Namo_AI.png'
import kt_session_img from './assets/KT_Session.png'
import extra_activities_img from './assets/Extra_Activities.png'

export const ACTIVITIES_DATA = [
  {
    title: 'Mera Sansaad Sanities',
    activityInfo:
      'Performed rounds of testing and daily sanity on Prod for Mera Sansaad.',
    otherData: [
      { key: 'Sanity Count', value: '12' },
      { key: 'PDT Count', value: '3' },
      { key: 'Issue Count', value: '62' },
    ],
    imgUrl: null,
    members: [{ key: 'Lead(s)', value: ['Anagha.Shinde'] }],
    chartComponent: React.createElement(ScorePieChart),
  },
  {
    title: 'NM Revamp User Story',
    activityInfo:
      'Discussed and explained the new user story of Namo app revamp module.',
    otherData: [],
    imgUrl: nm_revamp_user_story_img,
    members: [{ key: 'Lead(s)', value: ['Bhavya.Momaya'] }],
  },
  {
    title: 'NM App Revamp Testing',
    activityInfo:
      'NaMo Revamp launched a web app with a user experience similar to Reels.',
    otherData: [],
    imgUrl: nm_revamp_testing_img,
    members: [{ key: 'Lead(s)', value: ['Vishnu1.Menon'] }],
  },
  {
    title: 'Sprint 12 regression testing',
    activityInfo:
      'Testing multiple test suites and assigning the status accordingly',
    otherData: [{ key: 'Testcases Count', value: '2000+' }],
    imgUrl: null,
    members: [{ key: 'Lead(s)', value: ['Dhiraj.Kunder'] }],
    chartComponent: React.createElement(RegressionPieChart),
  },
  {
    title: 'Image Dataset Task (AI Model Training)',
    activityInfo: 'Collecting various pictures in order to train the AI model.',
    otherData: [],
    imgUrl: training_ai_model_img,
    members: [{ key: 'Lead(s)', value: ['Anagha.Shinde'] }],
  },
  {
    title: 'NaMo AI Hindi Toggle Test Case Review',
    activityInfo:
      'Reviewed and created scenarios and test cases for the new NaMo AI Hindi language toggle user story.',
    otherData: [],
    imgUrl: namo_ai_img,
    members: [{ key: 'Lead(s)', value: ['Bhavya.Momaya'] }],
  },
  {
    title: 'KT Session for New members',
    activityInfo:
      'KT sessions were conducted to provide insights of the project to new members of team.',
    otherData: [],
    imgUrl: kt_session_img,
    members: [{ key: 'Lead(s)', value: ['Simran.Surve', 'Avinash10.Gupta'] }],
  },
  {
    title: 'Extra Activities',
    activityInfo:
      'Some of the team members participated in RnR activities and Onam celebration.',
    otherData: [],
    imgUrl: extra_activities_img,
    members: [
      {
        key: 'Members',
        value: ['Simran.Surve', 'Nikita.Sonawane', 'Avinash10.Gupta'],
      },
    ],
  },
]

export const TABLE_DATA = [
  {
    'Created By': 'Vishnu1.Menon',
    Blocker: 1,
    Critical: 2,
    Major: 8,
    Minor: 0,
    Normal: 2,
    'Issue Count': 13,
    Score: 72,
  },

  {
    'Created By': 'Anushree1.Shukla',
    Blocker: 0,
    Critical: 5,
    Major: 3,
    Minor: 0,
    Normal: 1,
    'Issue Count': 9,
    Score: 58,
  },

  {
    'Created By': 'Anagha.Shinde',
    Blocker: 2,
    Critical: 2,
    Major: 3,
    Minor: 0,
    Normal: 2,
    'Issue Count': 9,
    Score: 57,
  },

  {
    'Created By': 'Dhiraj.Kunder',
    Blocker: 1,
    Critical: 2,
    Major: 1,
    Minor: 2,
    Normal: 2,
    'Issue Count': 8,
    Score: 39,
  },

  {
    'Created By': 'Bhavya.Momaya',
    Blocker: 0,
    Critical: 1,
    Major: 4,
    Minor: 0,
    Normal: 2,
    'Issue Count': 7,
    Score: 34,
  },

  {
    'Created By': 'Avinash10.Gupta',
    Blocker: 1,
    Critical: 2,
    Major: 0,
    Minor: 1,
    Normal: 3,
    'Issue Count': 7,
    Score: 36,
  },

  {
    'Created By': 'Simran.Surve',
    Blocker: 0,
    Critical: 2,
    Major: 1,
    Minor: 2,
    Normal: 3,
    'Issue Count': 8,
    Score: 32,
  },

  {
    'Created By': 'Umakant.Patil',
    Blocker: 0,
    Critical: 1,
    Major: 1,
    Minor: 1,
    Normal: 2,
    'Issue Count': 5,
    Score: 20,
  },

  {
    'Created By': 'Mridul.Upadhya',
    Blocker: 0,
    Critical: 0,
    Major: 3,
    Minor: 1,
    Normal: 1,
    'Issue Count': 5,
    Score: 19,
  },

  {
    'Created By': 'Pratik5.Joshi',
    Blocker: 0,
    Critical: 1,
    Major: 0,
    Minor: 0,
    Normal: 0,
    'Issue Count': 1,
    Score: 8,
  },

  {
    'Created By': 'Omkar.Ghodake',
    Blocker: 0,
    Critical: 0,
    Major: 1,
    Minor: 0,
    Normal: 1,
    'Issue Count': 2,
    Score: 8,
  },

  {
    'Created By': 'Shubham2.Joshi',
    Blocker: 0,
    Critical: 0,
    Major: 1,
    Minor: 0,
    Normal: 0,
    'Issue Count': 1,
    Score: 5,
  },

  {
    'Created By': 'Devraj3.Singh',
    Blocker: 0,
    Critical: 0,
    Major: 0,
    Minor: 0,
    Normal: 1,
    'Issue Count': 1,
    Score: 3,
  },

  {
    'Created By': 'Jaypal.Koli',
    Blocker: 0,
    Critical: 0,
    Major: 0,
    Minor: 0,
    Normal: 1,
    'Issue Count': 1,
    Score: 3,
  },

  {
    'Created By': 'Sanjeev2.Prajapati',
    Blocker: 0,
    Critical: 0,
    Major: 0,
    Minor: 0,
    Normal: 1,
    'Issue Count': 1,
    Score: 3,
  },

  {
    'Created By': 'Sakshi1.Rai',
    Blocker: 0,
    Critical: 0,
    Major: 0,
    Minor: 2,
    Normal: 0,
    'Issue Count': 2,
    Score: 2,
  },

  {
    'Created By': 'Manoj.Inbarajan',
    Blocker: 0,
    Critical: 0,
    Major: 0,
    Minor: 0,
    Normal: 0,
    'Issue Count': 0,
    Score: 0,
  },

  {
    'Created By': 'Nikita.Sonawane',
    Blocker: 0,
    Critical: 0,
    Major: 0,
    Minor: 0,
    Normal: 0,
    'Issue Count': 0,
    Score: 0,
  },

  {
    'Created By': 'Nikita.Suhane',
    Blocker: 0,
    Critical: 0,
    Major: 0,
    Minor: 0,
    Normal: 0,
    'Issue Count': 0,
    Score: 0,
  },

  {
    'Created By': 'Prathwikumar.S',
    Blocker: 0,
    Critical: 0,
    Major: 0,
    Minor: 0,
    Normal: 0,
    'Issue Count': 0,
    Score: 0,
  },

  {
    'Created By': 'Rishabh.Kanaujiya',
    Blocker: 0,
    Critical: 0,
    Major: 0,
    Minor: 0,
    Normal: 0,
    'Issue Count': 0,
    Score: 0,
  },

  {
    'Created By': 'Shriyash.Thorat',
    Blocker: 0,
    Critical: 0,
    Major: 0,
    Minor: 0,
    Normal: 0,
    'Issue Count': 0,
    Score: 0,
  },

  {
    'Created By': 'Grand Total',
    Blocker: 5,
    Critical: 18,
    Major: 26,
    Minor: 9,

    Normal: 22,
    'Issue Count': 80,

    Score: 399,
  },
]

export const CARDS_DATA = [
  {
    emp_id: '55093251',
    name: 'Vishnu Menon',
    score_count: 72,
    image: 'images/Vishnu1.Menon.png',
    pre_score: 41,
    prev_team: 'NA',
    courses: [
      '1. Programming with Google Go',
      '2. AWS Cloud Technical Essentials',
      '3. Introduction to Generative AI',
    ],
  },
  {
    emp_id: '55093186',
    name: 'Anushree Shukla',
    score_count: 58,
    image: 'images/Anushree1.Shuklaa.png',
    pre_score: 44,
    prev_team: 'NA',
    courses: [
      '1. Database Structures and Management with MySQL',
      '2. Microsoft Power BI Data Analyst Professional Certificate',
      '3. Google Data Analytics',
    ],
  },
  {
    emp_id: '55093230',
    name: 'Anagha Shinde',
    score_count: 57,
    image: 'images/Anagha.Shinde.png',
    pre_score: 43,
    prev_team: 'NA',
    courses: [
      '1. Becoming a Product Manager: A Complete Guide',
      '2. Using AI in UX Design Process',
      '3. Design Thinking for UX design Managers',
    ],
  },
  {
    emp_id: '55087655',
    name: 'Dhiraj Kunder',
    score_count: 39,
    image: 'images/Dhiraj.Kunder.jpg',
    pre_score: 39,
    prev_team: 'NA',
    courses: [
      '1. Introduction to Generative AI',
      '2. Learning Chrome Web Developer Tools',
      '3. Excel: Advanced Formulas and Functions',
    ],
  },
  {
    emp_id: '55099194',
    name: 'Bhavya Momaya',
    score_count: 34,
    image: 'images/Bhavya.Momaya.jpg',
    pre_score: 79,
    prev_team: 'NA',
    courses: [
      '1. Meta React basics',
      "2. Programming Fundamentals by Duke's University",
      '3. AI in Everyday Life',
    ],
  },
  {
    emp_id: '55087478',
    name: 'Avinash Gupta',
    score_count: 36,
    image: 'images/Avinash.Gupta.jpg',
    pre_score: 50,
    prev_team: 'NA',
    courses: [
      '1. Introduction to Generative AI',
      '2. Learning Chrome Web Developer Tools',
      '3. Excel: Advanced Formulas and Functions',
    ],
  },
  {
    emp_id: '55093081',
    name: 'Simran Surve',
    score_count: 32,
    image: 'images/Simran.Surve.jpg',
    pre_score: 77,
    prev_team: 'NA',
    courses: [
      '1. Microsoft Power BI Data Analyst Professional Certificate',
      '2. Introduction to Containers w/ Docker, Kubernetes and OpenShift',
      '3. Generative AI for Everyone',
    ],
  },
  {
    emp_id: '55099147',
    name: 'Umakant Patil',
    score_count: 20,
    image: '/images/Umakant.jpg',
    pre_score: 0,
    prev_team: 'JioMeet',
    courses: [
      '1. Node.js & MongoDB: Developing Back-end Database Applications',
      '2. Learning Chrome Web Developer Tools',
    ],
  },
  {
    emp_id: '55099238',
    name: 'Mridul Upadhya',
    score_count: 19,
    image: 'images/Mridul.Upadhya.jpg',
    pre_score: 0,
    prev_team: 'JCPC',
    courses: [
      '1. Introduction to Gen AI',
      '2. Introduction to Product management',
      '3. Microsoft Power BI',
      '4. Introduction to Data Ananlytics',
    ],
  },
  {
    emp_id: '55099022',
    name: 'Pratik Joshi',
    score_count: 8,
    image: 'images/Pratik5.Joshi.jpg',
    pre_score: 0,
    prev_team: 'JioMeet',
    courses: [
      '1. DevOps Foundations (2016)',
      '2. Building a Personalized Chatbot with OpenAI and LangChain',
    ],
  },
  {
    emp_id: '55099068',
    name: 'Omkar Ghodake',
    score_count: 8,
    image: 'images/Omkar.Ghodake.jpg',
    pre_score: 0,
    prev_team: 'JCPC',
    courses: [
      '1. Blockchain, Smart Contracts',
      '2. Solidity, Web3',
      '3. HTML Canvas',
    ],
  },
  {
    emp_id: '55099006',
    name: 'Shubham Joshi',
    score_count: 5,
    image: 'images/Shubham2.Joshi.jpg',
    pre_score: 0,
    prev_team: 'JCPC',
    courses: ['1. Javascript', '2. React JS', '3. Node.js basics'],
  },
  {
    emp_id: '55093428',
    name: 'Devraj Singh',
    score_count: 3,
    image: 'images/Devraj3.Singh.png',
    pre_score: 0,
    prev_team: 'JCPC',
    courses: [
      '1. Spring REST API for Beginners',
      '2. Master Spring Boot 3 & Spring Framework 6 with Java (Ongoing)',
    ],
  },
  {
    emp_id: '55099140',
    name: 'Jaypal Koli',
    score_count: 3,
    image: 'images/Jaypal.Koli.jpg',
    pre_score: 0,
    prev_team: 'JCPC',
    courses: [
      '1. Learning Chrome Web Developer Tools',
      '2. Programming Foundations: Fundamentals',
      '3. Generative AI for Everyone',
    ],
  },
  {
    emp_id: '55093222',
    name: 'Sanjeev Prajapati',
    score_count: 3,
    image: 'images/Sanjeev2.Prajapati.png',
    pre_score: 0,
    prev_team: 'JPMA',
    courses: [
      '1. Fundamentals of Python',
      '2. Python Intermediate from Kaggle',
      '3. Machine Learning from Kaggle',
    ],
  },
  {
    emp_id: '55087415',
    name: 'Sakshi Rai',
    score_count: 2,
    image: 'images/Sakshi1.Rai.jpg',
    pre_score: 0,
    prev_team: 'MyJio/Jio.com',
    courses: [
      '1. Introduction to Big Data with Spark & Hadoop',
      '2. Blockchain: Learning Solidity',
      '3. Advance Your Skills in AI and Machine Learning',
    ],
  },
  {
    emp_id: '55093439',
    name: 'Manoj Inbarajan',
    score_count: 0,
    image: 'images/Manoj.Inbarajan_.jpg',
    pre_score: 0,
    prev_team: 'Campaign Team',
    courses: [
      '1. Product Management: An Introduction',
      '2. Google UX Design',
      '3. Business Analysis Fundamentals',
    ],
  },
  {
    emp_id: '55099135',
    name: 'Nikita Sonawane',
    score_count: 0,
    image: 'images/Nikita.Sonawane.jpg',
    pre_score: 0,
    prev_team: 'NA',
    courses: ['1. Intro to Java', '2. Programming Foundations: Databases'],
  },
  {
    emp_id: '55093276',
    name: 'Nikita Suhane',
    score_count: 0,
    image: 'images/Nikita.Suhane.png',
    pre_score: 0,
    prev_team: 'JPMA',
    courses: [
      '1. Google Cybersecurity Certification for Beginners',
      '2. Introduction to Databases for Back-End Development',
      '3. Programming Foundations: Databases',
    ],
  },
  {
    emp_id: '55093373',
    name: 'Prathwikumar S',
    score_count: 0,
    image: 'images/prathwikumar.s.JPG',
    pre_score: 0,
    prev_team: 'JioMeet',
    courses: [
      '1. MERN Stack Development',
      '2. React Basic',
      '3. Node.js Basic',
    ],
  },
  {
    emp_id: '55114802',
    name: 'Rishabh Kanaujiya',
    score_count: 0,
    image: 'images/Rishabh.Kanaujiya.png',
    pre_score: 0,
    prev_team: 'Campaign Team',
    courses: [
      '1. Introduction to Generative AI',
      '2. Introduction to Large Language Models',
      '3. MERN Stack Development',
    ],
  },
  {
    emp_id: '55093464',
    name: 'Shriyash Thorat',
    score_count: 0,
    image: 'images/Shriyash.Thorat.jpg',
    pre_score: 0,
    prev_team: 'JCPC',
    courses: [],
  },
]
