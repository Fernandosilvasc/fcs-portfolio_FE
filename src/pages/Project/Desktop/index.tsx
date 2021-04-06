import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';

import {
  Container,
  Header,
  BoxContent,
  Content,
  ProjectDescription,
  Technologies,
  Tools,
  Description,
  Context,
} from './styles';

import NavBar from '../../../components/NavBar/Desktop/index';
import Footer from '../../../components/Footer/index';
import { useProject } from '../../../hooks/Projects';

import Database from '../../../data/projects';

interface ProjectState {
  id: string;
  name: string;
  title: string;
  imgPath: Array<string>;
  techs: Array<string>;
  tools: Array<string>;
  videoUrl: string;
  noLink: boolean;
  webLink: string;
  github: string;
  about: string[];
  features?: string[];
  learned: {
    description: string;
    bulletPoints?: string[];
  };
  challenges: string[];
}

const ProjectDesktop: React.FC = () => {
  const { projectID } = useProject();

  const [currentProject, setCurrentProject] = useState<ProjectState>(() => {
    const storageProject = localStorage.getItem('@FCS_Portfolio:project');

    if (storageProject) {
      return JSON.parse(storageProject);
    }
    return '';
  });

  useEffect(() => {
    if (!currentProject) {
      const [project] = Database.filter(
        projectDatabase => projectDatabase.id === (projectID as String),
      );

      setCurrentProject(project);
      localStorage.setItem('@FCS_Portfolio:project', JSON.stringify(project));
    }
  }, [projectID, currentProject]);

  return (
    <>
      <Container>
        <NavBar />

        {currentProject && (
          <BoxContent key={currentProject.id}>
            <Header>
              <div>
                <div />
                <h2>{currentProject.name}</h2>
              </div>
              <div>
                {!currentProject.noLink && (
                  <a
                    href={currentProject.webLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Website
                  </a>
                )}
                <a
                  href={currentProject.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
            </Header>

            <Content>
              {currentProject.videoUrl && (
                <ReactPlayer
                  url={currentProject.videoUrl}
                  controls
                  width={300}
                  height={200}
                />
              )}
              {currentProject.imgPath[1] && (
                <img
                  src={currentProject.imgPath[1]}
                  alt={currentProject.name}
                />
              )}
              <ProjectDescription>
                <Technologies>
                  <h2>Technologies</h2>
                  <div>
                    {currentProject.techs.map(tech => (
                      <div key={tech}>
                        <span>{tech}</span>
                      </div>
                    ))}
                  </div>
                </Technologies>

                <Tools>
                  <h2>Tools</h2>
                  <div>
                    {currentProject.tools.map(tool => (
                      <div key={tool}>
                        <span>{tool}</span>
                      </div>
                    ))}
                  </div>
                </Tools>

                <Description>
                  <h2>Project</h2>
                  <div>
                    <h3>About this project</h3>
                    <Context>
                      <p>{currentProject.about}</p>
                      {currentProject.features && <h4>Features</h4>}
                      <ul>
                        {currentProject.features &&
                          currentProject.features.map(feature => (
                            <li>{feature}</li>
                          ))}
                      </ul>
                    </Context>
                    <h3>What I learned</h3>
                    <Context>
                      <p>{currentProject.learned.description}</p>
                      <ul>
                        {currentProject.learned.bulletPoints &&
                          currentProject.learned.bulletPoints.map(
                            bulletPoint => <li>{bulletPoint}</li>,
                          )}
                      </ul>
                    </Context>
                    <h3>Challenges faced</h3>
                    <Context>
                      {currentProject.challenges.map(challenge => (
                        <p>{challenge}</p>
                      ))}
                    </Context>
                  </div>
                </Description>
              </ProjectDescription>
            </Content>
            <Link to="/work">&#x276E;&#x276E; Back</Link>
          </BoxContent>
        )}
      </Container>
      <Footer />
    </>
  );
};

export default ProjectDesktop;
