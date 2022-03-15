import Button from '@mui/material/Button';
import PropTypes from 'prop-types';

const style = {
  p: '15px 16px',
  width: '100%',
  maxWidth: 384,
  fontWeight: 400,
};

export default function NextButton({ onClick, children, variant, ...props }) {
  return (
    <Button onClick={onClick} variant={variant} sx={{ ...style, ...props }}>
      {children}
    </Button>
  );
}

NextButton.defaultProps = {
  variant: 'contained',
};

NextButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
};
