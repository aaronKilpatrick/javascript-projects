// Recipe container
const container = document.querySelector('.container');

/* Menu Variables */
// Recipe menu parent element
const menuList = document.createElement('ul');
// Recipe Menu Contents
let recipeMenu = "";

/* Recipe Variables */


// Dynamically creates recipe menu and appends to the container
function createRecipeMenu(allRecipes) {
    
    menuList.setAttribute('class', 'menu')
    container.appendChild(menuList);

    // Makes sure recipe list hasn't been created yet. Saves time and we won't be
    // adding any new recipes will this is running
    if (!recipeMenu) {
        allRecipes.forEach((recipe, i) => {
            recipeMenu += `<li><a href="#" data-index="${i}">${recipe.recipe_name}</a></li>`;
        });
    }
    
    // Inserts the recipeMenu list elements into the menuList
    menuList.innerHTML = recipeMenu;
}

// removes menu from container. I might take this out and use a collapsible menu instead. 
// I will use this first for dubbing and adjust later
function removeRecipeMenu() {
    container.removeChild(menuList);
}


// Creates the recipe card for the user to see.
function createRecipeCard(selectedRecipe) {
    let ingredientList = "";
    let methodList = "";

    removeRecipeMenu();

    // Recipe Card Container
    const recipeCard = document.createElement('article');
    recipeCard.setAttribute('class', 'recipe-card');

    // Recipe Name
    const recipeName = document.createElement('h1');
    recipeName.setAttribute('class', 'recipe-name');
    recipeName.textContent = selectedRecipe.recipe_name; 
    
    // Recipe Data eg. Serves, Cook Time, Prep Time
    const recipeData = document.createElement('div');
    recipeData.setAttribute('class', 'recipe-data');



    // Ingredients List
    const ingredientsHeading = document.createElement('h2');
    ingredientsHeading.innerHTML = "Ingredients";

    const recipeIngredients = document.createElement('ul');
    recipeIngredients.setAttribute('class', 'recipe-ing');
    // Loop through ingredients and add them to the ingredients list variable
    selectedRecipe.ingredients.forEach((ingredient) => {
        ingredientList += `<li>${ingredient}</li>`;
    });
    recipeIngredients.innerHTML = ingredientList;


    // Ordered List for method
    const methodHeading = document.createElement('h2');
    methodHeading.innerHTML = "Method";

    const recipeMethod = document.createElement('ol');
    recipeMethod.setAttribute('class', 'recipe-method');

    selectedRecipe.method.forEach((meth) => {
        methodList += `<li>${meth}</li>`
    });
    recipeMethod.innerHTML = methodList;

    

    container.appendChild(recipeCard);
    recipeCard.appendChild(recipeName);

    recipeCard.appendChild(ingredientsHeading);
    recipeCard.appendChild(recipeIngredients);

    recipeCard.appendChild(methodHeading);
    recipeCard.appendChild(recipeMethod);


}





fetch('json/recipes.json')
    .then((response) => {
        return response.json();
    })
    .then((recipes) => {

        //  Create the menu
        createRecipeMenu(recipes);

        // Listen out for menu click. See note #1 below for how menu functionality works
        let recipeIndex = menuList.addEventListener("click", (event) => {
            menuIndex = event.target.dataset.index;
            
            createRecipeCard(recipes[menuIndex]);
        });

    }).then((recipes) => {

        

    })
    .catch((error) => {
        console.log(error);
    });



/* 
    // createRecipteMenu()
    Creates the menu by looping through each recipe name found in the json and appending it to the end of 
    recipeMenu (-g).
    The if statement makes sure the menu hasn't been made before. This frees up processing power.

    // deleteRecipeMenu()
    I really beleive this is just for debugging functionality. I will remove it later down the track when
    everything working and I implement a collapsible menu.

    // note #1
    The menu will work by reading the dataset-index value from the <li>. This dataset-index correlates with
    the jsons array index.
    
*/
  


