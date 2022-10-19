import { WiDayCloudy } from 'react-icons/wi';
import '../CSS/Home.css';

function Home() {
  return (
    <div className="homepage-container">
      <div className="homepage-image-banner">
      <h1 className="homepage-image-text">Better Care for Better Plants</h1>
      <p className="homepage-image-subtext"> Plantcast uses local weather forcasting to help you better care for your plants. </p>
      </div>
      

      <div className='homepage-sub-container'>
        <p> How it works...</p>
        <div className='homepage-tile'>
         <div className='homepage-tile-image'><WiDayCloudy size={70}/></div>
          <p> Tell us where you are located</p>
        </div>
        <div className='homepage-tile'>
         <div className='homepage-tile-image'><WiDayCloudy size={70}/></div>
          <p> Introduce your plants</p>
        </div>
        <div className='homepage-tile'>
         <div className='homepage-tile-image'><WiDayCloudy size={70}/></div>
          <p> We use the weather to predict your care routine</p>
        </div>
      </div>

      <div className='homepage-sub-container'>
        <p> How it works...</p>
        <div className='homepage-tile'>
         <div className='homepage-tile-image'><WiDayCloudy size={70}/></div>
          <p> Tell us where you are located</p>
        </div>
        <div className='homepage-tile'>
           <div className='homepage-tile-image'><WiDayCloudy size={70}/></div> 
            <p> List all your plants by type</p>
        </div>
        <div className='homepage-tile'>
       <div className='homepage-tile-image'><WiDayCloudy size={70}/></div>
          <p> We use the weather to predict your care routine</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
