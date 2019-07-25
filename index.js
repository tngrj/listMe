let submitButton = document.getElementById('task');
let taskStorage = [];

window.addEventListener('DOMContentLoaded', e => {
	let storedTasks = JSON.parse(localStorage.getItem('taskStorage'));
	storedTasks.forEach(function(task) {
		addToList(task);
	});
});

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
	if (input.length > 1) {
		document.getElementById('task').value = '';
		addToList(input);
	}
}

let x = 1;

function addToList(input) {
	taskStorage.push(input);
	saveTasks();
	let task = document.createElement('p');
	task.id = x;
	task.appendChild(document.createTextNode(input));
	document.getElementById('listOfTasks').appendChild(task);
	addCheckBox(x);
	x++;
}

function addCheckBox(id) {
	create(
		'a',
		{
			id: 'checkBox',
			parent: id,
			class: 'button is-rounded is-small'
		},
		[
			create(
				'span',
				{
					parent: id,
					id: 'apple',
					class: 'icon is-small'
				},
				[
					create('i', {
						class: 'fa fa-check'
					})
				]
			)
		]
	);
	document.getElementById(id).setAttribute('onclick', 'deleteMe(this.id)');
}

function create(name, props, children) {
	let elem = document.createElement(name);
	const parent = props.parent;
	let keys = Object.keys(props);
	keys = keys.filter(function(key) {
		return key !== 'parent';
	});
	keys.forEach(function(key) {
		elem.setAttribute(key, props[key]);
	});
	if (children && children.length) {
		children.forEach(function(child) {
			elem.appendChild(child);
		});
	}
	if (parent) {
		document.getElementById(x).appendChild(elem);
	}
	return elem;
}

function deleteMe(id) {
	// Another method
	// var parent = document.getElementById('listofTasks');
	// var child = document.getElementById(id);
	// parent.removeChild(child);

	let removeTask = document.getElementById(id).textContent;
	taskStorage = taskStorage.filter(item => item !== removeTask);
	document.getElementById(id).outerHTML = '';
	saveTasks();
}

function saveTasks() {
	if (window.localStorage) {
		localStorage.setItem('taskStorage', JSON.stringify(taskStorage));
		console.log('ran');
	} else {
		alert('Tasks added will not be saved');
	}
}
