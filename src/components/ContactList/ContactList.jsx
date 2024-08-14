

import React from 'react';
import s from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";

const ContactList = () => {

const selectError = (state) => state.contacts.error;

  const filteredContacts = useSelector(selectFilteredContacts);
    const error = useSelector(selectError);

 if (error) {
    return <div>{error}</div>;
  }

  return (
    <ul className={s.list}>
      {filteredContacts.map((contact) => (
        <li key={contact.id}>
          <Contact
            name={contact.name}
            number={contact.number}
            id={contact.id}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;