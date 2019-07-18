let submitButton = document.getElementById('task');

submitButton.addEventListener('keyup', function(event) {
	if (event.keyCode === 13) {
		event.preventDefault();
		document.getElementById('submit').click();
	}
});

function openForm() {
	document.getElementById('addTask').style.display = 'block';
	document.getElementById('task').focus();
}

function closeForm() {
	document.getElementById('addTask').style.display = 'none';
	let input = document.getElementById('task').value;
	document.getElementById('task').value = '';
	addToList(input);
}

let fragment = document.createDocumentFragment();
let x = 1;

function addToList(input) {
	console.log(x);
	let task = document.createElement('p');
	task.id = x;
	task.appendChild(document.createTextNode(input));
	document.getElementById('listOfTasks').appendChild(task);
	addCheckBox(x);
	x++;
}
function addCheckBox(id) {
	let checkBox = document.createElement('a');
	checkBox.className = 'button is-rounded is-small';
	checkBox.id = 'checkBox';
	document.getElementById(id).appendChild(checkBox);

	let a = document.createElement('span');
	a.className = 'icon is-small';
	a.id = 'apple';
	document.getElementById(id).appendChild(a);

	let b = document.createElement('i');
	b.className = 'fas fa-check';
	document.getElementById(id).appendChild(b);
}
function deleteMe() {
	//test button
	// var parent = document.getElementById('listofTasks');
	// var child = document.getElementById('joke');
	// parent.removeChild(child);
	document.getElementById('1').outerHTML = '';
}
