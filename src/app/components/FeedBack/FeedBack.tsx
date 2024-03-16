import React from 'react';
import styles from './FeedBack.module.css';
import { Button } from '@mui/material';
import { FeedBackProps } from './feedBack.types';

const FeedBack = ({ queryResponse, clearQuery }: FeedBackProps) => {
  return queryResponse.length > 0 ? (
    <section className={styles['feedback-container']}>
      <div className={styles['feedback-text']}>{queryResponse}</div>
      <Button
        onClick={clearQuery}
        variant="contained"
        color="error"
        style={{ height: 'fit-content' }}
      >
        X
      </Button>
    </section>
  ) : (
    <></>
  );
};

export default FeedBack;
