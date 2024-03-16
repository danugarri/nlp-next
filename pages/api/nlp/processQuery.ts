import processNaturalLanguageQuery from '@/utils/nlp';
import { NextApiRequest, NextApiResponse } from 'next';

async function processQuery(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { query } = req.body;
    const result = await processNaturalLanguageQuery(query);
    res.status(200).json({ result });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

export default processQuery;
