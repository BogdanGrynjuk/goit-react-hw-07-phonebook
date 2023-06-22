import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';

import { selectError, selectIsLoading, selectVisibleContacts } from 'redux/selectors';

import Layout from './Layout';
import PhoneBook from './PhoneBoock';
import ContactForm from './ContactForm';
import Contacts from './Contacts';
import Filter from './Filter';
import Loader from "./Loader";
import ContactList from './ContactList';
import Message from "./Message";




const App = () => {
  const dispatch = useDispatch();  

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectVisibleContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      <PhoneBook>
        <ContactForm/>
        <Contacts>
          {isLoading  && <Loader />}
          {error && <Message message={error} />}
          {!isLoading && contacts.length > 1 && <Filter />}
          {!isLoading && contacts.length > 0 && <ContactList />} 
          {/* <Filter/>      
          <ContactList/> */}
        </Contacts>
      </PhoneBook>      
    </Layout>
  );
};

export default App;