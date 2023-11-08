import { Grid } from "@mui/material";
import React from "react";
import Header from "../../molecules/header";
import ContactForm from "../../molecules/contact-form";

const Contact = () => {
  return (
    <Grid container direction="column">
      <Grid item>
        <Header pageName="Contact Us" />
      </Grid>
      <Grid item>
        <ContactForm />
      </Grid>
    </Grid>
  );
};

export default Contact;
