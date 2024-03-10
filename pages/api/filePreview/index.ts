import fileReader from '@/utils/fileReader';
import { NextApiRequest, NextApiResponse } from 'next';

async function getPreviewFile(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const result = await fileReader();
    res.status(200).json({ result });
    res.send({ result });
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

export default getPreviewFile;
