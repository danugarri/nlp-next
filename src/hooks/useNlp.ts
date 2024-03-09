import { Document, VectorStoreIndex } from "llamaindex";
import fs from "fs/promises";
export const useNlp = () => {
  async function processNaturalLanguageQuery(query: string) {
    const mainRoute = "./public/assets/";
    const fileName = "roles.md";
    const markdownContent = await fs.readFile(
      `${mainRoute}${fileName}`,
      "utf-8"
    );
    //const sampleText = 'This is a sample text for testing purposes.';
    // const markdownContent = await fs.readFile('../../guide/9.2/apis/connecting-to-kernel-apis/roles.md', 'utf-8');

    // Create a document from the data
    const document = new Document({ text: markdownContent });

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
  return { processNaturalLanguageQuery };
};
