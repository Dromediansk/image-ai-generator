// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import openai from "../../utils/openai";

export default async function handler(req, res) {
  if (!req.body) {
    res.status(400).json({ data: { error: "Invalid request!" } });
  }

  try {
    const body = JSON.parse(req.body);

    const response = await openai.createImage({
      prompt: body.query,
      n: parseInt(body.count), // max limit is 10
      size: body.size,
    });
    res.status(200).json({ data: response.data.data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ data: { error: "Oops! Something went wrong." } });
  }
}
