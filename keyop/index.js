document.addEventListener('keypress', function(event) {
    document.getElementById('output').textContent = 'Character pressed: ' + event.key;
});

document.addEventListener('keydown', function(event) {
   console.log(event.key)
});

document.addEventListener('keyup', function(event) {
    console.log(event.key)
 });

       