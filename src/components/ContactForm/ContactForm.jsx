import { nanoid } from 'nanoid';
import styles from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';
import { useState } from 'react';
import { addContacts } from 'redux/contacts/operations';

const ContactForm = () => {
  const nameId = nanoid();
  const numberId = nanoid();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const onSubmit = async e => {
    e.preventDefault();

    const isInContacts = contacts.some(
      contact => contact.name.toLowerCase().trim() === name.toLowerCase().trim()
    );
    if (isInContacts) {
      alert(`${name} is already in your phonebook!`);
      return;
    }
    dispatch(addContacts({ name, number }));
    setName('');
    setNumber('');
  };
  const onChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  return (
    <form className={styles.form} type="submit" onSubmit={onSubmit}>
      <label className={styles.label} htmlFor={nameId}>
        Name
        <input
          className={styles.input}
          onChange={onChange}
          value={name}
          id="nameId"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={styles.label} htmlFor={numberId}>
        Number
        <input
          className={styles.input}
          value={number}
          onChange={onChange}
          id="numberId"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <button className={styles.button} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
