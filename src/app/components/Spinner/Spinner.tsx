import React from 'react';
import { CircularProgress } from '@mui/material';

const Spinner = () => {
  return (
    <CircularProgress
      color="warning"
      sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
    />
  );
};

export default Spinner;