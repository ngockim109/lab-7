import { GoogleLogin, googleLogout, useGoogleLogin } from "@react-oauth/google";
import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { Navigate, Route, useNavigate } from "react-router-dom";
import UserProfile from "../user-profile";
import axios from "axios";
import api from "../../../config/api";
import { Box, Button, Card, Container, Dialog, Modal } from "@mui/material";
const UserLogin = ({ user, setUser }) => {
  const navigate = useNavigate();
  const [authenticated, setauthenticated] = useState(
    localStorage.getItem(localStorage.getItem("authenticated") || false)
  );
  const [profile, setProfile] = useState([]);
  const onSuccess = (res) => {
    console.log("Login success: " + res.profileObj);
  };
  const onError = (err) => {
    console.log("Login failure: " + err);
  };

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      setUser(codeResponse);
      localStorage.setItem("authenticated", true);
      navigate("/admin-profile");
      console.log(codeResponse);
    },
    onError: (error) => console.log("Login Failed:", error),
  });
  const logOut = () => {
    googleLogout();
    setUser(null);
  };
  // useEffect(() => {
  //   console.log(user);
  //   if (user) {
  //     axios
  //       .get(
  //         `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
  //         {
  //           headers: {
  //             Authorization: `Bearer ${user.access_token}`,
  //             Accept: "application/json",
  //           },
  //         }
  //       )
  //       .then((res) => {
  //         console.log(res.data);
  //         setProfile(res.data);
  //         api.get("/users").then((resp) => {
  //           console.log(resp);
  //           console.log(res.data.email);
  //           if (resp.data.length === 0) {
  //             let response = api.post("/users", res.data);
  //             console.log(response);
  //             if (response.status === 201) {
  //               console.log(response);
  //               navigate("/admin-profile");
  //             }
  //           }
  //           resp.data.find((email) => {
  //             console.log("email resp:", email.email);
  //             console.log("email res:", res.data.email);
  //             if (!(email.email === res.data.email)) {
  //               let response = api.post("/users", res.data);
  //               console.log(response);
  //               if (response.status === 201) {
  //                 console.log(response);
  //                 navigate("/admin-profile");
  //               }
  //             } else {
  //               console.log("email already", email.email);
  //               navigate("/admin-profile");
  //             }
  //           });
  //         });
  //       })
  //       .catch((err) => console.log(err));
  //   }
  // }, [user]);
  return (
    <Box>
      <Container
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Card
          sx={{
            height: 300,
            width: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            variant="contained"
            onClick={() => login()}
            email={profile.email}
          >
            Sign in with Google 🚀{" "}
          </Button>
        </Card>
      </Container>
    </Box>
  );
};

export default UserLogin;
