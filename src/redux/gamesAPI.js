const ADD_GAMES_LIST_TO_STORE = 'ADD_GAMES_LIST_TO_STORE';

const url = 'https://free-to-play-games-database.p.rapidapi.com/api/games';

const initialState = [];

const addGamesListToStore = (payload) => ({
  type: ADD_GAMES_LIST_TO_STORE,
  payload,
});

const getGameList = () =>(dispatch) => {
  fetch(url, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
		"x-rapidapi-key": "b2ff50aa96mshb062ddb7e5817c1p1cea6djsna1e9d633dcca"
	}
}).then((response) => response.json())
.then((games) => {
  dispatch(addGamesListToStore(games));
});
}

const gamesReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_GAMES_LIST_TO_STORE:      
      return action.payload.reverse();
      default: return state;
  }

  
}

export{gamesReducer as default, getGameList}