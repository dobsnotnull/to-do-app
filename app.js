
// First find all the elements you want to find first, if there's anymore you can come and add them here

const todoForm = document.querySelector("form");
const todoInput = document.getElementById("todo-input");
const todoListUl = document.getElementById("todo-list");


// Create an empty array

let allTodos = [];



// todoForm is the name of the const created for the form ID

// Then an eventlistener is created to listen to an event type which we will title "submit"

// Then we make a callback function with a parameter (e)

// Can use function(e) or you can use (e) =>


todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    addTodo();
});


// Fucntion that adds the thing that you're typing

function addTodo() {
    const todoText = todoInput.value.trim();
    allTodos.push(todoText);

    if(todoText.length > 0) {
        console.log(allTodos);
        createTodoItem(todoText);
        todoInput.value="";
    }
}

function createTodoItem(todo) {
    const todoLi = document.createElement ("li");
    todoLi.innerText = todo;
    todoListUl.append(todoLi);
}


function updateTodoList( {
    
})


