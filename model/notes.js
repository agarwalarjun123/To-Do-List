const mongoose=require('mongoose');
const schema=mongoose.Schema;
const notes=new schema({
note:{
	type:String,
	required:true
}
},{
	timestamps:true
});
const model=mongoose.model('note',notes);
module.exports=model;