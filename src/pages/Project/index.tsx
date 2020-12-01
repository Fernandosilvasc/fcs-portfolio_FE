import React from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  Header,
  BoxContent,
  Content,
  ProjectDescription,
  Technologies,
  Tools,
  Description,
} from './styles';

import Sidebar from '../../components/Sidebar/index';
import happyMockup from '../../assets/happyMockup.png';

const Project: React.FC = () => {
  return (
    <>
      <Container>
        <Sidebar />
        <BoxContent>
          <Header>
            <div>
              <div />
              <h2>
                <span>Happy </span>
              </h2>
            </div>
            <div>
              <a
                href="https://github.com/Fernandosilvasc/nlw3-happy"
                target="_blank"
                rel="noreferrer"
              >
                GitHub-Link
              </a>
              <a href="/">Visit Website</a>
            </div>
          </Header>
          <Content>
            <img src={happyMockup} alt="Happy" />
            <ProjectDescription>
              <Technologies>
                <h2>Technologies</h2>
                <div>
                  <div>
                    <span>NodeJS</span>
                  </div>
                  <div>
                    <span>ReactJS</span>
                  </div>
                  <div>
                    <span>React Native</span>
                  </div>
                  <div>
                    <span>TypeScript</span>
                  </div>
                  <div>
                    <span>Expo</span>
                  </div>
                </div>
              </Technologies>
              <Tools>
                <h2>Tools</h2>
                <div>
                  <div>
                    <span>Figma</span>
                  </div>
                  <div>
                    <span>VS Code</span>
                  </div>
                  <div>
                    <span>Git</span>
                  </div>
                </div>
              </Tools>
              <Description>
                <h2>Project</h2>
                <div>
                  <h3>About this project</h3>
                  <p>
                    The Happy application was a project that #Rocketseat had
                    proposed during #NLW3 event which had as objective to
                    motivate people to connect with orphanages or institutes
                    that have a responsibility the care for older people or who
                    not have a shelter.
                  </p>

                  <div>
                    <h4>Features</h4>
                    <p>* Lorem ipsum dolor sit amet.</p>
                    <p>
                      * Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <p>
                      * Lorem ipsum dolor sit, amet consectetur adipisicing
                      elit.
                    </p>
                  </div>

                  <h3>What I learned</h3>
                  <p>
                    The Happy application was a project that #Rocketseat had
                    proposed during #NLW3 event which had as objective to
                    motivate people to connect with orphanages or institutes
                    that have a responsibility the care for older people or who
                    not have a shelter.
                  </p>
                  <h3>Challenges faced</h3>
                  <p>
                    The Happy application was a project that #Rocketseat had
                    proposed during #NLW3 event which had as objective to
                    motivate people to connect with orphanages or institutes
                    that have a responsibility the care for older people or who
                    not have a shelter.
                  </p>
                </div>
              </Description>
            </ProjectDescription>
          </Content>
          <Link to="/work">&#x276E;&#x276E; Back</Link>
        </BoxContent>
      </Container>
    </>
  );
};

export default Project;
