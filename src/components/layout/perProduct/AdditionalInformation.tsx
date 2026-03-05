import './styles/additionalInformation.css';
import ButtonToggle from './details/component/ButtonToggle';
import DetailsInfo from './details/DetailInfo'
import {SpecsInfo, FeaturesInfo} from './index';

import { useState } from 'react';

export default function AdditionalInformation() {
  const [detailOpen, setDetailOpen] = useState<Record<number, boolean>>({
    1: false,
    2: false,
    3: false
  });
  console.log(detailOpen);

  const toggleDropdown = (index: number) => {

      // setDetailOpen(true);
      setDetailOpen(prev => {
        return ({
          ...prev,
          [index]: !prev[index]
        })
      });
  };
  return (
    <div className="additional-information-container">
      <div className="product-dropdown-detail">
        <ButtonToggle //////////////////////////////////////////////  Prod Details
          detailName = 'Product Details'
          detailOpen={detailOpen[1]}
          toggleDropdown={() => toggleDropdown(1)}
        />
        <DetailsInfo
          detailOpen = {detailOpen[1]}
        />
      </div>
      <div className="product-dropdown-detail"> 
        <ButtonToggle //////////////////////////////////////////////  Specs
          detailName = 'Specs'
          detailOpen={detailOpen[2]}
          toggleDropdown={() => toggleDropdown(2)}
        />
        <SpecsInfo   
          detailOpen = {detailOpen[2]}
        />
      </div>
      <div className="product-dropdown-detail">
        <ButtonToggle  //////////////////////////////////////////////  Featured
          detailName = 'Featured'
          detailOpen={detailOpen[3]}
          toggleDropdown={() => toggleDropdown(3)}
        />
        <FeaturesInfo
          detailOpen = {detailOpen[3]}
        />
      </div>











      {/* <div className="product-dropdown-detail">
        <button type="button" onClick={() => toggleDropdown(1)}>
          <span>Product Details</span>
          <IconArrowDown
            className={`rotateDetailsIcon ${detailOpen[1] ? 'isDetailsOpenIcon' : ''}`}
          />
        </button>
        <div className={`dropdown-text ${detailOpen[1] ? 'isDetailsOpen' : ''}`}>
          <p>
            The U28 2-layer bib is equipped with Dryplay 20K technology, keeping
            you dry even in the wettest conditions. Fully taped seams and a
            PFC-free Teflon Ecoelite™ water-repellent coating provide extra
            protection against moisture. Functionality is one of the strengths
            of the U28 bib, as evidenced by the snow gaiters, hand pockets,
            thigh pockets, and chest pocket. The fit and comfort have been
            meticulously designed. Adjustable straps at the waist and shoulders
            allow you to tailor the pants to your preference, layer clothing,
            and ensure the pants stay in place during intense hikes. This bib
            also features snap buttons at the lower hem, offering multiple
            adjustment
          </p>
        </div>
      </div> */}
    </div>
  );
}
