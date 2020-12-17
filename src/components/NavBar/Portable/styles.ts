import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const Nav = styled.div`
  display: flex;
  align-items: center;
  background: #31313a;
  border: 2px solid #ff9800;
  border-radius: 5px;
  margin: 40px 40px 0 0;

  a {
    svg {
      width: 50px;
      height: 45px;
      margin: 10px;
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

  .active {
    svg {
      path {
        fill: #fe7f2d;
      }
    }
  }
`;
