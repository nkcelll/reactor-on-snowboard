import './header.css'

export default function Nav() {
  return (
    <nav>
      <div className="section-nav men-nav-section">
        <a href="">MEN /</a>
        <div className="nav-dropDown-menu">
            <div className="dropDown-list">
              <h3>SNOWBOARDS</h3>
              <a href="" className='item'>SNOWBOARDS</a>
              <a href="" className='item'>BINDINGS</a>
              <a href="" className='item'>BAGS</a>
              <a href="" className='item'>BOOTS</a>
              <a href="" className='item'>SNOWBOARD ACCESSORIES</a>
            </div>
            <div className="dropDown-list">
              <h3>SNOWBOARDS</h3>
              <a href="" className='item'>SNOWBOARDS</a>
              <a href="" className='item'>BINDINGS</a>
              <a href="" className='item'>BAGS</a>
              <a href="" className='item'>BOOTS</a>
              <a href="" className='item'>SNOWBOARD ACCESSORIES</a>
            </div>
            <div className="dropDown-list">
              <h3>SNOWBOARDS</h3>
              <a href="" className='item'>SNOWBOARDS</a>
              <a href="" className='item'>BINDINGS</a>
              <a href="" className='item'>BAGS</a>
              <a href="" className='item'>BOOTS</a>
              <a href="" className='item'>SNOWBOARD ACCESSORIES</a>
            </div>
        </div>
      </div>
      <div className="section-nav woman-nav-section">
        <a href="">WOMAN /</a>
      </div>
    </nav>
  )
}