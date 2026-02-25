import './home.css';

import dataHome from '../../../services/collection/home/dataHome.json';
import useSmoothHorizontalScroll from '../shared/ScrollAnime';
import { useRef } from 'react';
import { Link, } from 'react-router-dom';

export default function HomeProducts() {
  const containerRef = useRef<HTMLElement>(null);
  // console.log(dataHome);
  
  
  useSmoothHorizontalScroll(containerRef as React.RefObject<HTMLElement>);

  const products = Object.values(dataHome.data);
  console.log(products);
  

  const productsHome = products.map((item) => {
    const postersSrc = item.posters?.[0].poster;
    // const titles = item.title;
    // console.log(item.key)
    return (
      <div key={item.key} className="product-poster-card">
        <Link to={`/products/${item.key}`}>
          <img className="product-poster" src={postersSrc} alt={item.title} />
          <span className="textBox">{item.title}</span>
        </Link>
      </div>
    );
  });
  return (
    <main ref={containerRef} id="home-container">
      {productsHome}
    </main>
  );
}

// import './home.css';

// import dataHome from '../../../services/collection/home/dataHome.json';
// import useSmoothHorizontalScroll from '../shared/ScrollAnime';
// import { useRef } from 'react';
// import { Link } from 'react-router-dom';

// export default function HomeProducts() {
//   const containerRef = useRef<HTMLElement>(null);

//   useSmoothHorizontalScroll(containerRef as React.RefObject<HTMLElement>);

//   const products = Object.values(dataHome.data);

//   const productsHome = products.map((item) => {
//     const postersSrc = item.posters?.[0].poster;
//     // const titles = item.title;

//     return (
//       <div key={item.key} className="product-poster-card">
//         <Link to='collection'>
//           <img src={postersSrc} alt={item.title} />
//         </Link>
//         <div className="textBox">
//           <span>{item.title}</span>
//         </div>
//       </div>
//     );
//   });
//   return (
//     <main ref={containerRef} id="home-container">
//       {productsHome}
//     </main>
//   );
// }

// import './home.css';

// import dataHome from '../../../services/collection/home/dataHome.json';
// import useSmoothHorizontalScroll from '../shared/ScrollAnime';
// import { useRef } from 'react';
// import { Link } from 'react-router-dom';

// export default function HomeProducts() {
//   // const containerRef = useRef<HTMLElement>(null);

//   // useSmoothHorizontalScroll(containerRef as React.RefObject<HTMLElement>);

//   const products = Object.values(dataHome.data);

//   // const productsHome = products.map((item) => {
//   //   const postersSrc = item.posters?.[0].poster;
//   //   // const titles = item.title;

//   //   return (
//   //     <div key={item.key} className="product-poster-card">
//   //       <Link to='collection'>
//   //         <img src={postersSrc} alt={item.title} />
//   //       </Link>
//   //       {/* <div className="textBox">
//   //         <span>{titles}</span>
//   //       </div> */}
//   //     </div>
//   //   );
//   // });
//   return (
//     <div id="grid-home-container">
//       <div className="item-grid left">
//           {/* <img src="https://d3u9sm4kpb9d1j.cloudfront.net/pictures/6893139" /> */}
//           <span>cupkaces</span>
//         <div className="item-grid-child">
//         </div>

//       </div>
//       <div className="item-grid center">
//           {/* <img src="https://d3u9sm4kpb9d1j.cloudfront.net/pictures/6893139" /> */}
//           <span>cupkaces</span>
//         <div className="item-grid-child">
//         </div>

//       </div>
//       <div className="item-grid right">
//           {/* <img src="https://d3u9sm4kpb9d1j.cloudfront.net/pictures/6893139" /> */}
//           <span>cupkaces</span>
//         <div className="item-grid-child">
//         </div>

//       </div>
//     </div>
//   );
// }
