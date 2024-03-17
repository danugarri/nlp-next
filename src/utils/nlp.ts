import { Document, VectorStoreIndex } from 'llamaindex';
import fileReader from './fileReader';
import { FileReaderError } from '@/app/services/errors';

async function processNaturalLanguageQuery(query: string) {
  try {
    // Defined sample document to read
    const fileContent = await fileReader();

    // Create a document from the data
    const document = new Document({ text: fileContent });

    // Split the text and create embeddings. Store them in a VectorStoreIndex
    const index = await VectorStoreIndex.fromDocuments([document]);

    // Query the index
    const queryEngine = index.asQueryEngine();
    const response = await queryEngine.query({
      query,
    });

    // Output the response
    console.log(response.toString());
    return response.toString();
  } catch (error) {
    if (error instanceof FileReaderError) {
      console.error(error);
    } else {
      console.log(error);
      throw error;
    }
  }
}
export default processNaturalLanguageQuery;
