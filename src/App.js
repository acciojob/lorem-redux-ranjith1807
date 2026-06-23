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
    <div className="container">
      
      {/* Test 1 & 3 explicitly require this to be an <h1> */}
      <h1>A short Naration of Lorem Ipsum</h1>
      
      {/* Subtitle */}
      <p>Below Contains A title and Body gotten from a random API, Please take your time to Review</p>

      {/* Loading State */}
      {loading && <p>Loading...</p>}
      
      {/* Error State */}
      {error && <p>Error: {error}</p>}

      {/* Posts Grid - Content MUST be in <p> tags per functional requirements */}
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