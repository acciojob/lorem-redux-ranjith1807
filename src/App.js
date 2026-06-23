import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './redux/actions';
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  
  const loading = useSelector((state) => state.loading);
  const posts = useSelector((state) => state.posts);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const showLoading = loading || (posts.length === 0 && !error);

  return (
    <div className="container">
      
      <h1>A short Naration of Lorem Ipsum</h1>
      
      <p>Below Contains A title and Body gotten from<br/>a random API, Please take your time to Review</p>

      {showLoading && <div className="loading">Loading...</div>}
      
      {error && <div className="error">Error: {error}</div>}

      {!showLoading && posts.length > 0 && (
        <div className="grid-container">
          {posts.map((post) => (
            <div key={post.id} className="card">
              <p><strong>Title :</strong>{post.title}</p>
              <p><strong>Body :</strong>{post.body}</p>
            </div>
          ))}
        </div>
      )}
      
    </div>
  );
};

export default App;