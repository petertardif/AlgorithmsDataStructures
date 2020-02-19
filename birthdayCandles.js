// You are in charge of the cake for your niece's birthday and have decided the cake will have one candle for each year of her total age. When she blows out the candles, she’ll only be able to blow out the tallest ones. Your task is to find out how many candles she can successfully blow out.  For example, if your niece is turning 4 years old, and the cake will have 4 candles of height 4, 4, 3, 1, she will be able to blow out 2 candles successfully, since the tallest candles are of height 4 and 4 there are 2 such candles.  Complete the function birthdayCakeCandles in the editor below. It must return an integer representing the number of candles she can blow out.

function birthdayCakeCandles(ar) {
	let sortedArr = ar.sort((a, b) => b - a);
	let filteredArr = sortedArr.filter(item => sortedArr[0] === item);
	return filteredArr.length;
}

let arr = [3, 2, 1, 3];

console.log(birthdayCakeCandles(arr));
