const express = require('express')
const router = express.Router()
const fibonacciService = require('../services/fibonacci.service')
const response = require('../constants/response')

router.post('/input', async (req, res) => {
  try {
    const id = await fibonacciService.inputTicket(req.body.number)
    res.send({ticket: id.toString()})
  } catch (e) {
    res.send({
      success: 0,
      message: response.SERVER_ERROR,
    });
  }
})

router.get('/output/:id', async (req, res) => {
  try{
    const result = await fibonacciService.outputTicket(req.params.id)
    res.send({Fibonacci: result.toString()})
  } catch (e) {
    res.send({
      success: 0,
      message: response.SERVER_ERROR,
    });
  }
})

module.exports = router