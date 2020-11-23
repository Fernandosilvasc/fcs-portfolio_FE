import React from 'react';
import {
  Container,
  CardDescription,
  Header,
  BoxIntroduction,
  BoxSkills,
} from './styles';

import Sidebar from '../../components/Sidebar/index';
import InfoCard from '../../components/InfoCard/index';
import { ReactComponent as ComputerIcon } from '../../assets/computer.svg';
import { ReactComponent as MapIcon } from '../../assets/map.svg';
import { ReactComponent as GitHubIcon } from '../../assets/github.svg';
import { ReactComponent as LinkedInIcon } from '../../assets/linkedIn.svg';
import { ReactComponent as NodeJsIcon } from '../../assets/nodejs_icon.svg';
import { ReactComponent as ReactIcon } from '../../assets/react_icon.svg';
import { ReactComponent as JSIcon } from '../../assets/js_icon.svg';
import { ReactComponent as PHPIcon } from '../../assets/php_icon.svg';
import { ReactComponent as HTMLIcon } from '../../assets/html_icon.svg';
import { ReactComponent as CSSIcon } from '../../assets/css_icon.svg';
import { ReactComponent as SassIcon } from '../../assets/sass_icon.svg';
import { ReactComponent as FigmaIcon } from '../../assets/figma_icon.svg';

const Home: React.FC = () => {
  return (
    <>
      <Container>
        <Sidebar />
        <InfoCard />
        <CardDescription>
          <Header>
            <div />
            <h2>
              <span>Hello </span>
              Everyone !
            </h2>
          </Header>
          <BoxIntroduction>
            <h2>Introduction</h2>
            <ul>
              <li>
                <ComputerIcon />
                <p>&#8212; FullStack Developer</p>
              </li>
              <li>
                <MapIcon />
                <p>&#8212; Lives in Surrey, CA</p>
              </li>
              <li>
                <GitHubIcon />
                <a href="/">&#8212; GitHub link</a>
              </li>
              <li>
                <LinkedInIcon />
                <a href="/">&#8212; LinkedIn link</a>
              </li>
            </ul>
          </BoxIntroduction>
          <BoxSkills>
            <h2>Skills</h2>
            <div>
              <ul>
                <li>
                  <NodeJsIcon />
                </li>
                <li>
                  <ReactIcon />
                </li>
                <li>
                  <JSIcon />
                </li>
                <li>
                  <PHPIcon />
                </li>
                <li>
                  <HTMLIcon />
                </li>
                <li>
                  <CSSIcon />
                </li>
                <li>
                  <SassIcon />
                </li>
                <li>
                  <FigmaIcon />
                </li>
              </ul>
            </div>
          </BoxSkills>
        </CardDescription>
      </Container>
    </>
  );
};

export default Home;
