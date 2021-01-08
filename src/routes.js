import Auth from "./pages/Auth";
import ForgetPass from "./pages/Auth/ForgetPass";
import Login from "./pages/Auth/Login";
import Dashboard from "./pages/Dashboard";
import Board from "./pages/Dashboard/Board";
import Profile from "./pages/Dashboard/Profile";
import Home from "./pages/Home";

export const mainRoutes = [
  { key: 1, path: "/", component: Home },
  { key: 2, path: "/auth", component: Auth },
  { key: 3, path: "/auth/:authType", component: Auth },
  { key: 4, path: "/dashboard", component: Dashboard },
  { key: 5, path: "/dashboard/:first", component: Dashboard },
  { key: 6, path: "/dashboard/:first/:second", component: Dashboard },
];

export const authRoutes = [
  { key: "login", path: "/auth/login", component: Login },
  { key: "forget", path: "/auth/forget-password", component: ForgetPass },
];

export const dashboardRoutes = [
  { key: "board", path: "/dashboard", component: Board },
  { key: "board", path: "/dashboard/profile", component: Profile },
];
