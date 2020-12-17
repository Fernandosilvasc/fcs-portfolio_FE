import styled, { css } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 95vh;

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
  overflow: hidden;
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
      text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);

      span {
        color: #fe7f2d;
      }
    }
  }

  @media screen and (max-width: 1400px) {
    height: 3.75rem;
    div {
      div {
        width: 2.125rem;
        height: 2.125rem;
      }
    }

    h2 {
      font-size: 1.125rem;
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
  }
`;

interface ButtonProps {
  active: boolean;
}

export const Navbar = styled.div`
  display: flex;
  margin-right: 1.25rem;
`;

export const Button = styled.button<ButtonProps>`
  background: none;
  text-transform: uppercase;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 0.625rem;
  color: #efefd0;
  filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 0.3125rem;
  padding: 0.3125rem 0.625rem;
  border: none;
  margin: 0 0.3125rem;

  &:hover {
    background: rgba(254, 127, 45, 0.9);
  }

  ${(props: { active: boolean }) =>
    props.active &&
    css`
      background: rgba(254, 127, 45, 0.9);
    `}

  @media screen and (max-width: 1400px) {
    font-size: 0.5625rem;
    padding: 0.3125rem 0.625rem;
    margin: 0 0.1875rem;
  }

  @media screen and (max-width: 1200px) {
    font-size: 0.5rem;
  }
`;

export const BoxProject = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;

  .loader {
    margin: auto;
  }

  @media screen and (max-width: 1400px) {
  }

  @media screen and (max-width: 1200px) {
  }
`;

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3.125rem;

  &:last-child {
    margin-bottom: 3.125rem;
  }
`;

export const Project = styled.div`
  display: flex;
  width: 34.6875rem;
  height: 15.3125rem;
  background: #1f1f23;
  box-shadow: 0.125rem 0.5rem 0.625rem rgba(0, 0, 0, 0.25);
  border-radius: 0.625rem;
  margin-left: 1.25rem;
  transition: left 4s;

  &:hover {
    position: relative;
    left: -0.9375rem;
  }

  @media screen and (max-width: 1400px) {
    width: 31.25rem;
    height: 13.125rem;
  }
  @media screen and (max-width: 1200px) {
    width: 26.25rem;
    height: 11.875rem;
  }
`;

export const ImgProject = styled.img`
  display: flex;
  width: 20.625rem;
  max-height: 12.5rem;
  border-radius: 0.625rem;
  position: relative;
  top: -1.25rem;
  left: -1.25rem;

  @media screen and (max-width: 1400px) {
    width: 16.875rem;
    max-height: 10rem;
  }

  @media screen and (max-width: 1200px) {
    width: 15.625rem;
    max-height: 10rem;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  color: #efefd0;
  font-family: Poppins;
  justify-content: space-between;
  flex: 1;
  padding-right: 0.625rem;

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
        font-size: 0.75rem;
        padding: 0 0.3125rem;
        border-right: 2px solid #efefd0;
      }

      h3:nth-child(1) {
        padding-left: 0px;
      }

      h3:last-child {
        border-right: none;
      }
    }
  }

  @media screen and (max-width: 1400px) {
    div {
      h2 {
        font-size: 1.25rem;
      }

      div {
        h3 {
          font-size: 0.75rem;
          padding: 0 0.3125rem;
        }
      }
    }
  }

  @media screen and (max-width: 1200px) {
    div {
      h2 {
        font-size: 1.125rem;
      }

      div {
        h3 {
          font-size: 0.5625rem;
          padding: 0 0.3125rem;
        }
      }
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 1.25rem;
  justify-content: flex-end;
  /* position: relative;
  top: 6.875rem; */

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

    &:hover {
      background: ${shade(0.2, 'rgba(254, 127, 45, 0.9)')};
      color: ${shade(0.2, '#efefd0')};
    }
  }

  a:nth-child(2) {
    background: none;
    border: 1px solid rgba(254, 127, 45, 0.9);
    border-radius: 0.3125rem;

    &:hover {
      color: ${shade(0.2, '#efefd0')};
    }
  }

  @media screen and (max-width: 1400px) {
    a {
      margin-right: 0.625rem;
      padding: 0.5rem 1.25rem;
      font-size: 0.6875rem;
    }
  }

  @media screen and (max-width: 1200px) {
    a {
      margin-right: 0.625rem;
      padding: 0.4375rem 0.9375rem;
      font-size: 0.5625rem;
    }
  }
`;
