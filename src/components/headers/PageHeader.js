import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
    height: "100%",
    paddingTop: "12%",
    paddingBottom: "12%",
    [theme.breakpoints.down("md")]: {
      paddingTop: "15%",
      paddingBottom: "15%",
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: "17%",
      paddingBottom: "17%",
    },
    [theme.breakpoints.down("xs")]: {
      paddingTop: "23%",
      paddingBottom: "23%",
    },
  },
  primaryAction: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      marginRight: theme.spacing(0),
      marginBottom: theme.spacing(2),
    },
  },
  img: {
    maxWidth: "100%",
  },
  description: {
    color: theme.palette.common.white,
    fontWeight: 500,
  },
  title: {
    color: theme.palette.common.white,
    fontWeight: 700,
  },
}));

const PageHeader = ({ title, description }) => {
  const classes = useStyles();

  const content = {
    "header-p1": title,
    description: description,
    pattern: "/assets/hero-image.webp",
  };

  return (
    <section
      className={classes.section}
      style={{ backgroundImage: `url("${content["pattern"]}")` }}
    >
      <Container maxWidth="lg">
        <Box pt={8} pb={6}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Box display="flex" height="100%">
                <Box my="auto">
                  <Container maxWidth="sm">
                    <Typography variant="h3" component="h2" gutterBottom={true}>
                      <Typography
                        className={classes.title}
                        variant="h3"
                        component="span"
                      >
                        {content["header-p1"]}
                      </Typography>
                    </Typography>
                    <Typography className={classes.description} variant="h6">
                      {content["description"]}
                    </Typography>
                  </Container>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
};

export default PageHeader;
