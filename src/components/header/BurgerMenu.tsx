import IconBurgerMenu from '../../assets/icons/IconBurgerMenu';
import IconClose from '../../assets/icons/IconClose';
import IconFacebook from '../../assets/icons/IconFacebook';
import IconInstagram from '../../assets/icons/IconInstagram';
import IconUser from '../../assets/icons/IconUser';

import { useState } from 'react';

export default function BurgerMenu() {
  const [isVisible, setIsVisible] = useState(false);
  const open = () => setIsVisible(true);
  const close = () => setIsVisible(false);
  return (
    <div className="burger-menu_container">
      <button onClick={open}>
        <IconBurgerMenu />
      </button>
      <div
        className={`overlay ${isVisible ? 'overlay-visible' : ''}`}
        onClick={close}
      ></div>
      <div className="box">
        <div
          className={`box-container box-container-burger ${isVisible ? 'box_open' : ''}`}
        >
          <div className="header-wrap">
            <div className="box-header box-flex">
              <h3>Menu</h3>
              <button onClick={close}>
                <IconClose />
              </button>
            </div>
            <div className="create-account">
              <a href="">
                <IconUser />
                <span>Create an account</span>
              </a>
            </div>
          </div>
          <div className="nav_burger">
            <div className="category">
              <ul>
                <li className='burger-nav-items'>
                  <button>Winter Sports</button>
                  <div className="burger-nav-items_child">
                    
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="socials">
            <a href="">
              <IconFacebook />
            </a>
            <a href="">
              <IconInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
