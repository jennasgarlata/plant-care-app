import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import locationImage from '../../Assets/homecard-locationimage.jpg';
import plantImage from '../../Assets/homecard-plantimage.jpg';
import careImage from '../../Assets/homecard-careimage.jpg';



export default function HomePageCard({cardType}) {

  let image;
  let title; 
  let subtext;



switch (cardType){
  case "location":
    image = locationImage;
    title = "Share your location";
    subtext = "Plantcast uses local weather patterns to tailor your plant care needs to your current environment"
  break;
  case "plants":
    image = plantImage;
    title = "Add your plants";
    subtext = "Tell us about your plants - what kind of plant? Where is it located? What do you call it?"
  break;
  case "care":
    image = careImage;
    title = "Care for your plants";
    subtext = "We will tell you exactly how to care for your plants to keep them happy and healthy"
  break;
}

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {subtext}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small">Share</Button> */}
        {/* <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
  );
}
