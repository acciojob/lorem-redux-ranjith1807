// 1. Action Types
export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAILURE = 'FETCH_POSTS_FAILURE';

// 2. Action Creators
export const fetchPostsRequest = () => ({
  type: FETCH_POSTS_REQUEST,
});

export const fetchPostsSuccess = (posts) => ({
  type: FETCH_POSTS_SUCCESS,
  payload: posts,
});

export const fetchPostsFailure = (error) => ({
  type: FETCH_POSTS_FAILURE,
  payload: error,
});

// 3. Async Thunk Action (Using Promises for Node 16 compatibility)
export const fetchPosts = () => {
  return (dispatch) => {
    // Dispatch loading state
    dispatch(fetchPostsRequest());
    
    // Fetch data
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Dispatch success state with data
        dispatch(fetchPostsSuccess(data));
      })
      .catch((error) => {
        // Dispatch error state
        dispatch(fetchPostsFailure(error.message));
      });
  };
};