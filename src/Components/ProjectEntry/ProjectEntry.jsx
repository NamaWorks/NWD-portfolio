import "./ProjectEntry.css";
import React from "react";

const ProjectEntry = ({ prObject }) => {
  return (
    <>
      <article className="pr-article">
        <div className="pr-main-info">
          <h3 className="pr-name">{prObject.title}</h3>
          <h3 className="pr-year">{prObject.year}</h3>
          {
            prObject.links.code.frontEnd && (
                <a href={prObject.links.code.frontEnd} target="_blank" className="pr-code-frontEnd">gh-frontend</a>
            )
          }
        </div>

        <div className="pr-inner-info">
          <div className="pr-images"></div>
          <div className="pr-side-info">
            <div className="pr-technologies"></div>
            <div className="pr-description"></div>
          </div>
        </div>
      </article>
    </>
  );
};

export default ProjectEntry;
