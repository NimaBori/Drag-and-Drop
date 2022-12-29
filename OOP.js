const imageEl = document.getElementById('image')
const boxes = document.querySelectorAll('.container .box')

function DragAndDrop() {
  this.dragStart = function(e) {
    e.dataTransfer.setData('img', e.target.id)
  
    setTimeout(() => {
      e.classList.add('hide');
    }, 0)
  }
  this.dragEnter = function(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
  }
  this.dragOver = function(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
  }
  this.dragLeave = function(e) {
    e.target.classList.remove('drag-over');
  }
  this.drop = function(e) {
    e.target.classList.remove('drag-over');    
    const id = e.dataTransfer.getData('img');
    const draggable = document.getElementById(id);    
    e.target.appendChild(draggable);    
    draggable.classList.remove('hide')
  }
}

const initiate = new DragAndDrop()


imageEl.addEventListener('dragstart', initiate.dragStart)

boxes.forEach(box => {  
  box.addEventListener('dragenter', initiate.dragEnter)
  box.addEventListener('dragover', initiate.dragOver)
  box.addEventListener('dragleave', initiate.dragLeave)
  box.addEventListener('drop', initiate.drop) 
})