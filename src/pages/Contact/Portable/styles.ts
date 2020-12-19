import styled from 'styled-components';
import { shade } from 'polished';

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
    margin: 2.5rem 0 6.25rem 0;
  }

  @media screen and (max-width: 600px) {
    width: 24.375rem;
    margin: 2.5rem 0 5rem 0;
  }

  @media screen and (max-width: 480px) {
    width: 20.625rem;
  }

  @media screen and (max-width: 380px) {
    margin: 1.875rem 0 5rem 0;
    width: 18.125rem;
  }

  @media screen and (max-width: 350px) {
    width: 16.875rem;
  }
`;

export const Content = styled.div`
  display: flex;
  width: 28.125rem;
  flex-direction: column;
  align-items: center;
  font-family: Poppins;

  h2 {
    text-align: center;
    font-weight: bold;
    font-size: 1.5rem;
    color: #efefd0;
    margin: 4.375rem 0;
  }

  div {
    p {
      font-weight: 500;
      font-size: 0.9375rem;
      line-height: 1.5rem;
      color: #fe7f2d;
      margin: 0;
    }

    div {
      display: flex;
      margin-top: 2.5rem;

      svg {
        width: 1.6875rem;
        height: 1.6875rem;
        margin: 0;
        margin-right: 0.625rem;
      }

      p {
        margin: 0;
        font-weight: 500;
        font-size: 0.75rem;
      }
    }

    & + div {
      margin-top: 1rem;
    }
  }

  a {
    margin: 3.125rem;
    padding: 0.9375rem;
    font-weight: bold;
    font-size: 0.75rem;
    line-height: 0.8125rem;
    background: rgba(254, 127, 45, 0.9);
    border-radius: 0.3125rem;
    filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));
    text-decoration: none;
    color: #efefd0;
    transition: all 0.4s;

    &:hover {
      background: ${shade(0.2, 'rgba(254, 127, 45, 0.9)')};
      color: ${shade(0.2, '#efefd0')};
    }
  }

  @media screen and (max-width: 768px) {
    width: 23.125rem;

    h2 {
      font-size: 1.25rem;
      margin: 3.125rem 0;
    }

    div {
      p {
        font-size: 0.875rem;
        line-height: 1.5rem;
      }

      div {
        svg {
          width: 1.6875rem;
          height: 1.6875rem;
          margin-right: 0.625rem;
        }

        p {
          font-size: 0.75rem;
        }
      }

      & + div {
        margin-top: 1rem;
      }
    }

    a {
      margin: 3.125rem;
      padding: 0.875rem;
      font-size: 0.6875rem;
      line-height: 0.75rem;
    }
  }

  @media screen and (max-width: 600px) {
    width: 18.125rem;

    h2 {
      font-size: 1rem;
      margin: 2.5rem 0;
    }

    div {
      p {
        font-size: 0.75rem;
        line-height: 1.375rem;
      }

      div {
        svg {
          width: 1.5625rem;
          height: 1.5625rem;
          margin-right: 0.625rem;
        }

        p {
          font-size: 0.6875rem;
        }
      }

      & + div {
        margin-top: 0.75rem;
      }
    }

    a {
      margin: 2.5rem;
      padding: 0.75rem;
      font-size: 0.625rem;
      line-height: 0.6875rem;
    }
  }

  @media screen and (max-width: 480px) {
    width: 15.625rem;

    h2 {
      font-size: 0.875rem;
      margin: 2.5rem 0;
    }

    div {
      p {
        font-size: 0.6875rem;
        line-height: 1.3125rem;
      }

      div {
        svg {
          width: 1.4375rem;
          height: 1.4375rem;
        }

        p {
          font-size: 0.625rem;
        }
      }

      & + div {
        margin-top: 0.625rem;
      }
    }

    a {
      margin: 1.875rem;
      padding: 0.625rem;
      font-size: 0.5rem;
      line-height: 0.5625rem;
    }
  }

  @media screen and (max-width: 380px) {
    width: 13.75rem;

    h2 {
      font-size: 0.8125rem;
      margin: 2.1875rem 0;
    }

    div {
      p {
        font-size: 0.625rem;
        line-height: 1.25rem;
      }

      div {
        svg {
          width: 1.25rem;
          height: 1.25rem;
        }
      }
    }

    a {
      margin: 1.875rem;
      padding: 0.5rem;
      font-size: 0.4375rem;
      line-height: 0.5rem;
    }
  }

  @media screen and (max-width: 350px) {
    width: 12.5rem;

    h2 {
      font-size: 0.75rem;
      margin: 2.1875rem 0;
    }

    div {
      p {
        font-size: 0.625rem;
        line-height: 1.125rem;
      }
    }
  }
`;
