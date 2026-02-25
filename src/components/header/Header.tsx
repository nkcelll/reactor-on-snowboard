import './header.css';
import { Link } from 'react-router-dom';
import { Logo, IconUser, } from './index';
import { NavMenu, SearchBox, Cart, SwitchTheme, BurgerMenu } from './index';

export default function Header() {
  return (
    <header>
      <nav className="main-header_container">
        <div className="left-header_side">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <NavMenu />
        <div className="right-header_side">
          <SearchBox />
          <Link to="/login" className='toLogIn'>
            <IconUser />
          </Link>
          <Cart />
          <SwitchTheme />
          <BurgerMenu />
        </div>
      </nav>
    </header>
  );
}
