// fetch the data
// map the data to the DOM
const url = "https://official-joke-api.appspot.com/random_joke";
function loadJoke() {
    fetch(url)
    .then((response) => response.json())
    // .then (data => (console.log(data)))
    .then((data) => displayJoke(data.setup, data.punchline))
    .then((data) => console.log(data))
    .catch((error) => console.log(`Fetch failed ${error}`));

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
}
loadJoke();

const newJoke = document.querySelector('.new-joke');
newJoke.addEventListener('click', () => {
    loadJoke();
    document.querySelector(".display-punchline").innerHTML = '';
})