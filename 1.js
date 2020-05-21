function decimals(n, d) {
 if ((typeof n !== 'number') || (typeof d !== 'number'))
   return false;
    	n = parseFloat(n) || 0;
	return n.toFixed(d);
	}
console.log(decimals(2.100212, 2));
console.log(decimals(2.100212, 3));
console.log(decimals(2100, 2));
document.getElementById("a").innerHTML = decimals(2.100212, 2);
document.getElementById("b").innerHTML = decimals(2.100212, 3);
document.getElementById("c").innerHTML = decimals(2100, 2);

function stringToArray(str) {
	var l = str.split("");
	console.log(l);
}
stringToArray("Ahmed");