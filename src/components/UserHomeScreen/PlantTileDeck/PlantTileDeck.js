import {react, useState, useEffect} from 'react'; 
import PlantTile from './PlantTile/PlantTile';
import '../../../CSS/PlantTile.css';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

import NewPlantForm from './NewPlantForm/NewPlantForm';

function PlantTileDeck({userPlantData, setUserPlantData, allPlants, userId, getUserPlantData}) {

    const [showNewPlantForm, setShowNewPlantForm] = useState(false);

    const renderPlantTiles = userPlantData?.map(plant=> <PlantTile plant={plant}/>)
    const renderNewPlantForm = showNewPlantForm === true? 
          <NewPlantForm showNewPlantForm={showNewPlantForm} setShowNewPlantForm={setShowNewPlantForm} userPlantData={userPlantData} setUserPlantData={setUserPlantData} allPlants={allPlants} userId={userId} getUserPlantData={getUserPlantData}/> 
          : null;


  return (
    <div >
      <Button variant="contained" endIcon={<AddIcon />} onClick={(e)=>{setShowNewPlantForm(true)}}>Add Plant</Button>
      <div className='plant-tile-deck'>
        {renderNewPlantForm}
        {renderPlantTiles}
      </div>
    </div> 
  );
}

export default PlantTileDeck;
