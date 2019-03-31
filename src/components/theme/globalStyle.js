import { createGlobalStyle } from 'styled-components';


export const Theme = {
  global: {
    typographia: {
      fontPrimary: `'Alfa Slab One', cursive`,
      fontSecondary: `'Open Sans Condensed', sans-serif`,
      sizeNormal: '1.3rem',
    },
    gradient: {
      backgroundlinear1: `linear-gradient(180deg, #30cfd0 0%, #330867 100%)`,
      backgroundlinear2: `linear-gradient(170deg, #30cfd0 0%, #330867 100%)`,
      backgroundOldBrowsers: '#43cea2',
      backgroundWebkit: '-webkit-linear-gradient(to right, #185a9d, #43cea2)',
      background: 'linear-gradient(to right, #185a9d, #43cea2)', 
    }
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