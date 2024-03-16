import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { BasicModalProps } from './basicModal.types';
import ReactMarkdown from '../ReactMarkdown/ReactMarkdown';
import styles from './BasicModal.module.css';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60vw',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  padding: '6rem',
  wordBreak: 'break-all',
  overflowY: 'scroll',
  maxHeight: '60vh',
};

export default function BasicModal({ fileContent = '', updateDisplayPreview }: BasicModalProps) {
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
        <Box sx={style} className={styles['modal-container']}>
          <ReactMarkdown markdownUrl={fileContent} />
          <Button
            variant="contained"
            color="error"
            style={{ position: 'absolute', right: '20px', top: '20px' }}
            onClick={handleClose}
          >
            X
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
