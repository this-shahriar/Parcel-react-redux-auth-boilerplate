import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, useHistory } from "react-router-dom";
import { ErrorPage } from "../../components/ErrorPage";
import { ProtectedRoute } from "../../components/ProtectedRoutes";
import { dashboardRoutes } from "../../routes";
import { logout } from "../../store/actions/userActions";

const Dashboard = () => {
  const dispatch = useDispatch();
  const router = useHistory();
  // const state = useSelector((state) => state?.userReducer);
  // const router = useHistory();
  // useEffect(() => {
  //   !state?.isLoggedIn && router?.push("/");
  // }, [state?.isLoggedIn]);

  return (
    <div>
      This is the Dashboard{" "}
      <button onClick={() => router?.push("/dashboard")}> Go to board</button>
      <button onClick={() => router?.push("/dashboard/profile")}>
        Go to profile
      </button>
      <button onClick={() => dispatch(logout())}>Logout</button>
      {/* Put your sidemenu/sidebar here if required! */}
      <Switch>
        {dashboardRoutes?.map((item) => (
          <ProtectedRoute {...item} exact />
        ))}
      </Switch>
    </div>
  );
};

export default Dashboard;
