import React, { Component } from 'react';
import Menu from './containers/Menu'
import * as Context from './context'
import './App.css'
class App extends Component {
  render() {
    return (
      <Context.MenuProvider>
        <Menu />
      </Context.MenuProvider>
    );
  }
}

export default App;
