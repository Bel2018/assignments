
const ulList = document.getElementById('list');
const listInput = document.getElementById('title');
const form = document.getElementById('add-todo');
const clear = document.querySelector('.clear-btn');
// const deleteButton = document.querySelector('.delete-btn');


 // load eventlistener
form.addEventListener('submit', addLists);



// clear list button
clear.addEventListener('click', clearLists);


// create function
function addLists(e) {
    if(listInput.value==='') {
      alert('Please add your list');
    }
    // create li
    const li = document.createElement('li');

    // crete li class
    li.className='list-item';


    // create div
    const div = document.createElement('div');
    // add className
    div.className = 'text-list';

    // crete edit button
    const buttonOne = document.createElement('button');
    // add class
    buttonOne.className = 'edit-btn';

    const buttonTwo = document.createElement('button');
    buttonTwo.className = 'delete-btn';


    div.appendChild(document.createTextNode(listInput.value));
    buttonOne.appendChild(document.createTextNode('edit'));
    buttonTwo.appendChild(document.createTextNode('X'));

    buttonTwo.addEventListener('click', deleteList);

    li.appendChild(div);
    li.appendChild(buttonOne);
    li.appendChild(buttonTwo);
    ulList.appendChild(li);
    listInput.value = '';

    console.log(li);

      e.preventDefault();
}

// delete button
function deleteList(e) {

    e.target.parentElement.remove();

}


// clear lists button
function clearLists() {
  while(ulList.firstChild){
    ulList.removeChild(ulList.firstChild);
  }
}
