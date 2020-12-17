import React from 'react';
import { Container, Title } from './styles';

interface TitleBarProps {
  boldTitle: string;
  title: string;
}

const TitleBar: React.FC<TitleBarProps> = ({
  boldTitle,
  title,
}: TitleBarProps) => {
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

export default TitleBar;
