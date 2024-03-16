import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const MarkdownRenderer = ({ markdownUrl }: { markdownUrl: string }) => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        const response = await fetch('/assets/react.md');
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
