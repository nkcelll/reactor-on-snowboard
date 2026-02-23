import { IconFilter, IconClose } from '@/assets/icons/';
import { BurgerItemsButton } from '@/components/header';
import './mainProducts.css';
import '../../shared/sideBox/sideBox.css';
import SideBox from '@/components/shared/sideBox/SideBox';

import { useState } from 'react';

export default function FilterSort() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});
  const [isVisible, setIsVisible] = useState(false);

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const open = () => setIsVisible(true);
  const close = () => setIsVisible(false);

  const header = (
    <>
      <div
        className="box-flex"
        style={{ justifyContent: 'flex-end', alignItems: 'center' }}
      >
        <button onClick={close}>
          <IconClose />
        </button>
      </div>
    </>
  );

  return (
    <div className="filter-sort_container">
      <button
        onClick={open}
        aria-label={`box is ${isVisible ? 'Open' : 'Closed'}`}
        className="flexBox"
      >
        <IconFilter />
        <span>Filter & Sort</span>
      </button>
      <SideBox
        isVisible={isVisible}
        close={close}
        header={header}
        className={isVisible ? '.box-container' : 'filter'}
      >
        <BurgerItemsButton
          name="Sort By"
          className="button-section"
          isOpen={!!openItems['1']}
          onClick={() => toggleItem('1')}
          style={{ fontWeight: 'bold', fontSize: '16px' }}
        />
        {openItems['1'] && (
          <div className="input-fields_container">
            <div className="input-fields">
              <input type="checkbox" className="checkbox-style" />
              <label htmlFor="checkbox">123</label>
            </div>
            <div className="input-fields">
              <input type="checkbox" className="checkbox-style" />
              <label htmlFor="checkbox">123</label>
            </div>
          </div>
        )}
      </SideBox>
    </div>
  );
}
