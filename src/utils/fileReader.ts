import fs from 'fs/promises';

export default async function fileReader() {
  try {
    const mainRoute = './public/assets/';
    const fileName = 'roles.md';

    const content = await fs.readFile(`${mainRoute}${fileName}`, 'utf-8');
    return content;
  } catch (error) {
    console.error('Error reading markdown file:', error);
  }
}
