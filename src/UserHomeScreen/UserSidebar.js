import {react, useState, useEffect} from 'react'; 
import '../CSS/UserHomeScreen.css';

function UserSidebar(props) {
  return (
    <div className="user-sidebar">
     <button className="sidebar-tile" onClick={()=> {props.setSelectedScreen('myplants')}}> My Plants</button>
     <button className="sidebar-tile" onClick={()=> {props.setSelectedScreen('mylocations')}}> My Locations</button>
     <button className="sidebar-tile" onClick={()=> {props.setSelectedScreen('exploreplants')}}> Explore New Plants</button>
    </div>
  );
}

export default UserSidebar;
