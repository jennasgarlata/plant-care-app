import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import kitchenIcon from '../../../../Assets/kitchen.jpg';
import livingRoomIcon from '../../../../Assets/livingRoom.jpg';
import diningRoomIcon from '../../../../Assets/diningRoom.jpg';
import guestRoomIcon from '../../../../Assets/guestRoom.jpg';
import bathroomIcon from '../../../../Assets/bathroom.jpg';
import bedroomIcon from '../../../../Assets/bedroom.jpg';
import roomIcon from '../../../../Assets/room.jpg';
import * as Constants from '../../../Utils/Constants'
// import kitchenImage from '../../../../Assets/Kitchen.jpg'
import '../../../../CSS/Tile.css';

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


  let cardAvatar;
  let cardMediaMarkup;

  switch (location.toUpperCase().trim()){
      case Constants.KITCHEN: 
        cardMediaMarkup = <CardMedia
                  component="img"
                  height="194"
                  image={kitchenIcon}
                  alt={location}/>
        cardAvatar= <Avatar alt={location} src={kitchenIcon} />
        break;
      case Constants.BATHROOM: 
        cardMediaMarkup = <CardMedia
                component="img"
                height="194"
                image={bathroomIcon}
                alt={location}/>
        cardAvatar= <Avatar alt={location} src={bathroomIcon} />
        break;
      case Constants.BEDROOM: 
        cardMediaMarkup = <CardMedia
                component="img"
                height="194"
                image={guestRoomIcon}
                alt={location}/>
        cardAvatar= <Avatar alt={location} src={bedroomIcon} />
        break;
      case Constants.GUEST_ROOM: 
        cardMediaMarkup = <CardMedia
                component="img"
                height="194"
                image={guestRoomIcon}
                alt={location}/>
        cardAvatar= <Avatar alt={location} src={guestRoomIcon} />
        break;
      case Constants.DINING_ROOM: 
        cardMediaMarkup = <CardMedia
                component="img"
                height="194"
                image={diningRoomIcon}
                alt={location}/>
        cardAvatar= <Avatar alt={location} src={diningRoomIcon} />
        break;
      case Constants.LIVING_ROOM: 
        cardMediaMarkup = <CardMedia
                component="img"
                height="194"
                image={livingRoomIcon}
                alt={location}/>
        cardAvatar= <Avatar alt={location} src={livingRoomIcon} />
        break;
      default:
        cardMediaMarkup = <CardMedia
                component="img"
                height="194"
                image={roomIcon}
                alt={location}/>
      cardAvatar= <Avatar alt={location} src={roomIcon} />
      break;
  }


  let card = <Card sx={{ minWidth: 280, maxWidth: 345 }}>
                <CardHeader
                  avatar={cardAvatar}
                  title={location} />
                {cardMediaMarkup}
                <CardContent>
                </CardContent>
              </Card>

  return (
    <div className='plant-tile'>
      {card}
    </div>
  );
}
