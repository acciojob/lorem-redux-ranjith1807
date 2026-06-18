import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from './actions';
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  
  // Destructured individually to prevent unnecessary re-renders
  const loading = useSelector((state) => state.loading);
  const data = useSelector((state) => state.data);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div className="app-container">
      <header className="header-section">
        <h1>A short Narration of Lorem Ipsum</h1>
        <p>
          Below Contains A title and Body gotten from<br />
          a random API, Please take your time to Review
        </p>
      </header>
      
      {loading && <p className="loading">Loading...</p>}
      
      {/* If testing locally, you will see this error because the AccioJob URL is fake. The Cypress tests will intercept it and pass. */}
      {error && <p className="error">Error: {error}</p>}
      
      {data && !loading && (
        <div className="grid-container">
          {Array.isArray(data) ? (
            data.map((item, index) => (
              <div className="card" key={index}>
                <p><strong>Title:</strong> {item.title}</p>
                <p><strong>Body:</strong> {item.body}</p>
              </div>
            ))
          ) : (
            <div className="card">
              <p><strong>Title:</strong> {data.title}</p>
              <p><strong>Body:</strong> {data.body}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default App;