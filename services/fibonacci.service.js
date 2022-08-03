const client = require('../database/db-connection')
const utils = require('../utils/fibonacci')

const fibonacciService = {
  inputTicket: async (num) => {
  const id = await client.incr('id', async (err, id) => {
    return id
  })
  await client.set(id.toString(), num)
  return id
  },

  outputTicket: async (id) => {
    const num = await client.get(id.toString())
    const result = utils.countFibonacci(num)
    return result
  }
}

module.exports = fibonacciService