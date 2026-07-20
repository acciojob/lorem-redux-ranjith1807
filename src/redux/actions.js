// Action Types
export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

// Async Thunk Action
export const fetchData = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_DATA_REQUEST });

    // Add delay to simulate network latency
    setTimeout(() => {
      fetch('http://jsonplaceholder.typicode.com/posts')
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          dispatch({ type: FETCH_DATA_SUCCESS, payload: data });
        })
        .catch((error) => {
          dispatch({ type: FETCH_DATA_FAILURE, payload: error.message });
        });
    }, 1000); // 1 second delay
  };
};