import { IRoute } from "./types/interfaces";


const routes: IRoute[] = [
  {
    path: "/",
    name: "HOME",
  },
  {
    path: "/destination",
    name: "DESTINATION",
  },
  {
    path: "/crew",
    name: "CREW",
  },
  {
    path: "/technology",
    name: "TECHNOLOGY",
  }
];

export default routes;

export const isActiveRoute = (routeName: string, location: string) => {
  if (routeName === "/") {
    return location === routeName;
  }
  return location.includes(routeName);
};
