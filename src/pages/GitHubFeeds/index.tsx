import React from 'react';

import {
  Container,
  CardDescription,
  Header,
  BoxProject,
  ProjectContainer,
  Project,
  Description,
} from './styles';

import { ReactComponent as FolderImg } from '../../assets/folder.svg';
import { ReactComponent as ArrowLink } from '../../assets/arrowLink.svg';

import Sidebar from '../../components/Sidebar/index';
import InforCard from '../../components/InfoCard/index';

import Projects from '../../data/projects';

const GitHubFeeds: React.FC = () => {
  return (
    <Container>
      <Sidebar />
      <InforCard title="githubFeeds" />
      <CardDescription>
        <Header>
          <div>
            <div />
            <h2>
              <span>GitHub </span>
              Feeds
            </h2>
          </div>

          <p>latest repos</p>
        </Header>

        <BoxProject>
          <h2>Other projects I have worked on.</h2>
          <ProjectContainer>
            {Projects.map(project => (
              <Project>
                <div>
                  <FolderImg />
                  <a href={project.link} target="blank">
                    <ArrowLink />
                  </a>
                </div>
                <Description>
                  <h3>{project.title}</h3>
                  <p>{project.techs}</p>
                </Description>
              </Project>
            ))}
          </ProjectContainer>
        </BoxProject>
      </CardDescription>
    </Container>
  );
};

export default GitHubFeeds;
