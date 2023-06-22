import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';

import { selectError, selectIsLoading } from 'redux/selectors';

import Layout from './Layout';
import PhoneBook from './PhoneBoock';
import ContactForm from './ContactForm';
import Contacts from './Contacts';
import Filter from './Filter';
import Loader from "./Loader";
import ContactList from './ContactList';




const App = () => {
  const dispatch = useDispatch();  

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);  

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      <PhoneBook>
        <ContactForm/>
        <Contacts>
          {isLoading && !error && <Loader/>}
          <Filter/>      
          <ContactList/>
        </Contacts>
      </PhoneBook>      
    </Layout>
  );
};

export default App;