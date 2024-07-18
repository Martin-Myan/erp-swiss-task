import { lazy } from "react";

import { ERoutePaths, type TRoutePageType } from "./types";

const Home = lazy(() => import("pages/Home"));
const Error = lazy(() => import("pages/Error"));
const ComingSoon = lazy(() => import("pages/ComingSoon"));

export const routesList: TRoutePageType[] = [
  {
    element: Home,
    path: ERoutePaths.Home,
    title: "Needs",
  },
  {
    element: ComingSoon,
    path: ERoutePaths.PriceList,
    title: "Price List",
  },
  {
    element: ComingSoon,
    path: ERoutePaths.Treatments,
    title: "Treatments",
  },
  {
    element: ComingSoon,
    path: ERoutePaths.Surgical,
    title: "Surgical",
  },
  {
    element: ComingSoon,
    path: ERoutePaths.Dental,
    title: "Dental",
  },

  {
    element: Error,
    path: ERoutePaths.Error,
    title: "Error Page",
  },
];
