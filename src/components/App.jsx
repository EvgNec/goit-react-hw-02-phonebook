import React from 'react';
import { nanoid } from 'nanoid'
// import Section from './Section';
// import Statistics from './Statistics';
// import FeedbackOptions from './FeedbackOptions';
// import Notification from './Notification/Notification';

export class App extends React.Component {
  state = {
  contacts: [],
    name: '',
  id: '',
}
  // this.state.id = nanoid();

  render() {
   
    return (
      <>
        <h1>Phonebook</h1>
        <form>
     <input
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required />
               <input
  type="tel"
  name="phone"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required />
           <button type="submit"></button>
        </form>


      </>
    );
  }
}
