import { Home, BlogsPage, ErrorPage } from "../pages";

const routes = [
  {
    key: "1",
    exact: "true",
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    key: "2",
    exact: "true",
    path: "/blogs",
    element: <BlogsPage />,
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
