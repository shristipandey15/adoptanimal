import React from 'react'
import './Features.css';
import Aboutus from "../Pages/Aboutus";


function Features() {
  return (
    <>

    <div className="box">
    </div>
    
    <div class="features">
        <div class="dog"></div>
        <div class="cat"></div>
        <div class="rabbit"></div>
    </div>
    <div class="circle">
    <div onClick="">FOR DOGS</div>
    <div>FOR CATS</div>
      <div>FOR RABBIT</div>
    </div>
    <Aboutus/>
    </>
  )
}

export default Features