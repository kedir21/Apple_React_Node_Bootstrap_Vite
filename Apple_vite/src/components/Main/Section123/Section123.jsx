import React from 'react'
import SectionProps123 from './SectionProps123'
import './Section123.css'
import watchlogo from '../../../commonResource/Images/march9apple2023/3rdsectionlogo.png'
function Section() {
  return (
    <React.Fragment>
<div className = " alert fs-6  mb-0 text-center py-1 align-middle">
Get $200–$600 in credit toward iPhone 14 or iPhone 14 Pro when you trade in iPhone 11 or higher <a href="">.1 Shop iPhone</a>
</div>

<SectionProps123  
section='first-section text-white container-fluid' 
title='fs-1 pt-4 fw-bold black' 
titleDisc=' iPhone 14' 
fs3='A huge leap in battery life.'
fs4=' two great sizes.Now in yellow'
discription='brief-description'  
briefDisc='pre-order in yellow 3.10'
briefDisc1='Available Starting 3.14' />

<SectionProps123  section='second-section mt-3 container-fluid' title='product-title2' titleDisc='iPhone 14 Pro'  discription='brief-description2'  briefDisc=' Pro.Beyond.' />

<SectionProps123  
section='third-section mt-3 container-fluid' 
title='logo pt-5' 
img={watchlogo}
discription='brief-description3'  
briefDisc='pro.beyond.' />
  



    </React.Fragment>
  )
}

export default Section