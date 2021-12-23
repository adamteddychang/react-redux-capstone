import React from 'react';
import PropTypes from 'prop-types';
import './games.css';

function Game(props) {
  const { game } = props;
  return (
    <div className="gameContainer">
      <img className="image" src={game.thumbnail} alt="a game thumbnail" />
      <div className="details">
        <h2 className="title">{game.title}</h2>
        <p className="genre">
          Genre:
          {game.genre}
        </p>
        <p className="releaseDate">{game.release_Date}</p>
        <p className="developer">
          Developer:
          {game.developer}
        </p>
      </div>
    </div>
  );
}

Game.propTypes = {
  game: PropTypes.shape({
    thumbnail: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    developer: PropTypes.string.isRequired,
  }).isRequired,
};

export default Game;
