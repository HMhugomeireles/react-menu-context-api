import React, { Fragment } from 'react'
import { Switch, Route, Link } from 'react-router-dom'

import { menuRoutes } from './routes'

export const Links = (props) => {
  return (
    <Fragment>
      {menuRoutes.map((link, i) => (
        <li key={i + link.name}>
          <span>{'0' + i}</span>
          <Link
            to={link.path}
            onClick={props.onActive}
          >
            {link.name}
          </Link>
        </li>
      ))}
    </Fragment>
  )
}

export const Routes = () => {
  return (
    <Switch>
      {menuRoutes.map((route) => (
        <Route 
          key={route.path}
          exact={route.exact}
          path={route.path}
          component={route.component}
        />
      ))}
    </Switch>
  )
}
