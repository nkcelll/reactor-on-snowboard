import '../../styles/characteristics.css';
import type { CharacteristicsProps } from '../../types';
interface CharacteristicsEndpoint {
  characteristics: CharacteristicsProps
  overallRating: string
}
export default function Characteristics({characteristics, overallRating}: CharacteristicsEndpoint) {
  
  return (
    <div className="characteristics">
      <span className="span-characteristics">Characteristics</span>
      <div className="terrain-customer">
        <div className="joyful-hard characteristic-name-box">
          <span>Easy</span>
          <span>Hard</span>
        </div>
        <div className="joyful-hard-rating terrain-info">
          <div className="joyful-hard rating-box" style={{width: `${parseInt(characteristics.rideLevel)}0%`}}>
            <span>{characteristics.rideLevel}</span>
          </div>
        </div>
      </div>
      <div className="adjustability-customer">
        <span className='adjustability'>Adjustability</span>
        <div className="min-max-adjust-container">
          <div className="joyful-hard characteristic-name-box">
            <span>Min</span>
            <span>Max</span>
          </div>
          <div className="joyful-hard-rating">
            <div className="rating-box" style={{width: `${parseInt(characteristics.adjustability)}0%`}}>
              <span>{characteristics.adjustability}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="overal-rating">
        <span>Overall Rating: {overallRating}</span>
      </div>
    </div>
  );
}
