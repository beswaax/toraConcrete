import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Image from "next/image";
import { useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundColor: "#fffff",
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f0f0f0' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
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
    borderTopLeftRadius: 125,
    borderBottomRightRadius: 100,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    [theme.breakpoints.down("xs")]: {
      borderTopLeftRadius: 80,
      borderBottomRightRadius: 80,
      borderTopRightRadius: 15,
      borderBottomLeftRadius: 15,
    },
  },
  title: {
    fontWeight: 900,
    color: theme.palette.darkBlue.main,
  },
  description: {
    fontWeight: 500,
  },
  link: {
    border: "1px solid lightgray",
    padding: 8,
    borderRadius: 5,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
    },
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const theme = useTheme();

  const content = {
    "header-p1": "Quality is the foundation of our success",
    "header-p2": "Learn More About",
    description:
      "In the minds of value-oriented people, we want to be the concrete company of choice! It takes passion from all of us to make our vision a reality.",
    "primary-action": "BOOK CONSULTATION",
    "secondary-action": "LEARN MORE",
    image: "/assets/24.jpg",
    ...props.content,
  };

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <section className={classes.section}>
      <Container maxWidth="lg">
        <Box
          pt={matchesXS ? 10 : matchesSM ? 15 : 20}
          pb={matchesXS ? 10 : matchesSM ? 15 : 20}
        >
          <Grid
            direction={matchesSM ? "column" : "inherit"}
            justify={matchesSM ? "center" : "inherit"}
            alignItems={matchesSM ? "center" : "inherit"}
            container
            spacing={4}
          >
            <Grid item xs={12} md={6} data-aos="fade-up">
              <Box display="flex" height="100%">
                <Box my="auto">
                  <Container maxWidth="sm">
                    <Typography variant="h2" component="h2" gutterBottom={true}>
                      <Typography
                        className={classes.title}
                        variant="h2"
                        color="primary"
                      >
                        {content["header-p1"]}{" "}
                      </Typography>
                    </Typography>
                    <Typography
                      className={classes.description}
                      variant="subtitle1"
                      color="textSecondary"
                    >
                      {content["description"]}
                    </Typography>
                    <Box mt={3}>
                      <Button
                        disableRipple
                        disableTouchRipple
                        variant="contained"
                        href="/contact"
                        color="primary"
                        className={classes.primaryAction}
                      >
                        {content["primary-action"]}
                      </Button>
                      <Button
                        disableRipple
                        disableTouchRipple
                        variant="outlined"
                        href="/about"
                        className={classes.primaryAction}
                      >
                        {content["secondary-action"]}
                      </Button>
                    </Box>
                  </Container>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} data-aos="fade-up">
              <Image
                src={content["image"]}
                alt="picture of buildings in a big city"
                className={classes.img}
                width={matchesSM ? 500 : 800}
                height={matchesSM ? 400 : 600}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
}
