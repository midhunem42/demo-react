import LoginScreen from "../containers/LoginScreen";
import HomeScreen from "../containers/HomeScreen";
import AddUserScreen from "../containers/AddUserScreen";

const nonProtectedRoute = [

  {
    path: "/login",
    name: "Login",
    component: LoginScreen
  }
];

const protectedRoutes = [
  {
    path: "/home",
    name: "home",
    component: HomeScreen
  },
  {
    path: "/add-user",
    name: "add-user",
    component: AddUserScreen
  }
];

export { nonProtectedRoute, protectedRoutes };
