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
// import tempImage from '../../../../Assets/homecard-plantimage.jpg'
import FiddleImage from '../../../../Assets/fiddleFig.jpg'
import MoneyImage from '../../../../Assets/moneyPlant.jpg'
import MonsteraImage from '../../../../Assets/monstera.jpg'
import AloeImage from '../../../../Assets/aloeVera.jpg'
import UmbrellaImage from '../../../../Assets/umbrellaPlant.jpg'
import SpiderImage from '../../../../Assets/spiderPlant.jpg'
import MotherImage from '../../../../Assets/motherTongue.jpg'
import MarbleImage from '../../../../Assets/marbleQueenPothos.jpg'
import NeonImage from '../../../../Assets/neonPothos.jpg'
import GoldenImage from '../../../../Assets/goldenPothos.jpg'
import SatinImage from '../../../../Assets/satinPothos.jpg'
import ArecaPalm from '../../../../Assets/arecaPalm.jpeg'
import CatPalm from '../../../../Assets/catPalm.jpeg'
import FuturaRobusta from '../../../../Assets/futuraRobusta.jpeg'
import Cylindrica from '../../../../Assets/Cylindrica.jpeg'
import BlackGold from '../../../../Assets/blackGold.jpeg'
import BambooPalm from '../../../../Assets/bambooPalm.jpeg'
import mysteryIcon from '../../../../Assets/mysteryIcon.jpeg'
import * as Constants from '../../../Utils/Constants'
import '../../../../CSS/Tile.css';
import { cyan } from '@mui/material/colors';

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

export default function ExplorePlantTile({plant}) {
  const [expanded, setExpanded] = useState(false);

  //TEMP variables 
  let altText ="temp text";
  let image = mysteryIcon;
  let plantLocation = "kitchen";
  let upcomingCare = "water on 11/2/2022";


  let cardMediaMarkup;
  let cardAvatar;

  switch (plant["generic-name"].toUpperCase().trim()){
    case Constants.FIDDLE_FIG: 
    cardMediaMarkup = <CardMedia
                          component="img"
                          height="194"
                          image={FiddleImage}
                          alt={plant["generic-name"]}/>
    cardAvatar= <Avatar alt={plant["generic-name"]} src={FiddleImage} />
    break;
    case Constants.MONSTERA: 
    cardMediaMarkup = <CardMedia
                          component="img"
                          height="194"
                          image={MonsteraImage}
                          alt={plant["generic-name"]}/>
    cardAvatar= <Avatar alt={plant["generic-name"]} src={MonsteraImage} />
    break;
    case Constants.MONEY_PLANT: 
    cardMediaMarkup = <CardMedia
                          component="img"
                          height="194"
                          image={MoneyImage}
                          alt={plant["generic-name"]}/>
    cardAvatar= <Avatar alt={plant["generic-name"]} src={MoneyImage} />
    break;
    case Constants.ALOE_VERA: 
    cardMediaMarkup = <CardMedia
                          component="img"
                          height="194"
                          image={AloeImage}
                          alt={plant["generic-name"]}/>
    cardAvatar= <Avatar alt={plant["generic-name"]} src={AloeImage} />
    break;
    case Constants.UMBRELLA_PLANT: 
    cardMediaMarkup = <CardMedia
                          component="img"
                          height="194"
                          image={UmbrellaImage}
                          alt={plant["generic-name"]}/>
    cardAvatar= <Avatar alt={plant["generic-name"]} src={UmbrellaImage} />
    break;
    case Constants.SPIDER_PLANT: 
    cardMediaMarkup = <CardMedia
                          component="img"
                          height="194"
                          image={SpiderImage}
                          alt={plant["generic-name"]}/>
    cardAvatar= <Avatar alt={plant["generic-name"]} src={SpiderImage} />
    break;
    case Constants.GOLDEN_POTHOS: 
    cardMediaMarkup = <CardMedia
                          component="img"
                          height="194"
                          image={GoldenImage}
                          alt={plant["generic-name"]}/>
    cardAvatar= <Avatar alt={plant["generic-name"]} src={GoldenImage} />
    break;
    case Constants.MARBLE_QUEEN_POTHOS: 
    cardMediaMarkup = <CardMedia
                          component="img"
                          height="194"
                          image={MarbleImage}
                          alt={plant["generic-name"]}/>
    cardAvatar= <Avatar alt={plant["generic-name"]} src={MarbleImage} />
    break;
    case Constants.NEON_POTHOS: 
    cardMediaMarkup = <CardMedia
                          component="img"
                          height="194"
                          image={NeonImage}
                          alt={plant["generic-name"]}/>
    cardAvatar= <Avatar alt={plant["generic-name"]} src={NeonImage} />
    break;
    case Constants.SATIN_POTHOS : 
    cardMediaMarkup = <CardMedia
                          component="img"
                          height="194"
                          image={SatinImage}
                          alt={plant["generic-name"]}/>
    cardAvatar= <Avatar alt={plant["generic-name"]} src={SatinImage} />
    break;
    case Constants.MOTHERS_TONGUE : 
    cardMediaMarkup = <CardMedia
                          component="img"
                          height="194"
                          image={MotherImage}
                          alt={plant["generic-name"]}/>
    cardAvatar= <Avatar alt={plant["generic-name"]} src={MotherImage} />
    break;
    case Constants.BAMBOO_PALM : 
    cardMediaMarkup = <CardMedia
                          component="img"
                          height="194"
                          image={BambooPalm}
                          alt={plant["generic-name"]}/>
    cardAvatar= <Avatar alt={plant["generic-name"]} src={BambooPalm} />
    break;
    case Constants.ARECA_PALM : 
    cardMediaMarkup = <CardMedia
                          component="img"
                          height="194"
                          image={ArecaPalm}
                          alt={plant["generic-name"]}/>
    cardAvatar= <Avatar alt={plant["generic-name"]} src={ArecaPalm} />
    break;
    case Constants.CYLINDRICA : 
    cardMediaMarkup = <CardMedia
                          component="img"
                          height="194"
                          image={Cylindrica}
                          alt={plant["generic-name"]}/>
    cardAvatar= <Avatar alt={plant["generic-name"]} src={Cylindrica} />
    break;
    case Constants.BLACK_GOLD : 
    cardMediaMarkup = <CardMedia
                          component="img"
                          height="194"
                          image={BlackGold}
                          alt={plant["generic-name"]}/>
    cardAvatar= <Avatar alt={plant["generic-name"]} src={BlackGold} />
    break;
    case Constants.CAT_PALM : 
    cardMediaMarkup = <CardMedia
                          component="img"
                          height="194"
                          image={CatPalm}
                          alt={plant["generic-name"]}/>
    cardAvatar= <Avatar alt={plant["generic-name"]} src={CatPalm} />
    break;
    case Constants.FUTURA_ROBUSTA : 
    cardMediaMarkup = <CardMedia
                          component="img"
                          height="194"
                          image={FuturaRobusta}
                          alt={plant["generic-name"]}/>
    cardAvatar= <Avatar alt={plant["generic-name"]} src={FuturaRobusta} />
    break;
    default:
      cardMediaMarkup = <CardMedia
              component="img"
              height="194"
              image={mysteryIcon}
              alt={plant["generic-name"]}/>
    cardAvatar= <Avatar alt={plant["generic-name"]} src={mysteryIcon} />
    break;
  }

  let cardMedia =  <div>
                    <CardHeader
                        avatar={cardAvatar}
                        title={plant["generic-name"]} />
                    {cardMediaMarkup}
                  </div>;


  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className='plant-tile'>
      <Card sx={{ maxWidth: 345 }}>
        {cardMedia}
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Expand to learn more about this plant
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
            <Typography sx={{fontSize:"20px"}} paragraph>Generic Name:</Typography>
            <Typography paragraph> {plant["generic-name"]} </Typography>
            <Typography sx={{fontSize:"20px"}} paragraph>Scientific Name:</Typography>
            <Typography paragraph> {plant["scientific-name"]} </Typography>
            <Typography sx={{fontSize:"20px"}} paragraph>Type of Plant:</Typography>
            <Typography paragraph>{plant.type} </Typography>
            <Typography sx={{fontSize:"20px"}} paragraph>Direction of Window:</Typography>
            <Typography paragraph> {plant["window-facing"]} </Typography>
            <Typography sx={{fontSize:"20px"}}  paragraph>Water Needs:</Typography>
            <Typography paragraph>{plant.water} </Typography>
            <Typography sx={{fontSize:"20px"}} paragraph>Sun Needs:</Typography>
            <Typography paragraph> {plant.sun} </Typography>
            <Typography sx={{fontSize:"20px"}} paragraph>Soil Needs:</Typography>
            <Typography paragraph> {plant.soil} </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}
