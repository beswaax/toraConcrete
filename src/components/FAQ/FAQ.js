import React, { useState } from "react";
import {
  Grid,
  useMediaQuery,
  makeStyles,
  useTheme,
  Typography,
  Container,
  Box,
} from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 7,
  },
  listItem: {
    backgroundColor: "#FFFFFF",
    marginTop: "1rem",
    paddingTop: 20,
    paddingLeft: 14,
    paddingBottom: 20,
    borderRadius: 1,
    border: "1px solid lightgray",
    "&:hover": {
      backgroundColor: "#FFFFFF",
    },
  },
  listeText: {
    marginLeft: "0.5rem",
  },

  responseText: {
    paddingBottom: 10,
    paddingLeft: 5,
  },
  expand: {
    marginLeft: "auto",
    paddingRight: "1rem",
    color: theme.palette.secondary.main,
  },
  collapse: {
    borderRadius: 1,
    border: "1px solid lightgray",
    borderTop: "0",
    backgroundColor: "#FFFFFF",
  },
  button: {
    backgroundColor: [theme.palette.common.redNice],
    "&:hover": {
      backgroundColor: [theme.palette.common.redNice],
    },
  },
  title: {
    color: theme.palette.darkBlue.main,
    fontWeight: 700,
  },
}));

export default function Team() {
  const theme = useTheme();
  const classes = useStyles();

  const matchesTeam = useMediaQuery(
    theme.breakpoints.down(theme.breakpoints.teamTitle)
  );
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);
  const [open7, setOpen7] = useState(false);
  const [open8, setOpen8] = useState(false);

  const teamData = [
    {
      question: "What is the process for getting a quote?",
      answer:
        "Call us directly or send us your name, phone number and email address. If you are able to provide us with a photo and dimensions of your project, we are able to respond much quicker.",
      openPosition: open1,
      setOpenPosition: setOpen1,
    },
    {
      question: "Are quotes free?",
      answer: "Yes! Quotes are absolutely free.",
      openPosition: open2,
      setOpenPosition: setOpen2,
    },
    {
      question: "Do you require an up-front deposit?",
      answer:
        "No, Tora Concrete Ltd has never asked for an up-front deposit. Payment in full is due upon completion of the project.",
      openPosition: open3,
      setOpenPosition: setOpen3,
    },

    {
      question: "How long before you are able to do the project?",
      answer:
        "It is highly dependent on how busy we are, weather, and a number of other factors. As we are a one-crew contractor, with the owner on site throughout the project, we typically only do one project at a time to ensure quality and service.",
      openPosition: open4,
      setOpenPosition: setOpen4,
    },

    {
      question: "What if I don't know what I want?",
      answer:
        "With almost 30 years of experience in concrete flatwork, we can provide design and product ideas for your project. We are also able to work with your landscape architect or designer to achieve your vision.",
      openPosition: open5,
      setOpenPosition: setOpen5,
    },

    {
      question: "Is there a guarantee the concrete won't crack?",
      answer:
        "No one can guarantee concrete won’t crack. There are many factors involved and all we can do is mitigate them and minimize cracking. However, it is likely that some hairline cracking will occur.",
      openPosition: open6,
      setOpenPosition: setOpen6,
    },

    {
      question: "What colours are available?",
      answer:
        "Each ready-mix concrete supplier has a number of colours available. We will provide you with information about a colour chart, or you can check the ready-mix supplier websites.",
      openPosition: open7,
      setOpenPosition: setOpen7,
    },
    {
      question: "What if I am not happy with the outcome?",
      answer:
        "The owner is on site throughout the project and works closely with the client to ensure satisfaction. Open, timely and honest communication will ensure any issues are caught early.",
      openPosition: open8,
      setOpenPosition: setOpen8,
    },
  ];

  return (
    <Grid
      container
      justify="center"
      direction="column"
      alignItems="center"
      data-aos="fade-up"
    >
      {/* Team List */}
      <Container maxWidth="lg">
        <Box py={10}>
          <Grid item style={{ width: "100%" }}>
            <Grid item>
              <Typography variant="h4" className={classes.title} align="center">
                FAQ
              </Typography>
              <Typography
                variant="subtitle1"
                color="textSecondary"
                align="center"
              >
                Here are some of our most frequently asked questions and
                answers.
              </Typography>
            </Grid>
            <List
              component="nav"
              aria-labelledby="nested-list-subheader"
              className={classes.root}
            >
              {teamData.map((member, i) => {
                return (
                  <div key={member.question}>
                    <ListItem
                      button
                      disableRipple
                      disableTouchRipple
                      disableGutters
                      onClick={() =>
                        member.setOpenPosition(!member.openPosition)
                      }
                      className={classes.listItem}
                    >
                      <Grid
                        container
                        direction={matchesTeam ? "column" : "row"}
                      >
                        <Grid item>
                          <Typography
                            variant="h6"
                            component="h6"
                            color="textPrimary"
                            className={classes.listeText}
                          >
                            {member.question}
                          </Typography>
                        </Grid>
                      </Grid>
                      {member.openPosition ? (
                        <ExpandLess className={classes.expand} />
                      ) : (
                        <ExpandMore className={classes.expand} />
                      )}
                    </ListItem>
                    <Collapse
                      className={classes.collapse}
                      in={member.openPosition}
                      timeout="auto"
                      unmountOnExit
                    >
                      <List component="div" disablePadding>
                        <ListItem
                          key={member.position}
                          className={classes.nested}
                        >
                          <Grid container direction="column">
                            <Grid item>
                              <Typography
                                variant="body1"
                                color="textSecondary"
                                className={classes.responseText}
                              >
                                {member.answer}
                              </Typography>
                            </Grid>
                          </Grid>
                        </ListItem>
                      </List>
                    </Collapse>
                  </div>
                );
              })}
            </List>
          </Grid>
        </Box>
      </Container>
    </Grid>
  );
}
