const express = require('express');
const router = express.Router()
const apiAdapter = require('./apiAdapter')

const verifyAppKey = require('../config/security/verifyAppKey')

const BASE_URL = 'https://dlci.idevoc.com.br/api/dlci/'
const api = apiAdapter(BASE_URL)

router.post('/v1/crypt', verifyAppKey, (req, res, next) => {

    /*
        #swagger.description = 'Criptografia.'
        #swagger.produces = ['application/json']
        #swagger.tags = ['Cryptography']
    */

    /*    #swagger.parameters['Request'] = {
                in: 'body',
                schema: {
                    $sequence: 'string'
                }
        } */

    /* #swagger.responses[200] = {
      schema: {
            $encryptedString: '',
            $diKey: '',
            $publicKey: '',
            $privateKey: ''
      }
  } */

  /* #swagger.security = [{
               "apiKeyAuth": ['83365837234061750124']
        }] */

    /*  #swagger.parameters['appkey'] = {
                in: 'query',
                description: 'AppKey'
        } */        

    api.post(BASE_URL+'/ci', req.body).then(resp => {
        res.send(resp.data)
    })
})

router.post('/v1/decrypt', verifyAppKey, (req, res, next) => {

    /*
        #swagger.description = 'Descriptografia.'
        #swagger.produces = ['application/json']
        #swagger.tags = ['Cryptography']
    */

    /*    #swagger.parameters['Request'] = {
                in: 'body',
                schema: {
                    $diKey: '',
                    $encryptedString: '',
                    $privateKey: '',
                    $publicKey: ''
                }
        } */

    /* #swagger.responses[200] = {
      schema: {
            $sequence: 'string'
      }
  } */

  /* #swagger.security = [{
               "apiKeyAuth": ['83365837234061750124']
        }] */

    api.post(BASE_URL+'/di', req.body).then(resp => {
        res.send(resp.data)
    })
})

module.exports = router