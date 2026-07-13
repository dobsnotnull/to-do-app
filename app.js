
// First find all the elements you want to find first, if there's anymore you can come and add them here

const todoForm = document.querySelector("form");
const todoInput = document.getElementById("todo-input");
const todoListUl = document.getElementById("todo-list");


// Create an empty array

let allToDos = [];



// todoForm is the name of the const created for the form ID

// Then an eventlistener is created to listen to an event type which we will title "submit"

// Then we make a callback function with a parameter (e)

// Can use function(e) or you can use (e) =>


todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("wagwan gang");
});


