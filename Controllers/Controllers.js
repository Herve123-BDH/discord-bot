const Scheme= require("../Scheme/Scheme")
module.exports.ADDmembers= async (req,res)=>{
    const {name,email,token,amount}= req.body
    try{
        const sending = await Scheme.create({name,email,token,amount})
        res.json({msg: sending})
    }
    catch(err){
        res.json({m:err})
        console.log({msg: err})
    }
}
module.exports.GetAll=async (req,res)=>{
    try{
        const receive= await Scheme.find()
        res.json({msg:receive})
    }
    catch(err){
        res.json({err:err})
        console.log(err)
    }
}
module.exports.deletepost= async (req, res)=>{
    try{
        const Deletepost = await Scheme.deleteOne({token: req.params.id})
        res.json(Deletepost)
    }
    catch(err){
        res.json({err:err})
        console.log(err)
    }
}