import './header.css';
import useMenu from './hooks/useMenu'; ////// Menu data driven
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function NavMenu() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [menuItems, err] = useMenu();
  console.log(menuItems);

  if (err) {
    return <div className="menu-error">{err}</div>;
  }
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
