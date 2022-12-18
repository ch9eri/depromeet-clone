import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: "Helvetica", "Arial", sans-serif;
    line-height: 1.5;
    font-weight: bold;
  }

  h2, p {
    margin: 0;
  }

  h2 {
    font-size: 1.5rem;
    line-height: 1.3;
  }

  p {
    font-size: 1rem;
  }

  h1 {
    font-size: 3rem;
  }

  button {
    :hover {
      cursor: pointer;
    }
  }
`;

export default GlobalStyle;
