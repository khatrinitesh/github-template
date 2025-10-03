import { Routes, Route, Navigate } from "react-router-dom";
import { routes } from "./appRoutes";
import MainLayout from "../layout/MainLayout";

const RoutesPath = () => {
  return (
    <Routes>
      {/* Wrap main pages (public/private) with MainLayout */}
      <Route element={<MainLayout />}>
        {routes
          .filter((route) => route.pathname !== "*" && route.element) // exclude NotFound
          .map((route, index) => (
            <Route key={index} path={route.pathname} element={route.element} />
          ))}
      </Route>

      {/* Handle redirects */}
      {routes
        .filter((route) => route.redirect)
        .map((route, index) => (
          <Route
            key={`redirect-${index}`}
            path={route.pathname}
            element={<Navigate to={route.redirect} />}
          />
        ))}

      {/* NotFound page without Header/Footer */}
      {routes
        .filter((route) => route.pathname === "*")
        .map((route, index) => (
          <Route
            key={`404-${index}`}
            path={route.pathname}
            element={route.element}
          />
        ))}
    </Routes>
  );
};

export default RoutesPath;
