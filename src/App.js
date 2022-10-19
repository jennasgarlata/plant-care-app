import {react, useState, useEffect} from 'react'; 
import './CSS/App.css';
import  Home from'./Home/Home';
import NavMenu from './NavMenu/NavMenu';
import  UserHomeScreen from'./UserHomeScreen/UserHomeScreen';

function App() {

  const [userAccountInfo, setUserAccountInfo] = useState({
    name: 'testUser',
    plants: [1,2,3,4,5,6,7,8],
    loaction: "Chicago, IL"
  });
  
  const [selectedPage, setSelectedPage] = useState("");
  
  const showLoginButton = selectedPage === "" ? <button onClick={() => setSelectedPage("loggedIn")}>Log in</button> : null;
  const renderApplication = selectedPage === "" ? <Home/> : <UserHomeScreen userAccountInfo={userAccountInfo}/>
  
  
  return (
    <div className="App">
      <NavMenu/>
      {showLoginButton}
      {renderApplication}
      <header className="App-header">
      <HelloWorld subreddit="reactjs"/>
      </header>
    </div>
  );
}

export default App;
