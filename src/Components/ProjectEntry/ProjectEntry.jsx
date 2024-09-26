import "./ProjectEntry.css";
import React, { useEffect, useState } from "react";

const ProjectEntry = ({ prObject }) => {

  const [activePr, setActivePr] = useState(false)
  
  const [prHeight, setPrHeight] = useState(40)

  useEffect(()=>{
    activePr ? setPrHeight(350) : setPrHeight(40)
  }, [activePr])


  return (
    <>
      <article className="pr-article"
        style={{height: prHeight}}
      >
        <div className="pr-main-info"
          onClick={()=>{setActivePr(!activePr)}}
        >
          <h3 className="pr-name">{prObject.title} // <span className="dimmed">{prObject.kind}</span></h3>
          <h3 className="pr-year dimmed">{prObject.year}</h3>
          {
            prObject.links.code.frontEnd && (
                <a href={prObject.links.code.frontEnd} target="_blank" className="pr-code-frontEnd dimmed">[gh-frontend]</a>
            )
          }
          {
            prObject.links.code.backEnd && (
                <a href={prObject.links.code.backEnd} target="_blank" className="pr-code-backEnd dimmed">[gh-backend]</a>
            )
          }
          {
            prObject.links.deployment.frontEnd && (
                <a href={prObject.links.deployment.frontEnd} target="_blank" className="pr-deployment-frontEnd dimmed">[deployment-frontend]</a>
            )
          }
          {
            prObject.links.deployment.backEnd && (
                <a href={prObject.links.deployment.backEnd} target="_blank" className="pr-deployment-backEnd dimmed">[deployment-backend]</a>
            )
          }
        </div>

        <div className="pr-inner-info">
          <div className="pr-images">
            {
              Object.keys(prObject.images).map((img, i)=>{
                return(
                  <div className="pr-image" key={i}>
                    <img src={prObject.images[img]} alt={img} />
                  </div>
                )
              })
            }
          </div>
          <div className="pr-side-info">
            <div className="pr-technologies">
              {
                prObject.technologies.map((tech, i)=>{
                  return(
                    <p className="pr-technologie dimmed" key={i}>{tech}</p>
                  )
                })
              }
            </div>
            <div className="pr-description">
              <p>{prObject.description}</p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default ProjectEntry;
