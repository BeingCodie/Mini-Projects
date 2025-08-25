let btn = document.querySelector("button");
  let h1= document.querySelector("h1");
btn.addEventListener("click", function(){
  
    h1.innerText = getrandomcolor();
    console.log("button clicked");
    let div = document.querySelector("div");
    div.style.backgroundColor= getrandomcolor();
});

function getrandomcolor(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    let randomcolor = `rgb(${red}, ${green}, ${blue})`;
    return randomcolor;
}

h1.addEventListener("mouseenter", function(){
   document.querySelector("h1").style.color= getrandomcolor();
   console.log("hoverd");
});