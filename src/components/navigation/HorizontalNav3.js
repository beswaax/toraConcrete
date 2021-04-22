import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import Link from "../../Link";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import LayersIcon from "@material-ui/icons/Layers";
import FilterHdrIcon from "@material-ui/icons/FilterHdr";
import DirectionsBusIcon from "@material-ui/icons/DirectionsBus";
import NotificationImportantIcon from "@material-ui/icons/NotificationImportant";
import CloudDoneIcon from "@material-ui/icons/CloudDone";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    minHeight: 70,
  },
  brand: {
    lineHeight: 1,
    marginRight: theme.spacing(5),
  },
  link: {
    marginRight: theme.spacing(5),
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
      color: theme.palette.primary.dark,
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  linkDrawer: {
    marginRight: theme.spacing(5),
    textDecoration: "none",
    color: theme.palette.common.black,
    "&:hover": {
      textDecoration: "none",
      color: theme.palette.primary.dark,
    },
  },
  secondaryAction: {
    marginLeft: "auto",
    marginRight: theme.spacing(5),
    "&:hover": {
      textDecoration: "none",
      color: theme.palette.primary.dark,
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  primaryAction: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  menuButton: {
    marginLeft: "auto",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  iconWrapper: {
    minWidth: 40,
  },
  icon: {
    color: theme.palette.text.hint,
  },
  drawerContainer: {
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(3),
    width: 300,
  },
  appbar: {
    boxShadow: "none",
    borderBottom: "0.6px solid lightgrey",
  },
}));

export default function Navigation(props) {
  const classes = useStyles();

  const content = {
    brand: {
      image: "/assets/logo1B.png",
      width: 150,
    },
    link1: "Home",
    link2: "About",
    link3: "Services",
    link4: "Projects",
    link5: "Careers",
    "primary-action": "Contact",
    ...props.content,
  };

  let brand;

  if (content.brand.image) {
    brand = (
      <img src={content.brand.image} alt="" width={content.brand.width} />
    );
  } else {
    brand = content.brand.text || "";
  }

  const [state, setState] = React.useState({ open: false });

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, open });
  };

  const handleClick = (e) => {
    setState({ open: !state.open });
  };

  return (
    <AppBar position="static" color="inherit" className={classes.appbar}>
      <Toolbar className={classes.toolbar}>
        <Link
          href="/"
          color="primary"
          underline="none"
          variant="h5"
          className={classes.brand}
        >
          {brand}
        </Link>
        <Link
          href="/"
          color="textPrimary"
          variant="subtitle1"
          className={classes.link}
        >
          {content["link1"]}
        </Link>
        <Link
          href="/about"
          color="textPrimary"
          variant="subtitle1"
          className={classes.link}
        >
          {content["link2"]}
        </Link>
        <Link
          href="/about"
          color="textPrimary"
          variant="subtitle1"
          className={classes.link}
        >
          {content["link3"]}
        </Link>
        {/* <Link
          href="/projects"
          color="textPrimary"
          variant="subtitle1"
          className={classes.link}
        >
          {content["link4"]}
        </Link> */}
        <Link
          href="/about"
          color="textPrimary"
          variant="subtitle1"
          className={classes.secondaryAction}
        >
          {content["link5"]}
        </Link>
        <Button
          disableRipple
          disableFocusRipple
          disableTouchRipple
          variant="contained"
          color="primary"
          href="/about"
          className={classes.primaryAction}
        >
          {content["primary-action"]}
        </Button>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          className={classes.menuButton}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <Drawer anchor="left" open={state.open} onClose={toggleDrawer(false)}>
        <div className={classes.drawerContainer}>
          <Box
            mb={1}
            ml={2}
            pb={2}
            border={1}
            borderTop={0}
            borderLeft={0}
            borderRight={0}
            borderColor="background.emphasis"
          >
            <Link
              href="/"
              color="primary"
              underline="none"
              variant="h5"
              className={classes.linkBrand}
            >
              {brand}
            </Link>
          </Box>
          <List>
            <ListItem
              disableTouchRipple
              disableRipple
              button
              onClick={handleClick}
              component={Link}
              className={classes.linkDrawer}
              href="/"
              key={content["link1"]}
            >
              <ListItemIcon className={classes.iconWrapper}>
                <LayersIcon className={classes.icon} />
              </ListItemIcon>

              <ListItemText primary={content["link1"]} />
            </ListItem>
            <ListItem
              disableTouchRipple
              disableRipple
              onClick={handleClick}
              button
              component={Link}
              className={classes.linkDrawer}
              href="/about"
              key={content["link2"]}
            >
              <ListItemIcon className={classes.iconWrapper}>
                <FilterHdrIcon className={classes.icon} />
              </ListItemIcon>
              <ListItemText
                component={Link}
                href="/about"
                primary={content["link2"]}
              />
            </ListItem>
            <ListItem
              disableTouchRipple
              disableRipple
              button
              onClick={handleClick}
              className={classes.linkDrawer}
              component={Link}
              href="/about"
              key={content["link3"]}
            >
              <ListItemIcon className={classes.iconWrapper}>
                <DirectionsBusIcon className={classes.icon} />
              </ListItemIcon>
              <ListItemText primary={content["link3"]} />
            </ListItem>
            {/* <ListItem
              disableTouchRipple
              disableRipple
              onClick={handleClick}
              button
              component={Link}
              className={classes.linkDrawer}
              href="/about"
              key={content["link4"]}
            >
              <ListItemIcon className={classes.iconWrapper}>
                <NotificationImportantIcon className={classes.icon} />
              </ListItemIcon>
              <ListItemText primary={content["link4"]} />
            </ListItem> */}
            <ListItem
              disableTouchRipple
              disableRipple
              className={classes.linkDrawer}
              button
              onClick={handleClick}
              component={Link}
              href="/about"
              key={content["link5"]}
            >
              <ListItemIcon className={classes.iconWrapper}>
                <CloudDoneIcon className={classes.icon} />
              </ListItemIcon>
              <ListItemText primary={content["link5"]} />
            </ListItem>
          </List>
          <Box
            mt={1}
            ml={2}
            pt={3}
            border={1}
            borderBottom={0}
            borderLeft={0}
            borderRight={0}
            borderColor="background.emphasis"
          >
            <Button
              disableRipple
              disableTouchRipple
              href="/about"
              variant="contained"
              color="primary"
              fullWidth
            >
              {content["primary-action"]}
            </Button>
          </Box>
        </div>
      </Drawer>
    </AppBar>
  );
}
