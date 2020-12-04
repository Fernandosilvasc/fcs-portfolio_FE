import React, { createContext, useState, useContext } from 'react';

interface ProjectState {
  id: string;
}

interface ProjectContextData {
  projectID: object;
  setProjectID: React.Dispatch<React.SetStateAction<ProjectState>>;
}

const ProjectContext = createContext<ProjectContextData>(
  {} as ProjectContextData,
);

export const ProjectProvider: React.FC = ({ children }: any) => {
  const [projectID, setProjectID] = useState<ProjectState>({} as ProjectState);

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
