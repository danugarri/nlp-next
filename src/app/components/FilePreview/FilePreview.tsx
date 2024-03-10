import React, { useEffect, useState } from 'react';
import { DisplayPreviewProps } from './filePreview.types';
import { getFilePreview } from '@/app/services/filePreview';
import BasicModal from '../BasicModal';

const FilePreview = ({ displayPreview }: DisplayPreviewProps) => {
  const [fileContent, setFileContent] = useState<string>('');
  useEffect(() => {
    const updateFileContent = async () => {
      const content = await getFilePreview();
      setFileContent(content.result);
    };
    updateFileContent();
  }, [displayPreview]);

  return displayPreview ? <BasicModal fileContent={fileContent} /> : <></>;
};

export default FilePreview;
