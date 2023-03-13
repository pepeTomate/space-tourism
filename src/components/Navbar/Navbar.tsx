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
        <Grid item md={1} xs={2}>
          <Box paddingLeft="2rem">
            <Link href="/">
              <Logo />
            </Link>
          </Box>
        </Grid>
        <Grid
          item
          md={5}
          xs={0}
          // sx={{ backgroundColor:" rgba(255, 255, 255, 0.04)", backdropFilter: "blur(40.7742px)" }}
          // minHeight="80px"
        >
          <Box sx={{backgroundColor:"#ffffff40",height: "1px", width: "100%", transform: "translate(50px, 0)", zIndex: "5", display:"flex"}}>

          </Box>
        </Grid>
        <Grid
          item
          md={6}
          xs={10}
          // sx={{ backgroundColor:" rgba(255, 255, 255, 0.04)", backdropFilter: "blur(40.7742px)" }}
          // minHeight="80px"
        >
          <NavList>
            {routes.map((route) => {
              const isActive = isActiveRoute(route.path, location);
              return (
                <ListItem
                  className={isActive ? "navActiveLink" : ""}
                  key={route.name}
                >
                  <Link href={route.path} passHref>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.4rem"
                      }}
                    >
                      {/* <Typography variant="body2">{`0${counter++}`}</Typography> */}
                      <Typography
                        variant="h6"
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          color:" white",
                          fontWeight: "700",
                          fontFamily: "Barlow Condensed",
                          letterSpacing: "0.2rem"
                        }}
                      >
                        {`0${counter++}`}
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        {route.name}
                      </Typography>
                    </Box>
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
  backgroundColor: " rgba(255, 255, 255, 0.04)",
  backdropFilter: "blur(40.7742px)",
}));

const ListItem = styled("li")(({ theme }) => ({
  marginRight: "3rem",
  padding: "0px",
  minHeight: "70px",
  display: "flex",
  alignItems: "center",
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
