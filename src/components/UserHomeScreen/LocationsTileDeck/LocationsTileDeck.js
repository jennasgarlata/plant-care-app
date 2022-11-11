import React, {useState, useEffect} from "react";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import * as Constants from '../../../components/Utils/Constants';
import NewLocationForm from "./NewLocationForm/NewLocationForm";
import LocationTile from "./LocationTile/LocationTile";


const LocationsTileDeck= (props) => {

    const [showNewPlantForm, setShowNewPlantForm] = useState(false);

    const renderPlantTiles = Constants.TEST_LOCATIONS?.map(location=> <LocationTile location={location}/> )
    const renderNewPlantForm = showNewPlantForm === true? 
          <NewLocationForm showNewPlantForm={showNewPlantForm} setShowNewPlantForm={setShowNewPlantForm}/> 
          : null;


  return (
    <div className='plant-tile-deck'>
    <Button variant="contained" endIcon={<AddIcon />} onClick={(e)=>{setShowNewPlantForm(true)}}>Add Location</Button>
    {renderNewPlantForm}
    {renderPlantTiles}
    </div> 
  )
};

export default LocationsTileDeck
;
