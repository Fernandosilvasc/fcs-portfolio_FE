import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Poppins;
`;

export const BoxIntroduction = styled.div`
  width: 590px;
  height: 510px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid #efefd0;
  border-radius: 5px;
  background: #31313a;
  margin: 50px 0 0 0;

  h2 {
    font-weight: bold;
    font-size: 22px;
    text-transform: uppercase;
    color: #efefd0;
    margin-bottom: 60px;
  }

  ul {
    list-style: none;
    padding: 0px;

    li {
      display: flex;
      align-items: center;
      margin-bottom: 35px;

      p,
      a {
        font-weight: 600;
        font-size: 18px;
        color: #fe7f2d;
        text-decoration: none;
        margin: 0;
      }

      svg {
        margin-right: 0.625rem;
        width: 40px;
        height: 30px;
      }
    }
  }

  @media screen and (max-width: 768px) {
    width: 490px;
    height: 410px;

    h2 {
      font-size: 18px;
      margin-bottom: 50px;
    }

    ul {
      li {
        height: 20px;
        margin-bottom: 30px;

        p,
        a {
          font-size: 14px;
        }

        svg {
          margin-right: 0.625rem;
          width: 35px;
          height: 25px;
        }
      }
    }
  }

  @media screen and (max-width: 600px) {
    width: 390px;
    height: 310px;
    margin: 40px 0 0 0;

    h2 {
      font-size: 16px;
      margin-bottom: 30px;
    }

    ul {
      li {
        margin-bottom: 20px;

        p,
        a {
          font-size: 12px;
        }

        svg {
          margin-right: 0.625rem;
          width: 30px;
          height: 20px;
        }
      }
    }
  }

  @media screen and (max-width: 480px) {
    width: 330px;
    height: 270px;
    margin: 40px 0 0 0;

    h2 {
      font-size: 16px;
    }

    ul {
      li {
        margin-bottom: 15px;

        p,
        a {
          font-size: 11px;
        }

        svg {
          margin-right: 0.625rem;
          width: 27px;
          height: 17px;
        }
      }
    }
  }

  @media screen and (max-width: 380px) {
    width: 290px;
    height: 240px;
    margin: 30px 0 0 0;

    h2 {
      font-size: 14px;
      margin-bottom: 20px;
    }

    ul {
      li {
        margin-bottom: 10px;

        p,
        a {
          font-size: 10px;
        }

        svg {
          margin-right: 0.625rem;
          width: 27px;
          height: 17px;
        }
      }
    }
  }

  @media screen and (max-width: 350px) {
    width: 270px;
    height: 220px;

    h2 {
      margin-bottom: 10px;
    }
  }
`;

export const BoxSkills = styled.div`
  width: 590px;
  height: 377px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid #efefd0;
  border-radius: 5px;
  background: #31313a;
  margin: 50px 0 120px 0;

  h2 {
    font-weight: bold;
    font-size: 22px;
    line-height: 13px;
    text-transform: uppercase;
    color: #efefd0;
    margin-bottom: 20px;
  }

  ul {
    width: 360px;
    li {
      margin: 20px;
      img {
        width: 50px;
        height: 50px;
      }
    }
  }

  @media screen and (max-width: 768px) {
    width: 490px;
    height: 300px;
    margin: 50px 0 100px 0;

    h2 {
      font-size: 18px;
    }

    ul {
      width: 280px;
      li {
        margin: 15px;
        img {
          width: 40px;
          height: 40px;
        }
      }
    }
  }

  @media screen and (max-width: 600px) {
    width: 390px;
    height: 270px;
    margin: 40px 0 80px 0;

    h2 {
      font-size: 16px;
    }

    ul {
      width: 200px;
      li {
        margin: 10px;
        img {
          width: 30px;
          height: 30px;
        }
      }
    }
  }

  @media screen and (max-width: 480px) {
    width: 330px;
    height: 270px;

    h2 {
      font-size: 16px;
    }

    ul {
      width: 200px;
      li {
        margin: 10px;
        img {
          width: 30px;
          height: 30px;
        }
      }
    }
  }

  @media screen and (max-width: 380px) {
    width: 290px;
    height: 240px;
    margin: 30px 0 80px 0;

    h2 {
      font-size: 14px;
    }

    ul {
      width: 164px;
      li {
        margin: 8px;
        img {
          width: 25px;
          height: 25px;
        }
      }
    }
  }

  @media screen and (max-width: 350px) {
    width: 270px;
    height: 230px;
    margin: 30px 0 60px 0;
  }
`;
