import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectContacts } from "redux/selectors";
import { addContact } from "redux/operations";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Formik } from 'formik';

import { Button, Field, Form, Icon, Label } from './ContactForm.styled';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);  

  const handleSubmit = (value, { resetForm }) => {
    const isDuplicate = contacts.find(contact => contact.name.toLowerCase() === value.name.toLowerCase());
    
    if (isDuplicate) {
      Notify.failure(`${value.name} is already in contacts`);
      resetForm();
      return;
    }

    dispatch(addContact(value));
    Notify.success(`${value.name} successfully added to contact list`);
    resetForm();
  };  

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={handleSubmit}
    >
      <Form>
        <Label>
          Name
          <Field id="name"
            type="text"
            name="name"
            placeholder="Please enter a name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required>
          </Field>
        </Label>

        <Label>
          Phone number
          <Field
            id="number"
            type="tel"
            name="number"
            placeholder="Please enter a phone number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        
        <Button type="submit">
          Add new contact
          <Icon />
        </Button>
        
        
      </Form>
    </Formik>
  );
};



export default ContactForm;