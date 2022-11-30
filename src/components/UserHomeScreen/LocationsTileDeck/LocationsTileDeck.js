import React, {useState, useEffect} from "react";
import LocationTile from "./LocationTile/LocationTile";
import '../../../CSS/Tile.css'


const LocationsTileDeck= ({userId, userLocations}) => {  

    const renderLocationTiles = () => {
      const locationTiles = []
      userLocations?.map(location=> locationTiles.push(<LocationTile location={location}/> ))
      return locationTiles
    } 
    const locationsMessage = userLocations.length === 0? "Please add plants to see locations here" : null

  return (
    <div>
        {locationsMessage}
        <div className='tile-deck'>
            {renderLocationTiles()}
        </div>
    </div> 
  )
};

export default LocationsTileDeck
;
