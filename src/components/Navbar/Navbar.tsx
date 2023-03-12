import React from "react";
import { Box, Grid, Typography, styled } from "@mui/material";
import { Logo } from "./commons/Logo";
import Link from "next/link";
export interface NavbarInterface {}

const Navbar: React.FC<NavbarInterface> = () => {
  return (
    <Box marginTop="1.5rem">
      <Grid container alignItems="center">
        <Grid item md={6} sm={4}>
          <Box paddingLeft="1rem">
            <Link href="/">
              <Logo />
            </Link>
          </Box>
        </Grid>

        <Grid item md={6} sm={8}>
          <NavList>
            <ListItem>
              <Link href="/">
                <Typography variant="body2">Home</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/destination">
                <Typography variant="body2">Destination</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/crew">
                <Typography variant="body2">Crew</Typography>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/technology">
                <Typography variant="body2">Technology</Typography>
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
  padding: "0px",
  minHeight: "30px",
}));

const ListItem = styled("li")(({ theme }) => ({
  marginRight: "3rem",
  padding: "0px",

  "&:hover": {
    color: `${theme.palette.primary.main}`,
  },
}));
