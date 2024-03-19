import path from 'path';
import fs from 'fs/promises';
import { fileName, mainRoute } from '../../public/consts';
import { FileReaderError } from '@/app/services/errors';

export default async function fileReader() {
  try {
    // production tests
    const filePath = path.join(process.cwd(), mainRoute, fileName);
    const content = await fs.readFile(filePath, 'utf-8');
    return content;
  } catch (error) {
    throw new FileReaderError('Error when reading the react.md file');
  }
}
