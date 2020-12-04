import { uuid } from 'uuidv4';

import GoBarberImg from '../assets/gobarber.png';
import HappyImg from '../assets/happy.png';
import ProCaliber from '../assets/pro_caliber_lacrosse.png';

const Projects = [
  {
    id: uuid(),
    name: 'GoBarber',
    title:
      "GoBarber is an application that I'm developing during the bootCamp to put into practice some concepts of React and NodeJS.",
    imgPath: GoBarberImg,
    techs: ['NodeJS', 'ReactJS', 'React Native'],
    tools: ['PostgreSQL', 'Docker', 'Figma'],
    webLink: 'https://github.com/Fernandosilvasc/GoBarber-App',
    github: 'https://github.com/Fernandosilvasc/GoBarber-App',
  },
  {
    id: uuid(),
    name: 'Happy',
    title: 'Happy is a project that has been built during Next Level Week #03',
    imgPath: HappyImg,
    techs: ['NodeJS', 'ReactJS', 'React Native'],
    tools: ['MongoDb', 'Expo', 'MapBox', 'Figma'],
    webLink: 'https://github.com/Fernandosilvasc/nlw3-happy',
    github: 'https://github.com/Fernandosilvasc/nlw3-happy',
  },
  {
    id: uuid(),
    name: 'ProCaliber',
    title:
      'ProCaliber Website was created by my classmates and I, using some resources and libraries to meet customer demand.',
    imgPath: ProCaliber,
    techs: ['HTML', 'CSS', 'JS'],
    tools: ['Sass', 'Figma'],
    webLink: 'http://www.procaliberlacrosse.com/second/',
    github: '/',
  },
  {
    id: uuid(),
    name: 'Happy',
    title: 'Happy is a project that has been built during Next Level Week #03',
    imgPath: HappyImg,
    techs: ['NodeJS', 'ReactJS', 'React Native'],
    tools: ['MongoDb', 'Expo', 'MapBox', 'Figma'],
    webLink: 'https://github.com/Fernandosilvasc/nlw3-happy',
    github: 'https://github.com/Fernandosilvasc/nlw3-happy',
  },
];

export default Projects;
