import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import {
  Grid,
  makeStyles,
  useTheme,
  useMediaQuery,
  Hidden,
} from "@material-ui/core";

import Image from "next/image";

const useStyles = makeStyles((theme) => ({
  button: {},
  cardRoot: {
    backgroundColor: theme.palette.primary.dark,
    paddingLeft: 10,
    paddingRight: 0,
    paddingTop: 30,
    paddingBottom: 30,
    [theme.breakpoints.down("xs")]: {
      paddingTop: 25,
      paddingBottom: 25,
    },
  },
  cardRoot2: {
    backgroundColor: "#FFFFFF",
    paddingLeft: 10,
    paddingRight: 0,
    paddingTop: 30,
    paddingBottom: 30,
    boxShadow: "#0f0f0f",
    border: "1px solid lightgray",
    [theme.breakpoints.down("xs")]: {
      paddingTop: 25,
      paddingBottom: 25,
    },
  },
  title: {
    fontWeight: 700,
    color: theme.palette.darkBlue.main,
    paddingBottom: 10,
  },
}));

const AboutPageContent = () => {
  const theme = useTheme();
  const classes = useStyles();

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const content = {
    firstTextBlock: {
      title: "Tora has been operating since 1989",
      text:
        "Tora Concrete, Calgary’s premier decorative concrete contractor, began operating in Calgary in 1989. We focus on quality, performance and teamwork. We measure the implementation of our motto 'always better' by the satisfaction of our customers. Thanks to our well-trained, qualified and committed employees, this is demonstrably very high.",
    },
    secondTextBlock: {
      title: "Our Mission",
      text:
        "Tora - this name has stood for the highest quality for more than 30 years. We work with the best suppliers and highly skilled craftsmen to create sidewalks, patios, driveways, steps and other concrete projects that reflect your style and vision and to complement your home or business.",
    },
    thirdTextBlock: {
      title: "Our Story",
      text:
        "Tora Concrete was founded in 1989 by Orazio Falconi, who at the time had over 20 years of experience in the concrete industry. Over the years we have had the opportunity to grow rapidly as a company and are now one of the best in the concrete industry.",
    },
  };

  return (
    <Container maxWidth="lg">
      <Box my={10}>
        <Grid container direction="column" justify="space-between">
          <Grid
            item
            container
            direction="row"
            justify="space-between"
            data-aos="fade-up"
          >
            <Hidden mdUp>
              <Grid item sm={12} md={5}>
                <Box my={2}>
                  <Image src={"/assets/fourth.svg"} width={400} height={400} />
                </Box>
              </Grid>
            </Hidden>

            <Grid item sm={12} md={6}>
              <Box py={matchesSM ? 2 : 7} pb={6}>
                <Typography className={classes.title} variant="h4">
                  {content.firstTextBlock.title}
                </Typography>
                <Typography color="textPrimary">
                  {content.firstTextBlock.text}
                </Typography>
              </Box>
            </Grid>

            <Hidden smDown>
              <Grid item sm={12} md={5}>
                <Box>
                  <Image src={"/assets/fourth.svg"} width={400} height={400} />
                </Box>
              </Grid>
            </Hidden>
          </Grid>

          <Grid
            item
            container
            direction="row"
            justify="space-between"
            data-aos="fade-up"
          >
            <Grid item sm>
              <Box pr={3} py={matchesXS ? 2 : 5}>
                <Typography variant="h4" className={classes.title}>
                  {content.secondTextBlock.title}
                </Typography>
                <Typography color="textPrimary">
                  {content.secondTextBlock.text}
                </Typography>
              </Box>
            </Grid>
            <Grid item sm>
              <Box py={matchesXS ? 2 : 5} pr={3}>
                <Typography className={classes.title} variant="h4">
                  {content.thirdTextBlock.title}
                </Typography>
                <Typography color="textPrimary">
                  {content.thirdTextBlock.text}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default AboutPageContent;
