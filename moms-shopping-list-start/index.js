
const ulList = document.getElementById('list');
const listInput = document.getElementById('title');
const form = document.getElementById('add-todo').addEventListener('submit', addLists);

function addLists(e) {

// create li
const li = document.createElement('li');
// create div
const div = document.createElement('div');

const buttonOne = document.createElement('button');
const buttonTwo = document.createElement('button');


div.appendChild(document.createTextNode(listInput.value));
buttonOne.appendChild(document.createTextNode('edit'));
buttonTwo.appendChild(document.createTextNode('X'));

li.appendChild(div);
li.appendChild(buttonOne);
li.appendChild(buttonTwo);
ulList.appendChild(li);
listInput.value = '';


  e.preventDefault();
}
