import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/HomePage";
import Login from "./pages/login/login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
