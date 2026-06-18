export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";

export const fetchData = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_START });
    
    // Using the official test API URL
    fetch("https://api.lorem.com/ipsum")
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: FETCH_SUCCESS, payload: data });
      })
      .catch((error) => {
        dispatch({ type: FETCH_ERROR, payload: error.message });
      });
  };
};