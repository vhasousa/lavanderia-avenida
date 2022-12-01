import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0rem;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme['background-color']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Quicksand', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`
