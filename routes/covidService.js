const express = require('express');
const router = express.Router()
const apiAdapter = require('./apiAdapter')

const verifyAppKey = require('../config/security/verifyAppKey')

const BASE_URL = 'https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/'
const api = apiAdapter(BASE_URL)

router.get('/v1/covid/uf/:uf', verifyAppKey, (req, res, next) => {

    /*
        #swagger.description = 'Consultar estatísticas do Covid por Estado.'
        #swagger.produces = ['application/json']
        #swagger.parameters['uf'] = { description: 'UF', example: 'PB' }
        #swagger.tags = ['Health']
    */
   
    /*
        #swagger.parameters['appkey'] = { description: 'AppKey', example: '8801084840929484' }
    */     

    api.get(req.params.uf).then(resp => {
        res.send(resp.data)
    })
})

module.exports = router