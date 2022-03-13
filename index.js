const memo = [];

function memoFactorial(n) {
    console.log('bucle')
	if (n === 1) {
		return 1;
	} else if (!memo[n]) {
		memo[n] = n * memoFactorial(n - 1);
	}  
	return memo[n];
}

console.log(memoFactorial(5))

console.log(memoFactorial(10))