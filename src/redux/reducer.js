export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export const fetchData = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_DATA_REQUEST });

    // Reverted back to the original URL so Cypress can properly intercept/mock it
    fetch('https://api.lorem.com/ipsum')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Safe guard to ensure data is an array
        const payloadData = Array.isArray(data) ? data : [];
        dispatch({ type: FETCH_DATA_SUCCESS, payload: payloadData });
      })
      .catch((error) => {
        dispatch({ type: FETCH_DATA_FAILURE, payload: error.message });
      });
  };
};