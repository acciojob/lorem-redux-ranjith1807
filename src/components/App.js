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
        {/* FIX: Cypress explicitly wants an h4 here */}
        <h4>A short Naration of Lorem Ipsum</h4>
        <p className="subtitle">
          Below Contains A title and Body gotten from <br />
          a random API, Please take your time to Review
        </p>
      </header>

      {/* FIX: Cypress explicitly wants an h4 for the loading state */}
      {status === 'loading' && <h4>Loading...</h4>}
      
      {status === 'failed' && <h4 className="error">Error: {error}</h4>}

      {status === 'succeeded' && (
        <ul className="card-grid" style={{ listStyleType: 'none', padding: 0 }}>
          {data.map((item, index) => (
            <li key={index} className="card">
              {/* FIX: Cypress explicitly wants className="title" and className="body" */}
              <p className="title"><strong>Title: </strong>{item.title}</p>
              <p className="body"><strong>Body: </strong>{item.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;