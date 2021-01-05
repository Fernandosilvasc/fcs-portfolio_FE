import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;

  scrollbar-width: thin;
  scrollbar-color: #fe7f2d transparent;

  *::-webkit-scrollbar {
    width: 0.3125rem;
  }
  *::-webkit-scrollbar-track {
    background: transparent;
  }
  *::-webkit-scrollbar-thumb {
    background-color: #fe7f2d;
    border-radius: 1.25rem;
  }
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

  .loader {
    margin: 6.25rem auto 7.5rem auto;
    svg {
      width: 5.625rem;
    }
  }

  @media screen and (max-width: 768px) {
    width: 30.625rem;
    margin: 2.5rem 0 7.5rem 0;
    .loader {
      svg {
        width: 5rem;
      }
    }
  }

  @media screen and (max-width: 600px) {
    width: 24.375rem;
    margin: 2.5rem 0 6.25rem 0;
    .loader {
      svg {
        width: 3.75rem;
      }
    }
  }

  @media screen and (max-width: 480px) {
    width: 20.625rem;
    margin: 2.5rem 0 5rem 0;
  }

  @media screen and (max-width: 380px) {
    width: 18.125rem;
  }

  @media screen and (max-width: 350px) {
    width: 16.875rem;
  }
`;

export const HeaderProject = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: Poppins;

  div {
    width: 100%;
    display: flex;
    justify-content: flex-end;

    p {
      font-weight: 500;
      font-size: 0.875rem;
      margin: 1.25rem 1.875rem;
      color: #fe7f2d;
    }
  }

  h2 {
    font-weight: 600;
    font-size: 1.5rem;
    color: #fe7f2d;
  }

  @media screen and (max-width: 768px) {
    h2 {
      font-size: 1.25rem;
    }
  }

  @media screen and (max-width: 600px) {
    h2 {
      font-size: 1.125rem;
    }
  }

  @media screen and (max-width: 480px) {
    div {
      p {
        font-size: 0.75rem;
        margin: 0.9375rem 1.25rem;
      }
    }

    h2 {
      font-size: 0.9375rem;
    }
  }

  @media screen and (max-width: 380px) {
    h2 {
      font-size: 0.875rem;
    }
  }

  @media screen and (max-width: 350px) {
    div {
      p {
        font-size: 0.6875rem;
      }
    }

    h2 {
      font-size: 0.8125rem;
    }
  }
`;

export const ProjectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 33.125rem;
  margin: 2.5rem auto;

  @media screen and (max-width: 768px) {
    width: 28.125rem;
  }

  @media screen and (max-width: 600px) {
    width: 24.375rem;
    height: 26.25rem;
    flex-wrap: none;
    justify-content: center;
    overflow-y: scroll;
  }

  @media screen and (max-width: 480px) {
    width: 20.625rem;
    height: 23.875rem;
  }

  @media screen and (max-width: 380px) {
    width: 18.125rem;
    height: 22.125rem;
    margin: 1.25rem auto;
  }

  @media screen and (max-width: 350px) {
    width: 16.875rem;
  }
`;

export const Project = styled.div`
  display: flex;
  flex-direction: column;
  width: 15.9375rem;
  height: 11.25rem;
  background: #efefd0;
  border-radius: 0.3125rem;
  margin: 0.3125rem;

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
          width: 14px;
          height: 14px;

          path {
            fill: #ff9800;
          }
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    width: 13.4375rem;
    height: 10.625rem;
  }

  @media screen and (max-width: 600px) {
    width: 15.625rem;
    height: 11.875rem;
    margin: 0.625rem;
  }

  @media screen and (max-width: 480px) {
    width: 14.6875rem;
    height: 10.9375rem;
    margin: 0.5rem;
  }

  @media screen and (max-width: 380px) {
    width: 13.75rem;
    height: 10.3125rem;
    margin: 0.375rem;
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
    flex-wrap: wrap;
    justify-content: center;
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

  @media screen and (max-width: 768px) {
    p {
      font-size: 0.5625rem;
      line-height: 0.875rem;
    }
  }

  @media screen and (max-width: 600px) {
    p {
      font-size: 0.625rem;
      line-height: 0.9375rem;
    }
  }

  @media screen and (max-width: 480px) {
    p {
      font-size: 0.5625rem;
      line-height: 0.875rem;
    }
  }
`;
