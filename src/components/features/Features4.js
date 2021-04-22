import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

import {
  blue,
  yellow,
  green,
  purple,
  pink,
  deepOrange,
} from "@material-ui/core/colors";

import AcUnitOutlinedIcon from "@material-ui/icons/AcUnitOutlined";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import AssignmentLateOutlinedIcon from "@material-ui/icons/AssignmentLateOutlined";
import BuildOutlinedIcon from "@material-ui/icons/BuildOutlined";
import DeckOutlinedIcon from "@material-ui/icons/DeckOutlined";
import InputOutlinedIcon from "@material-ui/icons/InputOutlined";

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundColor: theme.palette.grey[50],
  },
  iconWrapper: {
    backgroundColor: theme.palette.primary.light,
    padding: 6,
    borderRadius: 8,
  },
  icon1: {
    backgroundColor: theme.palette.alternate.dark,
    color: theme.palette.primary.dark,
  },
  icon2: {
    backgroundColor: yellow[100],
    color: yellow[800],
  },
  icon3: {
    backgroundColor: green[100],
    color: green[600],
  },
  icon4: {
    backgroundColor: purple[100],
    color: purple[600],
  },
  icon5: {
    backgroundColor: pink[100],
    color: pink[600],
  },
  icon6: {
    backgroundColor: deepOrange[100],
    color: deepOrange[600],
  },
  title: {
    fontWeight: 600,
  },
}));

export default function Features(props) {
  const classes = useStyles();

  const content = [
    {
      title: "Structural Engineering",
      description:
        "We develop individual solutions that are precisely tailored to the needs of our clients. Since we know that we can, we accept any challenge - be it building a laboratory, a cultural or shopping center. What makes us so sure: our many years of expertise in the application of the latest technologies. This combination helps us to plan our projects in detail and to implement them exactly according to your personal ideas.",
      icon: AcUnitOutlinedIcon,
    },
    {
      title: "Civil engineering",
      description:
        "Our extensive know-how also enables us to successfully master any civil engineering task. From the consultation to the draft to the execution, we always keep an eye on the statics and work both competently and precisely. A progressive mindset is also a matter of course for us. That is why we always keep up to date with news in our industry and include them in our work as soon as it is beneficial for your project.",
      icon: AddCircleOutlineOutlinedIcon,
    },
    {
      title: "Modifications",
      description:
        "Requirements can change over time. This fact does not stop at the construction industry either. As a team of bricklayers, reinforced concrete workers and many other specialists, it is possible for us to adapt the conditions of buildings & Co. exactly to your needs. Always exactly according to plan. And in such a way that you are also satisfied with the result in the long term.",
      icon: AssignmentLateOutlinedIcon,
    },
    {
      title: "Balkonsanierung",
      description:
        "Draußen das Leben genießen! Balkone und Dachterrassen gehören in Stuttgart zu den am meisten beanspruchten Bauteilen eines Hauses. Wir bieten Ihnen eine durchdachte Renovierungslösung für Ihren Balkon, die Sicherheit und Ästhetik verbindet.",
      icon: BuildOutlinedIcon,
    },
    {
      title: "Reparaturen aller Art",
      description:
        "An Ihrer Hausecke bröckelt der Putz? Sie haben keine Lust, auf der Treppe zum Garten ständig über die letzte Stufe zu stolpern? Die Stützmauer hinten im Hof ist keine wirkliche Stütze und schon lang’ keine Augenweide mehr?",
      icon: DeckOutlinedIcon,
    },
    {
      title: "Hausentfeuchtung",
      description:
        "Ist das Gebäude selbst unzulänglich abgedichtet, oder ist vielleicht eine Undichtigkeit im alten Abwassersystem der Grund für Ihr Malheur? Auf dieser Basis erstellen wir individuell das Sanierungskonzept. Jede Wette: Auch Ihren Keller bekommen wir trocken!",
      icon: InputOutlinedIcon,
    },
  ];

  return (
    <section className={classes.section}>
      <Container maxWidth="lg">
        <Box py={6}>
          <Grid container spacing={6}>
            {content.map((service) => {
              return (
                <Grid item xs={12} sm={6} md={4}>
                  <Box display="flex">
                    <Box pr={5}>
                      <Avatar
                        variant="rounded"
                        className={clsx(classes.iconWrapper, classes.icon1)}
                      >
                        <service.icon />
                      </Avatar>
                    </Box>
                    <div>
                      <Typography
                        variant="h6"
                        component="h3"
                        className={classes.title}
                        gutterBottom={true}
                      >
                        {service.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        component="p"
                        className={classes.description}
                        color="textSecondary"
                      >
                        {service.description}
                      </Typography>
                    </div>
                  </Box>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </Container>
    </section>
  );
}
