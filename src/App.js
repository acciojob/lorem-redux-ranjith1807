import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "./redux/actions";
import "./App.css";

function App() {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.loading);
  const data = useSelector((state) => state.data);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    // Small delay ensures the initial "loading: true" state paints to the DOM first
    const timer = setTimeout(() => {
      dispatch(fetchData());
    }, 50);

    return () => clearTimeout(timer);
  }, [dispatch]);

  return (
    <div className="container">
      <header className="header">
        <h1>A short Naration of Lorem Ipsum</h1>
        {/* Exact text and line break alignment from the reference GIF */}
        <h4>
          Below Contains A title and Body gotten from
          <br />
          a random API, Please take your time to Review
        </h4>
      </header>

      {/* Renders loading element */}
      {loading && <h4 className="status-message">Loading...</h4>}
      {error && <h4 className="status-message error">Error: {error}</h4>}

      {/* Renders cards matching the precise text-spacing specifications */}
      {!loading && !error && data && data.length > 0 && (
        <ul className="grid">
          {data.map((item, index) => (
            <li className="card" key={item.id || index}>
              <h4 className="title">Title: {item.title}</h4>
              <p className="body">Body: {item.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
