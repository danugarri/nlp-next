import React from 'react';
import styles from './FeedBack.module.css';

const FeedBack = ({ queryResponse }: { queryResponse: string }) => {
  return <div className={styles['feedback-container']}>{queryResponse}</div>;
};

export default FeedBack;
