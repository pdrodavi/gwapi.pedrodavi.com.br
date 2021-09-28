const express = require('express');
const router = express.Router()
const apiAdapter = require('./apiAdapter')

const verifyAppKey = require('../config/security/verifyAppKey')

const BASE_URL = 'https://blockchain.info/ticker'
const api = apiAdapter(BASE_URL)

router.get('/v1/btc/value/:currency', verifyAppKey, (req, res, next) => {

    /*
        #swagger.description = 'Consultar valor do Bitcoin por moeda.'
        #swagger.produces = ['application/json']
        #swagger.parameters['currency'] = { description: 'Moeda', example: 'BRL > Real || USD > Dólar' }
        #swagger.tags = ['Finance']
    */

    /* #swagger.responses[200] = {
      schema: {
            $15m: '',
            $last: '',
            $buy: '',
            $sell: '',
            $symbol: ''
      }
  } */

  /* #swagger.security = [{
               "apiKeyAuth": ['83365837234061750124']
        }] */

    var currency = req.params.currency

    api.get(BASE_URL).then(resp => {
        res.send(resp.data[currency])
    })
})

module.exports = router
