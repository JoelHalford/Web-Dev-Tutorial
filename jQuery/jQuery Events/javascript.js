// $("h1").click(function(){
// 	alert("h1 click!");
// });

// $("button").click(function(){
// 	$(this).css("background", "pink");
// });

// $("button").click(function(){
// 	var text = $(this).text();
// 	console.log("You clicked " + text);
// });

// $("input[type='text'").keypress(function(event){
// 	console.log(event);
// });

// $("input[type='text'").keypress(function(event){
// 	if(event.which === 13){
// 		console.log("You hit enter");
// 	};
// });


$('h1').on('click', function(){
	$(this).css("color", "purple");
});

$('button').on('mouseenter', function(){
	$(this).css("font-weight", "bold");
});

$('button').on('mouseleave', function(){
	$(this).css("font-weight", "normal");
});

//double click event
$('button').on('dblclick', function(){
	alert("DOUBLE CLICKED!");
});

//drag start event
$('a').on('dragstart', function(){
	console.log("DRAG STARTED!");
});

//keypress event
$('input[type="text"').on('keypress', function(){
	alert("key press in an input!");
});