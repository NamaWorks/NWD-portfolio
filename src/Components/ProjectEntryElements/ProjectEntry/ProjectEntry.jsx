import { NavigationContext } from "../../../contexts/contexts";
import { handlePrEntrySize } from "../../../utils/functions/handlePrEntrySize";
import { handleProjectsId } from "../../../utils/functions/handleProjectsId";
import PrDescription from "../PrEntryData/PrDescription";
import PrImages from "../PrEntryData/PrImages";
import PrLinks from "../PrEntryData/PrLinks";
import PrNameDate from "../PrEntryData/PrNameDate";
import PrTechs from "../PrEntryData/PrTechs";
import "./ProjectEntry.css";
import React, { useContext, useEffect, useState } from "react";

const ProjectEntry = ({ prObject }) => {
  const [activePr, setActivePr] = useState(false);
  const [prHeight, setPrHeight] = useState(40);

  const { selectedView, openProjects, setOpenProjects } = useContext(NavigationContext);

  useEffect(() => {
    selectedView == "list" &&
      setPrHeight(
        handlePrEntrySize(handleProjectsId(prObject.title), activePr, selectedView)
      );
      openProjects && setActivePr(false)
    });

  return (
    <>
      <article
        className={`pr-article ${selectedView}`}
        id={handleProjectsId(prObject.title)}
        style={{ height: prHeight }}
      >
        <div
          className={`pr-main-info ${selectedView}`}
          onClick={() => {
            if(activePr){
              if(openProjects){
                setActivePr(false);
                setOpenProjects(false);
              } else if (!openProjects){
                setOpenProjects(true);
              }
            } else if (!activePr){
              setOpenProjects(true);
              setTimeout(() => {
                setOpenProjects(false);
                setActivePr(true);
              }, 0);
            }
          }}
        >
          <PrNameDate prObject={prObject} />

          <PrLinks prObject={prObject} />
        </div>

        <div className={`pr-inner-info ${selectedView}`}>
          <PrImages prObject={prObject} startFrom={0} />
          <div className={`pr-side-info ${selectedView}`}>
            <PrTechs prObject={prObject} />
            <PrDescription prObject={prObject} />
          </div>
        </div>
      </article>
    </>
  );
};

export default ProjectEntry;
