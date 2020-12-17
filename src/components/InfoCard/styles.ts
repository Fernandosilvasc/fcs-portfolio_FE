import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 26.875rem;
  height: 44.375rem;
  background: #31313a;
  border-radius: 0.3125rem;
  box-shadow: -0.5625rem -0.625rem 0 0 #24242b;
  filter: drop-shadow(0.25rem 0 0.625rem rgba(0, 0, 0, 0.25));

  @media screen and (max-width: 1400px) {
    width: 21.5625rem;
    height: 39.0625rem;
  }

  @media screen and (max-width: 1200px) {
    width: 20rem;
    height: 35.9375rem;
  } ;
`;

export const ImageBackground = styled.div`
  width: 26.875rem;
  height: 22.25rem;
  img {
    width: 100%;
    height: 100%;
    border-radius: 0.3125rem;
  }

  @media screen and (max-width: 1400px) {
    width: 21.5625rem;
    height: 16.9375rem;
  }

  @media screen and (max-width: 1200px) {
    width: 20rem;
    height: 16.875rem;
  } ;
`;

export const Abstract = styled.div`
  display: flex;
  position: relative;
  top: -3.125rem;
  width: 0;
  height: 0;
  margin: 0 auto;
  border-top: 3.125rem solid transparent;
  border-left: 13.4375rem solid #31313a;
  border-right: 13.4375rem solid #31313a;

  @media screen and (max-width: 1400px) {
    top: -2.1875rem;
    border-top: 2.1875rem solid transparent;
    border-left: 10.7813rem solid #31313a;
    border-right: 10.7813rem solid #31313a;
  }

  @media screen and (max-width: 1200px) {
    top: -2.1875rem;
    border-top: 35px solid transparent;
    border-left: 10rem solid #31313a;
    border-right: 10rem solid #31313a;
  }
`;

export const Content = styled.div`
  min-height: 234px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1400px) {
    min-height: 249px;
  }

  @media screen and (max-width: 1200px) {
    min-height: 210px;
  }
`;

export const Avatar = styled.div`
  position: relative;
  top: -8.75rem;
  margin: 0 auto;
  height: 6.25rem;

  .avatar {
    position: relative;
    top: 0;
    left: 0;
    margin: 0 auto;
    width: 9.0625rem;
    height: 9.0625rem;
    background: #fe7f2d;
    border-radius: 50%;
    overflow: hidden;
    index: 1000;

    img {
      padding-left: 0.625rem;
      width: 90%;
      transform: rotate(-15deg);
      overflow: hidden;
    }
  }

  div {
    position: relative;
    top: -8.75rem;
    left: -0.625rem;
    margin: 0 auto;
    width: 9.0625rem;
    height: 9.0625rem;
    border-radius: 50%;
    background: linear-gradient(
      145.12deg,
      rgba(255, 152, 0, 0.2) 13.2%,
      rgba(255, 152, 0, 0) 95.36%
    );
  }

  @media screen and (max-width: 1400px) {
    top: -6.5625rem;

    .avatar {
      width: 6.875rem;
      height: 6.875rem;
    }

    div {
      top: -6.5625rem;
      width: 6.875rem;
      height: 6.875rem;
    }
  }

  @media screen and (max-width: 1200px) {
    top: -5.9375rem;

    .avatar {
      width: 6.25rem;
      height: 6.25rem;
    }

    div {
      top: -5.9375rem;
      width: 6.25rem;
      height: 6.25rem;
    }
  }
`;

export const InfoDescription = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: -4.375rem;
  text-align: center;
  margin: 0;
  font-family: 'Poppins';

  h1 {
    margin: 0;
    font-weight: 500;
    font-size: 2.125rem;
    color: #efefd0;
    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);
  }

  p {
    margin: 0.625rem;
    font-weight: 500;
    font-size: 1rem;
    color: #fe7f2d;
    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);
  }

  @media screen and (max-width: 1400px) {
    h1 {
      font-size: 1.75rem;
    }

    p {
      font-size: 0.875rem;
    }
  }

  @media screen and (max-width: 1200px) {
    h1 {
      font-size: 1.5rem;
    }

    p {
      font-size: 0.75rem;
    }
  } ;
`;

export const Links = styled.div`
  display: 'flex';
  justify-content: center;
  align-items: center;
  position: relative;
  top: 1.25rem;

  a {
    svg {
      width: 2.8125rem;
      height: 1.6875rem;
      path {
        fill: #efefd0;
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

  @media screen and (max-width: 1400px) {
    top: 0.625rem;

    a {
      svg {
        width: 2.375rem;
        height: 1.25rem;
      }
    }
  }

  @media screen and (max-width: 1200px) {
    top: 0.625rem;

    a {
      svg {
        width: 2.25rem;
        height: 1.125rem;
      }
    }
  } ;
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
          fill: #fe7f2d;
        }
      }
    }

    p {
      font-family: Poppins;
      font-weight: 800;
      font-size: 1rem;
      padding: 0.625rem 0;
      text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);
      margin: 0px;
    }
    svg {
      margin-left: 0.625rem;
      text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);

      &:hover {
        path {
          fill: #fe7f2d;
        }
      }
    }
  }

  @media screen and (max-width: 1400px) {
    a {
      p {
        font-size: 0.875rem;
      }
      svg {
        margin-left: 0.3125rem;
        width: 1rem;
        height: 1rem;
      }
    }
  }

  @media screen and (max-width: 1200px) {
    a {
      p {
        font-size: 12px;
        margin: 0px;
      }
      svg {
        margin-left: 0.3125rem;
        width: 0.875rem;
        height: 0.875rem;
      }
    }
  } ;
`;
