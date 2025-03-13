import React from 'react';
import { Route, Redirect } from "react-router-dom";

// @ts-ignore
const ProtectedRoute = ({ component: Component, ...props  }) => {
  return (
    <Route exact>
      {
        () => props.loggedIn ? <Component {...props} /> : <Redirect to="./signin" />
      }
    </Route>
)}

export default ProtectedRoute;