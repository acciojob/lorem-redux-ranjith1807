import axios from "axios";
export const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

export const fetchData = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_DATA_REQUEST });
    return axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setTimeout(() => {
          dispatch({ type: FETCH_DATA_SUCCESS, payload: response.data });
        }, 600);
      })
      .catch((error) => {
        dispatch({ type: FETCH_DATA_FAILURE, payload: error.message });
      });
  };
};