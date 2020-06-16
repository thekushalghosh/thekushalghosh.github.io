var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");
var filter = document.getElementById('filter');
var itemList = document.getElementById('items');

function inputLength(){
	return input.value.length;
} 

function listLength(){
	return item.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li); 
	input.value = "";


	function crossOut() {
		li.classList.toggle("done");
	}
	var list = document.querySelector('ul');
	list.addEventListener('click', function(ev) {
	if (ev.target.tagName == 'li') {
		ev.target.classList.toggle('checked');
	}
	}, false);

	li.addEventListener("click",crossOut);


	var dBtn = document.createElement("button");
	dBtn.appendChild(document.createTextNode("X"));
	li.appendChild(dBtn);
	dBtn.addEventListener("click", deleteListItem);


	function deleteListItem(){
		li.classList.add("delete")
	}
}


function addListAfterClick(){
	if (inputLength() > 0) { 
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.which ===13) { 
		createListElement();
	} 
}


enterButton.addEventListener("click",addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
filter.addEventListener('keyup', filterItems);
function filterItems(e){
  var text = e.target.value.toLowerCase();
  var items = itemList.getElementsByTagName('li');
  console.log(e);
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
