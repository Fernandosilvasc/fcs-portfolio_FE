import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Poppins;
`;

export const BoxIntroduction = styled.div`
  width: 36.875rem;
  height: 31.875rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid #efefd0;
  border-radius: 0.3125rem;
  background: #31313a;
  margin: 3.125rem 0 0 0;

  h2 {
    font-weight: bold;
    font-size: 1.375rem;
    text-transform: uppercase;
    color: #efefd0;
    margin-bottom: 3.75rem;
  }

  ul {
    list-style: none;
    padding: 0px;

    li {
      display: flex;
      align-items: center;
      margin-bottom: 2.1875rem;

      p,
      a {
        font-weight: 600;
        font-size: 1.125rem;
        color: #fe7f2d;
        text-decoration: none;
        margin: 0;
        transition: all 0.4s;
      }

      svg {
        margin-right: 0.625rem;
        width: 2.5rem;
        height: 1.875rem;
        transition: all 0.4s;
      }

      div {
        display: flex;
        align-items: center;

        &:hover {
          svg {
            width: 2.6875rem;
            height: 2.0625rem;
          }

          a {
            font-size: 1.25rem;
          }
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    width: 30.625rem;
    height: 25.625rem;

    h2 {
      font-size: 1.125rem;
      margin-bottom: 3.125rem;
    }

    ul {
      li {
        height: 1.25rem;
        margin-bottom: 1.875rem;

        p,
        a {
          font-size: 0.875rem;
        }

        svg {
          margin-right: 0.625rem;
          width: 2.1875rem;
          height: 1.5625rem;
        }

        div {
          &:hover {
            svg {
              width: 2.5rem;
              height: 1.875rem;
            }

            a {
              font-size: 1rem;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 600px) {
    width: 24.375rem;
    height: 19.375rem;
    margin: 2.5rem 0 0 0;

    h2 {
      font-size: 1rem;
      margin-bottom: 1.875rem;
    }

    ul {
      li {
        margin-bottom: 1.25rem;

        p,
        a {
          font-size: 0.75rem;
        }

        svg {
          margin-right: 0.625rem;
          width: 1.875rem;
          height: 1.25rem;
        }

        div {
          &:hover {
            svg {
              width: 35px;
              height: 25px;
            }

            a {
              font-size: 0.875rem;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 480px) {
    width: 20.625rem;
    height: 16.875rem;
    margin: 2.5rem 0 0 0;

    h2 {
      font-size: 1rem;
    }

    ul {
      li {
        margin-bottom: 0.9375rem;

        p,
        a {
          font-size: 0.6875rem;
        }

        svg {
          margin-right: 0.625rem;
          width: 1.6875rem;
          height: 1.0625rem;
        }

        div {
          &:hover {
            svg {
              width: 1.875rem;
              height: 1.25rem;
            }

            a {
              font-size: 0.75rem;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 380px) {
    width: 18.125rem;
    height: 15rem;
    margin: 1.875rem 0 0 0;

    h2 {
      font-size: 0.875rem;
      margin-bottom: 1.25rem;
    }

    ul {
      li {
        margin-bottom: 0.625rem;

        p,
        a {
          font-size: 0.625rem;
        }

        svg {
          margin-right: 0.625rem;
          width: 1.6875rem;
          height: 1.0625rem;
        }

        div {
          &:hover {
            svg {
              width: 1.875rem;
              height: 1.25rem;
            }

            a {
              font-size: 0.6875rem;
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 350px) {
    width: 16.875rem;
    height: 13.75rem;

    h2 {
      margin-bottom: 0.625rem;
    }
  }
`;

export const BoxSkills = styled.div`
  width: 36.875rem;
  height: 23.5625rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid #efefd0;
  border-radius: 0.3125rem;
  background: #31313a;
  margin: 3.125rem 0 7.5rem 0;

  h2 {
    font-weight: bold;
    font-size: 1.375rem;
    line-height: 0.8125rem;
    text-transform: uppercase;
    color: #efefd0;
    margin-bottom: 1.25rem;
  }

  ul {
    width: 28.125rem;
    li {
      margin: 1.25rem;
      img {
        width: 2.1875rem;
        height: 2.1875rem;
      }
    }
  }

  @media screen and (max-width: 768px) {
    width: 30.625rem;
    height: 18.75rem;
    margin: 3.125rem 0 6.25rem 0;

    h2 {
      font-size: 1.125rem;
    }

    ul {
      width: 25rem;
      li {
        margin: 0.9375rem;
        // img {
        //   width: 35px;
        //   height: 35px;
        // }
      }
    }
  }

  @media screen and (max-width: 600px) {
    width: 24.375rem;
    height: 16.875rem;
    margin: 2.5rem 0 5rem 0;

    h2 {
      font-size: 1rem;
    }

    ul {
      width: 18.75rem;
      li {
        margin: 0.625rem;
        img {
          width: 1.875rem;
          height: 1.875rem;
        }
      }
    }
  }

  @media screen and (max-width: 480px) {
    width: 20.625rem;
    height: 16.875rem;

    h2 {
      font-size: 1rem;
    }

    ul {
      width: 17.5rem;
      li {
        margin: 0.625rem;
        img {
          width: 1.5625rem;
          height: 1.5625rem;
        }
      }
    }
  }

  @media screen and (max-width: 380px) {
    width: 18.125rem;
    height: 15rem;
    margin: 1.875rem 0 5rem 0;

    h2 {
      font-size: 0.875rem;
    }

    ul {
      width: 15.625rem;
      li {
        margin: 0.5rem;
        img {
          width: 1.5625rem;
          height: 1.5625rem;
        }
      }
    }
  }

  @media screen and (max-width: 350px) {
    width: 16.875rem;
    height: 14.375rem;
    margin: 1.875rem 0 3.75rem 0;
  }
`;
