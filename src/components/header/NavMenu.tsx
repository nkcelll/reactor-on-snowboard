import './header.css';
import kids from '../../../services/collection/home/menu/kids.json'
import men from '../../../services/collection/home/menu/men.json'
import sale from '../../../services/collection/home/menu/sale.json'
import women from '../../../services/collection/home/menu/women.json'

import { useState} from 'react';

export default function NavMenu() {
  const [isHovered, setIsHovered] = useState(false);

  const menuItems = [
    {label: 'Men', data: men},
    {label: 'Women', data: women},
    {label: 'Kids', data: kids},
    {label: 'Sale', data: sale},
    
  ]
  

  return (
    <div className="nav-section">
      <div className="men-nav-section" onMouseLeave={() => setIsHovered(false)}>
        <a href="" onMouseEnter={() => setIsHovered(true)}>
          MEN /
        </a>
        <div
          className={`nav-dropDown-menu ${isHovered && 'menuVisible'}`}
          aria-label={`Menu dropdown is ${isHovered ? 'Open' : 'Closed'}`}
        >
          <div className="list">
            <h3>SNOWBOARDS</h3>
            <a href="" className="item">
              SNOWBOARDS
            </a>
            <a href="" className="item">
              BINDINGS
            </a>
            <a href="" className="item">
              BAGS
            </a>
            <a href="" className="item">
              BOOTS
            </a>
            <a href="" className="item">
              SNOWBOARD ACCESSORIES
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
