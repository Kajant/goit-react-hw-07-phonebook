import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/contactsSlice';
import { selectFilter } from '../../redux/Selectors';
import css from './Filter.module.css';

const Filter = () => {
    const dispatch = useDispatch();
  
    const filter = useSelector(selectFilter);
  
    const handleFilterChange = e => {
      dispatch(setFilter(e.target.value));
    };
    return (
        <div className={css.filter}>
            <p className={css.info}>Find contacts by name</p>
            <input className={css.input} type="text" name="filter" placeholder="name" value={filter} onChange={handleFilterChange} />
        </div>
    )
}


export default Filter;