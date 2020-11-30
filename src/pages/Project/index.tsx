import React from 'react';

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
              <a href="/">GitHub-Link</a>
              <a href="/">Visit Website</a>
            </div>
          </Header>
          <Content>
            <img src={happyMockup} alt="Happy" />
            <ProjectDescription>
              <Technologies>
                <h3>Technologies</h3>
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
                <h3>Tools</h3>
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
                <h3>💻 Project</h3>
                <div>
                  <p>
                    The Happy application was a project that #Rocketseat had
                    proposed during #NLW3 event which had as objective to
                    motivate people to connect with orphanages or institutes
                    that have a responsibility the care for older people or who
                    not have a shelter.
                  </p>
                  <p>
                    The Happy application was a project that #Rocketseat had
                    proposed during #NLW3 event which had as objective to
                    motivate people to connect with orphanages or institutes
                    that have a responsibility the care for older people or who
                    not have a shelter.
                  </p>
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
        </BoxContent>
      </Container>
    </>
  );
};

export default Project;
