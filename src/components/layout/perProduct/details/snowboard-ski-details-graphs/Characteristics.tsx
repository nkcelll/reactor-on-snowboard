import '../../styles/characteristics.css';
import type { CharacteristicsProps } from '../../types';
interface CharacteristicsEndpoint {
  characteristics: CharacteristicsProps
}
export default function Characteristics({characteristics}: CharacteristicsEndpoint) {
  console.log(characteristics);
  
  return (
    <div className="characteristics">
      <span className="span-characteristics">Characteristics</span>
      <div className="terrain-customer">
        <div className="joyful-hard characteristic-name-box">
          <span>Easy</span>
          <span>Hard</span>
        </div>
        <div className="joyful-hard-rating terrain-info">
          <div className="joyful-hard rating-box">
            <span>{characteristics.rideLlevel}</span>
          </div>
        </div>
      </div>
      <div className="adjustability-customer">
        <span>Adjustability</span>
        <div className="min-max-adjust-container">
          <div className="joyful-hard characteristic-name-box">
            <span>Min</span>
            <span>Max</span>
          </div>
          <div className="joyful-hard-rating">
            <div className="rating-box">
              <span>{characteristics.adjustability}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="overal-rating">
        <span>Overall 5.9</span>
      </div>
    </div>
  );
}
