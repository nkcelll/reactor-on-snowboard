import type { FC } from "react";
import { IconArrowDown } from "@/assets/icons";

type BurgerItemsButtonProps = {
  className?: string;
  onClick: () => void;
  id?: string;
  name: string;
  isOpen: boolean;
};

const BurgerItemsButton: FC<BurgerItemsButtonProps> = (props) => {
  return (
    <button className={props.className} onClick={props.onClick} id={props.id}>
      <span>{props.name}</span>
      <IconArrowDown
        id="arrow-down"
        className={props.isOpen ? "rotate" : "rotate-close"}
      />
    </button>
  );
};

export default BurgerItemsButton;