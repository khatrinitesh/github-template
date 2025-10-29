import { Suspense, lazy } from "react";
import {
  RouterProvider,
  RootRoute,
  Link,
  createRouter,
} from "@tanstack/react-router";
import Loader from "../components/Loader/Loader";

const Home = lazy(() => import("../pages/HomePage/HomePage"));

const rootRoute = new RootRoute({
  component: () => (
    <Suspense fallback={<Loader />}>
      <Home />
    </Suspense>
  ),
});

const router = createRouter({
  routeTree: rootRoute,
});

export const RoutesPath = () => {
  return <RouterProvider router={router} />;
};

export default RoutesPath;
