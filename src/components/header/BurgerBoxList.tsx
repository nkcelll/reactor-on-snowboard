import { useState } from 'react';
import BurgerItemsButton from './components/BurgerItemsButton';

export default function BurgerBoxList() {
  // Track which items are open
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  // Toggle item open/close by ID
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
          {/* Parent item */}
          <BurgerItemsButton
            name="Winter Sports"
            className="button-section"
            isOpen={!!openItems['1']}
            onClick={() => toggleItem('1')}
          />
          <div className={`inner-child ${openItems['1'] ? 'open' : ''}`}>
            <ul>
              <li>
                <BurgerItemsButton
                  name="Snowboards"
                  className="item-collapser"
                  isOpen={!!openItems['2']}
                  onClick={() => toggleItem('2')}
                />

                <div
                  className={`inner grandchild ${openItems['2'] ? 'open' : ''}`}
                >
                  <ul className="list-unstyled">
                    <li>
                      <a href="">Snowboards</a>
                    </li>
                    <li>
                      <a href="">Bindings</a>
                    </li>
                    <li>
                      <a href="">Boots</a>
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
