import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import { deleteContact } from 'redux/operations';
import {
  ContactItem,
  Name,
  Number,
  DeleteButton,
} from 'Components/ContactItem/ContactItem.styled';

const ContactListItem = ({ name, phone, id }) => {
  const dispatch = useDispatch();
  const onDelete = () => dispatch(deleteContact(id));
  return (
    <ContactItem>
      <Name>{name}:</Name>
      <Number>{phone}</Number>
      <DeleteButton type="button" onClick={onDelete}>
        Delete contact
      </DeleteButton>
    </ContactItem>
  );
};
export default ContactListItem;
