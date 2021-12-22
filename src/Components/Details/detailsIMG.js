import React from "react";
import { useSelector } from 'react-redux';


const Images = () => {
  const details = useSelector((state) => state.details);
  const imgIndex = Math.floor(Math.random() * 3);
  
  return(
    <div className="Images">
  <img className="details-img" src={details.screenshots[imgIndex].image} alt="img" width={300}/>
      </div>
  )
}

export {Images as default}