import { useState } from 'react';
import css from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/operations';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleNameChange = evt => {
    const { value } = evt.currentTarget;
    setName(value);
  };

  const handleNumberChange = evt => {
    const { value } = evt.currentTarget;
    setNumber(value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const newContact = {
      name,
      number,
    };
    dispatch(addContact(newContact));
    reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.formlabel}>
        <span className={css.formtitle}>Name</span>
        <input
          className={css.forminput}
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.formlabel}>
        <span className={css.formtitle}>Number</span>
        <input
          className={css.forminput}
          type="tel"
          name="number"
          value={number}
          onChange={handleNumberChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={css.btn} type="submit">
        Add contact
      </button>
    </form>
  );
};
