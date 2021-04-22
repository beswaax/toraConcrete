import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import { Hidden } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    height: 512,
  },
  title: {
    fontWeight: 700,
    color: theme.palette.darkBlue.main,
  },
}));

export default function Content(props) {
  const classes = useStyles();

  const content = {
    "header-p1": "Good, better, the best!",
    description:
      "Over almost three decades, Tora has created and sustained a reputation for excellent service and workmanship and for adding to the aesthetics, and increasing the value, of many homes and businesses in the Calgary area.",
    description2:
      "What drives us anew every day is our shared philosophy. We all have the desire to provide our customers with individual and innovative solutions. Not only do our clients enjoy these, but we can also continuously develop ourselves.",
    "primary-action": "Action",
    image: "/assets/23.jpg",
    ...props.content,
  };

  return (
    <section>
      <Container maxWidth="lg" data-aos="fade-up">
        <Box py={12}>
          <Grid container spacing={8}>
            <Hidden mdUp>
              <Grid item xs={12} md={6} data-aos="fade-up">
                <Card>
                  <CardMedia
                    image={content["image"]}
                    className={classes.card}
                    alt="image of a highway with skylines in the background"
                  />
                </Card>
              </Grid>
            </Hidden>
            <Grid item xs={12} md={6}>
              <Box display="flex" height="100%">
                <Box my="auto">
                  <Typography variant="h3" component="h3" gutterBottom={true}>
                    <Typography
                      className={classes.title}
                      variant="h4"
                      component="span"
                    >
                      {content["header-p1"]}
                    </Typography>
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    paragraph={true}
                  >
                    {content["description"]}
                  </Typography>
                  <Box mt={3}>
                    <Typography
                      variant="subtitle1"
                      color="textSecondary"
                      paragraph={true}
                    >
                      {content["description2"]}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Hidden smDown>
              <Grid item xs={12} md={6} data-aos="fade-up">
                <Card>
                  <CardMedia
                    image={content["image"]}
                    className={classes.card}
                    alt="image of a highway with skylines in the background"
                  />
                </Card>
              </Grid>
            </Hidden>
          </Grid>
        </Box>
      </Container>
    </section>
  );
}
