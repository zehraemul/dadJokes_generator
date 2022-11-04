let jokeI=document.getElementById("joke");
let joke_btn=document.getElementById("joke_btn");

joke_btn.addEventListener("click" , getJoke);

async function getJoke(){
   let jokeVar= await fetch("https://icanhazdadjoke.com/", {
    headers:{
        "Accept" : "application/json"
    }
   });

   let joke= await jokeVar.json();

  // console.log(joke);
    jokeI.innerHTML=joke.joke;
}

