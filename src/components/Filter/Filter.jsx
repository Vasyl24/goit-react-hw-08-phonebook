import css from './Filter.module.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { getFilter } from '../../redux/contacts/selectors';
import { filterContact } from 'redux/contacts/filterSlice';

export function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleFilter = evt => dispatch(filterContact(evt.currentTarget.value));

  return (
    <label className={css.formlabel}>
      <span className={css.formtitle}>Find contacts by name:</span>
      <input
        className={css.forminput}
        type="text"
        name="filter"
        value={filter}
        onChange={handleFilter}
        pattern="^[a-zA-Zа-яА-Я\]+(([' \\-\][a-zA-Zа-яА-Я \])?[a-zA-Zа-яА-Я\]*)*$"
      />
    </label>
  );
}

Filter.propTypes = {
  onFilter: PropTypes.func,
  state: PropTypes.string,
};
