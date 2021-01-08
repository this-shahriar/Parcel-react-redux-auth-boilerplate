import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";
import { Provider, useDispatch } from "react-redux";
import { store } from "./store";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { mainRoutes } from "./routes";
import { ErrorPage } from "./components/ErrorPage";
import { autoLogin } from "./store/actions/userActions";

const App = () => {
  const dispatch = useDispatch();

  dispatch(autoLogin());
  return (
    <BrowserRouter>
      <Switch>
        {mainRoutes?.map((item) => (
          <Route {...item} exact />
        ))}
        <Route path="*" component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
