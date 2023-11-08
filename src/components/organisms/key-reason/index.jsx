import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import image from "../../../assets/images/why-choose-us.jpg";
const KeyReason = () => {
  return (
    <Grid container columns={12} spacing={3}>
      <Grid
        item
        xs={12}
        md={4}
        display="flex"
        flexDirection="column"
        order={{ xs: 2, md: 1 }}
      >
        <Typography
          variant="h5"
          fontWeight="bold"
          color="text.highlight"
          marginBottom={2}
        >
          Why Choose Us?
        </Typography>
        <Typography variant="span" textAlign="justify">
          Our website aims to provide comprehensive coverage of all aspects of
          movies and films, from the latest releases to classic films. Our
          platform is designed to be engaging and interactive, encouraging users
          to explore new movies and engage with other members of the community.
          We strive to provide high-quality content that is both informative and
          entertaining, including movie reviews, news articles, interviews with
          filmmakers, and more.
        </Typography>
        <Typography variant="span" textAlign="justify" component="div">
          We aim to create an inclusive environment where everyone feels
          welcome, regardless of their level of expertise or background in the
          film industry. Our goal is to create a community of passionate movie
          fans who can share their thoughts and opinions on the latest releases,
          as well as classic films.
        </Typography>
      </Grid>
      <Grid item xs={12} md={8} order={{ xs: 1, md: 2 }}>
        <img
          src={image}
          alt="Why Choose Us?"
          width="100%"
          height="100%"
          style={{ objectFit: "cover" }}
        ></img>
      </Grid>
    </Grid>
  );
};

export default KeyReason;
