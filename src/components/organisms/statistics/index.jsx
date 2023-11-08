import React from "react";
import Statistic from "../../molecules/statistic";
import {
  DiamondRounded,
  Group,
  Movie,
  MovieFilterRounded,
  MovingRounded,
} from "@mui/icons-material";
import { Grid } from "@mui/material";
const statistics = [
  {
    id: "1",
    name: "Users",
    value: "240",
    component: <Group fontSize="large" />,
  },
  {
    id: "2",
    name: "Movies",
    value: "200",
    component: <MovieFilterRounded fontSize="large" />,
  },
  {
    id: "3",
    name: "Thread",
    value: "240",
    component: <MovingRounded fontSize="large" />,
  },
  {
    id: "4",
    name: "Awards",
    value: "240",
    component: <DiamondRounded fontSize="large" />,
  },
];
const Statistics = () => {
  return (
    <Grid container columns={12} padding="30px 0">
      {statistics.map((item) => (
        <Statistic
          key={item.id}
          name={item.name}
          value={item.value}
          component={item.component}
        ></Statistic>
      ))}
    </Grid>
  );
};

export default Statistics;
