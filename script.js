const canvas = document.querySelector('.canvas')
const canvas0 = document.querySelector('.canvas0')
const canvas1 = document.querySelector('.canvas1')

drawCanvas(canvas)
drawCanvas(canvas0)
drawCanvas(canvas1)

//make a function just to avoid code repetition
function drawCanvas(something) {
    let ctx = something.getContext('2d')

    ctx.beginPath()
    ctx.moveTo(80, 70)
    ctx.bezierCurveTo(100, 80, 100, 60, 120, 70)
    ctx.bezierCurveTo(140, 80, 140, 60, 160, 70)
    ctx.bezierCurveTo(180, 80, 180, 60, 200, 70)

    ctx.lineWidth = 2
    ctx.strokeStyle = '#fff'
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
