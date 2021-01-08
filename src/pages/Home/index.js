import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const Home = () => {
  const router = useHistory();
  const state = useSelector((state) => state?.userReducer);

  return (
    <div>
      Home/Landing page!
      <br />
      {state?.isLoggedIn ? (
        <button onClick={() => router?.push("/dashboard")}>Dashboard</button>
      ) : (
        <button onClick={() => router?.push("/auth/login")}>Login</button>
      )}
    </div>
  );
};

export default Home;
