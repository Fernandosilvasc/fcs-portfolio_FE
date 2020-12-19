import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 95vh;
`;

export const CardDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: 42.8125rem;
  height: 42.8125rem;
  background: #31313a;
  border-radius: 0.3125rem;

  @media screen and (max-width: 1400px) {
    width: 37.5rem;
    height: 37.5rem;
  }
  @media screen and (max-width: 1200px) {
    width: 32.5rem;
    height: 34.375rem;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  height: 4.375rem;
  border-bottom: 1px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(
    90deg,
    #c4c4c4 -100%,
    rgba(196, 196, 196, 0) 100%
  );

  div {
    width: 2.3125rem;
    height: 2.3125rem;
    margin-left: 1.25rem;
    border-radius: 50%;
    background: linear-gradient(
      140.24deg,
      rgba(254, 127, 45, 0.9) -80.84%,
      rgba(255, 152, 0, 0.01) 82.68%
    );
  }

  h2 {
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 1.25rem;
    color: #efefd0;
    position: relative;
    left: -1.125rem;
    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);

    span {
      color: #fe7f2d;
    }
  }

  @media screen and (max-width: 1400px) {
    height: 3.75rem;
    div {
      width: 2.125rem;
      height: 2.125rem;
    }

    h2 {
      font-size: 1.125rem;
    }
  }

  @media screen and (max-width: 1200px) {
    height: 3.125rem;

    div {
      width: 1.875rem;
      height: 1.875rem;
    }

    h2 {
      font-size: 1rem;
      left: -1rem;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  font-family: Poppins;
  padding: 0 6.25rem;

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
    margin-top: 9.375rem;
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

  @media screen and (max-width: 1400px) {
    padding: 0 5rem;

    h2 {
      font-size: 1.25rem;
      margin: 3.75rem 0;
    }

    div {
      p {
        font-size: 0.875rem;
        margin: 0;
      }

      div {
        margin-top: 2.5rem;

        svg {
          width: 1.5625rem;
          height: 1.5625rem;
        }

        p {
          font-size: 0.6875rem;
        }
      }

      & + div {
        margin-top: 1rem;
      }
    }

    a {
      margin-top: 6.875rem;
      padding: 0.75rem;
      font-size: 0.625rem;
    }
  }

  @media screen and (max-width: 1200px) {
    padding: 0 4.375rem;

    h2 {
      font-size: 1rem;
      margin: 3.125rem 0;
    }

    div {
      p {
        font-size: 0.75rem;
        margin: 0;
      }

      div {
        margin-top: 2.5rem;

        svg {
          width: 1.5625rem;
          height: 1.5625rem;
        }

        p {
          font-size: 0.625rem;
        }
      }

      & + div {
        margin-top: 1rem;
      }
    }

    a {
      margin-top: 6.25rem;
      padding: 0.625rem;
      font-size: 0.5rem;
    }
  }
`;
