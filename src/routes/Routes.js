import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { menuRoutes } from './routes.menu'

export default class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {menuRoutes.map((route) => (
            <Route 
              key={route.path}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          ))}
        </Switch>
      </BrowserRouter>
    )
  }
}
