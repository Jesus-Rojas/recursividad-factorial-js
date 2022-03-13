function factorial(n) {
    console.log('bucle')
	if (n === 1) {
		return 1;
	} else {
		return n * factorial(n - 1);
	}
}

console.log(factorial(5))

console.log(factorial(10))