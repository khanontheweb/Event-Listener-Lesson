// Select the HTML element
const buttonExample = document.getElementById("btn");

// Add a handler, specifying first the event, and then the function (behavior) you want
buttonExample.addEventListener('click', function(event) {
    alert("Hello from button!");
    console.log(event);
});

// Select the button
const spoiler = document.getElementById("spoiler");

// Handler that toggles the hidden class
spoiler.addEventListener('click', function(event) {
    const spoilerText = document.getElementById("spoiler-text");
    spoilerText.classList.toggle("hidden");
});