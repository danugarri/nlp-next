import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { mdUrl } from '../../../../public/consts/consts';

const MarkdownRenderer = ({ markdownUrl = mdUrl }: { markdownUrl?: string }) => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        const response = await fetch(markdownUrl);
        const markdownText = await response.text();
        setMarkdown(markdownText);
      } catch (error) {
        console.error('Error fetching Markdown:', error);
      }
    };

    fetchMarkdown();

    // Cleanup function to avoid memory leaks
    return () => {
      setMarkdown('');
    };
  }, [markdownUrl]);

  return (
    <div className="markdown-container">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
