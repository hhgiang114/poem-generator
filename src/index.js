function displayPoem(response) {
  console.log("Poem being generated...");
  var poemElement = document.getElementById("poem-content");
  new Typewriter(poemElement, {
    strings: response.data.answer,
    autoStart: true,
    delay: 10,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let userInput = document.querySelector("#users-input");
  //Build the API URL
  let apiKey = "5e09t7e3918eccf10f64a90eo086bf29";
  let prompt = `User instructions: Generate a poem about ${userInput.value}`;
  let context =
    "You are a romantic poem expert and love to write short poems. Your mission is to generate a 4-20 line poem in HTML and separate each line with break. Make sure to follow the user instructions. Do not include a title and HTML tag to the poem.";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}
`;

  console.log("Generating poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  //Make a call to the API and the display the generated poem
  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);
