import React from "react";
import IndividualJob from "../../src/components/IndividualJob";
import Contact from "../../src/components/contact/JobContact";
import ContactDetails from "../../src/components/contact/ContactBasic";

const Job = () => {
  const job = {
    url: "assistant-toronto-job",
    jobPosition: "Assistant",
    jobLocation: "Toronto, CA",
    jobType: "Full-Time",
    firstTextBlockTitle: "Who we are",
    firstTextBlockText:
      "As a construction company, we have stood for the highest quality craftsmanship for over 10 years: tradition and the most modern perspectives under one roof, experience and youth work together: simply unbeatable as a team. Innovation paired with traditional craftsmanship, a symbiosis that makes us as a construction company particularly strong for our customers ",
    secondTextBlockTitle: "What we’re looking for",
    secondTextBlockText:
      "To strengthen our team in Toronto, we are looking for a full-time assistant for our architecture and design department. You will work directly for our leading architect. Flexibility, mutual trust and the ability to work in a team are important to us.",
    thirdTextBlockTitle: "Why to apply",
    thirdTextBlockText:
      "We offer attractive pay, a secure job with good work-life balance, flexible working hours with the option to work remotely 1 day a week and much more",
  };
  return (
    <>
      <IndividualJob job={job} />
      <Contact />
      <ContactDetails />
    </>
  );
};

export default Job;
