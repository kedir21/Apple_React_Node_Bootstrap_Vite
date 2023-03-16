import React from 'react'
import Main from './components/Main/Main'
import { Route, Routes } from 'react-router-dom'
import Mac from './components/Pages/Mac/Mac'
import Ipad from './components/Pages/Ipad/ipad'
import Iphone from './components/Pages/Iphone/Iphone'
import Support from './components/Pages/Support/Support'
import Music from './components/Pages/Music/Music'
import Tv from './components/Pages/Tv/Tv'
import Watch from './components/Pages/Watch/Watch'
import Cart from './components/Pages/Cart/Cart'
import FourO4 from './components/Pages/FourO4/FourO4'
import ProductPage from './components/Pages/Product/ProductPage'
const myRoute = () => {
  return (
    <>

<Routes>
<Route  index  element={<Main />}        />  
<Route  path='/mac'  element={<Mac />}        />  
<Route  path='/Support'  element={<Support />}        />  
<Route  path='/cart'  element={<Cart />}        />  
<Route  path='/iphone'  element={<Iphone />}        />  
<Route  path='/iphone/:ProductID'  element={<ProductPage />}       />  
<Route  path='/music'  element={<Music />}        />  
<Route  path='/tv'  element={<Tv />}        />  
<Route  path='/Watch'  element={<Watch />}        />  
<Route  path='/ipad'  element={<Ipad />}        />  
<Route  path='*'  element={<FourO4 />}        />  


</Routes>




    </>
  )
}

export default myRoute