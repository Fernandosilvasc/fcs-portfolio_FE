import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
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

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Poppins;

  div {
    width: 370px;
    margin: 40px auto;

    p {
      font-weight: normal;
      font-size: 20px;
      line-height: 36px;
      color: rgba(245, 245, 245, 0.55);
    }
  }

  svg {
    width: 290px;
    height: 285px;
    margin-bottom: 80px;
  }

  @media screen and (max-width: 768px) {
    div {
      width: 350px;
      margin: 40px auto;

      p {
        font-size: 18px;
        line-height: 34px;
      }
    }

    svg {
      width: 275px;
      height: 270px;
      margin-bottom: 80px;
    }
  }

  @media screen and (max-width: 600px) {
    div {
      width: 280px;
      margin: 40px auto;

      p {
        font-size: 16px;
        line-height: 32px;
      }
    }

    svg {
      width: 270px;
      height: 265px;
      margin-bottom: 80px;
    }
  }

  @media screen and (max-width: 480px) {
    div {
      width: 230px;
      margin: 30px auto;

      p {
        font-size: 14px;
        line-height: 28px;
      }
    }

    svg {
      width: 220px;
      height: 215px;
      margin-bottom: 60px;
    }
  }

  @media screen and (max-width: 380px) {
    div {
      width: 190px;
      margin: 30px auto 20px auto;

      p {
        font-size: 12px;
        line-height: 28px;
      }
    }

    svg {
      width: 210px;
      height: 205px;
      margin-bottom: 40px;
    }
  }

  @media screen and (max-width: 350px) {
    svg {
      width: 190px;
      height: 185px;
      margin-bottom: 40px;
    }
  }
`;
