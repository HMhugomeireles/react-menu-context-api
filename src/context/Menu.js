import React, { Component } from 'react'

export const MenuContext = React.createContext();

export class MenuProvider extends Component {
  constructor() {
    super();
    this.state = {
      menu: {
        entry: false,
        leave: false,
        open: false,
        close: true
      }
    };
  }

  onEntry = () => {
    this.setState({ 
      menu: {
        entry: true,
        leave: false,
        open: true,
        close: false
      }
    })
    setTimeout(() => {
      this.setState({ 
        menu: {
          entry: false,
          leave: false,
          open: true,
          close: false
        }
      })
    }, 500)
  }

  onLeave = () => {
    this.setState({ 
      menu: {
        entry: false,
        leave: true,
        open: true,
        close: false
      }
    })
    setTimeout(() => {
      this.setState({ 
        menu: {
          entry: false,
          leave: false,
          open: false,
          close: true
        }
      })
    }, 300)
  }


  render() {
    return (
      <MenuContext.Provider value={{
        state: this.state,
        onEntry: this.onEntry,
        onLeave: this.onLeave,
      }}>
        { this.props.children }
      </MenuContext.Provider>
    )
  }
}

