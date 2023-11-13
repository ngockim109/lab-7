import React, { useEffect, useState } from "react";
import UserLogin from "../user-login";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";

const UserProfile = ({ user, setUser }) => {
  const [profile, setProfile] = useState([]);
  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          setProfile(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);
  const logOut = () => {
    googleLogout();
    setProfile(null);
  };
  const [authenticated, setauthenticated] = useState(null);
  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      console.log(loggedInUser);
      console.log(authenticated);
      setauthenticated(loggedInUser);
    }
  }, []);
  const rows = [
    { id: "1", name: "Email", value: profile.email },
    { id: "2", name: "Given Name", value: profile.given_name },
    { id: "3", name: "Family Name", value: profile.family_name },
    { id: "4", name: "Hd", value: profile.hd },
    { id: "5", name: "Locale", value: profile.locale },
  ];
  return (
    <>
      <Box
        display={"flex"}
        width={"100%"}
        justifyContent={"center"}
        flexDirection={"column"}
        alignContent={"center"}
        margin={"auto 0"}
      >
        <Container sx={{ width: "50%" }}>
          <Card>
            <Container
              sx={{
                width: "160px",
                height: "160px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: 12,
              }}
            >
              <Avatar
                image="/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
                src={profile.picture}
                alt="user image"
                sx={{ width: 150, height: 150 }}
              />
            </Container>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                textAlign={"center"}
              >
                {profile.name}
              </Typography>
              {rows.map(
                (row) =>
                  row.value && (
                    <Box key={row.id} display="flex" alignItems="center">
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        width="120px"
                      >
                        {row.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ offset: "3" }}
                      >
                        {row.value}
                      </Typography>
                    </Box>
                  )
              )}
            </CardContent>
          </Card>
        </Container>
      </Box>
    </>
  );
};

export default UserProfile;
