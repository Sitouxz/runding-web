/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-boolean-value */
/* eslint-disable react/jsx-no-useless-fragment */

import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

export default function PrivateRoute(props) {
  const { children } = props;
  const isLoggedIn = localStorage.getItem('authenticated') === 'true';
  const location = useLocation();

  return isLoggedIn ? (
    <>{children}</>
  ) : (
    <Navigate
      replace={true}
      to="/login"
      state={{ from: `${location.pathname}${location.search}` }}
    />
  );
}
