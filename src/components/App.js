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
        <h1>A short Naration of Lorem Ipsum</h1>
        <p className="subtitle">
          Below Contains A title and Body gotten from <br />
          a random API, Please take your time to Review
        </p>
      </header>

      {status === 'loading' && <p className="status-msg">Loading data...</p>}
      {status === 'failed' && <p className="status-msg error">Error: {error}</p>}

      {status === 'succeeded' && (
        <div className="card-grid">
          {data.map((item) => (
            <div key={item.id} className="card">
              <p><strong>Title: </strong>{item.title}</p>
              <p><strong>Body: </strong>{item.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;