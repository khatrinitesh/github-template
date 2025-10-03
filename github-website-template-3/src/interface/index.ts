import type { ReactNode } from "react";

export interface RouteDefinition {
  pathname: string; // route path => "/about"
  pathType?: "public" | "private"; // route type
  redirect?: string; // optional redirect path
  element: ReactNode; // component to render
  className?: string; // CSS class for menu/nav
}
