import {react, useState, useEffect} from 'react'; 
import axios from 'axios';
import './CSS/App.css';
import  Home from'./components/Home/Home';
import  UserHomeScreen from'./components/UserHomeScreen/UserHomeScreen';
import AppBar from './components/AppNavBar/AppNavBar';

function App() {

  const [userPlantData, setUserPlantData] = useState({});

  const [selectedPage, setSelectedPage] = useState("");

    useEffect(() => {
      getUserPlantData();
    }, []);
  
    const getUserPlantData = () => {
      const api = 'https://83ctihxxmi.execute-api.us-east-1.amazonaws.com/Prod/GetPlantsForUserId?userId=2';
      axios.get(api)
        .then(res => {
          console.log(res)
          setUserPlantData(res.data);
        }
        )
      };
  
  const showLoginButton = selectedPage === "" ? <button onClick={() => setSelectedPage("loggedIn")}>Log in</button> : null;
  const renderApplication = selectedPage === "" ? <Home /> : <UserHomeScreen userPlantData={userPlantData}/>
  
  
  return (
    <div className="App">
      <AppBar setSelectedPage={setSelectedPage}/>
      {renderApplication}
    </div>
  );
}

export default App;
