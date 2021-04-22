import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { Hidden, useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  title: {
    marginBottom: theme.spacing(4),
  },
  block: {
    marginBottom: theme.spacing(3),
  },
  halfLg: {
    [theme.breakpoints.up("lg")]: {
      maxWidth: theme.breakpoints.values["lg"] / 1.5,
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
    title: "Civil engineering",
    paragraph1:
      "Our extensive know-how also enables us to successfully master any civil engineering task. From the consultation to the draft to the execution, we always keep an eye on the statics and work both competently and precisely. A progressive mindset is also a matter of course for us. That is why we always keep up to date with news in our industry and include them in our work as soon as it is beneficial for your project.",
    "02_image": "/assets/gallery2.webp",
    "primary-action": "Learn more",
    ...props.content,
  };

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <section className={classes.section}>
      <Grid container justify="center">
        <Hidden smDown>
          <Grid item xs={12} md={6} data-aos="fade-right">
            <Box position="relative" height={500}>
              <img
                className={classes.fullHeightImage}
                src={content["02_image"]}
                alt=""
              />
            </Box>
          </Grid>
        </Hidden>
        <Grid item xs={12} md={6}>
          <Box className={[classes.halfLg, classes.firstBox]}>
            <Container>
              <Box py={2} pt={matchesSM ? 0 : 10}>
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
                {content["paragraph1"]}
              </Typography>
            </Container>
          </Box>
        </Grid>

        <Hidden mdUp>
          <Grid item xs={12} md={6} data-aos="fade-up">
            <Box position="relative" height={500}>
              <img
                className={classes.fullHeightImage}
                src={content["02_image"]}
                alt=""
              />
            </Box>
          </Grid>
        </Hidden>
      </Grid>
    </section>
  );
}
