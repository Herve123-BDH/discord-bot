const mongoose=require('mongoose');
const MONGO_URI= "mongodb+srv://herve:beito12345@cluster0.s6tm9.mongodb.net/nodeCool?retryWrites=true&w=majority"
const MongoDB= async ()=>{
    try{
        const connection = await mongoose.connect(MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology: true
        })
        console.log('connected to mongoDB')
    }
    catch(err){
        console.log(err)
        process.exit()
    }
}
module.exports=MongoDB