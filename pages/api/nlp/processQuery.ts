import processNaturalLanguageQuery from '@/utils/nlp';
import { NextApiRequest, NextApiResponse } from 'next';

async function processQuery(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { query } = req.body;

    try {
      const result = await processNaturalLanguageQuery(query);
      if (res.statusCode === 200) res.status(200).json({ result });
    } catch (error) {
      res.status(500).json({ error });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

export default processQuery;
