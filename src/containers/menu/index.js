import React, { Component, Fragment } from 'react'

import { Routes, Links} from '../../routes';
import { Button, Brand } from './../../components'
import { MenuFullScreen } from './styled'
import * as Context from '../../context'


class Menu extends Component {
  render() {
    return (
      <Context.MenuContext.Consumer>
      {({ onEntry, onLeave, state: { menu } }) =>
        <Fragment>
          { menu.open ?
            <Fragment>
              <MenuFullScreen
                show={menu}
              >
              <div className="brandPosition">
                  <Brand />
                </div>
                <Button 
                  onClick={onLeave}
                  white
                >CLOSE</Button>
                <ul>
                  <Links 
                    onActive={onLeave}
                  />
                </ul>
              </MenuFullScreen>
            </Fragment>
          :
            <Fragment>
              <Button 
                onClick={() => onEntry()}
              >Menu
              </Button>
            </Fragment>
          }
          <Routes />
        </Fragment>
      }
      </Context.MenuContext.Consumer>
    )
  }
}




export default Menu;