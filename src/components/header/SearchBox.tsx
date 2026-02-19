import './header.css'
import IconClose from '../../assets/icons/IconClose';
import IconSearch from '../../assets/icons/IconSearch';
// import {IconSearch } from './index'
import {useState} from 'react' 


export default function SearchBox() {
  const [isVisible, setIsVisible] = useState(false)

  const open = () => {
    console.log(isVisible);
    setIsVisible(prev => !prev)
  }
    const close =() => {
      setIsVisible(prev => !prev)
    }

  return (
    <div className='search-box_container'>
      <button onClick={open}>
        <IconSearch />
      </button>
      <div className={`search-input ${isVisible ? 'open' : ''}`}>
          <div className="input-dropDown_wrap">
            <input type='search' placeholder='Search...' />
            <button className='search-opened'>
              <IconSearch/>
            </button>
          <button className={`search-close ${isVisible ? 'close' : ''}`} onClick={close}>
            <IconClose/>
          </button>
          </div>
      </div>
    </div>
  );
}
