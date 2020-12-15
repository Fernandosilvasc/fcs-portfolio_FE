import React from 'react';
import { ReactComponent as CopyRight } from '../../assets/copyRight.svg';
import { Container } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <CopyRight />
      <h2>2020 Fernando Silva</h2>
    </Container>
  );
};

export default Footer;
