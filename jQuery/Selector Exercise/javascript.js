//all divs purple background
$("div").css("background", "purple");
//divs with class "highlight" 200px wide
$("div.highlight").css("width", "200px");
//div with id "third" orange border
$("div#third").css("border", "2px solid orange");
//select first div only, change font colour to pink
// $("div:nth-of-type(1)").css("color", "pink");
$("div:first-of-type").css("color", "pink");