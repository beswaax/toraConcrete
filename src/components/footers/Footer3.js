import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Link from "../../Link";
import IconButton from "@material-ui/core/IconButton";

import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";

const useStyles = makeStyles((theme) => ({
  footerNav: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(1),
  },
  footerLink: {
    color: theme.palette.common.white,
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    marginBottom: theme.spacing(2),
    "&:hover": {
      textDecoration: "none",
    },
  },
  footer: {
    backgroundColor: theme.palette.background.footer,
  },
  icon: {
    color: theme.palette.grey[500],
  },
  iconLove: {
    color: theme.palette.secondary.main,
    height: 18,
    width: 21,
  },
  link: {
    color: theme.palette.grey[500],
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
    },
  },
}));

export default function Footer(props) {
  const classes = useStyles();

  const content = {
    brand: {
      image: "/assets/vector/default-monochrome-white.svg",
      width: 180,
    },
    testimonial: "Made with love by RangoJango",
    copy: "© 2021 Tora Concrete & Construction. All rights reserved.",
    link1: "HOME",
    link2: "ABOUT",
    link3: "SERVICES",
    // link4: "TERMS OF SERVICE",
    link5: "CAREERS",
    link6: "CONTACT",
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

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Box py={6} textAlign="center">
          <Link href="/" color="inherit" underline="none">
            {brand}
          </Link>
          <Box component="nav" className={classes.footerNav}>
            <Link href="/" variant="subtitle2" className={classes.footerLink}>
              {content["link1"]}
            </Link>
            <Link
              href="/about"
              variant="subtitle2"
              className={classes.footerLink}
            >
              {content["link2"]}
            </Link>
            <Link
              href="/about"
              variant="subtitle2"
              className={classes.footerLink}
            >
              {content["link3"]}
            </Link>

            <Link
              href="/about"
              variant="subtitle2"
              className={classes.footerLink}
            >
              {content["link5"]}
            </Link>
            <Link
              href="/about"
              variant="subtitle2"
              className={classes.footerLink}
            >
              {content["link6"]}
            </Link>
            {/* <Link
              href="/company-terms"
              variant="subtitle2"
              className={classes.footerLink}
            >
              {content["link4"]}
            </Link> */}
          </Box>

          <Typography
            className={classes.footerLink}
            color="textPrimary"
            component="p"
            variant="body2"
          >
            {content["copy"]}
          </Typography>
          {/* <Typography
            className={classes.footerLink}
            color="textPrimary"
            component="p"
            variant="body2"
          >
            Made with <FavoriteIcon className={classes.iconLove} /> by{" "}
            <a
              href="https://rangojango.com/"
              target="_blank"
              className={classes.link}
            >
              RangoJango
            </a>
          </Typography> */}
        </Box>
      </Container>
    </footer>
  );
}
