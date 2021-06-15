import React from "react";
import InteractiveImage from "../images/mobile/image-interactive.jpg";
import InteractiveImage1 from "../images/desktop/image-interactive.jpg";
function About() {
  return (
    <section className="about">
      <div className="about-center">
        <picture>
          <source media="(min-width: 768px)" srcSet={InteractiveImage1} />
          <img src={InteractiveImage} alt="imageinteractive" />
        </picture>
        <div className="about-content">
          <h1>THE LEADER IN INTERACTIVE VR</h1>
          <p>
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
