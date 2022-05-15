import React from 'react';
import Form from './Form/Form'
import ContactList from './List/List'
import Filter from './Filter/Filter'
import styles from './Form/Form.module.css';
export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  }
submitHandler = data =>{
  const flag = this.state.contacts.find(contact => contact.name === data.name)
  this.setState(prevState =>{
   return  flag?alert(`${data.name} is alredy in contacts`): {contacts :[data, ...prevState.contacts]}
    
     
  })
}
changeFilter = e=>{
  this.setState({filter: e.currentTarget.value})
}
deleteContacts = id =>{
  this.setState(prevState =>({
    contacts: prevState.contacts.filter(contact => contact.id !== id)
  }));
}


    render(){
      const normalizedFilter= this.state.filter.toLowerCase()
      const visibleContacts = this.state.contacts.filter(contact =>contact.name.toLowerCase().includes(normalizedFilter) )
    return (<div className={styles.wrap}>
      <h2>Phonebook</h2>
      <Form onSubmit={this.submitHandler} />
      <h2>Contacts</h2>
      <ContactList contacts={visibleContacts} deleteContacts={this.deleteContacts}>
      <Filter value={this.state.filter} onChange ={this.changeFilter}/>
      </ContactList>
    </div>)
    
  }

}