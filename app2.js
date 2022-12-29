const imageEl = document.getElementById('image')
const boxes = document.querySelectorAll('.container .box')

boxes.forEach(box => {
  box.addEventListener('dragover', (e) => {    
    e.preventDefault();
  })
  box.addEventListener('drop', (e) => {
    e.target.append(imageEl)
  })
})