todoList = document.querySelector('#table');
var check = 0;


function displayList(data){

   // var table = document.createElement('table');
    var headrow = document.createElement('tr');

    
    var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = data.id;
        checkbox.disabled = data.completed
        checkbox.checked = data.completed;  

    var colu1 = document.createElement('td');
    colu1.textContent = data.id;
    var colu2 = document.createElement('td');
    colu2.textContent = data.title;
    var checkboxcell = document.createElement('td');
    checkboxcell.appendChild(checkbox); 

    headrow.appendChild(colu1);
    headrow.appendChild(colu2);
    headrow.appendChild(checkboxcell);

    //table.appendChild(headrow);
    checkbox.addEventListener('change', () => completed(checkbox.checked));

    return headrow

}


function completed(isChecked){
    const newmodal = new bootstrap.Modal(document.querySelector('.modal'));
    if (isChecked){
        check++;
        if(check === 5)
            
            newmodal.show();
       // alert('Congrats. 5 Tasks have been Successfully Completed');
    }
}

function createTable(){

    //var table = document.createElement('table');
    var headrow = document.createElement('tr');

    var col1 = document.createElement('th');
    col1.textContent = 'No'
    var col2 = document.createElement('th');
    col2.textContent = 'Todolist'
    var col3 = document.createElement('th');
    col3.textContent = 'Status'

    headrow.appendChild(col1);
    headrow.appendChild(col2);
    headrow.appendChild(col3);

   // table.appendChild(headrow);

    todoList.appendChild(headrow);

}






function dataFetch(){

    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(elements => {
        createTable()
        elements.forEach(element => {
            const itemList = displayList(element);
            todoList.appendChild(itemList);
    
        });
    })
    .catch(error => console.log(error, `Error is ${error}`))
    
    }
    
    function goLogin(){
        window.location.href = 'index.html';
    }
    