import React from "react";
import { useSelector } from 'react-redux';


const Images = () => {
  const detailsIMG = useSelector((state) => state.details);
  const imgNum = detailsIMG.screenshots.length
  const imgIndex = Math.floor(Math.random() * imgNum);
  console.log(detailsIMG.screenshots[imgIndex])
  return(
    <div className="Images">
  <img className="details-img" src={detailsIMG.screenshots[imgIndex].image} alt="img" width={300}/>
      </div>
  )
}

export {Images as default}