import React from 'react';
import Media from 'react-media';

import ProjectDesktop from './Desktop/index';
import ProjectPortable from './Portable/index';

const Project: React.FC = () => {
  return (
    <>
      <Media query={{ maxWidth: 1000 }}>
        {matches => (matches ? <ProjectPortable /> : <ProjectDesktop />)}
      </Media>
    </>
  );
};

export default Project;
