// BurgerMenu.tsx
import {
  IconBurgerMenu,
  IconClose,
  IconUser,
  IconFacebook,
  IconInstagram,
} from '@/assets/icons';
import BurgerBoxList from './BurgerBoxList';
import SideBox from '../shared/sideBox/SideBox';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function BurgerMenu() {
  const [isVisible, setIsVisible] = useState(false);

  const open = () => setIsVisible(true);
  const close = () => setIsVisible(false);

  const header = (
    <div className="burger-head">
      <div className="burger-head-text">
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
  );

  const footer = (
    <div className="socials">
      <Link target="__blank" to="https://www.facebook.com/sadamde/">
        <IconFacebook />
      </Link>
      <Link target="__blank" to="https://www.instagram.com/nkcellll/">
        <IconInstagram />
      </Link>
    </div>
  );

  return (
    <SideBox
      isVisible={isVisible}
      open={open}
      close={close}
      trigger={<IconBurgerMenu />}
      header={header}
      footer={footer}
      className="burger-menu_container"
    >
      <BurgerBoxList />
    </SideBox>
  );
}
