import {react, useState, useEffect} from 'react'; 
import axios from 'axios';
import './CSS/App.css';
import  Home from'./components/Home/Home';
import  UserHomeScreen from'./components/UserHomeScreen/UserHomeScreen';
import AppNavBar from './components/AppNavBar/AppNavBar';
import { ContentPasteSearchOutlined } from '@mui/icons-material';

function App() {

  const [userId, setUserId] = useState("")
  const [nameText, setNameText] = useState("");
  const [userPlantData, setUserPlantData] = useState({});
  const [selectedPage, setSelectedPage] = useState("");
  const [allPlants, setallPlants] = useState([]);
  const [userLocations, setUserLocations] = useState([]); 

    useEffect(() => {
      if (allPlants.length ===0){
        getAllPlantsData();
      }
      getUserPlantData();
      getUserLocations();
      document.title = 'PlantCast';
    }, [userId]);
  
      const getAllPlantsData = () => {
        const api = `https://83ctihxxmi.execute-api.us-east-1.amazonaws.com/Prod/GetAllPlantTypes`;
        axios.get(api)
          .then(res => {
            var sortData = res.data.sort((a, b) => a["generic-name"].localeCompare(b["generic-name"]));
            setallPlants(sortData);}
          )
      };

      const getUserLocations = () => {
        const api = `https://83ctihxxmi.execute-api.us-east-1.amazonaws.com/Prod/GetPlantLocationsForUserId?userid=${userId}`;
        axios.get(api)
          .then(res => {
            setUserLocations(res.data);}
          )
        };
  
      const getUserPlantData = () => {
        const api = `https://83ctihxxmi.execute-api.us-east-1.amazonaws.com/Prod/GetPlantsForUserId?userid=${userId}`;
        axios.get(api)
          .then(res => {
            setUserPlantData(res.data);}
          )
        };

 
  const renderApplication = selectedPage === "" ? <Home /> :
   <UserHomeScreen  userPlantData={userPlantData}
                    setUserPlantData={setUserPlantData}
                    allPlants={allPlants}
                    userId={userId}
                    nameText={nameText}
                    getUserPlantData={getUserPlantData}
                    userLocations={userLocations}
                    setUserLocations={setUserLocations} />
  
  
  return (
    <div className="App">
      <AppNavBar 
          setSelectedPage={setSelectedPage}
          setUserId={setUserId}
          setNameText={setNameText}/>
      {renderApplication}
    </div>
  );
}

export default App;
