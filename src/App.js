import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'
import Menu from './containers/menu'
import * as Context from './context'
import './App.css'
class App extends Component {
  render() {
    return (
      <Context.MenuProvider>
        <BrowserRouter>
          <Menu />
        </BrowserRouter>
      </Context.MenuProvider>
    );
  }
}

export default App;
