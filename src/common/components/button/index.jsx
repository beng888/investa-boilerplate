import Button from '@mui/material/Button';
import React from 'react';

const btnStyle = {
  p: '15px 16px',
  width: '100%',
  //   maxWidth: [null, 384],
  maxWidth: {
    sm: 384,
  },
  fontWeight: 400,
};

function Btn() {
  return (
    <Button variant="contained" sx={{ ...btnStyle }}>
      View Policy
    </Button>
  );
}

export default Btn;
