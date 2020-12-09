import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  font-family: Poppins;

  scrollbar-width: thin;
  scrollbar-color: #65656c transparent;

  *::-webkit-scrollbar {
    width: 5px;
  }
  *::-webkit-scrollbar-track {
    background: transparent;
  }
  *::-webkit-scrollbar-thumb {
    background-color: #65656c;
    border-radius: 20px;
  }
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
  justify-content: space-between;
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
    display: flex;
    align-items: center;
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
  }

  p {
    font-family: Poppins;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #fe7f2d;
    margin-right: 20px;
  }
`;

export const BoxProject = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: scroll;

  h2 {
    font-weight: 600;
    font-size: 24px;
    color: #fe7f2d;
  }

  .loader {
    margin: 120px auto;
  }
`;

export const ProjectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 530px;
  margin: 40px auto;
`;

export const Project = styled.div`
  display: flex;
  flex-direction: column;
  width: 245px;
  height: 190px;
  background: #efefd0;
  border-radius: 5px;
  margin: 10px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin: 10px 20px 0 20px;

    a {
      svg {
        width: 12px;
        height: 12px;

        &:hover {
          path {
            fill: #ff9800;
          }
        }
      }
    }
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  h3 {
    width: 172px;
    text-transform: capitalize;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 15px;
    margin: 5px 0;
  }

  p {
    text-align: justify;
    font-family: Poppins;
    font-weight: 300;
    font-size: 10px;
    line-height: 15px;
    margin: 0;
    margin-bottom: 10px;
  }

  div {
    margin: 0 auto;
    p {
      font-weight: 500;
      margin-right: 5px;
      padding-right: 5px;
      border-right: 1px solid #000000;
    }

    p:last-child {
      border-right: none;
    }
  }
`;
