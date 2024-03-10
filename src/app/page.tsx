'use client';
import SearchForm from '@/app/components/SearchForm';
import { useState } from 'react';
import { getProcessedNlpQuery } from './services/nlp';
import FeedBack from './components/FeedBack/FeedBack';
import FilePreview from './components/FilePreview/FilePreview';

export default function Home() {
  const [query, setQuery] = useState('');
  const [queryResponse, setQueryResponse] = useState('');
  const [displayPreview, setDisplayPreview] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setQuery(value);
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await getProcessedNlpQuery(query);
    setQueryResponse(response.result);
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
      <FeedBack queryResponse={queryResponse} />
      <FilePreview displayPreview={displayPreview} />
    </>
  );
}
