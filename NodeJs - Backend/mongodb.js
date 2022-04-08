const { MongoClient } = require('mongodb')
const url =
  'mongodb+srv://Huzzy:Huzzy@cluster0.1l6xb.mongodb.net/Ecommerce?retryWrites=true&w=majority'
const databaseName = 'Ecommerce'
const client = new MongoClient(url)

async function dbConnect() {
  let result = await client.connect()
  db = result.db(databaseName)
  console.log(db.collection('products'))
  return db.collection('products')
}

module.exports = dbConnect
