import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;

  @media screen and (max-width: 380px) {
    justify-content: center;
  }
`;

export const Nav = styled.div`
  display: flex;
  align-items: center;
  background: #31313a;
  border: 2px solid #fe7f2d;
  border-radius: 5px;
  margin: 40px 40px 0 0;

  a {
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      width: 50px;
      height: 45px;
      margin: 15px 10px;
      path {
        transition: all 0.4s;
      }
    }

    &:hover {
      cursor: pointer;
      svg {
        path {
          fill: #fe7f2d;
        }
      }
    }
  }

  .active {
    svg {
      path {
        fill: #fe7f2d;
      }
    }
  }

  @media screen and (max-width: 768px) {
    margin: 40px 40px 0 0;

    a {
      svg {
        width: 40px;
        height: 35px;
        margin: 10px;
      }
    }
  }

  @media screen and (max-width: 600px) {
    margin: 40px 40px 0 0;

    a {
      svg {
        width: 30px;
        height: 25px;
        margin: 8px;
      }
    }
  }

  @media screen and (max-width: 380px) {
    margin: 30px 0 0 0;

    /* a {
      svg {
        width: 27px;
        height: 23px;
        margin: 6px;
      }
    } */
  }

  /* @media screen and (max-width: 350px) {
    margin: 30px 30px 0 0;
  } */
`;
