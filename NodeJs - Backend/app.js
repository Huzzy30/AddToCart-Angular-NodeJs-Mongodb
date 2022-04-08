const express = require('express')
const dbConnect = require('./mongodb')
var cors = require('cors')
const app = express()
app.use(cors())

app.get('/products', async (req, res) => {
  let data = await dbConnect()
  data = await data.find().toArray()
  res.send(data)
})

app.listen(4300)
