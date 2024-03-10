import React, { useEffect, useState } from 'react';
import { DisplayPreviewProps } from './filePreview.types';
import { getFilePreview } from '@/app/services/filePreview';

const FilePreview = ({ displayPreview }: DisplayPreviewProps) => {
  const [fileContent, setFileContent] = useState<string | null>(null);
  useEffect(() => {
    const updateFileContent = async () => {
      const content = await getFilePreview();
      setFileContent(content.result);
    };
    updateFileContent();
  }, [displayPreview]);

  return displayPreview ? <code>{fileContent}</code> : <></>;
};

export default FilePreview;
