    // Note: If api.lorem.com/ipsum is failing, swap it with 'https://jsonplaceholder.typicode.com/posts'
   export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const fetchData = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_DATA_REQUEST });

    // Delay the network resolution slightly so Cypress can catch the loading state
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          const payloadData = Array.isArray(data) ? data : [];
          dispatch({ type: FETCH_DATA_SUCCESS, payload: payloadData });
        })
        .catch((error) => {
          dispatch({ type: FETCH_DATA_FAILURE, payload: error.message });
        });
    }, 150); // 150ms is the sweet spot for automated test runners
  };
};