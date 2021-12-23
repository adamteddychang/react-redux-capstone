const ADD_GAME_DETAILS = 'ADD_GAME_DETAILS';
const CLEAN_DETAILS = 'CLEAN_DETAILS';

const url = 'https://free-to-play-games-database.p.rapidapi.com/api/game';
const initialState = {};

const addGameDetails = (payload) => ({
  type: ADD_GAME_DETAILS,
  payload,
});

const cleanDetails = () => ({
  type: CLEAN_DETAILS,
});

const getGameDetails = (id) => (dispatch) => {
  fetch(`${url}?id=${id}`, {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
      'x-rapidapi-key': 'b2ff50aa96mshb062ddb7e5817c1p1cea6djsna1e9d633dcca',
    },
  }).then((response) => response.json())
    .then((game) => {
      dispatch(addGameDetails(game));
    });
};

const detailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_GAME_DETAILS:
      return action.payload;
    case CLEAN_DETAILS:
      return initialState;
    default: return state;
  }
};

export { detailsReducer as default, getGameDetails, cleanDetails };
