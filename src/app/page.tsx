'use client';
import SearchForm from '@/app/components/SearchForm';
import { useState } from 'react';
import { getProcessedNlpQuery } from './services/nlp';

export default function Home() {
  const [query, setQuery] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getProcessedNlpQuery(query);
  };
  return <SearchForm handleChange={handleChange} handleSubmit={handleSubmit} query={query} />;
}
