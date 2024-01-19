const db=require('../dbys/index')

exports.maketin = (req,res)=>{
    const cuser=req.body
    const sql = 'insert into ysdb.tmaket set?'
    db.query(sql,{goodsname: cuser.goodsname,price:cuser.price,nums:cuser.nums,belong:cuser.belong},(err,results)=>{
        if(err) return res.send({status:1,message:err.message})
        if(results.affectedRows !==1){
            return res.send({status:1,message:'用户录入失败'})
        }
        res.send({status:0,message:'录入成功',results})
        console.log(results)
       })
}


exports.updatemaketInfo=(req,res)=>{
    const sql='update ysdb.tmaket set ? where id = ? '

    db.query(sql,[req.body,req.body.id],(err,results)=>{
        if(err){
            return res.cc(err)
        }
        if(results.affectedRows !==1){          
            return res.cc('更新信息失败')
        }
        res.cc('更新成功',0)
    })
}
exports.upAvatar=(req,res)=>{
const sql='update  ysdb.tmaket set imgb=? where id=?'

db.query(sql,[req.body.avatar,req.body.id],(err,results)=> {
    if(err)return res.cc(err)

    if(results.affectedRows !==1){          
        return res.cc('更新信息失败')
    }
    res.cc('更新成功',0)
})


}