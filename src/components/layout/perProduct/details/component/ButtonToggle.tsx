import IconArrowDown from "@/assets/icons/IconArrowDown";

interface ButtonProps { 
  detailName: string
  detailOpen: boolean
  toggleDropdown: () => void
}

const ButtonToggle = ({detailName, detailOpen, toggleDropdown}: ButtonProps) => {
  return (
    <button type="button" onClick={toggleDropdown}>
      <span>{detailName}</span>
      <IconArrowDown
        className={`rotateDetailsIcon ${detailOpen ? 'isDetailsOpenIcon' : ''}`}
      />
    </button>
  );
};

export default ButtonToggle;
