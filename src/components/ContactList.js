import React from 'react';

const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          <p>Name: {contact.name}</p>
          <p>Phone: {contact.number}</p>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
