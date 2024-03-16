import React, { useEffect, useState } from 'react';
import { DisplayPreviewProps } from './filePreview.types';
import BasicModal from '../BasicModal';
import Snackbar from '../Snackbar';
import mdFetcher from '@/app/services/mdFetcher';
import { FetchingError } from '@/app/services/errors';

const FilePreview = ({
  displayPreview,
  updateDisplayPreview,
}: DisplayPreviewProps) => {
  const [fileContent, setFileContent] = useState<string>();
  const [error, setError] = useState<FetchingError>();

  const clearError = () => setError(undefined);

  useEffect(() => {
    const updateFileContent = async () => {
      try {
        const content = await mdFetcher();
        setFileContent(content);
      } catch (e) {
        if (e instanceof FetchingError) {
          setError(e);
          updateDisplayPreview();
        }
      }
    };
    if (displayPreview) {
      if (!fileContent) updateFileContent();
    }
  }, [displayPreview, fileContent, updateDisplayPreview]);

  return displayPreview && fileContent ? (
    <BasicModal
      fileContent={fileContent}
      updateDisplayPreview={updateDisplayPreview}
    />
  ) : error ? (
    <Snackbar message={error.message} clearError={clearError} />
  ) : (
    <></>
  );
};

export default FilePreview;
