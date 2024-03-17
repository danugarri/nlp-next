import fs from 'fs/promises';
import { fileName, mainRoute } from '../../public/consts';
import { FileReaderError } from '@/app/services/errors';

export default async function fileReader() {
  try {
    const content = await fs.readFile(`${mainRoute}${fileName}`, 'utf-8');
    return content;
  } catch (error) {
    throw new FileReaderError('Error when reading the react.md file');
  }
}
