import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLorem } from "../store/actions";

const App = () => {
  const dispatch = useDispatch();
  const loremState = useSelector((state) => state.lorem ?? state);
  const { loading, data, error } = loremState;

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
          Below Contains A title and Body gotten from a random API, Please take
          your time to Review
        </h4>
      )}

      {error && <h4>Error: {error}</h4>}

      <ul>
        <li>
          <p className="id">{loading ? "Loading id" : data?.id}</p>
          <p className="title">
            Title :{loading ? "Loading title" : data?.title}
          </p>
          <p className="body">
            Body :{loading ? "Loading body" : data?.body}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default App;