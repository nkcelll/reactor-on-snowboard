import './header.css';
import men from '../../../services/collection/home/menu/men.json';
import women from '../../../services/collection/home/menu/women.json';
import kids from '../../../services/collection/home/menu/kids.json';
import sale from '../../../services/collection/home/menu/sale.json';
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
  // const [isHovered, setIsHovered] = useState(false);
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
        <a href="" onMouseEnter={() => setHoveredIndex(index)}>
          {item.label.toLocaleUpperCase()} /
        </a>

        <div
          // className={`nav-dropDown-menu ${hoveredIndex === index ? 'menuVisible' : 'menuVisible'}`}
          className={`nav-dropDown-menu ${hoveredIndex === index && 'menuVisible'}`}
          aria-label={`Menu dropdown is ${hoveredIndex ? 'Open' : 'Closed'}`}
        >
          {item.data.map((category) => (
            <div className="list">
              <h3 key={category.id} id={category.id}>{category.topCat}</h3>
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

//  <div className="nav-section">
//       <div className="men-nav-section" onMouseLeave={() => setIsHovered(false)}>
//         <a href="" onMouseEnter={() => setIsHovered(true)}>
//           MEN /
//         </a>

//         <div
//           className={`nav-dropDown-menu ${isHovered && 'menuVisible'}`}
//           aria-label={`Menu dropdown is ${isHovered ? 'Open' : 'Closed'}`}
//         >
//           <div className="list">
//             <h3>SNOWBOARDS</h3>
//             <a href="" className="item">
//               SNOWBOARDS
//             </a>
//             <a href="" className="item">
//               BINDINGS
//             </a>
//             <a href="" className="item">
//               BAGS
//             </a>
//             <a href="" className="item">
//               BOOTS
//             </a>
//             <a href="" className="item">
//               SNOWBOARD ACCESSORIES
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
