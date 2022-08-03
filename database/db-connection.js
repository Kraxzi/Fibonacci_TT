require('dotenv').config()
const redis = require('redis')

const client = redis.createClient({
  host:process.env.DB_HOST,
  port:process.env.DB_PORT
})

client.on('connect', () => console.log('connected to db'))

module.exports = client
