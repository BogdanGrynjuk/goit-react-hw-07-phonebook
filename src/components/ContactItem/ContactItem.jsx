import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteContact } from "redux/operations";
import { Button, Contact, Icon, Text } from "./ContactItem.styled";

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));
  
  return (
    <Contact key={id}>
      <Text>{name}: {number}</Text>
      <Button type="button" onClick={handleDelete}>
        Delete
        <Icon/>
      </Button>
    </Contact>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,  
};

export default ContactItem;