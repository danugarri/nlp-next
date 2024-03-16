import React, { useEffect, useState } from 'react';
import { DisplayPreviewProps } from './filePreview.types';
import BasicModal from '../BasicModal';
import { getMDFilePreview } from '@/app/services/getMdFilePreview';
import mdFetcher from '@/utils/mdFetcher';

const FilePreview = ({ displayPreview, updateDisplayPreview }: DisplayPreviewProps) => {
  const [fileContent, setFileContent] = useState<string>('');
  useEffect(() => {
    const updateFileContent = async () => {
      try {
        const content = await mdFetcher();
        setFileContent(content);
      } catch (e) {
        setFileContent('');
        throw new Error('Error when getting preview');
      }
    };
    updateFileContent();
  }, []);

  return displayPreview ? <BasicModal fileContent={fileContent} updateDisplayPreview={updateDisplayPreview} /> : <></>;
};

export default FilePreview;
