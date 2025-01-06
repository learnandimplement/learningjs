// Video 1
// console
//   - console.log();
//   - console.error();
//   - console.warn();


// alert 
    // - alert();

// prompt
//    - prompt() 



// video 2
// variables and constants
 var a = 12;
 var b = 13;
 var c = a + b;
const pi = 3.14;
 console.log(a + b);
 console.log(pi);
 console.log("The value of pi is " + pi);
 console.log("Addition of var a and var b is = " + (a + b));
 console.log("Addition of var a and var b is = " + c);

// interpretor and compilor
//  js language use karate hai and computer english nahi samaje. wo samajte 0 and 1.jisko aap current flow and curret bypass                                      
// bhi kahe sakate ho and hum enlgish mai likhe and use transaltor jo hame code english to use 0 and 1 mai convert kare

// interpreture and compilor are transaltors.
// compiler convert the code into machine code slower in convertion and faster in running
// interpreter convert the code into byte code faster in convertion and slower in runnin

// chorme uses jit compilor which will use the benefits of both compiler and interpretor


// Window
// there are many features used by js but they are not the part of the js . they are availble in browser and when we use them in js they 
// are called from the browser  and not js
// window is a collection which are availabe in browser and js uses it to use it



// video 3

// Data types
//   || primitive -which store actual value
//   || reference - which store the memory address

var arr1 = [1,2,3,4,5,6,7,8,9,10]
var arr2 = arr1

// spread
var ar = [1,2,3,4,5]
var ar1 = [...ar]






// Conditional 
//   - if / if else  / if elseif else
//   - ternary
//  - swithc
//   decision based 

var age = 15

// condition will be either true or false 
if(age > 18){
    console.log("age is greater than 18")
}
else {
    console.log("age is less than 18")
}

// truty and false value
// har value ko true ya false banaya ja sakata hai ki wo value ka type kya hai 
// null undefined 0 "" '' NaN document.all false
// baki sab true





// loops = repeatating
//    for loop
// do while loop
// while loop
// foreach
// forin
// forof

// syntax
// for(start ; end ;  change ){

// }


var arr3 = [];
for(var i = 1;i<=25 ;i++){
    arr3[i] = i;
}

// syntax
// start
// while(end){
// 
    // change 

// }


// foreach loop normal loop nahi hai for loop ki tarah jo number or start par chale . it  works on array only 