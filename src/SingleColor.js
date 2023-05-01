import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb,weight,index,hexcolor}) => {
  const[alert,setAlert]=useState(false);
  
  const hex=rgbToHex(...rgb); // This is convert rgb value to hex value

  
useEffect(() => {
  const timeout = setTimeout(() => {setAlert(false)},3000);

  return ()=>clearInterval(timeout);
});

  const bcg=rgb.join(','); // Value of the rgb
  return <article
   className={`color ${index>10 && 'color-light'}`}
   style={{backgroundColor:`rgb(${bcg})`}}
   onClick={()=>{
     setAlert(true);
     navigator.clipboard.writeText(hex);
   }}
   >
      <p className='percent-value'>{weight}%</p>
      <p className="color-value">{hex}</p>
      {alert &&  <p className="alert">COPIED TO CLIPBOARD</p> }
  </article>
}

export default SingleColor
