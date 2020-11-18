import styled from 'styled-components';

export const Container = styled.div`
  margin: 100px auto;
  width: 430px;
  height: 710px;
  background: #31313a;
  border-radius: 5px;
  box-shadow: -9px -10px 0px 0px #24242b;
`;

export const Flag = styled.div`
  margin: 100px auto;
  width: 110px;
  height: 70px;
  box-sizing: content-box;
  padding-top: 15px;
  position: relative;
  background: red;
  border-bottom: 100px solid #eee;
  border-left: 100px solid transparent;
  border-right: 100px solid transparent;

  /* &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -20px;
    width: 0;
    height: -70px;
    background: yellow;
    border-top: 20px solid #eee;
    border-left: 55px solid transparent;
    border-right: 55px solid transparent;
  } */
`;
