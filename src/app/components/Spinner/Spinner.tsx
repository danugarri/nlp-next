import React from 'react';
import { CircularProgress } from '@mui/material';

const Spinner = () => {
  return (
    <CircularProgress
      sx={{ color: '#000', position: 'absolute', top: '50vh', left: '50vw' }}
    />
  );
};

export default Spinner;
