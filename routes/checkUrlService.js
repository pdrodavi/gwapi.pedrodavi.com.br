const express = require('express');
const router = express.Router()
const axios = require('axios');

const verifyAppKey = require('../config/security/verifyAppKey')

const BASE_URL = 'https://www.virustotal.com/api/v3/domains'

router.get('/v1/scan/domain/:domain/:apikey', verifyAppKey, (req, res, next) => {

    /*
        #swagger.description = 'Checar integridade de domínio. Gere sua chave de api se cadastrando no site Vírus Total'
        #swagger.produces = ['application/json']
        #swagger.parameters['domain'] = { description: 'Dominio', example: 'gwapi.pedrodavi.com.br' }
        #swagger.parameters['apikey'] = { description: 'Api Key', example: '23424125141234821381482183148128' }
        #swagger.tags = ['Security']
    */  

    /* #swagger.responses[200] */       

    let apikey = req.params.apikey
    let domain = req.params.domain    

    const api = axios.create({
        baseURL: BASE_URL,
        headers:{
           'x-apikey': apikey 
        }
    });

    api.get('/' + domain).then(resp => {
        res.send(resp.data)
    })

})

module.exports = router