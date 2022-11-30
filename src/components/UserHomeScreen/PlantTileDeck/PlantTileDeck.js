import {react, useState, useEffect} from 'react'; 
import PlantTile from './PlantTile/PlantTile';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import '../../../CSS/Tile.css';

import NewPlantForm from './NewPlantForm/NewPlantForm';

function PlantTileDeck({userPlantData, setUserPlantData, allPlants, userId, setUserLocations}) {

    const [showNewPlantForm, setShowNewPlantForm] = useState(false);

    const renderPlantTiles = userPlantData?.map(plant=> <PlantTile plant={plant} userId={userId} setUserPlantData={setUserPlantData}/>)
    const renderNewPlantForm = showNewPlantForm === true? 
          <NewPlantForm showNewPlantForm={showNewPlantForm} 
                        setShowNewPlantForm={setShowNewPlantForm} 
                        userPlantData={userPlantData} 
                        setUserPlantData={setUserPlantData} 
                        allPlants={allPlants} userId={userId}/> 
          : null;


  return (
    <div >
      <Button variant="contained" endIcon={<AddIcon />} onClick={(e)=>{setShowNewPlantForm(true)}}>Add Plant</Button>
      <div className='tile-deck'>
        {renderNewPlantForm}
        {renderPlantTiles}
      </div>
    </div> 
  );
}

export default PlantTileDeck;
