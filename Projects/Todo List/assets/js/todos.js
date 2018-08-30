// Check off Specific Todos By Clicking

$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// Click on X to delete Todo
$("ul").on("click", ".delete", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").on("keypress", function(event){

	if(event.which === 13)
	{	//grab new todo text from input
		var todoText = $(this).val();
		//clear input
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span class='delete'>X</span> " + todoText + "</li>");
	};
});