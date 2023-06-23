import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';

import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';

import Layout from './Layout';
import PhoneBook from './PhoneBoock';
import ContactForm from './ContactForm';
import Contacts from './Contacts';
import Filter from './Filter';
import Loader from "./Loader";
import ContactList from './ContactList';
import Message from "./Message";
import ContactsCounter from "./ContactsCounter";

const App = () => {
  const dispatch = useDispatch();  

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const countContacts = useSelector(selectContacts).length;

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      <PhoneBook>
        <ContactForm />
        <Contacts>
          {isLoading && <Loader />}
          {error && <Message message={error} />}
          {!isLoading && countContacts > 1 && <Filter />}
          {!isLoading && countContacts > 0 &&
            <>
              <ContactsCounter />
              <ContactList />
            </>
          }
          {!isLoading && countContacts === 0 &&
            <Message message="There are no contacts in your phone book" />
          }
          {/* <Filter />
          <ContactList /> */}
        </Contacts>
      </PhoneBook>
    </Layout>
  );
};

export default App;