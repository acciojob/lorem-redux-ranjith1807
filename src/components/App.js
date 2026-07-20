import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchLorem } from "../loremSlice.js";

export default function App() {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state) => state.lorem);

  useEffect(() => {
    dispatch(fetchLorem());
  }, [dispatch]);

  return (
    <div style={{ maxWidth: 800, margin: "2rem auto", padding: "0 1rem" }}>
      <h1>Lorem Redux</h1>

      {loading && <div role="status">Loading lorem content…</div>}

      {error && (
        <div role="alert" style={{ color: "crimson" }}>
          Error fetching content: {String(error)}
        </div>
      )}

      {data && (
        // Requirement: display the retrieved content inside an HTML <p> element.
        // We show Title and Body concatenated inside a single <p>.
        <section aria-label="lorem-output">
          <p data-testid="lorem-output">
            <strong>{data.title} — </strong>
            {data.body}
          </p>
        </section>
      )}
    </div>
  );
}