import PATHS from './paths';
import Home from '../components/Home';
import MainLayout from '../layouts/MainLayout';
import EmptyLayout from '../layouts/EmptyLayout';
import NotFound from '../components/NotFound';
import Example from '../components/Example';

const ROUTES = [
  {
    path: PATHS.INDEX,
    exact: true,
    component: Home,
    layout: MainLayout
  },
  {
    path: PATHS.ABOUT,
    exact: true,
    component: Home,
    layout: EmptyLayout
  },
  {
    path: PATHS.TECHNOLOGIES.JS,
    exact: true,
    component: Home
  },
  {
    path: PATHS.EXAMPLE,
    exact: true,
    component: Example
  },
  {
    path: PATHS.NOT_FOUND,
    component: NotFound
  }
];

export default ROUTES;
