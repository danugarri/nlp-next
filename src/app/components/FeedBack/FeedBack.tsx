import React from 'react';
import styles from './FeedBack.module.css';
import { Button } from '@mui/material';

const FeedBack = ({ queryResponse }: { queryResponse: string }) => {
  return queryResponse.length > 0 ? (
    <section className={styles['feedback-container']}>
      <div className={styles['feedback-text']}>{queryResponse}</div>
      <Button variant="contained" color="error" style={{ height: 'fit-content' }}>
        X
      </Button>
    </section>
  ) : (
    <></>
  );
};

export default FeedBack;
