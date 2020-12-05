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
    width: 5px;
  }
  *::-webkit-scrollbar-track {
    background: transparent;
  }
  *::-webkit-scrollbar-thumb {
    background-color: #65656c;
    border-radius: 20px;
  }
`;

export const CardDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: 685px;
  height: 685px;
  background: #31313a;
  border-radius: 5px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
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
      width: 37px;
      height: 37px;
      margin-left: 20px;
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
      font-size: 20px;
      line-height: 13px;
      color: #efefd0;
      position: relative;
      left: -18px;

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
  margin-right: 20px;
`;

export const Button = styled.button<FormProps>`
  background: none;
  text-transform: uppercase;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 13px;
  color: #efefd0;
  filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 5px;
  padding: 5px 10px;
  border: none;
  margin: 0 5px;

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
  margin-top: 50px;

  &:last-child {
    margin-bottom: 50px;
  }
`;

export const Project = styled.div`
  display: flex;
  width: 545px;
  height: 245px;
  background: #1f1f23;
  box-shadow: 2px 8px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  transition: left 4s;

  &:hover {
    position: relative;
    left: -15px;
  }
`;

export const ImgProject = styled.img`
  display: flex;
  width: 330px;
  max-height: 200px;
  border-radius: 10px;
  position: relative;
  top: -20px;
  left: -20px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  color: #efefd0;
  font-family: Poppins;

  h2 {
    font-weight: 600;
    font-size: 24px;
    line-height: 13px;
  }

  div {
    display: flex;

    h3 {
      font-weight: 600;
      font-size: 12px;
      line-height: 13px;
      padding: 0 5px;
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
  top: 110px;

  a {
    display: flex;
    margin-right: 10px;
    text-align: center;
    align-items: center;
    padding: 8px 25px;
    font-weight: bold;
    font-size: 12px;
    line-height: 13px;
    background: rgba(254, 127, 45, 0.9);
    border: none;
    border-radius: 5px;
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
    border-radius: 5px;

    &:hover {
      color: ${shade(0.2, '#efefd0')};
    }
  }
`;
