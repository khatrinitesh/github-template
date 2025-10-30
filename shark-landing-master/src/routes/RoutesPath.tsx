import { Suspense, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Preloader from "../components/Preloader/Preloader";

const HomePage = lazy(() => import("../pages/HomePage/HomePage"));

// Define routes
const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
];

// Create a router instance
const router = createBrowserRouter(routes);

const RoutesPath = () => {
  return (
    <Suspense fallback={<Preloader />}>
      {/* Show preloader until the route loads */}
      <RouterProvider router={router} />
    </Suspense>
  );
};

export default RoutesPath;
