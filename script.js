document.addEventListener("DOMContentLoaded", () => {
  const santaJoke = document.querySelector(".santa-joke");
  const bantaJoke = document.querySelector(".banta-joke");
  const categoryDisplay = document.querySelector(".category");
  const nextJokeButton = document.querySelector(".next-joke");

  async function getJoke() {
    const url = `https://v2.jokeapi.dev/joke/Any?type=twopart`;
    try {
      const response = await fetch(url);
      const joke = await response.json();//why using the await 2 times -> because first time we are getting the response as promise and then by using promise we get object from where we are solving this.
      if (!joke.error) {
        console.log(joke);
        
        santaJoke.textContent = `>> Santa : ${joke.setup}`;
        bantaJoke.textContent = `>> Banta : ${joke.delivery}`;
        categoryDisplay.textContent = `Description : ${joke.category}`;
        nextJokeButton.classList.remove("hidden");
      }
    } catch (error) {
      console.log(`Error Fetched: ${error}`);
    }
  }
  nextJokeButton.addEventListener('click',getJoke)
  getJoke();
});
