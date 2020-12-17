import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #31313a;
  height: 5vh;

  svg {
    width: 1.5625rem;
    height: 1.5625rem;
  }

  h2 {
    font-family: Poppins;
    font-weight: bold;
    font-size: 20px;
    line-height: 0.8125rem;
    color: #efefd0;
    margin-left: 0.3125rem;
  }

  @media screen and (max-width: 1400px) {
    svg {
      width: 1.4375rem;
      height: 1.4375rem;
    }

    h2 {
      font-size: 1.125rem;
      margin-left: 0.3125rem;
    }
  }

  @media screen and (max-width: 1200px) {
    svg {
      width: 1.25rem;
      height: 1.25rem;
    }

    h2 {
      font-size: 1rem;
      margin-left: 0.3125rem;
    }
  }

  @media screen and (max-width: 600px) {
    height: 4vh;

    svg {
      width: 1.25rem;
      height: 1.25rem;
    }

    h2 {
      font-size: 0.875rem;
      margin-left: 0.3125rem;
    }
  }

  @media screen and (max-width: 380px) {
    height: 3.5vh;

    svg {
      width: 0.9375rem;
      height: 0.9375rem;
    }

    h2 {
      font-size: 0.75rem;
      margin-left: 0.3125rem;
    }
  }
`;
