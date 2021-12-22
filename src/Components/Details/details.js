import React from 'react';
import Images from './detailsIMG'
import { useSelector } from 'react-redux';

const Details = () => {
  const details = useSelector((state) => state.details);
  console.log(details)
    return(
  <section className="whole-details">
    <Images/>
    <div className="text-details">
      <h1>{details.title}</h1>
      <div className="genre">
        <span><p>Genre: {details.genre}</p></span>
        
      </div>
      <div className="date">
        <span><p>Release date: {details.release_date}</p></span>
        
      </div>
      <div className="developer"> 
      <span><p>Game Developer: {details.developer}</p></span>        
      </div>

    </div>
    
  </section>
  )
    };

export default Details;