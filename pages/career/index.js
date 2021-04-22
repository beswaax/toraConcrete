import React from "react";
import { makeStyles, useTheme } from "@material-ui/core";

import PageHeader from "../../src/components/headers/PageHeader";
import Content1 from "../../src/components/content/CareersPageContent1";
import Content3 from "../../src/components/content/CareersPageContent3";
import Contact from "../../src/components/contact/ContactBasic";

const useStyles = makeStyles((theme) => ({}));

const Careers = () => {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <section>
      <PageHeader
        title={"Careers"}
        description={
          "We are founded by a leading academic and researcher in the field of construction. Join our team today!"
        }
      />
      <Content1 />
      {/* <Content2 /> */}
      <Content3 />
      <Contact />
    </section>
  );
};

export default Careers;
