import {react, useState, useEffect} from 'react'; 
import PlantTileDeck from './PlantTileDeck/PlantTileDeck';
import UserSidebar from './UserSideBar/UserSidebar';
import '../../CSS/UserHomeScreen.css';
import SideBarButton from './UserSideBar/SideBarButton/SideBarButton';

function UserHomeScreen({userPlantData}) {

    const [selectedScreen, setSelectedScreen] = useState("My Plants");
    const sideBarOptions = ["My Plants", "My Locations", "Explore Learn More Plants"]

    const renderUserSideBar = () => {
      let sideBarButtons = [];
      {sideBarOptions.map((sideBarName, index)=> sideBarButtons.push(<SideBarButton sideBarName={sideBarName} setSelectedScreen={setSelectedScreen}/>))}
      return sideBarButtons;
    }

const renderUserScreen = () => {
  switch (selectedScreen.toLowerCase()){
    case 'my plants':
      return <PlantTileDeck userPlantData={userPlantData}/>
      default:
        return <p> developing</p>
  }
}

  return (
    <div className="user-home-screen-container">
      <h1 className='user-home-screen-welcome-title'>Welcome Back, TestUser</h1>
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
