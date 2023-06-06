import React from 'react'
import './About.css';
import Services from './Services';

function Aboutus() {
  return (
    
    <>
    <div className="about">
      <div className="title">GREAT CHOICE FOR YOUR PET<br/>
        <span className="quote">A little adaptation can prevent animal downfall!</span><br/>  
        <button className="bt">Adopt</button>
      </div>
  </div>
  <Services/>
    </>
    
  )
}

export default Aboutus