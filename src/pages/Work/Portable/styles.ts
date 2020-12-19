import styled, { css } from 'styled-components';
import { shade } from 'polished';

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
  font-family: Poppins;

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
    margin: 2.5rem 0 5rem 0;
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

export const FilterButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2.5rem;
`;
interface ButtonProps {
  active: boolean;
}

export const Button = styled.button<ButtonProps>`
  background: none;
  text-transform: uppercase;
  font-family: Poppins;
  font-weight: 600;
  font-size: 0.75rem;
  color: #efefd0;
  filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 0.3125rem;
  padding: 0.3125rem 0.625rem;
  border: none;
  margin: 0 0.3125rem;
  transition: background 0.4s;

  &:hover {
    background: rgba(254, 127, 45, 0.9);
  }

  ${(props: { active: boolean }) =>
    props.active &&
    css`
      background: rgba(254, 127, 45, 0.9);
    `}

  @media screen and (max-width: 600px) {
    font-size: 0.625rem;
    padding: 0.3125rem 0.625rem;
    margin: 0 0.3125rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 0.625rem;
    padding: 0.25rem 0.625rem;
    margin: 0 0.1875rem;
  }

  @media screen and (max-width: 380px) {
    font-size: 0.5rem;
    padding: 0.25rem 0.5rem;
    margin: 0 0.1875rem;
  }
`;

export const BoxProject = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 35rem;

  .loader {
    margin: auto;
  }

  @media screen and (max-width: 768px) {
    height: 27.5rem;
  }

  @media screen and (max-width: 600px) {
    height: 23.125rem;

    .loader {
      svg {
        width: 5rem;
      }
    }
  }

  @media screen and (max-width: 480px) {
    height: 20rem;
    .loader {
      svg {
        width: 4.375rem;
      }
    }
  }

  @media screen and (max-width: 380px) {
    height: 19.375rem;
    .loader {
      svg {
        width: 3.75rem;
      }
    }
  }

  @media screen and (max-width: 350px) {
    height: 18.125rem;
  }
`;

export const ProjectContainer = styled.div`
  width: 36.5625rem;
  height: 28.75rem;
  overflow-y: scroll;

  @media screen and (max-width: 768px) {
    width: 30.3125rem;
    height: 27.5rem;
  }

  @media screen and (max-width: 600px) {
    width: 24.0625rem;
    height: 23.125rem;
  }

  @media screen and (max-width: 480px) {
    width: 20.3125rem;
    height: 20rem;
  }

  @media screen and (max-width: 380px) {
    width: 17.8125rem;
    height: 19.375rem;
  }

  @media screen and (max-width: 350px) {
    width: 16.5625rem;
    height: 18.125rem;
  }
`;

export const Project = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 26.25rem;
  height: 24.375rem;
  background: #1f1f23;
  box-shadow: 0.125rem 0.5rem 0.625rem rgba(0, 0, 0, 0.25);
  border-radius: 0.625rem;
  margin: 2.5rem auto 4.375rem auto;

  &:last-child {
    margin-bottom: 1.5625rem;
  }

  @media screen and (max-width: 768px) {
    width: 25rem;
    height: 23.125rem;
  }

  @media screen and (max-width: 600px) {
    width: 20.625rem;
    height: 18.75rem;
  }

  @media screen and (max-width: 480px) {
    width: 16.875rem;
    height: 15.625rem;
  }

  @media screen and (max-width: 380px) {
    width: 15.625rem;
    height: 15rem;
  }

  @media screen and (max-width: 350px) {
    width: 14.375rem;
    height: 13.75rem;
  }
`;

export const ImgProject = styled.img`
  display: flex;
  width: 21.25rem;
  max-height: 13.75rem;
  border-radius: 0.625rem;
  position: relative;
  top: -2.5rem;

  @media screen and (max-width: 768px) {
    width: 20rem;
    max-height: 12.5rem;
  }

  @media screen and (max-width: 600px) {
    width: 16.875rem;
    max-height: 10.3125rem;
  }

  @media screen and (max-width: 480px) {
    width: 13.75rem;
    max-height: 8.4375rem;
  }

  @media screen and (max-width: 380px) {
    width: 13.125rem;
    max-height: 8.125rem;
  }

  @media screen and (max-width: 350px) {
    width: 12.5rem;
    max-height: 7.8125rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 20.625rem;
  color: #efefd0;

  justify-content: space-between;
  flex: 1;

  div {
    h2 {
      font-weight: 600;
      font-size: 1.5rem;
      margin: 0.625rem 0;
    }

    div {
      display: flex;

      h3 {
        font-weight: 600;
        font-size: 0.875rem;
        padding: 0 0.3125rem;
        border-right: 2px solid #efefd0;
      }

      h3:nth-child(1) {
        padding-left: 0rem;
      }

      h3:last-child {
        border-right: none;
      }
    }
  }

  @media screen and (max-width: 768px) {
    width: 20rem;

    div {
      h2 {
        font-size: 1.375rem;
        margin: 0.5rem 0;
      }

      div {
        h3 {
          font-size: 0.75rem;
        }
      }
    }
  }

  @media screen and (max-width: 600px) {
    width: 16.875rem;

    div {
      h2 {
        position: relative;
        top: -1.25rem;
        font-size: 1.25rem;
      }

      div {
        h3 {
          position: relative;
          top: -1.25rem;
          font-size: 0.625rem;
        }
      }
    }
  }

  @media screen and (max-width: 480px) {
    width: 13.75rem;

    div {
      h2 {
        font-size: 1.125rem;
      }

      div {
        h3 {
          font-size: 0.5625rem;
        }
      }
    }
  }

  @media screen and (max-width: 380px) {
    width: 13.125rem;

    div {
      h2 {
        font-size: 1rem;
      }

      div {
        h3 {
          font-size: 0.5rem;
        }
      }
    }
  }

  @media screen and (max-width: 350px) {
    width: 12.5rem;

    div {
      h2 {
        font-size: 0.875rem;
      }

      div {
        h3 {
          font-size: 0.5rem;
        }
      }
    }
  }
`;

export const Links = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 1.25rem;
  justify-content: center;

  a {
    display: flex;
    margin-right: 0.625rem;
    text-align: center;
    align-items: center;
    padding: 0.5rem 1.5625rem;
    font-weight: bold;
    font-size: 0.75rem;
    background: rgba(254, 127, 45, 0.9);
    border: none;
    border-radius: 0.3125rem;
    filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));
    text-decoration: none;
    color: #efefd0;
    transition: color 0.4s;
    transition: background 0.4s;

    &:hover {
      background: ${shade(0.2, 'rgba(254, 127, 45, 0.9)')};
      color: ${shade(0.2, '#efefd0')};
    }
  }

  a:nth-child(2) {
    background: none;
    border: 1px solid rgba(254, 127, 45, 0.9);
    border-radius: 0.3125rem;
    transition: color 0.4s;

    &:hover {
      color: ${shade(0.2, '#efefd0')};
    }
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 1.25rem;

    a {
      margin-right: 0.625rem;
      padding: 0.5rem 1.5625rem;
      font-size: 0.625rem;
    }
  }

  @media screen and (max-width: 600px) {
    a {
      margin-right: 0.625rem;
      padding: 0.4375rem 1.25rem;
      font-size: 0.5625rem;
    }
  }

  @media screen and (max-width: 480px) {
    a {
      margin-right: 0.625rem;
      padding: 0.375rem 1.125rem;
      font-size: 0.5rem;
    }
  }

  @media screen and (max-width: 350px) {
    a {
      margin-right: 0.375rem;
      padding: 0.3125rem 1rem;
      font-size: 0.4375rem;
    }
  }
`;
