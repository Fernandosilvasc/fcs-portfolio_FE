import styled from 'styled-components';

// export const styleHandle = (display) => {

// }

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
  height: 356px;
  img {
    width: 430px;
    height: 356px;
    border-radius: 5px;
  }
  div {
    display: flex;
    position: relative;
    top: -55px;
    width: 0px;
    height: 0px;
    margin: 0 auto;
    border-top: 50px solid transparent;
    border-left: 215px solid #31313a;
    border-right: 215px solid #31313a;
  }
`;

export const AvatarContainer = styled.div`
  position: relative;
  top: -80px;
  margin: 0 auto;
  height: 150px;

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

export const Description = styled.div`
  position: relative;
  top: -60px;
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
  display: ${props => props.theme.main};
  justify-content: center;
  align-items: center;
  position: relative;
  top: -50px;

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

Links.defaultProps = {
  theme: {
    main: 'flex',
  },
};

export const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  bottom: ${props => props.theme.main};
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
    /* width: 150px; */
    display: flex;
    /* margin: 0 auto; */
    color: #efefd0;
    cursor: pointer;
    text-decoration: none;

    &:hover {
      color: #fe7f2d;
    }

    p {
      /* width: 120px; */
      font-family: Poppins;
      font-style: normal;
      font-weight: 800;
      font-size: 16px;
      line-height: 24px;
      padding: 10px 0;
    }
  }
  svg {
    margin-left: 10px;
  }
`;

Footer.defaultProps = {
  theme: {
    main: '-20px',
  },
};
