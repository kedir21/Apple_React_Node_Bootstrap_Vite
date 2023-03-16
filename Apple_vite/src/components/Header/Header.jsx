import React, { Component } from 'react'
import './Header.css'
import apple_logo from '../../commonResource/Images/icons/logo-sm.png'
import search_logo from '../../commonResource/Images/icons/search-icon-sm.png'
import cart_logo from '../../commonResource/Images/icons/cart-sm.png'
import Headerprops from './Headerprops'

class Header extends Component {
	render () {

  return (
    <div>

<div className="nav-wrapper fixed-top">
		<div className="container">
			<nav className="navbar navbar-toggleable-sm navbar-expand-md">
				<button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
					data-target=".navbar-collapse">
					☰
				</button>
				<a className="navbar-brand mx-auto" href="/"><img src={apple_logo} /></a>

				<div className="navbar-collapse collapse">
					<ul className="navbar-nav nav-justified w-100 nav-fill">
						<Headerprops link="mac" name="mac" />
						<Headerprops link="iphone" name="iPhone" />
						<Headerprops link="ipad" name="ipad" />
						<Headerprops link="watch" name="watch" />
						<Headerprops link="tv" name="tv" />
						<Headerprops link="music" name="music"/>
						<Headerprops link="Support" name="Support"/>
						<li className="nav-item">
							<a className="nav-link js-scroll-trigger" href="/search/">
								<img src={search_logo} />
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link js-scroll-trigger" href="/cart/"><img
									src={cart_logo} /></a>
						</li>
					</ul>
				</div>
			</nav>
		</div>
</div>

    </div>
  )
}}

export default Header