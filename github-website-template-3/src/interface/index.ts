import type { ReactNode } from "react";

export interface RouteDefinition {
  pathname: string; // route path => "/about"
  pathType?: "public" | "private"; // route type
  redirect?: string; // optional redirect path
  element: ReactNode; // component to render
  className?: string; // CSS class for menu/nav
}

export interface FooterLinkItem {
  text: string;
  href?: string;
}

export interface FooterColumn {
  title: string;
  links?: FooterLinkItem[];
}

export interface FooterSocial {
  icon: ReactNode;
  href: string;
}

export interface FooterConstants {
  columns: FooterColumn[];
  socials: FooterSocial[];
  companyName: string;
  year: number;
}

export interface FacilityItem {
  id: number;
  title: string;
  icon: ReactNode;
}
