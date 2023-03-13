import React from "react";
import { Box, Grid, Typography, styled } from "@mui/material";
import { Logo } from "./commons/Logo";
import Link from "next/link";
import routes, { isActiveRoute } from "@/routes";
import { useRouter } from "next/router";

export interface NavbarInterface {}

const Navbar: React.FC<NavbarInterface> = () => {
  const location = useRouter().asPath;
  let counter: number = 0;
  return (
    <Box marginTop="1.5rem" zIndex={100}>
      <Grid container display="flex" alignItems="center">
        <Grid item md={6} sm={4}>
          <Box paddingLeft="2rem">
            <Link href="/">
              <Logo />
            </Link>
          </Box>
        </Grid>

        <Grid
          item
          md={6}
          sm={8}
          // sx={{ backgroundColor:" rgba(255, 255, 255, 0.04)", backdropFilter: "blur(40.7742px)" }}
          // minHeight="80px"
        >
          <NavList>
            {routes.map((route) => {
              const isActive = isActiveRoute(route.path, location);
              return (
                <ListItem
                  className={isActive ? "activeLink" : ""}
                  key={route.name}
                >
                  <Link href={route.path} passHref>
                    <Typography
                      variant="h6"
                      sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
                    >
                      <Typography variant="body2">{`0${counter++}`}</Typography>
                      {route.name}
                    </Typography>
                  </Link>
                </ListItem>
              );
            })}
          </NavList>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Navbar;

const NavList = styled("ul")(({ theme }) => ({
  listStyle: "none",
  display: "flex",
  placeContent: "center",
  alignItems: "center",
  padding: "0px",
  minHeight: "70px",
  backgroundColor:" rgba(255, 255, 255, 0.04)", 
  backdropFilter: "blur(40.7742px)" 
}));

const ListItem = styled("li")(({ theme }) => ({
  marginRight: "3rem",
  padding: "0px",
  "&:hover": {
    color: `${theme.palette.primary.main}`,
  },
}));

// {/* <ListItem>
//               <Link href="/">
//                 {/* <Typography variant="body2">00</Typography> */}
//                 <Typography variant="h6">HOME</Typography>
//               </Link>
//             </ListItem>
//             <ListItem>
//               <Link href="/destination">
//                 {/* <Typography variant="body2">01</Typography> */}
//                 <Typography variant="h6">DESTINATION</Typography>
//               </Link>
//             </ListItem>
//             <ListItem>
//               <Link href="/crew">
//                 {/* <Typography variant="body2">02</Typography> */}
//                 <Typography variant="h6">CREW</Typography>
//               </Link>
//             </ListItem>
//             <ListItem>
//               <Link href="/technology">
//                 {/* <Typography variant="body2">03</Typography> */}
//                 <Typography variant="h6">TECHNOLOGY</Typography>
//               </Link>
//             </ListItem> */}
