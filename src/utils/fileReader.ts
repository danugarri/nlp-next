import fs from 'fs/promises';
import { FileReaderError } from '@/app/services/errors';

export default async function fileReader() {
  try {
    const filePath = process.env.MDFILE_PATH!;
    const content = await fs.readFile(filePath, 'utf-8');
    return content;
  } catch (error) {
    throw new FileReaderError('Error when reading the react.md file');
  }
}
