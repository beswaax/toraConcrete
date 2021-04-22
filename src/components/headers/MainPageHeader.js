import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  primaryAction: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      marginRight: theme.spacing(0),
      marginBottom: theme.spacing(2),
    },
  },
  imageBox: {
    [theme.breakpoints.up("md")]: {
      marginBottom: "-350px",
    },
  },
  img: {
    maxWidth: "100%",
  },
  title: {
    fontWeight: 700,
    color: theme.palette.darkBlue.main,
  },
  description: {
    fontWeight: 500,
  },
}));

export default function Header(props) {
  const classes = useStyles();

  const content = {
    "header-p1": "Donec lacinia",
    "header-p2": "turpis non sapien lobortis pretium",
    description:
      "Integer feugiat massa sapien, vitae tristique metus suscipit nec.",
    "primary-action": "Action",
    "secondary-action": "Link Default",
    pattern: "nereus-assets/img/bg/pattern1.png",
    image: "assets/hero-image.png",
    ...props.content,
  };

  return (
    <section
      className={classes.section}
      style={{ backgroundImage: `url("${content["pattern"]}")` }}
    >
      <Container maxWidth="md">
        <Box pt={8} pb={6} textAlign="center" overflow="hidden">
          <Container maxWidth="sm">
            <Typography variant="h3" component="h2" gutterBottom={true}>
              <Typography
                className={classes.title}
                variant="h3"
                component="span"
                color="primary"
              >
                {content["header-p1"]}{" "}
              </Typography>
              <Typography
                className={classes.title}
                variant="h3"
                component="span"
              >
                {content["header-p2"]}
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
                variant="contained"
                color="secondary"
                className={classes.primaryAction}
              >
                {content["primary-action"]}
              </Button>
              <Link href="#">{content["secondary-action"]}</Link>
            </Box>
          </Container>
          <Box mt={5} className={classes.imageBox}>
            <img src={content["image"]} alt="" className={classes.img} />
          </Box>
        </Box>
      </Container>
    </section>
  );
}
