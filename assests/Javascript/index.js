const getMealBtn = document.getElementById("get_meal");
const mealContainer = document.getElementById("meal");
const mealDisplay = document.getElementById("meal");
console.log(mealDisplay);

getMealBtn.addEventListener("click", () => {
  fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then((res) => res.json())
    .then(function (mealObj) {
      console.log(mealObj);
      renderMeal(mealObj);
    });
});

function renderMeal(mealObj) {
  let meals = mealObj.meals[0].strMeal;
  let category = mealObj.meals[0].strCategory;
  let imgUrl = mealObj.meals[0].strMealThumb;
  let par = mealObj.meals[0].strInstructions;

  console.log(meals);
  let mealDiv = document.createElement("div");
  mealDiv.setAttribute("id", "meal-display");
  mealDiv.innerHTML = `<img src = "${imgUrl}"/>
                            <h3>${meals}</h3>
                             <h3>Category:${category}</h3>
                             <h3>Ingredients</h3>
                             <h3> Instructions </h3>
                             
                            <p> ${par}</p>
                            <div>
    
    `;
  let form = document.createElement("form");
      form.addEventListener("submit", addComment);
  let inputComment = document.createElement("input");
    inputComment.setAttribute("type", "text");
    inputComment.value= ""
  let inputSubmit = document.createElement("input");
    inputComment.name= "comment"
    inputComment.setAttribute("type", "submit");
    inputComment.setAttribute("value", "Submit")

form.appendChild(inputSubmit)
form.appendChild(inputComment)
      let h1 = document.createElement("h1")
      h1.textContent = "Add Review"
     let div = document.createElement("div")
       div.appendChild(h1)
       div.appendChild(form)
 mealDiv.appendChild(div)
 mealDisplay.append(mealDiv);
  console.log(mealDiv);
}
let ul = document.createElement("ul")

function addComment(e) {
    e.preventDefault()
    let li = document.createElement("li")
  
  li.textContent =  e.target.children[0].value
  ul.appendChild(li)
  e.target.parentNode.parentNode.appendChild(ul)

}

