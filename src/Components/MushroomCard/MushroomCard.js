import React from 'react'
import "../MushroomCard.css"
import ToggleFav from './ToggleFav';

const MushroomCard = ( {image, latinName, commonNames }) => {
  const [isFav, setIsFav] = useState(false);

    return (
        <div className="mushroom-card">
            <img alt={latinName && commonNames} />
            {/* need to add src to line 10 */}
            <div className="mushroom-details">
                <h2 className="latin-name">{latinName}</h2>
                <p className="common-name">{commonNames.join(', ')}</p>
                <ToggleFav isFav={isFav} onToggle={() => setIsFav(!isFav)} />
            </div>
        </div>
    );
}

//Depending on how we receive the data from BE, we might not need the .join... if they already give us a string containing all the latin names, that would be perfect

export default MushroomCard;




