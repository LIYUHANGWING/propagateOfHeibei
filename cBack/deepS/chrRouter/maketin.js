const express = require('express')
//
const router=express.Router()

const makethander= require('../chrRouterHander/maketin')

router.post('/maketin',makethander.maketin)
//router.get('/')

module.exports = router