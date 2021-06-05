import moment from "moment";
import type { NextApiRequest, NextApiResponse } from "next";
import connectToDatabase from "../../../server/database";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { db } = await connectToDatabase();
      const query = await db.collection("accounts").insertOne({
        ...req.body,
        timestamp: moment().format("MMMM Do YYYY, h:mm a"),
      });
      return res.status(201).json({ docId: query.insertedId });
    } catch (error) {
      return res.status(500).json("internal server error");
    }
  }
  return res.status(404).json("route not found");
}
