export const getMDFilePreview = async (): Promise<{ result: string }> => {
  const response = await fetch('/api/mdPreview/', {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();

  return data;
};
