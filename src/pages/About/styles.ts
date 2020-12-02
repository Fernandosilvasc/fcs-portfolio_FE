import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
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
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    margin: 50px auto;
    p {
      text-align: justify;
      width: 520px;
      font-family: Poppins;
      font-weight: lighter;
      font-size: 16px;
      line-height: 25px;
      color: rgba(245, 245, 245, 0.55);
    }
  }

  svg {
    width: 270px;
    height: 265px;
  }
`;
