import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import ContactList from './ContactList';

const App = () => {
  const [state, setState] = useState({
    contacts: [],
    name: '',
    number: '',
  });

  const handleInputChange = e => {
    const { name, value } = e.target;
    setState(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (state.name.trim() === '' || state.number.trim() === '') {
      alert('Please enter valid name and number.');
      return;
    }

    const newContact = {
      id: nanoid(),
      name: state.name.trim(),
      number: state.number.trim(),
    };

    setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
      name: '',
      number: '',
    }));
  };

  return (
    <div>
      <h1>Contact Book App</h1>
      <ContactForm
        name={state.name}
        number={state.number}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
      <ContactList contacts={state.contacts} />
    </div>
  );
};

export default App;
