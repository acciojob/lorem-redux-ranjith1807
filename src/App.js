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
      <header className="header">
        <h1>A short Naration of Lorem Ipsum</h1>
        <h4>
          Below Contains A title and Body gotten from<br/>
          a random API, Please take your time to Review
        </h4>
      </header>

      {/* Displays loading state */}
      {loading && <h4 className="status-message">Loading...</h4>}
      {error && <h4 className="status-message error">Error: {error}</h4>}

      {/* Displays posts with the exact CSS classes Cypress wants */}
      {!loading && !error && data && data.length > 0 && (
        <ul className="grid">
          {data.slice(0, 6).map((item, index) => (
            <li className="card" key={item.id || index}>
              <h4 className="title"><strong>Title </strong>:{item.title}</h4>
              <p className="body"><strong>Body </strong>:{item.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;