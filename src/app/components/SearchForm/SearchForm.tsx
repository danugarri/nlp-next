'use client';
import React, { useRef } from 'react';
import styles from './SearchForm.module.css';
import { SearchFormProps } from './searchForm.types';
import useAutosizeTextArea from '@/hooks/useAutosizeTextArea';

const SearchForm = ({ handleSubmit, handleChange, updateDisplayPreview, query }: SearchFormProps) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  useAutosizeTextArea(textAreaRef.current, query);
  const enableQuery = query.length > 2;

  return (
    <form onSubmit={handleSubmit} className={styles['search-form-container']}>
      <label htmlFor="nlp-input">Ask a question</label>
      <textarea
        ref={textAreaRef}
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
