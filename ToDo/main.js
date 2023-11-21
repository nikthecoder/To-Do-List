//here we declare some global variables
var totalLines = 0;
var lines = 0;
var checkedItems = 0;
let allChecked = false;
var allBtn = document.getElementById("all");
var activeBtn = document.getElementById("active");
var completeBtn = document.getElementById("completed");
const categoryBtns = document.querySelectorAll('.categoryBtn');
const markAllBtn = document.getElementById("markAll");
var container = document.getElementById("container");
var form = document.querySelector("form");
var removeCompleted = document.getElementById("removeCompleted");
var clear = document.getElementById("clear");
var checkboxes = document.querySelectorAll(".check");

// the buttons to show completed/active/all todos does similar things so we just
// call the filter method with different parameters
completeBtn.onclick = function () {
	filter("completed");
};

activeBtn.onclick = function () {
	filter("active");

};

allBtn.onclick = function () {
	filter("all");
};

//this is our method that filters what to show, depending on whats checked as completed, and what button we pressed
function filter(method) {
	var checkboxes = document.getElementsByClassName("check");
	for (var i = 0; i < checkboxes.length; i++) {
		var checked = checkboxes.item(i).checked;
		if ((checked && method == 'completed') || (!checked && method == 'active') || method == 'all') {
			checkboxes.item(i).parentNode.style.display = 'flex';
		}
		else {
			checkboxes.item(i).parentNode.style.display = 'none';
		}
	}
}

//this funcion changes all checboxes to checked, unless all is allready checked, then it unchecks them, adds appropriate styling
//effectively, a toggle function
function check(checked = true) {
	const cbs = document.querySelectorAll('.check');
	cbs.forEach((cb) => {
		if (allChecked == false) {
			clear.style.visibility = "visible";
			cb.checked = true;
			checkedItems = totalLines;
			cb.parentNode.children[1].style.textDecoration = "line-through";
			cb.parentNode.children[1].style.color = "#d9d9d9";
		}
		else {
			clear.style.visibility = "hidden";
			cb.checked = false;
			checkedItems = 0;
			cb.parentNode.children[1].style.textDecoration = "none";
			cb.parentNode.children[1].style.color = "black";
		}
	});
	allChecked = allChecked ? false : true;
}


//we call our "toggle" function on this button
markAllBtn.onclick = function () {
	check();
	calcOutput();
}

//this eventhandler starts if we press "enter"
//first we check if the user has written anything in the input
//then we add the new todo, reset the form so we get back our placeholder text
//and we prevent the default behaviour so the page doesnt get refreshed
document.onkeydown = function (event, keycode) {
	if (event.keyCode === 13) {
		if (form.elements.todoInput.value != "") {
			addNewLine();
			form.reset();
		}
		event.preventDefault();
	}
}

//this function adds the user input on our todolist
function addNewLine() {
	//this variable keeps track on how many lines we have
	totalLines++;
	lines++;
	//if we call this function we want our category buttons to be shown
	for (var i = 0; i < categoryBtns.length; i++) {
		output.style.display = "inline-block";
		categoryBtns[i].style.display = "inline-block";
		markAllBtn.style.visibility = "visible";
	}
	var textInput = document.getElementById("todoInput").value;
	var todoList = document.getElementById("todoList");
	var newLine = document.createElement("li");
	newLine.className = "listItem";
	//here we add to our li a checkbox and a delete span with the id of the variable that keeps tracks on our lines
	newLine.innerHTML = "<input class='check' onclick='todoClick(" + lines + ")' type='checkbox' id='" + lines + "'><div class='note'>" + textInput + "</div> <span class=" + "delete" + " onclick='delLine(" + lines + ");'>❌</span>";

	todoList.appendChild(newLine);
	calcOutput();
}

//this delete function gets called when we click the del span or
//the button to remove all completed
function delLine(lineID, delcompleted = 0) {

	if (delcompleted) {
		var checkboxes = document.querySelectorAll(".check:checked");
		for (i = 0; i < checkboxes.length; i++) {
			checkboxes.item(i).parentNode.remove();
			totalLines--;
		}
		checkedItems = 0;
		clear.style.visibility = "hidden";
	}

	else if (lineID) {
		//removes the parent of the element with the lineID

		var check = document.getElementById(lineID);
		//the variable gets updated
		if (!check.checked) {
			totalLines--;
		}
		else {
			checkedItems--;
			totalLines--;
		}
		document.getElementById(lineID).parentNode.remove();
		//and if we dont have any todos we want to hide theese buttons again
	}
	if (totalLines < 1) {
		for (var i = 0; i < categoryBtns.length; i++) {
			categoryBtns[i].style.display = "none";
			markAllBtn.style.visibility = "hidden";
			output.style.display = "none";
		}

	}
	if (checkedItems > 0) {
		clear.style.visibility = "visible";
	}
	else {
		clear.style.visibility = "hidden";
	}
	calcOutput();
}

// this function records the amount of checked items when a checkbox is clicked, effectively an eventlistener, adds styling
function todoClick(checkID) {
	var check = document.getElementById(checkID);

	if (check.checked == true) {
		checkedItems++;
		check.parentNode.children[1].style.textDecoration = "line-through";
		check.parentNode.children[1].style.color = "#d9d9d9";
	}
	else {
		checkedItems--;
		check.parentNode.children[1].style.textDecoration = "none";
		check.parentNode.children[1].style.color = "black";
	}

	if (checkedItems > 0) {
		clear.style.visibility = "visible";
	}
	else {
		clear.style.visibility = "hidden";
	}
	calcOutput();
}

// this function calculates and updates output - the amount of tasks left
function calcOutput() {
	var output = totalLines - checkedItems;
	var itemsLeft = document.getElementById("output");
	itemsLeft.innerHTML = output + " items left";
}


