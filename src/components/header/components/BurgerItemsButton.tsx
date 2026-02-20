import IconArrowDown from "../../../assets/icons/IconArrowDown"

export default function BurgerItemsButton(props) {
  return (
    <button className={props.className} onClick={props.onClick} id={props.id}>
      <span >{props.name}</span>
      <IconArrowDown id='arrow-down' className={props.isOpen ? 'rotate' : 'rotate-close'}/>
    </button>
  )
}