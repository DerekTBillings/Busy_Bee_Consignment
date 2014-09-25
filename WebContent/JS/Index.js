
$(document).ready(function(){
	$("#content").load("Home.html");
});

function loadPage(link){
	$("#content").load(link+".html");
}