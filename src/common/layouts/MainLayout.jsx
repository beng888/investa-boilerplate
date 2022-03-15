import { DialogModal } from '@common/components/modals';
import { Header } from '@common/modules';
import { Stack } from '@mui/material';
import PropTypes from 'prop-types';

export default function MainLayout({ children }) {
  return (
    <Stack minHeight="100vh">
      <Header />
      <DialogModal />
      {children}
    </Stack>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
