import { NavigationContext } from "../../../contexts/contexts";
import { getMousePosition } from "../../../utils/functions/getMousePosition";
import { handlePrEntrySize } from "../../../utils/functions/handlePrEntrySize";
import { handleProjectsId } from "../../../utils/functions/handleProjectsId";
import { HoverMsg } from "../../UI/HoverMsg/HoverMsg";
import PrDescription from "../PrEntryData/PrDescription";
import PrImages from "../PrEntryData/PrImages";
import PrLinks from "../PrEntryData/PrLinks";
import PrMainImg from "../PrEntryData/PrMainImg";
import PrNameDate from "../PrEntryData/PrNameDate";
import PrTechs from "../PrEntryData/PrTechs";
import "./ProjectEntryGrid.css";
import React, { useContext, useEffect, useState } from "react";

const ProjectEntryGrid = ({ prObject }) => {

  const [activePr, setActivePr] = useState(false)  
  const [prWidth, setPrWidth] = useState(20)

  const { selectedView, openProjects, setOpenProjects } = useContext(NavigationContext);

  useEffect(()=>{
    selectedView == "grid" &&
      setPrWidth(
        handlePrEntrySize(handleProjectsId(prObject.title), activePr, selectedView)
      );
      openProjects && setActivePr(false)
  });


  return (
    <>

{
      window.onmousemove=(e)=>{
        const hoverMsg = document.querySelector(".hover-text")
        if(hoverMsg){
          hoverMsg.style.position = "fixed"
          hoverMsg.style.top = getMousePosition(e).y + "px"
          hoverMsg.style.left = getMousePosition(e).x + 20 + "px"
        }
      }
    }

      <article 
        className={`pr-article ${selectedView}`}
        id={handleProjectsId(prObject.title)}
        style={{width: prWidth}}
      >
        <div className={`pr-top-part ${selectedView}`} 
          onClick={()=>{
            if (activePr) {
              if (openProjects) {
                setActivePr(false);
                setOpenProjects(false);
              } else if (!openProjects) {
                setOpenProjects(true);
              }
            } else if (!activePr) {
              setOpenProjects(true);
              setTimeout(() => {
                setOpenProjects(false);
                setActivePr(true);
              }, 0);
            }
          }}

          onMouseEnter={()=>{
            activePr && HoverMsg("Close Project")
            !activePr && HoverMsg("See Project")
          }}
          onMouseLeave={()=>{
            document.querySelectorAll(".hover-text").forEach((item)=>{item.remove()})
          }}

          >
          <PrMainImg prObject = {prObject}/>
        <div className={`pr-inner-info ${selectedView}`}>
          <div className={`pr-side-info ${selectedView}`}>
            <PrTechs prObject={prObject}/>
            <PrDescription prObject={prObject}/>
            <PrImages prObject={prObject} startFrom={1} />
          </div>
        </div>
        </div>
        <div className={`pr-main-info ${selectedView}`}>
            <PrNameDate prObject={prObject}/>
            <PrLinks prObject={prObject} activePr={activePr}/>
        </div>
      </article>
    </>
  );
};

export default ProjectEntryGrid;