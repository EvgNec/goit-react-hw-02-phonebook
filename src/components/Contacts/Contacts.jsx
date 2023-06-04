import { ContactsList, ListItem, DeleteBtn, Title } from './Contacts.styled';
import PropTypes from 'prop-types';

export default function  Contacts ({ contacts, deleteContact }) {
  return (
    <>
      <Title>Contacts</Title>
      <ContactsList>     
        {contacts.length ?
          contacts.map(({ name, number, id }) => (
            <ListItem key={id}>
              <p>
                {name}: {number}
              </p>
              <DeleteBtn onClick={() => deleteContact(id)} type="button">
                Delete
              </DeleteBtn>
            </ListItem>
          ))
          : <p>
            Not contact              
            </p>}
      </ContactsList>
    </>
  );
};

Contacts.propTypes = {
	contacts: PropTypes.array,
	deleteContact: PropTypes.func.isRequired
}
