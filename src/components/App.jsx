import Layout from './Layout';
import PhoneBook from './PhoneBoock';
import ContactForm from './ContactForm';
import Contacts from './Contacts';
import Filter from './Filter';
import ContactList from './ContactList';

import { useDispatch, useSelector } from 'react-redux';

import { getError, getIsLoading } from 'redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';


const App = () => {
  const dispatch = useDispatch();  

  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      <PhoneBook>
        <ContactForm/>
        <Contacts>
          {isLoading && !error && <b>Request in progress...</b>}
          <Filter/>      
          <ContactList/>
        </Contacts>
      </PhoneBook>      
    </Layout>
  );
};

export default App;