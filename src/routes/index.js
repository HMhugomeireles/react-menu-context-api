import React, { Fragment } from 'react'
import { Switch, Route, Link } from 'react-router-dom'

import { menuRoutes } from './routes'

export const Links = (props) => {
  console.log(props, "links")
  return (
    <Fragment>
      {menuRoutes.map((link, i) => (
        <li key={i + link.name}>
          <Link
            to={link.path}
            onClick={props.toggle}
          >{link.name}</Link>
        </li>
      ))}
    </Fragment>
  )
}

export const Routes = (props) => {
  console.log(props, "routes")
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
