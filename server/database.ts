import { MongoClient } from 'mongodb'

export default async function connectToDatabase() {
  const connectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }

  const client = await MongoClient.connect(process.env.MONGODB_URI as string, connectionOptions)

  return {
    client,
    db: client.db(process.env.MONGODB_DB),
  }
}
