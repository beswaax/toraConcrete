import React, { useState } from "react";

import axios from "axios";
import { useFormik } from "formik";
import * as yup from "yup";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import {
  Box,
  Container,
  makeStyles,
  Snackbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  name: yup
    .string("Enter your Name")
    .min(2, "Enter a valid name")
    .required("Name is required"),

  message: yup
    .string("Enter your Message")
    .min(8, "Message should be of minimum 8 characters length")
    .required("Message is required"),
});

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundColor: "#F7F9FA",
    marginTop: "6rem",
    paddingTop: "7rem",
    paddingBottom: "7rem",
    [theme.breakpoints.down("md")]: {
      marginTop: "5rem",
      paddingTop: "5rem",
      paddingBottom: "5rem",
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "4rem",
      paddingTop: "4rem",
      paddingBottom: "4rem",
    },
  },
  title: {
    fontWeight: 700,
    color: theme.palette.darkBlue.main,
    paddingBottom: 10,
  },
  textField: {
    marginTop: "1rem",
  },
  button: {
    marginTop: "1rem",
    alignItems: "center",
  },
  TextField: {
    marginBottom: "1rem",
  },
}));

const JobContact = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    backgroundColor: "",
  });

  const handleClose = (event, reason) => {
    setAlert({ message: "", backgroundColor: "", open: false });
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      axios
        .get("http://localhost:3003/api/email/contactBasic", {
          params: {
            email: values.email,
            name: values.name,
            message: values.message,
          },
        })
        .then((res) => {
          resetForm({});
          setAlert({
            open: true,
            message: "Message sent successfully",
            backgroundColor: theme.palette.success.main,
          });
        })
        .catch((error) => {
          resetForm({});
          setAlert({
            open: true,
            message: "Something went wrong, please try again later.",
            backgroundColor: theme.palette.warning.main,
          });
          console.error(error);
        });
    },
  });

  const content = {
    title: "Apply for this job",
    subtitle: "Please add a link to your resume in the message field.",
  };

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className={classes.section}>
      <Container maxWidth="md">
        <Box style={{ textAlign: matchesSM ? "left" : "center" }} pb={4}>
          <Typography variant="h4" className={classes.title}>
            {content.title}
          </Typography>
          <Typography variant="subtitle1" color="textPrimary">
            {content.subtitle}
          </Typography>
        </Box>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            className={classes.TextField}
            variant="outlined"
            id="name"
            name="name"
            label="Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />

          <TextField
            fullWidth
            className={classes.TextField}
            variant="outlined"
            id="email"
            name="email"
            label="Email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />

          <TextField
            className={classes.TextField}
            multiline
            variant="outlined"
            id="message"
            name="message"
            label="Message"
            rows={4}
            value={formik.values.message}
            onChange={formik.handleChange}
            error={formik.touched.message && Boolean(formik.errors.message)}
            helperText={formik.touched.message && formik.errors.message}
            fullWidth
          />

          <Button
            type="submit"
            fullWidth
            disableRipple
            disableFocusRipple
            disableTouchRipple
            disableElevation
            variant="raised"
            color="primary"
            variant="contained"
          >
            Submit
          </Button>
        </form>

        <Snackbar
          open={alert.open}
          autoHideDuration={4000}
          onClose={handleClose}
          message={alert.message}
          ContentProps={{
            style: { backgroundColor: alert.backgroundColor },
          }}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        />
      </Container>
    </div>
  );
};

export default JobContact;
