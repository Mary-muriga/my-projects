const getMealBtn = document.getElementById('get_meal');
const mealContainer = document.getElementById('meal');
const mealDisplay = document.getElementById('meal')
console.log(mealDisplay)

getMealBtn.addEventListener('click', () =>{
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(res => res.json())
    .then(function(mealObj){
        console.log(typeof mealObj)
        renderMeal(mealObj)

    })
     
});
function renderMeal(mealObj){
    const ingredients = [];
    for(i=1; i<=20; i++){
        if(mealObj[`strIngredients${i}`]){
            ingredients.push(
                `${mealObj[`strIngredient${i}`]}-
            ${mealObj[`strMeasure${i}`]}`
            )
        }else {
            break;
        }
    }

    console.log(ingredients);

      let meals = mealObj.meals[0].strMeal
      let category = mealObj.meals[0].strCategory
      let imgUrl = mealObj.meals[0].strMealThumb
      let par = mealObj.meals[0].strInstructions
      //let ingredients = mealObj.meals[0].strIngredient1
      //let ingredients1 = mealObj.meals[0].strIngredient2
      //let ingredients2 = mealObj.meals[0].strIngredient3
      //let ingredients3 = mealObj.meals[0].strIngredient4
      //let ingredients4 = mealObj.meals[0].strIngredient5
      //let ingredients5 = mealObj.meals[0].strIngredient6
      //let ingredients6 = mealObj.meals[0].strIngredient7
      //let ingredients7 = mealObj.meals[0].strIngredient8
      console.log(meals)
      let mealDiv = document.createElement('div')
      mealDiv.setAttribute("id", "meal-display")
      mealDiv.innerHTML = `<img src = "${imgUrl}"/>
                        <h3>${meals}</h3>
                        <p><strong> Category:</strong>${category}</p>
                        <h3> ingredients</h3>
                        <ul> 
                        ${ingredients.map(ingredient =>`
                        <li> ${ingredient}</li>`
                            )}
                        </ul>
                        <h3> Instructions </h3>
                        <p> ${par}</p>`
                        
                               
                    
    mealDisplay.append(mealDiv)
    console.log(mealDiv)
    
}

