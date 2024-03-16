import { mdUrl } from '../../public/consts/consts';
export default async function mdFetcher() {
  try {
    const response = await fetch(mdUrl);
    const markdownText = await response.text();
    return markdownText;
  } catch (error) {
    console.error('Error fetching Markdown:', error);
  }
}
