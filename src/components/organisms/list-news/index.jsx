import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import ListOfNews from "../../../shared/ListOfNews";
import NewsCard from "../../molecules/news-card";
const ListNews = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        justifyContent: "center",
        width: "100%",
        margin: "20px 0",
      }}
    >
      <Grid
        container
        spacing={1}
        columns={16}
        sx={{
          width: {
            xs: "300px",
            sm: "550px",
            md: "740px",
            lg: "980px",
            xl: "1180px",
            xxl: "1380px",
          },
        }}
      >
        {ListOfNews !== null
          ? ListOfNews.results.map((item, index) => (
              <Grid
                item
                xs={16}
                sm={8}
                md={4}
                lg={4}
                xl={4}
                xxl={2}
                key={index++}
              >
                <NewsCard
                  author={item.byline}
                  description={item.summary_short}
                  rating={item.mpaa_rating}
                  title={item.display_title}
                  key={index++}
                  image={item.multimedia.src}
                  link={item.link.url}
                  publication_date={item.publication_date}
                />
              </Grid>
            ))
          : null}
      </Grid>
    </Box>
  );
};

export default ListNews;
