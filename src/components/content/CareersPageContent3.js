import React, { useEffect, useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Link from "../../Link";
import { Button, useMediaQuery } from "@material-ui/core";

import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundColor: theme.palette.grey[50],
  },
  iconWrapper: {
    backgroundColor: theme.palette.primary.dark,
  },
  title: {
    fontWeight: 700,
    color: theme.palette.darkBlue.main,
  },
  button: {
    "&:hover": {
      textDecoration: "none",
    },
  },
  gridContainer: {
    border: "0.6px solid lightgray",
    borderRadius: 7,
    padding: 20,
    textDecoration: "none",
    backgroundColor: theme.palette.grey[50],
    "&:hover": {
      backgroundColor: theme.palette.common.white,
      textDecoration: "none",
    },
    [theme.breakpoints.down("sm")]: {
      padding: 18,
    },
    [theme.breakpoints.down("xs")]: {
      padding: 15,
    },
  },
  position: {
    fontWeight: 700,
  },
  subtitle: {},
}));

export default function HowItWorks(props) {
  const classes = useStyles();
  const theme = useTheme();

  const content = {
    header: "Let’s find you an open position.",
    description:
      "If there is no vacancy for your specific skills, you can still send us your CV at careers@fluvius.vercel.app",
    button: "ABOUT THE COMPANY",
  };

  const jobs = [
    {
      url: "mechanical-engineer-toronto-job",
      jobPosition: "Mechanical Engineer",
      jobLocation: "Toronto, CA",
      jobType: "Full-Time",
      firstTextBlockTitle: "Who we are",
      firstTextBlockText:
        "Unser Bauunternehmen Meister-Familienbetrieb Gensmantel ist die richtige Adresse für Sanierung, Renovierung und Modernisierung im Großraum Stuttgart. Seit über 60 Jahren und bereits in dritter Generation, stehen wir als Baufirma für höchste handwerkliche Qualität.Tradition und modernste Sichtweisen unter einem Dach, die Erfahrenen und die Jungen im Schulterschluss: Als Team einfach unschlagbar. Innovation gepaart mit traditioneller Handwerkskunst, eine Symbiose, die uns als Bauunternehmen besonders stark für unsere Kunden macht",
      secondTextBlockTitle: "What we’re looking for",
      secondTextBlockText:
        "Verantwortlich sein für interessante Projekte bei anspruchsvollen Kunden, sich einbringen in ein Team von Gleichgesinnten, die über den Tag hinausdenken – ist es das, was Sie von Ihrem nächsten Arbeitsplatz erwarten? Dann gehen Sie den nächsten Schritt. Wir freuen uns auf Sie!",
      thirdTextBlockTitle: "Why to apply",
      thirdTextBlockText:
        "Es erwartet Sie ein abwechslungsreiches Arbeitsumfeld mit langfristiger Perspektive inklusive eines unbefristeten Arbeitsvertrages und einem Firmenwagen auch zur privaten Nutzung. Mit unserem flexiblen Arbeitszeitmodell lassen sich Beruf und Familie in Einklang bringen. Individuelle Entwicklungs- und Weiterbildungsmöglichkeiten, einen Zuschuss zur betrieblichen Altersvorsorge, Sozialleistungen eines modernen Unternehmens sowie zusätzliche Benefits sind für uns selbstverständlich.",
    },
    {
      url: "architect-toronto-job",
      jobPosition: "Architect",
      jobLocation: "Toronto, CA",
      jobType: "Full-Time",
      firstTextBlockTitle: "Who we are",
      firstTextBlockText:
        "Unser Bauunternehmen Meister-Familienbetrieb Gensmantel ist die richtige Adresse für Sanierung, Renovierung und Modernisierung im Großraum Stuttgart. Seit über 60 Jahren und bereits in dritter Generation, stehen wir als Baufirma für höchste handwerkliche Qualität.Tradition und modernste Sichtweisen unter einem Dach, die Erfahrenen und die Jungen im Schulterschluss: Als Team einfach unschlagbar. Innovation gepaart mit traditioneller Handwerkskunst, eine Symbiose, die uns als Bauunternehmen besonders stark für unsere Kunden macht",
      secondTextBlockTitle: "What we’re looking for",
      secondTextBlockText:
        "Verantwortlich sein für interessante Projekte bei anspruchsvollen Kunden, sich einbringen in ein Team von Gleichgesinnten, die über den Tag hinausdenken – ist es das, was Sie von Ihrem nächsten Arbeitsplatz erwarten? Dann gehen Sie den nächsten Schritt. Wir freuen uns auf Sie!",
      thirdTextBlockTitle: "Why to apply",
      thirdTextBlockText:
        "Es erwartet Sie ein abwechslungsreiches Arbeitsumfeld mit langfristiger Perspektive inklusive eines unbefristeten Arbeitsvertrages und einem Firmenwagen auch zur privaten Nutzung. Mit unserem flexiblen Arbeitszeitmodell lassen sich Beruf und Familie in Einklang bringen. Individuelle Entwicklungs- und Weiterbildungsmöglichkeiten, einen Zuschuss zur betrieblichen Altersvorsorge, Sozialleistungen eines modernen Unternehmens sowie zusätzliche Benefits sind für uns selbstverständlich.",
    },
    {
      url: "assistant-toronto-job",
      jobPosition: "Assistant",
      jobLocation: "Toronto, CA",
      jobType: "Full-Time",
      firstTextBlockTitle: "Who we are",
      firstTextBlockText:
        "Unser Bauunternehmen Meister-Familienbetrieb Gensmantel ist die richtige Adresse für Sanierung, Renovierung und Modernisierung im Großraum Stuttgart. Seit über 60 Jahren und bereits in dritter Generation, stehen wir als Baufirma für höchste handwerkliche Qualität.Tradition und modernste Sichtweisen unter einem Dach, die Erfahrenen und die Jungen im Schulterschluss: Als Team einfach unschlagbar. Innovation gepaart mit traditioneller Handwerkskunst, eine Symbiose, die uns als Bauunternehmen besonders stark für unsere Kunden macht",
      secondTextBlockTitle: "What we’re looking for",
      secondTextBlockText:
        "Verantwortlich sein für interessante Projekte bei anspruchsvollen Kunden, sich einbringen in ein Team von Gleichgesinnten, die über den Tag hinausdenken – ist es das, was Sie von Ihrem nächsten Arbeitsplatz erwarten? Dann gehen Sie den nächsten Schritt. Wir freuen uns auf Sie!",
      thirdTextBlockTitle: "Why to apply",
      thirdTextBlockText:
        "Es erwartet Sie ein abwechslungsreiches Arbeitsumfeld mit langfristiger Perspektive inklusive eines unbefristeten Arbeitsvertrages und einem Firmenwagen auch zur privaten Nutzung. Mit unserem flexiblen Arbeitszeitmodell lassen sich Beruf und Familie in Einklang bringen. Individuelle Entwicklungs- und Weiterbildungsmöglichkeiten, einen Zuschuss zur betrieblichen Altersvorsorge, Sozialleistungen eines modernen Unternehmens sowie zusätzliche Benefits sind für uns selbstverständlich.",
    },
    {
      url: "manager-toronto-job",
      jobPosition: "Civil Engineering Manager",
      jobLocation: "Toronto, CA",
      jobType: "Full-Time",
      firstTextBlockTitle: "Who we are",
      firstTextBlockText:
        "Unser Bauunternehmen Meister-Familienbetrieb Gensmantel ist die richtige Adresse für Sanierung, Renovierung und Modernisierung im Großraum Stuttgart. Seit über 60 Jahren und bereits in dritter Generation, stehen wir als Baufirma für höchste handwerkliche Qualität.Tradition und modernste Sichtweisen unter einem Dach, die Erfahrenen und die Jungen im Schulterschluss: Als Team einfach unschlagbar. Innovation gepaart mit traditioneller Handwerkskunst, eine Symbiose, die uns als Bauunternehmen besonders stark für unsere Kunden macht",
      secondTextBlockTitle: "What we’re looking for",
      secondTextBlockText:
        "Verantwortlich sein für interessante Projekte bei anspruchsvollen Kunden, sich einbringen in ein Team von Gleichgesinnten, die über den Tag hinausdenken – ist es das, was Sie von Ihrem nächsten Arbeitsplatz erwarten? Dann gehen Sie den nächsten Schritt. Wir freuen uns auf Sie!",
      thirdTextBlockTitle: "Why to apply",
      thirdTextBlockText:
        "Es erwartet Sie ein abwechslungsreiches Arbeitsumfeld mit langfristiger Perspektive inklusive eines unbefristeten Arbeitsvertrages und einem Firmenwagen auch zur privaten Nutzung. Mit unserem flexiblen Arbeitszeitmodell lassen sich Beruf und Familie in Einklang bringen. Individuelle Entwicklungs- und Weiterbildungsmöglichkeiten, einen Zuschuss zur betrieblichen Altersvorsorge, Sozialleistungen eines modernen Unternehmens sowie zusätzliche Benefits sind für uns selbstverständlich.",
    },
  ];

  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <section className={classes.section}>
      <Container maxWidth="lg" data-aos="fade-up">
        <Box pt={13} pb={matchesXS ? 10 : 12}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            spacing={6}
          >
            <Grid item>
              <Box pt={matchesXS ? 0 : 8}>
                <Typography
                  align="center"
                  variant="h4"
                  component="h3"
                  gutterBottom={true}
                >
                  <Typography
                    className={classes.title}
                    variant="h4"
                    component="span"
                  >
                    {content.header}
                  </Typography>
                </Typography>

                <Typography
                  align="center"
                  variant="h6"
                  color="textSecondary"
                  paragraph={true}
                >
                  {content.description}
                </Typography>
              </Box>
              <Box align="center" pt={0}>
                <Button
                  component={Link}
                  href="/about"
                  variant="contained"
                  className={classes.button}
                  disableRipple
                  disableTouchRipple
                  color="primary"
                >
                  {content.button}
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>

      <Container maxWidth="lg" data-aos="fade-up">
        <Box pb={10}>
          <Grid container direction="column">
            {jobs.map((job) => {
              return (
                <Box pb={2} key={job.url}>
                  <Grid
                    component={Link}
                    href={`/career/${job.url}`}
                    item
                    className={classes.gridContainer}
                    container
                    direction="row"
                    justify="space-between"
                  >
                    <Grid item>
                      <Box>
                        <Typography
                          className={classes.position}
                          variant="h6"
                          color="textPrimary"
                        >
                          {job.jobPosition}
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          color="textSecondary"
                          className={classes.subtitle}
                        >
                          {job.jobLocation} / {job.jobType}
                        </Typography>
                      </Box>
                    </Grid>

                    <Grid item>
                      <Box pt={2}>
                        <ArrowForwardIosIcon />
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              );
            })}
          </Grid>
        </Box>
      </Container>
    </section>
  );
}
