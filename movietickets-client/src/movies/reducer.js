import { GET_MOVIES, GET_MOVIE, RESET_MOVIE, UPDATE_CART } from './actions';

const initialState = {
  movies: [],
  moviesLoaded: false,
  movie: [],
  movieLoaded: false,
  cartTotal: 0,
};

export default function (state = initialState, action) {
  const { type, data } = action;
  switch (type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: data,
        moviesLoaded: true,
      };
    case GET_MOVIE:
      return {
        ...state,
        movie: data,
        movieLoaded: true,
      };
    case RESET_MOVIE:
      return {
        ...state,
        movie: {},
        movieLoaded: false,
      };
    case UPDATE_CART:
      return {
        ...state,
        cartTotal: data,
      };
    default:
      return state;
  }
}
