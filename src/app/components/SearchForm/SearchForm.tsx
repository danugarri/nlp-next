'use client';
import { getProcessedNlpQuery } from '@/app/services/nlp';
import React, { FormEvent, useState } from 'react';
import styles from './SearchForm.module.css';

const SearchForm = () => {
  const [query, setQuery] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getProcessedNlpQuery(query);
  };
  return (
    <form onSubmit={handleSubmit} className={styles['form-container']}>
      <label htmlFor="nlp-input">Ask a question</label>
      <input type="text" onChange={handleChange} value={query} />
      <input type="submit" />
    </form>
  );
};

export default SearchForm;
