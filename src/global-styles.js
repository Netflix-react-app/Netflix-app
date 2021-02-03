import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800&display=swap');
  html, body {
    height: 100%;
    font-family: 'Montserrat', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #000000;
    color: #333333;
    font-size: 16px;
  }
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    border: 7px solid #232943;
    box-shadow: inset 0 0 2.5px 2px rgba(0, 0, 0, 0.5);
  }
  
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(45deg, #ff000071, #00000065);
    border-radius: 10px;
  }
  *:focus {
    outline: none;
  }
`;
