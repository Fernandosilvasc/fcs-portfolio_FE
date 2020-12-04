import React, { useCallback } from 'react';
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
import { useProject } from '../../hooks/Projects';

const Work: React.FC = () => {
  const { setProjectID } = useProject();

  const handleSetProject = useCallback(
    project => {
      setProjectID(project);
    },
    [setProjectID],
  );

  return (
    <>
      <Container>
        <Sidebar />
        <InfoCard title="work" />
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
              <ProjectContainer key={project.id}>
                <Project>
                  <ImgProject src={project.imgPath} alt={project.name} />

                  <Content>
                    <h2>{project.name}</h2>
                    <div>
                      {project.techs.map(techs => (
                        <h3 key={techs}>{techs}</h3>
                      ))}
                    </div>
                    <Buttons>
                      <Link
                        to="/project"
                        onClick={() => {
                          handleSetProject(project.id);
                        }}
                      >
                        Details
                      </Link>
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
