import React from 'react';
import { useSelector } from 'react-redux';

const Details = () => {
  const details = useSelector((state) => state.details);
  console.log(details.screenshots)
 
    return(
  <section className="whole-details">
    <div className="Images">
  <img className="details-img" src={details.thumbnail} alt="img" width={300}/>
      </div>
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