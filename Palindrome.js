function isNumPalindrome(n) {
	if (n < 0) return false;
	let rev = 0;
	let y = n;

	while (y > 0) {
		let last = y % 10;
		rev = (rev * 10) + last;
		y = (y / 10) | 0;
	}
	
	if (n===rev){
	return console.log(n+' is Palindrome');
}else{
    return console.log(n+' not Palindrome');
}
}
isNumPalindrome(121);