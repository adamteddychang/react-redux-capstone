import React from "react";
import { useSelector } from 'react-redux';


const Images = () => {
  const details = useSelector((state) => state.details); 
  return(
    <div className="Images">
  <img className="details-img" src={details.thumbnail} alt="img" width={300}/>
      </div>
  )
}

export {Images as default}