'use client';
import React from 'react';
import styles from './SearchForm.module.css';
import { SearchFormProps } from './searchForm.types';

const SearchForm = ({ handleSubmit, handleChange, query }: SearchFormProps) => {
  return (
    <form onSubmit={handleSubmit} className={styles['form-container']}>
      <label htmlFor="nlp-input">Ask a question</label>
      <input type="text" onChange={handleChange} value={query} className={styles['input-container']} />
      <input type="submit" />
    </form>
  );
};

export default SearchForm;
