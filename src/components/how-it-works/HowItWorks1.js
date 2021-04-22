import React from "react";
import { makeStyles, fade, useTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

import { BsBuilding } from "react-icons/bs";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiOutlineBarChart } from "react-icons/ai";
import { useMediaQuery } from "@material-ui/core";

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
    backgroundColor: theme.palette.alternate.dark,
    padding: 10,
    borderRadius: 10,
  },
  title: {
    fontWeight: 700,
    color: theme.palette.darkBlue.main,
  },
  description: {
    fontWeight: 500,
  },
  section: {
    backgroundColor: theme.palette.grey[50],
  },
  icon: {
    color: theme.palette.primary.main,
    height: 100,
    width: 30,
  },
  titleOfSub: {
    fontWeight: 700,
  },
}));

export default function HowItWorks(props) {
  const classes = useStyles();
  const theme = useTheme();

  const content = {
    badge: "ACHIEVE MORE",
    "header-p1": "Tora - the expert for your future project",
    description:
      "Tora specializes in decorative finishes such as exposed aggregate concrete and stamped concrete, in addition to regular broom-finished and coloured concrete.",
    description2:
      "We attach just as much importance to impeccable quality as we do on schedule. In addition to timing, our specialists naturally also keep an eye on the latest technologies. Because our goal is to satisfy our customers across the board.",
    description3:
      "Whether concrete removal or site preparation, we look after your project from the first consultation through planning to the final implementation.",
    "col1-header": "Architectural Design",
    "col1-desc":
      "We create individual concepts with a focus on value and independence for private and business customers.",
    "col2-header": "Construction Management",
    "col2-desc":
      "Every project has an organized team that manages the construction site. We pay attention to the proper and timely execution and completion of the construction work",
    "col3-header": "Construction Consultancy",
    "col3-desc":
      "Our experienced construction consultants provide effective leadership, sharp attention to detail and a valued partnership you can rely on.",
    ...props.content,
  };

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <section className={classes.section}>
      <Container maxWidth="lg" data-aos="fade-up">
        <Box pt={10} pb={12}>
          <Grid container spacing={6}>
            <Grid item xs={12} md={7}>
              <Box pt={matchesSM ? 0 : 5}>
                <Typography
                  className={classes.title}
                  variant="h3"
                  component="h2"
                  gutterBottom={true}
                >
                  <Typography
                    className={classes.title}
                    variant="h4"
                    component="span"
                  >
                    {content["header-p1"]}{" "}
                  </Typography>
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="subtitle1"
                  component="p"
                  color="textSecondary"
                >
                  {content["description"]}
                </Typography>
              </Box>
              <Box py={2}>
                <Typography
                  variant="subtitle1"
                  component="p"
                  color="textSecondary"
                >
                  {content["description2"]}
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="subtitle1"
                  component="p"
                  color="textSecondary"
                >
                  {content["description3"]}
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={5}>
              <div className={classes.features}>
                <Box display="flex" mb={5}>
                  <Box pr={5}>
                    <Avatar className={classes.iconWrapper} variant="rounded">
                      <BsBuilding className={classes.icon} />
                    </Avatar>
                  </Box>
                  <div>
                    <Typography
                      variant="h6"
                      component="h3"
                      gutterBottom={true}
                      className={classes.titleOfSub}
                    >
                      {content["col1-header"]}
                    </Typography>
                    <Typography
                      variant="body2"
                      component="p"
                      color="textSecondary"
                    >
                      {content["col1-desc"]}
                    </Typography>
                  </div>
                </Box>
                <Box display="flex" mb={5}>
                  <Box pr={5}>
                    <Avatar className={classes.iconWrapper} variant="rounded">
                      <BsFillPersonLinesFill className={classes.icon} />
                    </Avatar>
                  </Box>
                  <div>
                    <Typography
                      className={classes.titleOfSub}
                      variant="h6"
                      component="h3"
                      gutterBottom={true}
                    >
                      {content["col2-header"]}
                    </Typography>
                    <Typography
                      variant="body2"
                      component="p"
                      color="textSecondary"
                    >
                      {content["col2-desc"]}
                    </Typography>
                  </div>
                </Box>
                <Box display="flex">
                  <Box pr={5}>
                    <Avatar className={classes.iconWrapper} variant="rounded">
                      <AiOutlineBarChart className={classes.icon} />
                    </Avatar>
                  </Box>
                  <div>
                    <Typography
                      variant="h6"
                      component="h3"
                      gutterBottom={true}
                      className={classes.titleOfSub}
                    >
                      {content["col3-header"]}
                    </Typography>
                    <Typography
                      variant="body2"
                      component="p"
                      color="textSecondary"
                    >
                      {content["col3-desc"]}
                    </Typography>
                  </div>
                </Box>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
}
