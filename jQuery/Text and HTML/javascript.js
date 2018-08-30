// METHODS
// val()				Extract value of input
$("input").val("Joel");		$("select").val();

// text()				Get and set text
$("h1").text("hi");

// attr()				Retrieve value of attribute
//$("").attr();  //getting
$("img").attr("src", "https://c1.staticflickr.com/3/2418/2243463214_f32ab004af_b.jpg");				//setting
$("input").attr("type", "text");

// html()				Retrieves the inner html
$("ul").html("<li>I hacked your UL!</li><li>Sorry</li>");


// addClass()			Adds specified class(es) to element
$('h1').addClass("correct");

// removeClass()
$('li').removeClass("wrong");

// toggleClass()
$('h1').toggleClass("correct");
