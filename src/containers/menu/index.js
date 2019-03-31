import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { Routes, Links} from '../../routes';

import { Button } from './../../components'

import * as Context from '../../context'

class MenuFullscreen extends Component {
  render() {
    return (
      <Context.MenuContext.Consumer>
      {({ toggleMenu, state }) => 
        <Fragment>
        { state.open ?
          <MenuFullScreen
            showIn={state.open}
          >
            <Button 
              onClick={toggleMenu}
              white
            >X</Button>
            <ul>
              <Links toggle={toggleMenu}/>
            </ul>
          </MenuFullScreen>
          :
          <Fragment>
            <Button 
              onClick={toggleMenu}
            >Menu</Button>
            <Routes />
          </Fragment>
        }
        </Fragment>
      }
      </Context.MenuContext.Consumer>
    )
  }
}

const MenuFullScreen = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  background: rgba(1,1,1,0.9);
  transition: ease-in-out 300ms;
  text-align: center;
  
  animation: menuOpen 300ms ease-in-out forwards; 
  
  
  ul {
    font-size: 5rem;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
  li {
    margin: 25px;
  }

  a {
    text-decoration: none;
    color: #fff;
  }

  a:hover {
    color: #e1e1e1;
  }


  @keyframes menuOpen {
    from {
      transform: scale(0);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 0.9;
    }
  }
`;



export default MenuFullscreen;