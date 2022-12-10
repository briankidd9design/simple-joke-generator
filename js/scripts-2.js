// fetch the data
// map the data to the DOM
const url = "https://official-joke-api.appspot.com/random_joke";
async function loadJoke() {
    
  try {  
    let response = await fetch(url);
    // console.log(url);
        // .then((response) => response.json())
        // .then (data => (console.log(data)))
        // .then((data) => displayJoke(data.setup, data.punchline))
    let data = await response.json();
    console.log(data);
    if (!response.ok){
        console.log(data.description);
        return;
     }
     displayJoke(data.setup, data.punchline);
    //  console.log(data.setup);
} catch(error) {
    console.log("error getting the joke, joker!");
}
    // .catch((error) => console.log(`Fetch failed ${error}`));
}

function displayJoke(setup, punchline) {
    const joke = document.querySelector(".joke");
    joke.innerHTML = setup;

    const punchlineButton = document.querySelector(".punchline");
    const displayPunchline = document.querySelector(".display-punchline");

    punchlineButton.addEventListener("click", () => {
      displayPunchline.innerHTML = punchline;
      console.log(punchline);
      console.log("clicked punchline");
    });
  }





loadJoke();

const newJoke = document.querySelector('.new-joke');
newJoke.addEventListener('click', () => {
    loadJoke();
    document.querySelector(".display-punchline").innerHTML = '';
})