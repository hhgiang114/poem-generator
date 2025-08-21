function generatePoem(event) {
  event.preventDefault();
  var poemElement = document.getElementById("poem-content");
  new Typewriter(poemElement, {
    strings: "abcfasas fasfasfas",
    autoStart: true,
    delay: 10,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-form");
poemFormElement.addEventListener("submit", generatePoem);
