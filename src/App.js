import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from './redux/actions';
import './styles/App.css';

function App() {
  const dispatch = useDispatch();
  
  // Extracting state from Redux store
  // Extracting specific state slices from Redux store
  const loading = useSelector((state) => state.loading);
  const data = useSelector((state) => state.data);
  const error = useSelector((state) => state.error);
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div className="container">
      <header className="header">
        <h1>A short Naration of Lorem Ipsum</h1>
        <p className="subtitle">
          Below Contains A title and Body gotten from<br/>
          a random API, Please take your time to Review
        </p>
      </header>

      {/* Loading & Error States */}
      {loading && <p className="status-message">Loading data, please wait...</p>}
      {error && <p className="status-message error">Error: {error}</p>}

      {/* Data Display */}
      {!loading && !error && data.length > 0 && (
        <div className="grid">
          {data.slice(0, 6).map((item, index) => ( // Sliced to 6 to match the preview image layout
            <div className="card" key={item.id || index}>
              <p><strong>Title:</strong> {item.title}</p>
              <p><strong>Body:</strong> {item.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;