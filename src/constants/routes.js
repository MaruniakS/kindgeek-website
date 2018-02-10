import PATHS from './paths';
import Home from '../components/Home';
import MainLayout from '../layouts/MainLayout';
import EmptyLayout from '../layouts/EmptyLayout';
import NotFound from '../components/NotFound';

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
    path: PATHS.NOT_FOUND,
    component: NotFound
  }
];

export default ROUTES;
