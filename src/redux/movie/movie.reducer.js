import { ActionTypes } from "./action-types";

const INITITAL_STATE = {
  movies: [],
};

const movieReducer = (state = INITITAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.SET_MOVIES:
      return {
        ...state,
        movies: [...state.movies, ...action.payload],
      };

    default:
      return state;
  }
};

export default movieReducer;
