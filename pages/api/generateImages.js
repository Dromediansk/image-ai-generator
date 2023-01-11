// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import openai from "../../utils/openai";

export default async function handler(req, res) {
  if (!req.body) {
    res.status(400).json({ data: { error: "Invalid request!" } });
  }
  try {
    const response = await openai.createImage({
      prompt: req.body,
      n: 2,
      size: "256x256",
    });
    res.status(200).json({ data: response.data.data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ data: { error: "Something went wrong" } });
  }
}
