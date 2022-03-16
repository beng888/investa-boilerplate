import Banner from '@common/components/banner';
import { DialogModal } from '@common/components/modals';
import { Header } from '@common/modules';
import { Stack } from '@mui/material';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

export default function MainLayout({ children }) {
  const router = useRouter();

  return (
    <Stack minHeight="100vh">
      <Header />
      {router.pathname === '/cash_for_income_loss' && <Banner />}
      <DialogModal />
      {children}
    </Stack>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
