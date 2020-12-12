import styled from 'styled-components';

export const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3.75rem;
  margin-left: 0;
  padding: 0;
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
`;

export const Navbar = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 4.375rem; */
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
      /* padding-top: 0.625rem; */
      path {
        fill: #efefd0;
      }
    }

    p {
      font-family: 'Poppins', sans-serif;
      font-weight: bold;
      font-size: 0.6875rem;
      text-transform: uppercase;
      line-height: 0.6875rem;
      color: #efefd0;
      text-align: center;
      margin: 0;
      padding-top: 0.3125rem;
      /* padding-bottom: 0.625rem; */
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
        line-height: 0.6875rem;
      }
    }
  }
`;
