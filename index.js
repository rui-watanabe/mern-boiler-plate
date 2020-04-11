const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_CONNECT, {useNewUrlParser: true})
  .then(() => console.log('DB connected'))
  .catch(err => console.error(err))

app.use('/', (req,res) => {
  res.send('hello world')
}) 

app.listen(8000)