import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import styles from './Form.module.css';
import React, { Component } from 'react';
export class Form extends Component {
  state = {
    name: '',
    number: '',
  };
  static propTypes = {
    onSubmitForm: PropTypes.func,
    contacts: PropTypes.arrayOf(PropTypes.object)
};

  handelNameChange = e => {
    this.setState({ name: e.currentTarget.value });
  };

  handelNumberChange = e => {
    this.setState({ number: e.currentTarget.value });
  };
  reset = () => {
    this.setState({ name: '', number: '' });
};

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
        console.log(!this.state.name, !this.state.number);

    if (!this.state.name || !this.state.number) {
    alert('You have not entered all contact details');
    return;
    }
    const sameName = this.props.contacts.find(arr => arr.name === name);
    if (sameName) {
        return alert(`${name} is already in contacts`);
        }
        const nameObj = {
        id: nanoid(),
        name: name,
        number: number,
        };
        this.props.onSubmit(nameObj);
        this.reset();
    };

  
  render() {
    return (
      <>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <label className={styles.formLabel}>
            {' '}
            Name
            <input
              className={styles.input}
              onChange={this.handelNameChange}
              value={this.state.name}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label className={styles.formLabel}>
            {' '}
            Number
            <input
              className={styles.input}
              onChange={this.handelNumberChange}
              value={this.state.number}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button type="submit"> add contact</button>
        </form>
      </>
    );
  }
}
Form.propTypes = {
  onSubmit: PropTypes.func,
};
export default Form;