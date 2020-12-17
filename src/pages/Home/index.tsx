import React from 'react';
import Media from 'react-media';

import HomeDesktop from './Desktop/index';
import HomePortable from './Portable/index';

const Home: React.FC = () => {
  return (
    <>
      <Media query={{ maxWidth: 1000 }}>
        {matches => (matches ? <HomePortable /> : <HomeDesktop />)}
      </Media>
    </>
  );
};

export default Home;
