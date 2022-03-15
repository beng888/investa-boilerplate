import { Button, Box } from '@mui/material';
import PropTypes from 'prop-types';

const buttonStyle = {
  height: 56,
  width: 180,
  fontSize: 18,
  lineHeight: 24,
  fontWeight: 600,
};

export default function YesNoButton({ onClickYes, onClickNo, ...props }) {
  return (
    <Box sx={{ display: 'flex', gap: '24px', justifyContent: 'center', ...props }}>
      <Button sx={{ ...buttonStyle }} onClick={onClickYes} variant="contained">
        Yes
      </Button>
      <Button sx={{ ...buttonStyle }} onClick={onClickNo} variant="contained">
        No
      </Button>
    </Box>
  );
}

YesNoButton.propTypes = {
  onClickYes: PropTypes.func.isRequired,
  onClickNo: PropTypes.func.isRequired,
};
