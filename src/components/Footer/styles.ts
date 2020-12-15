import styled from 'styled-components';

export const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #31313a;

  svg {
    width: 25px;
    height: 25px;
  }

  h2 {
    font-family: Poppins;
    font-weight: bold;
    font-size: 20px;
    line-height: 13px;
    color: #efefd0;
    margin-left: 5px;
  }

  @media screen and (max-width: 1400px) {
    svg {
      width: 23px;
      height: 23px;
    }

    h2 {
      font-size: 18px;
      margin-left: 5px;
    }
  }

  @media screen and (max-width: 1200px) {
    svg {
      width: 20px;
      height: 20px;
    }

    h2 {
      font-size: 16px;
      margin-left: 5px;
    }
  }
`;
