const notes=require('../model/notes');
const mongoose=require('mongoose');
const express=require('express');
const getRouter=express.Router();
getRouter.route('/').get(function(req,res,next){
notes.find({},function(err,notes){
if(err)
console.log(err);
else{
res.statusCode=200;
res.setHeader("Content-type","application/json");
res.json(notes);
}
});
});
module.exports=getRouter;