let p = document.querySelector("#para");     //access paragraph

let url = "https://official-joke-api.appspot.com/random_joke";  // Joke API
 
//Create function to generate Joke
async function joke(){                
    try{
    let res= await fetch(url);
    let joke1= await res.json();
    console.log("Setup ",joke1.setup);
    console.log("punchline ",joke1.punchline);
    p.innerText= `Setup : ${joke1.setup} \n Punchline : ${joke1.punchline}`  // Paragarph ka innerText Change karna(To show on UI Browser) 
    }
    catch(err){
        console.log("Error : ", err);
        p.innerText = "Kuch Toh Gadbad Hai Daya , Joke mil nhi rha";
    }
}

let btn = document.querySelector("#btn");
btn.addEventListener("click", joke); // fucntion Call using Event on Button