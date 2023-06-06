import React from 'react';
import pet from '../images/Cat.jpg';
import './Petcare.css';
import Features from '../Pages/Features';


function Petcare() {
  return (
    <>
    <div className="hello">
         <div className="image">
           <img src={pet} alt="dog" className='image'/>
         </div> 
         <div className="text">
           <span className="heading"> WE CARE FOR YOUR PET</span>
           <span className="line">The purity of a person's heart can
            be quickly measured by how they regard animals!!</span>
            <button className="btn">Learn more</button>
         </div>
         </div>
         <Features/>
         </>
        
       
  )
}

export default Petcare 
