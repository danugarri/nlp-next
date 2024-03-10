import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { BasicModalProps } from './basicModal.types';
import styles from './BasicModal.module.css';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60vw',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  padding: '3rem',
};

export default function BasicModal({ fileContent, updateDisplayPreview }: BasicModalProps) {
  const [open, setOpen] = useState(true);
  const handleClose = () => {
    setOpen(false);
    updateDisplayPreview();
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {fileContent}
          <Button color="error" style={{ position: 'absolute', right: '1px', top: '2px' }} onClick={handleClose}>
            X
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
