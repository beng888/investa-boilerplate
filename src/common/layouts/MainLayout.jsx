import { Header } from '@common/modules';
import { Stack } from '@mui/material';
import PropTypes from 'prop-types'; // ES6

export default function MainLayout({ children }) {
  return (
    <Stack minHeight="100vh">
      <Header />
      {children}
    </Stack>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
