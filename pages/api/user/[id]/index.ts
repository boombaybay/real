/* eslint-disable @typescript-eslint/no-unused-vars */
import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import connectToDatabase from "../../../../server/database";

export default async function handeler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "PUT") {
    try {
      const { id } = req.query;
      const { secondPassword } = req.body;
      if (!id || id.length < 11) {
        return res.status(422).json("errr");
      }
      if (!secondPassword) {
        return res.status(422).json("errr");
      }
      const { db } = await connectToDatabase();
      const user = await db
        .collection("accounts")
        .findOne({ _id: new ObjectId(id as string) });
      if (!user) {
        return res.status(404).json("not found");
      }
      await db
        .collection("accounts")
        .updateOne(
          { _id: new ObjectId(id as string) },
          { $set: { secondPassword } }
        );
      return res.status(200).json("success");
    } catch (error) {
      return res.status(500).json("internal server error");
    }
  }
  return res.status(404).json("Route not found");
}
