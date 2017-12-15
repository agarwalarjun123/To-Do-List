var i=0;

function add(){
var z=document.getElementById("add");
document.getElementById("schedule").innerHTML+="<div id=div"+i+" onclick='cancel("+i+")'>"+"<B><ul><li>"+z.value+"</b><ul></div>";
  a="div"+i;
  
  i++;
   
}
function cancel(j)
{
  document.getElementById("div"+j).style.textDecoration="line-through";
  $("#"+"div"+j).fadeOut(500);
  
}