var example1 = 10 ===10;  
var example2 = 11 > 10;
var example3 = 10 < 11;
var example4 = 10 >= 10;
var example5 = 10 <= 10;
var example6 = 10 !== 10;


 number
1, 2, 3, 4, 5, 6, 10.1
var numver1 = 1;
var number2 = 2.3;
var numer3 = 5;

string, text
var string1 = "Hello world";
var string2 = "A";
var string3 = "";
var string4 = "5";

Boolean
var boolean1 = true; 
var  boolean2 = false;

var a = 5;
var b = 10;
var example7 = a < b;

var c = 10;
var d = 11;
if (c < d) {
    alert("C is less than D");
    console.log("Hello world");
}

var e = 3.14;
if(e !== 3.14) {
    alert("Why don't you know number PI?");
}
else {
    alert("Good job!");
}

var age = 10;
if (age >= 18) {
    alert("You can vote!");
}
else {
    alert("You are too young to vote!");
}

var year = 1900;
var age = 2022 - year;
if(age >=18) {
    "You can vote!"
}
else {
    alert("You are too young to vote!");
}

var lightSwitch = true;
if (lightSwitch) {
    alert("Light is on!")
}
else {
    alert("Light is off!")
}

alert("Hello world");
console.log("Hello world");

if(confirm("Do you have a car?")) {
    if (confirm("Is it red?")) {
        alert("You have a red car.")
    }
}
else {
    if(confirm("Are you planning to have a car?")) {
        alert("You are planning to have a car.");
    }
    else {
        alert("You don't like cars!")
    }
}

var username = prompt("What is you name?,");
if (username ==="") {
    username = "stranger";
}
alert("Welcome" + username);

var a = prompt("What is the width of the rectangle?");
var b = prompt("What is the height of the rectangle?");
alert(a + b);

