// - **`getElementById()`**: Use it when selecting an element by its unique `id`. It’s fast and returns only one element.

// - **`querySelector()`**: Use it when you need to select an element with any valid CSS selector (e.g., class, tag, or attribute). It returns the first match and is more flexible.

console.log("hello")

// var btn = document.querySelector("button"); 
// var p = document.querySelector("p");
// btn.addEventListener("click" , function(){

//     p.textContent = "hello pratik"

// })


document.querySelector("button").addEventListener("click",function(){
    document.querySelector("p").textContent = "hello lordsainath"
})

document.querySelector("button")

// let elements = document.querySelectorAll('button'); // Selects all elements with class 'myClass'
// let secondDiv = elements[1];
// console.log(elements); 
// console.log(secondDiv)


// let elements = document.querySelectorAll('button'); 
// elements.forEach(function(element) {
//     console.log(element);  
// });


// document.querySelectorAll("button").forEach(function(button1) {
//     button1.addEventListener("click", function() {
//         document.querySelectorAll("p").forEach(function(p) {
//             p.textContent = "hello lordsainath";
//         });
//     });
// });


document.getElementById("hover1").addEventListener("mousedown",function(){
    console.log("pressed")
})

document.getElementById("hover1").addEventListener("mouseup",function(){
    console.log("released")
})

document.getElementById("hover1").addEventListener("click",function(){
    console.log("clicked")
})

document.getElementById("hover1").addEventListener("dblclick",function(){
    // alert("you clicked this button twice")
    console.warn("You clicked this btn twice")
})

// document.getElementById("hover1").addEventListener("mousemove",function(){
//     console.log("someone is exploring things")
// })

document.getElementById("hover1").addEventListener("mouseover",function(){
    console.log("someone is exploring things")
})

document.getElementById("hover1").addEventListener("mouseout",function(){
    console.log("Someone didn't clicked the btn why. dont't you want to knwo the secret behind this btn")
})

document.getElementById("btn1").addEventListener("contextmenu",function(event){
    event.preventDefault();
    console.log("we didn't provide any method for right click")
    
})
