import React, { Component } from 'react'
import './Section6.css'
import fitnesslogo from '../../../commonResource/Images/march9apple2023/fitnesslogo.png'
import cardlogo from '../../../commonResource/Images/march9apple2023/cardlogo.png'

export default class Section6 extends Component {
  render() {
    return (
      <div>


<section className="sixth-section  row">
			<div className="col-md-6">
				<div className="left-side-wrapper pt-5">
					<div className="logo-wrapper">
						<img src={fitnesslogo} alt="" />
					</div>
					<div className="brief-description6 black">
						Welocome to the year of you <br />
                        Now all you need is iPhone
                        
					</div>
					<div className="links-wrapper">
						<ul>
							<li><a href="">Learn more</a></li>
							<li><a href="">Buy</a></li>
						</ul>
					</div>
				</div>
			</div>

			<div className="col-md-6">
				<div className="right-side-wrapper pt-5">
					<div className="top-logo-wrapper">
						<div className="logo-wrapper">
							<img src={cardlogo} />
						</div>
					</div>
					<div className="brief-description4 ">
						Get up to 3% Daily Cash back <br/> with every purchase.
					</div>
					<div className="links-wrapper">
						<ul>
							<li><a href="">Learn more</a></li>
							<li><a href="">Apply now</a></li>
						</ul>
					</div>
				</div>
			</div>
		</section>


      </div>
    )
  }
}
