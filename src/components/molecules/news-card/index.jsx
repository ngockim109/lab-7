import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Grid, Link, Paper, Rating } from "@mui/material";

export default function NewsCard({
  image,
  rating,
  title,
  description,
  author,
  link,
  publication_date,
}) {
  return (
    <Paper elevation={2} sx={{ height: "100%" }}>
      <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
        <CardMedia height="190" image={image} component="img" title={title} />
        <CardContent>
          <Rating name="" value={rating} readOnly />
          <Box>
            <Typography gutterBottom variant="h5">
              {title}
            </Typography>
            <Typography>Author: {author}</Typography>
          </Box>
          <Typography variant="body2" color="text.secondary" component="div">
            {description}
          </Typography>
          <Typography color="text.secondary" textAlign="right" marginTop="10px">
            {publication_date}
          </Typography>
        </CardContent>
        <CardActions sx={{ marginTop: "auto" }}>
          <Button size="small" color="redLight" variant="contained">
            <Link
              href={link}
              underline="none"
              target="_blank"
              rel="noopener noreferrer"
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
  );
}
