import { WiDayCloudy } from 'react-icons/wi';
import homeImage from '../../Assets/homeImage.jpg';
import '../../CSS/Home.css';
import HomePageCard from './HomePageCard';

function Home() {
  return (
    <div className="homepage-container">
      <div className="homepage-banner">
      <h1 className="homepage-image-title">Meet PlantCast</h1>
      <h2 className="homepage-image-subtitle">Your guide to </h2>
      <h2 className="homepage-image-heading-1"> Better Care for Better Plants</h2>
      <img className="homepage-image" src={homeImage}></img>
    </div>
      
      <div className="home-page-card-container">
        <h1> How it works...</h1>
        <HomePageCard cardType="location"/>
        <HomePageCard cardType="plants"/>
        <HomePageCard cardType="care"/>
      </div>

    </div>
  );
}

export default Home;
