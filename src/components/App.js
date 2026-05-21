import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLoremData } from '../redux/loremSlice';
import '../styles/App.css'; 

function App() {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.lorem);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchLoremData());
    }
  }, [status, dispatch]);

  return (
    <div className="container">
      <header className="header">
        {/* FIX: Changed back to h1 to satisfy Cypress intro text test */}
        <h1>A short Naration of Lorem Ipsum</h1>
        <p className="subtitle">
          Below Contains A title and Body gotten from <br />
          a random API, Please take your time to Review
        </p>
      </header>

      {status === 'loading' && <h4 className="status-msg">Loading...</h4>}
      
      {status === 'failed' && <h4 className="status-msg error">Error: {error}</h4>}

      {/* SUCCESS: This passed the test! Do not change this section */}
      {status === 'succeeded' && (
        <ul className="card-grid" style={{ listStyleType: 'none', padding: 0 }}>
          {data.map((item) => (
            <li key={item.id} className="card">
              <p><strong>Title: </strong>{item.title}</p>
              <p><strong>Body: </strong>{item.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;