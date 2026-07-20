import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchLorem } from '../redux/actions';

const LoremContent = () => {
  const dispatch = useDispatch();
  const { loading, title, body, error } = useSelector(state => state);

  useEffect(() => {
    dispatch(fetchLorem());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  );
};

export default LoremContent;