import React, { Component } from 'react'
import './Section4.css'
// import fouthlogo from '../../../commonResource/Images/march9apple2023/'

export default class Section4 extends Component {
  render() {
    return (
      <div>

<div className='container-fluid'>

<section className=" fourth row ">
			<div className="col-md-6 ">
				<div className="left-side-wrapper pt-4">
					<div className="product-title4 fs-bold fs-1">
						iPad
					</div>
					<div className="brief-description4 fs-bold">
						Lovable.Drawable.Magical
					</div>
					<div className="links-wrapper">
						<ul>
							<li><a href="#">Learn more</a></li>
							<li><a href="#">Buy</a></li>
						</ul>
					</div>
				</div>
			</div>

			<div className="col-md-6">
				<div className="right-side-wrapper pt-4">
				
					<div className="product-title4 fs-1 fw-bold white">
						MacBook Pro
					</div>
					<div className="brief-description4  white">
					super charged by M2 and M2 Max.
					</div>
					<div className="links-wrapper">
						<ul>
							<li><a href="">Learn more</a></li>
							<li><a href="">Shop</a></li>
						</ul>
					</div>
				</div>
			</div>

		</section>
		</div>

      </div>
    )
  }
}
