import React from 'react';
import { Container, Title } from './styles';

interface HeaderProps {
  boldTitle: string;
  title: string;
}

const Header: React.FC<HeaderProps> = ({ boldTitle, title }: HeaderProps) => {
  return (
    <>
      <Container>
        <Title>
          <div />
          <h2>
            <span>{boldTitle}</span>
            {title}
          </h2>
        </Title>
      </Container>
    </>
  );
};

export default Header;
