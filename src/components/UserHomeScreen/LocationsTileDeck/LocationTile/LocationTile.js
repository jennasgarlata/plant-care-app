import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
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

export default function LocationTile({location}) {
  const [expanded, setExpanded] = React.useState(false);



  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className='plant-tile'>
      <Card sx={{ minWidth: 345 }}>
        <CardHeader
          avatar={
              <Avatar alt={location} src={tempImage} />
              
          }
          title={location}
        />
        <CardMedia
          component="img"
          height="194"
          image={tempImage}
          alt={location}
        />
        <CardContent>
        <Button> Delete Location </Button>
        </CardContent>
      </Card>
    </div>
  );
}
