import * as React from 'react';
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


export default function FormDialog({showNewPlantForm, setShowNewPlantForm}) {
  const [open, setOpen] = React.useState(showNewPlantForm);

  const handleClose = () => {
    setShowNewPlantForm(false);
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New Plant</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Tell us about your new plant!
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
          />
          <Box sx={{ minWidth: 120,  margin:"2%"}}>
            <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Type of Plant</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
              //   value={age}
              //   onChange={handleChange}
                label="Type of Plant">
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ minWidth: 120, margin:"2%"}}>
            <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Location</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
              //   value={age}
              //   onChange={handleChange}
                label="Location">
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ minWidth: 120, margin:"2%"}}>
            <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Direction of Window</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
              //   value={age}
              //   onChange={handleChange}
                label="Direction of Window">
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Save Plant</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}