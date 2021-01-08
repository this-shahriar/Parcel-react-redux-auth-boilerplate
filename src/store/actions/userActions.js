import cookies from "js-cookie";

export const login = (userInfo) => (dispatch) => {
  // http POST to login endpoint with {userInfo}
  cookies?.set("token", "token");
  dispatch({ type: "SET_USER", value: "token" });
};

export const signUserUp = (userInfo) => (dispatch) => {
  //user SignUp
};

export const autoLogin = () => (dispatch) => {
  if (cookies?.get("token"))
    dispatch({ type: "SET_USER", value: cookies?.get("token") });
};

export const logout = () => ({ type: "LOG_OUT" });
