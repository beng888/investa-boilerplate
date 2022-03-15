import { ToggleButton as Toggle, ToggleButtonGroup } from '@mui/material';
import PropTypes from 'prop-types';

const buttonStyle = {
  height: [48, 74],
  flexBasis: [148, 248],
  // width: [148, 248],
  fontSize: [14, 32],
  lineHeight: ['18px', '42px'],
  fontWeight: 600,
  border: `1px solid var(--N999) !important`,
  borderRadius: '4px !important',
  color: 'var(--N999)',
  '&.Mui-selected, &.Mui-selected:hover': {
    color: 'var(--SL-R700)',
    bgcolor: 'var(--SL-R100)',
    border: `1px solid var(--SL-R700) !important`,
  },
};

export default function ToggleButton({ onChange, value, options, ...props }) {
  return (
    <ToggleButtonGroup
      exclusive
      value={value}
      onChange={onChange}
      sx={{ display: 'flex', gap: '16px', maxWidth: '100%', justifyContent: 'center', ...props }}
    >
      {options.map((opt) => {
        const val = opt.value ?? opt;
        return (
          <Toggle key={val} value={val} aria-label={val} sx={{ ...buttonStyle }}>
            {opt.label ?? opt}
          </Toggle>
        );
      })}
    </ToggleButtonGroup>
  );
}

ToggleButton.defaultProps = { value: '' };

ToggleButton.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  options: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string,
        label: PropTypes.string,
      }),
    ),
  ]).isRequired,
};
