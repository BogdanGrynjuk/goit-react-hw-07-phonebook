import PropTypes from "prop-types";
import { Wrapper } from "./Layout.styled";

const Layout = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;