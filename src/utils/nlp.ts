import { Document, VectorStoreIndex } from 'llamaindex';
import fs from 'fs/promises';
import { fileName, mainRoute } from '../../public/consts';

async function processNaturalLanguageQuery(query: string) {
  // Defined sample document to read
  const fileContent = await fs.readFile(`${mainRoute}${fileName}`, 'utf-8');

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
}

export default processNaturalLanguageQuery;
