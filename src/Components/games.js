import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getGameList } from '../redux/gamesAPI';
import { getGameDetails } from '../redux/gameDetails';
import Game from './game';

const Games = () => {
  const games = useSelector((state) => state.games);
  
  
  const [searchResult, setSearchResult] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (games.length === 0) 
    dispatch(getGameList());
  }, [dispatch,games.length]);

  const handleSearch = (event) => {
    event.preventDefault();
    const result = games.filter((game) => {
      const input = event.target.value.toLowerCase().trim();
      const title = game.title.toLowerCase().trim();
      const releaseDate = game.release_date.toLowerCase().trim();
      const developer = game.developer.toLowerCase().trim();
      const genre = game.genre.toLowerCase().trim();
      return title.includes(input) || releaseDate.includes(input)
            || genre.includes(input) || developer.includes(input);
    });
    setSearchResult(result);
  };

  const onGameClick = (id) => {
    dispatch(getGameDetails(id));
  };

  return(
  
  <div className="games-container">
  <div className="intro">
    <div className="introSearch">
      <h1>Free Games Database</h1>
      <p>Everything free game you need, is one search away</p>
      <p>You can search by Title,Realease Date,Genre,Developer</p>
      <form>
      <input type="text" className="searchBar" placeholder="Search A Game" onChange={handleSearch} />
        </form>
    </div>
  </div>
  <div className="gamesContainer">
        {
          (searchResult === null)
            ? games.map((game) => (
              <NavLink key={game.id} to="/details" onClick={() => onGameClick(game.id)}>
                <Game game={game} />
              </NavLink>
            ))
            : searchResult.map((game) => (
              <NavLink key={game.id} to="/details" onClick={() => onGameClick(game.id)}>
                <Game game={game} />
              </NavLink>
            ))
        }
      </div>


  
</div>


)
};


export default Games;