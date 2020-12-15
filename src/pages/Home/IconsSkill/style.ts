import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
`;

export const ListSkill = styled.ul`
  display: flex;
  list-style: none;
  width: 250px;
  flex-wrap: wrap;
  padding: 0;

  @media screen and (max-width: 1400px) {
    width: 220px;
  }

  @media screen and (max-width: 1200px) {
    width: 200px;
  }
`;

export const Skill = styled.li`
  margin: 10px;

  @media screen and (max-width: 1400px) {
    img {
      width: 35px;
      height: 35px;
    }
  }

  @media screen and (max-width: 1200px) {
    img {
      width: 30px;
      height: 30px;
    }
  }
`;
