import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Image from "next/image";
import { useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  number: {
    backgroundColor: theme.palette.background.emphasis,
    color: theme.palette.text.secondary,
  },
  img: {
    maxWidth: 256,
    marginBottom: theme.spacing(2),
  },
  stepActive: {
    border: "1px solid",
    borderColor: theme.palette.background.secondary,
    borderRadius: theme.shape.borderRadius,
  },
  title: {
    fontWeight: 800,
  },
}));

export default function HowItWorks(props) {
  const classes = useStyles();
  const theme = useTheme();

  const content = {
    badge: "ACHIEVE MORE",
    "header-p1": "Projects",
    "header-p2": "Careers",
    "header-p3": "Services",
    description1:
      "Hier finden Sie unsere aktuellen und bereits fertiggestellten Projekte zum ansehen.",
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

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <section>
      <Container maxWidth="lg">
        <Box pt={14} textAlign="left">
          <Grid
            container
            direction={matchesSM ? "column" : "row"}
            justify={matchesSM ? "center" : "inherit"}
            alignItems={matchesSM ? "center" : "inherit"}
            spacing={6}
          >
            <Grid item xs={12} md={4}>
              <Box p={2} pb={4} style={{ maxWidth: 400 }}>
                <Box display="flex" justifyContent="center" mt={1} mb={4}>
                  <Image
                    src={"/assets/5.jpg"}
                    style={{ borderRadius: 5 }}
                    width={400}
                    height={300}
                  />{" "}
                </Box>
                <Typography
                  className={classes.title}
                  variant="h6"
                  component="h3"
                  gutterBottom={true}
                >
                  {content["header-p1"]}
                </Typography>
                <Typography variant="body2" component="p" color="textSecondary">
                  {content.description1}
                </Typography>
                <Box pt={1}>
                  <Button variant="outlined"> {content["header-p1"]}</Button>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box p={2} pb={4} style={{ maxWidth: 400 }}>
                <Box display="flex" justifyContent="center" mt={1} mb={4}>
                  <Image src={"/assets/4.jpg"} width={400} height={300} />{" "}
                </Box>
                <Typography
                  className={classes.title}
                  variant="h6"
                  component="h3"
                  gutterBottom={true}
                >
                  {content["header-p2"]}
                </Typography>
                <Typography variant="body2" component="p" color="textSecondary">
                  {content.description2}
                </Typography>
                <Box pt={1}>
                  <Button variant="outlined"> {content["header-p2"]}</Button>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box p={2} pb={4} px={2} style={{ maxWidth: 400 }}>
                <Box display="flex" justifyContent="center" mt={1} mb={4}>
                  <Image src={"/assets/3.jpg"} width={400} height={300} />
                </Box>

                <Typography
                  className={classes.title}
                  variant="h6"
                  component="h3"
                  gutterBottom={true}
                >
                  {content["header-p3"]}
                </Typography>
                <Typography variant="body2" component="p" color="textSecondary">
                  {content.description3}
                </Typography>
                <Box pt={1}>
                  <Button variant="outlined"> {content["header-p3"]}</Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
}
