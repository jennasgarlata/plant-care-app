import {react, useState, useEffect} from 'react'; 
import PlantTileDeck from './PlantTileDeck/PlantTileDeck';
import '../../CSS/UserHomeScreen.css';
import SideBarButton from './UserSideBar/SideBarButton/SideBarButton';
import LocationsTileDeck from './LocationsTileDeck/LocationsTileDeck';
import ExplorePlants from './ExplorePlantsDeck/ExplorePlantsDeck';
import axios from 'axios';
import * as Constants from '../../components/Utils/Constants';


function UserHomeScreen({userPlantData, setUserPlantData, allPlants, nameText, 
                         userId, getUserPlantData, userLocations, setUserLocations }) {

    const [selectedScreen, setSelectedScreen] = useState(Constants.PLANTS_PAGE);

    const renderUserSideBar = () => {
      let sideBarButtons = [];
      {Constants.SIDE_BAR_OPTIONS.map((pageName, index)=> sideBarButtons.push(<SideBarButton key={index} sideBarName={pageName} setSelectedScreen={setSelectedScreen} setUserLocations={setUserLocations} userId={userId}/>))}
      return sideBarButtons;
    }

const renderUserScreen = () => {
  switch (selectedScreen){
    case Constants.PLANTS_PAGE:
      return <PlantTileDeck 
                userPlantData={userPlantData}
                setUserPlantData={setUserPlantData}
                allPlants={allPlants}
                userId={userId}
                getUserPlantData={getUserPlantData}
                setUserLocations={setUserLocations}/>
      case Constants.LOCATIONS_PAGE:
      return <LocationsTileDeck userId={userId} 
                                userLocations={userLocations}/>
      case Constants.EXPLORE_PLANTS_PAGE:
      return <ExplorePlants allPlants={allPlants} />
      default:
        return <p> Coming Soon...</p>
  }
}

  return (
    <div className="user-home-screen-container">
      <h1 className='user-home-screen-welcome-title'>Welcome Back, {nameText}</h1>
      <div className='user-home-screen-content'>
        <div className="user-sidebar">
          {renderUserSideBar()}
        </div>
        <div className='user-main-content'>
          <h1 className='user-home-screen-title'>{selectedScreen}</h1>
          {renderUserScreen()}
        </div>
      </div>
    </div>
  );
}

export default UserHomeScreen;
