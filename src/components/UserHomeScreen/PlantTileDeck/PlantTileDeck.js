import {react, useState, useEffect} from 'react'; 
import PlantTile from './PlantTile/PlantTile';
import '../../../CSS/PlantTile.css';

function PlantTileDeck({userPlantData}) {

    const renderPlantTiles = userPlantData?.map(plant=> <PlantTile plant={plant}/>)


  return (
    <div className='plant-tile-deck'>
    {renderPlantTiles}
    </div> 
  );
}

export default PlantTileDeck;
