import { useDispatch } from "react-redux";
import { updateFilter } from "redux/filterSlice";
import { Field, Label } from "./Filter.styled";

const Filter = () => {  
  const dispatch = useDispatch();
    
  const handleChange = (event) => {
    dispatch(updateFilter(event.target.value));
  };

  return (
    <Label>
      Find contacts by name
      <Field
        placeholder="Please enter a name"        
        onChange={handleChange}             
      />
    </Label>
  );
};

export default Filter;