// This keyword
// global
// function  - window
// method - object
// fun inside method - window
// fun inside method - object (es6)
// constructor function - new blank object
// event lister - that element jis par event laga gaya hai





// call apply bind
// ye tin tarike hain jin se hum kisi function ko call kar sakte hain kisi aur object ko this maan kar

// call

var obj1 = {name:"Rahul",age : 20};


function abcd(){
    console.log(this.age);
}

abcd(); // window

abcd.call(obj1);

// bind
// bind creates a new function that, when called, has its 'this' keyword set to the provided value

var obj2 = {name: "Amit", age: 25};

var boundFunction = abcd.bind(obj2);
boundFunction(); // 25


// apply
// apply is similar to call, but it takes an array of arguments

var obj3 = {name: "Suman", age: 30};

function xyz(greeting, punctuation) {
    console.log(greeting + ", " + this.name + punctuation);
}

xyz.apply(obj3, ["Hello", "!"]); // Hello, Suman!
