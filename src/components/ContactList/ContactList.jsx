import { useSelector } from "react-redux";
import { selectVisibleContacts } from "redux/selectors";
import ContactItem from '../ContactItem';

import { Contacts } from './ContactList.styled';

const ContactList = () => {
  
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <Contacts>
      {visibleContacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
        />
      ))}
    </Contacts>
  );
};

export default ContactList;