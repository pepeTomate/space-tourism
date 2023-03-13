import { ImageBg, Navbar } from "@/components";
import LayoutStyles from "@/styles/Layout.module.css";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import backgroundImg from "../../public/background-home-desktop.jpg";

interface ILayout {
  children: React.ReactNode;
}

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <>
      <Box
        sx={{
          height: "100vh",
          width: "100%",
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
        <ImageBg image={backgroundImg} quality={100}/>

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
