import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import styles from './Form.module.css';
import React from 'react';
export class Form extends React.Component {
  state = {
    name: '',
    id: nanoid(),
    number: '',
  };

  handelNameChange = e => {
    this.setState({ name: e.currentTarget.value });
  };

  handelNumberChange = e => {
    this.setState({ number: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };
  reset = () => {
    this.setState({ name: '', id: '', number: '' });
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