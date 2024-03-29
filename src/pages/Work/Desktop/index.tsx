import React, { useCallback, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loader from 'react-loader-spinner';

import {
  Container,
  CardDescription,
  Header,
  FilterButton,
  Button,
  BoxProject,
  ProjectContainer,
  Project,
  Content,
  ImgProject,
  Links,
} from './styles';

import NavBar from '../../../components/NavBar/Desktop/index';
import InfoCard from '../../../components/InfoCard/Desktop/index';
import Footer from '../../../components/Footer/index';

import Database from '../../../data/projects';
import buttons from '../buttons';
import { useProject } from '../../../hooks/Projects';

interface ProjectsData {
  id: string;
  name: string;
  title: string;
  imgPath: Array<string>;
  techs: Array<string>;
  tools: Array<string>;
  type: Array<string>;
  noLink: boolean;
  webLink: string;
  github: string;
}

const WorkDesktop: React.FC = () => {
  const [isLoading, setLoading] = useState(true);
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
    setLoading(false);
  }, [buttonActive]);

  return (
    <>
      <Container>
        <NavBar />
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

            <FilterButton>
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
            </FilterButton>
          </Header>

          <BoxProject>
            {!isLoading ? (
              <ProjectContainer>
                {projects.map(project => (
                  <Project key={project.id}>
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
                      <Links>
                        <Link
                          key={project.id}
                          to={`/project/${project.name}`}
                          onClick={() => {
                            handleSetProject(project.id);
                          }}
                        >
                          Details
                        </Link>
                        {project.noLink ? (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                          >
                            GitHub
                          </a>
                        ) : (
                          <a
                            href={project.webLink}
                            target="_blank"
                            rel="noreferrer"
                          >
                            Launch
                          </a>
                        )}
                      </Links>
                    </Content>
                  </Project>
                ))}
              </ProjectContainer>
            ) : (
              <Loader
                type="Oval"
                color="#efefd0"
                height={100}
                width={100}
                className="loader"
              />
            )}
          </BoxProject>
        </CardDescription>
      </Container>
      <Footer />
    </>
  );
};

export default WorkDesktop;
