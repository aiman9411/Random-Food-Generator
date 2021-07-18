const getMealButton = document.getElementById('get_meal')
const mealContainer = document.getElementById('meal')
const mealContainer2 = document.getElementById('meal2')

function lunchFood() {
    var food = ['Nasi Tomato', 'Nasi Kandar', 'Nasi Lauk Campur'];
    return food[Math.floor(Math.random() * 3)]
  }

function dinnerFood() {
    var dinner = ['Burger', 'Roti John', 'Nasi Goreng', 'Yong Tau Fu']
    return dinner[Math.floor(Math.random() * 4)]
}

getMealButton.addEventListener('click', function() {
    mealContainer.innerHTML = lunchFood();
    mealContainer2.innerHTML = dinnerFood();
})