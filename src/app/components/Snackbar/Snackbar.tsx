import React, { SyntheticEvent, useEffect, useState } from 'react';
import MuiSnackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { SnackbarProps } from './snackbar.types';

export default function Snackbar({ message }: SnackbarProps) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };
  useEffect(() => {
    if (message) handleClick();
  }, [message]);

  const handleClose = (_event?: SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <MuiSnackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="error"
          variant="filled"
          sx={{ width: '100%' }}
        >
          {message}
        </Alert>
      </MuiSnackbar>
    </div>
  );
}
