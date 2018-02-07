const http=require('http');
const express=require('express');
const mongoose=require('mongoose');
const morgan=require('morgan');
const get=require('./routes/get');
const add=require('./routes/add');
const del=require('./routes/del');
const app=express();
app.set('etag', false);
app.use(morgan('dev'));
const url="mongodb://6a.mongo.evennode.com:27017,6b.mongo.evennode.com:27017/a2301f7599130336615033f7ce624d5e?replicaSet=eu-6 -u a2301f7599130336615033f7ce624d5e -p 12345678/conFusion";
mongoose.connect(url,function(err,db){
if(err)
	console.log(err);
else
console.log("connected to mongo server");

});

app.use(express.static(__dirname+"/public"));
app.use('/get',get);

app.use('/add',add);
app.use('/delete',del);
const server=http.createServer(app);
server.listen(process.env.PORT,0.0.0.0,function(){
console.log("server running at port:3000");
});