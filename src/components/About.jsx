import React from "react";
import Common from "./Common"
import wash from "../images/cleaning2.jpg"

function About() {
  return <>
    <Common title="Welcome to About page." visitTitle="Contact here" visit="/contact" img={wash}/>
  </>;
}

export default About;
