// pages/api/process-query.ts
import { NextApiRequest, NextApiResponse } from "next";
import { useNlp } from "@/hooks/useNlp";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { processNaturalLanguageQuery } = useNlp();

  if (req.method === "POST") {
    const { query } = req.body;
    console.log({ query });
    const result = await processNaturalLanguageQuery(query);
    res.status(200).json({ result });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
