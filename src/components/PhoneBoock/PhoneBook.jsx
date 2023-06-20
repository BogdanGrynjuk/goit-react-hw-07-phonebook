import PropTypes from "prop-types";
import { Title, Wrapper } from "./PhoneBook.styled";

const PhoneBook = ({ children }) => {
  return (
    <Wrapper>
      <Title>Phone Boock</Title>
      {children}
    </Wrapper>
  );
};

PhoneBook.propTypes = {
  children: PropTypes.node.isRequired
};

export default PhoneBook;