import React from 'react';

import { Container, ListSkill, Skill } from './style';

import Icons from './icons';

const IconsSkill: React.FC = () => {
  return (
    <Container>
      <ListSkill>
        {Icons.map(icon => (
          <Skill key={icon.id}>
            <img src={icon.iconPath} alt={icon.title} />
          </Skill>
        ))}
      </ListSkill>
    </Container>
  );
};

export default IconsSkill;
