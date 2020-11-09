const canvas = document.querySelector('.canvas')
const canvas0 = document.querySelector('.canvas0')
const canvas1 = document.querySelector('.canvas1')

drawCanvas(canvas)
drawCanvas(canvas0)
drawCanvas(canvas1)

//make a function just to avoid code repetition
function drawCanvas(something) {
    let ctx = something.getContext('2d')
//x, y
    ctx.beginPath()
    ctx.moveTo(90, 70)
    ctx.bezierCurveTo(110, 80, 110, 60, 130, 70)
    ctx.bezierCurveTo(150, 80, 150, 60, 170, 70)
    ctx.bezierCurveTo(190, 80, 190, 60, 210, 70)
 
    ctx.lineWidth = 3
    ctx.strokeStyle = '#eee'
    ctx.stroke()
}
/************************ */
const cards = document.querySelectorAll('.card')
const nav = document.querySelector('.nav')
const left = document.querySelector('.left')
const right = document.querySelector('.right')

let target = 0
show(target)

left.addEventListener('click', function () {
    target--
    show(target)
})
right.addEventListener('click', function () {
    target++
    show(target)
})

function show(a) {
    if (a > 2) {
        a = 0
        target = 0
    }
    if (a < 0) {
        target = 2
        a = 2
    }
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.display = 'none'
        nav.children[i].classList.remove('select')
    }
    cards[a].style.display = 'block'

    nav.children[a].classList.add('select')
}
