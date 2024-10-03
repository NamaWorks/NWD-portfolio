import { NavigationContext } from "../../../contexts/contexts";
import { handlePrEntrySize } from "../../../utils/functions/handlePrEntrySize";
import { handleProjectsId } from "../../../utils/functions/handleProjectsId";
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

  const {selectedView } = useContext(NavigationContext)

  useEffect(()=>{
    selectedView == "grid" &&
      setPrWidth(
        handlePrEntrySize(handleProjectsId(prObject.title), activePr, selectedView)
      );
  })


  return (
    <>
      <article 
        className={`pr-article ${selectedView}`}
        id={handleProjectsId(prObject.title)}
        style={{width: prWidth}}
      >
        <div className={`pr-top-part ${selectedView}`} onClick={()=>{setActivePr(!activePr)}}>
          <PrMainImg prObject = {prObject}/>
        <div className={`pr-inner-info ${selectedView}`}>
          <div className={`pr-side-info ${selectedView}`}>
            <PrTechs prObject={prObject}/>
            <PrDescription prObject={prObject}/>
            <PrImages prObject={prObject} startFrom={1} />
          </div>
        </div>
        </div>
        <div className={`pr-main-info ${selectedView}`}
          onClick={()=>{
            setActivePr(!activePr)
          }}
        >
<PrNameDate prObject={prObject}/>
<PrLinks prObject={prObject}/>

        </div>
      </article>
    </>
  );
};

export default ProjectEntryGrid;