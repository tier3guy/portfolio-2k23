import Home from "../pages/Home";
import ErrorPage from "../pages/Error";

const routes = [
  {
    key: "1",
    exact: "true",
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    key: "404",
    path: "*",
    element: <ErrorPage />,
    errorElement: <ErrorPage />,
  },
];

export default routes;
