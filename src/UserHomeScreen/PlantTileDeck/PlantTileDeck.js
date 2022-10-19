import {react, useState, useEffect} from 'react'; 
import PlantTile from './PlantTile/PlantTile';
import '../../CSS/PlantTile.css';

function PlantTileDeck(props) {

    const listOfPlants = props.listOfPlants;
    const renderPlantTiles = listOfPlants.map(item => <PlantTile plantdata={item}/>)


  return (
    <div className='plant-tile-deck'>
    {renderPlantTiles}
    </div> 
  );
}

export default PlantTileDeck;
