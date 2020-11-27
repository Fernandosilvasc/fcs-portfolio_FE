import React, { useState } from 'react';

import { Navbar, Button } from './styles';

const NavBar: React.FC = () => {
  const [buttonActive, setButtonActive] = useState({ active: 0 });

  const buttons = [
    {
      title: 'All',
      id: 0,
    },
    {
      title: 'Backend',
      id: 1,
    },
    {
      title: 'FrontEnd',
      id: 2,
    },
    {
      title: 'Mobile',
      id: 3,
    },
  ];

  return (
    <Navbar>
      {buttons.map(button => (
        <Button
          type="button"
          key={button.id}
          active={buttonActive.active === button.id}
          onClick={() => {
            setButtonActive({ active: button.id });
          }}
        >
          {button.title}
        </Button>
      ))}
    </Navbar>
  );
};

export default NavBar;
