import PropTypes from "prop-types";
import { Wrapper, Title } from "./Contacts.styled";

const Contacts = ({ children }) => {
  return (
    <Wrapper>
      <Title>Contacts</Title>
      {children}
    </Wrapper>
  );
};

Contacts.propTypes = {
  children: PropTypes.node.isRequired
};

export default Contacts;