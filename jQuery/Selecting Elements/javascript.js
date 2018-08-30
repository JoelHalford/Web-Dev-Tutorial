//select h1
$("h1");

//select all lis
$("li");

//select body
$("body");

//only anchor tags inside an li inside a ul
$("ul li a");

//select item with ID
$("#adorable");

//select element with id "special" and give it a border
$("#special").css("border", "2px solid red");

//we can also pass in an object with styles
var styles = {
	backgroundColor: "pink",
	fontWeight: "bold"
};

$("#special").css(styles);

//select all li's and make them yellow
$("li").css("color", "yellow");

//select all elements with class "big" and give orange border
$(".big").css("border", "1px dashed orange");