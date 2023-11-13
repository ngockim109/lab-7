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
import React, { useContext, useRef, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import AuthContext from "../../../context/AuthProvider";
import api from "../../../config/api";
import useAuth from "../../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
const Login = () => {
  const { auth, setAuth } = useAuth();
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

    onSubmit: async (values) => {
      try {
        const response = await api.get("/users");
        if (response.status === 200) {
          let role;
          const isTrue = response.data.some((element) => {
            if (
              element.email === values.email &&
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
            console.log(auth);
            navigate(from, { replace: true });
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
      email: Yup.string()
        .email()
        .required("Required.")
        .typeError("Please enter a valid email"),
      password: Yup.string()
        .required("Required.")
        .typeError("Please enter a valid password!"),
    }),
  });

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
              defaultValue=""
              value={formik.values.email}
              onChange={formik.handleChange}
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
              defaultValue=""
              value={formik.values.password}
              onChange={formik.handleChange}
              sx={{ marginBottom: "10px" }}
            />
            {formik.errors.password && (
              <Typography variant="caption" color="red">
                {formik.errors.password}
              </Typography>
            )}
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
