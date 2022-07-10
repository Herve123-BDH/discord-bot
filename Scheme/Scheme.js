const mongoose = require('mongoose')
const PostSchema = new mongoose.Schema({
    name: String,
    email: String,
    token: String,
    amount: Number
})
const FormUser= mongoose.model('mentorship', PostSchema)

module.exports=FormUser
