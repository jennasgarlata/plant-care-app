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
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import ScienceIcon from '@mui/icons-material/Biotech';
import GrassIcon from '@mui/icons-material/Grass';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import FontDownloadOutlinedIcon from '@mui/icons-material/FontDownloadOutlined';
import ShowerOutlinedIcon from '@mui/icons-material/ShowerOutlined';
import MergeTypeOutlinedIcon from '@mui/icons-material/MergeTypeOutlined';
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
import axios from 'axios';
import * as Constants from'../../../Utils/Constants'
import '../../../../CSS/Tile.css';
import { UmbrellaOutlined } from '@mui/icons-material';

// can we add different plant pics
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

export default function PlantTile({plant, userId, setUserPlantData, setUserLocations}) {
  const [expanded, setExpanded] = useState(false);

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
              image={tempImage}
              alt={plant["generic-name"]}/>
    cardAvatar= <Avatar alt={plant["generic-name"]} src={tempImage} />
    break;
  }

  let cardMedia =  <div>
                    <CardHeader
                        avatar={cardAvatar}
                        title={plant["plant-name"]} />
                    {cardMediaMarkup}
                  </div>;
  
  const today = new Date();
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; // Months start at 0!
  let dd = today.getDate();
  if (dd < 10) dd = '0' + dd;
  if (mm < 10) mm = '0' + mm;
  const formattedToday = dd + '/' + mm + '/' + yyyy;
  const wateringToday = formattedToday === plant["next-watering"]? true : false
  const colorFont = wateringToday? "orange" : "text.secondary";

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const getUserPlantData = () => {
    console.log(`fetch user plant ${userId}`)
    const api = `https://83ctihxxmi.execute-api.us-east-1.amazonaws.com/Prod/GetPlantsForUserId?userid=${userId}`;
    axios.get(api)
      .then(res => {
        setUserPlantData(res.data);
      }
      )
    };

    const getUserLocations = () => {
      const api = `https://83ctihxxmi.execute-api.us-east-1.amazonaws.com/Prod/GetPlantLocationsForUserId?userid=${userId}`;
      axios.get(api)
        .then(res => {
          setUserLocations(res.data);}
        )
      };

  const deletePlant = () => {
    const api = `https://83ctihxxmi.execute-api.us-east-1.amazonaws.com/Prod/DeleteUserPlant?userPlantId=${plant["user-plant-id"]}`;
    axios.get(api)
      .then(res => {
        getUserPlantData()
        getUserLocations()
      }
      )
    };

  const markPlantWatered = () => {
    const api = `https://83ctihxxmi.execute-api.us-east-1.amazonaws.com/Prod/WaterUserPlant?userPlantId=${plant["user-plant-id"]}`;
    axios.get(api)
      .then(res => {
        getUserPlantData();
      }
      )
    };

  


  return (
    <div className='plant-tile'>
      <Card sx={{ maxWidth: 345 }}>
        {cardMedia}
        <CardContent>
          <Typography variant="body2" color={colorFont}>
          Next Scheduled Watering: {plant["next-watering"]}
          </Typography>
          <Button onClick={(e)=>{markPlantWatered()}}> Water Plant</Button>
          <Button onClick={(e)=>{deletePlant()}}> Delete Plant</Button>
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

          <Stack direction="row" spacing={1}>
            <Chip icon={<FontDownloadOutlinedIcon />} label="Generic Name"  />
          </Stack>
          <Typography paragraph>  {plant["generic-name"]} </Typography>
          <Divider/>
          <br></br>

          <Stack direction="row" spacing={1}>
            <Chip icon={<ScienceIcon />} label="Scientific Name" />
          </Stack>
          <Typography paragraph> {plant["scientific-name"]} </Typography>
          <Divider/>
          <br></br>

          <Stack direction="row" spacing={1}>
            <Chip icon={<MergeTypeOutlinedIcon />} label="Type of Plant" />
          </Stack>
          <Typography paragraph>{plant.type} </Typography>
          <Divider/>
          <br></br>

          <Stack direction="row" spacing={1}>
            <Chip icon={<ExploreOutlinedIcon />} label="Direction of Window" />
          </Stack>
          <Typography paragraph> {plant["window-facing"]} </Typography>
          <Divider/>
          <br></br>

          <Stack direction="row" spacing={1}>
            <Chip icon={<ShowerOutlinedIcon />} label="Water Needs" />
          </Stack>
          <Typography paragraph>{plant.water} </Typography>
          <Divider/>
          <br></br>

          <Stack direction="row" spacing={1}>
            <Chip icon={<WbSunnyOutlinedIcon />} label="Sun Needs" />
          </Stack>
          <Typography paragraph> {plant.sun} </Typography>
          <Divider/>
          <br></br>

          <Stack direction="row" spacing={1}>
            <Chip icon={<GrassIcon />} label="Soil Needs" />
          </Stack>
          <Typography paragraph> {plant.soil} </Typography>

          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}
