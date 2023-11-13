import React from "react";

import { useFormik } from "formik";
import * as Yup from "yup";
import api from "../../../config/api";
import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
const Register = () => {
  const [openSuccess, setOpenSuccess] = React.useState(false);
  const handleCloseSuccess = () => {
    setOpenSuccess(false);
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      picture: "",
      firstName: "",
      lastName: "",
      birthDay: "",
    },

    onSubmit: async (values) => {
      try {
        const response = await api.post("/users", values);
        if (response.status === 200) {
          setOpenSuccess(true);
        }
      } catch (e) {
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
      birthDay: Yup.date().typeError("Please a date"),
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
      label: "birthDay",
      name: "birthDay",
      value: formik.values.birthDay,
      onChange: formik.handleChange,
      errorType: formik.errors.birthDay,
      errorName: formik.errors.birthDay,
      defaultValue: "",
    },
  ];
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
              <>
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
                  key={item.id}
                />
                {item.errorType && (
                  <Typography variant="caption" color="red">
                    {item.errorName}
                  </Typography>
                )}
              </>
            ))}
            <Box sx={{ display: "flex", justifyContent: "end" }}>
              <Button type="submit">Save</Button>
            </Box>
          </form>
        </Paper>
      </Container>
    </Box>
  );
};

export default Register;
