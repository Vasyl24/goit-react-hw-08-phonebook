import css from './ContactList.module.css';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { getContacts, getFilter } from '../../redux/contacts/selectors';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';

export function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const normFilter = filter.toLocaleLowerCase();

  const findContacts = contacts.items.filter(contact =>
    contact.name.toLowerCase().includes(normFilter)
  );

  // findContacts
  //   .sort((firstContact, secondContact) =>
  //     firstContact.name.localeCompare(secondContact.name)
  //   )
  //   .map(findContact => console.log(findContact));

  const onDeleteContact = contactId => dispatch(deleteContact(contactId));

  return (
    <ul className={css.list}>
      {findContacts
        .sort((firstContact, secondContact) =>
          firstContact.name.localeCompare(secondContact.name)
        )
        .map(findContact => (
          <li className={css.listitem} key={findContact.id}>
            <p className={css.listcontact}>
              {findContact.name}: {findContact.number}
            </p>
            <button
              className={css.btn}
              onClick={() => onDeleteContact(findContact.id)}
              type="button"
            >
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
}

ContactList.propTypes = {
  findContacts: PropTypes.arrayOf(PropTypes.object),
  onDeleteContact: PropTypes.func,
};
