import React, { Component } from 'react'
import './Section5.css'

export default class Section5 extends Component {
  render() {
    return (
      <div>

<section className="fifth-section  row">

			<div className="col-md-6">
				<div className="left-side-wrapper pt-5">
					<div className='product-title5 fs-1 fw-bold white'>
                     HomePod
                    </div>
					<div className="brief-description5">
						Profound sound.
					</div>
					<div className="links-wrapper">
						<ul>
							<li><a href="">Learn more</a></li>
							<li><a href="">Buy</a></li>
						</ul>
					</div>
				</div>
			</div>

			<div className="col-md-6 ">
				<div className="right-side-wrapper pt-5">
					<div className='product-title5 fs-1 fw-bold white'>
                     AirPod Pro
                    </div>
					<div className="brief-description5">
						Rebuild from the sound up.
					</div>
					<div className="links-wrapper">
						<ul>
							<li><a href="">Learn more</a></li>
							<li><a href="">Buy</a></li>
						</ul>
					</div>
				</div>
			</div>

		</section>

      </div>
    )
  }
}
