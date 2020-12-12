import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
`;

export const ListSkill = styled.ul`
  display: flex;
  list-style: none;
  width: 15.625rem;
  flex-wrap: wrap;
  padding: 0;

  @media screen and (max-width: 1400px) {
    width: 13.75rem;
  }
`;

export const Skill = styled.li`
  margin: 0.625rem;

  @media screen and (max-width: 1400px) {
    img {
      width: 2.1875rem;
      height: 2.1875rem;
    }
  }
`;
