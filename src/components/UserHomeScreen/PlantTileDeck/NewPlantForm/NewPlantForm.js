import {react, useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from 'axios';
import * as Constants from '../../../Utils/Constants';

export default function NewPlantForm({showNewPlantForm, setShowNewPlantForm, setUserPlantData, allPlants, userId}) {

  const [plantName, setPlantName] = useState()
  const [plantType, setplantType] = useState();
  const [lastWateredDate, setLastWateredDate] = useState();
  const [locationOfPlant, setlocationOfPlant] = useState();
  const [directionOfWindow, setdirectionOfWindow] = useState();

  const getUserPlantData = () => {
    console.log(`fetch user plant ${userId}`)
    const api = `https://83ctihxxmi.execute-api.us-east-1.amazonaws.com/Prod/GetPlantsForUserId?userid=${userId}`;
    axios.get(api)
      .then(res => {
        console.log("userplant...")

        console.log(res.data)
        setUserPlantData(res.data);
      }
      )
    };

  const handleSubmit = () => {
    const addPlantAPI = `https://83ctihxxmi.execute-api.us-east-1.amazonaws.com/Prod/AddUserPlant?
                          lastWatered=${lastWateredDate}
                          &plantDataId=${plantType}
                          &plantLocation=${locationOfPlant}
                          &plantName=${plantName}
                          &userid=${userId}
                          &windowLocation=${directionOfWindow}`
            console.log(addPlantAPI)
            axios.get(addPlantAPI)
            .then(res => {
                console.log(res.data)
            }
            )
           handleClose()
           getUserPlantData()
  }

  const handleChange = (e, fieldType) => {
    switch (fieldType){
        case Constants.PLANT_NAME_FIELD:
            setPlantName(e.target.value);
            break;
        case Constants.PLANT_TYPE_FIELD:
            setplantType(e.target.value);
            break;
        case Constants.PLANT_LOCATION_FIELD:
            setlocationOfPlant(e.target.value);
            break;
        case Constants.PLANT_WINDOW_DIRECTION_FIELD:
            setdirectionOfWindow(e.target.value);
            break;
        case Constants.LAST_WATERED:
        setLastWateredDate(e.target.value);
        break;
        default:
            break;
    }
  };
  const handleClose = () => {
    setShowNewPlantForm(false);
  };

  return (
    <div>
      <Dialog open={showNewPlantForm} onClose={handleClose}>
        <DialogTitle>New Plant</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Tell us about your new plant!
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label={Constants.PLANT_NAME_FIELD}
            type="text"
            value ={plantName}
            onChange={(e)=>{handleChange(e, Constants.PLANT_NAME_FIELD)}}
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label={Constants.LAST_WATERED}
            type="text"
            value ={lastWateredDate}
            onChange={(e)=>{handleChange(e, Constants.LAST_WATERED)}}
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label={Constants.PLANT_LOCATION_FIELD}
            type="text"
            value ={locationOfPlant}
            onChange={(e)=>{handleChange(e, Constants.PLANT_LOCATION_FIELD)}}
            fullWidth
            variant="standard"
          />
          <Box sx={{ minWidth: 120,  margin:"2%"}}>
            <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Type of Plant</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={plantType}
                onChange={(e)=>{handleChange(e,Constants.PLANT_TYPE_FIELD)}}
                label={Constants.PLANT_TYPE_FIELD}>
                  {allPlants?.map((plant)=><MenuItem value={plant["plant-data-id"]}>{plant["generic-name"]}</MenuItem>)}
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ minWidth: 120, margin:"2%"}}>
            <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Direction of Window</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={directionOfWindow}
                onChange={(e)=>{handleChange(e,Constants.PLANT_WINDOW_DIRECTION_FIELD)}}
                label={Constants.PLANT_WINDOW_DIRECTION_FIELD}>
                {Constants.DIRECTION_OF_WINDOW.map((direction)=><MenuItem value={direction}>{direction}</MenuItem>)}
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Save Plant</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}