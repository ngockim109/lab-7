import {
  FacebookRounded,
  FacebookSharp,
  LinkedIn,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Link,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import logo from "../../../assets/images/logo.webp";

const footerLinks = [
  [
    { id: "1", name: "Home", href: "/" },
    { id: "2", name: "Discovery", href: "/" },
  ],
  [
    { id: "1", name: "About", href: "/about-us" },
    { id: "1", name: "Why Choose Us", href: "/about-us" },
    { id: "1", name: "Our values", href: "/about-us" },
  ],
  [{ id: "1", name: "News", href: "/news" }],
  [{ id: "1", name: "Contact", href: "/contact" }],
];
const icons = [
  {
    id: "1",
    name: "facebook",
    color: "darkInfo",
    href: "http://facebook.com",
    component: <FacebookSharp />,
  },
  {
    id: "2",
    name: "twitter",
    color: "lightInfo",
    href: "http://twitter.com",
    component: <Twitter />,
  },
  {
    id: "3",
    name: "linkedIn",
    color: "info",
    href: "http://linkedIn.com",
    component: <LinkedIn />,
  },
  {
    id: "4",
    name: "youtube",
    color: "error",
    href: "http://youtube.com",
    component: <YouTube />,
  },
];
const Footer = () => {
  return (
    <Box component="footer" sx={{ width: "100%", bgcolor: "dark.main" }}>
      <Paper
        elevation={2}
        sx={{ width: "100%", borderRadius: "0", bgcolor: "dark.main" }}
      >
        <Box width="100%" sx={{ bgcolor: "dark.main", padding: "0 30px" }}>
          <Grid
            container
            columns={12}
            sx={{ padding: "30px 0" }}
            display="flex"
          >
            <Grid item xs={4}>
              <Link href="/" underline="none">
                <Box component="img" alt="Streamo" src={logo} />
              </Link>
              <Stack
                direction="row"
                alignItems="center"
                spacing={1}
                marginTop={1}
              >
                {icons.map((icon) => (
                  <Link key={icon.id} href={icon.href} underline="none">
                    <IconButton color={icon.color} aria-label={icon.name}>
                      {icon.component}
                    </IconButton>
                  </Link>
                ))}
              </Stack>
            </Grid>
            <Grid item xs={8}>
              <Grid container spacing={2}>
                {footerLinks.map((links, index) => (
                  <Grid item xs={3} key={index++}>
                    {links.map((link) => (
                      <Box key={link.id}>
                        <Link
                          href={link.href}
                          underline="none"
                          color="text.white"
                          component="button"
                        >
                          {link.name}
                        </Link>
                      </Box>
                    ))}
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Paper>
      <Box
        sx={{
          width: "100%",
          bgcolor: "dark.main",
          borderTop: "1px solid grey",
        }}
      >
        <Typography color="text.white" textAlign="center" padding="20px 0">
          Copyright &copy; 2023 All right reserved
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
