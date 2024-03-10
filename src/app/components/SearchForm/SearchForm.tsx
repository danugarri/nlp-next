'use client';
import React, { useRef } from 'react';
import styles from './SearchForm.module.css';
import { SearchFormProps } from './searchForm.types';
import useAutosizeTextArea from '@/hooks/useAutosizeTextArea';

const SearchForm = ({ handleSubmit, handleChange, query }: SearchFormProps) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  useAutosizeTextArea(textAreaRef.current, query);

  return (
    <form onSubmit={handleSubmit} className={styles['search-form-container']}>
      <label htmlFor="nlp-input">Ask a question</label>
      <textarea
        ref={textAreaRef}
        onChange={handleChange}
        value={query}
        className={styles['search-form-input-container']}
      />
      <input type="submit" value="Send" className={styles['search-form-submit']} />
    </form>
  );
};

export default SearchForm;
