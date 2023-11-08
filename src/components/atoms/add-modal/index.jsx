import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  Alert,
  Box,
  IconButton,
  Link,
  Snackbar,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import api from "../../../config/api";
import { AddCircle, Edit } from "@mui/icons-material";
import { useFormik } from "formik";
import * as Yup from "yup";
export default function AddModal({
  object,
  refresh,
  setRefresh,
  url,
  type,
  movie,
  loading,
}) {
  const [open, setOpen] = React.useState(false);
  const [openSuccess, setOpenSuccess] = React.useState(false);
  const [data, setData] = React.useState({});
  const handleClickOpen = () => {
    console.log(refresh);
    console.log(object);
    console.log(movie);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseSuccess = () => {
    setOpenSuccess(false);
  };
  const handleLoadData = () => {
    setRefresh(refresh + 1);
  };
  const formik = useFormik({
    initialValues: loading
      ? type === "Edit"
        ? {
            Title: movie.Title,
            Poster: movie.Poster,
            Year: movie.Year,
            imdbRating: movie.imdbRating,
            Released: movie.Released,
            Runtime: movie.Runtime,
            Genre: movie.Genre,
            Director: movie.Director,
            Actors: movie.Actors,
            Awards: movie.Awards,
            Country: movie.Country,
            Language: movie.Language,
            Metascore: movie.Metascore,
            Plot: movie.Plot,
            Rated: movie.Rated,
            Response: movie.Response === "true",
            Type: movie.Type,
            Writer: movie.Writer,
            imdbID: movie.imdbID,
            imdbVotes: movie.imdbVotes,
            totalSeasons: movie.totalSeasons,
          }
        : {
            Title: "",
            Poster: "",
            Year: "",
            imdbRating: 0,
            Released: "",
            Runtime: "",
            Genre: "",
            Director: "",
            Actors: "",
            Awards: "",
            Country: "",
            Language: "",
            Metascore: 0,
            Plot: "",
            Rated: "",
            Response: false,
            Type: "",
            Writer: "",
            imdbID: "",
            imdbVotes: 0,
            totalSeasons: 1,
          }
      : {
          Title: "",
          Poster: "",
          Year: "",
          imdbRating: 0,
          Released: "",
          Runtime: "",
          Genre: "",
          Director: "",
          Actors: "",
          Awards: "",
          Country: "",
          Language: "",
          Metascore: 0,
          Plot: "",
          Rated: "",
          Response: false,
          Type: "",
          Writer: "",
          imdbID: "",
          imdbVotes: 0,
          totalSeasons: 1,
        },

    onSubmit: async (values) => {
      try {
        setOpen(false);
        const response =
          type === "Edit"
            ? await api.put(url + `/${movie.id}`, values)
            : await api.post(url, values);
        console.log(response);
        if (response.status === 201 || response.status === 200) {
          setOpenSuccess(true);
          setTimeout(handleLoadData, 2000);
          return response.data;
        }
      } catch (e) {
        console.log(e);
      }
    },

    validationSchema: Yup.object({
      Title: Yup.string()
        .required("Required.")
        .typeError("Please enter a string"),
      Poster: Yup.string()
        .url()
        .required("Required.")
        .typeError("Please enter a url"),
      Year: Yup.string()
        .required("Required.")
        .typeError("Please enter a valid year or period"),
      imdbRating: Yup.number().typeError("Please enter a valid number"),
      Released: Yup.date().required("Required.").typeError("Please enter date"),
      Runtime: Yup.string()
        .required("Required.")
        .typeError("Please enter a string"),
      Genre: Yup.string()
        .required("Required.")
        .typeError("Please enter a string"),
      Director: Yup.string()
        .required("Required.")
        .typeError("Please enter a string"),
      Actors: Yup.string()
        .required("Required.")
        .typeError("Please enter a string"),
      Awards: Yup.string()
        .required("Required.")
        .typeError("Please enter a string"),
      Country: Yup.string()
        .required("Required.")
        .typeError("Please enter a string"),
      Language: Yup.string()
        .required("Required.")
        .typeError("Please enter a string"),
      Metascore: Yup.number().typeError("Please enter a number"),
      Plot: Yup.string()
        .required("Required.")
        .min(6, "Must be more 5 characters")
        .max(1000, "Maximum length is 1000 words"),
      Rated: Yup.string()
        .required("Required.")
        .typeError("Please enter a string"),
      Response: Yup.boolean()
        .required("Required.")
        .typeError("Please enter true or false"),
      Type: Yup.string()
        .required("Required.")
        .typeError("Please enter a string"),
      Writer: Yup.string()
        .required("Required.")
        .typeError("Please enter a string"),
      imdbID: Yup.string().typeError("Please enter a string"),
      imdbVotes: Yup.number().integer().typeError("Please enter a number"),
      totalSeasons: Yup.number()
        .integer()
        .required("Required.")
        .typeError("Please enter a number"),
    }),
  });
  const textFields = [
    {
      id: "1",
      label: "Title",
      name: "Title",
      value: formik.values.Title,
      onChange: formik.handleChange,
      errorType: formik.errors.Title,
      errorName: formik.errors.Title,
      defaultValue: loading ? (type === "Edit" ? movie.Title : "") : "",
    },
    {
      id: "2",
      label: "Poster",
      name: "Poster",
      value: formik.values.Poster,
      onChange: formik.handleChange,
      errorType: formik.errors.Poster,
      errorName: formik.errors.Poster,
      defaultValue: loading ? (type === "Edit" ? movie.Poster : "") : "",
    },
    {
      id: "3",
      label: "Year",
      name: "Year",
      value: formik.values.Year,
      onChange: formik.handleChange,
      errorType: formik.errors.Year,
      errorName: formik.errors.Year,
      defaultValue: loading ? (type === "Edit" ? movie.Year : "") : "",
    },
    {
      id: "4",
      label: "imdbRating",
      name: "imdbRating",
      value: formik.values.imdbRating,
      onChange: formik.handleChange,
      errorType: formik.errors.imdbRating,
      errorName: formik.errors.imdbRating,
      defaultValue: loading ? (type === "Edit" ? movie.imdbRating : "") : "",
    },
    {
      id: "5",
      label: "Released",
      name: "Released",
      value: formik.values.Released,
      onChange: formik.handleChange,
      errorType: formik.errors.Released,
      errorName: formik.errors.Released,
      defaultValue: loading ? (type === "Edit" ? movie.Released : "") : "",
    },
    {
      id: "6",
      label: "Runtime",
      name: "Runtime",
      value: formik.values.Runtime,
      onChange: formik.handleChange,
      errorType: formik.errors.Runtime,
      errorName: formik.errors.Runtime,
      defaultValue: loading ? (type === "Edit" ? movie.Runtime : "") : "",
    },
    {
      id: "7",
      label: "Genre",
      name: "Genre",
      value: formik.values.Genre,
      onChange: formik.handleChange,
      errorType: formik.errors.Genre,
      errorName: formik.errors.Genre,
      defaultValue: loading ? (type === "Edit" ? movie.Genre : "") : "",
    },
    {
      id: "8",
      label: "Director",
      name: "Director",
      value: formik.values.Director,
      onChange: formik.handleChange,
      errorType: formik.errors.Director,
      errorName: formik.errors.Director,
      defaultValue: loading ? (type === "Edit" ? movie.Director : "") : "",
    },
    {
      id: "9",
      label: "Actors",
      name: "Actors",
      value: formik.values.Actors,
      onChange: formik.handleChange,
      errorType: formik.errors.Actors,
      errorName: formik.errors.Actors,
      defaultValue: loading ? (type === "Edit" ? movie.Actors : "") : "",
    },
    {
      id: "10",
      label: "Awards",
      name: "Awards",
      value: formik.values.Awards,
      onChange: formik.handleChange,
      errorType: formik.errors.Awards,
      errorName: formik.errors.Awards,
      defaultValue: loading ? (type === "Edit" ? movie.Awards : "") : "",
    },
    {
      id: "11",
      label: "Country",
      name: "Country",
      value: formik.values.Country,
      onChange: formik.handleChange,
      errorType: formik.errors.Country,
      errorName: formik.errors.Country,
      defaultValue: loading ? (type === "Edit" ? movie.Country : "") : "",
    },
    {
      id: "12",
      label: "Language",
      name: "Language",
      value: formik.values.Language,
      onChange: formik.handleChange,
      errorType: formik.errors.Language,
      errorName: formik.errors.Language,
      defaultValue: loading ? (type === "Edit" ? movie.Language : "") : "",
    },
    {
      id: "13",
      label: "Metascore",
      name: "Metascore",
      value: formik.values.Metascore,
      onChange: formik.handleChange,
      errorType: formik.errors.Metascore,
      errorName: formik.errors.Metascore,
      defaultValue: loading ? (type === "Edit" ? movie.Metascore : "") : "",
    },
    {
      id: "14",
      label: "Plot",
      name: "Plot",
      value: formik.values.Plot,
      onChange: formik.handleChange,
      errorType: formik.errors.Plot,
      errorName: formik.errors.Plot,
      defaultValue: loading ? (type === "Edit" ? movie.Plot : "") : "",
    },
    {
      id: "15",
      label: "Rated",
      name: "Rated",
      value: formik.values.Rated,
      onChange: formik.handleChange,
      errorType: formik.errors.Rated,
      errorName: formik.errors.Rated,
      defaultValue: loading ? (type === "Edit" ? movie.Rated : "") : "",
    },
    {
      id: "16",
      label: "Response",
      name: "Response",
      value: formik.values.Response,
      onChange: formik.handleChange,
      errorType: formik.errors.Response,
      errorName: formik.errors.Response,
      defaultValue: loading ? (type === "Edit" ? movie.Response : "") : "",
    },
    {
      id: "17",
      label: "Type",
      name: "Type",
      value: formik.values.Type,
      onChange: formik.handleChange,
      errorType: formik.errors.Type,
      errorName: formik.errors.Type,
      defaultValue: loading ? (type === "Edit" ? movie.Type : "") : "",
    },
    {
      id: "18",
      label: "Writer",
      name: "Writer",
      value: formik.values.Writer,
      onChange: formik.handleChange,
      errorType: formik.errors.Writer,
      errorName: formik.errors.Writer,
      defaultValue: loading ? (type === "Edit" ? movie.Writer : "") : "",
    },
    {
      id: "19",
      label: "imdbID",
      name: "imdbID",
      value: formik.values.imdbID,
      onChange: formik.handleChange,
      errorType: formik.errors.imdbID,
      errorName: formik.errors.imdbID,
      defaultValue: loading ? (type === "Edit" ? movie.imdbID : "") : "",
    },
    {
      id: "20",
      label: "imdbVotes",
      name: "imdbVotes",
      value: formik.values.imdbVotes,
      onChange: formik.handleChange,
      errorType: formik.errors.imdbVotes,
      errorName: formik.errors.imdbVotes,
      defaultValue: loading ? (type === "Edit" ? movie.imdbVotes : "") : "",
    },
    {
      id: "21",
      label: "totalSeasons",
      name: "totalSeasons",
      value: formik.values.totalSeasons,
      onChange: formik.handleChange,
      errorType: formik.errors.totalSeasons,
      errorName: formik.errors.totalSeasons,
      defaultValue: loading ? (type === "Edit" ? movie.totalSeasons : "") : "",
    },
  ];
  return (
    <>
      {loading ? (
        <React.Fragment>
          <Link>
            <Tooltip title={`${type} ${object}`}>
              <IconButton onClick={handleClickOpen}>
                {type === "Edit" ? <Edit /> : <AddCircle />}
              </IconButton>
            </Tooltip>
          </Link>

          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">{`${type} ${object}`}</DialogTitle>
            <DialogContent>
              <form onSubmit={formik.handleSubmit}>
                {textFields.map((item) => (
                  <>
                    <TextField
                      label={item.label}
                      name={item.name}
                      variant="filled"
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
                  </>
                ))}
                <Box sx={{ display: "flex", justifyContent: "end" }}>
                  <Button onClick={handleClose}>Cancel</Button>
                  <Button type="submit">Save</Button>
                </Box>
              </form>
            </DialogContent>
          </Dialog>

          <Snackbar
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            open={openSuccess}
            onClose={handleCloseSuccess}
            message={`${type} ${object} success!`}
          >
            <Alert
              onClose={handleCloseSuccess}
              severity="success"
              sx={{ width: "100%" }}
            >
              {type} {object} success!
            </Alert>
          </Snackbar>
        </React.Fragment>
      ) : null}
    </>
  );
}
