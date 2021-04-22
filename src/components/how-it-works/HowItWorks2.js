import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  iconWrapper: {
    backgroundColor: theme.palette.primary.dark,
  },
  img: {
    maxWidth: "100%",
  },
  title: {
    fontWeight: 700,
    color: theme.palette.darkBlue.main,
  },
}));

export default function HowItWorks(props) {
  const classes = useStyles();
  const theme = useTheme();

  const content = {
    "header-p1": "Master at work",
    description:
      "We are characterized by good quality, technical know-how and a wealth of ideas. We have already been able to prove this in numerous construction projects. We offer you a wide variety of services. If you have any questions or requests, you can reach us personally - strong services from a single source!",
    image: "nereus-assets/img/illustrations/financial-report.svg",
    ...props.content,
  };

  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  return (
    <section>
      <Container maxWidth="lg">
        <Box pt={13} pb={matchesXS ? 10 : 12}>
          <Grid container spacing={6}>
            <Grid item xs={12} md={8}>
              <Box>
                <Typography variant="h4" component="h3" gutterBottom={true}>
                  <Typography
                    className={classes.title}
                    variant="h4"
                    component="span"
                  >
                    {content["header-p1"]}{" "}
                  </Typography>
                </Typography>

                <Typography
                  variant="subtitle1"
                  color="textSecondary"
                  paragraph={true}
                >
                  {content["description"]}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
}
