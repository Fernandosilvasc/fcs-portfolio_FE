import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  CardDescription,
  Links,
  Content,
  ProjectDescription,
  Technologies,
  Tools,
  Description,
} from './styles';

import NavBar from '../../../components/NavBar/Portable/index';
import Header from '../../../components/Header/index';
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

const ProjectPortable: React.FC = () => {
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
        <br />
        <br />
        <Header boldTitle={currentProject.name} title="" />

        {currentProject && (
          <CardDescription key={currentProject.id}>
            <Links>
              <a href={currentProject.webLink} target="_blank" rel="noreferrer">
                Website
              </a>
              <a href={currentProject.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </Links>

            <Content>
              <img src={currentProject.imgPath[1]} alt={currentProject.name} />
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
                    <p>{currentProject.about}</p>
                    <div>
                      {currentProject.features && <h4>Features</h4>}
                      {currentProject.features &&
                        currentProject.features.map(feature => (
                          <p>{feature}</p>
                        ))}
                    </div>
                    <h3>What I learned</h3>
                    {/* <p>{currentProject.learned}</p> */}
                    <h3>Challenges faced</h3>
                    <p>{currentProject.challenges}</p>
                  </div>
                </Description>
              </ProjectDescription>
            </Content>
            <Link to="/work">&#x276E;&#x276E; Back</Link>
          </CardDescription>
        )}
      </Container>
      <Footer />
    </>
  );
};

export default ProjectPortable;
