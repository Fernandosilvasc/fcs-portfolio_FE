import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import { ReactComponent as NavButton } from '../../assets/navButton.svg';
import { ReactComponent as HomeBtn } from '../../assets/home-btn.svg';
import { ReactComponent as AboutBtn } from '../../assets/about-btn.svg';
import { ReactComponent as WorkBtn } from '../../assets/work-btn.svg';
import { ReactComponent as ContactBtn } from '../../assets/contact-btn.svg';
import { ReactComponent as GithubBtn } from '../../assets/github-btn.svg';
import { NavContainer, MainLink, Navbar } from './styles';

const Sidebar: React.FC = () => {
  return (
    <>
      <NavContainer>
        <MainLink>
          <Link to="/">
            <NavButton />
          </Link>
        </MainLink>

        <Navbar>
          <NavLink exact to="/">
            <HomeBtn />
            <p>Home</p>
          </NavLink>
          <NavLink to="about">
            <AboutBtn />
            <p>About</p>
          </NavLink>
          <NavLink to="/work">
            <WorkBtn />
            <p>Work</p>
          </NavLink>
          <NavLink to="/contact">
            <ContactBtn />
            <p>Contact</p>
          </NavLink>
          <NavLink to="/githubFeeds">
            <GithubBtn />
            <p>Feeds</p>
          </NavLink>
        </Navbar>
      </NavContainer>
    </>
  );
};

export default Sidebar;
