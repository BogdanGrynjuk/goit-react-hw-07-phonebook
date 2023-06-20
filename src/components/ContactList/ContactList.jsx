import { useSelector } from "react-redux";
import { getContacts, getFilter } from "redux/selectors";
import ContactItem from '../ContactItem';

import { Contacts } from './ContactList.styled';

const getVisibleContacts = (contacts, filter) => {
  if (filter) {
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  }
  return contacts;
};
const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const visibleContacts = getVisibleContacts(contacts, filter);

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