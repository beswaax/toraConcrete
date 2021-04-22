import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  title: {
    marginBottom: theme.spacing(4),
  },
  block: {
    marginBottom: theme.spacing(1),
  },
  halfLg: {
    [theme.breakpoints.up("lg")]: {
      maxWidth: theme.breakpoints.values["lg"] / 2,
    },
  },
  firstBox: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    [theme.breakpoints.up("lg")]: {
      marginLeft: "auto",
      paddingTop: theme.spacing(10),
      paddingBottom: theme.spacing(0),
      paddingRight: theme.spacing(6),
    },
  },
  fullHeightImage: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    objectFit: "cover",
    height: "100%",
    width: "100%",
  },
  title: {
    fontWeight: 700,
    color: theme.palette.darkBlue.main,
  },
  section: {
    backgroundColor: theme.palette.grey[50],
  },
}));

export default function Content(props) {
  const classes = useStyles();
  const theme = useTheme();

  const content = {
    title: "Structural Engineering & Architecture",
    description:
      "We develop individual solutions that are precisely tailored to the needs of our clients. Since we know that we can, we accept any challenge - be it a laboratory, a cultural or shopping center. What makes us so sure: our many years of expertise in the application of the latest technologies. This combination helps us to plan our projects in detail and to implement them exactly according to your personal ideas.",
    "02_image": "/assets/gallery4.webp",
    "primary-action": "Learn more",
    ...props.content,
  };

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <section className={classes.section}>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Box className={[classes.halfLg, classes.firstBox]}>
            <Container>
              <Box py={2} pt={matchesSM ? 0 : 7}>
                <Typography variant="h4" className={classes.title}>
                  {content["title"]}
                </Typography>
              </Box>

              <Typography
                variant="body1"
                color="textSecondary"
                paragraph={true}
                className={classes.block}
              >
                {content["description"]}
              </Typography>
            </Container>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} data-aos="fade-left">
          <Box position="relative" height={500}>
            <img
              className={classes.fullHeightImage}
              src={content["02_image"]}
              alt=""
            />
          </Box>
        </Grid>
      </Grid>
    </section>
  );
}
