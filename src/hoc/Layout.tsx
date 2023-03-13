import { ImageBg, Navbar } from "@/components";
import LayoutStyles from "@/styles/Layout.module.css";
import { Box, Typography, useMediaQuery } from "@mui/material";
import Link from "next/link";
import React from "react";
import { theme } from "@/theme/mainTheme";

import routes, { isActiveRoute } from "@/routes";
import backgroundImg from "../../public/home/background-home-desktop.jpg";
import { useRouter } from "next/router";
import { StaticImageData } from "next/image";

interface ILayout {
  children: React.ReactNode;
}

const Layout: React.FC<ILayout> = ({ children }) => {
    const location = useRouter();
    console.log(location);
    let actualPath = routes.find((route)=> {
        return route.path === location.asPath
    })
    console.log(actualPath);

    let actualPathMedia:StaticImageData|string = "";
    const matchesMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesTablet = useMediaQuery(theme.breakpoints.between('sm',"lg"));
    
    if(matchesMobile) {
        actualPathMedia = ((actualPath?.bgSource.mobile)as StaticImageData).src;
    }
    else if(matchesTablet) {
        actualPathMedia = ((actualPath?.bgSource.tablet)as StaticImageData).src;
    }
    else {
        actualPathMedia = ((actualPath?.bgSource.desktop)as StaticImageData).src;
    }
    console.log(((actualPath?.bgSource.mobile)as StaticImageData).src);
    const aux = ((actualPath?.bgSource.mobile)as StaticImageData).src;
    console.log(actualPathMedia);
    return (
    <>
      <Box
        sx={{
          minHeight: "100vh",
          minWidth: "100%",
          backgroundColor: "transparent",
          position: "relative",
          display: "flex",
          overflow: "hidden",
        }}
      >
        {/* <Box
          bgcolor="rgba(0,0,0,0.2)"
          position={"absolute"}
          top={0}
          left={0}
          right={0}
          bottom={0}
          zIndex={1}
        ></Box> */}
        <ImageBg image={actualPathMedia || backgroundImg} quality={100}/>

        <Box
          sx={{
            width: "100%",
            zIndex: 2,
          }}
        >
          <Navbar />
          {children}
        </Box>
      </Box>
    </>
  );
};

export default Layout;
