import '../shared/sideBox/sideBox.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import BurgerItemsButton from './components/BurgerItemsButton';

export default function BurgerBoxList() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  console.log(openItems);

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="nav_burger">
      <ul>
        <li className="burger-nav-items">
          <BurgerItemsButton
            name="Winter Sports"
            className="button-section"
            isOpen={!!openItems['1']}
            onClick={() => toggleItem('1')}
            style={{ fontWeight: 'bold', fontSize: '16px' }}
          />
          <div className={`inner-child ${openItems['1'] ? 'open' : ''}`}>
            <ul>
              <li>
                <BurgerItemsButton
                  name="Snowboards"
                  className="item-collapser"
                  isOpen={!!openItems['2']}
                  onClick={() => toggleItem('2')}
                  style={{ fontWeight: '400', fontSize: '16px' }}
                />
                <div
                  className={`inner grandchild ${openItems['2'] ? 'open' : ''}`}
                >
                  <ul className="list-unstyled">
                    <li>
                      <Link to="">Snowboards</Link>
                    </li>
                    <li>
                      <Link to="">Bindings</Link>
                    </li>
                    <li>
                      <Link to="">Boots</Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
}
