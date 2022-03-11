import Button from '@mui/material/Button';
import PropTypes from 'prop-types';

const style = {
  p: '15px 16px',
  width: '100%',
  maxWidth: 384,
  fontWeight: 400,
};

export default function NextButton({ children, ...props }) {
  return (
    <Button variant="contained" sx={{ ...style }} {...props}>
      {children}
    </Button>
  );
}

NextButton.propTypes = {
  children: PropTypes.node.isRequired,
};
