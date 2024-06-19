import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../action/actions';
import { RootState } from '../store/store';

const Filter = () => {
  const filter = useSelector((state: RootState) => state.filter);
  const dispatch = useDispatch();

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <select value={filter} onChange={handleFilterChange}>
      <option value="ALL">All</option>
      <option value="BORROWED">Borrowed</option>
      <option value="RETURNED">Returned</option>
    </select>
  );
};

export default Filter;
