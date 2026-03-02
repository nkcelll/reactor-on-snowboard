import { IconFilter, IconClose } from '@/assets/icons/';
import { BurgerItemsButton } from '@/components/header';
import './mainProducts.css';
import '../../shared/sideBox/sideBox.css';
import SideBox from '@/components/shared/sideBox/SideBox';
import FilterProductsGrid from './products/FilterProductsGrid';

import { useState } from 'react';

export default function FilterSort() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});
  const [toggleRadio, setToggleRadio] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleChange = (id: string) => {
    setToggleRadio((prev) => (prev === id ? null : id));
  };

  const open = () => setIsVisible(true);
  const close = () => setIsVisible(false);

  const headerSortBy = (
    <>
      <div
        className="box-flex"
        // style={{ justifyContent: 'flex-end', alignItems: 'center' }}
      >
        <span>Filter/Sort</span>
        <button onClick={close}>
          <IconClose />
        </button>
      </div>
    </>
  );

  const setSortOptions = [
    { id: 'featured', label: 'Featured' },
    { id: 'best-selling', label: 'Best Selling' },
    { id: 'a-z', label: 'A-Z' },
    { id: 'z-a', label: 'Z-A' },
    { id: 'price-low-high', label: 'Price: Low - High' },
    { id: 'price-high-low', label: 'Price: High - Low' },
  ];

  const sortByInputFields = (
    <>
      {setSortOptions.map((option) => (
        <div className="input-fields" key={option.id}>
          <input
            type="radio"
            id={option.id}
            name="sort-by-input-name"
            checked={toggleRadio === option.id}
            onChange={() => handleChange(option.id)}
          />
          <label htmlFor={option.id}>{option.label}</label>
        </div>
      ))}
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
        <span className="sort-grid">Sort</span>
      </button>
      <SideBox
        isVisible={isVisible}
        close={close}
        header={headerSortBy}
        id="filter-sort-desk"  ////////////////////////////// -> Desktop Res id
      >
        <div className="input-fields_container">
          <span className="sort-by-span">Sort By</span>
          {sortByInputFields}
        </div>
      </SideBox>
      <SideBox
        isVisible={isVisible}
        close={close}
        header={headerSortBy}
        id={'filter-sort-mob'} //////////////////////////////////// -> Mob Res id
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
            {sortByInputFields}
          </div>
        )}
      </SideBox>
      {/* <SideBox isVisible={isVisible} close={close}>
        <FilterProductsGrid/>
      </SideBox> */}
    </div>
  );
}console.log()
