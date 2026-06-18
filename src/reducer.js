import { FETCH_START, FETCH_SUCCESS, FETCH_ERROR } from './actions';

const initialState = {
  loading: true, // <-- Changed to true so it loads by default!
  data: null,
  error: null
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return { ...state, loading: true, error: null };
    case FETCH_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case FETCH_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default rootReducer;