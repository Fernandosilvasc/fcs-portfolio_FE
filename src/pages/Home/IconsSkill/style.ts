import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
`;

export const ListSkill = styled.ul`
  display: flex;
  list-style: none;
  width: 400px;
  flex-wrap: wrap;
  padding: 0;

  @media screen and (max-width: 1400px) {
    width: 350px;
  }

  @media screen and (max-width: 1200px) {
    width: 300px;
  }
`;

export const Skill = styled.li`
  margin: 10px;

  img {
    width: 2.1875rem;
    height: 2.1875rem;
  }

  @media screen and (max-width: 1400px) {
    img {
      width: 1.875rem;
      height: 1.875rem;
    }
  }
`;
