export const getFilePreview = async () => {
  const response = await fetch('/api/filePreview/', {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();

  return data;
};
