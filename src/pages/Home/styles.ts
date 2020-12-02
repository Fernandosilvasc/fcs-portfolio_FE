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

export const BoxIntroduction = styled.div`
  padding-left: 110px;
  padding-top: 70px;

  h2 {
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 13px;
    text-transform: uppercase;
    color: #efefd0;
  }

  ul {
    margin-top: 50px;
    list-style: none;

    li {
      display: flex;
      align-items: center;
      height: 20px;
      margin-bottom: 20px;

      p,
      a {
        font-family: Poppins;
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 13px;
        color: #fe7f2d;
        text-decoration: none;
      }

      svg {
        margin-right: 10px;
        width: 25px;
        height: 20px;
      }
    }
  }
`;

export const BoxSkills = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 70px;

  h2 {
    padding-left: 110px;
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 13px;
    text-transform: uppercase;
    color: #efefd0;
  }

  /* div {
    margin: 0 auto;

    ul {
      display: flex;
      list-style: none;
      width: 250px;
      flex-wrap: wrap;
      gap: 30px;
    }
  } */
`;
