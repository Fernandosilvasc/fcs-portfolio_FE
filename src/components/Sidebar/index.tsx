import React from 'react';

import { ReactComponent as NavButton } from '../../assets/navButton.svg';
import { ReactComponent as HomeBtn } from '../../assets/home-btn.svg';
import { ReactComponent as AboutBtn } from '../../assets/about-btn.svg';
import { ReactComponent as WorkBtn } from '../../assets/work-btn.svg';
import { ReactComponent as ContactBtn } from '../../assets/contact-btn.svg';
import { ReactComponent as GithubBtn } from '../../assets/github-btn.svg';
import { NavContainer, NavLink, Navbar } from './styles';

const Sidebar: React.FC = () => {
  return (
    <>
      <NavContainer>
        <NavLink>
          <a href="/">
            <NavButton />
          </a>
        </NavLink>
        <Navbar>
          <a href="home">
            <HomeBtn />
            <p>Home</p>
          </a>
          <a href="about">
            <AboutBtn />
            <p>About</p>
          </a>
          <a href="work">
            <WorkBtn />
            <p>Work</p>
          </a>
          <a href="contact">
            <ContactBtn />
            <p>Contact</p>
          </a>
          <a href="githubFeeds">
            <GithubBtn />
            <p>Feeds</p>
          </a>
        </Navbar>
      </NavContainer>
    </>
  );
};

export default Sidebar;
