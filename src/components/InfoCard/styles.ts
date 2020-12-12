import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 430px;
  height: 710px;
  background: #31313a;
  border-radius: 5px;
  box-shadow: -9px -10px 0px 0px #24242b;
  filter: drop-shadow(4px 0px 10px rgba(0, 0, 0, 0.25));
`;

export const ImageBackground = styled.div`
  width: 430px;
  height: 356px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
`;

export const Abstract = styled.div`
  display: flex;
  position: relative;
  top: -50px;
  width: 0px;
  height: 0px;
  margin: 0 auto;
  border-top: 50px solid transparent;
  border-left: 215px solid #31313a;
  border-right: 215px solid #31313a;
`;

export const Content = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
`;

export const Avatar = styled.div`
  position: relative;
  top: -140px;
  margin: 0 auto;
  height: 100px;

  .avatar {
    position: relative;
    top: 0;
    left: 0;
    margin: 0 auto;
    width: 145px;
    height: 145px;
    background: #ff9800;
    border-radius: 50%;
    overflow: hidden;
    index: 1000;

    img {
      padding-left: 10px;
      width: 90%;
      transform: rotate(-15deg);
      overflow: hidden;
    }
  }

  div {
    position: relative;
    top: -140px;
    left: -10px;
    margin: 0 auto;
    width: 145px;
    height: 145px;
    border-radius: 50%;
    background: linear-gradient(
      145.12deg,
      rgba(255, 152, 0, 0.2) 13.2%,
      rgba(255, 152, 0, 0) 95.36%
    );
  }
`;

export const InfoDescription = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: -70px;
  text-align: center;
  margin: 0;

  h1 {
    margin: 0;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 34px;
    line-height: 32px;
    color: #efefd0;
  }

  p {
    margin: 10px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #fe7f2d;
  }
`;

export const Links = styled.div`
  display: 'flex';
  justify-content: center;
  align-items: center;
  position: relative;
  top: 20px;

  a {
    svg {
      width: 45px;
      height: 27px;
      path {
        fill: #efefd0;
      }
    }

    &:hover {
      cursor: pointer;
      svg {
        path {
          fill: #ff9800;
        }
      }
    }
  }
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  border-top: 0.3px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(
    90deg,
    #c4c4c4 0%,
    rgba(196, 196, 196, 0) 100%
  );

  a {
    display: flex;
    align-items: center;
    color: #efefd0;
    cursor: pointer;
    text-decoration: none;

    &:hover {
      color: #fe7f2d;
      svg {
        path {
          fill: #ff9800;
        }
      }
    }

    p {
      font-family: Poppins;
      font-style: normal;
      font-weight: 800;
      font-size: 16px;
      line-height: 24px;
      padding: 10px 0;
    }
    svg {
      margin-left: 10px;

      &:hover {
        path {
          fill: #ff9800;
        }
      }
    }
  }
`;
