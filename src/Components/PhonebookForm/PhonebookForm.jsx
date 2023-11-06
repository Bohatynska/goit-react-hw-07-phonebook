import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';

import {
  FormWrap,
  Form,
  FormLabel,
  FormInput,
  FormButton,
} from 'Components/PhonebookForm/PhonebookForm.styled';

function PhonebookForm() {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const { name, number } = form.elements;

    for (const contact of contacts) {
      if (contact.name.toLowerCase() === name.value.toLowerCase()) {
        alert(`${name.value} is already a contact`);
        return;
      }
    }
    dispatch(addContact({ name: name.value, phone: number.value }));
    form.reset();
  };
  return (
    <FormWrap>
      <Form onSubmit={handleSubmit}>
        <FormLabel>
          Name
          <FormInput type="text" name="name" />
        </FormLabel>
        <FormLabel>
          Phone number
          <FormInput type="tel" name="number" />
        </FormLabel>
        <FormButton type="submit">Add contact</FormButton>
      </Form>
    </FormWrap>
  );
}

export default PhonebookForm;
