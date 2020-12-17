import React from 'react';
import Media from 'react-media';

import AboutDesktop from './Desktop/index';
import AboutPortable from './Portable/index';

const About: React.FC = () => {
  return (
    <>
      <Media query={{ maxWidth: 1000 }}>
        {matches => (matches ? <AboutPortable /> : <AboutDesktop />)}
      </Media>
    </>
  );
};

export default About;
