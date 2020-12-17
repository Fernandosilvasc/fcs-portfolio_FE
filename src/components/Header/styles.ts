import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 590px;
  height: 95px;
  border: 2px solid #fe7f2d;
  border-radius: 5px;
  background: #31313a;

  @media screen and (max-width: 768px) {
    width: 490px;
    height: 75px;
  }

  @media screen and (max-width: 600px) {
    width: 390px;
    height: 60px;
  }

  @media screen and (max-width: 480px) {
    width: 330px;
    height: 50px;
  }

  @media screen and (max-width: 380px) {
    width: 290px;
    height: 40px;
  }

  @media screen and (max-width: 350px) {
    width: 270px;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  div {
    width: 55px;
    height: 55px;
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
    font-size: 24px;
    line-height: 0.8125rem;
    color: #efefd0;
    position: relative;
    left: -28px;
    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);

    span {
      color: #fe7f2d;
      margin-right: 5px;
    }
  }

  @media screen and (max-width: 768px) {
    div {
      width: 45px;
      height: 45px;
    }

    h2 {
      font-size: 20px;
      left: -24px;
    }
  }

  @media screen and (max-width: 600px) {
    div {
      width: 35px;
      height: 35px;
    }

    h2 {
      font-size: 18px;
      left: -22px;
    }
  }

  @media screen and (max-width: 480px) {
    div {
      width: 30px;
      height: 30px;
    }

    h2 {
      font-size: 16px;
      left: -18px;
    }
  }

  @media screen and (max-width: 380px) {
    div {
      width: 25px;
      height: 25px;
    }

    h2 {
      font-size: 14px;
      left: -14px;
    }
  }
`;
