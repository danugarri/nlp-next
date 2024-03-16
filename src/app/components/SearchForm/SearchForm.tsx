'use client';
import React, { useRef } from 'react';
import styles from './SearchForm.module.css';
import { SearchFormProps } from './searchForm.types';
import useAutosizeTextArea from '@/hooks/useAutosizeTextArea';

const SearchForm = ({ handleSubmit, handleChange, updateDisplayPreview, query }: SearchFormProps) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  useAutosizeTextArea(textAreaRef.current, query);
  const enableQuery = query.length > 2;
  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter') {
      handleSubmit(event);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles['search-form-container']}>
      <label htmlFor="nlp-input" className={styles['search-form-nlp-input']}>
        Ask a question about React 19
      </label>
      <textarea
        id="nlp-input"
        autoFocus
        ref={textAreaRef}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        value={query}
        className={styles['search-form-input-container']}
      />
      <section className={styles['search-form-buttons']}>
        <input disabled={!enableQuery} type="submit" value="Send" className={styles['search-form-submit']} />
        <input
          onClick={updateDisplayPreview}
          type="button"
          value="View file"
          className={styles['search-form-submit']}
        />
      </section>
    </form>
  );
};

export default SearchForm;
