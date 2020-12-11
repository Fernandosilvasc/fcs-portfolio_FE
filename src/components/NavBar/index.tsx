import React, { useState } from 'react';

import { Navbar, Button } from './styles';

import buttons from '../../data/buttons';

const NavBar: React.FC = () => {
  const [buttonActive, setButtonActive] = useState({ active: 0, type: 'all' });

  return (
    <Navbar>
      {buttons.map(button => (
        <Button
          type="button"
          key={button.id}
          active={buttonActive.active === button.id}
          onClick={() => {
            setButtonActive({ active: button.id, type: button.title });
          }}
        >
          {button.title}
        </Button>
      ))}
    </Navbar>
  );
};

export default NavBar;
