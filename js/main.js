//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

document.querySelector('button').addEventListener('click', getDrink)

var input = document.getElementById("myInput");

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Trigger the button element with a click
    getDrink()
  }
});


function getDrink(){
    
    let drink = document.querySelector('input').value
    let short = function (arg){
      return document.querySelector(arg)
    }

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data.drinks)

      let appear = function (){
        document.querySelector('.carousel__nav').classList.add("carousel--selected")
      }
      appear();
      short('.slide1 h2').innerText = data.drinks[0].strDrink
      short('.slide1 img').src = data.drinks[0].strDrinkThumb
      short('.slide1 h3').innerText = data.drinks[0].strInstructions

      short('.slide2 h2').innerText = data.drinks[1].strDrink
      short('.slide2 img').src = data.drinks[1].strDrinkThumb
      short('.slide2 h3').innerText = data.drinks[1].strInstructions

      short('.slide3 h2').innerText = data.drinks[2].strDrink
      short('.slide3 img').src = data.drinks[2].strDrinkThumb
      short('.slide3 h3').innerText = data.drinks[2].strInstructions

    })
    .catch(err => {
        console.log(`error ${err}`)
    })

   //carousel 

    document.querySelectorAll('.carousel').forEach( carousel => {
      const items = carousel.querySelectorAll('.carousel__item');
      const buttons = carousel.querySelectorAll(".carousel__button");
      
      buttons.forEach((button, i) => {
          button.addEventListener("click", () => {
            //un-select all of items
            items.forEach(item => item.classList.remove("carousel__item--selected"));
            buttons.forEach(button => button.classList.remove("carousel__button--selected"));
    
            items[i].classList.add("carousel__item--selected");
            button.classList.add("carousel__button--selected");
         });
      });
    
      items[0].classList.add("carousel__item--selected");
      buttons[0].classList.add("carousel__button--selected");
    });
  
};

