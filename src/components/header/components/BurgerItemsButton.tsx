import type { FC, } from 'react';
import { IconArrowDown } from '@/assets/icons';
import '../../shared/sideBox/sideBox.css';
type BurgerItemsButtonProps = {
  style?: React.CSSProperties;
  className?: string;
  onClick: () => void;
  id?: string;
  name: string;
  isOpen: boolean;
} 

const BurgerItemsButton: FC<BurgerItemsButtonProps> = (props) => {
  return (
    <button className={props.className} onClick={props.onClick} id={props.id}>
      <span style={props.style}>{props.name}</span>
      <IconArrowDown
        id="arrow-down"
        className={props.isOpen ? 'rotate' : 'rotate-close'}
      />
    </button>
  );
};

export default BurgerItemsButton;
