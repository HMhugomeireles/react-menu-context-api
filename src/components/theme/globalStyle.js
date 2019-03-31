import { createGlobalStyle } from 'styled-components';


export const Theme = {
  global: {
    typographia: {
      fontPrimary: `'Alfa Slab One', cursive`,
      fontSecondary: `'Open Sans Condensed', sans-serif`,
      sizeNormal: '1.3rem',
    },
  },
  white: {
    
  },
  dark: {

  }
}



export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Alfa+Slab+One|Open+Sans+Condensed:300');
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }

  body {
    font-family: ${Theme.global.typographia.fontSecondary};
    font-size: ${Theme.global.typographia.sizeNormal}
  }
`