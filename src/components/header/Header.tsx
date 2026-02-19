import './header.css';

import { Logo, IconUser, } from './index';
import { NavMenu, SearchBox, Cart, SwitchTheme, BurgerMenu } from './index';

export default function Header() {
  return (
    <header>
      <nav className="main-header_container">
        <div className="left-header_side">
          <a href="/">
            <Logo />
          </a>
        </div>
        <NavMenu />
        <div className="right-header_side">
          <SearchBox />
          <a className='toLogIn' href="/login">
            <IconUser />
          </a>
          <Cart />
          <SwitchTheme />
          <BurgerMenu />
        </div>
      </nav>
    </header>
  );
}
