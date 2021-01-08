import cookies from "js-cookie";

const defaultState = {
  isLoggedIn: false,
  token: null,
};

const userReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        isLoggedIn: true,
        token: action?.value,
      };
    case "LOG_OUT":
      cookies?.remove("token");
      return {
        isLoggedIn: false,
        token: null,
      };
    default:
      return state;
  }
};

export default userReducer;
