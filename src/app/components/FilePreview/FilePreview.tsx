import React, { useEffect, useState } from 'react';
import { DisplayPreviewProps } from './filePreview.types';
import BasicModal from '../BasicModal';
import { getMDFilePreview } from '@/app/services/getMdFilePreview';

const FilePreview = ({ displayPreview, updateDisplayPreview }: DisplayPreviewProps) => {
  const [fileContent, setFileContent] = useState<string>('');
  useEffect(() => {
    const updateFileContent = async () => {
      try {
        const content = await getMDFilePreview();
        setFileContent(content.result);
      } catch (e) {
        throw new Error('Error when getting preview');
      }
    };
    updateFileContent();
  }, []);

  return displayPreview ? <BasicModal fileContent={fileContent} updateDisplayPreview={updateDisplayPreview} /> : <></>;
};

export default FilePreview;
