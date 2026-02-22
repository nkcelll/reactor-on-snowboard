// BurgerMenu.tsx
import { IconBurgerMenu, IconClose, IconUser, IconFacebook, IconInstagram } from "@/assets/icons";
import BurgerBoxList from './BurgerBoxList';
import SideBox from "../shared/sideBox/SideBox";
import { useState } from 'react';

export default function BurgerMenu() {
  const [isVisible, setIsVisible] = useState(false);

  const open = () => setIsVisible(true);
  const close = () => setIsVisible(false);

  const header = (
    <>
      <div className="box-flex">
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
    </>
  );

  const footer = (
    <div className="socials">
      <a href=""><IconFacebook /></a>
      <a href=""><IconInstagram /></a>
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