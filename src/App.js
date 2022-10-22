import {react, useState, useEffect} from 'react'; 
import './CSS/App.css';
import  Home from'./components/Home/Home';
import  UserHomeScreen from'./components/UserHomeScreen/UserHomeScreen';
import AppBar from './components/AppBar/AppBar';

function App() {

  const [userAccountInfo, setUserAccountInfo] = useState({
    name: 'testUser',
    plants: [1,2,3,4,5,6,7,8],
    loaction: "Chicago, IL"
  });
  
  const [selectedPage, setSelectedPage] = useState("");
  
  const showLoginButton = selectedPage === "" ? <button onClick={() => setSelectedPage("loggedIn")}>Log in</button> : null;
  const renderApplication = selectedPage === "" ? <Home /> : <UserHomeScreen userAccountInfo={userAccountInfo}/>
  
  
  return (
    <div className="App">
      <AppBar setSelectedPage={setSelectedPage}/>
      {renderApplication}
    </div>
  );
}

export default App;
