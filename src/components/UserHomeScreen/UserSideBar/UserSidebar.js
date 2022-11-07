import {react, useState, useEffect} from 'react'; 
import '../../../CSS/UserHomeScreen.css';
import SideBarButton from './SideBarButton/SideBarButton';

function UserSidebar({setSelectedScreen}) {
  const sideBarOptions = ["My Plants", "My Locations", "Explore More Plants"]
  return (
    <div className="user-sidebar">
    {sideBarOptions.map((sideBarName, index)=> <SideBarButton sideBarName={sideBarName} setSelectedScreen={setSelectedScreen}/>)}
    </div>
  );
}

export default UserSidebar;
