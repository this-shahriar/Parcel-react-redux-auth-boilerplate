import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { ErrorPage } from "../../components/ErrorPage";
import { authRoutes } from "../../routes";
import Login from "./Login";

const Auth = () => {
  const router = useHistory();
  return (
    <div>
      Auth component layer!
      <button onClick={() => router?.push("/")}>Home</button>
      <Switch>
        {authRoutes?.map((item) => (
          <Route {...item} exact />
        ))}
        <Route path="*" component={ErrorPage} />
      </Switch>
    </div>
  );
};

export default Auth;
