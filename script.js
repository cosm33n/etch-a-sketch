// const DEFAULT_SIZE = 16

let currentColor = '#333'
let currentState = false
let currentSize = 100



function setCurrentColor(newColor) {
    currentColor = newColor
}


function setCurrentSize(newSize) {
    currentSize = newSize
}

const grid = document.getElementById('grid')

const clearBtn = document.getElementById('clearBtn')

clearBtn.addEventListener('click', reloadGrid)

function setupGrid(size) {
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

  for (let i = 0; i < size ** 2; i++) {
    const gridElem = document.createElement('div')
    gridElem.classList.add('gridElem')

    grid.addEventListener('click', toggleColoring)
    // gridElem.addEventListener('mouseover', changeColor)
    grid.appendChild(gridElem)
  }
}

function changeColor(e) {
  // if(e.type === 'mouseover') return
  e.target.style.backgroundColor = currentColor
}

function toggleColoring() {
  const gridElems = document.querySelectorAll('.gridElem')

  // if (currentState === false)
  if (!currentState) {
    gridElems.forEach(gridElem => {
      gridElem.addEventListener('mouseleave', changeColor)
    })
    currentState = true
  } else {
    gridElems.forEach(gridElem => {
      gridElem.removeEventListener('mouseleave', changeColor)
    })
    currentState = false
  }
}

function clearGrid() {
  grid.textContent = ''
}

function reloadGrid() {
  clearGrid()
  setupGrid(currentSize)
}

setupGrid(100)
