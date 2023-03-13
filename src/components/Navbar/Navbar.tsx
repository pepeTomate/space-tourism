import React from "react";
import { Box, Grid, Typography, styled } from "@mui/material";
import { Logo } from "./commons/Logo";
import Link from "next/link";
export interface NavbarInterface {}

const Navbar: React.FC<NavbarInterface> = () => {
  return (
    <Box marginTop="1.5rem" zIndex={100}>
      <Grid container alignItems="center">
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
          sx={{ backgroundColor: "#ffffff55" }}
          minHeight="60px"
        >
          <NavList>
            <ListItem>
              <Link href="/">
                {/* <Typography variant="body2">00</Typography> */}
                <Typography variant="h6">HOME</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/destination">
                {/* <Typography variant="body2">01</Typography> */}
                <Typography variant="h6">DESTINATION</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/crew">
                {/* <Typography variant="body2">02</Typography> */}
                <Typography variant="h6">CREW</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/technology">
                {/* <Typography variant="body2">03</Typography> */}
                <Typography variant="h6">TECHNOLOGY</Typography>
              </Link>
            </ListItem>
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
  minHeight: "60px",
}));

const ListItem = styled("li")(({ theme }) => ({
  marginRight: "3rem",
  padding: "0px",
  "&:hover": {
    color: `${theme.palette.primary.main}`,
  },
}));
