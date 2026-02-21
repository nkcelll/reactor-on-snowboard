import './header.css';
import men from '../../../services/collection/home/menu/men.json';
import women from '../../../services/collection/home/menu/women.json';
import kids from '../../../services/collection/home/menu/kids.json';
import sale from '../../../services/collection/home/menu/sale.json';
import { useState } from 'react';

// ✅ Define types inline here
type SubCategory = {
  id: string;
  subCat: string;
  url: string;
};

type TopCategory = {
  id: string;
  topCat: string;
  subCategory: SubCategory[];
};

type MenuItem = {
  label: string;
  data: TopCategory[];
};

export default function NavMenu() {
  const [isHovered, setIsHovered] = useState(false);

  const menuItems: MenuItem[] = [
    { label: 'Men', data: men as TopCategory[] },
    { label: 'Women', data: women as TopCategory[] },
    { label: 'Kids', data: kids as TopCategory[] },
    { label: 'Sale', data: sale as TopCategory[] },
  ];

  return (
    <div className="nav-section">
      <div className="men-nav-section" onMouseLeave={() => setIsHovered(false)}>
        <a href="#" onMouseEnter={() => setIsHovered(true)}>
          {menuItems[0].label.toUpperCase()} /
        </a>

        <div
          className={`nav-dropDown-menu ${isHovered ? 'menuVisible' : ''}`}
          aria-label={`Menu dropdown is ${isHovered ? 'Open' : 'Closed'}`}
        >
          <div className="list">
            {menuItems[0].data.map((cat) => (
              <div key={cat.id}>
                <h3>{cat.topCat}</h3>
                {cat.subCategory.map((sub) => (
                  <a key={sub.id} href={sub.url} className="item">
                    {sub.subCat}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}