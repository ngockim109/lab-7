import React from "react";
import ListNews from "../../organisms/list-news";
import NewsContent from "../../templates/news";
import { Box } from "@mui/material";
import Header from "../../molecules/header";

const News = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      width="100%"
    >
      <Header pageName="News" />
      <div
        style={{
          marginTop: "20px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <NewsContent />
      </div>
    </Box>
  );
};

export default News;
