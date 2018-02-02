import React from 'react';
import { Route } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout/MainLayout';

export const AppRoute = ({
  component: Component,
  layout: Layout = MainLayout,
  ...rest
}) => (
  <Route
    {...rest}
    render={props => (
      <Layout>
        <Component {...props} />
      </Layout>
    )}
  />
);
