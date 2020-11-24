import React from 'react';
import { Link } from 'react-router-dom';

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
          <Link to="/">
            <NavButton />
          </Link>
        </NavLink>
        <Navbar>
          <Link to="/">
            <HomeBtn />
            <p>Home</p>
          </Link>
          <Link to="about">
            <AboutBtn />
            <p>About</p>
          </Link>
          <Link to="work">
            <WorkBtn />
            <p>Work</p>
          </Link>
          <Link to="contact">
            <ContactBtn />
            <p>Contact</p>
          </Link>
          <Link to="githubFeeds">
            <GithubBtn />
            <p>Feeds</p>
          </Link>
        </Navbar>
      </NavContainer>
    </>
  );
};

export default Sidebar;
