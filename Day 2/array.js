// array
// jab bhi humko ek ya ek se jyada values store karana hai tab hum array use karate hai 

var users = ["sainath","mhetre","akanksha","rahul"]

console.log(users)


// loop with array

for(var i = 0;i<users.length;i++){
    console.log(users[i])
}

users.forEach(element => {
    console.log(element)
});


// users.forEach(function(element){

// })

// users.forEach(function(element){

// })

var it = 0;
while(it<users.length){
    console.log(users[it])
    it++
}

var it = 0
do{
    console.log(users[it]);
    it++;

} while(it<=2)

console.log("hello")

// how to loop an array
// how to loop an array and do somethign with that element