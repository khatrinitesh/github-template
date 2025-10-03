import type { RouteDefinition } from "../interface";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/contactPage/ContactPage";
import HomePage from "../pages/homePage/HomePage";
import { PATHS } from "./path";

export const routes: RouteDefinition[] = [
  {
    pathname: PATHS.HOME,
    pathType: "public",
    element: <HomePage />,
    className: "nav-link",
  },
  {
    pathname: PATHS.ABOUT,
    pathType: "public",
    element: <AboutPage />,
    className: "nav-link",
  },
  {
    pathname: PATHS.CONTACT,
    pathType: "private",
    element: <ContactPage />,
    className: "nav-link",
  },
  {
    pathname: PATHS.NOT_FOUND,
    redirect: PATHS.HOME,
    element: <HomePage />,
  },
];
