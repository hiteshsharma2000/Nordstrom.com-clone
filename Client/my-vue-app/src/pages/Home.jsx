import React from 'react'

import Navsection from '../components/Navsection'
import Footer from '../components/footer'
import Thethread from '../components/Thethread'
import Networthyslider from '../components/networthyslider'
import BannerSlider from '../components/bannerSlider'
import ProdductSlider from '../components/productSlider'
import SaleProductSlider from '../components/SaleproductSlider'
import Networthypart2 from '../components/networthypart2'
const Home = () => {
  return (
    <div style={{width:"100%"}}>
  
  
    <Navsection/>
    <br />
    <br />
    <br />
    <br />

<BannerSlider/>    
    <h2 className='heading-slider'>Top picks for you</h2>   
    <br />
<ProdductSlider/>
       <br />
      
<Networthyslider/>
<br />
<br />
<br />
<br />
<br />
<Networthypart2/>
<h2 className='heading-slider'>Valentine's Day Picks</h2>   
    <br />
<ProdductSlider/>
       <br />
 <Thethread/>
 <h2 className='heading-slider'>Great Deals on What You Love</h2>   
 <p className='ml-[1rem]'>Items similar to what you've browsed are on sale</p>
    <br />
   <SaleProductSlider/>

       <br />
    <br />
    <br />
    <br />
    
    <Footer/>
    </div>
  )
}

export default Home
