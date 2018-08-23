var movies =
[
	{
		title : "Lord of the Rings",
		rating: 5,
		watched: false
	},
	{
		title: "Harry Potter",
		rating: 2,
		watched: true
	},
	{
		title: "Mad Max",
		rating: 2.5,
		watched: false
	},	
	{
		title: "Ghostbusters",
		rating: 4.8,
		watched: true
	}
];

movies.forEach(function(movie)
{
	if(movie.watched === true)
	{
		console.log('You have watched "' + movie.title + '" - ' + movie.rating + ' stars.');
	}
	else
	{
		console.log('You have not seen "' + movie.title + '" - ' + movie.rating + ' stars.');
	}
});