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
      {/* 1) Always render the header so layout tests never fail on missing elements */}
      <header className="header">
        <h1>A short Naration of Lorem Ipsum</h1>
        <h4>
          Below Contains A title and Body gotten froma random API, Please take your time to Review
        </h4>
      </header>

      {/* 2) Render a SINGLE loading element when loading is true */}
      {loading && <h4 className="status-message">Loading...</h4>}

      {error && <h4 className="status-message error">Error: {error}</h4>}

      {/* 3) Render the fetched posts only after loading completes */}
      {!loading && !error && data && data.length > 0 && (
        <ul className="grid">
          {data.map((item, index) => (
            <li className="card" key={item.id || index}>
              <p className="title"><strong>Title :</strong>{item.title}</p>
              <p className="body"><strong>Body :</strong>{item.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;