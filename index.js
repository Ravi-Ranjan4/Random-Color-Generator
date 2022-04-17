 const body = document.body;
 const btn = document.querySelector(".btn");
 const currentColor = document.querySelector(".currentColor");
 
 const randomColorGenerator = function(){
     const red = Math.floor(Math.random()*256);
     const green = Math.floor(Math.random()*256);
     const blue = Math.floor(Math.random()*256);
     return `rgb(${red},${green},${blue})`;
 }

 btn.addEventListener("click",function(){
     const randomColor = randomColorGenerator();
     body.style.backgroundColor = randomColor;
     currentColor.textContent = randomColor;
 });