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
    <div className="App">
      <h1>A short Naration of Lorem Ipsum</h1>
      <p>Below Contains A title and Body gotten froma random API, Please take your time to Review</p>
      
      {/* Cypress expects to see this while loading */}
      {loading && <h4 className="loading">Loading...</h4>}
      
      {error && <p className="error">Error: {error}</p>}
      
      {data && !loading && (
        <ul className="grid-container">
          {Array.isArray(data) ? (
            data.map((item, index) => (
              <li className="card" key={index}>
                {/* Notice the exact formatting with no space after the colon */}
                <h4 className="title">Title :{item.title}</h4>
                <p className="body">Body :{item.body}</p>
              </li>
            ))
          ) : (
            <li className="card">
              <h4 className="title">Title :{data.title}</h4>
              <p className="body">Body :{data.body}</p>
            </li>
          )}
        </ul>
      )}
    </div>
  );
};

export default App;