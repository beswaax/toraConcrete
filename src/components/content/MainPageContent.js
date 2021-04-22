import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import Link from "../../Link";

import Image from "next/image";
import { Button, useMediaQuery, useTheme } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  features: {
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(2),
      paddingLeft: theme.spacing(10),
      borderLeftWidth: 1,
      borderLeftStyle: "solid",
      borderColor: theme.palette.grey[400],
    },
  },
  iconWrapper: {
    backgroundColor: theme.palette.secondary.main,
    padding: 7,
    borderRadius: 30,
  },
  title: {
    fontWeight: 700,
    color: theme.palette.darkBlue.main,
  },
  description: {
    fontWeight: 500,
  },
  section: {},
  icon: {
    color: theme.palette.common.white,
  },
  titleOfSub: {
    fontWeight: 800,
    color: theme.palette.darkBlue.main,
  },
  button: {
    borderRadius: 1,
  },
}));
const MainPageHeader = (props) => {
  const classes = useStyles();
  const theme = useTheme();

  const content = {
    badge: "ACHIEVE MORE",
    "header-p1": "Projects",
    "header-p2": "Careers",
    "header-p3": "Services",
    description1:
      "Hier finden Sie unsere aktuellen und bereits fertiggestellten Projekte.",
    description2:
      "Werfen Sie einen Blick auf unsere offenen Stellen oder senden Sie eine Initiativbewerbung.",
    description3:
      "Wir setzen nur auf hochwertige Partnerfirmen wie die Bauservice Fuhs Ges.m.b.H.",
    "col1-header": "Architectural Design",
    "col1-desc":
      "We've been in business for more than 20 years and are experts at building.",
    "col2-header": "Construction Management",
    "col2-desc":
      "We offer everything from building to maintaining and demolition.",
    "col3-header": "Construction Consulting",
    "col3-desc": "We are only satisfied when you are.",
    ...props.content,
  };

  const matchesXS = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <section className={classes.section}>
      <Box pt={12}>
        <Container maxWidth="lg">
          <Grid
            spacing={4}
            container
            direction={matchesXS ? "column" : "row"}
            alignItems="center"
            jusitfy="center"
          >
            <Grid item sm>
              <Box py={1}>
                <Image
                  src={"/assets/5.jpg"}
                  style={{ borderRadius: 5 }}
                  width={360}
                  quality={100}
                  height={275}
                />{" "}
                <Typography variant="h5" className={classes.titleOfSub}>
                  {content["header-p1"]}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {content.description1}
                </Typography>
              </Box>
              <Box>
                <Button
                  className={classes.button}
                  href="/projects"
                  variant="contained"
                  color="primary"
                >
                  {content["header-p1"]}
                </Button>
              </Box>
            </Grid>
            <Grid item sm>
              <Box py={1}>
                <Image src={"/assets/4.jpg"} width={360} height={275} />{" "}
                <Typography variant="h5" className={classes.titleOfSub}>
                  {content["header-p2"]}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {content.description2}
                </Typography>
              </Box>
              <Box>
                <Button
                  className={classes.button}
                  href="/careers"
                  variant="contained"
                  color="primary"
                >
                  {content["header-p2"]}
                </Button>
              </Box>
            </Grid>
            <Grid item sm>
              <Box py={1}>
                <Image
                  src={"/assets/3.jpg"}
                  style={{ borderRadius: 5 }}
                  width={360}
                  height={275}
                />{" "}
                <Typography variant="h5" className={classes.titleOfSub}>
                  {content["header-p3"]}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {content.description3}
                </Typography>
              </Box>
              <Box>
                <Button
                  className={classes.button}
                  href="/services"
                  variant="contained"
                  color="primary"
                >
                  {content["header-p3"]}
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </section>
  );
};

export default MainPageHeader;
