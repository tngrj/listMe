let submitButton = document.getElementById('task');

submitButton.addEventListener('keyup', function(event) {
	if (event.keyCode === 13) {
		event.preventDefault();
		document.getElementById('submit').click();
	}
});

function openForm() {
	document.getElementById('addTask').style.display = 'block';
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
	let para = document.createElement('p');
	para.id = x;
	para.appendChild(document.createTextNode(input));
	let element = document.getElementById('listOfTasks');
	element.appendChild(para);
	addCheckBox(x);
	x++;
}
function addCheckBox(id) {
	let checkBox = document.createElement('a');
	checkBox.className = 'button is-rounded is-small';
	document.getElementById(id).appendChild(checkBox);
}
function deleteMe() {
	//test button
	// var parent = document.getElementById('listofTasks');
	// var child = document.getElementById('joke');
	// parent.removeChild(child);
	document.getElementById('1').outerHTML = '';
}
