// Colors

let colors = ['blue' , 'yellow' , 'black' , 'orange' , 'green' , 'pink' , 'brown' , 'golden'];


// get button

let button = document.getElementById("button");


// add event listener


button.addEventListener('click' , function(){
   // randomize colors

   var randomColors = colors[Math.floor(Math.random() * colors.length)]

   // Container

   let container = document.getElementById("container");

   container.style.background = randomColors;
    
})