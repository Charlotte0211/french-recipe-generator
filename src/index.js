function generateRecipe(event) {
    event.preventDefault();

new Typewriter('#recipe', {
  strings: "Recipe will appear here!",
  autoStart: true,
  Delay:1,
  cursor: " "
});
}


let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
