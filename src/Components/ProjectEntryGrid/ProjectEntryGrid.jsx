import { NavigationContext } from "../../contexts/contexts";
import { handlePrEntrySize } from "../../utils/functions/handlePrEntrySize";
import { handleProjectsId } from "../../utils/functions/handleProjectsId";
import "./ProjectEntryGrid.css";
import React, { useContext, useEffect, useState } from "react";

const ProjectEntryGrid = ({ prObject }) => {

  const [activePr, setActivePr] = useState(false)  
  const [prHeight, setPrHeight] = useState("auto")

  const {selectedView } = useContext(NavigationContext)


  return (
    <>
      <article 
        className={`pr-article ${selectedView}`}
        id={handleProjectsId(prObject.title)}
        style={{height: prHeight}}
      >
        <div className={`pr-top-part ${selectedView}`}>

          <div className={`pr-main-image ${selectedView}`}>
          {
            Object.keys(prObject.images).map((img, i)=>{
              if(i<1){return(
                <div className={`pr-image ${selectedView}`} key={i}>
                    <img src={prObject.images[img]} alt={img} />
                  </div>
                )}
              })
            }
          </div>
        <div className={`pr-inner-info ${selectedView}`}>

          <div className={`pr-side-info ${selectedView}`}>
            <div className={`pr-technologies ${selectedView}`}>
              {
                prObject.technologies.map((tech, i)=>{
                  return(
                    <p className={`pr-tecnologie dimmed ${selectedView}`} key={i}>{tech}</p>
                  )
                })
              }
            </div>
            <div className={`pr-description ${selectedView}`}>
              <p>{prObject.description}</p>
            </div>

            <div className={`pr-images ${selectedView}`}>
            {
              Object.keys(prObject.images).map((img, i)=>{
                if(i>=1){return(
                  <div className={`pr-image ${selectedView}`} key={i}>
                    <img src={prObject.images[img]} alt={img} />
                  </div>
                )}
              })
            }
          </div>
          </div>
        </div>
        </div>

        
        <div className={`pr-main-info ${selectedView}`}
          onClick={()=>{
            setActivePr(!activePr)
          }}
        >
          <div className={`pr-name-date ${selectedView}`}>
            <h3 className={`pr-name ${selectedView}`}>{prObject.title} // <span className={`pr-field dimmed ${selectedView}`}>{prObject.kind}</span></h3>
            <h3 className={`pr-year dimmed ${selectedView}`}>{prObject.year}</h3>
          </div>

          <div className={`pr-links ${selectedView}`}>
          {
            prObject.links.code.frontEnd ?
            (<a href={prObject.links.code.frontEnd} target="_blank" className={`pr-code-frontEnd dimmed ${selectedView}`}>[gh-frontend]</a>)
            : (<a href={prObject.links.code.frontEnd} target="_blank" className={`pr-year dimmed inactive ${selectedView}`}>[gh-frontend]</a>)
            
          }
          {
            prObject.links.code.backEnd ? 
            (<a href={prObject.links.code.backEnd} target="_blank" className={`pr-backEnd dimmed ${selectedView}`}>[gh-backend]</a>)
              : (<a href={prObject.links.code.backEnd} target="_blank" className={`pr-backEnd dimmed inactive ${selectedView}`}>[gh-backend]</a>)
          }
          {
            prObject.links.deployment.frontEnd ? 
            (<a href={prObject.links.deployment.frontEnd} target="_blank" className={`pr-deployment-frontEnd dimmed ${selectedView}`}>[deployment-frontend]</a>)
            : (<a href={prObject.links.deployment.frontEnd} target="_blank" className={`pr-deployment-frontEnd dimmed inactive ${selectedView}`}>[deployment-frontend]</a>)
          }
          {
            prObject.links.deployment.backEnd ? 
            (<a href={prObject.links.deployment.backEnd} target="_blank" className={`pr-deployment-backEnd dimmed ${selectedView}`}>[deployment-backend]</a>)
            : (<a href={prObject.links.deployment.backEnd} target="_blank" className={`pr-deploymwnt-backEnd dimmed inactive ${selectedView}`}>[deployment-backend]</a>)
          }
          </div>
        </div>
      </article>
    </>
  );
};

export default ProjectEntryGrid;