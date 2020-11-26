import React from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  CardDescription,
  Header,
  BoxContainer,
  BoxProject,
} from './styles';

import Sidebar from '../../components/Sidebar/index';
import InfoCard from '../../components/InfoCard/index';
import happyImg from '../../assets/happy.png';
import proCaliberLacrosseImg from '../../assets/pro_caliber_lacrosse.png';
import goBarberImg from '../../assets/gobarber.png';

const Work: React.FC = () => {
  return (
    <>
      <Container>
        <Sidebar />
        <InfoCard />
        <CardDescription>
          <Header>
            <div>
              <div />
              <h2>
                <span>Recent </span>
                Works
              </h2>
            </div>
            <ul>
              <li>All</li>
              <li>Backend</li>
              <li>FrontEnd</li>
              <li>Mobile</li>
            </ul>
          </Header>

          <BoxContainer>
            <BoxProject>
              <img src={goBarberImg} alt="GoBarber" />
              <div>
                <h2>GoBarber</h2>
                <h3>NodeJS | ReactJS | React Native</h3>
                <div>
                  <Link to="/">Details</Link>
                  <a href="/">Launch</a>
                </div>
              </div>
            </BoxProject>

            <BoxProject>
              <img src={happyImg} alt="Happy" />
              <div>
                <h2>Happy</h2>
                <h3>NodeJS | ReactJS | React Native</h3>
                <div>
                  <Link to="/">Details</Link>
                  <a href="/">Launch</a>
                </div>
              </div>
            </BoxProject>

            <BoxProject>
              <img src={proCaliberLacrosseImg} alt="Pro Caliber Lacrosse" />
              <div>
                <h2>ProCaliber</h2>
                <h3>HTML | CSS | JS</h3>
                <div>
                  <Link to="/">Details</Link>
                  <a href="/">Launch</a>
                </div>
              </div>
            </BoxProject>
          </BoxContainer>
        </CardDescription>
      </Container>
    </>
  );
};

export default Work;
