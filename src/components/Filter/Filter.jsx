import styles from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filter/filterSlice';
import { selectFilter } from 'redux/filter/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectFilter);

  const onChange = e => {
    const normalizedValue = e.target.value.toLowerCase();
    dispatch(setFilter(normalizedValue));
  };

  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>Find contacts by name: </p>
      <input
        className={styles.input}
        type="text"
        value={value}
        onChange={onChange}
      ></input>
    </div>
  );
};

export default Filter;
