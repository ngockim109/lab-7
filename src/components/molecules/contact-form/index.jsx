import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
const textFields = [
  { id: "3", name: "Email" },
  { id: "4", name: "Subject" },
  { id: "5", name: "Message" },
];
const textFildsTwo = [
  { id: "1", name: "First Name" },
  { id: "2", name: "Last Name" },
];
const ContactForm = () => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          width: {
            xs: "300px",
            sm: "400px",
            md: "700px",
            lg: "900px",
            xl: "1000px",
            xxl: "1200px",
          },
        }}
        display="flex"
        justifyContent="center"
      >
        <Grid container columns={12} spacing={3}>
          <Grid item xs={6}>
            <TextField label="First Name" variant="filled" fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Last Name" variant="filled" fullWidth />
          </Grid>
        </Grid>
      </Box>
      {textFields.map((item) => (
        <Box
          key={item.id}
          sx={{
            width: {
              xs: "300px",
              sm: "400px",
              md: "700px",
              lg: "900px",
              xl: "1000px",
              xxl: "1200px",
            },
            marginTop: "20px",
          }}
          display="flex"
          justifyContent="center"
        >
          <TextField label={item.name} variant="filled" fullWidth />
        </Box>
      ))}
      <Box padding="20px 0">
        <Button variant="contained" color="redLight" bg>
          <Typography
            color="text.redLight"
            textTransform="none"
            fontWeight="bold"
          >
            Submit
          </Typography>
        </Button>
      </Box>
    </Container>
  );
};

export default ContactForm;
