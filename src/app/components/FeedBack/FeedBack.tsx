import React from 'react';
import styles from './FeedBack.module.css';

const FeedBack = ({ queryResponse }: { queryResponse: string }) => {
  return queryResponse.length > 0 ? <div className={styles['feedback-container']}>{queryResponse}</div> : <></>;
};

export default FeedBack;
