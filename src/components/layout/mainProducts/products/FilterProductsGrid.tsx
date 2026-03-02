import '../../../shared/sideBox/sideBox.css';
import { BurgerItemsButton } from '@/components/header';
import { useState } from 'react';

export default function FilterProductsGrid() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const toggleFilter = () => {
    setIsFilterOpen((prev) => !prev);
  };

  return (
      <div className="filters-left">
        <div className="sticky-filter">
          <span>Filter /</span>
          <div className="accordion-wrapper">
            <div className="accordion-form">
              <BurgerItemsButton
                className="filter-category"
                name="Gender"
                isOpen={isFilterOpen}
                onClick={toggleFilter}
              />
            </div>
            {isFilterOpen && (
              <>
              <div className="filter-category-item input-fields">
                <input type="checkbox" className="checkbox-style" />
                <label htmlFor="">Male</label>
              </div>
              <div className="filter-category-item input-fields">
                <input type="checkbox" className="checkbox-style" />
                <label htmlFor="">Male</label>
              </div>
              <div className="filter-category-item input-fields">
                <input type="checkbox" className="checkbox-style" />
                <label htmlFor="">Male</label>
              </div>
              </>
            )}
          </div>
        </div>
      </div>
  );
}
