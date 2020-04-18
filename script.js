const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')


var uncheckedCount = 0

function newTodo() {
  let listLength = list.childNodes.length + 1
  
  let delToDo = document.createElement('button')
  delToDo.classList.add(classNames.TODO_DELETE)
  delToDo.textContent = 'Del'
  delToDo.addEventListener('click', function e() {
	listLength = list.childNodes.length - 1
	itemCountSpan.innerHTML = listLength

	if (!delToDo.nextSibling.firstElementChild.checked) {
		uncheckedCount--
		uncheckedCountSpan.innerHTML = uncheckedCount
	}
	
	delToDo.parentNode.remove()	
	
  })

  let checkB = document.createElement('input')
  checkB.classList.add(classNames.TODO_CHECKBOX)
  checkB.setAttribute("type", "checkbox")
  checkB.addEventListener('click', function e(){
	  if (this.checked) uncheckedCount--
	  else uncheckedCount++
	  uncheckedCountSpan.innerHTML = uncheckedCount})
  
  let lab = document.createElement('label')
  lab.appendChild (checkB)
  
  let txt = document.createElement('span');
  txt.textContent =' item ' + listLength
  txt.classList.add(classNames.TODO_TEXT)
  lab.appendChild(txt)
  
  let newItem = document.createElement('li')
  newItem.appendChild(delToDo)
  newItem.appendChild(lab)
  list.append(newItem)
  itemCountSpan.innerHTML = listLength
  uncheckedCount++
  uncheckedCountSpan.innerHTML = uncheckedCount
}


