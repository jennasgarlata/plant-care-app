import React, {useState, useEffect} from "react";
import ExplorePlantTile from "./ExplorePlantTile/ExplorePlantTile";


const ExplorePlantsDeck= ({allPlants}) => {


    const renderAllPlants = allPlants?.map((plant,index)=> <ExplorePlantTile key={index} plant={plant}/> )


  return (
    <div>
        <div className='tile-deck'>
            {renderAllPlants}
        </div>
    </div> 
  )
};

export default ExplorePlantsDeck
;
