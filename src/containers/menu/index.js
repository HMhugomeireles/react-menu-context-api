import React, { Component, Fragment } from 'react'
import styled from 'styled-components'

import { Routes, Links} from '../../routes';
import { Button } from './../../components'
import * as Context from '../../context'

class Menu extends Component {
  render() {
    return (
      <Context.MenuContext.Consumer>
      {({ onEntry, onLeave, state: { menu } }) => console.log(menu) || 
        <Fragment>
          { menu.open ?
            <Fragment>
              <MenuFullScreen
                show={menu}
              >
                <Button 
                  onClick={onLeave}
                  white
                >X</Button>
                <ul>
                  <Links onActive={onLeave}/>
                </ul>
              </MenuFullScreen>
            </Fragment>
          :
            <Fragment>
              <Button 
                onClick={() => onEntry()}
              >Menu</Button>
            </Fragment>
          }
          <Routes />
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
  transition: 300ms ease-in-out;

  animation-name: ${({ show }) => console.log(show, "css") &&
    show.open ?
      ''
    :
      show.open && show.leave ?
        'showOut'
      :
        'showIn'
  };
  animation-duration: 300ms;
  animation-fill-mode: forwards;
  
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
`;



export default Menu;