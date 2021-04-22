import React from "react";
import { makeStyles } from "@material-ui/core";

import PageHeader from "../src/components/headers/PageHeader";
import AboutPageContent from "../src/components/content/AboutPageContent";
import AboutPageTeam from "../src/components/Team/AboutPageTeam";
import Testimonials from "../src/components/testimonials/TestimonialsWithLogos";
import Contact from "../src/components/contact/ContactBasic";
import Gallery from "../src/components/gallery/AboutPageGallery";

const useStyles = makeStyles((theme) => ({}));

const About = () => {
  const classes = useStyles();

  return (
    <section>
      <PageHeader
        title={"About Us"}
        description={
          "The company at a glance. Find out more about us and our motivations."
        }
      />
      <AboutPageContent />
      <AboutPageTeam />
      <Testimonials />
      <Contact />
      <Gallery />
    </section>
  );
};

export default About;
