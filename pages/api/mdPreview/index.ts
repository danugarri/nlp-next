import mdFetcher from '@/utils/mdFetcher';
import { NextApiRequest, NextApiResponse } from 'next';

async function mdPreview(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const result = await mdFetcher();
    res.status(200).json({ result });
    res.send({ result });
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

export default mdPreview;
