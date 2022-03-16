import Button from '@mui/material/Button';
import Link from 'next/link';
import PropTypes from 'prop-types';

const style = {
  p: '15px 16px',
  width: '100%',
  maxWidth: 384,
  fontWeight: [400, 700],
  fontSize: [14, 18],
  lineHeight: ['16px', '24px'],
};

export default function NextButton({ onClick, children, variant, href, ...props }) {
  if (href)
    return (
      <Link href={href}>
        <a>
          <Button onClick={onClick} variant={variant} sx={{ ...style, ...props }}>
            {children}
          </Button>
        </a>
      </Link>
    );

  return (
    <Button onClick={onClick} variant={variant} sx={{ ...style, ...props }}>
      {children}
    </Button>
  );
}

NextButton.defaultProps = {
  onClick: () => {},
  href: null,
  variant: 'contained',
};

NextButton.propTypes = {
  onClick: PropTypes.func,
  href: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Object)]),
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
};
