import React, { useEffect, useState } from 'react';
import { DisplayPreviewProps } from './filePreview.types';
import BasicModal from '../BasicModal';
import mdFetcher from '@/utils/mdFetcher';
import { FetchingError } from '@/app/services/errors';

const FilePreview = ({
  displayPreview,
  updateDisplayPreview,
}: DisplayPreviewProps) => {
  const [fileContent, setFileContent] = useState<string>('');
  useEffect(() => {
    const updateFileContent = async () => {
      try {
        const content = await mdFetcher();
        setFileContent(content);
      } catch (e) {
        if (e instanceof FetchingError) setFileContent(e.message);
      }
    };
    updateFileContent();
  }, []);

  return displayPreview ? (
    <BasicModal
      fileContent={fileContent}
      updateDisplayPreview={updateDisplayPreview}
    />
  ) : (
    <></>
  );
};

export default FilePreview;
