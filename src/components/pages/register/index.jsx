import React from "react";

import { useFormik } from "formik";
import * as Yup from "yup";
import api from "../../../config/api";
import {
  Alert,
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [openSuccess, setOpenSuccess] = React.useState(false);
  const [openError, setOpenError] = React.useState(false);
  const [errMsg, setErrorMsg] = React.useState(false);
  const navigate = useNavigate();
  const handleCloseSuccess = () => {
    setOpenSuccess(false);
  };
  const handleCloseError = () => {
    setOpenError(false);
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      picture: "",
      firstName: "",
      lastName: "",
      role: "user",
    },

    onSubmit: async (values) => {
      try {
        console.log(values);
        const users = await api.get("/users");
        if (users.status === 200) {
          console.log(users);
          const isTrue = users.data.some((element) => {
            console.log(element.email);
            console.log(values.email);
            if (element.email === values.email) {
              return true;
            }
            return false;
          });
          console.log(isTrue);
          if (!isTrue) {
            const response = await api.post("/users", values);
            console.log(response);
            if (response.status === 201) {
              setOpenSuccess(true);
            }
          } else {
            setOpenError(true);
            setErrorMsg("Email is already exist!");
          }
        }
      } catch (e) {
        setErrorMsg(e);
        console.log(e);
      }
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email()
        .required("Required.")
        .typeError("Please enter a valid email address!"),

      picture: Yup.string()
        .url()
        .required("Required.")
        .typeError("Please enter a url"),
      firstName: Yup.string()
        .required("Required.")
        .typeError("Please enter a string"),
      lastName: Yup.string()
        .required("Required.")
        .typeError("Please enter a string"),
      password: Yup.string()
        .required("Required.")
        .typeError("Please enter a password"),
    }),
  });
  const textFields = [
    {
      id: "1",
      label: "Email",
      name: "email",
      value: formik.values.email,
      onChange: formik.handleChange,
      errorType: formik.errors.email,
      errorName: formik.errors.email,
      defaultValue: "",
    },
    {
      id: "2",
      label: "Password",
      name: "password",
      type: "password",
      value: formik.values.password,
      onChange: formik.handleChange,
      errorType: formik.errors.password,
      errorName: formik.errors.password,
      defaultValue: "",
    },
    {
      id: "3",
      label: "First Name",
      name: "firstName",
      value: formik.values.firstName,
      onChange: formik.handleChange,
      errorType: formik.errors.firstName,
      errorName: formik.errors.firstName,
      defaultValue: "",
    },
    {
      id: "4",
      label: "LastName",
      name: "lastName",
      value: formik.values.lastName,
      onChange: formik.handleChange,
      errorType: formik.errors.lastName,
      errorName: formik.errors.lastName,
      defaultValue: "",
    },
    {
      id: "5",
      label: "Avatar",
      name: "picture",
      value: formik.values.picture,
      onChange: formik.handleChange,
      errorType: formik.errors.picture,
      errorName: formik.errors.picture,
      defaultValue: "",
    },
  ];
  const logIn = () => {
    navigate("/login");
  };
  return (
    <Box display={"flex"} justifyContent={"center"} sx={{ margin: "auto 0" }}>
      <Container sx={{ width: "50%" }}>
        <Paper sx={{ width: "100%", padding: "16px 16px" }}>
          <Typography
            component="h2"
            textAlign={"center"}
            fontSize={"large"}
            fontWeight={"bold"}
            margin={"16px 0"}
          >
            Register
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            {textFields.map((item) => (
              <div key={item.id}>
                <TextField
                  label={item.label}
                  name={item.name}
                  variant="filled"
                  type={item.type}
                  fullWidth
                  defaultValue={item.defaultValue}
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  sx={{ marginBottom: "10px" }}
                />
                {item.errorType && (
                  <Typography variant="caption" color="red">
                    {item.errorName}
                  </Typography>
                )}
              </div>
            ))}
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Button type="submit" variant="contained">
                Save
              </Button>
            </Box>
          </form>
        </Paper>
      </Container>
      <Dialog
        open={openSuccess}
        onClose={handleCloseSuccess}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Register successfully!"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Login to discover more about Streamo!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={logIn} autoFocus variant="contained">
            Login here
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={openError}
        onClose={handleCloseError}
        message={errMsg}
      >
        <Alert
          onClose={handleCloseError}
          severity="error"
          sx={{ width: "100%" }}
        >
          {errMsg}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Register;
