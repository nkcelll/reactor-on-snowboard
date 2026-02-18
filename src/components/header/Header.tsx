import './header.css'

import {Logo, IconUser} from './index'
import {Nav, SearchBox, Cart, SwitchTheme} from './index'

export default function Header() {
  return (
	<header>
		{/* <div className="scale"> */}
		<div className="main-header_container">
			<div className="left-header_side">
				<a href="/">
          		<Logo />
				</a>
			</div>
			<Nav />
			<div className="right-header-side">
				<SearchBox/>
				<a href="/">
					<IconUser/>
				</a>
				<Cart />
				<SwitchTheme/>
			</div>
		</div>
		{/* </div> */}
		
	</header>
  )
} 