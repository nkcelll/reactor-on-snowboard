import './header.css';
import { Link } from 'react-router-dom';
import { Logo, IconUser } from './index';
import { NavMenu, SearchBox, Cart, SwitchTheme, BurgerMenu } from './index';
// import ProducstLoadingCubes from '../shared/loading/ProducstLoadingCubes';
import { useEffect, useRef } from 'react';

export default function Header() {
  // const [intro, setIntro] = useState(true)
  // const [lastScrolly, setLastScrolly] = useState(0);
  const headerRef = useRef<HTMLDivElement>(null);
  // const headerRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const introFreestyle = setTimeout(() => {
  //     // setIntro(false)
  //   }, 4000);
  //   return () => clearTimeout(introFreestyle);
  // }, []);
  const lastScrollRef = useRef(0);

  useEffect(() => {
    const header = headerRef.current;

    const handleScroll = () => {
      if (!header) return;
      const currentScrollY = window.scrollY;

      if (currentScrollY > 100 && currentScrollY > lastScrollRef.current) {
        header.style.top = '-77px';
      } else {
        header.style.top = '0px';
      }
      // if (currentScrollY > 100 && currentScrollY > lastScrollRef.current) {
      //   header.style.transform = 'translateY(-100%)';
      // } else {
      //   header.style.transform = 'translateY(0)';
      // }
      lastScrollRef.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header ref={headerRef} className="header">
        <nav className="main-header_container">
          <div className="left-header_side">
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <NavMenu />
          <div className="right-header_side">
            <SearchBox />
            <Link to="/login" className="toLogIn">
              <IconUser />
            </Link>
            <Cart />
            <SwitchTheme />
            <BurgerMenu />
          </div>
        </nav>
      </header>
      {/* <ProducstLoadingCubes isLoading={intro}/> */}
    </>
  );
}
