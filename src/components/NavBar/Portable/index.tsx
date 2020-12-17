import React from 'react';

import { NavLink } from 'react-router-dom';
import { Container, Nav } from './styles';

import { ReactComponent as HomeBtn } from '../../../assets/home-btn.svg';
import { ReactComponent as AboutBtn } from '../../../assets/about-btn.svg';
import { ReactComponent as WorkBtn } from '../../../assets/work-btn.svg';
import { ReactComponent as ContactBtn } from '../../../assets/contact-btn.svg';
import { ReactComponent as GithubBtn } from '../../../assets/github-btn.svg';

const NavBar: React.FC = () => {
  return (
    <>
      <Container>
        <Nav>
          <NavLink exact to="/">
            <HomeBtn />
          </NavLink>
          <NavLink to="/about">
            <AboutBtn />
          </NavLink>
          <NavLink to="/work">
            <WorkBtn />
          </NavLink>
          <NavLink to="/contact">
            <ContactBtn />
          </NavLink>
          <NavLink to="/githubFeeds">
            <GithubBtn />
          </NavLink>
        </Nav>
      </Container>
    </>
  );
};

export default NavBar;
