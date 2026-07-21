import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLorem } from "../store/actions";

const App = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchLorem());
  }, [dispatch]);

  return (
    <div>
      <h1>A short Naration of Lorem Ipsum</h1>

      {loading ? (
        <h4>Loading...</h4>
      ) : (
        <h4>
          Below Contains A title and Body gotten froma random API, Please take your time to Review
        </h4>
      )}

      {error && <h4>Error: {error}</h4>}

      <ul>
        {loading ? (
          <li>
            <p className="id">Loading id</p>
            <p className="title">Title :Loading tiltes</p>
            <p className="body">Body :Loading body</p>
          </li>
        ) : (
          data && (
            <li>
              <p className="id">{data.id}</p>
              <p className="title">Title :{data.title}</p>
              <p className="body">Body :{data.body}</p>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default App;