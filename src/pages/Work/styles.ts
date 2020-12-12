import styled, { css } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;

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
      text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);

      span {
        color: #fe7f2d;
      }
    }
  }
`;

interface FormProps {
  active: boolean;
}

export const Navbar = styled.div`
  display: flex;
  margin-right: 1.25rem;
`;

export const Button = styled.button<FormProps>`
  background: none;
  text-transform: uppercase;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 0.625rem;
  line-height: 0.8125rem;
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
`;

export const BoxProject = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
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
  width: 34.0625rem;
  height: 15.3125rem;
  background: #1f1f23;
  box-shadow: 0.125rem 0.5rem 0.625rem rgba(0, 0, 0, 0.25);
  border-radius: 0.625rem;
  transition: left 4s;

  &:hover {
    position: relative;
    left: -0.9375rem;
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
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  color: #efefd0;
  font-family: Poppins;

  h2 {
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 0.8125rem;
  }

  div {
    display: flex;

    h3 {
      font-weight: 600;
      font-size: 0.75rem;
      line-height: 0.8125rem;
      padding: 0 0.3125rem;
      border-right: 2px solid #efefd0;
    }

    h3:last-child {
      border-right: none;
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  top: 6.875rem;

  a {
    display: flex;
    margin-right: 0.625rem;
    text-align: center;
    align-items: center;
    padding: 0.5rem 1.5625rem;
    font-weight: bold;
    font-size: 0.75rem;
    line-height: 0.8125rem;
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
`;
