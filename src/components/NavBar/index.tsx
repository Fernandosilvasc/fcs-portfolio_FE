import React from 'react';
import Media from 'react-media';

import NavBarDesktop from './Desktop/index';
import NavBarPortable from './Portable/index';

const NavBar: React.FC = () => {
  return (
    <>
      <Media query={{ maxWidth: 1000 }}>
        {matches => (matches ? <NavBarPortable /> : <NavBarDesktop />)}
      </Media>
    </>
  );
};

export default NavBar;
