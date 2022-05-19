//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Event listners


//For creating new todo...
todoButton.addEventListener('click', function(e){
    e.preventDefault();
    //Todo Div element
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    //Individual Todo...
    const Todo = document.createElement('li');
    Todo.innerText = todoInput.value;
    Todo.classList.add('my-todo');
    todoDiv.appendChild(Todo); 
    
    // Completed Button...
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>'
    completedButton.classList.add('completed-button');
    todoDiv.appendChild(completedButton);

    // Trash Button...
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'
    trashButton.classList.add('trash-button');
    todoDiv.appendChild(trashButton);
    if(todoInput.value !== ''){

        todoList.appendChild(todoDiv);
    }else{
        alert(
            'You need to fill input'
        )
    }

    //Clear todo input valve
    todoInput.value = ""
});

// FOR Deleting a todo
todoList.addEventListener('click', (e)=>{
    const item = e.target;
    if(item.classList[0] === 'trash-button'){
        const todo = item.parentElement;
        todo.classList.add('fall');
        todo.addEventListener('transitionend', (e) =>{

            todo.remove();
        })
    }

});


//For checking the todos...

todoList.addEventListener('click', (e) =>{
    const item = e.target;
    if(item.classList[0] === 'completed-button'){
        const todoDiv = item.parentElement;
        todoDiv.classList.add('fade');

    }
});