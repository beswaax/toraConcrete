import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";

import RoomIcon from "@material-ui/icons/Room";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import WebAssetIcon from "@material-ui/icons/WebAsset";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: 700,
    color: theme.palette.darkBlue.main,
  },
  iconWrapper: {
    backgroundColor: theme.palette.primary.main,
  },
  icon: {
    color: theme.palette.common.white,
  },
  midColumn: {
    [theme.breakpoints.up("md")]: {
      paddingLeft: theme.spacing(4),
    },
  },
}));

export default function Contact(props) {
  const classes = useStyles();
  const theme = useTheme();

  const content = {
    header: "Contact us",
    description:
      "If you have any questions, please send us a message or visit us at our Calgary office.",
    contact1: "Address",
    "contact1-desc1": "1930 12 Ave NW,",
    "contact1-desc2": "Calgary, AB T2N 1J6",
    contact2: "Email",
    "contact2-desc": "falconi@shaw.ca",
    contact3: "Fax",
    contact4: "Phone",
    "contact4-desc": "403-275-7765",
    "contact5-desc1": "403-275-7765",
    ...props.content,
  };

  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <section>
      <Container maxWidth="lg" data-aos="fade-up">
        <Box py={matchesXS ? 10 : matchesSM ? 13 : matchesMD ? 17 : 20}>
          <Grid container spacing={6}>
            <Grid item xs={12} md={4}>
              <Typography
                variant="h4"
                className={classes.title}
                component="h2"
                gutterBottom={true}
              >
                {content["header"]}
              </Typography>
              <Typography
                className={classes.description}
                variant="subtitle1"
                color="textPrimary"
                paragraph={true}
              >
                {content["description"]}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <div className={classes.midColumn}>
                <Box display="flex" mb={3}>
                  <div>
                    <Avatar className={classes.iconWrapper}>
                      <RoomIcon className={classes.icon} fontSize="small" />
                    </Avatar>
                  </div>
                  <Box ml={2}>
                    <Typography variant="h6" gutterBottom={true}>
                      {content["contact1"]}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {content["contact1-desc1"]}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {content["contact1-desc2"]}
                    </Typography>
                  </Box>
                </Box>
                <Box display="flex">
                  <div>
                    <Avatar className={classes.iconWrapper}>
                      <EmailIcon className={classes.icon} fontSize="small" />
                    </Avatar>
                  </div>
                  <Box ml={2}>
                    <Typography variant="h6" gutterBottom={true}>
                      {content["contact2"]}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {content["contact2-desc"]}
                    </Typography>
                  </Box>
                </Box>
              </div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box display="flex" mb={3}>
                <div>
                  <Avatar className={classes.iconWrapper}>
                    <WebAssetIcon className={classes.icon} fontSize="small" />
                  </Avatar>
                </div>
                <Box ml={2}>
                  <Typography variant="h6" gutterBottom={true}>
                    {content["contact3"]}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {content["contact5-desc1"]}
                  </Typography>
                  <br />
                </Box>
              </Box>
              <Box display="flex">
                <div>
                  <Avatar className={classes.iconWrapper}>
                    <PhoneIcon className={classes.icon} fontSize="small" />
                  </Avatar>
                </div>
                <Box ml={2}>
                  <Typography variant="h6" gutterBottom={true}>
                    {content["contact4"]}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {content["contact4-desc"]}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
}
