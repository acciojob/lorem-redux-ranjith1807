import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from './redux/actions';
import './App.css';

function App() {
  const dispatch = useDispatch();
  
  const loading = useSelector((state) => state.loading);
  const data = useSelector((state) => state.data);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div className="container">
      {/* 1. Header remains strictly visible across all states (loading, error, and success) */}
      <header className="header">
        <h1>A short Naration of Lorem Ipsum</h1>
        <h4>
          Below Contains A title and Body gotten from a random API, Please take your time to Review
        </h4>
      </header>

      {/* 2. Isolate status messages so they don't interfere with the post grid assertions */}
      {loading && <div className="status-message">Loading...</div>}
      
      {error && <div className="status-message error">Error: {error}</div>}

      {/* 3. Render list items with standard h4 and p tags as expected by the test suite */}
      {!loading && !error && data && data.length > 0 && (
        <ul className="grid">
          {data.map((item, index) => (
            <li className="card" key={item.id || index}>
              <h4 className="title">Title : {item.title}</h4>
              <p className="body">Body : {item.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;