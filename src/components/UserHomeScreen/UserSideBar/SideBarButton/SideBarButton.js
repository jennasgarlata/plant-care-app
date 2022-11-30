import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import * as Constants from '../../../Utils/Constants';
import axios from 'axios';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function SideBarButton({sideBarName, setSelectedScreen, setUserLocations, userId}) {

  const getUserLocations = () => {
    const api = `https://83ctihxxmi.execute-api.us-east-1.amazonaws.com/Prod/GetPlantLocationsForUserId?userid=${userId}`;
    axios.get(api)
      .then(res => {
        setUserLocations(res.data);}
      )
    };
    
  const handleSelectedScreen = (sideBarName) => {
    if(sideBarName === Constants.LOCATIONS_PAGE){
      getUserLocations()
    }
    setSelectedScreen(sideBarName)

  }

  return (
    <div className='user-sidebar-button' onClick={()=>handleSelectedScreen(sideBarName)}>
    <Card sx={{ minWidth: 350 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {sideBarName}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  );
}
