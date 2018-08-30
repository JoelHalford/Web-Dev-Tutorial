// Check off Specific Todos By Clicking

$("li").click(function(){
	//if li is gray
	$(this).toggleClass("completed");
});