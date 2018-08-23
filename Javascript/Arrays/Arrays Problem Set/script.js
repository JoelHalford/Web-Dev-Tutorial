//printReverse([1,2,3,4]);
//4 3 2 1

//printReverse(["a", "b", "c"]);
//"c" "b" "a"

function printReverse(arr)
{
	console.log(arr.length);

	for (var i = arr.length - 1; i >= 0; i--)
	{
		console.log(arr[i]);
	}
}

// isUniform([1,1,1,1]);
// isUniform([2,1,1,1]);
// isUniform(["a","b","p"]);
// isUniform(["b","b","b"]);

function isUniform(arr)
{
	var firstItem = arr[0];

	for(var i = 1; i < arr.length; i++)
	{
		if (arr[i] !== firstItem)
		{
			return false;
		}
	}
	return true;
}

// sumArray([1,2,3]);		//6
// sumArray([10,3,10,4]);	//27
// sumArray([-5,100]);		//95

function sumArray(arr)
{
	var result = 0;

	arr.forEach(function(item)
	{
		result += item;
	});

	return result;
}

// max([1,2,3]);		//3
// max([10,3,10,4]);	//10
// max([-5,100]);		//100

function max(arr)
{
	var result = 0;

	arr.forEach(function(item)
	{
		if (result < item)
		{
			result = item;
		}
	});

	return result;
}