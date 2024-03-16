import React from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import styles from './ReactMarkdown.module.css';

const ReactMarkdown = ({ markdownUrl }: { markdownUrl: string }) => {
  return (
    <div className={styles['markdown-container']}>
      <Markdown remarkPlugins={[remarkGfm]}>{markdownUrl}</Markdown>
    </div>
  );
};

export default ReactMarkdown;
