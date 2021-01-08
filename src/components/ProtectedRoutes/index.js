import React, { Component } from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, useHistory } from "react-router-dom";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const state = useSelector((state) => state?.userReducer);
  if (state?.isLoggedIn) {
    return (
      <Route
        {...rest}
        render={(props) => {
          return <Component {...props} />;
        }}
      />
    );
  } else return <Redirect to="/auth/login" />;
};
