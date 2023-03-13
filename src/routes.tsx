import { IRoute } from "./types/interfaces";

import Home_Desktop from "../public/home/background-home-desktop.jpg"
import Home_Tablet from "../public/home/background-home-tablet.jpg"
import Home_Mobile from "../public/home/background-home-mobile.jpg"

import Dest_Desktop from "../public/destination/background-destination-desktop.jpg"
import Dest_Tablet from "../public/destination/background-destination-tablet.jpg"
import Dest_Mobile from "../public/destination/background-destination-mobile.jpg"

import Crew_Desktop from "../public/crew/background-crew-desktop.jpg"
import Crew_Tablet from "../public/crew/background-crew-tablet.jpg"
import Crew_Mobile from "../public/crew/background-crew-mobile.jpg"

import Technology_Desktop from "../public/technology/background-technology-desktop.jpg"
import Technology_Tablet from "../public/technology/background-technology-tablet.jpg"
import Technology_Mobile from "../public/technology/background-technology-mobile.jpg"

const routes: IRoute[] = [
  {
    path: "/",
    name: "HOME",
    bgSource: {
        desktop:Home_Desktop,
        tablet: Home_Tablet,
        mobile: Home_Mobile
    }
  },
  {
    path: "/destination",
    name: "DESTINATION",
    bgSource: {
        desktop:Dest_Desktop,
        tablet: Dest_Tablet,
        mobile: Dest_Mobile
    }
  },
  {
    path: "/crew",
    name: "CREW",
    bgSource: {
        desktop:Crew_Desktop,
        tablet: Crew_Tablet,
        mobile: Crew_Mobile
    }
  },
  {
    path: "/technology",
    name: "TECHNOLOGY",
    bgSource: {
        desktop:Technology_Desktop,
        tablet: Technology_Tablet,
        mobile: Technology_Mobile
    }
  }
];

export default routes;

export const isActiveRoute = (routeName: string, location: string) => {
  if (routeName === "/") {
    return location === routeName;
  }
  return location.includes(routeName);
};
