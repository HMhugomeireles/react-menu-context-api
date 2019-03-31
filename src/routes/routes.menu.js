import { Home, About, Works, Contact } from './../containers'

export const menuRoutes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/about',
    exact: true,
    component: About
  },
  {
    path: '/works',
    exact: true,
    component: Works
  },
  {
    path: '/contact',
    exact: true,
    component: Contact
  },
]