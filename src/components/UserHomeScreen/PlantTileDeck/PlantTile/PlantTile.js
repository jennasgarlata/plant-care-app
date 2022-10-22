import * as React from 'react';
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
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import tempImage from '../../../../Assets/homecard-plantimage.jpg'
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

export default function PlantTile({plantData}) {
  const [expanded, setExpanded] = React.useState(false);

  //TEMP variables 

  let altText ="temp text";
  let image = tempImage;
  let plantName = "test";
  let plantLocation = "kitchen";
  let upcomingCare = "water on 11/2/2022";
  let waterDetails = 'moderate water';
  let sunDetails = 'moderate sun';
  let soilDetails = 'mix soil';

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className='plant-tile'>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
              <Avatar alt={altText} src={image} />
              
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={plantName}
          subheader={plantLocation}
        />
        <CardMedia
          component="img"
          height="194"
          image={image}
          alt={altText}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
          {upcomingCare}
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
            <Typography paragraph>Water Needs:</Typography>
            <Typography paragraph>{waterDetails} </Typography>
            <Typography paragraph>Sun Needs:</Typography>
            <Typography paragraph> {sunDetails} </Typography>
            <Typography paragraph>Soil Needs:</Typography>
            <Typography paragraph> {soilDetails} </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}
