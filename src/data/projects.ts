import { uuid } from 'uuidv4';

import CryptoTrackerImg from '../assets/cryptoTracker.png';
// import CryptoTrackerMockup from '../assets/cryptoTrackerMockup.png';
import GoBarberImg from '../assets/gobarber.png';
import GoBarberMockup from '../assets/goBarberMockup.png';
import HappyImg from '../assets/happy.png';
import HappyMockup from '../assets/happyMockup.png';
import ProCaliber from '../assets/pro_caliber_lacrosse.png';
import ProCaliberMockup from '../assets/pro_caliberMockup.png';

const Projects = [
  {
    id: uuid(),
    name: 'CryptoTracker',
    title:
      'CryptoTracker is an application created from scratch to practice some concepts using React, React Native and NodeJS.',
    imgPath: [CryptoTrackerImg],
    techs: ['React Native'],
    tools: ['Redux', 'Figma'],
    type: ['Mobile'],
    videoUrl: 'https://www.youtube.com/watch?v=me3bjZ-SedU',
    noLink: true,
    webLink: '',
    github: 'https://github.com/Fernandosilvasc/CryptoTracker',
    about: [
      'CryptoTracker is a simple application to track and display your cryptocurrencies. You will be able to follow the price in realtime of the market and create your own watch list. Track the prices of different cryptocurrencies including Bitcoin, Ethereum, Litecoin and others.',
    ],
    features: [
      'list cryptocurrencies',
      'search crypto by name or code',
      'create a watch list',
      'add crypto currency to watch list',
      'delete a currency from watch list',
    ],
    learned: {
      description: `In this project I could use some resources present in React Native for the first time, which I can mention as an example the Flatlist, used to render interfaces in a performative way, applying it in the rendering of the present lists. Another tool that is important to mention here was the implementation of Redux, in order to manage the state of some components.I believe that all the development of the project helped me to practice and further develop what I've learned about mobile development.`,
      bulletPoints: [
        // 'handling database using ORM',
        // 'applied units tests',
        // 'used Mailtrap service to test email submissions in a development environment.',
        // 'used Amazon SES for sending e-mails in a Production environment.',
        // 'used linux server to hosted the web application',
      ],
    },
    challenges: [
      'I believe that the challenge in this project was to structure the entire application and separate the responsibilities in each component so that, in a way, it had its reusable functionality without the risk of side effects.',
    ],
  },
  {
    id: uuid(),
    name: 'GoBarber',
    title:
      "GoBarber is an application that I'm developing during the bootCamp to put into practice some concepts of React and NodeJS.",
    imgPath: [GoBarberImg, GoBarberMockup],
    techs: ['NodeJS', 'ReactJS', 'React Native'],
    tools: ['PostgreSQL', 'Docker', 'Figma'],
    type: ['BackEnd', 'FrontEnd', 'Mobile'],
    videoUrl: '',
    noLink: false,
    webLink: 'https://gobarber.fernandocs.com',
    github: 'https://github.com/Fernandosilvasc/GoBarber-App',
    about: [
      'Gobarber was created with the aim of facilitating the provision of barbershop services. The idea would be to bring a platform that facilitates management and that at the same time allows the user to schedule with their chosen provider.',
    ],
    features: [
      `user creation`,
      `user authentication`,
      `user password recovery service`,
      `update user profile`,
      `user dashboard`,
      `create appointments`,
      `list appointments`,
    ],
    learned: {
      description:
        'This project proposed for me huge learning which I can list of the most important tools:',
      bulletPoints: [
        'handling database using ORM',
        'applied units tests',
        'used Mailtrap service to test email submissions in a development environment.',
        'used Amazon SES for sending e-mails in a Production environment.',
        'used linux server to hosted the web application',
      ],
    },
    challenges: [
      'As the first time that I made a full-stack application from scratch to host on a website, I can say it was a great opportunity to see how we can structure an application and make it scalable.',
      'I want to emphasize that using the unit tests and applying some TDD and DDD concepts give me another perspective.',
      'Using AWS service to host a web application, I faced some blocks, but by doing some research and asking for help in the dev community, I achieved my goals.',
    ],
  },
  {
    id: uuid(),
    name: 'Happy',
    title: 'Happy is a project that has been built during Next Level Week #03',
    imgPath: [HappyImg, HappyMockup],
    techs: ['NodeJS', 'ReactJS', 'React Native'],
    tools: ['MongoDb', 'Expo', 'MapBox', 'Figma'],
    type: ['BackEnd', 'FrontEnd', 'Mobile'],
    videoUrl: '',
    noLink: false,
    webLink: 'https://happy.fernandocs.com',
    github: 'https://github.com/Fernandosilvasc/nlw3-happy',
    about: [
      `The Happy application was a project that #Rocketseat had
    proposed during #NLW3 event which had as objective to
    motivate people to connect with orphanages or institutes
    that have a responsibility the care for older people or
    who not have a shelter.`,
    ],
    features: [
      `use geolocation`,
      `register orphanages`,
      `upload images`,
      // `user password recovery service`,
      // `update user profile`,
      // `user dashboard`,
      // `create appointments`,
      // `list appointments`,
    ],
    learned: {
      description:
        'This project proposed for me the first contact with a FullStack application which I can list of the most important tools:',
      bulletPoints: [
        'handling database using ORM',
        'use geolocation to allow users define orphanages location',
        'used the react-leaflet library to handling the maps manipulation',
        'used expo framework in order to handling the mobile version',
      ],
    },
    challenges: [
      'As the first time that I was trying to build a full-stack application, I faced a lot of issues during the development process, but I can say it was a great opportunity to leverage my knowledge and learn the process of the whole project structure.',
    ],
  },
  {
    id: uuid(),
    name: 'ProCaliber',
    title:
      'ProCaliber Website was created by my classmates and I, using some resources and libraries to meet customer demand.',
    imgPath: [ProCaliber, ProCaliberMockup],
    techs: ['HTML', 'CSS', 'JS'],
    tools: ['Sass', 'Figma'],
    type: ['FrontEnd'],
    videoUrl: '',
    noLink: false,
    webLink: 'https://fernandosilvasc.github.io/lacrosseproject/',
    github: 'https://github.com/Fernandosilvasc/lacrosseproject',
    about: [
      'The ProCaliber Website was the first project that we had a chance to have real experience with a customer to provide all the requirements. It was built to replace the current ProCaliber website, which was recreated from scratch using a new layout.',
    ],
    // features: [
    //   `instagram integration`,
    //   `register user`,
    //   `upload images`,
    //   `user password recovery service`,
    //   `update user profile`,
    //   `user dashboard`,
    //   `create appointments`,
    //   `list appointments`,
    // ],
    learned: {
      description:
        'This was the first project that we created as a team during the web development course, which I had the opportunity to be a team leader. Working in a group and having contact with the client was a great experience that provides us with a perspective on how we can attend to the customer requirements and divide the responsibilities.',
      bulletPoints: [
        // 'handling database using ORM',
        // 'use geolocation to allow users define orphanages location',
        // 'used the react-leaflet library to handling the maps manipulation',
        // 'used expo framework in order to handling the mobile version',
      ],
    },
    challenges: [
      `The big challenge was to be at the front of the team sharing the demands and understanding the client's requests to apply on the website.`,
    ],
  },
];

export default Projects;
