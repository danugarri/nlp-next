import { FetchingError } from '@/app/services/errors';
import { mdUrl } from '../../public/consts';

export default async function mdFetcher() {
  try {
    const response = await fetch(mdUrl);
    if (response.status === 200) {
      const markdownText: string = await response.text();

      return markdownText;
    } else {
      throw new FetchingError('Error when fetching Markdown file');
    }
  } catch (error) {
    console.error(error);

    throw error;
  }
}
