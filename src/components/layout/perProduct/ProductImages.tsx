import './styles/modalImg.css';
import {
  IconCloseModal,
  IconArrowModalLeft,
  IconArrowModalRight,
} from '@/assets/icons';
import { useState, useEffect } from 'react';


interface ProductImageProps {
  images: string[]
}

export default function ProductImages({images}: ProductImageProps) {
  const [openModal, setOpenModal] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  useEffect(() => {
    document.body.style.overflow = openModal ? 'hidden' : 'auto';
  }, [openModal]);

  const handleModal = (index: number) => {
    setOpenModal(true);
    setModalIndex(index);
  };

  // const images = [
  //   'https://cdn.skatepro.com/product/520/bataleon-surfer-snowboard-55.webp',
  //   'https://cdn.skatepro.com/product/520/bataleon-surfer-snowboard-la.webp',
  //   'https://cdn.skatepro.com/product/520/bataleon-surfer-snowboard-2p.webp',
  //   'https://cdn.skatepro.com/product/520/bataleon-surfer-snowboard-po.webp',
  // ];

  const showNext = () => {
    setModalIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  const showPrevious = () => {
    setModalIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length,
    );
  };

  const showCertain = (index: number) => {
    setModalIndex(index);
  };

  return (
    <div className="per-product-images">
      {images.map((image, index) => (
        <button key={index} onClick={() => handleModal(index)}>
          <img src={image} alt="" />
        </button>
      ))}
      {openModal && (
        <div className="modal-img-container">
          <button className="close-modal" onClick={() => setOpenModal(false)}>
            <IconCloseModal className="icon-close-modal-img" />
          </button>
          <div className="img-modal-content">
            <button className='arrow-swap-left' type="button" onClick={showPrevious}>
              <IconArrowModalLeft />
            </button>
            <img src={images[modalIndex]} alt="" />
            <button className='arrow-swap-right' type="button" onClick={showNext}>
              <IconArrowModalRight />
            </button>
          </div>
          <section className="img-below">
            {images.map((image, index) => (
              <button
                key={index}
                className={modalIndex === index ? 'modalIsActive' : ''}
                onClick={() => showCertain(index)}
                aria-label={`Thumbnail ${index + 1}`}
              >
                <img src={image} alt={`Thumbnail ${index + 1}`} />
              </button>
            ))}
          </section>
        </div>
      )}
    </div>
  );
}
