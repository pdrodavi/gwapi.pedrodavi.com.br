const express = require('express');
const router = express.Router()

const dateService = require('./dateService')
const dlciService = require('./dlciService')
const zipcodeService = require('./zipcodeService')
const btcService = require('./btcService')
const checkUrlService = require('./checkUrlService')
const covidService = require('./covidService')

router.use((req, res, next) => {
    console.log("Called: ", req.path)
    next()
})

router.use(dateService)
router.use(dlciService)
router.use(zipcodeService)
router.use(btcService)
router.use(checkUrlService)
router.use(covidService)

module.exports = router