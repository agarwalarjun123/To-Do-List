const express=require('express');
const mongoose=require('mongoose');
const Notes=require('../model/notes');
const bodyParser=require('body-parser');
const appRouter=express.Router();
appRouter.use(bodyParser.json());
appRouter.post('/',function(req,res,next){

	console.log(req.body);
Notes.create({"note":req.body.note},function(err,note){
console.log("note created");
res.statusCode=200;
res.setHeader('Content-type','application/json');
res.json(note);

});

});
module.exports=appRouter;