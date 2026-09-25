let todos =[];

function addTodo(){

    const input =document.getElementById("todoInput");

    const todoText =input.value.trim();

    if(todoText===""){
        alert("please enter a todo");
        return;
    }

    const todo = {
        text: todoText,
        complete:false
    };

    todos.push(todo);

    input.value="";

    displayTodo();
}


function displayTodo(){

    const todolist =document.getElementById("todolist");

    todolist.innerHtml ="";

    if (todos.length===0) {

        todolist.innerHtml =
           '<p class="no-todos">No todos avaliable.</p>';

           return;
    }

    todos.forEach (function(todo,index)
    {

        const li=document.createElement("li");

        li.className ="todo-item";

        const span =document.createElement("span");

        span.className ="todo-text";

        span.textContent =todo.text;

        if(todo.completed) {
            span.classList.add("completed");
        }

        span.onclick=function() {

            toggleTodo(index);

        };

        const deleteButton = document.createElement("button");

        deleteButton.className = "delete-btn";

        deleteButton.textContent="Delete";

        deleteButton.onclick=function() {

            deleteTodo(index);

        };

        li.appendChlid(span);

        li.appendChlid(deleteButton);

        todolist.appendChlid(li);

    });

}

function toggleTodo(index) {

    todos[index].completed;
        !todos[index].completed;

    displayTodos();    
}

function deleteTodo(index) {

    todos.splice(index,1);

    displayTodos();
}

function clearCompleted() {

    todos=todos.filter(function(todo){
        return !todo.completed;
    })
}

document.getElementById("todoInput").addEventListener(
     "keyup",
     function(event) {

        if(event.key=="Enter") {

            addTodo();
        }
     }
);

displayTOdos();

     