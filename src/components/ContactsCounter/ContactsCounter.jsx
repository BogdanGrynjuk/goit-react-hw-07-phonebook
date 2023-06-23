import { useSelector } from "react-redux";
import { selectContacts, selectVisibleContacts } from "redux/selectors";
import { Counter } from "./ContactsCounter.styled";


export const ContactsCounter = () => {

const countTotalContacts = useSelector(selectContacts).length;
const countVisibleContacts = useSelector(selectVisibleContacts).length;

  return (    
    <Counter>
      {countTotalContacts === countVisibleContacts
        ? `Total contacts: ${countTotalContacts}`
        : `Found contacts: ${countVisibleContacts}/${countTotalContacts}`
      }      
    </Counter>
  );
};


export default ContactsCounter;