import styled from 'styled-components'
//import { Theme } from './../../components/theme/globalStyle';

export const MenuFullScreen = styled.div`
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  background: #222;
  transition: ease-in-out 300ms;
  text-align: center;
  transition: 400ms ease-in-out;

  animation-name: ${({ show }) =>
    show.open && show.entry ?
      'showIn'
    :
      show.open && show.leave ?
        'showOut'
      :
        ''
  };
  animation-duration: 400ms;
  animation-fill-mode: forwards;
  
  .brandPosition {
    position: absolute;
    top: 30px;
    left: 30px;
  }

  ul {
    font-size: 5rem;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    transition: 300ms ease-in;

    &::after {
      position: absolute;
      content: '';
      background: #DF0045;
      width: 35vw;
      height: 30vw;
    }
    &::before {
      margin: 10px 0 0 10px;
      position: absolute;
      content: '';
      background: #9E1046;
      width: 35vw;
      height: 35vw;
    }

  }
  li {
    z-index: 3;
    margin: 25px;

    span {
      margin-right: 50px;

    }
  }
  a {
    text-decoration: none;
    color: #fff;
    position: relative;
    opacity: 0.5;
    box-shadow: 0 0 0 0 #FFF, 0 0 0;
    
    &:hover {
      color: #fff;
      opacity: 1;
    }
  }

  @keyframes showIn {
    from {
      transform: translate(0, -1000px);
    }
    to {
      transform: translate(0, 0);
    }
  }
  @keyframes showOut {
    from {
      transform: translate(0, 0);
    }
    to {
      transform: translate(0, -1000px);
    }
  }
  @keyframes showUL {
    from {
      transform: scale();
    }
    to {
      transform: scale();
    }
  }
`