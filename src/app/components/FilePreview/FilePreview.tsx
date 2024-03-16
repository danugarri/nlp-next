import React, { useEffect, useState } from 'react';
import { DisplayPreviewProps } from './filePreview.types';
import BasicModal from '../BasicModal';
import mdFetcher from '@/utils/mdFetcher';
import { FetchingError } from '@/app/services/errors';
import Snackbar from '../Snackbar';

const FilePreview = ({
  displayPreview,
  updateDisplayPreview,
}: DisplayPreviewProps) => {
  const [fileContent, setFileContent] = useState<string>();
  const [error, setError] = useState<FetchingError>();

  useEffect(() => {
    const updateFileContent = async () => {
      try {
        const content = await mdFetcher();
        setFileContent(content);
      } catch (e) {
        if (e instanceof FetchingError) {
          setError(e);
        }
      }
    };
    if (displayPreview) {
      if (!fileContent) updateFileContent();
    }
  }, [displayPreview, fileContent]);

  return displayPreview ? (
    fileContent ? (
      <BasicModal
        fileContent={fileContent}
        updateDisplayPreview={updateDisplayPreview}
      />
    ) : error ? (
      <Snackbar message={error.message} />
    ) : (
      <></>
    )
  ) : (
    <></>
  );
};

export default FilePreview;
