import { v4 as uuid } from 'uuid';

import NodeJsIcon from '../../../assets/nodejs_icon.svg';
import ReactIcon from '../../../assets/react_icon.svg';
// import JSIcon from '../../../assets/js_icon.svg';
// import PHPIcon from '../../../assets/php_icon.svg';
import HTMLIcon from '../../../assets/html_icon.svg';
import CSSIcon from '../../../assets/css_icon.svg';
import SassIcon from '../../../assets/sass_icon.svg';
import FigmaIcon from '../../../assets/figma_icon.svg';
import GraphQLIcon from '../../../assets/graphQL_icon.svg';
import FirebaseIcon from '../../../assets/firebase_icon.svg';
import AntDesignIcon from '../../../assets/antDesign_icon.svg';
import JestIcon from '../../../assets/jest_icon.svg';
import MaterialUiIcon from '../../../assets/materialUI_icon.svg';
import MongoDBIcon from '../../../assets/mongoDB_icon.svg';
import NestJsIcon from '../../../assets/nestJs_icon.svg';
import NextJsIcon from '../../../assets/nextJs_icon.svg';
import TypescriptIcon from '../../../assets/typescript_icon.svg';
import MySqlIcon from '../../../assets/mySql_icon.svg';

const Icons = [
  {
    id: uuid(),
    title: 'Typescript',
    iconPath: TypescriptIcon,
  },
  // {
  //   id: uuid(),
  //   title: 'JS',
  //   iconPath: JSIcon,
  // },
  {
    id: uuid(),
    title: 'NodeJs',
    iconPath: NodeJsIcon,
  },
  {
    id: uuid(),
    title: 'NestJs',
    iconPath: NestJsIcon,
  },
  {
    id: uuid(),
    title: 'Jest',
    iconPath: JestIcon,
  },
  {
    id: uuid(),
    title: 'React',
    iconPath: ReactIcon,
  },
  {
    id: uuid(),
    title: 'NextJs',
    iconPath: NextJsIcon,
  },
  // {
  //   id: uuid(),
  //   title: 'PHP',
  //   iconPath: PHPIcon,
  // },
  {
    id: uuid(),
    title: 'HTML',
    iconPath: HTMLIcon,
  },
  {
    id: uuid(),
    title: 'CSS',
    iconPath: CSSIcon,
  },
  {
    id: uuid(),
    title: 'MySQL',
    iconPath: MySqlIcon,
  },
  {
    id: uuid(),
    title: 'MongoDB',
    iconPath: MongoDBIcon,
  },
  {
    id: uuid(),
    title: 'GraphQl',
    iconPath: GraphQLIcon,
  },
  {
    id: uuid(),
    title: 'Firebase',
    iconPath: FirebaseIcon,
  },
  {
    id: uuid(),
    title: 'MaterialUI',
    iconPath: MaterialUiIcon,
  },
  {
    id: uuid(),
    title: 'AntDesign',
    iconPath: AntDesignIcon,
  },
  {
    id: uuid(),
    title: 'Sass',
    iconPath: SassIcon,
  },
  {
    id: uuid(),
    title: 'Figma',
    iconPath: FigmaIcon,
  },
];

export default Icons;
