// Interactivity demo 2

//zoom the moon
var body = document.querySelector('body')
var button = document.querySelector('.symbol')
var symbol1 = document.querySelector('.symbol-1')
var symbol2 = document.querySelector('.symbol-2')

button.addEventListener('click', switchImg)

function switchImg() {

    if (body.id == 'switchImg') {
      body.id = 'switchback'
    } else {
      body.id = 'switchImg'
      setTimeout(swapImage, 3000)
    }
}

function swapImage() {
  if (symbol1.style.display == 'none') {
    symbol1.style.display = 'block'
    symbol2.style.display = 'none'
  } else {
    symbol2.style.display = 'block'
    symbol1.style.display = 'none'
  }
  body.id = ''
}
