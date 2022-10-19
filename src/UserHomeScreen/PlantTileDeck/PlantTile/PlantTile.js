import {react, useState, useEffect} from 'react'; 
import PlantTileExpanded from './PlantTileExpanded/PlantTileExpanded';
import '../../../CSS/PlantTile.css'

function PlantTile(props) {

        const [expandedTileView, setExpandedTileView] = useState(false);

        const renderExpandedPlantTile = expandedTileView === true? <PlantTileExpanded/> : null

  return (
    <div className="plant-tile" onClick={() => setExpandedTileView(!expandedTileView)}>
      <p> Plant Tile {props.plantdata} </p>
        {renderExpandedPlantTile}
    </div>
  );
}

export default PlantTile;
