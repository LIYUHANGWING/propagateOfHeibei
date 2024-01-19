const express = require('express')
//
const router=express.Router()
//
const userhander=require('../chrRouterHander/userin')

//导入验证中间件
const expressJoi=require('@escook/express-joi')
//2导入需要验证的规则对象
const {reg_login_schema} = require('../schema/userin')


router.post('/chrreguser',expressJoi(reg_login_schema),userhander.regUser)
//
router.post('/chrlogin',expressJoi(reg_login_schema),userhander.login)

module.exports = router