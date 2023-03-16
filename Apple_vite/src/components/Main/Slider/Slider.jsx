import React, { Component } from 'react'
import './Slider.css'
import image1 from '../../../commonResource/Images/march9apple2023/1.jpg'
import image2 from '../../../commonResource/Images/march9apple2023/2.jpg'
import image3 from '../../../commonResource/Images/march9apple2023/3.jpg'
import image4 from '../../../commonResource/Images/march9apple2023/4.jpg'
import image5 from '../../../commonResource/Images/march9apple2023/5.jpg'
import image6 from '../../../commonResource/Images/march9apple2023/6.jpg'
import image7 from '../../../commonResource/Images/march9apple2023/7.jpg'
import image8 from '../../../commonResource/Images/march9apple2023/8.jpg'
import image9 from '../../../commonResource/Images/march9apple2023/9.jpg'


export default class Slider extends Component {
  render() {
    return (
      <div>

<section className="slider container" id="slider">
		<div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-interval="0.001">

			<div className="carousel-inner">
				<div className="carousel-item active">
					<img src={image1} className="d-block w-100"/>
					<div className="carousel-caption  d-none d-md-block">

						<a href="./netflix-home-page-Clone/index.html" target="_blank"><div className="btn"> Stream now <i
								className="fa fa-play-circle" aria-hidden="true"></i></div></a>
						<p><b>comedy</b>.start your hoidays on high note.</p>
					</div>

				</div>
				<div className="carousel-item">
					<img src={image2} className="d-block w-100"/>
					<div className="carousel-caption d-none d-md-block">
						<a href="./netflix-home-page-Clone/index.html" target="_blank" className="btn"> Stream now <i
								className="fa fa-play-circle" aria-hidden="true"></i></a>
						<p><b>comedy</b>.start your hoidays on high note.</p>
					</div>
				</div>
				<div className="carousel-item">
					<img src={image3} className="d-block w-100"/>
					<div className="carousel-caption d-none d-md-block">
						<a href="./netflix-home-page-Clone/index.html" target="_blank" className="btn"> Stream now <i
								className="fa fa-play-circle" aria-hidden="true"></i></a>
						<p><b>comedy</b>.start your hoidays on high note.</p>
					</div>
				</div>
				<div className="carousel-item">
					<img src={image4} className="d-block w-100"/>
					<div className="carousel-caption d-none d-md-block">
						<a href="./netflix-home-page-Clone/index.html" target="_blank" className="btn"> Stream now <i
								className="fa fa-play-circle" aria-hidden="true"></i></a>
						<p><b>comedy</b>.start your hoidays on high note.</p>
					</div>
				</div>

				<div className="carousel-item">
					<img src={image5} className="d-block w-100"/>
					<div className="carousel-caption d-none d-md-block">
						<a href="./netflix-home-page-Clone/index.html" target="_blank" className="btn"> Stream now <i
								className="fa fa-play-circle" aria-hidden="true"></i></a>
						<p><b>comedy</b>.start your hoidays on high note.</p>
					</div>
				</div>
				<div className="carousel-item">
					<img src={image6} className="d-block w-100"/>
					<div className="carousel-caption d-none d-md-block">
						<a href="./netflix-home-page-Clone/index.html" target="_blank" className="btn"> Stream now <i
								className="fa fa-play-circle" aria-hidden="true"></i></a>
						<p><b>comedy</b>.start your hoidays on high note.</p>
					</div>
				</div>
				<div className="carousel-item">
					<img src={image7} className="d-block w-100"/>
					<div className="carousel-caption d-none d-md-block">
						<a href="./netflix-home-page-Clone/index.html" target="_blank" className="btn"> Stream now <i
								className="fa fa-play-circle" aria-hidden="true"></i></a>
						<p><b>comedy</b>.start your hoidays on high note.</p>
					</div>
				</div>
				<div className="carousel-item">
					<img src={image8} className="d-block w-100"/>
					<div className="carousel-caption d-none d-md-block">
						<a href="./netflix-home-page-Clone/index.html" target="_blank" className="btn"> Stream now <i
								className="fa fa-play-circle" aria-hidden="true"></i></a>
						<p><b>comedy</b>.start your hoidays on high note.</p>
					</div>
				</div>
				<div className="carousel-item">
					<img src={image9} className="d-block w-100"/>
					<div className="carousel-caption d-none d-md-block">
						<a href="./netflix-home-page-Clone/index.html" target="_blank" className="btn"> Stream now <i
								className="fa fa-play-circle" aria-hidden="true"></i></a>
						<p><b>comedy</b>.start your hoidays on high note.</p>
					</div>
				</div>
			</div>

			<div className="carousel-indicators">
				<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
					aria-current="true" aria-label="Slide 1"></button>
				<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
					aria-label="Slide 2"></button>
				<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
					aria-label="Slide 3"></button>
				<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"
					aria-label="Slide 4"></button>
				<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4"
					aria-label="Slide 5"></button>
				<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5"
					aria-label="Slide 6"></button>
				<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6"
					aria-label="Slide 7"></button>
				<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7"
					aria-label="Slide 8"></button>
				<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="8"
					aria-label="Slide 9"></button>
			</div>
			<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
				data-bs-slide="prev">
				<span className="carousel-control-prev-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Previous</span>
			</button>
			<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
				data-bs-slide="next">
				<span className="carousel-control-next-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Next</span>
			</button>
		</div>
	</section>

      </div>
    )
  }
}
