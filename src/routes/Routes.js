import { Home, About, Works, Contact } from '../containers'

export const menuRoutes = [
  {
    name: 'Home',
    path: '/',
    exact: true,
    component: Home
  },
  {
    name: 'About',
    path: '/about',
    exact: true,
    component: About
  },
  {
    name: 'Works',
    path: '/works',
    exact: true,
    component: Works
  },
  {
    name: 'Contact',
    path: '/contact',
    exact: true,
    component: Contact
  },
]