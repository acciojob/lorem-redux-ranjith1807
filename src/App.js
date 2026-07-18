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

  return (
    <div className="app-container">
      <h1>A short Naration of Lorem Ipsum</h1>
      
      {/* 1) Updated to use "froma" without a space to match the exact Cypress assertion */}
      <h4>
        Below Contains A title and Body gotten froma random API, Please take your time to Review
      </h4>

      {loading && <p className="status-text">Loading...</p>}

      {error && <p className="status-text error">Error: {error}</p>}

      {!loading && !error && (
        <ul className="post-grid">
          {posts.map((post, index) => (
            <li key={index} className="post-card">
              {/* 2) Added className="title" and className="body" to satisfy Cypress queries */}
              <p className="title">
                <strong>Title :</strong> {post.title}
              </p>
              <p className="body">
                <strong>Body :</strong> {post.body}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;