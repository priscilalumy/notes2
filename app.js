let notes = [];
let listName = [];
let myLS = localStorage;
let title = ""
let note = ""

getLS();


let createButton = document.getElementById('bt_create');
createButton.addEventListener('click', (e) => {
	createNote();
	listNames();
	saveLS();
})

let openItem = document.getElementById('selectid');
openItem.addEventListener('change', (e) => {
	openNote();
})

let deleteItem = document.getElementById('bt_del');
deleteItem.addEventListener('click', (e) =>{
	deleteNote();
	listNames();
	saveLS();
})

let saveItem = document.getElementById('bt_save');
saveItem.addEventListener('click', (e) =>{
	saveNote();
	listNames();
	saveLS();
})



//get the items and show as options to open
function openNote() {
	

	for (let i=0; i < notes.length; i++) {
		if (openItem.value == notes[i][0]){

			document.getElementById('input_name').value = notes[i][0];
			document.getElementById('input_text').value = notes[i][1];

			title = notes[i][0];
			note = notes[i][1];

			showNote();
		}
	}
	
}

//get name and create a new object in an array
function createNote() {
	let name = document.getElementById('input_name').value;
	let text = document.getElementById('input_text').value;


	let myNote = [name,text];
	notes.push(myNote);

	console.log(notes);
	console.log(myNote);
}

//remove the item that is open
function deleteNote() {
	
	let vTitle = document.getElementById('input_name').value;

	for (let i=0; i < notes.length; i++) {


		if (vTitle == notes[i][0]){
			notes.splice(i, 1);
		}
	}
}

//save the note
function saveNote() {
	let vTitle = document.getElementById('input_name').value;
	for (let i=0; i < notes.length; i++) {
		if (vTitle == notes[i][0]){
			notes[i][1] = document.getElementById('input_text').value;

		}
	}
}

//list the existing notes
function listNames() {
	let selid = document.getElementById('selectid');
	selid.innerHTML = '';
	let opt0 = document.createElement('option');
	selid.appendChild(opt0);
	for (let i=0; i < notes.length; i++) {
		listName.push(notes[i][0]);

		
		let opt = document.createElement('option');
		opt.textContent=notes[i][0];
		selid.appendChild(opt);
	}
}

//save in localStorage
function saveLS() {
	myLS.setItem('mynotes', JSON.stringify(notes));
}

function getLS() {
	notes = JSON.parse(myLS.getItem('mynotes'));

	if (notes == null) {
		notes = [];
	}

	listNames();
}

//show note on the right

function showNote() {
	document.getElementById('show_note').innerHTML = '<h3>'+title+'</h3><p>'+note+'</p>';
}
