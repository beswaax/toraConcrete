import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { useMediaQuery } from "@material-ui/core";

import Image from "next/image";

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
    badge: "JOIN OUR TEAM TODAY !",
    "header-p1": "Want to work with us?",
    description:
      "As a traditional, successful and healthy, medium-sized construction company, we know exactly how important competent and success-oriented employees are. Team-oriented work, a good working atmosphere, a high level of employee orientation and interesting projects are important reasons for the satisfaction of our employees.",
    image: "/assets/want-to-work.svg",
    ...props.content,
  };

  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <section>
      <Container maxWidth="lg">
        <Box pt={13} pb={matchesXS ? 10 : 12}>
          <Grid container spacing={6} data-aos="fade-up">
            <Grid item xs={12} md={6} data-aos="fade-up">
              <Box pt={matchesXS ? 0 : 8}>
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
            <Grid item xs={12} md={6} data-aos="fade-up">
              <Box>
                <Image src={content.image} width={500} height={250} />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
}
