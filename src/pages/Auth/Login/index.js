import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../../../store/actions/userActions";

const Login = ({ match }) => {
  const dispatch = useDispatch();
  const router = useHistory();
  const state = useSelector((state) => state?.userReducer);

  useEffect(() => {
    state?.isLoggedIn && router?.push("/dashboard");
    console.log(match);
  }, [state?.isLoggedIn]);

  return (
    <div>
      This is login page!
      <br />
      <button onClick={() => dispatch(login())}>Proceed Demo Login</button>
    </div>
  );
};

export default Login;
