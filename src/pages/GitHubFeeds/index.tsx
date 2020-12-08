import React, { useEffect, useState } from 'react';

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

// import Projects from '../../data/projects';
import api from '../../services/api';

interface Repository {
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
  url: string;
  stack: Array<any>;
}

const GitHubFeeds: React.FC = (): any => {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    api.get('users/fernandosilvasc/repos?per_page=4').then(response => {
      const database: Repository[] = response.data;
      // console.log(database);
      const repositoriesDB: Repository[] = [];
      database.map(repo => {
        const { name, description, created_at, updated_at, url } = repo;
        const stack: any[] = [];

        api.get(`repos/fernandosilvasc/${name}/languages`).then(res => {
          const stackRepo = res.data;
          stack.push(Object.keys(stackRepo));
        });
        return repositoriesDB.push({
          name,
          description,
          created_at,
          updated_at,
          url,
          stack,
        });
      });
      setRepositories(repositoriesDB);
    });
  }, []);

  console.log(repositories);

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
            {repositories &&
              repositories.map(repository => (
                <Project>
                  <div>
                    <FolderImg />
                    <a href={repository.url} target="blank">
                      <ArrowLink />
                    </a>
                  </div>
                  <Description>
                    <h3>{repository.description}</h3>
                    {repositories.stack[0].map(language => (
                      <p>{language}</p>
                    ))}
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
