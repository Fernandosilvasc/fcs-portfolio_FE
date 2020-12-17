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
  margin: 40px 0;

  h2 {
    font-weight: bold;
    font-size: 24px;
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
      height: 20px;
      margin-bottom: 50px;

      p,
      a {
        font-weight: 600;
        font-size: 20px;
        color: #fe7f2d;
        text-decoration: none;
      }

      svg {
        margin-right: 0.625rem;
        width: 45px;
        height: 35px;
      }
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
  margin: 40px 0 120px 0;

  h2 {
    font-weight: bold;
    font-size: 24px;
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
`;
