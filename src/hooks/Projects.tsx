import React, { createContext, useState, useContext } from 'react';

// interface ProjectState {
//   id: string;
// }

interface ProjectContextData {
  projectID: string;
  setProjectID: React.Dispatch<React.SetStateAction<string>>;
}

const ProjectContext = createContext<ProjectContextData>(
  {} as ProjectContextData,
);

export const ProjectProvider: React.FC = ({ children }: any) => {
  const [projectID, setProjectID] = useState('');

  return (
    <ProjectContext.Provider value={{ projectID, setProjectID }}>
      {children}
    </ProjectContext.Provider>
  );
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function useProject() {
  const context = useContext(ProjectContext);
  const { projectID, setProjectID } = context;
  return { projectID, setProjectID };
}
