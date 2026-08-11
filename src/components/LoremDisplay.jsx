import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLoremData } from '../store/loremSlice';

const LoremDisplay = () => {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector((state) => state.lorem);

  useEffect(() => {
    dispatch(fetchLoremData());
  }, [dispatch]);

  if (isLoading) {
    return <p data-testid="loading-state">Loading...</p>;
  }

  if (error) {
    return <p className="error-message">Error: {error}</p>;
  }

  return (
    <article className="lorem-container">
      <h2>{data.Title}</h2>
      <p>{data.Body}</p>
    </article>
  );
};

export default LoremDisplay;