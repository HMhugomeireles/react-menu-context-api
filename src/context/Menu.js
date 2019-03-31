import React, { Component } from 'react'

export const MenuContext = React.createContext();

export class MenuProvider extends Component {
  state = {
    open: false,
  };

  toggleMenu = () => {
    this.setState({ 
      open: !this.state.open,
    })
  }

  render() {
    return (
      <MenuContext.Provider value={{
        state: this.state,
        toggleMenu: this.toggleMenu,
      }}>
        { this.props.children }
      </MenuContext.Provider>
    )
  }
}

