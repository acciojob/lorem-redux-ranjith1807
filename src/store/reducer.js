import {
  FETCH_LOREM_REQUEST,
  FETCH_LOREM_SUCCESS,
  FETCH_LOREM_FAILURE,
} from "./actions";

const initialState = {
  loading: true,
  data: null,
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LOREM_REQUEST:
      return { loading: true, data: null, error: "" };
    case FETCH_LOREM_SUCCESS:
      return { loading: false, data: action.payload, error: "" };
    case FETCH_LOREM_FAILURE:
      return { loading: false, data: null, error: action.payload };
    default:
      return state;
  }
};

export default reducer;