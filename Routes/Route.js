const { Router } = require('express');
const express =require('express');
const route=express.Router()
const Controllers=require("../Controllers/Controllers")
route.get('/get', Controllers.GetAll)
route.delete('/delete/:id', Controllers.deletepost)
module.exports=route