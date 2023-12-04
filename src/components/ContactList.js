import React, { Component } from 'react';

class ContactList extends Component {
  render() {
    const { contacts } = this.props;
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
  }
}

export default ContactList;
