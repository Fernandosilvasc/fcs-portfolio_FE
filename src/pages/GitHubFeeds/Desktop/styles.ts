import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 95vh;
  font-family: Poppins;

  scrollbar-width: thin;
  scrollbar-color: #65656c transparent;

  *::-webkit-scrollbar {
    width: 0.3125rem;
  }
  *::-webkit-scrollbar-track {
    background: transparent;
  }
  *::-webkit-scrollbar-thumb {
    background-color: #65656c;
    border-radius: 1.25rem;
  }
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
  justify-content: space-between;
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
    display: flex;
    align-items: center;
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
  }

  p {
    font-family: Poppins;
    font-weight: 500;
    font-size: 0.875rem;
    margin-right: 1.25rem;
    color: #fe7f2d;
  }

  @media screen and (max-width: 1400px) {
    height: 3.75rem;
    div {
      div {
        width: 2.125rem;
        height: 2.125rem;
      }
      h2 {
        font-size: 1.125rem;
      }
    }

    p {
      font-size: 0.75rem;
      margin-right: 1.25rem;
    }
  }

  @media screen and (max-width: 1200px) {
    height: 3.125rem;

    div {
      div {
        width: 1.875rem;
        height: 1.875rem;
      }

      h2 {
        font-size: 1rem;
        left: -1rem;
      }
    }
    p {
      font-size: 0.625rem;
      margin-right: 1.25rem;
    }
  }
`;

export const BoxProject = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: scroll;

  h2 {
    font-weight: 600;
    font-size: 1.5rem;
    color: #fe7f2d;
  }

  .loader {
    margin: 7.5rem auto;
  }

  @media screen and (max-width: 1400px) {
    h2 {
      font-size: 1.25rem;
    }

    .loader {
      margin: 7.5rem auto;
    }
  }

  @media screen and (max-width: 1200px) {
    h2 {
      font-size: 1.125rem;
    }

    .loader {
      margin: 7.5rem auto;
    }
  }
`;

export const ProjectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 33.125rem;
  margin: 2.5rem auto;

  @media screen and (max-width: 1400px) {
    width: 29.5rem;
    margin: 1.875rem auto;
  }

  @media screen and (max-width: 1200px) {
    width: 28.25rem;
    margin: 1.25rem auto;
  }
`;

export const Project = styled.div`
  display: flex;
  flex-direction: column;
  width: 15.3125rem;
  height: 11.875rem;
  background: #efefd0;
  border-radius: 0.3125rem;
  margin: 0.625rem;

  div {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin: 0.625rem 1.25rem 0 1.25rem;

    svg {
      width: 1.5625rem;
      height: 1.25rem;
    }

    a {
      svg {
        width: 12px;
        height: 12px;
        transition: all 0.2s;

        &:hover {
          width: 15px;
          height: 15px;

          path {
            fill: #ff9800;
          }
        }
      }
    }
  }

  @media screen and (max-width: 1400px) {
    width: 13.75rem;
    height: 10.625rem;
    margin: 0.5rem;

    div {
      margin: 0.5rem 1.25rem 0 1.25rem;

      svg {
        width: 1.4375rem;
        height: 1.125rem;
      }

      a {
        svg {
          width: 0.625rem;
          height: 0.625rem;
        }
      }
    }
  }

  @media screen and (max-width: 1200px) {
    width: 13.125rem;
    height: 10rem;
    margin: 0.5rem;

    div {
      svg {
        width: 1.4375rem;
        height: 1.125rem;
      }

      a {
        svg {
          width: 0.625rem;
          height: 0.625rem;
        }
      }
    }
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  h3 {
    width: 10.75rem;
    text-transform: capitalize;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 0.625rem;
    margin: 0.3125rem 0;
  }

  p {
    text-align: justify;
    font-family: Poppins;
    font-weight: 300;
    font-size: 0.625rem;
    line-height: 0.9375rem;
    margin: 0;
    margin-bottom: 0.625rem;
  }

  div {
    margin: 0 auto;
    p {
      font-weight: 500;
      margin-right: 0.3125rem;
      padding-right: 0.3125rem;
      border-right: 1px solid #000000;
    }

    p:last-child {
      border-right: none;
    }
  }

  @media screen and (max-width: 1400px) {
    h3 {
      font-size: 0.625rem;
      margin: 0.3125rem 0;
    }

    p {
      font-size: 0.5625rem;
      line-height: 0.8438rem;
      margin: 0;
      margin-bottom: 0.625rem;
    }

    div {
      margin: 0 auto;
      p {
        margin-right: 0.3125rem;
        padding-right: 0.3125rem;
      }
    }
  }

  @media screen and (max-width: 1200px) {
    h3 {
      font-size: 0.5625rem;
      margin: 0.3125rem 0;
    }

    p {
      font-size: 0.5rem;
      line-height: 0.75rem;
      margin: 0;
      margin-bottom: 0.625rem;
    }

    div {
      margin: 0 auto;
      p {
        margin-right: 0.3125rem;
        padding-right: 0.3125rem;
      }
    }
  }
`;
