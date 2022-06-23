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
      let meals = mealObj.meals[0].strMeal
      let imgUrl = mealObj.meals[0].strMealThumb
      let par= mealObj.meals[0].strInstructions
      let lst = mealObj.meals[0].strIngredient1
      let lst1  = mealObj.meals[0].strIngredient2
      console.log(meals)
      let mealDiv = document.createElement('div')
      mealDiv.setAttribute("id", "meal-display")
      mealDiv.innerHTML = `<img src = "${imgUrl}"/>
                        <h3>${meals}</h3>
                        <h3> ingredients</h3>
                        <p>${lst}</p>
                        <p>${lst1}</p>
                        <p></p>
                        <p></p>
                        <p> ${par}</p>`
                    
    mealDisplay.append(mealDiv)
    console.log(mealDiv)
    
}

