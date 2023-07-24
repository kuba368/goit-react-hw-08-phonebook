import React from 'react';
import styles from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import { removeContacts } from 'redux/contacts/operations';

const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  return (
    <ul className={styles.wrapper}>
      {contacts.map(contact => (
        <li className={styles.text} key={contact.id}>
          {`${contact.name}' : ' ${contact.number}`}
          {
            <button
              className={styles.button}
              type="button"
              onClick={() => dispatch(removeContacts(contact.id))}
            >
              DELETE
            </button>
          }
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
