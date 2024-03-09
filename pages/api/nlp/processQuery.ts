// pages/api/process-query.ts
import { NextApiRequest, NextApiResponse } from "next";
import { useNlp } from "@/hooks/useNlp";

async function processQuery(req: NextApiRequest, res: NextApiResponse) {
  const { processNaturalLanguageQuery } = useNlp();

  if (req.method === "POST") {
    const { query } = req.body;
    const result = await processNaturalLanguageQuery(query);
    res.status(200).json({ result });
    res.send({ result });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

export default processQuery;
