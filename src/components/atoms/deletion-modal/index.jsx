import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import DeleteIcon from "@mui/icons-material/Delete";
import { Alert, IconButton, Link, Snackbar, Tooltip } from "@mui/material";
import api from "../../../config/api";
export default function DeletionModal({
  object,
  refresh,
  setRefresh,
  url,
  id,
}) {
  const [open, setOpen] = React.useState(false);
  const [openSuccess, setOpenSuccess] = React.useState(false);

  const handleClickOpen = () => {
    console.log(refresh);
    console.log(object);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = async () => {
    try {
      setOpen(false);
      const response = await api.delete(url + `/${id}`);
      if (response.status === 200) {
        setOpenSuccess(true);
        setTimeout(handleLoadData, 2000);
        return response.data;
      }
    } catch (e) {
      console.log(e);
    }
  };
  const handleCloseSuccess = () => {
    setOpenSuccess(false);
  };
  const handleLoadData = () => {
    setRefresh(refresh + 1);
  };

  return (
    <React.Fragment>
      <Tooltip title={`Delete ${object}`}>
        <IconButton onClick={handleClickOpen}>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {`Are you sure delete ${object}?`}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            This action can not be undone!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleDelete} autoFocus variant="danger">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={openSuccess}
        onClose={handleCloseSuccess}
        message={`Delete ${object} success!`}
      >
        <Alert
          onClose={handleCloseSuccess}
          severity="success"
          sx={{ width: "100%" }}
        >
          Delete {object} success!
        </Alert>
      </Snackbar>
    </React.Fragment>
  );
}
