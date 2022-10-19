import {react, useState, useEffect} from 'react'; 
import PlantTileDeck from './PlantTileDeck/PlantTileDeck';
import UserSidebar from './UserSidebar';
import '../CSS/UserHomeScreen.css';

function UserHomeScreen( props) {

    const[userPlants, setUserPlants] = useState(); 
    const [selectedScreen, setSelectedScreen] = useState("myplants");

const renderUserScreen = () => {

  switch (selectedScreen){
    case 'myplants':
      return <PlantTileDeck listOfPlants={props.userAccountInfo.plants}/>
      default:
        return <p> developing</p>
  }
}



  return (
    <div className="user-home-screen-container">
      <p>Welcome Back, {props.userAccountInfo.name}</p>
      <div className='user-home-screen-content'>
      <UserSidebar setSelectedScreen={setSelectedScreen}/>
      {renderUserScreen()}
      {/* <PlantTileDeck listOfPlants={props.userAccountInfo.plants}/> */}
      </div>
    </div>
  );
}

export default UserHomeScreen;
