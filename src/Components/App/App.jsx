import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import PhonebookForm from '../PhonebookForm/PhonebookForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import Message from '../Message/Message';
import { Container, Wrap } from 'Components/App/App.styled';

export default function App() {
  const dispatch = useDispatch();
  const items = useSelector(selectContacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Container>
      <Wrap>
        <h1>Phonebook</h1>
        <PhonebookForm />
        <h2>Contacts</h2>
        <Filter />
        {isLoading && <Message text={'Loading your contacts, please wait..'} />}
        {error && <Message text={error} />}
        {!!items.length && <ContactList />}
        <ContactList />
      </Wrap>
    </Container>
  );
}
