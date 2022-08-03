require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const client = require('./database/db-connection')
const fibonacciRouter = require('./routes/fibonacci.router')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('', fibonacciRouter)

app.listen(process.env.PORT, async () => { 
  await client.connect()
  console.log(`Server is working on port: ${process.env.PORT}`)
})