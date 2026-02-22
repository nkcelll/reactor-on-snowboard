import './mainProducts.css';
import { GifTop, FilterGridSection} from './index';

export default function MainProducts() {
  return (
    <div>
      <GifTop />
      <section className="flexBox product-section_name">
        <span>Snowboards</span>
      </section>
      <FilterGridSection />
    </div>
  );
}
