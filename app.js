
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
        updateTodoList();
        todoInput.value="";
    }
}


function updateTodoList(){
    todoListUl.innerHTML = "",
    allTodos.forEach((todo, todoIndex) => {
    todoItem = createTodoItem(todo, todoIndex);
    todoListUl.append(todoItem);
    })
}


function createTodoItem(todo, todoIndex) {
    const todoId = "todo-" +todoIndex;
    const todoLi = document.createElement ("li");
    todoLi.className = "todo";
    todoLi.innerHTML = `
          <input type = "checkbox" id = "${todoId}">

                    <label for="${todoId}" class="custom-checkbox">

                        <i data-lucide="check"></i>

                    </label>

                    <label for="${todoId}" class="todo-text">${todo}</label>

                    <button class="delete-button"><i data-lucide="trash-2"></i></button>
        `

        return todoLi;
}
\
function saveTodos() {
    
}
