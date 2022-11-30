async function getCocktailRecipe(){
    const response = await fetch("https://thecocktaildb.com/api/json/v1/1/random.php")
    const data = await response.json()
    console.log(data.drinks[0])
    const drinkName = data.drinks[0].strDrink;
    console.log(drinkName);
    displayDrinkName(drinkName);
}

getCocktailRecipe();

function displayDrinkName(drink){
    console.log(drink)
    const drinkHeader = document.getElementById("drinkRecipe");
    console.log(drinkHeader)
    document.getElementById("drinkRecipe").innerHTML = "word";
}
//not sure why line 14 is not working properly.
