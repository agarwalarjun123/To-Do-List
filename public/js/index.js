
function delete1(x){
	console.log(x);
	var a=JSON.stringify({"note":x});
console.log(a);
$.ajax({
url:"http://to-dolist.eu-4.evennode.com/delete",
type:"POST",
dataType:"json",
contentType:"application/json",
data:a,
success:function(data){
	console.log(data);
	$.ajax({
url:"http://to-dolist.eu-4.evennode.com/get",
success:function(data){
	console.log("sss");
	document.getElementById("s1").innerHTML="";
for(var i=0;i<data.length;i++){
document.getElementById("s1").innerHTML+="<li>"+data[i].note+"</li>";

}
$("li").click(function(){

delete1($(this).html());
});

}
});

},
error:function(err){
console.log(err.status);
}

});

}
function add(){

var z=document.getElementById("t1").value;
var jst={"note":z};
$.ajax({
url:"http://to-dolist.eu-4.evennode.com/add",
type:"POST",
dataType:"json",
contentType:"application/json",
data:JSON.stringify(jst),


success:function(data){
	console.log(data);
$.ajax({
url:"http://to-dolist.eu-4.evennode.com/get",
success:function(data){
	console.log("sss");
	document.getElementById("s1").innerHTML="";
for(var i=0;i<data.length;i++){
document.getElementById("s1").innerHTML+="<li>"+data[i].note+"</li>";

}
$("li").click(function(){

delete1($(this).html());
});

}
});
},
error:function(x){
	console.log(x.status);
	
}
});


   
}