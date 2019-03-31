import React, { Component } from 'react'
import styled from 'styled-components'
import Routes from './../routes/Routes'

import * as Context from './../context'

export default class Menu extends Component {
  render() {
    return (
      <Context.MenuContext.Consumer>
        {({ toggleMenu, state }) => console.log(state) ||
          <>
            {state.open ?
              <MenuFullScreen>
                <MenuBtn onClick={toggleMenu}>X</MenuBtn>
              </MenuFullScreen>
              :
              <MenuBtn onClick={toggleMenu}>Menu</MenuBtn>
            }
            <Routes />
          </>
        }
      </Context.MenuContext.Consumer>
    )
  }
}

const MenuBtn = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
  padding: 20px;
  cursor: pointer;
  user-select: none;
`
const MenuFullScreen = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  background: rgba(1,1,1,0.8);
`