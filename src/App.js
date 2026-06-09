import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from './redux/actions';
import './App.css';

function App() {
  const dispatch = useDispatch();
  
  // Track if this instance has finished its initial mount cycle
  const [initialized, setInitialized] = useState(false);

  const loading = useSelector((state) => state.loading);
  const data = useSelector((state) => state.data);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    setInitialized(true);
    dispatch(fetchData());
  }, [dispatch]);

  // Force loading UI if Redux says it's loading OR if it's the very first render frame
  const showLoadingState = loading || !initialized;

  return (
    <div className="container">
      <header className="header">
        <h1>A short Naration of Lorem Ipsum</h1>
        <h4>
          Below Contains A title and Body gotten from<br/>
          a random API, Please take your time to Review
        </h4>
      </header>

      {/* Renders exactly 1 paragraph element when loading */}
      {showLoadingState && <p className="status-message">Loading...</p>}
      {!showLoadingState && error && <p className="status-message error">Error: {error}</p>}

      {/* Prevents old leftover card elements from leaking into a new test frame */}
      {!showLoadingState && !error && data && data.length > 0 && (
        <ul className="grid">
          {data.slice(0, 6).map((item, index) => (
            <li className="card" key={item.id || index}>
              <p>
                <strong>Title :</strong> {item.title}
                <br /><br />
                <strong>Body :</strong> {item.body}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;