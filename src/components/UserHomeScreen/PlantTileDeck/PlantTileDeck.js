import {react, useState, useEffect} from 'react'; 
import PlantTile from './PlantTile/PlantTile';
import '../../../CSS/PlantTile.css';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

import NewPlantForm from './NewPlantForm/NewPlantForm';

function PlantTileDeck({userPlantData}) {

    const [showNewPlantForm, setShowNewPlantForm] = useState(false);

    const renderPlantTiles = userPlantData?.map(plant=> <PlantTile plant={plant}/>)
    const renderNewPlantForm = showNewPlantForm === true? 
          <NewPlantForm showNewPlantForm={showNewPlantForm} setShowNewPlantForm={setShowNewPlantForm}/> 
          : null;


  return (
    <div className='plant-tile-deck'>
    <Button variant="contained" endIcon={<AddIcon />} onClick={(e)=>{setShowNewPlantForm(true)}}>Add Plant</Button>
    {renderNewPlantForm}
    {renderPlantTiles}
    </div> 
  );
}

export default PlantTileDeck;
