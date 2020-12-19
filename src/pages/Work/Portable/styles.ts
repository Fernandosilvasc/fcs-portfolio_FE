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
  width: 590px;
  background: #31313a;
  border: 2px solid #efefd0;
  border-radius: 5px;
  margin: 40px 0 120px 0;
  font-family: Poppins;

  @media screen and (max-width: 768px) {
    width: 490px;
    margin: 40px 0 120px 0;
  }

  @media screen and (max-width: 600px) {
    width: 390px;
    margin: 40px 0 80px 0;
  }

  @media screen and (max-width: 480px) {
    width: 330px;
    margin: 40px 0 80px 0;
  }

  @media screen and (max-width: 380px) {
    width: 290px;
    margin: 30px 0 80px 0;
  }

  @media screen and (max-width: 350px) {
    width: 270px;
    margin: 40px 0 80px 0;
  }
`;

export const FilterButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px; // change later
`;
interface ButtonProps {
  active: boolean;
}

export const Button = styled.button<ButtonProps>`
  background: none;
  text-transform: uppercase;
  font-family: Poppins;
  font-weight: 600;
  font-size: 12px;
  color: #efefd0;
  filter: drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25));
  border-radius: 0.3125rem;
  padding: 5px 10px;
  border: none;
  margin: 0 5px;
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
    font-size: 10px;
    padding: 5px 10px;
    margin: 0 5px;
  }

  @media screen and (max-width: 480px) {
    font-size: 10px;
    padding: 4px 10px;
    margin: 0 3px;
  }

  @media screen and (max-width: 380px) {
    font-size: 8px;
    padding: 4px 8px;
    margin: 0 3px;
  }
`;

export const BoxProject = styled.div`
  height: 470px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;

  .loader {
    margin: auto;
  }

  @media screen and (max-width: 768px) {
    height: 450px;
  }

  @media screen and (max-width: 600px) {
    height: 370px;
  }

  @media screen and (max-width: 480px) {
    height: 320px;
  }

  @media screen and (max-width: 380px) {
    height: 310px;
  }

  @media screen and (max-width: 350px) {
    height: 290px;
  }
`;

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 585px;

  @media screen and (max-width: 768px) {
    width: 485px;
  }

  @media screen and (max-width: 600px) {
    width: 385px;
  }

  @media screen and (max-width: 480px) {
    width: 325px;
  }

  @media screen and (max-width: 380px) {
    width: 285px;
  }

  @media screen and (max-width: 350px) {
    width: 265px;
  }
`;

export const Project = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 420px;
  height: 390px;
  background: #1f1f23;
  box-shadow: 0.125rem 0.5rem 0.625rem rgba(0, 0, 0, 0.25);
  border-radius: 0.625rem;
  margin: 40px 0;

  @media screen and (max-width: 768px) {
    width: 400px;
    height: 370px;
  }

  @media screen and (max-width: 600px) {
    width: 330px;
    height: 300px;
  }

  @media screen and (max-width: 480px) {
    width: 270px;
    height: 250px;
  }

  @media screen and (max-width: 380px) {
    width: 250px;
    height: 240px;
  }

  @media screen and (max-width: 350px) {
    width: 230px;
    height: 220px;
  }
`;

export const ImgProject = styled.img`
  display: flex;
  width: 340px;
  max-height: 220px;
  border-radius: 10px;
  position: relative;
  top: -40px;

  @media screen and (max-width: 768px) {
    width: 320px;
    max-height: 200px;
  }

  @media screen and (max-width: 600px) {
    width: 270px;
    max-height: 165px;
  }

  @media screen and (max-width: 480px) {
    width: 220px;
    max-height: 135px;
  }

  @media screen and (max-width: 380px) {
    width: 210px;
    max-height: 130px;
  }

  @media screen and (max-width: 350px) {
    width: 200px;
    max-height: 125px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 330px;
  color: #efefd0;

  justify-content: space-between;
  flex: 1;

  div {
    h2 {
      font-weight: 600;
      font-size: 24px;
      margin: 10px 0;
    }

    div {
      display: flex;

      h3 {
        font-weight: 600;
        font-size: 14px;
        padding: 0 5px;
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
    width: 320px;

    div {
      h2 {
        font-size: 22px;
        margin: 8px 0;
      }

      div {
        h3 {
          font-size: 12px;
        }
      }
    }
  }

  @media screen and (max-width: 600px) {
    width: 270px;

    div {
      h2 {
        position: relative;
        top: -20px;
        font-size: 20px;
      }

      div {
        h3 {
          position: relative;
          top: -20px;
          font-size: 10px;
        }
      }
    }
  }

  @media screen and (max-width: 480px) {
    width: 220px;

    div {
      h2 {
        font-size: 18px;
      }

      div {
        h3 {
          font-size: 9px;
        }
      }
    }
  }

  @media screen and (max-width: 380px) {
    width: 210px;

    div {
      h2 {
        font-size: 16px;
      }

      div {
        h3 {
          font-size: 8px;
        }
      }
    }
  }

  @media screen and (max-width: 350px) {
    width: 200px;

    div {
      h2 {
        font-size: 14px;
      }

      div {
        h3 {
          font-size: 8px;
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
    transition: all 0.4s;

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

  @media screen and (max-width: 768px) {
    margin-bottom: 20px;

    a {
      margin-right: 10px;
      padding: 8px 25px;
      font-size: 10px;
    }
  }

  @media screen and (max-width: 600px) {
    a {
      margin-right: 10px;
      padding: 7px 20px;
      font-size: 9px;
    }
  }

  @media screen and (max-width: 480px) {
    a {
      margin-right: 10px;
      padding: 6px 18px;
      font-size: 8px;
    }
  }

  @media screen and (max-width: 350px) {
    a {
      margin-right: 6px;
      padding: 5px 16px;
      font-size: 7px;
    }
  }
`;
