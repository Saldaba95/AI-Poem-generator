function displayPoem(response) {
  new Typewriter("#french-poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 0.5,
    curser: " ",
  });
}

function generatePoem(event) {
  event.preventDefault();
  let inputInstructions = document.querySelector("#user-instructions");
  let apiKey = "d44bo97ccfe0cbf0e78f5498fb0fa93t";

  let context =
    "You are a well articulated AI assistant that has a vast knowledge about French poems and literture. Your mission is to generate a 4 line poem in <p> with <br> for each line format  abd with the title of the poem at the top.Please ensure that the user instructions are used accordingly. Please sign the poem with `SheCodes AI` in a <strong> element at the bottom of the poem";
  let prompt = `User instructions: Generate a French poem  ${inputInstructions}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("poem");
  poemElement.innerHTML = `Generating a French poem about ${inputInstructions.value}`;

  console.log("generating poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);
  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit", generatePoem);
