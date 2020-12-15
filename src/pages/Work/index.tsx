import React, { useCallback, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  CardDescription,
  Header,
  Navbar,
  Button,
  BoxProject,
  ProjectContainer,
  Project,
  Content,
  ImgProject,
  Buttons,
} from './styles';

import Sidebar from '../../components/Sidebar/index';
import InfoCard from '../../components/InfoCard/index';
import Footer from '../../components/Footer/index';

import Database from '../../data/projects';
import buttons from '../../data/buttons';
import { useProject } from '../../hooks/Projects';

interface ProjectsData {
  id: string;
  name: string;
  title: string;
  imgPath: Array<string>;
  techs: Array<string>;
  tools: Array<string>;
  type: Array<string>;
  webLink: string;
  github: string;
}

const Work: React.FC = () => {
  const { setProjectID } = useProject();
  const handleSetProject = useCallback(
    project => {
      setProjectID(project);
    },
    [setProjectID],
  );

  const [projects, setProjects] = useState<ProjectsData[]>([]);
  const [buttonActive, setButtonActive] = useState({
    active: 0,
    typeProject: 'All',
  });

  useEffect(() => {
    localStorage.removeItem('@FCS_Portfolio:project');
    const { typeProject } = buttonActive;

    if (typeProject === 'All') {
      setProjects(Database);
    } else {
      const projectsDB = Database.filter(project =>
        project.type.includes(typeProject),
      );
      setProjects(projectsDB);
    }
  }, [buttonActive]);

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

            <Navbar>
              {buttons.map(button => (
                <Button
                  type="button"
                  key={button.id}
                  active={buttonActive.active === button.id}
                  onClick={() => {
                    setButtonActive({
                      active: button.id,
                      typeProject: button.title,
                    });
                  }}
                >
                  {button.title}
                </Button>
              ))}
            </Navbar>
          </Header>

          <BoxProject>
            {projects.map(project => (
              <ProjectContainer key={project.id}>
                <Project>
                  <ImgProject src={project.imgPath[0]} alt={project.name} />

                  <Content>
                    <div>
                      <h2>{project.name}</h2>
                      <div>
                        {project.techs.map(techs => (
                          <h3 key={techs}>{techs}</h3>
                        ))}
                      </div>
                    </div>
                    <Buttons>
                      <Link
                        key={project.id}
                        to={`/project/${project.name}`}
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
      <Footer />
    </>
  );
};

export default Work;
