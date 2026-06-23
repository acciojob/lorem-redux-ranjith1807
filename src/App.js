import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './redux/actions';
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  
  // Extract state individually to avoid unnecessary re-renders
  const loading = useSelector((state) => state.loading);
  const posts = useSelector((state) => state.posts);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className="container">
      <header className="header">
        <h1>A short Naration of Lorem Ipsum</h1>
        <p>Below Contains A title and Body gotten from<br/>a random API, Please take your time to Review</p>
      </header>

      {loading && <p className="loading-state">Loading posts...</p>}
      
      {error && <p className="error-state">Error: {error}</p>}

      {!loading && !error && posts.length > 0 && (
        <div className="grid-container">
          {posts.map((post) => (
            <div key={post.id} className="card">
              <p><strong>Title:</strong> {post.title}</p>
              <p><strong>Body:</strong> {post.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;