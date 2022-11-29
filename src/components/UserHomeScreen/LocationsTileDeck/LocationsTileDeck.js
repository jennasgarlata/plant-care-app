import React, {useState, useEffect} from "react";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import * as Constants from '../../../components/Utils/Constants';
import NewLocationForm from "./NewLocationForm/NewLocationForm";
import LocationTile from "./LocationTile/LocationTile";
import axios from 'axios';


const LocationsTileDeck= ({userId}) => {

    const [showNewPlantForm, setShowNewPlantForm] = useState(false);
    const [userLocations, setUserLocations] = useState([]);

    useEffect(() => {
      getUserLocations();
    }, [userId]);
  
    const getUserLocations = () => {
      const api = `https://83ctihxxmi.execute-api.us-east-1.amazonaws.com/Prod/GetPlantLocationsForUserId?userid=${userId}`;
      axios.get(api)
        .then(res => {
          console.log(`locations: ${res.data}`)
          setUserLocations(res.data);
        }
        )
      };


    const renderPlantTiles = userLocations?.map(location=> <LocationTile location={location}/> )
    const locationsMessage = userLocations.length ==0? "Please add plants to see locations here" : null
    // const renderNewPlantForm = showNewPlantForm === true? 
    //       <NewLocationForm showNewPlantForm={showNewPlantForm} setShowNewPlantForm={setShowNewPlantForm}/> 
    //       : null;


  return (
    <div>
        {/* <Button variant="contained" endIcon={<AddIcon />} onClick={(e)=>{setShowNewPlantForm(true)}}>Add Location</Button> */}
        {locationsMessage}
        <div className='plant-tile-deck'>
            {/* {renderNewPlantForm} */}
            {renderPlantTiles}
        </div>
    </div> 
  )
};

export default LocationsTileDeck
;
