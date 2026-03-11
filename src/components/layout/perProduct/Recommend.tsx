import './styles/recommend.css';
import { IconArrowModalLeft, IconArrowModalRight } from '@/assets/icons';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

type Product = {
  name: string;
  images: string[];
};

export default function Recommend() {
  const [recommends, setRecommends] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState('');

  const [scrollLeftDisable, setScrollLeftDisable] = useState(true)
  const [scrollRightDisable, setScrollRightDisable] = useState(false)

  const useRefForContainer = useRef<HTMLDivElement>(null);

  ///////////////////////////// Fetch Product
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'http://localhost:5000/api/products/snowboards',
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setRecommends(result.snowboards);
      } catch (err) {
        if (err instanceof Error) {
          setErr(err.message);
        } else {
          setErr('Something went wrong');
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const nextSlide = () => {
    if(useRefForContainer.current) {
      useRefForContainer.current.scrollLeft += 320
    }
  };

  const prevSlide = () => {
    if(useRefForContainer.current) {
      useRefForContainer.current.scrollLeft -= 320
    }
  }

 const checkScroll = () => {
  const el = useRefForContainer.current;

  if (!el) return;

  setScrollLeftDisable(el.scrollLeft <= 0);
  setScrollRightDisable(el.scrollLeft + el.clientWidth >= el.scrollWidth);
};


  if (isLoading) return <p>Loading...</p>;
  if (err) return <p>Error: {err}</p>;



  return (
    <div className="recommend-section-container">
      <div className="recommend-header">
        <h3>We also recommend</h3>
        <div className="recommend-button-box-scroll">
          <button disabled={scrollLeftDisable} type="button" onClick={prevSlide}>
            <IconArrowModalLeft />
          </button>
          <button disabled={scrollRightDisable} type="button" onClick={nextSlide} >
            <IconArrowModalRight />
          </button>
        </div>
      </div>
      <div ref={useRefForContainer} onChange={checkScroll} className="recommend-content-container">
        {recommends.map((item) => (
          <div  className="recommend-items">
            <Link to="/">
              <img
                className="recomment-items-image"
                src={item.images[0]}
                alt=""
              />
            </Link>
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
