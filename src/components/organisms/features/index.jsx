import { CheckCircleRounded } from "@mui/icons-material";
import { Grid } from "@mui/material";
import React from "react";
import Feature from "../../molecules/feature";
const features = [
  {
    id: "1",
    name: "Our Missions",
    description:
      "Our mission is to provide a comprehensive and up-to-date resource for movie enthusiasts. We aim to offer a platform where users can discover new movies, read reviews, and engage in discussions with other movie lovers. Our goal is to create a community of passionate movie fans who can share their thoughts and opinions on the latest releases, as well as classic films. We strive to provide an inclusive environment where everyone feels welcome, regardless of their level of expertise or background in the film industry.",
    values: [
      {
        id: "1",
        keyValue: "Comprehensive and up-to-date resource",
        icon: <CheckCircleRounded />,
      },
      {
        id: "2",
        keyValue: "Community of passionate movie fans",
        icon: <CheckCircleRounded />,
      },
      {
        id: "3",
        keyValue: "Engaging platform for discovery",
        icon: <CheckCircleRounded />,
      },
    ],
  },
  {
    id: "2",
    name: "Our Objectives",
    description:
      "Our objective is to provide a platform where movie enthusiasts can discover new movies, read reviews, and engage in discussions with other movie lovers. We aim to create a community of passionate movie fans who can share their thoughts and opinions on the latest releases, as well as classic films. Our goal is to provide an inclusive environment where everyone feels welcome, regardless of their level of expertise or background in the film industry.",
    values: [
      {
        id: "1",
        keyValue: "Platform for discovery",
        icon: <CheckCircleRounded />,
      },
      {
        id: "2",
        keyValue: "Community of passionate movie fans",
        icon: <CheckCircleRounded />,
      },
      {
        id: "3",
        keyValue: "Inclusive environment",
        icon: <CheckCircleRounded />,
      },
    ],
  },
  {
    id: "3",
    name: "Our Achievements",
    description:
      "A website about movies and films could aim to provide a comprehensive and up-to-date resource for movie enthusiasts. The website could create a community of passionate movie fans who can share their thoughts and opinions on the latest releases, as well as classic films. The website could offer an engaging platform where users can discover new movies, read reviews, and engage in discussions with other movie lovers. ",
    values: [
      {
        id: "1",
        keyValue: "Building a large and engaged community",
        icon: <CheckCircleRounded />,
      },
      {
        id: "2",
        keyValue: "Providing high-quality content",
        icon: <CheckCircleRounded />,
      },
      {
        id: "3",
        keyValue: "Becoming a go-to resource for movie enthusiasts",
        icon: <CheckCircleRounded />,
      },
    ],
  },
];
const Features = () => {
  return (
    <Grid container columns={12} spacing={6}>
      {features.map((feature) => (
        <Feature
          key={feature.id}
          name={feature.name}
          description={feature.description}
          values={feature.values}
        />
      ))}
    </Grid>
  );
};

export default Features;
