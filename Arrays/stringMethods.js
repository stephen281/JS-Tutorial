let str = "Javascript";

// length
console.log(str.length);

// replace
console.log(str.replace("J", "R"));
console.log(str);

// indexOf()
let str1 = "Javascript is not Java";
console.log(str1.indexOf("va"));

// toUpperCase() & toLowerCase()
console.log(str1.toUpperCase());

// substring()
console.log(str.substring(0, 10));

// concat()
let str2 = "Hello";
let str3 = "world";
console.log(str2.concat(" ", str3, "!"));

// split()
let msg = "javascript::is::fun";
console.log(msg.split("::"));

// trim()
let msg2 = "   abcdef    ";
console.log(msg2.trim());
console.log(msg2);

// slice()
const newMsg = "Javascript is fun";
let result = newMsg.slice(0,10);
console.log(result);
