import fs from 'fs/promises';
import { fileName, mainRoute } from '../../public/consts';

export default async function fileReader() {
  try {
    const content = await fs.readFile(`${mainRoute}${fileName}`, 'utf-8');
    return content;
  } catch (error) {
    console.error('Error reading file:', error);
  }
}
