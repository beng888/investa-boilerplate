import { Box } from '@mui/material';
import PropTypes from 'prop-types'; // ES6
import Header from '../header';
import Progress from '../progress';

function Layout({ children }) {
  return (
    <Box height="200vh" bgcolor="gray">
      {/* <Box display="flex" justifyContent="center" alignItems="center" height="200vh" bgcolor="gray"> */}
      <Header />
      <Progress />
      {children}
    </Box>
  );
}

export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
