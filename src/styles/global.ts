import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: #1F1F23;
  }

  body, input, button {
    font: 16px "Fira Code", sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
