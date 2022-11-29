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
  const [allPlants, setallPlants] = useState();

    useEffect(() => {
      getAllPlantsData();
      getUserPlantData();
    }, [userId]);
  
    const getAllPlantsData = () => {
      const api = `https://83ctihxxmi.execute-api.us-east-1.amazonaws.com/Prod/GetAllPlantTypes`;
      axios.get(api)
        .then(res => {
          console.log(res)
          setallPlants(res.data);
        }
        )
      };

      const getUserPlantData = () => {
        console.log(`fetch user plant ${userId}`)
        const api = `https://83ctihxxmi.execute-api.us-east-1.amazonaws.com/Prod/GetPlantsForUserId?userid=${userId}`;
        axios.get(api)
          .then(res => {
            console.log("userplant...")

            console.log(res.data)
            setUserPlantData(res.data);
          }
          )
        };

 
  const renderApplication = selectedPage === "" ? <Home /> : <UserHomeScreen userPlantData={userPlantData} setUserPlantData={setUserPlantData} allPlants={allPlants} userId={userId} nameText={nameText} getUserPlantData={getUserPlantData}  />
  
  
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
