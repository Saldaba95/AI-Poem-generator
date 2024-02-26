function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#french-poem", {
    strings:
      "Aimer C’est ce qu’il y a de plus beau Aimer C’est monter si haut Et toucher les ailes des oiseaux  Aimer C’est ce qu’il y a de plus beau ",
    autoStart: true,
    delay: 0.5,
    curser: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit", generatePoem);
