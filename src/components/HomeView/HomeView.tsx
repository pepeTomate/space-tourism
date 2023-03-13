import { Box, Grid, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
export interface HomeViewInterface {}

const HomeView: React.FC<HomeViewInterface> = () => {
  return (
    <>
      <Grid container marginTop="5rem" paddingX="5rem">
        <Grid item lg={6} sm={12} paddingRight="100px">
          <Typography variant="h5">SO, YOU WANT TO TRAVEL TO</Typography>
          <Typography variant="h1">SPACE</Typography>
          <Typography variant="h6">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </Typography>
        </Grid>
        <Grid
          item
          lg={6}
          sm={12}
          sx={{
            display: "flex",
            placeContent: "flex-end",
            alignItems: "flex-end",
            paddingRight: "5rem",
          }}
        >
          <Link href="/destination" passHref>
            <Box
              sx={{
                display: "flex",
                placeContent: "center",
                alignItems: "center",
                backgroundColor: "white",
                height: "250px",
                width: "250px",
                borderRadius: "125px",
                paddingBottom: "10px",
              }}
            >
              <Typography variant="h4" color="black">
                EXPLORE
              </Typography>
            </Box>
          </Link>
        </Grid>
      </Grid>
    </>
  );
};

export default HomeView;
