import axios from 'axios';

export const FETCH_LOREM_REQUEST = 'FETCH_LOREM_REQUEST';
export const FETCH_LOREM_SUCCESS = 'FETCH_LOREM_SUCCESS';
export const FETCH_LOREM_FAILURE = 'FETCH_LOREM_FAILURE';

export const fetchLorem = () => {
  return async (dispatch) => {
    dispatch({ type: FETCH_LOREM_REQUEST });

    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts/');
      const { title, body } = response.data[0];
      

      dispatch({
        type: FETCH_LOREM_SUCCESS,
        payload: { title, body },
      });
    } catch (error) {
      dispatch({
        type: FETCH_LOREM_FAILURE,
        payload: error.message,
      });
    }
  };
};