import { Box } from '@mui/material';
import PropTypes from 'prop-types'; // ES6

function Layout({ children }) {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      {children}
    </Box>
  );
}

export default Layout;

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
