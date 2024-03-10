export const getProcessedNlpQuery = async (query: string): Promise<{ result: string }> => {
  const response = await fetch('/api/nlp/processQuery', {
    method: 'POST',
    body: JSON.stringify({ query }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();

  return data;
};
