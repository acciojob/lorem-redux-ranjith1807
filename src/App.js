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
      
      {/* 1. Intro text must be an h4 to pass Test 1 */}
      <h4>A short Naration of Lorem Ipsum</h4>
      <p>Below Contains A title and Body gotten from a random API, Please take your time to Review</p>

      {/* 2. Loading state must be an h4 to pass Test 3 */}
      {loading && <h4>Loading...</h4>}
      
      {error && <h4>Error: {error}</h4>}

      {/* 3. The list items must be li to pass Test 2 and 4 */}
      {!loading && !error && posts.length > 0 && (
        <ul className="grid-container" style={{ listStyleType: 'none', padding: 0 }}>
          {posts.map((post) => (
            <li key={post.id} className="card">
              <p><strong>Title:</strong> {post.title}</p>
              <p><strong>Body:</strong> {post.body}</p>
            </li>
          ))}
        </ul>
      )}
      
    </div>
  );
};

export default App;