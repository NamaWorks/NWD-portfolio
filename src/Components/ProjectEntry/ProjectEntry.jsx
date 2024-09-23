import "./ProjectEntry.css";
import React from "react";

const ProjectEntry = ({ prObject }) => {
  return (
    <>
      <article className="pr-article">
        <div className="pr-main-info">
          
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
