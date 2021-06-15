import React from "react";
import Images from "./ImagesData";
import ImagesData from "./ImagesData";
function Projects() {
  return (
    <section className="projects">
      <div className="projects-center">
        <div className="project-header">
          <h1>OUR CREATIONS</h1>
          <button>SEE ALL</button>
        </div>
        <div className="projects-img-container">
          {ImagesData.map((item, index) => {
            return (
              <article className="project">
                <div className="project-image">
                  <picture>
                    <source media="(min-width: 768px)" srcset={item.desktop} />
                    <img src={item.mobile} alt={item.text} />
                  </picture>
                </div>
                <h2>{item.text}</h2>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Projects;
