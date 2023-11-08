import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Grid, Link, Paper, Stack } from "@mui/material";
import ModalMovieDetail from "../modal-movie-detail";

export default function MovieCard({
  url,
  rating,
  title,
  images,
  description,
  movie,
}) {
  return (
    <Grid item xs={16} sm={8} md={4} lg={3} xl={3} xxl={2}>
      <Paper elevation={2}>
        <Card>
          <CardMedia
            component="img"
            image={url}
            title={title}
            height="300"
            sx={{ objectFit: "cover" }}
          />
          <CardContent sx={{ paddingBottom: "0" }}>
            <Typography variant="span" component="div">
              {rating}
            </Typography>
          </CardContent>
          <CardActions
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <ModalMovieDetail
              url={url}
              rating={rating}
              title={title}
              images={images}
              description={description}
            />
            <Button size="small" color="redLight" variant="contained">
              <Link
                href={`/detail/${title}`}
                underline="none"
                color="text.redLight"
                textTransform="none"
                fontWeight="bold"
              >
                View More
              </Link>
            </Button>
          </CardActions>
        </Card>
      </Paper>
    </Grid>
  );
}
