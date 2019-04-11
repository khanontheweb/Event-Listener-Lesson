// Select the HTML element
const buttonExample = document.getElementById("btn");

//Add a handler, specifying first the event, and then the function (behavior) you want
buttonExample.addEventListener('click', function(event) {
    alert("Hello from button!");
    console.log(event);
});