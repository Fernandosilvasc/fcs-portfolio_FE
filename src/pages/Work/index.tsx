import React from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  CardDescription,
  Header,
  BoxContainer,
  BoxProject,
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

          <BoxContainer>
            {projects.map(project => (
              <BoxProject key={project.id}>
                <img src={project.imgPath} alt={project.title} />
                <div>
                  <h2>{project.title}</h2>
                  <h3>{project.techs}</h3>
                  <div>
                    <Link to="/">Details</Link>
                    <a href="/">Launch</a>
                  </div>
                </div>
              </BoxProject>
            ))}
          </BoxContainer>
        </CardDescription>
      </Container>
    </>
  );
};

export default Work;
