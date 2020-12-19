import styled from 'styled-components';

export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: -100px;
  margin: 60px;
  margin-left: 0;
  padding: 0;

  @media screen and (max-width: 1200px) {
    margin-right: 2.5rem;
  }
`;

export const MainLink = styled.div`
  display: flex;
  align-items: center;
  width: 4.375rem;
  height: 4.1875rem;
  background: #31313a;
  border-radius: 0.3125rem;

  a {
    margin: 0 auto;
    svg {
      position: relative;
      top: 0.3125rem;
      margin: 0;
      width: 2.8125rem;
      height: 1.6875rem;
      path {
        fill: #efefd0;
      }
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

  @media screen and (max-width: 1400px) {
    width: 3.5rem;
    height: 3.5rem;

    a {
      svg {
        width: 2.3rem;
        height: 1.3rem;
      }
    }
  }

  @media screen and (max-width: 1200px) {
    width: 3.125rem;
    height: 3.125rem;

    a {
      svg {
        width: 2.125rem;
        height: 1.375rem;
      }
    }
  }
`;

export const Navbar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 2.5rem;
  background: #31313a;
  border-radius: 0.3125rem;

  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0.625rem 0;
    overflow: hidden;

    width: 4.375rem;
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
      width: 3.125rem;
      height: 1.6875rem;
      path {
        transition: fill 0.4s;
        fill: #efefd0;
      }
    }

    p {
      font-family: 'Poppins', sans-serif;
      font-weight: bold;
      font-size: 0.6875rem;
      text-transform: uppercase;
      color: #efefd0;
      text-align: center;
      margin: 0;
      padding-top: 0.3125rem;
      transition: color 0.4s;
    }

    &:hover {
      cursor: pointer;
      svg {
        path {
          fill: #fe7f2d;
        }
      }

      p {
        color: #fe7f2d;
      }
    }

    &:last-child {
      border: none;
    }
  }

  .active {
    svg {
      path {
        fill: #fe7f2d;
      }
    }
    p {
      color: #fe7f2d;
    }
  }

  @media screen and (max-width: 1400px) {
    width: 3.5rem;

    a {
      width: 3.5rem;

      svg {
        width: 2.3rem;
        height: 1.3rem;
      }

      p {
        font-size: 0.5rem;
      }
    }
  }

  @media screen and (max-width: 1200px) {
    width: 3.125rem;

    a {
      width: 3.125rem;

      svg {
        width: 2.125rem;
        height: 1.125rem;
      }

      p {
        font-size: 0.4375rem;
      }
    }
  }
`;
