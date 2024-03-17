import { FetchingError } from '../errors';

export const getProcessedNlpQuery = async (
  query: string
): Promise<{ result: string }> => {
  try {
    const response = await fetch('/api/nlp/processQuery', {
      method: 'POST',
      body: JSON.stringify({ query }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.status === 200) {
      const data = await response.json();
      return data;
    } else {
      throw new FetchingError('Error when fetching nlp response');
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};
