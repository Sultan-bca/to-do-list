
let todolist=[
    {
        item:'Buy milk',
        duedate:'4/10/23'
    },
    {
        item:'Buy snacks',
        duedate:'4/10/23' 
    }
];
   
displayItems();

function AddTodo(){
    let inputElement=document.querySelector('#todoinput');
    let dateElement=document.querySelector('#tododate');
    let TodoItem=inputElement.value;
    let Tododate=dateElement.value;
    todolist.push({item:TodoItem,duedate:Tododate});
    inputElement.value='';   // clear the input faield after adding the task
    dateElement.value='';

    displayItems();
}




function deleteTodo(index) {
    todolist.splice(index, 1);
    displayItems();
}

function displayItems() {
    let containerElement = document.querySelector('.todo-container');
    let newhtml = '';
    for (let i = 0; i < todolist.length; i++) {
        let { item, duedate } = todolist[i];
        newhtml += `
            <div>
                <span>${item}</span>
                <span>${duedate}</span>
                <button class="btndelete" onclick="deleteTodo(${i})">Delete</button>
            </div>
        `;
    }
    containerElement.innerHTML = newhtml;
}

