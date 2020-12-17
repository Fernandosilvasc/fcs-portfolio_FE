import { uuid } from 'uuidv4';

import NodeJsIcon from '../../../assets/nodejs_icon.svg';
import ReactIcon from '../../../assets/react_icon.svg';
import JSIcon from '../../../assets/js_icon.svg';
import PHPIcon from '../../../assets/php_icon.svg';
import HTMLIcon from '../../../assets/html_icon.svg';
import CSSIcon from '../../../assets/css_icon.svg';
import SassIcon from '../../../assets/sass_icon.svg';
import FigmaIcon from '../../../assets/figma_icon.svg';

const Icons = [
  {
    id: uuid(),
    title: 'NodeJs',
    iconPath: NodeJsIcon,
  },
  {
    id: uuid(),
    title: 'React',
    iconPath: ReactIcon,
  },
  {
    id: uuid(),
    title: 'JS',
    iconPath: JSIcon,
  },
  {
    id: uuid(),
    title: 'PHP',
    iconPath: PHPIcon,
  },
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
