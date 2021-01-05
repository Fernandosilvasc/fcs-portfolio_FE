import styled from 'styled-components';

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
    line-height: 0.8125rem;
    color: #efefd0;
    position: relative;
    left: -1.125rem;
    text-shadow: 0.25rem 0.25rem 0.25rem rgba(0, 0, 0, 0.2);

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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;

  div {
    /* margin: 10px auto 0 auto; */
    width: 32.5rem;

    p {
      text-align: justify;
      font-family: Poppins;
      font-weight: lighter;
      font-size: 1rem;
      line-height: 1.5625rem;
      color: rgba(245, 245, 245, 0.55);
    }
  }

  svg {
    width: 16.875rem;
    height: 16.5625rem;
  }

  @media screen and (max-width: 1400px) {
    div {
      /* margin: 1.25rem auto; */
      width: 28.125rem;
      p {
        font-size: 0.875rem;
        line-height: 1.375rem;
      }
    }

    svg {
      width: 13.75rem;
      height: 13.4375rem;
    }
  }

  @media screen and (max-width: 1200px) {
    div {
      /* margin: 1.25rem auto; */
      width: 25rem;
      p {
        font-size: 0.875rem;
        line-height: 1.375rem;
      }
    }

    svg {
      width: 11.875rem;
      height: 11.5625rem;
    }
  }
`;
