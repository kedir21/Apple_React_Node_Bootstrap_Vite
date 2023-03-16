import React, { Component } from 'react'

export default class SectionProps123 extends Component {
  render() {
    return (
      <>


<section className={this.props.section}>

<div className={this.props.title}>
    {this.props.titleDisc}
    <img src={this.props.img} />

</div>
<div className="fs-3  black">
   {this.props.fs3}<br/> {this.props.fs4}

</div>
<div className={this.props.discription}>
   {this.props.briefDisc}<br/>{this.props.briefDisc1}
</div>
<div className="links-wrapper">
    <ul>
        <li><a href="">Learn More</a></li>
        <li><a href="">Shop Now</a></li>
    </ul>
</div>

</section>

      </>
    )
  }
}


{/* <section className="first-section text-white container-fluid">

<div className="fs-1 pt-4 fw-bold black">
    iPhone 14
</div>
<div className="fs-3  black">
    A huge leap in battery life. <br/>
    two great sizes.Now in yellow

</div>
<div className="brief-description">
   pre-order in yellow 3.10 <br/>
   Available Starting 3.14
</div>
<div className="links-wrapper">
    <ul>
        <li><a href="">Learn More</a></li>
        <li><a href="">Shop Now</a></li>
    </ul>
</div>

</section> */}



{/* <section className="second-section mt-3 container-fluid">

<div className="product-title2">
    iPhone 14 Pro
</div>
<div className="brief-description2">
    Pro.Beyond.
</div>

<div className="links-wrapper">
    <ul>
        <li><a href="">learn more</a></li>
        <li><a href="">Buy</a></li>
    </ul>
</div>

</section> */}


// <section className="third-section mt-3 container-fluid">

// <div className="logo pt-5">
//     <img src={watch_logo} />
// </div>
// <div className="brief-description3">
//     Pro. Beyond.
// </div>

// <div className="links-wrapper">
//     <ul>
//         <li><a href="">learn more</a></li>
//         <li><a href="">Buy</a></li>
//     </ul>
// </div>

// </section>
