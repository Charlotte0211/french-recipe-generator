document.addEventListener("DOMContentLoaded", function() {
    function displayRecipe(response) {
        console.log("Recipe generated");

        new Typewriter('#recipe', {
            strings: response.data.answer,
            autoStart: true,
            delay: 1, // Corrected from Delay to delay
            cursor: " "
        });
    }

    function generateRecipe(event) {
        event.preventDefault();

        let ingredients = document.querySelector("#ingredients");
        let apiKey = "o4045te388f5bc6e0abcc5fba3a40236";
        let prompt = `Generate a recipe with the following ingredients: ${ingredients.value}`;
        let context = `You are a busy person who wants to cook a meal with a list of ingredients you have at home. Your mission is to generate a recipe in basic html: ${ingredients.value}`;
        let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

        console.log("Generating recipe");
        console.log(`Prompt: ${prompt}`);
        console.log(`Context: ${context}`);

        axios.get(apiUrl).then(displayRecipe);
    }

    let recipeFormElement = document.querySelector("#recipe-generator-form");
    recipeFormElement.addEventListener("submit", generateRecipe);
});
