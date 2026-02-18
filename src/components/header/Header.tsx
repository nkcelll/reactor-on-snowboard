import './header.css';

import { Logo, IconUser } from './index';
import { NavMenu, SearchBox, Cart, SwitchTheme } from './index';

export default function Header() {
  return (
    <header>
      {/* <div className="scale"> */}
      <nav className="main-header_container">
        <div className="left-header_side">
          <a href="/">
            <Logo />
          </a>
        </div>
        <NavMenu />
        <div className="right-header_side">
          <SearchBox />
          <a href="/">
            <IconUser />
          </a>
          <Cart />
          <SwitchTheme />
        </div>
      </nav>
      {/* </div> */}
    </header>
  );
}
