const express = require('express')
const dbConnect = require('./mongodb')
const app = express()

app.get('/', (req, res) => {
  res.send({ name: 'Akshay' })
})

app.listen(43000)
