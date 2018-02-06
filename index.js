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
const url="mongodb://localhost:27017/conFusion";
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
server.listen(0.0.0.0,process.env.PORT,function(){
console.log("server running at port:3000");
});