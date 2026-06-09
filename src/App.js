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

      {/* Exactly 1 paragraph element for the loading state */}
      {loading && <p className="status-message">Loading...</p>}
      {error && <p className="status-message error">Error: {error}</p>}

      {/* Exactly 1 paragraph element inside each card item */}
      {!loading && !error && data && data.length > 0 && (
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