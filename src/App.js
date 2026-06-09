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

      {loading && <p className="status-message">Loading...</p>}
      {error && <p className="status-message error">Error: {error}</p>}

      {!loading && !error && data && data.length > 0 && (
        <ul className="grid">
          {data.slice(0, 6).map((item, index) => (
            <li className="card" key={item.id || index}>
              {/* Only 'Title :' is wrapped inside <strong> */}
              <p className="title"><strong>Title :</strong>{item.title}</p>
              
              {/* Only 'Body :' is wrapped inside <strong> */}
              <p className="body"><strong>Body :</strong>{item.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;