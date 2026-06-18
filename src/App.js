import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from './actions';
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  
  const loading = useSelector((state) => state.loading);
  const data = useSelector((state) => state.data);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div className="app-container">
      <header className="header-section">
        {/* Fixed spelling to match Cypress exactly */}
        <h1>A short Naration of Lorem Ipsum</h1>
        <p>
          Below Contains A title and Body gotten from<br />
          a random API, Please take your time to Review
        </p>
      </header>
      
      {/* Cypress expects an h4 for the loading state */}
      {loading && <h4>Loading...</h4>}
      
      {error && <p className="error">Error: {error}</p>}
      
      {data && !loading && (
        /* Cypress expects list items, so we wrap them in a ul */
        <ul className="grid-container">
          {Array.isArray(data) ? (
            data.map((item, index) => (
              /* Cypress expects the post container to be an li element */
              <li className="card" key={index}>
                {/* Cypress expects the title to be an h4 element */}
                <h4>{item.title}</h4>
                <p>{item.body}</p>
              </li>
            ))
          ) : (
            <li className="card">
              <h4>{data.title}</h4>
              <p>{data.body}</p>
            </li>
          )}
        </ul>
      )}
    </div>
  );
};

export default App;