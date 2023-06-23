import { useDispatch, useSelector } from "react-redux";
import { updateFilter } from "redux/filterSlice";
import { Field, Label } from "./Filter.styled";
import { useEffect, useRef } from "react";
import { selectContacts } from "redux/selectors";

const Filter = () => {  
  const dispatch = useDispatch();
    
  const handleChange = (event) => {
    dispatch(updateFilter(event.target.value));
  };

  const refFilter = useRef();
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    refFilter.current.value = ""
  }, [contacts]);

  return (
    <Label>
      Find contacts by name
      <Field
        ref={refFilter}
        placeholder="Please enter a name"        
        onChange={handleChange}             
      />
    </Label>
  );
};

export default Filter;