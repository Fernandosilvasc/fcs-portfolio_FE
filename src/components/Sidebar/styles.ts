import styled from 'styled-components';

export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 60px;
  padding: 0;
`;

export const NavLink = styled.div`
  width: 70px;
  height: 67px;
  background: #31313a;
  border-radius: 5px;

  a {
    width: 50px;
    svg {
      padding: 20px 10px;
      width: 45px;
      height: 27px;
      path {
        fill: #efefd0;
      }
    }

    &:hover {
      cursor: pointer;
      svg {
        path {
          fill: #ff9800;
        }
      }
    }
  }
`;

export const Navbar = styled.div`
  display: flex;
  flex-direction: column;
  width: 70px;
  justify-content: center;
  margin-top: 40px;
  background: #31313a;
  border-radius: 5px;
  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;

    width: 70px;
    text-decoration: none;
    border-bottom: 1px solid;
    border-image-slice: 1;
    border-image-source: linear-gradient(
      270deg,
      #c4c4c4 0%,
      rgba(196, 196, 196, 0) 100%
    );

    svg {
      margin: 0 auto;
      width: 50px;
      height: 27px;
      padding-top: 10px;
      path {
        fill: #efefd0;
      }
    }

    p {
      font-family: 'Poppins', sans-serif;
      font-weight: bold;
      font-size: 11px;
      text-transform: uppercase;
      line-height: 11px;
      color: #efefd0;
      text-align: center;
      margin: 0;
      padding-top: 5px;
      padding-bottom: 10px;
    }

    &:hover {
      cursor: pointer;
      svg {
        path {
          fill: #ff9800;
        }
      }

      p {
        color: #ff9800;
      }
    }

    &:last-child {
      border: none;
    }
  }
`;
