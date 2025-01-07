// jo bhi hum website pe likhte hain wo sab ek file me hota hai wo hai body tag ke andar ab jo body tag ke andar hota hai wo hame website pe dikhata hai

// Dom Manipulation

// accessing the element
// types of selectors
// 1. single element selector
// 2. multi element selector

// 1. single element selector
// 1.1 getElementById
let element = document.getElementById('first');
// console.log(element);

// 1.2 querySelector
element = document.querySelector('#first');
// console.log(element);

// 2. multi element selector
// 2.1 getElementsByClassName
let elements = document.getElementsByClassName('child');
// console.log(elements);

// 2.2 getElementsByTagName
elements = document.getElementsByTagName('div');
// console.log(elements);

// 2.3 querySelectorAll
elements = document.querySelectorAll('.child');
// console.log(elements);

// 3. changing the text of element
// element.innerText = "Hello World";
// element.innerHTML = "<b>Hello World</b>";

// 4. changing the css of element
// element.style.backgroundColor = "red";
// element.style.color = "white";
// element.style.border = "2px solid black";

// 5. adding the class name
// element.className = "newClass";

// 6. adding the attribute
// element.setAttribute('title', 'myTitle');
// element.removeAttribute('title');

// 7. getting the parent element
// element = document.getElementById('child');
// element = element.parentElement;
// console.log(element);

// 8. getting the child element
// element = document.getElementById('main');
// element = element.childNodes;
// element = element.children;
// console.log(element);

// 9. getting the next element
// element = document.getElementById('child');
// element = element.nextElementSibling;
// console.log(element);

// 10. getting the previous element
// element = document.getElementById('child');
// element = element.previousElementSibling;
// console.log(element);

// 11. creating the element
let newElement = document.createElement('h1');
newElement.id = 'element';
newElement.className = 'element';
newElement.innerHTML = 'This is a new element';
// console.log(newElement);

// 12. inserting the element
element = document.getElementById('main');
element.appendChild(newElement);

// 13. replacing the element
let newElement2 = document.createElement('h1');
newElement2.id = 'element2';
newElement2.className = 'element2';
newElement2.innerHTML = 'This is a new element 2';
element.replaceChild(newElement2, newElement);

// 14. removing
