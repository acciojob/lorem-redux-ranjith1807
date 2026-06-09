import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from './redux/actions';
import './App.css';

function App() {
  const dispatch = useDispatch();
  
  // Extracting specific state slices from Redux store
  const loading = useSelector((state) => state.loading);
  const data = useSelector((state) => state.data);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div className="container">
      {/* Cypress Test 1: Expects intro text in an h4 */}
      <header className="header">
        <h1>A short Naration of Lorem Ipsum</h1>
        <h4>
          Below Contains A title and Body gotten from<br/>
          a random API, Please take your time to Review
        </h4>
      </header>

      {/* Cypress Test 3: Expects loading state in an h4 */}
      {loading && <h4 className="status-message">Loading...</h4>}
      {error && <h4 className="status-message error">Error: {error}</h4>}

      {/* Cypress Test 2 & 4: Expects data in 'li' tags and likely 'h4' tags for the titles */}
      {!loading && !error && data.length > 0 && (
        <ul className="grid">
          {data.slice(0, 6).map((item, index) => (
            <li className="card" key={item.id || index}>
              <h4>Title :{item.title}</h4>
              <p>Body :{item.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;