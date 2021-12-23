import React from 'react';
import { useSelector } from 'react-redux';
import './details.css';

const Details = () => {
  const details = useSelector((state) => state.details);
  console.log(details);
  return (
    <section className="whole-details">
      <div className="Image">
        <img className="details-img" src={details.thumbnail} alt="img" width={300} />
      </div>
      <div className="txt-details">
        <h1>{details.title}</h1>
        <div className="genre">
          <span>
            <p>
              Genre:
              {details.genre}
            </p>
          </span>

        </div>
        <div className="date">
          <span>
            <p>
              Release date:
              {details.release_date}
            </p>
          </span>

        </div>
        <div className="developer">
          <span>
            <p>
              Game Developer:
              {details.developer}
            </p>
          </span>
        </div>

        <div className="game_description">
          <span>
            <p>
              Description:
              {details.short_description}
            </p>
          </span>
        </div>

        <div className="game-link">
          <span>
            <a target="_blank" href={details.game_url} rel="noreferrer">
              <button type="button">
                Game Link

              </button>

            </a>
          </span>
        </div>

      </div>

    </section>
  );
};

export default Details;
