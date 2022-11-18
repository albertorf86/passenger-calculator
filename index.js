
//Defining saveEl and countEl using the DOM to get to the required ids
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

//Function to increment passenger count
function increment() {
    count += 1
    countEl.textContent = count
}

//Function to save passenger count
function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}
