import {react, useState} from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import tempImage from '../../../../Assets/homecard-plantimage.jpg';
import axios from 'axios';
import '../../../../CSS/PlantTile.css';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function PlantTile({plant}) {
  const [expanded, setExpanded] = useState(false);

  console.log (`plant ${plant}`)
  //TEMP variables 
  let altText ="temp text";
  let image = tempImage;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const deletePlant = () => {
    const plantID = 1;
    const api = `https://83ctihxxmi.execute-api.us-east-1.amazonaws.com/Prod/DeleteUserPlant?userPlantId=${plantID}`;
    axios.get(api)
      .then(res => {
        console.log(res)
      }
      )
    };

  const markPlantWatered = () => {
    const plantID = 1;
    const api = `https://83ctihxxmi.execute-api.us-east-1.amazonaws.com/Prod/WaterUserPlant?userPlantId=${plantID}`;
    axios.get(api)
      .then(res => {
        console.log(res)
      }
      )
    };

  return (
    <div className='plant-tile'>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
              <Avatar alt={altText} src={image} />
              
          }
          title={plant["plant-name"]}
          subheader={plant["plant-location"]}
        />
        <CardMedia
          component="img"
          height="194"
          image={image}
          alt={altText}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
          Next Scheduled Watering: {plant["next-watering"]}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more">
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography sx={{fontSize:"35px"}} paragraph>Generic Name:</Typography>
            <Typography paragraph> {plant["generic-name"]} </Typography>
            <Typography sx={{fontSize:"35px"}} paragraph>Scientific Name:</Typography>
            <Typography paragraph> {plant["scientific-name"]} </Typography>
            <Typography sx={{fontSize:"35px"}} paragraph>Type of Plant:</Typography>
            <Typography paragraph>{plant.type} </Typography>
            <Typography sx={{fontSize:"35px"}} paragraph>Direction of Window:</Typography>
            <Typography paragraph> {plant["window-facing"]} </Typography>
            <Typography sx={{fontSize:"35px"}}  paragraph>Water Needs:</Typography>
            <Typography paragraph>{plant.water} </Typography>
            <Typography sx={{fontSize:"35px"}} paragraph>Sun Needs:</Typography>
            <Typography paragraph> {plant.sun} </Typography>
            <Typography sx={{fontSize:"35px"}} paragraph>Soil Needs:</Typography>
            <Typography paragraph> {plant.soil} </Typography>
            <Button onClick={(e)=>{markPlantWatered()}}> Water Plant</Button>
            <Button onClick={(e)=>{deletePlant()}}> Delete Plant</Button>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}
