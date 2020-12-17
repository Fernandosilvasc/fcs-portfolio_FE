import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 590px;
  height: 95px;
  border: 2px solid #fe7f2d;
  border-radius: 5px;
  background: #31313a;
  margin: 0 auto; //delete later
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  div {
    width: 55px;
    height: 55px;
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
    font-size: 28px;
    line-height: 0.8125rem;
    color: #efefd0;
    position: relative;
    left: -28px;
    text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);

    span {
      color: #fe7f2d;
      margin-right: 5px;
    }
  }
`;
