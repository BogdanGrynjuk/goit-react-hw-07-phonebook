import Layout from './Layout';
import PhoneBook from './PhoneBoock';
import ContactForm from './ContactForm';
import Contacts from './Contacts/';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

const App = () => {

  return (
    <Layout>
      <PhoneBook>
        <ContactForm/>
        <Contacts>
          <Filter/>      
          <ContactList/>
        </Contacts>
      </PhoneBook>      
    </Layout>
  );
};

export default App;