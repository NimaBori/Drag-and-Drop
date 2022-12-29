const imageEl = document.getElementById('image')
const boxes = document.querySelectorAll('.container .box')

imageEl.addEventListener('dragstart', dragStart)

boxes.forEach(box => {  
  box.addEventListener('dragenter', dragEnter)
  box.addEventListener('dragover', dragOver)
  box.addEventListener('dragleave', dragLeave)
  box.addEventListener('drop', drop) 
})


function dragStart(e) { 
  e.dataTransfer.setData('img', e.target.id)
  
  setTimeout(() => {
    e.classList.add('hide');
  }, 0)  
}

function dragEnter(e) {  
  e.preventDefault();
  e.target.classList.add('drag-over');
}

function dragOver(e) {  
  e.preventDefault();
  e.target.classList.add('drag-over');
}

function dragLeave(e) {  
  e.target.classList.remove('drag-over');
}

function drop(e) {  
  e.target.classList.remove('drag-over');
  // get the draggable element
  const id = e.dataTransfer.getData('img');
  const draggable = document.getElementById(id);

  // add it to the drop target
  e.target.appendChild(draggable);

  // display the draggable element
  draggable.classList.remove('hide');  
}
