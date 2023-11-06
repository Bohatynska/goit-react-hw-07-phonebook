import React from 'react';
import { useSelector } from 'react-redux';
import { selectFilteredContact } from 'redux/selectors';
import { ContactWrap, ContactUl } from './ContactList.styled';
import ContactListItem from 'Components/ContactItem/ContactItem';
export const ContactsList = () => {
  const filteredContacts = useSelector(selectFilteredContact);
  return (
    <ContactWrap>
      <ContactUl>
        {filteredContacts.map(({ id, name, phone }) => (
          <ContactListItem key={id} name={name} phone={phone} id={id} />
        ))}
      </ContactUl>
    </ContactWrap>
  );
};

export default ContactsList;
