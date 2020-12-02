import React from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  CardDescription,
  Header,
  BoxProject,
  ProjectContainer,
  Project,
  Content,
  ImgProject,
  Buttons,
} from './styles';

import Sidebar from '../../components/Sidebar/index';
import InfoCard from '../../components/InfoCard/index';
import NavBar from '../../components/NavBar/index';

import projects from '../../data/projects';

const Work: React.FC = () => {
  return (
    <>
      <Container>
        <Sidebar />
        <InfoCard />
        <CardDescription>
          <Header>
            <div>
              <div />
              <h2>
                <span>Recent </span>
                Works
              </h2>
            </div>

            <NavBar />
          </Header>

          <BoxProject>
            {projects.map(project => (
              <ProjectContainer>
                <Project>
                  <ImgProject src={project.imgPath} alt={project.title} />

                  <Content>
                    <h2>{project.title}</h2>
                    <h3>{project.techs}</h3>
                    <Buttons>
                      <Link to="/project">Details</Link>
                      <a href="/">Launch</a>
                    </Buttons>
                  </Content>
                </Project>
              </ProjectContainer>
            ))}
          </BoxProject>
        </CardDescription>
      </Container>
    </>
  );
};

export default Work;
