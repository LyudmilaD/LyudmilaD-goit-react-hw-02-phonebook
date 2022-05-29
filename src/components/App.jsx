import React, { Component } from 'react';
import Form from './Form/Form';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import styles from './Form/Form.module.css';
export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: 'aaa',
  };
  submitHandler = obj => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, obj],
    }));
  };
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  changeFilter = event => {
    this.setState({ filter: event.target.value });
  };
  deleteContacts = contactId => {
    const state = this.state;
    const visibleContacts = state.contacts.filter(
      contact => contact.id !== contactId
    );
    this.setState({ contacts: visibleContacts });
    return visibleContacts;
  };

  render() {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );


    return (
      <div className={styles.wrap}>
        <h2>Phonebook</h2>
        <Form onSubmit={this.submitHandler} contacts={contacts} />
        <h2>Contacts</h2>
        <ContactList
          contacts={visibleContacts}
          deleteContacts={this.deleteContacts}
        >
          <Filter value={this.state.filter} onChange={this.changeFilter} />
        </ContactList>
      </div>
    );
  }
}
export default App;
