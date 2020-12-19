import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`;

export const CardDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 36.875rem;
  background: #31313a;
  border: 2px solid #efefd0;
  border-radius: 0.3125rem;
  margin: 2.5rem 0 7.5rem 0;

  @media screen and (max-width: 768px) {
    width: 30.625rem;
    margin: 2.5rem 0 7.5rem 0;
  }

  @media screen and (max-width: 600px) {
    width: 24.375rem;
    margin: 2.5rem 0 5rem 0;
  }

  @media screen and (max-width: 480px) {
    width: 20.625rem;
  }

  @media screen and (max-width: 380px) {
    width: 18.125rem;
    margin: 1.875rem 0 5rem 0;
  }

  @media screen and (max-width: 350px) {
    width: 16.875rem;
    margin: 2.5rem 0 5rem 0;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Poppins;

  div {
    width: 23.125rem;
    margin: 2.5rem auto;

    p {
      font-weight: normal;
      font-size: 1.25rem;
      line-height: 2.25rem;
      color: rgba(245, 245, 245, 0.55);
    }
  }

  svg {
    width: 18.125rem;
    height: 17.8125rem;
    margin-bottom: 5rem;
  }

  @media screen and (max-width: 768px) {
    div {
      width: 21.875rem;

      p {
        font-size: 1.125rem;
        line-height: 2.125rem;
      }
    }

    svg {
      width: 17.1875rem;
      height: 16.875rem;
    }
  }

  @media screen and (max-width: 600px) {
    div {
      width: 17.5rem;

      p {
        font-size: 1rem;
        line-height: 2rem;
      }
    }

    svg {
      width: 16.875rem;
      height: 16.5625rem;
    }
  }

  @media screen and (max-width: 480px) {
    div {
      width: 14.375rem;
      margin: 1.875rem auto;

      p {
        font-size: 0.875rem;
        line-height: 1.75rem;
      }
    }

    svg {
      width: 13.75rem;
      height: 13.4375rem;
      margin-bottom: 3.75rem;
    }
  }

  @media screen and (max-width: 380px) {
    div {
      width: 11.875rem;
      margin: 1.875rem auto 1.25rem auto;

      p {
        font-size: 0.75rem;
        line-height: 1.75rem;
      }
    }

    svg {
      width: 13.125rem;
      height: 12.8125rem;
      margin-bottom: 2.5rem;
    }
  }

  @media screen and (max-width: 350px) {
    svg {
      width: 11.875rem;
      height: 11.5625rem;
      margin-bottom: 2.5rem;
    }
  }
`;
