import React, { useEffect, useState } from 'react';
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
import { useProject } from '../../hooks/Projects';

import Database from '../../data/projects';

interface ProjectState {
  id: string;
  name: string;
  title: string;
  imgPath: Array<string>;
  techs: Array<string>;
  tools: Array<string>;
  webLink: string;
  github: string;
}

const Project: React.FC = () => {
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
        <Sidebar />

        {currentProject && (
          <BoxContent key={currentProject.id}>
            <Header>
              <div>
                <div />
                <h2>
                  <span>{currentProject.name}</span>
                </h2>
              </div>
              <div>
                <a
                  href={currentProject.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub-Link
                </a>
                <a
                  href={currentProject.webLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit Website
                </a>
              </div>
            </Header>
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
                    <p>
                      The Happy application was a project that #Rocketseat had
                      proposed during #NLW3 event which had as objective to
                      motivate people to connect with orphanages or institutes
                      that have a responsibility the care for older people or
                      who not have a shelter.
                    </p>

                    <div>
                      <h4>Features</h4>
                      <p>* Lorem ipsum dolor sit amet.</p>
                      <p>
                        * Lorem ipsum dolor sit amet consectetur adipisicing
                        elit.
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
                      that have a responsibility the care for older people or
                      who not have a shelter.
                    </p>
                    <h3>Challenges faced</h3>
                    <p>
                      The Happy application was a project that #Rocketseat had
                      proposed during #NLW3 event which had as objective to
                      motivate people to connect with orphanages or institutes
                      that have a responsibility the care for older people or
                      who not have a shelter.
                    </p>
                  </div>
                </Description>
              </ProjectDescription>
            </Content>
            <Link to="/work">&#x276E;&#x276E; Back</Link>
          </BoxContent>
        )}
      </Container>
    </>
  );
};

export default Project;
