import IconFilter from "@/assets/icons/IconFilter"
import './mainProducts.css';
export default function FilterSort() {
  return (
    <>
    <button className="flexBox filter-sort_container">
      <IconFilter/>
      <span>Filter & Sort</span>
    </button>
    <div className="filter-content-side_box">

    </div>
    </>
  )
}