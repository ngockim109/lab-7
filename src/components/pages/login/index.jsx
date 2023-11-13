import {
  Alert,
  Box,
  Button,
  Card,
  Container,
  Link,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import api from "../../../config/api";
import useAuth from "../../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useLocalStorage from "../../../hooks/useLocalStorage";
import useInput from "../../../hooks/useInput";
import useToggle from "../../../hooks/useToggle";
const Login = () => {
  const { auth, setAuth } = useAuth();
  const [user, resetUser, userAttribs] = useInput("user", "");
  const [check, toggleCheck] = useToggle("persist", false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [message, setMessage] = useState("");
  const [openError, setOpenError] = useState(false);

  const handleCloseError = () => {
    setOpenError(false);
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    handleChange: (e) => {
      console.log(e.target.value);
    },

    onSubmit: async (values) => {
      try {
        const response = await api.get("/users");
        if (response.status === 200) {
          let role;
          const isTrue = response.data.some((element) => {
            if (
              element.email === user &&
              element.password === values.password
            ) {
              role = element.role;
              return true;
            }
            return false;
          });
          if (!isTrue) {
            setMessage("Email or password is incorrect. Please try again!");
            setOpenError(true);
          }
          if (isTrue) {
            setAuth({ ...values, role });
            resetUser();
            if (role === "admin") {
              navigate("/movie-management");
            } else {
              navigate(from, { replace: true });
            }
          }
          console.log(role);
          console.log(isTrue);
        }
      } catch (e) {
        setMessage("Login failed. Please try again!");
        setOpenError(true);
        console.log(e);
      }
    },

    validationSchema: Yup.object({
      // email: Yup.string()
      //   .email()
      //   .required("Required.")
      //   .typeError("Please enter a valid email"),
      password: Yup.string()
        .required("Required.")
        .typeError("Please enter a valid password!"),
    }),
  });

  return (
    <Box sx={{ margin: "auto 0" }}>
      <Container
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Card
          sx={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "16px",
          }}
        >
          <Typography
            component="h2"
            textAlign={"center"}
            fontSize={"large"}
            fontWeight={"bold"}
            margin={"20px 0"}
          >
            Login
          </Typography>
          <form
            onSubmit={formik.handleSubmit}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <TextField
              label="Email"
              name="email"
              variant="filled"
              type="email"
              fullWidth
              {...userAttribs}
              sx={{ marginBottom: "10px" }}
            />
            {formik.errors.email && (
              <Typography variant="caption" color="red">
                {formik.errors.email}
              </Typography>
            )}
            <TextField
              label="Password"
              name="password"
              type="password"
              variant="filled"
              fullWidth
              value={formik.values.password}
              onChange={formik.handleChange}
              sx={{ marginBottom: "10px" }}
            />
            {formik.errors.password && (
              <Typography variant="caption" color="red">
                {formik.errors.password}
              </Typography>
            )}
            <div className="persistCheck">
              <input
                type="checkbox"
                id="persist"
                onChange={toggleCheck}
                checked={check}
              />
              <label htmlFor="persist" style={{ marginLeft: "6px" }}>
                Remember me
              </label>
            </div>
            <Button type="submit" variant="contained">
              Login
            </Button>
            <Typography sx={{ marginTop: "20px" }}>
              Don't have an account?{" "}
              <Link href="/register" underline="none" color="red">
                Register now
              </Link>
            </Typography>
          </form>
        </Card>
        <Snackbar
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          open={openError}
          onClose={handleCloseError}
          message={message}
        >
          <Alert
            onClose={handleCloseError}
            severity="error"
            sx={{ width: "100%" }}
          >
            {message}
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
};

export default Login;
