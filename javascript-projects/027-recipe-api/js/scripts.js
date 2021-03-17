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
    let ingredients = "";
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
    const recipeIngrediets = document.createElement('ul');
    recipeIngrediets.setAttribute('class', 'recipe-ing');

    // Ordered List for method
    const recipeMethod = document.createElement('div');
    recipeMethod.setAttribute('class', 'recipe-method');
    //selectedRecipe.ingre


    container.appendChild(recipeCard);
    recipeCard.appendChild(recipeName);
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
  


