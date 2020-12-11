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
  width: 42.8125rem;
  height: 42.8125rem;
  background: #31313a;
  border-radius: 0.3125rem;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  height: 4.375rem;
  border-bottom: 1px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(
    90deg,
    #c4c4c4 -100%,
    rgba(196, 196, 196, 0) 100%
  );

  div {
    width: 2.3125rem;
    height: 2.3125rem;
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
    font-size: 1.25rem;
    line-height: 0.8125rem;
    color: #efefd0;
    position: relative;
    left: -1.125rem;

    span {
      color: #fe7f2d;
    }
  }
`;

export const BoxIntroduction = styled.div`
  padding-left: 6.875rem;
  padding-top: 4.375rem;

  h2 {
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 0.875rem;
    line-height: 0.8125rem;
    text-transform: uppercase;
    color: #efefd0;
  }

  ul {
    margin-top: 3.125rem;
    list-style: none;

    li {
      display: flex;
      align-items: center;
      height: 1.25rem;
      margin-bottom: 1.25rem;

      p,
      a {
        font-family: Poppins;
        font-style: normal;
        font-weight: 600;
        font-size: 0.75rem;
        line-height: 0.8125rem;
        color: #fe7f2d;
        text-decoration: none;
      }

      svg {
        margin-right: 0.625rem;
        width: 1.5625rem;
        height: 1.25rem;
      }
    }
  }
`;

export const BoxSkills = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 4.375rem;

  h2 {
    padding-left: 6.875rem;
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 0.875rem;
    line-height: 0.8125rem;
    text-transform: uppercase;
    color: #efefd0;
  }
`;
