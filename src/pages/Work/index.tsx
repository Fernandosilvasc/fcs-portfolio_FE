import React from 'react';
import Media from 'react-media';

import WorkDesktop from './Desktop/index';
import WorkPortable from './Portable/index';

const Work: React.FC = () => {
  return (
    <>
      <Media query={{ maxWidth: 1000 }}>
        {matches => (matches ? <WorkPortable /> : <WorkDesktop />)}
      </Media>
    </>
  );
};

export default Work;
