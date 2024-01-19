const expressJoi = require('@escook/express-joi')
const express = require('express')
//
//导入更换头像验证
//const {update_avatar_schema} = require('../schema/userin')

const router=express.Router()

const maketinfohander= require('../chrRouterHander/maketin')

router.post('/maketinfo',maketinfohander.updatemaketInfo)
//router.get('/')
router.post('/maketinfo/upgraph',maketinfohander.upAvatar)

module.exports = router