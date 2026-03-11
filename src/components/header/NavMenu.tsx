import './header.css';
import men from '../../../server/services/collection/home/menu/men.json';
import women from '../../../server/services/collection/home/menu/women.json';
import kids from '../../../server/services/collection/home/menu/kids.json';
import sale from '../../../server/services/collection/home/menu/sale.json';
import { useState } from 'react';
import { Link } from 'react-router-dom';

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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const menuItems: MenuItem[] = [
    { label: 'Men', data: men as TopCategory[] },
    { label: 'Women', data: women as TopCategory[] },
    { label: 'Kids', data: kids as TopCategory[] },
    { label: 'Sale', data: sale as TopCategory[] },
  ];

  const navValues = menuItems.map((item, index) => {
    return (
      <div
        key={index}
        className="gender-nav-section"
        onMouseLeave={() => setHoveredIndex(null)}
      >
        <Link
          to="/"
          onMouseEnter={() => setHoveredIndex(index)}
          className={`menu-gender-names ${hoveredIndex !== null && hoveredIndex !== index ? 'blurred' : ''} ${hoveredIndex === index ? 'isActive' : ''}`}
        >
          {/* <Link to="/" onMouseEnter={() => setHoveredIndex(index)} className='menu-gender-names blur_hover'> */}
          {item.label.toLocaleUpperCase()} /
        </Link>

        <div
          // className={`nav-dropDown-menu ${hoveredIndex === index ? 'menuVisible' : 'menuVisible'}`}
          className={`nav-dropDown-menu ${hoveredIndex === index && 'menuVisible'}`}
          aria-label={`Menu dropdown is ${hoveredIndex ? 'Open' : 'Closed'}`}
        >
          {item.data.map((category) => (
            <div className="list" key={category.id}>
              <h3 key={category.id} id={category.id}>
                {category.topCat}
              </h3>
              {category.subCategory.map((subItem) => (
                <Link key={subItem.id} to={subItem.url} className="item">
                  {subItem.subCat}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  });
  return <div className="nav-section">{navValues}</div>;
}
