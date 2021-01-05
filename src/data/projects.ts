import { uuid } from 'uuidv4';

import GoBarberImg from '../assets/gobarber.png';
import GoBarberMockup from '../assets/goBarberMockup.png';
import HappyImg from '../assets/happy.png';
import HappyMockup from '../assets/happyMockup.png';
import ProCaliber from '../assets/pro_caliber_lacrosse.png';
import ProCaliberMockup from '../assets/pro_caliberMockup.png';

const Projects = [
  {
    id: uuid(),
    name: 'GoBarber',
    title:
      "GoBarber is an application that I'm developing during the bootCamp to put into practice some concepts of React and NodeJS.",
    imgPath: [GoBarberImg, GoBarberMockup],
    techs: ['NodeJS', 'ReactJS', 'React Native'],
    tools: ['PostgreSQL', 'Docker', 'Figma'],
    type: ['BackEnd', 'FrontEnd', 'Mobile'],
    webLink: 'https://github.com/Fernandosilvasc/GoBarber-App',
    github: 'https://github.com/Fernandosilvasc/GoBarber-App',
    about: [''],
    features: [''],
    learned: [''],
    challenges: [''],
  },
  {
    id: uuid(),
    name: 'Happy',
    title: 'Happy is a project that has been built during Next Level Week #03',
    imgPath: [HappyImg, HappyMockup],
    techs: ['NodeJS', 'ReactJS', 'React Native'],
    tools: ['MongoDb', 'Expo', 'MapBox', 'Figma'],
    type: ['BackEnd', 'FrontEnd', 'Mobile'],
    webLink: 'https://github.com/Fernandosilvasc/nlw3-happy',
    github: 'https://github.com/Fernandosilvasc/nlw3-happy',
    about: [
      `The Happy application was a project that #Rocketseat had
    proposed during #NLW3 event which had as objective to
    motivate people to connect with orphanages or institutes
    that have a responsibility the care for older people or
    who not have a shelter.`,
    ],
    features: [
      `* Lorem ipsum dolor sit amet consectetur adipisicing
    elit.`,
      ` * Lorem ipsum dolor sit, amet consectetur adipisicing
    elit.`,
    ],
    learned: [
      `The Happy application was a project that #Rocketseat had
    proposed during #NLW3 event which had as objective to
    motivate people to connect with orphanages or institutes
    that have a responsibility the care for older people or
    who not have a shelter.`,
    ],
    challenges: [
      `The Happy application was a project that #Rocketseat had
    proposed during #NLW3 event which had as objective to
    motivate people to connect with orphanages or institutes
    that have a responsibility the care for older people or
    who not have a shelter.`,
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
    webLink: 'https://fernandosilvasc.github.io/lacrosseproject/',
    github: '/',
    about: [''],
    features: [''],
    learned: [''],
    challenges: [''],
  },
  // {
  //   id: uuid(),
  //   name: 'Happy',
  //   title: 'Happy is a project that has been built during Next Level Week #03',
  //   imgPath: [HappyImg, HappyMockup],
  //   techs: ['NodeJS', 'ReactJS', 'React Native'],
  //   tools: ['MongoDb', 'Expo', 'MapBox', 'Figma'],
  //   type: ['BackEnd', 'FrontEnd', 'Mobile'],
  //   webLink: 'https://github.com/Fernandosilvasc/nlw3-happy',
  //   github: 'https://github.com/Fernandosilvasc/nlw3-happy',
  //   about: [''],
  //   features: [''],
  //   learned: [''],
  //   challenges: [''],
  // },
];

export default Projects;
