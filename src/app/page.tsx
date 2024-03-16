'use client';
import SearchForm from '@/app/components/SearchForm';
import { useState } from 'react';
import { getProcessedNlpQuery } from './services/nlp';
import FeedBack from './components/FeedBack/FeedBack';
import FilePreview from './components/FilePreview/';
import Spinner from './components/Spinner/';

export default function Home() {
  const [query, setQuery] = useState('');
  const [queryResponse, setQueryResponse] = useState('');
  const [isQuerying, setIsQuerying] = useState(false);
  const [displayPreview, setDisplayPreview] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setQuery(value);
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement> | React.KeyboardEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setIsQuerying(true);
    try {
      const response = await getProcessedNlpQuery(query);
      setQueryResponse(response.result);
    } catch (e) {
      throw new Error('Error when querying');
    } finally {
      setIsQuerying(false);
    }
  };
  const clearQuery = () => {
    setQuery('');
    setQueryResponse('');
  };
  const updateDisplayPreview = () => setDisplayPreview(!displayPreview);

  return (
    <>
      <SearchForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        query={query}
        updateDisplayPreview={updateDisplayPreview}
      />
      {isQuerying ? <Spinner /> : <FeedBack queryResponse={queryResponse} clearQuery={clearQuery} />}
      <FilePreview displayPreview={displayPreview} updateDisplayPreview={updateDisplayPreview} />
    </>
  );
}
