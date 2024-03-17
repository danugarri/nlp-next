'use client';
import SearchForm from '@/app/components/SearchForm';
import { useCallback, useState } from 'react';
import { getProcessedNlpQuery } from './services/nlp';
import FeedBack from './components/FeedBack/FeedBack';
import FilePreview from './components/FilePreview/';
import Spinner from './components/Spinner/';
import { FetchingError } from './services/errors';
import Snackbar from './components/Snackbar';

export default function Home() {
  const [query, setQuery] = useState('');
  const [queryResponse, setQueryResponse] = useState('');
  const [isQuerying, setIsQuerying] = useState(false);
  const [displayPreview, setDisplayPreview] = useState(false);
  const [error, setError] = useState<FetchingError>();
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setQuery(value);
  };
  const handleSubmit = async (
    e:
      | React.FormEvent<HTMLFormElement>
      | React.KeyboardEvent<HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    setIsQuerying(true);
    try {
      const response = await getProcessedNlpQuery(query);
      setQueryResponse(response.result);
    } catch (error) {
      if (error instanceof FetchingError) {
        console.log(error);
        setError(error);
      }
    } finally {
      setIsQuerying(false);
    }
  };
  const clearQuery = () => {
    setQuery('');
    setQueryResponse('');
    setError(undefined);
  };
  const updateDisplayPreview = useCallback(
    () => setDisplayPreview(!displayPreview),
    [displayPreview]
  );

  return (
    <>
      <SearchForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        query={query}
        updateDisplayPreview={updateDisplayPreview}
      />
      {isQuerying ? (
        <Spinner />
      ) : error ? (
        <Snackbar clearError={clearQuery} message={error.message} />
      ) : (
        <FeedBack queryResponse={queryResponse} clearQuery={clearQuery} />
      )}
      <FilePreview
        displayPreview={displayPreview}
        updateDisplayPreview={updateDisplayPreview}
      />
    </>
  );
}
